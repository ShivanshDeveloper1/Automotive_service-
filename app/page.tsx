import Link from "next/link";
import { SectionHeading } from "./components/SectionHeading";
import { HeroReveal, Reveal, Stagger, StaggerItem } from "./components/Motion";

const serviceGroups = [
  {
    icon: "01",
    title: "Auto detailing",
    description: "Interior and exterior cleaning that resets the way your vehicle feels.",
    items: ["Interior detailing", "Exterior detailing", "Full detail"],
    slug: "interior-detailing",
  },
  {
    icon: "02",
    title: "Appearance & protection",
    description: "Refine the finish and add considered protection for daily driving.",
    items: ["Window tinting", "Paint correction", "Ceramic coating"],
    slug: "ceramic-coating",
  },
  {
    icon: "03",
    title: "Collision & body",
    description: "Body-related work for dents, paint, rust, and the damage in between.",
    items: ["Paint", "Dent repair", "Rust removal", "Rocker repair"],
    slug: "paint",
  },
  {
    icon: "04",
    title: "Protection & maintenance",
    description: "Practical care for the roads, weather, and routines your vehicle faces.",
    items: ["Undercoating", "Oil change", "Brake services"],
    slug: "oil-change",
  },
];

const interiorServices = [
  "Upholstery shampoo and steam cleaning",
  "Leather conditioning",
  "Full interior steam cleaning",
  "Complete interior vacuuming",
  "Floor, carpet, and seat cleaning",
  "Deep crevice cleaning",
  "Tough stain and sticky residue removal",
  "Vent blowout",
  "Dashboard, console, and door panel cleaning",
  "Full glass, mirror, and screen cleaning",
  "Odor removal",
];

const detailPrices = [
  ["Sedan", "$100"],
  ["SUV / Pickup", "$120"],
  ["7-Seat SUV", "$140"],
  ["Van", "$150"],
  ["Semi Truck", "$180"],
];

export default function Home() {
  return <>
    <section className="hero"><div className="hero-grid" /><div className="hero-visual" aria-label="Detailed vehicle exterior in a premium automotive setting" role="img"><span>PEG / 01</span></div><div className="container hero-content"><HeroReveal><p className="eyebrow">Winnipeg automotive service</p></HeroReveal><HeroReveal delay={.08}><h1>Care for your<br /><em>vehicle.</em></h1></HeroReveal><HeroReveal delay={.16}><p className="hero-copy">Detailing, collision and body services, protection, and maintenance for Winnipeg drivers.</p><div className="hero-actions"><Link className="button" href="/contact">Book Your Service <span aria-hidden="true">↗</span></Link><a className="button button-quiet" href="tel:4378930284">Call 437-893-0284</a></div></HeroReveal></div><div className="hero-note"><span>01</span><span>Detailing · Repair<br />Protection · Maintenance</span></div></section>
    <section className="trust-strip"><div className="container trust-grid"><Reveal><div><strong>01</strong><span>Quality service</span></div></Reveal><Reveal delay={.05}><div><strong>02</strong><span>Attention to detail</span></div></Reveal><Reveal delay={.1}><div><strong>03</strong><span>Fair prices</span></div></Reveal><Reveal delay={.15}><div><strong>04</strong><span>Winnipeg automotive care</span></div></Reveal></div></section>
    <section className="services-section"><div className="container"><Reveal><SectionHeading eyebrow="What we do" title="Everything your vehicle needs to keep looking right." description="A focused range of automotive services for appearance, repair, protection, and everyday care." /></Reveal><Stagger className="service-category-grid">{serviceGroups.map((group) => <StaggerItem className="service-category" key={group.title}><div className="category-top"><span className="category-icon" aria-hidden="true">{group.icon}</span><span className="category-arrow" aria-hidden="true">↗</span></div><h3>{group.title}</h3><p>{group.description}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul><Link className="text-link" href={`/services/${group.slug}`}>Learn more <span aria-hidden="true">↗</span></Link></StaggerItem>)}</Stagger></div></section>
    <section className="detail-spotlight"><div className="container detail-layout"><div className="detail-copy"><p className="eyebrow">Detailing spotlight</p><h2>Make the inside feel <span>new again.</span></h2><p>Our interior detailing process is built around a thorough reset, from upholstery and carpet to vents, screens, and the places everyday driving leaves behind.</p><ul className="detail-checklist">{interiorServices.map((item) => <li key={item}><span aria-hidden="true">+</span>{item}</li>)}</ul></div><div className="pricing-panel"><div className="pricing-heading"><p className="card-label">Interior detailing</p><span>Starting with the details</span></div><div className="price-list">{detailPrices.map(([vehicle, price]) => <div key={vehicle}><span>{vehicle}</span><strong>{price}</strong></div>)}</div><div className="exterior-price"><span><b>Exterior detailing</b><small>Complete exterior care</small></span><strong>$100</strong></div><p className="pricing-note">Additional charges may apply for excessive pet hair, headliner cleaning, neglected vehicles, heavy stains, mud, sand, debris, additional time, or specialized cleaning. We discuss any additional charges before service begins.</p></div></div></section>
    <section className="value-section"><div className="container value-layout"><div><p className="eyebrow">Why Pegcity</p><h2>Work that respects<br /><span>your vehicle.</span></h2></div><div className="value-list"><div><strong>Professional attention to detail</strong><p>Careful work across the surfaces and systems that matter to your daily drive.</p></div><div><strong>Clean interior and exterior results</strong><p>A more considered finish, inside the cabin and out on the road.</p></div><div><strong>Protection for Winnipeg weather</strong><p>Services shaped around salt, moisture, road grime, heat, and UV exposure.</p></div><div><strong>Fair and transparent pricing</strong><p>Clear pricing information and a conversation before additional work begins.</p></div></div></div></section>
    <section className="weather-section"><div className="container weather-layout"><div><p className="eyebrow">Made for Winnipeg</p><h2>Weather leaves a mark.<br /><span>Protection helps.</span></h2></div><div><p>Road salt, winter conditions, moisture, and corrosion put pressure on a vehicle. In warmer months, UV exposure, heat, and road grime bring a different kind of wear.</p><p>Undercoating, rust removal, ceramic coating, window tinting, and paint correction give you practical ways to care for the vehicle you use every day.</p><Link className="text-link" href="/services">Explore protection services <span aria-hidden="true">↗</span></Link></div></div></section>
    <section className="quote-section"><div className="container quote-grid"><p className="quote-mark">“</p><div><blockquote>When your vehicle matters, the details matter.</blockquote><p className="quote-attribution">Pegcity Collisions & Customs</p></div></div></section>
    <section className="contact-band"><div className="container contact-band-inner"><div><p className="eyebrow">Ready when you are</p><h2>Ready to refresh or<br /><span>protect your vehicle?</span></h2></div><div className="cta-actions"><Link className="button" href="/contact">Contact Pegcity <span aria-hidden="true">↗</span></Link><a className="button button-dark" href="tel:4378930284">Call 437-893-0284</a><a className="button button-dark" href="mailto:Pegcitycustomz@gmail.com">Email us</a></div></div></section>
  </>;
}
