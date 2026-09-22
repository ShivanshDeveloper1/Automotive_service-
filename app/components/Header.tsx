"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Testimonials", "/testimonials"],
  ["Contact", "/contact"],
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" onClick={() => setIsOpen(false)}>
          <span className="wordmark-mark">PC</span>
          <span>
            Pegcity <strong>Collisions</strong>
            <small>& Customs</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>
        <nav id="site-navigation" className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)}>{label}</Link>
          ))}
          <a className="button button-small" href="tel:4378930284">Call now <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}