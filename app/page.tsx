'use client';
import "./page.css";
import { BiCheckCircle, BiEnvelope, BiTestTube } from "react-icons/bi";
import CodePanel from "./Components/CodePanel/CodePanel";
import Navigation from "./Components/Navigation/Navigation";
import myself from '@/public/me.png';
import Image from "next/image";
import { PiArrowClockwise, PiBracketsAngle, PiTestTube } from "react-icons/pi";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiLinkedin } from "react-icons/fi";
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

const colors = [
  "c792ea",
  "ffcb6b",
  "89ddff",
  "e1426c",
  "c3e88d",
  "f78c65",
  "676e95",
  "292d3e"
]

export default function Home() {

  // get projects from data.json
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects)
        setCertifications(data.certifications)
      })
      .catch(error => console.error(error));
  }, []);



  return (
    <>
      <Navigation/>
      <div className='container'>
        <div id="home" className="main">
          <div className="info">
            <div className="left">
              <div className="badge"><BiTestTube/>QA Engineer and Developer</div>

              <p className="comment">Hello, I&apos;m</p>
              <h1 className="name code">
                <span className="purple">Alexandre</span>
                <span className="blue">Varela</span>
              </h1>
              
              <p className="code role">{"<"}<span className="red">ReleaseGatekeeper</span>{"/>"}</p>
              
              <p className="description">QA specialist by day, hobbyist developer by night—squashing bugs, ensuring quality, and building cool projects along the way.</p>
            </div>
            
            <div className="right">
              <CodePanel/>
            </div>

          </div>
        </div>

        <div id="about" className="about-me">
          <div className="info">
            <div className="left">
              <h2 className="title"><span>01. </span> about.me</h2>
              <p className="description">With 4 years of experience as a full-time QA engineer and a hobbyist developer, I bring a strong focus on delivering high-quality, reliable software while continuously refining my development skills to create well-crafted applications.</p>

              <div className="skills">
                <div className="skill">
                  <h3><PiBracketsAngle className="purple"/> Development</h3>

                  <ul>
                    <li>Full Stack Development</li>
                    <li>Java</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                  </ul>
                </div>

                <div className="skill">
                  <h3><PiTestTube className="yellow"/> Testing</h3>
                  
                  <ul>
                    <li>Manual Testing</li>
                    <li>Automated Testing</li>
                    <li>Test Planning</li>
                    <li>CI/CD Integration</li>
                  </ul>
                </div>

                <div className="skill">
                  <h3><PiArrowClockwise className="blue"/> Automated Testing</h3>
                  <ul style={{columns: 2}}>
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
              <div className="img">
                <Image src={myself} alt="Register"></Image>
              </div>
            </div>

          </div>
        </div>

        <div id="certifications" className="certifications">
          <div className="info">
            <h2 className="title"><span>02. </span> certifications</h2>
            <div className="certifications-list">
              {certifications.map((certification: Certification, index) => (
                <div className="certification" key={index} style={{ "--color": "#"+colors[index] } as React.CSSProperties}>

                  <div className="header">
                    <BiCheckCircle/>
                    <h3>{certification.name}</h3>

                    <Link href={certification.url}><FiExternalLink/></Link>
                  </div>
                  <p className="description">{certification.subname}</p>    

                  <div className="date">       
                    <p>{certification.date}</p>
                    •
                    {certification.expire ? <p>{certification.expire}</p> : <p>No Expiration</p>}
                  </div>      
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="projects" className="projects">
          <div className="info">
            <h2 className="title"><span>03. </span> featured.projects</h2>
            
            <div className="projects-list">
              {projects.map((project: Project, index) => (
                <div className="project" key={index}>

                  <div className="header">
                    <h3>{project.name}</h3>
                    {project.github && <Link href={project.github}><FiGithub/></Link>}
                    <Link href={project.url}><FiExternalLink/></Link>
                  </div>
                  <p className="description">{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="contact" className="contact">
          <div className="info">
            <h2 className="title"><BiEnvelope/> get<span>.</span>in<span>.</span>touch</h2>
            <p>Feel free to reach out! Whether you have questions, want to collaborate, or just want to chat about development, I’d love to hear from you. Let’s connect!</p>
          
            <div className="socials">
              <Link href="https://github.com/alexVarela01">
                <FiGithub/>
                GitHub
              </Link>

              <Link href="https://www.linkedin.com/in/alexandre-varela-584879200/">
                <FiLinkedin/>
                LinkedIn
              </Link>

              <Link href="mailto:varela.alexandre01@gmail.com">
                <BiEnvelope/>
                Email
              </Link>
            </div>
          </div>
        </div>

        <footer>
          <p>© 2024 Alexandre Varela. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

