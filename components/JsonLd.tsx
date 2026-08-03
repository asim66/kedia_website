import React from "react";
import { clinicInfo, teamMembers, treatmentsData } from "@/data/clinicData";

export default function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
        "@id": "https://kediadentalcare.com/#clinic",
        "name": clinicInfo.name,
        "alternateName": "Kedia Dental Care Bhubaneswar",
        "url": "https://kediadentalcare.com",
        "telephone": clinicInfo.phone,
        "email": clinicInfo.email,
        "priceRange": "₹₹",
        "description": `${clinicInfo.tagline}. ${clinicInfo.brandMessage}. Established in ${clinicInfo.establishedYear} by ${teamMembers[0].name} with 22+ years of clinical experience. Located in Forest Park, Bhubaneswar.`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": clinicInfo.address.street,
          "addressLocality": clinicInfo.address.locality,
          "addressRegion": clinicInfo.address.state,
          "postalCode": clinicInfo.address.pincode,
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "20.2727144",
          "longitude": "85.8239003",
        },
        "founder": {
          "@type": "Person",
          "name": teamMembers[0].name,
          "jobTitle": teamMembers[0].title,
          "alumniOf": "BDS, MDS",
        },
        "employee": teamMembers.map(member => ({
          "@type": "Person",
          "name": member.name,
          "jobTitle": member.title,
          "knowsAbout": member.specialty,
        })),
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:30",
            "closes": "14:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "16:00",
            "closes": "20:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "09:30",
            "closes": "14:00",
          },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Dental Services & Treatments",
          "itemListElement": treatmentsData.map((treatment, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": treatment.title,
              "description": treatment.shortDescription,
            },
            "position": index + 1,
          })),
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Bhubaneswar",
          },
          {
            "@type": "State",
            "name": "Odisha",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
