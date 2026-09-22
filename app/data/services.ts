export type ServicePrice = {
  label: string;
  price: string;
};

export type Service = {
  slug: string;
  title: string;
  category: "Detailing" | "Window Tint & Appearance" | "Collision & Body Repair" | "Rust & Winter Protection" | "Maintenance";
  icon: string;
  shortDescription: string;
  longDescription: string;
  includes: string[];
  benefits: string[];
  prices?: ServicePrice[];
  pricingNote?: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: "interior-detailing",
    title: "Interior Detailing",
    category: "Detailing",
    icon: "01",
    shortDescription: "A thorough interior reset for upholstery, carpets, surfaces, glass, and the tight spaces daily driving leaves behind.",
    longDescription: "Interior detailing is a complete clean for the cabin, combining steam, shampoo, conditioning, vacuuming, and careful surface work to refresh the way your vehicle feels inside.",
    includes: [
      "Upholstery shampoo and steam cleaning",
      "Leather conditioning to protect and rejuvenate leather surfaces",
      "Full interior steam cleaning & auto detailing near me",
      "Complete interior vacuuming and deep crevice blowout",
      "Floor, carpet, and seat deep cleaning",
      "Tough stain, pet hair, and sticky residue removal",
      "Dashboard, console, and door panel restoration",
      "Full glass, mirror, and screen cleaning",
      "Odor removal and cabin sanitization"
    ],
    benefits: ["A cleaner, fresher cabin", "Careful attention to overlooked areas", "Clear pricing by vehicle type"],
    prices: [{ label: "Sedan", price: "$100" }, { label: "SUV / Pickup", price: "$120" }, { label: "7-Seat SUV", price: "$140" }, { label: "Van", price: "$150" }, { label: "Semi Truck", price: "$180" }],
    pricingNote: "Additional charges may apply for excessive pet hair, headliner cleaning, excessively dirty or neglected vehicles, heavy stains, mud, sand, debris, extra time, or specialized cleaning. Additional charges are discussed before service begins.",
    cta: "Book interior detailing",
  },
  {
    slug: "exterior-detailing",
    title: "Exterior Detailing",
    category: "Detailing",
    icon: "02",
    shortDescription: "Hand-finished exterior care to lift away everyday road grime and restore a clean, fresh appearance.",
    longDescription: "Exterior detailing brings together a careful hand wash, wheel and tire cleaning, foam wash, hand dry, and exterior wipe-down for a cleaner finish inside the city and beyond.",
  includes: [
      "Exterior hand wash & foam wash",
      "Focused wheel and tire cleaning",
      "Tire shine application",
      "Hand dry with scratch-free microfiber",
      "Exterior glass and mirror wipe-down",
      "Bug, tar, and road grime removal"
    ],
    benefits: ["Hand-finished exterior care", "Focused wheel and tire cleaning", "Road grime addressed before it builds up"],
    prices: [{ label: "Exterior detailing", price: "$100" }],
    cta: "Book exterior detailing",
  },
  {
    slug: "full-detail",
    title: "Full Detail",
    category: "Detailing",
    icon: "03",
    shortDescription: "Interior plus exterior detailing for a complete clean inside and out.",
    longDescription: "A full detail combines interior and exterior detailing into one complete clean, refreshing the vehicle and bringing back a clean, fresh appearance.",
    includes: ["Interior detailing", "Exterior detailing", "Vehicle-specific cleaning approach", "Interior and exterior finish review"],
    benefits: ["Complete clean inside and out", "One coordinated appointment", "Pricing available upon consultation"],
    pricingNote: "Full detail pricing is available upon consultation. Additional charges are discussed before service begins when extra time or specialized cleaning is needed.",
    cta: "Contact us for full detail pricing",
  },
  {
    slug: "window-tinting",
    title: "Window Tinting",
    category: "Window Tint & Appearance",
    icon: "04",
    shortDescription: "Custom-fit tinting for improved comfort, reduced glare, interior heat, and added privacy.",
    longDescription: "Window tinting combines a custom fit with high-performance film and bubble-free installation to give your vehicle a sharper look and a more comfortable cabin through seasonal conditions.",
includes: [
      "Custom-fit film selection",
      "High-performance automotive film",
      "Precision bubble-free installation",
      "Up to 99% UV protection blocking",
      "Durable results built for Winnipeg seasonal shifts"
    ],
    benefits: ["Improved comfort", "Reduced glare and interior heat", "Added privacy"],
    cta: "Ask about window tinting",
  },
  {
    slug: "paint-correction",
    title: "Paint Correction",  
    category: "Window Tint & Appearance",
    icon: "05",
    shortDescription: "Buffing and polishing to address swirl marks, fine scratches, dull paint, and lost paint depth.",
    longDescription: "Paint correction uses careful buffing and polishing to improve the look of swirl marks, fine scratches, and dull paint while bringing back a deeper, high-gloss finish.",
    includes: ["Surface assessment", "Buffing and polishing", "Swirl mark and fine scratch attention", "Paint depth and gloss refinement"],
    benefits: ["A brighter, deeper finish", "Improved appearance of fine surface marks", "A considered foundation for paint protection"],
    cta: "Discuss paint correction",
  },
  {
    slug: "paint",
    title: "Paint",
    category: "Collision & Body Repair",
    icon: "06",
    shortDescription: "Fresh paint for accidental damage or an older vehicle that needs a refreshed appearance.",
    longDescription: "Fresh paint can transform a vehicle, whether it is repairing accidental damage or giving an older vehicle a refreshed appearance. The work is designed to blend with the original finish.",
    includes: ["Damage and finish assessment", "Precise color matching", "Professional spray booth techniques", "Smooth and durable finish", "Blending with the original finish"],
    benefits: ["Restored visual continuity", "Color matched to the vehicle", "A refreshed exterior appearance"],
    cta: "Book a paint assessment",
  },
  {
    slug: "dent-repair",
    title: "Dent Repair",
    category: "Collision & Body Repair",
    icon: "07",
    shortDescription: "Careful body-panel work for shopping cart bumps, minor dings, and hail-related minor dents.",
    longDescription: "Dent repair focuses on carefully smoothing metal and body panels to improve appearance and help preserve the vehicle's resale value without claiming a one-size-fits-all repair method.",
    includes: ["Damage assessment", "Shopping cart bump repair", "Minor ding repair", "Hail-related minor dent assessment", "Careful metal and body-panel smoothing"],
    benefits: ["Improved exterior appearance", "Vehicle-specific repair assessment", "Clear next steps before work begins"],
    cta: "Book a dent assessment",
  },
  {
    slug: "rust-removal",
    title: "Rust Removal",
    category: "Rust & Winter Protection",
    icon: "08",
    shortDescription: "Focused rust work for areas affected by Winnipeg road salt, moisture, and seasonal exposure.",
    longDescription: "Rust removal addresses affected areas through grinding, bare metal treatment, and sealing. The goal is to slow corrosion and help prevent further body damage, without promising rust can never return.",
    includes: ["Affected-area assessment", "Grinding of surface rust", "Bare metal treatment", "Sealing", "Winnipeg road salt-aware repair planning"],
    benefits: ["Slows corrosion", "Helps prevent further body damage", "A clearer plan for affected areas"],
    cta: "Discuss rust removal",
  },
  {
    slug: "rocker-repair",
    title: "Rocker Repair",
    category: "Rust & Winter Protection",
    icon: "09",
    shortDescription: "Lower-body repair for rocker panels exposed to gravel, salt, and slush.",
    longDescription: "Rocker panels face gravel, salt, and slush through Winnipeg seasons. Rusted metal can be cut away and the rocker panel rebuilt or replaced to restore lower-body strength and appearance.",
    includes: ["Rocker panel assessment", "Removal of rusted metal where needed", "Rocker panel rebuild or replacement", "Lower-body finish review"],
    benefits: ["Restored lower-body appearance", "Attention to exposed rocker areas", "Repair planning based on the affected metal"],
    cta: "Book a rocker assessment",
  },
  {
    slug: "undercoating",
    title: "Undercoating",
    category: "Rust & Winter Protection",
    icon: "10",
    shortDescription: "Heavy-duty undercarriage protection for exposed metal, frame rails, and wheel wells.",
    longDescription: "Undercoating creates a barrier against salt and moisture across parts of the undercarriage, including exposed metal, frame rails, and wheel wells, helping protect against corrosion.",
    includes: ["Undercarriage assessment", "Heavy-duty undercoating", "Exposed metal attention", "Frame rail and wheel well coverage"],
    benefits: ["Barrier against salt and moisture", "Focused undercarriage care", "Protection suited to seasonal driving conditions"],
    cta: "Ask about undercoating",
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    category: "Rust & Winter Protection",
    icon: "11",
    shortDescription: "A protective coating over paint for UV exposure, sap, road grime, and easier maintenance.",
    longDescription: "Ceramic coating adds a protective layer over the paint, creating a slick finish with water and dirt repellency. It is designed to make maintenance easier while helping protect against UV exposure, sap, and road grime.",
    includes: ["Paint surface preparation", "Protective coating over paint", "Gloss and slick finish enhancement", "Water and dirt repellency"],
    benefits: ["UV protection", "Protection from sap and road grime", "Easier maintenance"],
    cta: "Discuss ceramic coating",
  },
  {
    slug: "oil-change",
    title: "Oil Change",
    category: "Maintenance",
    icon: "12",
    shortDescription: "Routine oil and filter service to support lubrication, heat management, and everyday maintenance.",
    longDescription: "An oil change drains old oil, replaces the filter, and refills the vehicle with quality motor oil to support lubrication, heat management, and routine vehicle maintenance.",
    includes: ["Drain old oil", "Replace filter", "Refill with quality motor oil", "Routine maintenance check-in"],
    benefits: ["Supports engine lubrication", "Supports heat management", "Straightforward routine maintenance"],
    cta: "Book an oil change",
  },
  {
    slug: "brake-services",
    title: "Brake Services",
    category: "Maintenance",
    icon: "13",
    shortDescription: "Brake maintenance for pads, rotors, fluid, squeaks, soft pedals, and routine service needs.",
    longDescription: "Brake services cover common maintenance needs including brake pad replacement, rotor resurfacing, brake fluid flushes, and assessment of squeaks or soft pedals.",
    includes: ["Brake pad replacement", "Rotor resurfacing", "Brake fluid flushes", "Squeak assessment", "Soft pedal assessment", "Routine brake maintenance"],
    benefits: ["Clear assessment of brake concerns", "Routine maintenance support", "Practical next steps for your vehicle"],
    cta: "Discuss brake service",
  },
];

export const serviceCategories = [
  { name: "Detailing", description: "Interior, exterior, and complete vehicle refreshes.", services: ["interior-detailing", "exterior-detailing", "full-detail"] },
  { name: "Window Tint & Appearance", description: "Comfort, finish, and surface refinement.", services: ["window-tinting", "paint-correction"] },
  { name: "Collision & Body Repair", description: "Body panels, paint, and minor damage repair.", services: ["paint", "dent-repair"] },
  { name: "Rust & Winter Protection", description: "Care for salt, slush, moisture, and seasonal exposure.", services: ["rust-removal", "rocker-repair", "undercoating", "ceramic-coating"] },
  { name: "Maintenance", description: "Practical routine care for everyday driving.", services: ["oil-change", "brake-services"] },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service) {
  return services.filter((candidate) => candidate.category === service.category && candidate.slug !== service.slug).slice(0, 3);
}
