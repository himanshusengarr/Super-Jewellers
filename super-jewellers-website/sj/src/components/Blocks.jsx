import { Link } from 'react-router-dom';
import { BIZ, wa } from '../data';
import Art from './Art';
import { Reveal } from './Layout';
import { Fb, Ig } from './Icons';

export const Head = ({ eyebrow, title, text, left }) => (<Reveal className={`head ${left ? 'left' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><i className="orn" />{text && <p>{text}</p>}</Reveal>);
export const PageHero = ({ eyebrow, title, text }) => (<section className="phero"><div className="wrap"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><i className="orn" />{text && <p>{text}</p>}</div></section>);
export const Sec = ({ alt, id, children }) => <section id={id} className={alt ? 'alt' : ''}><div className="wrap">{children}</div></section>;
export const Btn = ({ to, href, p, children }) => to ? <Link className={`btn ${p ? 'p' : ''}`} to={to}>{children}</Link> : <a className={`btn ${p ? 'p' : ''}`} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{children}</a>;

export function CollectionCard({ item, cta = 'Explore Collection' }) {
  const link = item.to ? <Link className="more" to={item.to}>{cta} →</Link> : <a className="more" href={wa(`Hello Super Jewellers, I would like to see your ${item.name}.`)} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp →</a>;
  return (<Reveal><article className="card">
    {item.image ? <img className="art" src={item.image} alt={item.name} loading="lazy" /> : <Art type={item.type} tone={item.tone} label={item.name} />}
    <div className="body"><h3>{item.name}</h3><p>{item.desc}</p>{link}</div></article></Reveal>);
}
export const Grid = ({ items, cta }) => <div className="cards">{items.map((i) => <CollectionCard key={i.name} item={i} cta={cta} />)}</div>;
export const ReviewCard = ({ r }) => (<Reveal><figure className="card review"><div className="stars" role="img" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{r.text}”</blockquote><figcaption>— {r.by || 'Customer'}</figcaption></figure></Reveal>);
export const CTA = ({ title, text, children }) => (<section className="cta"><div className="wrap"><Reveal><h2>{title}</h2><i className="orn" /><p>{text}</p><div className="btns c">{children}</div></Reveal></div></section>);
export const Social = () => (<div className="socrow"><a href={BIZ.insta} target="_blank" rel="noopener noreferrer" aria-label="Instagram @super.jewellers"><Ig /></a><a href={BIZ.fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook Super Jewellers Gwalior"><Fb /></a></div>);
export function ContactSection({ map }) {
  return (<div className="cgrid"><Reveal className="info"><h3>Super Jewellers</h3><p>{BIZ.address.map((l) => <span key={l}>{l}<br /></span>)}</p>
    <p><b>Phone:</b> <a href={BIZ.tel}>{BIZ.phone}</a></p><p><b>Opening Hours:</b> {BIZ.hours}</p>
    <div className="btns"><Btn p href={BIZ.tel}>Call Now</Btn><Btn href={wa()}>WhatsApp</Btn><Btn href={BIZ.maps}>Get Directions</Btn></div>
    <p className="sm">Instagram: <a href={BIZ.insta} target="_blank" rel="noopener noreferrer">@super.jewellers</a> · Facebook: Super Jewellers Gwalior</p><Social /></Reveal>
    <Reveal><iframe className="map" title="Super Jewellers location on Google Maps" loading="lazy" src={BIZ.mapEmbed} style={map ? { height: 420 } : undefined} /></Reveal></div>);
}
