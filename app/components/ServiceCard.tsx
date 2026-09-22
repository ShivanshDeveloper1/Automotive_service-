import Link from "next/link";
import type { Service } from "../data/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return <article className="service-card"><div className="service-card-top"><span className="category-icon" aria-hidden="true">{service.icon}</span><span className="service-number">{String(index + 1).padStart(2, "0")}</span></div><p className="card-label">{service.category}</p><h3>{service.title}</h3><p>{service.shortDescription}</p><Link className="text-link" href={`/services/${service.slug}`}>Explore service <span aria-hidden="true">↗</span></Link></article>;
}