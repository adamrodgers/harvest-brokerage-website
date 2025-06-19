export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Harvest Brokerage",
    description: "Texas food broker specializing in natural foods brokerage and specialty trade",
    url: "https://harvestbrokerage.com",
    logo: "https://harvestbrokerage.com/logo.png",
    foundingDate: "2003",
    founder: [
      {
        "@type": "Person",
        name: "Susan Keinat",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Texas",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Texas",
      },
    ],
    serviceType: ["Food Brokerage", "Natural Foods Brokerage", "Specialty Food Brokerage", "Brand Management", "Product Placement"],
    knowsAbout: ["Food Distribution", "Natural Foods", "Specialty Foods", "Grocery Retail", "HEB", "Kroger", "Whole Foods"],
    industry: "Food Brokerage",
    employee: [
      {
        "@type": "Person",
        name: "Susan Keinat",
        jobTitle: "Co-Owner",
      },
      {
        "@type": "Person",
        name: "Rick Keinat",
        jobTitle: "Co-Owner",
      },
      {
        "@type": "Person",
        name: "Tori Clough",
        jobTitle: "Senior Account Manager",
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
