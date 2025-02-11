'use client';
import "./CodePanel.css";

export default function CodePanel() {
  const calculateDateDiff = (birthDate: Date): number => {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    // If the birth month hasn't occurred yet this year, subtract 1 from the age
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };
  
  const birthDate = new Date('2001-01-16');
  const workDate = new Date('2021-02-01'); 

  const age = calculateDateDiff(birthDate);
  const experience = calculateDateDiff(workDate);

  return (
    <div className="code codepanel">
      <div className="header">
        <div className="controls"><span/><span/><span/></div>
        <span>developer.ts</span>
      </div>

      <div className="code">
        <div className="lines">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>

        <div className="content">
          <span><span className="purple">interface</span><span className="blue">Developer</span><span className="yellow">{"{"}</span></span>
          
          <span className="sp1"><span>name:</span> <span className="green" style={{ marginRight: '-8px'}}>&apos;Alexandre Varela&apos;</span>,</span>
          
          <span className="sp1"><span>age:</span> <span className="orange" style={{ marginRight: '-8px'}}>{age}</span>,</span>

          <span className="sp1"><span>experience:</span> <span className="orange" style={{ marginRight: '-8px'}}>{experience}</span>,<div className="cursor"></div> <span className="comment" style={{ marginRight: '-8px', marginLeft: '8px', gap: '0px'}}>years</span></span>
          
          <span className="sp1"><span>roles:</span>[<span className="green" style={{ marginRight: '-8px', marginLeft: '-8px'}}>&apos;QA Engineer&apos;</span>,<span className="green" style={{ marginRight: '-8px'}}>&apos;Full Stack Developer&apos;</span>],</span>
          
          <span className="sp1"><span>skills:</span><span className="purple">{"{"}</span></span>

          <span className="sp2"><span>testing:</span>[<span className="green" style={{ marginRight: '-8px', marginLeft: '-8px'}}>&apos;Manual&apos;</span>,<span className="green" style={{ marginRight: '-8px'}}>&apos;Automated&apos;</span>],</span>
          
          <span className="sp2"><span>development:</span>[<span className="green" style={{ marginRight: '-8px', marginLeft: '-8px'}}>&apos;Backend&apos;</span>,<span className="green" style={{ marginRight: '-8px'}}>&apos;Frontend&apos;</span>],</span>
          
          <span className="sp1"><span className="purple">{"}"}</span></span>

          <span><span className="yellow">{"}"}</span></span>
        </div>
      </div>
    </div>
  );
}

