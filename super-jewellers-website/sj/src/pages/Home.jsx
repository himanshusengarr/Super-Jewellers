import { BIZ, COLLECTIONS, FEATURED, REVIEWS, WHY, wa } from '../data';
import Art from '../components/Art';
import { Reveal, Seo } from '../components/Layout';
import { Btn, ContactSection, CTA, Grid, Head, ReviewCard, Sec } from '../components/Blocks';

export default function Home() {
  return (<>
    <Seo title="Super Jewellers Gwalior | Gold & Silver Jewellery" desc="Explore gold, silver and bridal jewellery at Super Jewellers, Morar, Gwalior. Visit our showroom for elegant jewellery collections and personalised service." />
    <section className="hero"><div className="wrap hg">
      <Reveal><span className="eyebrow">Morar · Gwalior</span><h1>Jewellery That Celebrates <em>Every Moment</em></h1>
        <p className="lead">Discover elegant gold and silver jewellery crafted for weddings, celebrations and everyday moments.</p>
        <div className="btns"><Btn p to="/collections">Explore Collections</Btn><Btn to="/contact">Visit Our Showroom</Btn></div>
        <div className="line">GOLD • SILVER • BRIDAL • CUSTOM JEWELLERY</div></Reveal>
      <Reveal><div className="archw"><div className="arch"><img src="/images/showroom-interior.jpg" alt="Inside the Super Jewellers showroom in Morar, Gwalior" width="1000" height="930" /></div></div></Reveal>
    </div></section>

    <Sec alt><div className="two">
      <Reveal><div className="frame"><img src="/images/showroom-exterior.jpg" alt="Super Jewellers showroom entrance, Morar, Gwalior" loading="lazy" /></div></Reveal>
      <Reveal><span className="eyebrow">About Us</span><h2>A Jewellery Destination in Gwalior</h2><i className="orn l" />
        <p>Super Jewellers serves customers from its showroom in Morar, Gwalior, with gold and silver jewellery for weddings, celebrations and everyday wear.</p>
        <p>Founded and led by Jinendra Jain, Super Jewellers focuses on providing customers with a refined jewellery-buying experience, a diverse collection and transparent service.</p>
        <Btn p to="/about">Know More</Btn></Reveal></div></Sec>

    <Sec><Head eyebrow="Collections" title="Jewellery Collections" text="Find the right piece for your occasion, from everyday classics to wedding jewellery." /><Grid items={COLLECTIONS} /></Sec>

    <Sec alt><Head eyebrow="Featured" title="Designed for Your Special Moments" />
      <div className="feat">{FEATURED.map((f) => <Reveal key={f.name}><div className="ft"><Art type={f.type} tone={f.tone} label={f.name} /><h3>{f.name}</h3></div></Reveal>)}</div></Sec>

    <Sec><Head eyebrow="Why Us" title="Why Choose Super Jewellers" />
      <div className="why">{WHY.map(([t, d], i) => <Reveal key={t}><div className="wcard"><span className="num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></Sec>

    <Sec alt><div className="two rev">
      <Reveal><div className="archw sm"><div className="arch"><img src="/images/owner.jpg" alt="Jinendra Jain, owner of Super Jewellers" loading="lazy" style={{ objectPosition: 'top' }} /></div></div></Reveal>
      <Reveal><span className="eyebrow">Meet the Owner</span><h2>Jinendra Jain</h2><i className="orn l" /><p className="role">Owner, Super Jewellers</p>
        <blockquote className="quote">“At Super Jewellers, every purchase should feel personal, transparent and memorable. Our aim is to help customers find jewellery that suits their occasion, style and expectations.”</blockquote></Reveal></div></Sec>

    <Sec><Head eyebrow="Customer Feedback" title="What Our Customers Say" />
      <div className="cards">{REVIEWS.map((r, i) => <ReviewCard key={i} r={r} />)}</div>
      <div className="mid"><Btn href={BIZ.moreReviews}>View More Reviews</Btn></div></Sec>

    <CTA title="Making Charges & Pricing" text="Ask our team about current making charges and jewellery pricing."><Btn p href={wa("Hello Super Jewellers, I would like today's gold rate and making charge details.")}>Get Today's Details</Btn></CTA>

    <Sec alt><div className="two"><Reveal><span className="eyebrow">Bridal</span><h2>Make Your Wedding Shine</h2><i className="orn l" /><p>Explore jewellery designed for weddings, celebrations and unforgettable moments.</p><Btn p to="/bridal">Explore Bridal Collection</Btn></Reveal>
      <Reveal><span className="eyebrow">Custom Jewellery</span><h2>Your Design. Your Jewellery.</h2><i className="orn l" /><p>Have a design in mind? Talk to our team about creating jewellery tailored to your preferences.</p><Btn p to="/custom-jewellery">Discuss Your Design</Btn></Reveal></div></Sec>

    <Sec><Head eyebrow="Contact" title="Visit Super Jewellers" /><ContactSection /></Sec>
  </>);
}
