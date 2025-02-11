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
            <div className="badge"><BiTestTube/>Full Stack and QA Engineer</div>

            <p className="comment">Initialize developer</p>
            <h1 className="name code">
              <span className="purple">Alexandre</span>
              <span className="blue">Varela</span>
            </h1>
            
            <p className="code role">{"<"}<span className="red">AnAwesomeGuy</span>{"/>"}</p>
            
            <p className="description">Building elegant solutions to complex problems with clean, maintainable code. Specialized in full-stack development and quality assurance, both manual and automated testing.</p>
          </div>
          
          <div className="right">
            <CodePanel/>
          </div>
        </div>
      </div>
    </div>
  );
}

