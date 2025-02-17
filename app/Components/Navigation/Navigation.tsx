'use client';
import { GoCommandPalette } from "react-icons/go";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      
      <div className="items">
      <div className="portfolio"><GoCommandPalette/> ~/portfolio</div>
        <div className="item"><span>01.</span>about</div>
        <div className="item"><span>02.</span>projects</div>
        <div className="item"><span>03.</span>certifications</div>
        <div className="item"><span>04.</span>contact</div>
      </div>
    </div>
  );
}

