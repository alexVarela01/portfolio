'use client';
import { useState } from "react";
import "./Navigation.css";
import { MdMenu } from "react-icons/md";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  function scrollAnchor(anchor: string) {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="navigation">
      
      <div className="items">
        <div className="portfolio" onClick={() => scrollAnchor('home')}>~/portfolio</div>
        <MdMenu className='menu' onClick={() => setOpen(!open)}/>
        
        
        <div className={'options ' + (!open ? 'mobile-close' : '')}>
          <div className="item" onClick={() => scrollAnchor('about')}><span>01.</span>about</div>
          <div className="item" onClick={() => scrollAnchor('certifications')}><span>02.</span>certifications</div>
          <div className="item" onClick={() => scrollAnchor('projects')}><span>03.</span>projects</div>
          <div className="item" onClick={() => scrollAnchor('contact')}><span>04.</span>contact</div>
        </div>
      </div>
    </div>
  );
}

