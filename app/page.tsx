'use client';
import "./page.css";
import { BiTestTube } from "react-icons/bi";
import CodePanel from "./Components/CodePanel/CodePanel";
import Navigation from "./Components/Navigation/Navigation";
import myself from '@/public/me.png';
import Image from "next/image";
import { PiArrowClockwise, PiBracketsAngle, PiTestTube } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <Navigation/>
      <div className='container'>
        <div className="main">
          <div className="info">
            <div className="left">
              <div className="badge"><BiTestTube/>QA Engineer and Developer</div>

              <p className="comment">Hello, I&apos;m</p>
              <h1 className="name code">
                <span className="purple">Alexandre</span>
                <span className="blue">Varela</span>
              </h1>
              
              <p className="code role">{"<"}<span className="red">ReleaseGatekeeper</span>{"/>"}</p>
              
              <p className="description">QA specialist by day, hobbyist developer by night—squashing bugs, ensuring quality, and building cool projects in between.</p>
            </div>
            
            <div className="right">
              <CodePanel/>
            </div>

          </div>
        </div>

        <div className="about-me">
          <div className="info">
            <div className="left">
              <h2 className="title"><span>01. </span> About Me</h2>
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
                  <h3><PiArrowClockwise className="blue"/> Automated testing</h3>
                  <ul style={{columns: 2}}>
                    <li>SerenityBDD</li>
                    <li>BackstopJS</li>
                    <li>Selenium</li>
                    <li>Cypress</li>
                    <li>Github Actions</li>
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
      </div>
    </>
  );
}

