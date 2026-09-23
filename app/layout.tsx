import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import WhatsAppButton from "./components/WhatsappComponenent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pegcity Collisions & Customs | Winnipeg Automotive Services",
    template: "%s | Pegcity Collisions & Customs",
  },
  description:
    "Premium auto detailing, collision repair, vehicle protection, and automotive maintenance in Winnipeg, Manitoba.",
  keywords: [
    "Winnipeg auto detailing",
    "Winnipeg collision repair",
    "Winnipeg paint correction",
    "Winnipeg ceramic coating",
    "Winnipeg vehicle maintenance",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Pegcity Collisions and Customs",
    email: "Pegcitycustomz@gmail.com",
    telephone: "437-983-0284",
    address: {
      "@type": "PostalAddress",
      streetAddress: "770 Mission Street",
      addressLocality: "Winnipeg",
      addressRegion: "MB",
      postalCode: "R2J 0A3",
      addressCountry: "CA",
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Header />
        <main>{children}
          <WhatsAppButton />

        </main>
        <Footer />
      </body>
    </html>
  );
}
