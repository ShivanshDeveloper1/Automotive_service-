import Link from "next/link";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "../components/Motion";
import { testimonials } from "../data/testimonials";

export const metadata = {
  title: "Testimonials",
  description:
    "Client testimonials for Pegcity Collisions and Customs, a Winnipeg automotive service business.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Testimonials</p>
            <h1>
              Work that
              <br />
              <em>holds up.</em>
            </h1>
            <p>
              We believe trust is built in the small things: the assessment, the
              communication, and the finished result.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section testimonials-page">
        <div className="container">
          <div className="testimonial-intro">
            <p className="eyebrow">Client perspective</p>
            <h2>
              Stories from the
              <br />
              <span>Pegcity community.</span>
            </h2>
          </div>

          {testimonials.length > 0 ? (
            <Stagger className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <StaggerItem
                  className="testimonial"
                  key={`${testimonial.name}-${testimonial.quote}`}
                >
                  <p className="eyebrow">Client story</p>
                  
                  {/* Rating Stars */}
                  {testimonial.rating && (
                    <div className="testimonial-rating" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                      {"★".repeat(testimonial.rating)}
                    </div>
                  )}

                  <blockquote>“{testimonial.quote}”</blockquote>

                  <div className="testimonial-author">
                    {testimonial.avatar && (
                      <div className="testimonial-avatar">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="avatar-image"
                        />
                      </div>
                    )}
                    <div className="testimonial-info">
                      <p className="testimonial-name">{testimonial.name}</p>
                      {testimonial.vehicle && (
                        <p className="testimonial-vehicle">{testimonial.vehicle}</p>
                      )}
                      {testimonial.service && (
                        <span className="testimonial-tag">{testimonial.service}</span>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="testimonial-empty">
              <div className="empty-mark" aria-hidden="true">
                PC
              </div>
              <div>
                <p className="eyebrow">Coming soon</p>
                <h2>Client stories will be added here.</h2>
                <p>
                  Approved customer testimonials will appear on this page as they
                  become available. Until then, talk to Pegcity directly about
                  your vehicle.
                </p>
                <Link className="button" href="/contact">
                  Start a conversation <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-inner">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2>
              Let&apos;s talk about
              <br />
              <span>your vehicle.</span>
            </h2>
          </div>
          <div className="cta-actions">
            <Link className="button button-dark" href="/contact">
              Contact Pegcity <span aria-hidden="true">↗</span>
            </Link>
            <a className="button button-dark" href="tel:4378930284">
              Call 437-893-0284
            </a>
          </div>
        </div>
      </section>
    </>
  );
}