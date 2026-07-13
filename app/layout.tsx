import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Grand_Hotel } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/content/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const grandHotel = Grand_Hotel({
  variable: "--font-grand-hotel",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esha-nakka.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Esha Nakka | Technology Strategy, AI Governance & Business Intelligence",
  description:
    "Esha Nakka is a Singapore-based technology and business intelligence professional specialising in AI advisory, digital transformation, data governance, analytics, and responsible enterprise technology.",
  keywords: [
    "Esha Nakka",
    "technology consultant Singapore",
    "AI strategy",
    "GenAI advisory",
    "business intelligence analyst",
    "digital transformation",
    "responsible AI",
    "AI governance",
    "data governance",
    "Power BI",
    "technology consulting",
    "enterprise AI",
    "vendor evaluation",
    "digital twin assurance",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Esha Nakka | Technology Strategy, AI Governance & Business Intelligence",
    description:
      "Portfolio covering technology consulting, GenAI advisory, business intelligence, digital transformation, and responsible AI.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Esha Nakka - Technology Strategy, AI Governance & Business Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esha Nakka | Technology Strategy, AI Governance & Business Intelligence",
    description:
      "Portfolio covering technology consulting, GenAI advisory, business intelligence, digital transformation, and responsible AI.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  sameAs: [profile.linkedin, profile.notionProfile],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Nanyang Technological University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Singapore Institute of Management, University of London",
    },
  ],
  knowsAbout: [
    "Technology Consulting",
    "Artificial Intelligence",
    "Generative AI",
    "Business Intelligence",
    "Digital Transformation",
    "Responsible AI",
    "Data Governance",
  ],
  jobTitle: profile.title,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${grandHotel.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-screen bg-cafe-cream font-sans text-espresso antialiased">
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
