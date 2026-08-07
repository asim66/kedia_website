import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { clinicInfo } from "@/data/clinicData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
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
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="min-h-screen flex flex-col pt-24 md:pt-32 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
