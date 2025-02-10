'use client';
import "./page.css";

export default function Home() {
  return (
    <div className='coming'>
      <span>
        Alexandre <span>Varela</span>
      </span>

      <hr/>
      
      <div><span>{"//"}</span> Coming soon!!!</div> 

      <div className="tag">
        <span className="purple">let</span>
        <span className="white">status</span>
        <span className="purple">=</span>
        <span className="green">&quot;in development&quot;</span>
      </div>
    </div>
  );
}

