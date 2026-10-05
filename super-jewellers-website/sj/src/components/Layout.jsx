import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BIZ, wa } from '../data';
import { Fb, Ig, Wa } from './Icons';

const NAV = [['/', 'Home'], ['/about', 'About'], ['/collections', 'Collections'], ['/bridal', 'Bridal'], ['/custom-jewellery', 'Custom Jewellery'], ['/reviews', 'Reviews'], ['/contact', 'Contact']];

export function Seo({ title, desc }) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', desc);
  }, [title, desc]);
  return null;
}
export function Reveal({ children, className = '' }) {
  const r = useRef(null), [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.12 });
    r.current && io.observe(r.current);
    return () => io.disconnect();
  }, []);
  return <div ref={r} className={`fade ${on ? 'in' : ''} ${className}`}>{children}</div>;
}
export function Header() {
  const [open, setOpen] = useState(false); const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [pathname]);
  return (<header>
    <div className="topbar"><div className="wrap"><span>Morar, Gwalior</span><span>{BIZ.phone} · {BIZ.hours}</span></div></div>
    <div className="wrap nav">
      <Link to="/" className="logo">SUPER JEWELLERS</Link>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      <nav className={open ? 'open' : ''} aria-label="Main"><ul>
        {NAV.map(([to, l]) => <li key={to}><NavLink to={to} end={to === '/'}>{l}</NavLink></li>)}
        <li><Link className="btn p" to="/contact">Visit Showroom</Link></li></ul></nav>
    </div></header>);
}
export function Footer() {
  return (<footer><div className="wrap"><div className="fg">
    <div><div className="logo gold">SUPER JEWELLERS</div><p>Gold • Silver • Bridal • Custom Jewellery</p></div>
    <div><h4>Quick Links</h4><ul>{[['/', 'Home'], ['/about', 'About'], ['/collections', 'Collections'], ['/bridal', 'Bridal'], ['/reviews', 'Reviews'], ['/contact', 'Contact']].map(([t, l]) => <li key={t}><Link to={t}>{l}</Link></li>)}</ul></div>
    <div><h4>Contact</h4><p><a href={BIZ.tel}>{BIZ.phone}</a></p><p>7 Number Chauraha, Kalpana Nagar, Raghavpuram, Morar, Gwalior, Madhya Pradesh – 474006</p></div>
    <div><h4>Follow Us</h4><ul className="soc"><li><a href={BIZ.insta} target="_blank" rel="noopener noreferrer"><Ig /> Instagram</a></li><li><a href={BIZ.fb} target="_blank" rel="noopener noreferrer"><Fb /> Facebook</a></li></ul></div>
  </div><div className="copy">© 2026 Super Jewellers. All Rights Reserved.</div></div></footer>);
}
export const WhatsAppButton = () => <a className="wa" href={wa()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Super Jewellers on WhatsApp"><Wa /></a>;
