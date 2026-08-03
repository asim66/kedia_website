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
  title: {
    default: `${clinicInfo.name} | Advanced Dental Care in Bhubaneswar`,
    template: `%s | ${clinicInfo.name}`,
  },
  description: clinicInfo.tagline,
  keywords: ["Dentist in Bhubaneswar", "Dental Clinic Bhubaneswar", "Root Canal Bhubaneswar", "Dental Implants Bhubaneswar", "Orthodontist Forest Park"],
  metadataBase: new URL("https://kediadentalcare.com"), // Placeholder URL, update appropriately
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: clinicInfo.name,
    description: clinicInfo.tagline,
    url: 'https://kediadentalcare.com',
    siteName: clinicInfo.name,
    locale: 'en_IN',
    type: 'website',
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
