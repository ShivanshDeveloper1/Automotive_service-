import Link from "next/link";
import { Reveal } from "../components/Motion";
import { ContactForm } from "../components/ContactForm";

export const metadata = { title: "Contact", description: "Contact Pegcity Collisions and Customs in Winnipeg for detailing, collision repair, protection, and maintenance." };

export default function ContactPage() {
  return <><section className="page-hero"><div className="container"><Reveal><p className="eyebrow">Contact Pegcity</p><h1>Let&apos;s get your<br /><em>vehicle right.</em></h1><p>Tell us a little about what you need and we&apos;ll start the conversation.</p></Reveal></div></section><section className="page-section light-page"><div className="container contact-grid"><div><p className="eyebrow">Find us in Winnipeg</p><h2>Start with<br /><span>a conversation.</span></h2><div className="contact-details"><div><strong>Business</strong><span>Pegcity Collisions and Customs</span></div><div><strong>Address</strong><span>770 Mission Street<br />Winnipeg, MB R2J 0A3, Canada</span></div><div><strong>Phone</strong><Link href="tel:4378930284">437-983-0284</Link></div><div><strong>Email</strong><Link href="mailto:Pegcitycustomz@gmail.com">Pegcitycustomz@gmail.com</Link></div></div></div><ContactForm /></div></section></>;
}