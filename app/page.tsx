'use client';
import "./page.css";
import { BiTestTube } from "react-icons/bi";
import CodePanel from "./Components/CodePanel/CodePanel";

export default function Home() {
  return (
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

            <p className="code WIP">
              <span className="purple">let</span>
              <span>status</span>
              <span className="purple">=</span>
              <span className="green anim">&apos;WorkInProgress&apos;</span>
            </p>
          </div>
          
          <div className="right">
            <CodePanel/>
          </div>

        </div>
      </div>
    </div>
  );
}

