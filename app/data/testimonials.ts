export type Testimonial = {
  quote: string;
  name: string;
  vehicle?: string;
  service?: string;
  rating?: number;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Brought in my F-150 after a severe rear-end collision. The frame repair and paint matching were flawless. You honestly can't tell it was ever in an accident. Pegcity kept me updated through every step of the repair process.",
    name: "Marcus Vance",
    vehicle: "2021 Ford F-150",
    service: "Collision Repair & Paint",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Finding a shop that understands custom bodywork and paint restoration in Winnipeg is rare. The team treated my Mustang like their own. Exceptional attention to detail on the custom clear coat finish.",
    name: "David Kelsey",
    vehicle: "1969 Mustang Fastback",
    service: "Custom Paint Restoration",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "Honest estimates, transparent communication, and fast turnaround time. They handled the insurance process seamlessly and gave me back a pristine vehicle ahead of schedule.",
    name: "Elena Rostova",
    vehicle: "2023 Subaru Outback",
    service: "Body Panel Repair",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote:
      "After hitting a piece of highway debris, my front bumper and fender were completely crushed. Pegcity sourced original parts and matched the tri-coat factory paint perfectly. Highly recommended!",
    name: "Robert Chen",
    vehicle: "2022 Lexus RX 350",
    service: "Bumper & Fender Replacement",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];