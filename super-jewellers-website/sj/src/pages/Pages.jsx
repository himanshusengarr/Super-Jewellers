import { BIZ, BRIDAL_ITEMS, COLLECTIONS, GOLD_ITEMS, REVIEWS, SILVER_ITEMS, WHY, wa } from '../data';
import { Link } from 'react-router-dom';
import { Reveal, Seo } from '../components/Layout';
import { Btn, ContactSection, CTA, Grid, Head, PageHero, ReviewCard, Sec } from '../components/Blocks';

export const About = () => (<>
  <Seo title="About Super Jewellers | Morar, Gwalior" desc="Super Jewellers is a gold and silver jewellery showroom in Morar, Gwalior, led by Jinendra Jain." />
  <PageHero eyebrow="About Us" title="A Jewellery Destination in Gwalior" text="Serving customers from our showroom in Morar, Gwalior." />
  <Sec><div className="two"><Reveal><div className="frame"><img src="/images/showroom-exterior.jpg" alt="Super Jewellers showroom entrance" loading="lazy" /></div></Reveal>
    <Reveal><p>Super Jewellers serves customers from its showroom in Morar, Gwalior, offering gold and silver jewellery for weddings, celebrations and everyday wear.</p>
      <p>Founded and led by Jinendra Jain, Super Jewellers focuses on providing customers with a refined jewellery-buying experience, a diverse collection and transparent service.</p>
      <Btn p to="/contact">Plan Your Visit</Btn></Reveal></div></Sec>
  <Sec alt><div className="two rev"><Reveal><div className="archw sm"><div className="arch"><img src="/images/owner.jpg" alt="Jinendra Jain, owner of Super Jewellers" loading="lazy" style={{ objectPosition: 'top' }} /></div></div></Reveal>
    <Reveal><span className="eyebrow">Meet the Owner</span><h2>Jinendra Jain</h2><p className="role">Owner, Super Jewellers</p>
      <blockquote className="quote">“At Super Jewellers, every purchase should feel personal, transparent and memorable. Our aim is to help customers find jewellery that suits their occasion, style and expectations.”</blockquote></Reveal></div></Sec>
  <Sec><Head eyebrow="Why Us" title="Why Choose Super Jewellers" /><div className="why">{WHY.map(([t, d], i) => <Reveal key={t}><div className="wcard"><span className="num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></Sec>
</>);

export const Collections = () => (<>
  <Seo title="Jewellery Collections | Super Jewellers Gwalior" desc="Gold, silver, bridal, rings, earrings, bangles and necklaces at Super Jewellers, Morar, Gwalior." />
  <PageHero eyebrow="Collections" title="Jewellery Collections" text="Explore our gold, silver and bridal jewellery categories." />
  <Sec><Grid items={COLLECTIONS} /></Sec>
</>);

export const Gold = () => (<>
  <Seo title="Gold Jewellery | Super Jewellers Gwalior" desc="Gold rings, earrings, bangles and necklaces at Super Jewellers, Morar, Gwalior." />
  <PageHero eyebrow="Gold" title="Gold Jewellery" text="Rings, earrings, bangles, necklaces and other gold jewellery." />
  <Sec><Grid items={GOLD_ITEMS} /></Sec>
  <CTA title="Looking for something specific?" text="Ask our team about current making charges and jewellery pricing."><Btn p href={wa('Hello Super Jewellers, I would like details on your gold jewellery.')}>Get Today's Details</Btn><Btn to="/contact">Visit Showroom</Btn></CTA>
</>);

export const Silver = () => (<>
  <Seo title="Silver Jewellery & Articles | Super Jewellers Gwalior" desc="Silver jewellery and traditional silver articles at Super Jewellers, Morar, Gwalior." />
  <PageHero eyebrow="Silver" title="Silver Jewellery" text="Silver jewellery and traditional silver articles." />
  <Sec><Grid items={SILVER_ITEMS} /></Sec>
  <CTA title="Silver for gifting and everyday" text="Talk to our team about silver coins, articles and jewellery."><Btn p href={wa('Hello Super Jewellers, I would like details on your silver jewellery and articles.')}>WhatsApp Us</Btn></CTA>
</>);

export const Bridal = () => (<>
  <Seo title="Bridal Jewellery | Super Jewellers Gwalior" desc="Bridal necklaces, earrings, bangles and wedding sets at Super Jewellers, Morar, Gwalior." />
  <PageHero eyebrow="Bridal" title="Make Your Wedding Shine" text="Explore jewellery designed for weddings, celebrations and unforgettable moments." />
  <Sec><Grid items={BRIDAL_ITEMS} /></Sec>
  <CTA title="Planning a wedding?" text="Visit our showroom or message us to explore bridal jewellery."><Btn p href={wa('Hello Super Jewellers, I would like to explore your bridal collection.')}>Explore Bridal Collection</Btn><Btn to="/contact">Visit Showroom</Btn></CTA>
</>);

export const Custom = () => (<>
  <Seo title="Custom Jewellery | Super Jewellers Gwalior" desc="Discuss custom jewellery designs with the team at Super Jewellers, Morar, Gwalior." />
  <PageHero eyebrow="Custom Jewellery" title="Your Design. Your Jewellery." text="Have a design in mind? Talk to our team about creating jewellery tailored to your preferences." />
  <Sec><Reveal className="mid"><p>Jewellery can be created according to customer requirements, where applicable. Share your idea with us on WhatsApp or visit the showroom.</p>
    <div className="btns c"><Btn p href={wa('Hello Super Jewellers, I would like to discuss a custom jewellery design.')}>Discuss Your Design</Btn><Btn to="/contact">Visit Showroom</Btn></div></Reveal></Sec>
</>);

export const Reviews = () => (<>
  <Seo title="Customer Reviews | Super Jewellers Gwalior" desc="Customer feedback for Super Jewellers, Morar, Gwalior." />
  <PageHero eyebrow="Customer Feedback" title="What Our Customers Say" />
  <Sec><div className="cards">{REVIEWS.map((r, i) => <ReviewCard key={i} r={r} />)}</div><div className="mid"><Btn href={BIZ.moreReviews}>View More Reviews</Btn></div></Sec>
</>);

export const Contact = () => (<>
  <Seo title="Contact Super Jewellers | Morar, Gwalior" desc="Visit Super Jewellers at 7 Number Chauraha, Kalpana Nagar, Raghavpuram, Morar, Gwalior. Call +91 62662 71742." />
  <PageHero eyebrow="Contact" title="Visit Super Jewellers" />
  <Sec><ContactSection map /></Sec>
</>);

export const NotFound = () => (<><Seo title="Page not found | Super Jewellers" desc="Page not found." /><PageHero eyebrow="404" title="Page not found" /><Sec><div className="mid"><Link className="btn p" to="/">Back to Home</Link></div></Sec></>);
