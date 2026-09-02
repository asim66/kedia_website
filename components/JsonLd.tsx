import React from "react";
import { clinicInfo, teamMembers, treatmentsData, faqsList } from "@/data/clinicData";

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
        "logo": "https://kediadentalcare.com/images/clinic_hero.webp",
        "image": "https://kediadentalcare.com/images/clinic_hero.webp",
        "hasMap": clinicInfo.address.googleMapsUrl,
        "telephone": clinicInfo.phone,
        "email": clinicInfo.email,
        "priceRange": "₹₹",
        "sameAs": clinicInfo.sameAs,
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
          "latitude": 20.2727144,
          "longitude": 85.8239003,
        },
        "founder": {
          "@type": "Person",
          "name": teamMembers[0].name,
          "jobTitle": teamMembers[0].title,
          "identifier": teamMembers[0].registrationNumber,
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Medical License / Registration",
            "name": teamMembers[0].registrationNumber || "Odisha State Dental Council / DCI Registered Dental Surgeon",
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Dental Council of India / BDS & MDS"
          }
        },
        "employee": teamMembers.map(member => ({
          "@type": "Person",
          "name": member.name,
          "jobTitle": member.title,
          "knowsAbout": member.specialty,
          ...(member.registrationNumber ? {
            "identifier": member.registrationNumber,
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Medical License / Registration",
              "name": member.registrationNumber,
            }
          } : {})
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
              "url": `https://kediadentalcare.com/treatments/${treatment.slug}`,
            },
            "position": index + 1,
          })),
        },
        "medicalSpecialty": ["Dentistry", "Endodontics", "Orthodontics", "PediatricDentistry", "Periodontics", "Implantology"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": clinicInfo.googleRating,
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Forest Park, Bhubaneswar" },
          { "@type": "AdministrativeArea", "name": "Sishu Bhawan Road, Bhubaneswar" },
          { "@type": "AdministrativeArea", "name": "Unit 1, Bhubaneswar" },
          { "@type": "AdministrativeArea", "name": "Bapuji Nagar, Bhubaneswar" },
          { "@type": "AdministrativeArea", "name": "Rajmahal Square, Bhubaneswar" },
          { "@type": "AdministrativeArea", "name": "Saheed Nagar, Bhubaneswar" },
          { "@type": "AdministrativeArea", "name": "Jaydev Vihar, Bhubaneswar" },
          { "@type": "AdministrativeArea", "name": "Khandagiri, Bhubaneswar" },
          { "@type": "AdministrativeArea", "name": "Patia, Bhubaneswar" },
          { "@type": "AdministrativeArea", "name": "Nayapalli, Bhubaneswar" },
          { "@type": "City", "name": "Bhubaneswar" },
          { "@type": "State", "name": "Odisha" }
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://kediadentalcare.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kediadentalcare.com"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://kediadentalcare.com/#faq",
        "mainEntity": faqsList.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": "https://kediadentalcare.com/#website",
        "url": "https://kediadentalcare.com",
        "name": clinicInfo.name,
        "publisher": {
          "@id": "https://kediadentalcare.com/#clinic"
        }
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
