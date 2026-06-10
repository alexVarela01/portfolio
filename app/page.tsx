'use client';
import "./page.css";
import { BiCheckCircle, BiEnvelope } from "react-icons/bi";
import CodePanel from "./Components/CodePanel/CodePanel";
import Navigation from "./Components/Navigation/Navigation";
import myself from '@/public/me.png';
import Image from "next/image";
import { PiArrowClockwise, PiBracketsAngle, PiTestTube } from "react-icons/pi";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGitBranch, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

interface Project {
  name: string;
  url: string;
  github?: string;
  description: string;
  tags: string[];
}

interface Certification {
  name: string;
  subname: string;
  date: string;
  url: string;
  expire?: string;
}

const accentColors = [
  "c792ea",
  "ffcb6b",
  "89ddff",
  "e1426c",
  "c3e88d",
  "f78c65",
];

const projectColors = ["c3e88d", "89ddff", "c792ea", "f78c65"];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(r => r.json())
      .then(data => {
        setProjects(data.projects);
        setCertifications(data.certifications);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.section-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navigation />
      <div className="container">

        {/* Hero */}
        <section id="home" className="main">
          <div className="info">
            <div className="left">
              <p className="comment">Hello, I&apos;m</p>
              <h1 className="name code">
                <span className="purple">Alexandre</span>
                <span className="blue">Varela</span>
              </h1>
              <p className="code role">{"<"}<span className="red">ReleaseGatekeeper</span>{"/>"}</p>
              <p className="description">QA specialist by day, hobbyist developer by night — squashing bugs, ensuring quality, and building cool projects along the way.</p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={() => scrollTo('contact')}>get.in.touch</button>
                <Link href="https://github.com/alexVarela01" target="_blank" className="btn-secondary"><FiGithub /> GitHub</Link>
              </div>
            </div>
            <div className="right">
              <CodePanel />
            </div>
          </div>
          <div className="scroll-hint">
            <span className="comment">scroll to explore</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* About */}
        <section id="about" className="about-me section-animate">
          <div className="info">
            <div className="left">
              <h2 className="title"><span>01. </span>about.me</h2>
              <p className="description">With 4 years of experience as a full-time QA engineer and a hobbyist developer, I bring a strong focus on delivering high-quality, reliable software while continuously refining my development skills to create well-crafted applications.</p>
              <div className="skills">
                <div className="skill">
                  <h3><PiBracketsAngle className="purple" /> Development</h3>
                  <ul>
                    <li>Full Stack Development</li>
                    <li>Java</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                  </ul>
                </div>
                <div className="skill">
                  <h3><PiTestTube className="yellow" /> Testing</h3>
                  <ul>
                    <li>Manual Testing</li>
                    <li>Automated Testing</li>
                    <li>Test Planning</li>
                    <li>CI/CD Integration</li>
                  </ul>
                </div>
                <div className="skill">
                  <h3><PiArrowClockwise className="blue" /> Frameworks</h3>
                  <ul style={{ columns: 2 }}>
                    <li>SerenityBDD</li>
                    <li>BackstopJS</li>
                    <li>Selenium</li>
                    <li>Cypress</li>
                    <li>GitHub Actions</li>
                    <li>Jenkins</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="photo-panel">
                <div className="photo-panel-header">
                  <div className="controls"><span /><span /><span /></div>
                  <span className="panel-title">me.png</span>
                </div>
                <Image src={myself} alt="Alexandre Varela" />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="certifications section-animate">
          <div className="info">
            <h2 className="title"><span>02. </span>certifications</h2>
            <div className="certifications-timeline">
              {certifications.map((cert: Certification, i) => (
                <div className="cert-item" key={i} style={{ "--color": "#" + accentColors[i % accentColors.length] } as React.CSSProperties}>
                  <div className="cert-node"><BiCheckCircle /></div>
                  <div className="cert-body">
                    <div className="cert-header">
                      <h3>{cert.name}</h3>
                      <Link href={cert.url} target="_blank"><FiExternalLink /></Link>
                    </div>
                    <p className="description">{cert.subname}</p>
                    <div className="date">
                      <p>{cert.date}</p>
                      <span>•</span>
                      <p>{cert.expire ?? "No Expiration"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="projects section-animate">
          <div className="info">
            <h2 className="title"><span>03. </span>featured.projects</h2>
            <div className="projects-list">
              {projects.map((project: Project, i) => (
                <div className="project-panel" key={i} style={{ "--color": "#" + projectColors[i % projectColors.length] } as React.CSSProperties}>
                  <div className="panel-tab">
                    <span className="tab-dot" />
                    <span className="tab-name">
                      {project.name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_$/, '')}.ts
                    </span>
                    <div className="panel-links">
                      {project.github && <Link href={project.github} target="_blank"><FiGithub /></Link>}
                      {project.url && <Link href={project.url} target="_blank"><FiExternalLink /></Link>}
                    </div>
                  </div>
                  <div className="panel-content">
                    <h3 className="panel-title">{project.name}</h3>
                    <p className="panel-description">{project.description}</p>
                    <div className="panel-tags">
                      {project.tags.map((tag, j) => (
                        <span key={j}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact section-animate">
          <div className="info">
            <h2 className="title"><BiEnvelope /> get<span>.</span>in<span>.</span>touch</h2>
            <p>Feel free to reach out! Whether you have questions, want to collaborate, or just want to chat about development, I&apos;d love to hear from you.</p>
            <div className="terminal-block">
              <div className="terminal-prompt">
                <span className="t-dollar">$</span>
                <span className="t-cmd">contact <span className="green">--channels</span></span>
                <span className="cursor-blink" />
              </div>
              <div className="socials">
                <Link href="https://github.com/alexVarela01" target="_blank">
                  <FiGithub />
                  GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/alexandre-varela-584879200/" target="_blank">
                  <FiLinkedin />
                  LinkedIn
                </Link>
                <Link href="mailto:varela.alexandre01@gmail.com">
                  <BiEnvelope />
                  Email
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* VS Code Status Bar */}
        <footer>
          <div className="status-left">
            <span className="status-item"><FiGitBranch /> main</span>
            <span className="status-item">0 errors, 0 warnings</span>
          </div>
          <div className="status-right">
            <span className="status-item">UTF-8</span>
            <span className="status-item">TypeScript JSX</span>
            <span className="status-item">© 2026 Alexandre Varela</span>
          </div>
        </footer>

      </div>
    </>
  );
}
