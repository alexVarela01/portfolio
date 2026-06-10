'use client';
import { useState, useEffect } from "react";
import "./Navigation.css";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const ids = ['about', 'certifications', 'projects', 'contact'];

    function onScroll() {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const atBottom = scrollY >= maxScroll - 100;

      if (atBottom) {
        setActive('contact');
        return;
      }

      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 80 <= scrollY) current = id;
      }
      setActive(current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollAnchor(anchor: string) {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  }

  return (
    <div className="navigation">
      <div className="items">
        <div className="portfolio" onClick={() => scrollAnchor('home')}>~/portfolio</div>
        {open
          ? <MdClose className='menu' onClick={() => setOpen(false)} />
          : <MdMenu className='menu' onClick={() => setOpen(true)} />
        }
        <div className={'options ' + (!open ? 'mobile-close' : '')}>
          <div className={"item" + (active === 'about' ? ' active' : '')} onClick={() => scrollAnchor('about')}><span>01.</span>about</div>
          <div className={"item" + (active === 'certifications' ? ' active' : '')} onClick={() => scrollAnchor('certifications')}><span>02.</span>certifications</div>
          <div className={"item" + (active === 'projects' ? ' active' : '')} onClick={() => scrollAnchor('projects')}><span>03.</span>projects</div>
          <div className={"item" + (active === 'contact' ? ' active' : '')} onClick={() => scrollAnchor('contact')}><span>04.</span>contact</div>
        </div>
      </div>
    </div>
  );
}
