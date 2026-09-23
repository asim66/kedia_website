import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { clinicInfo } from "@/data/clinicData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kediadentalcare.com"),
  title: {
    default: `${clinicInfo.name} | Best Dental Clinic in Bhubaneswar`,
    template: `%s | ${clinicInfo.name}`,
  },
  description: clinicInfo.tagline,
  keywords: [
    "Dentist in Bhubaneswar",
    "Best Dental Clinic Bhubaneswar",
    "Root Canal Specialist Bhubaneswar",
    "Dental Implants Bhubaneswar",
    "Orthodontist Forest Park Bhubaneswar",
    "Dentist near Sishu Bhawan",
    "Laser Dentistry Bhubaneswar"
  ],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: clinicInfo.name,
    description: clinicInfo.tagline,
    url: 'https://kediadentalcare.com',
    siteName: clinicInfo.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://kediadentalcare.com/images/clinic_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Kedia Dental Care - Best Dental Clinic in Bhubaneswar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: clinicInfo.name,
    description: clinicInfo.tagline,
    images: ['https://kediadentalcare.com/images/clinic_hero.webp'],
  },
  other: {
    "geo.region": "IN-OR",
    "geo.placename": "Bhubaneswar",
    "geo.position": "20.2727144;85.8239003",
    "ICBM": "20.2727144, 85.8239003",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to 3rd-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />

        {/* Preload LCP Hero Candidate Image */}
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/images/clinic_team_seated.avif"
          fetchPriority="high"
          media="(min-width: 641px)"
        />
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/images/clinic_team_seated_mobile.avif"
          fetchPriority="high"
          media="(max-width: 640px)"
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M2P86MVZ');
            `,
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-G22H2EFY3K"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G22H2EFY3K');
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2P86MVZ"
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="min-h-screen flex flex-col pt-16 sm:pt-20 md:pt-28 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
