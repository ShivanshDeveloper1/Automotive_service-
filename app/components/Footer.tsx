import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-kicker">Winnipeg, Manitoba</p>
          <h2>Pegcity <span>Collisions</span><br />& Customs</h2>
          <p>Careful automotive service for the way your vehicle looks, feels, and moves through the city.</p>
        </div>
        <div><p className="footer-label">Explore</p><nav className="footer-links"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/testimonials">Testimonials</Link><Link href="/contact">Contact</Link></nav></div>
        <div><p className="footer-label">Contact</p><address className="footer-contact"><span>770 Mission Street<br />Winnipeg, MB R2J 0A3</span><a href="tel:4378930284">437-893-0284</a><a href="mailto:Pegcitycustomz@gmail.com">Pegcitycustomz@gmail.com</a></address></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Pegcity Collisions and Customs</span><span>Built for Winnipeg roads.</span></div>
    </footer>
  );
}