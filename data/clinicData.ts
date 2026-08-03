export interface Treatment {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  procedureSteps: { title: string; desc: string }[];
  duration: string;
  recovery: string;
  faq: { question: string; answer: string }[];
  isPopular?: boolean;
}

export interface Doctor {
  name: string;
  title: string;
  role: "founder" | "in-house" | "visiting";
  qualifications: string;
  experienceYears?: number;
  specialty: string;
  bio: string;
  image: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  announcement: string;
  brandMessage: string;
  establishedYear: number;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
    parkingInfo: string;
    googleMapsEmbedUrl: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  stats: {
    yearsExperience: string;
    happyPatients: string;
    successfulImplants: string;
    satisfactionRate: string;
  };
  technologies: {
    name: string;
    description: string;
    benefit: string;
    icon: string;
  }[];
  amenities: {
    title: string;
    description: string;
    icon: string;
  }[];
  firstVisitSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  sterilizationProtocol: string[];
  paymentOptions: string[];
}

export const clinicInfo: ClinicInfo = {
  name: "Kedia Dental Care",
  tagline: "Best Dental Clinic in Bhubaneswar | Serving Patients of All Ages",
  announcement: "We've Moved! Visit us at our New Kedia Dental Care location in Forest Park—modern, spacious, and ready to serve you better!",
  brandMessage: "We believe your smile tells your story. We go beyond just treatments—we listen, we care.",
  establishedYear: 2004,
  phone: "+91 78730 87575",
  phoneRaw: "+917873087575",
  email: "shivdayalkedia11@gmail.com",
  address: {
    street: "2nd Floor, Shuvam Towers",
    landmark: "Near Sishu Bhawan Road",
    locality: "Forest Park",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751009",
    full: "2nd Floor, Shuvam Towers, near Sishu Bhawan Road, Forest Park, Bhubaneswar, Odisha 751009",
    parkingInfo: "Dedicated basement parking available for clinic visitors in Shuvam Towers with direct elevator access to the 2nd Floor.",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6642138249086!2d85.8239003!3d20.2727144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7cbd0d8f07b%3A0x6b1070183427f71b!2sForest%20Park%2C%20Bhubaneswar%2C%20Odisha%20751009!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  hours: {
    weekdays: "Monday - Saturday: 9:30 AM – 2:00 PM & 4:00 PM – 8:30 PM",
    saturday: "Monday - Saturday: 9:30 AM – 2:00 PM & 4:00 PM – 8:30 PM",
    sunday: "Sunday: 9:30 AM – 2:00 PM (By Appointment Only)",
  },
  stats: {
    yearsExperience: "22+",
    happyPatients: "18,000+",
    successfulImplants: "3,500+",
    satisfactionRate: "99.4%",
  },
  technologies: [
    {
      name: "Fully Automated Ergonomic Chairs",
      description: "State-of-the-art dental units designed for maximum patient relaxation, zero strain, and medical-grade infection control.",
      benefit: "Maximum patient comfort during long or delicate procedures.",
      icon: "Armchair",
    },
    {
      name: "Advanced Intraoral Scanner",
      description: "Replaces uncomfortable traditional impression trays with instantaneous, ultra-precise 3D digital tooth mapping.",
      benefit: "100% mess-free digital impressions for aligners and crowns.",
      icon: "Scan",
    },
    {
      name: "Digital RVG X-Rays",
      description: "Low-radiation digital radiography providing instant HD dental images on screen.",
      benefit: "90% less radiation exposure than conventional film X-rays.",
      icon: "Monitor",
    },
    {
      name: "Modern Laser Technology",
      description: "Minimally invasive diode laser technology for painless soft tissue procedures, gum contouring, and sterilizing infection.",
      benefit: "Zero bleeding, faster healing, and minimal post-op discomfort.",
      icon: "Zap",
    },
  ],
  amenities: [
    {
      title: "Elevator & Wheelchair Access",
      description: "Full elevator access in Shuvam Towers and step-free clinic access for elderly patients and wheelchair users.",
      icon: "Accessibility",
    },
    {
      title: "Basement Parking",
      description: "Hassle-free dedicated parking space for patient vehicles in Shuvam Towers basement.",
      icon: "Car",
    },
    {
      title: "0% Interest Flexible EMI",
      description: "Easy monthly installment plans for major dental procedures like Implants, Braces & Aligners.",
      icon: "CreditCard",
    },
    {
      title: "Quiet & Anxiety-Free Lounge",
      description: "A calming waiting area equipped with ambient lighting, Wi-Fi, and soothing music to ease dental anxiety.",
      icon: "Coffee",
    },
    {
      title: "Same-Day Emergency Service",
      description: "Priority walk-in appointments reserved daily for acute tooth pain, trauma, or broken teeth.",
      icon: "HeartPulse",
    },
    {
      title: "Transparent Digital Estimates",
      description: "No hidden charges. Detailed written treatment plans with complete cost clarity before treatment starts.",
      icon: "FileText",
    },
  ],
  firstVisitSteps: [
    {
      step: 1,
      title: "Warm Reception & Medical Review",
      description: "Our friendly reception team reviews your medical history, current dental concerns, and any specific anxieties you may have.",
    },
    {
      step: 2,
      title: "Low-Radiation Digital Scan & Examination",
      description: "Dr. Kedia and the team conduct a gentle, comprehensive examination using 3D intraoral digital scanners and instant HD RVG X-rays.",
    },
    {
      step: 3,
      title: "On-Screen Visual Diagnosis & Plan",
      description: "We show you your dental images on an overhead monitor, explaining every finding clearly with transparent cost options.",
    },
    {
      step: 4,
      title: "Gentle Treatment at Your Pace",
      description: "Procedure begins only when you are completely comfortable and ready. No rushed treatments or unexpected surprises.",
    },
  ],
  sterilizationProtocol: [
    "Class-B Medical Grade Autoclave for 100% spore-free sterilization",
    "Individual pouching of all surgical instruments opened directly in front of the patient",
    "Single-use disposable bibs, cups, gloves, and suction tips",
    "UV light chamber storage for sterilized dental instruments",
    "Medical-grade air purifiers with HEPA & carbon filtration in treatment operatories",
    "Strict surface disinfection of dental chairs between every single patient visit",
  ],
  paymentOptions: [
    "Cash & All Bank UPI (GPay, PhonePe, Paytm)",
    "Credit & Debit Cards (Visa, MasterCard, RuPay)",
    "0% Cost Monthly EMIs via Bajaj Finserv / HDFC Bank",
    "Reimbursement Assistance for Corporate & Private Dental Insurance Claims",
  ],
};

export const teamMembers: Doctor[] = [
  {
    name: "Dr. Shiv Dayal Kedia",
    title: "Founder & Chief Dental Surgeon",
    role: "founder",
    qualifications: "BDS, MDS (Specialist Dental Surgeon)",
    experienceYears: 22,
    specialty: "Endodontics, Implants & Laser Dentistry",
    bio: "Dr. Shiv Dayal Kedia established Kedia Dental Care in 2004 with a vision to bring world-class, ethical, and painless dental care to Bhubaneswar. With over two decades of clinical expertise, Dr. Kedia is renowned across Odisha for his mastery in complex Root Canal Therapy, Dental Implants, and Digital Smile Designing.",
    image: "/images/dr_kedia.webp",
  },
  {
    name: "Dr. Priyanka",
    title: "Associate Dental Surgeon",
    role: "in-house",
    qualifications: "BDS",
    specialty: "Endodontics & Preventive Care",
    bio: "Dr. Priyanka focuses on micro-endodontic treatments and oral hygiene education, helping patients maintain healthy natural teeth.",
    image: "/images/dr_priyanka.webp",
  },
  {
    name: "Dr. Swetali Deo",
    title: "Senior Dental Surgeon & Specialist",
    role: "in-house",
    qualifications: "BDS, MDS",
    specialty: "Cosmetic & Restorative Dentistry",
    bio: "Dr. Swetali Deo brings extensive expertise in preventive and aesthetic dental procedures, focusing on conservative restoration and patient-centered gentle care.",
    image: "/images/dr_swetali.webp",
  },
  {
    name: "Dr. Ayushi",
    title: "Associate Dental Surgeon",
    role: "in-house",
    qualifications: "BDS",
    specialty: "General & Pediatric Dentistry",
    bio: "Dr. Ayushi specializes in child-friendly dentistry and general oral health maintenance, ensuring anxiety-free dental visits for patients of all ages.",
    image: "/images/dr_ayushi.webp",
  },
];

export const doctorProfile = teamMembers[0];

export const visitingConsultants = [
  {
    specialty: "Oral & Maxillofacial Surgery & Implantology",
    description: "Expert surgical management of complex impacted wisdom teeth, bone grafting, and advance implant placements.",
  },
  {
    specialty: "Orthodontics & Dentofacial Orthopedics",
    description: "Specialists in metal, ceramic braces, and invisible clear aligner treatments for bite and alignment correction.",
  },
  {
    specialty: "Periodontics & Laser Micro-Surgery",
    description: "Dedicated care for severe gum infections, deep scaling, laser depigmentation, and soft-tissue grafting.",
  },
  {
    specialty: "Micro-Endodontics",
    description: "Precision microscopic root canal re-treatments and complex curved root canal management.",
  },
];

export const treatmentsData: Treatment[] = [
  {
    id: "laser-dentistry",
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    subtitle: "Painless, Bloodless Soft Tissue & Gum Care",
    iconName: "Zap",
    isPopular: true,
    shortDescription: "State-of-the-art diode laser treatments for quick gum reshaping, depigmentation, and sterile root canal disinfection with zero scalpels.",
    fullDescription: "Laser dentistry represents the pinnacle of modern dental innovation at Kedia Dental Care. Using concentrated light energy, diode lasers allow Dr. Shiv Dayal Kedia and our team to treat gum disease, reshape uneven gums, and sterilize infected tissues without scalpels, sutures, or post-treatment soreness.",
    benefits: [
      "Virtually painless treatment requiring minimal local anesthesia",
      "No scalpels, incisions, or sutures required",
      "Minimal to zero bleeding during and after procedure",
      "Accelerated tissue regeneration and rapid recovery",
      "Preserves healthy surrounding tissue with surgical micro-precision",
    ],
    procedureSteps: [
      { title: "Digital Evaluation", desc: "Intraoral scanning and laser tissue mapping to isolate problem areas." },
      { title: "Targeted Laser Therapy", desc: "Painless laser beam vaporizes diseased tissue and sterilizes bacteria." },
      { title: "Biostimulation", desc: "Low-level laser light promotes rapid cellular healing and pain relief." },
    ],
    duration: "30 - 45 Minutes",
    recovery: "Immediate to 24 Hours",
    faq: [
      { question: "Is laser dentistry safe?", answer: "Yes, diode dental lasers are FDA-approved, highly precise, and safer than conventional surgical instruments." },
      { question: "Will I need stitches after laser gum treatment?", answer: "No, laser beams cauterize blood vessels as they work, eliminating the need for sutures." },
    ],
  },
  {
    id: "root-canal-therapy",
    slug: "root-canal-therapy",
    title: "Root Canal Therapy (RCT)",
    subtitle: "Pain-Free Single Visit Natural Tooth Preservation",
    iconName: "Activity",
    isPopular: true,
    shortDescription: "Save severely decayed or infected teeth painlessly using computerized rotary instruments and apex locators in single-visit RCT.",
    fullDescription: "Forget the old myths about root canals. At Kedia Dental Care, Root Canal Therapy is completely pain-free, fast, and highly reliable. We use computerized rotary endodontics, digital apex locators, and laser disinfection to clean infected pulp while preserving your natural tooth structure.",
    benefits: [
      "Relieves severe toothache and sensitivity immediately",
      "Painless single-visit treatment option available",
      "Saves your natural tooth, avoiding extractions",
      "Restores full chewing efficiency and natural bite force",
      "Protected with custom aesthetic Zirconia or PFM crowns",
    ],
    procedureSteps: [
      { title: "3D RVG Imaging", desc: "Precise digital X-rays reveal root canal anatomy and infection depth." },
      { title: "Painless Anesthesia", desc: "Local numbing ensures complete comfort throughout." },
      { title: "Rotary Cleaning", desc: "Nickel-titanium rotary files clean and shape root canals smoothly." },
      { title: "Hermetic Sealing & Crown", desc: "Canals are filled with biocompatible material and sealed with a crown." },
    ],
    duration: "45 - 60 Minutes per visit",
    recovery: "Same Day",
    faq: [
      { question: "Is a root canal painful?", answer: "Not at all. Modern local anesthesia and rotary tools make RCT as comfortable as a routine filling." },
      { question: "Can a root canal be done in one sitting?", answer: "Yes! At Kedia Dental Care, most uncomplicated root canals are successfully completed in a single visit." },
    ],
  },
  {
    id: "orthodontics",
    slug: "orthodontics",
    title: "Orthodontics & Braces",
    subtitle: "Invisible Aligners & Precision Braces for All Ages",
    iconName: "Smile",
    isPopular: true,
    shortDescription: "Correct crooked teeth, gaps, and overbites using discreet clear aligners or ceramic/metal braces for children, teens, and adults.",
    fullDescription: "Achieve a straight, beautifully aligned smile with modern orthodontic solutions. Whether you prefer invisible clear aligners or ceramic/metal braces, our orthodontic specialists create customized alignment plans tailored to your lifestyle and facial aesthetics.",
    benefits: [
      "Virtually invisible clear aligners for complete discretion",
      "Removable aligners make eating and brushing hassle-free",
      "Corrects overcrowding, gaps, deep bites, and crossbites",
      "Improves oral hygiene by eliminating tight, hard-to-clean overlaps",
      "Tailored options for teenagers, working professionals, and adults",
    ],
    procedureSteps: [
      { title: "3D Impression Scan", desc: "Intraoral scan generates a digital model of your teeth layout." },
      { title: "Virtual Outcome Preview", desc: "Visualize your step-by-step tooth movements before starting." },
      { title: "Custom Aligner Fitting", desc: "Receive customized sets of smooth, BPA-free clear trays." },
    ],
    duration: "6 - 18 Months",
    recovery: "Zero downtime",
    faq: [
      { question: "How long must I wear clear aligners daily?", answer: "Aligners should be worn for 20 to 22 hours per day, removing them only for eating and cleaning." },
      { question: "Am I too old for braces or aligners?", answer: "No! Orthodontic treatment is effective at any age as long as your gums and teeth are healthy." },
    ],
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implants",
    subtitle: "Permanent, Lifelike Replacement for Missing Teeth",
    iconName: "ShieldCheck",
    isPopular: true,
    shortDescription: "Medical-grade titanium tooth roots capped with custom Zirconia crowns to restore full chewing function and natural facial aesthetics.",
    fullDescription: "Dental implants are the gold standard for replacing missing teeth. Acting as artificial roots anchored firmly in the jawbone, implants prevent bone loss and hold natural-looking crowns that look, feel, and function exactly like real teeth.",
    benefits: [
      "Permanent solution that can last a lifetime with proper care",
      "Prevents facial sagging and jawbone deterioration",
      "Restores 100% natural chewing force without slipping",
      "Does not require altering adjacent healthy teeth",
      "Natural aesthetic harmony with surrounding teeth",
    ],
    procedureSteps: [
      { title: "Implant Planning", desc: "3D digital scans plan exact implant placement angles." },
      { title: "Titanium Post Placement", desc: "Gentle surgical insertion of the biocompatible titanium post." },
      { title: "Osseointegration", desc: "Healing period where bone fuses securely with the implant." },
      { title: "Crown Attachment", desc: "Custom designed ceramic crown is fixed permanently to the implant." },
    ],
    duration: "2 - 3 Visits (Over 3 - 4 Months)",
    recovery: "2 - 3 Days for initial healing",
    faq: [
      { question: "Are dental implants permanent?", answer: "Yes, dental implants have a success rate over 98% and are designed to last a lifetime." },
      { question: "Is implant surgery painful?", answer: "The procedure is performed under local anesthesia. Most patients report less discomfort than a tooth extraction." },
    ],
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    subtitle: "Veneers, Bonding & Aesthetic Tooth Transformation",
    iconName: "Sparkles",
    isPopular: true,
    shortDescription: "Fix chipped teeth, close stubborn gaps, and cover deep discolorations with custom ultra-thin porcelain veneers and composite bonding.",
    fullDescription: "Transform imperfect teeth into a stunning, picture-perfect smile. Cosmetic dentistry at Kedia Dental Care combines artistic precision with dental science to correct chips, cracks, uneven shapes, and dark stains.",
    benefits: [
      "Ultra-thin porcelain veneers that match natural enamel translucency",
      "Painless composite bonding completed in a single appointment",
      "Stain-resistant materials for long-lasting brilliance",
      "Custom shape and color matched to your unique facial features",
      "Immediate confidence boost",
    ],
    procedureSteps: [
      { title: "Cosmetic Consultation", desc: "Discussion of aesthetic goals and tooth shade selection." },
      { title: "Preparation & Mockup", desc: "Minimal surface prep and trial smile preview." },
      { title: "Final Bonding / Veneer Placement", desc: "Precision placement of ceramic veneers or composite resin." },
    ],
    duration: "1 - 2 Appointments",
    recovery: "Immediate",
    faq: [
      { question: "Do porcelain veneers ruin natural teeth?", answer: "No, modern veneers require minimal (often less than 0.5mm) surface preparation." },
      { question: "How long do porcelain veneers last?", answer: "With good oral hygiene, quality porcelain veneers last 15 to 20+ years." },
    ],
  },
  {
    id: "smile-designing",
    slug: "smile-designing",
    title: "Digital Smile Designing (DSD)",
    subtitle: "Computerized Facial & Dental Aesthetic Engineering",
    iconName: "Camera",
    isPopular: true,
    shortDescription: "Experience your future smile before treatment begins using high-definition digital simulation and customized smile architecture.",
    fullDescription: "Digital Smile Designing (DSD) is a revolutionary dental planning tool that analyzes your facial proportions, lips, and dental structure to craft a harmonious, custom smile makeover preview before any procedure takes place.",
    benefits: [
      "See and test your prospective smile on 3D models before treatment",
      "Facially guided design ensures natural proportions and harmony",
      "Active patient collaboration in choosing tooth length and shape",
      "Multidisciplinary coordination (combines veneers, gum contouring & whitening)",
    ],
    procedureSteps: [
      { title: "Facial & Dental Photography", desc: "Capturing HD photos and video of facial dynamics and speech." },
      { title: "Digital Architecture", desc: "Software creates a 3D blueprint aligned with golden ratio proportions." },
      { title: "Mockup Try-In", desc: "Temporary physical model placed in your mouth to preview real results." },
    ],
    duration: "Full Treatment Plan (Customized)",
    recovery: "Depends on combined treatments",
    faq: [
      { question: "What is the main advantage of DSD?", answer: "It eliminates guesswork. You get to preview, test, and approve your new smile beforehand." },
    ],
  },
  {
    id: "tooth-replacement",
    slug: "tooth-replacement",
    title: "Tooth Replacement & Bridges",
    subtitle: "Fixed Dental Bridges & Precision Dentures",
    iconName: "Layers",
    isPopular: false,
    shortDescription: "Restore missing teeth and natural chewing ability with high-aesthetic Zirconia bridges and comfortable precision partial dentures.",
    fullDescription: "Missing teeth can disrupt your bite force and confidence. At Kedia Dental Care, we offer durable, natural-looking fixed dental bridges and ergonomic flexible dentures to restore full oral functionality.",
    benefits: [
      "Restores natural chewing balance and prevents adjacent teeth shifting",
      "High-translucency Zirconia and E-Max ceramic crowns",
      "Lightweight, comfortable flexible partial dentures",
      "Custom color-matched to your existing tooth enamel",
    ],
    procedureSteps: [
      { title: "Digital Impression", desc: "3D intraoral scan captures exact gap dimensions." },
      { title: "Custom Fabrication", desc: "Computerized CAD/CAM milling of ceramic bridges." },
      { title: "Precision Fitting", desc: "Permanent cementation and bite adjustment." },
    ],
    duration: "2 Visits",
    recovery: "Immediate",
    faq: [
      { question: "What is the difference between a bridge and an implant?", answer: "A bridge uses adjacent teeth as support anchors, while an implant is an independent artificial tooth root placed in the jawbone." },
    ],
  },
  {
    id: "periodontal-care",
    slug: "periodontal-care",
    title: "Periodontal & Gum Care",
    subtitle: "Laser Gum Depigmentation & Deep Scaling",
    iconName: "HeartPulse",
    isPopular: false,
    shortDescription: "Treat bleeding gums, bad breath, and periodontitis with painless ultrasonic scaling, root planing, and laser gum therapy.",
    fullDescription: "Healthy gums are the foundation of a strong smile. Our periodontal care treats gum infection, prevents tooth mobility, and reshapes dark or uneven gum lines using painless diode lasers.",
    benefits: [
      "Stops gum bleeding and cures persistent bad breath (halitosis)",
      "Painless diode laser gum depigmentation for pink, healthy gums",
      "Deep ultrasonic root scaling removes stubborn tartar below gumline",
      "Prevents bone loss around tooth roots",
    ],
    procedureSteps: [
      { title: "Periodontal Charting", desc: "Measuring gum pocket depths and tissue health." },
      { title: "Ultrasonic Scaling & Planing", desc: "Removing bacterial plaque and smooth root surfaces." },
      { title: "Laser Sterilization", desc: "Laser light sterilizes deep pockets and promotes tissue reattachment." },
    ],
    duration: "45 Minutes",
    recovery: "Immediate to 24 Hours",
    faq: [
      { question: "Why do my gums bleed when brushing?", answer: "Bleeding gums are an early sign of gingivitis (gum inflammation) caused by plaque buildup, which requires professional scaling." },
    ],
  },
  {
    id: "oral-surgeries",
    slug: "oral-surgeries",
    title: "Oral & Maxillofacial Surgeries",
    subtitle: "Gentle Wisdom Tooth Extractions & Bone Augmentation",
    iconName: "Stethoscope",
    isPopular: false,
    shortDescription: "Expert surgical care for impacted wisdom teeth, dental trauma, jaw cysts, and bone augmentation under strict sterile conditions.",
    fullDescription: "When complex dental extractions or surgical care are needed, Dr. Shiv Dayal Kedia and our visiting oral surgeons offer gentle, precise surgical care backed by two decades of clinical experience.",
    benefits: [
      "Painless extraction of painful or impacted wisdom teeth",
      "Bone grafting procedures to rebuild jaw density for implants",
      "Strict hospital-grade sterilization protocols",
      "Advanced pain management and quick-healing guidance",
    ],
    procedureSteps: [
      { title: "Diagnostic Imaging", desc: "Digital X-rays evaluate nerve position and bone structure." },
      { title: "Targeted Anesthesia", desc: "Ensures complete pain numbness throughout the procedure." },
      { title: "Gentle Surgery & Care", desc: "Precision removal or bone placement with minimal tissue trauma." },
    ],
    duration: "45 - 90 Minutes",
    recovery: "3 - 5 Days",
    faq: [
      { question: "When should wisdom teeth be removed?", answer: "Wisdom teeth should be extracted if they are impacted, causing pain, crowding adjacent teeth, or forming cysts." },
    ],
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    title: "Advanced Teeth Whitening",
    subtitle: "In-Office Laser-Activated Brightening",
    iconName: "Sun",
    isPopular: false,
    shortDescription: "Lighten stubborn coffee, tea, and tobacco stains by up to 8 shades in just 45 minutes with safe, enamel-friendly whitening tech.",
    fullDescription: "Brighten your teeth safely without damaging enamel. Our professional in-office whitening treatment uses advanced light activation to break down deep-set enamel discoloration from coffee, tea, pan, and natural aging.",
    benefits: [
      "Up to 8 shades whiter in a single 45-minute clinic session",
      "Formulated with desensitizing agents to prevent post-treatment sensitivity",
      "Safe, enamel-friendly gel monitored by dental experts",
      "Longer lasting results compared to over-the-counter kits",
    ],
    procedureSteps: [
      { title: "Shade Analysis", desc: "Current enamel shade measured and target shade established." },
      { title: "Gum Barrier Application", desc: "Protective resin barrier shields gums and lips." },
      { title: "Laser Gel Activation", desc: "Professional gel applied and light-activated in 15-minute cycles." },
    ],
    duration: "45 Minutes",
    recovery: "Immediate",
    faq: [
      { question: "Does professional whitening damage tooth enamel?", answer: "No, professional whitening gel is pH-balanced and safe when administered by a dentist." },
    ],
  },
];

export const testimonials = [
  {
    name: "Sunil Kumar Mohanty",
    location: "Forest Park, Bhubaneswar",
    rating: 5,
    treatment: "Single-Visit Root Canal",
    review: "Dr. Shiv Dayal Kedia is truly the best dentist in Bhubaneswar! I was terrified of root canals, but he completed my RCT in a single sitting with zero pain. The new clinic in Shuvam Towers is immaculate with basement parking and elevator access.",
    date: "June 2026",
    verified: true,
  },
  {
    name: "Priyanka Patnaik",
    location: "Saheed Nagar, Bhubaneswar",
    rating: 5,
    treatment: "Clear Aligners",
    review: "Got my clear aligners from Kedia Dental Care. The 3D intraoral scan was so comfortable — no messy impression pastes! Within 8 months my crooked teeth were completely straight. The zero-cost EMI option made payment so easy.",
    date: "May 2026",
    verified: true,
  },
  {
    name: "Rajeshwar Rao",
    location: "Jaydev Vihar, Bhubaneswar",
    rating: 5,
    treatment: "Dental Implants",
    review: "I got two dental implants done here. Dr. Kedia’s 22+ years of experience really shows in his gentle technique and precision. I can finally enjoy eating solid food again without any worry. Truly grateful!",
    date: "April 2026",
    verified: true,
  },
  {
    name: "Ananya Mishra",
    location: "Khandagiri, Bhubaneswar",
    rating: 5,
    treatment: "Teeth Whitening & Smile Design",
    review: "Remarkable experience! The clinic environment is so calm and hygienic. Dr. Swetali, Dr. Priyanka, and Dr. Ayushi took such good care of me. My teeth whitening session took under an hour and the results blew everyone away. Thank you!",
    date: "March 2026",
    verified: true,
  },
];

export const faqsList = [
  {
    question: "Where is Kedia Dental Care located in Bhubaneswar?",
    answer: "Kedia Dental Care is located on the 2nd Floor, Shuvam Towers, near Sishu Bhawan Road, Forest Park, Bhubaneswar, Odisha 751009. The building has elevator access and basement parking for patients.",
  },
  {
    question: "What are the clinic timings?",
    answer: "Our clinic is open Monday to Saturday from 9:30 AM to 2:00 PM and 4:00 PM to 8:30 PM. On Sundays, we are open from 9:30 AM to 2:00 PM (By Appointment Only).",
  },
  {
    question: "How do I book an appointment with Dr. Shiv Dayal Kedia & Team?",
    answer: "You can book an appointment by calling us directly at +91 78730 87575, emailing shivdayalkedia11@gmail.com, or using our online instant appointment booking form on this website.",
  },
  {
    question: "Do you offer zero-cost EMI options for expensive treatments?",
    answer: "Yes, we offer easy 0% interest monthly installment plans (EMIs) via Bajaj Finserv and major credit cards for treatments like Dental Implants, Clear Aligners, and Full Mouth Rehabilitation.",
  },
  {
    question: "What should I bring for my first visit?",
    answer: "Please bring a valid photo ID, a list of any current medical prescriptions or underlying conditions (like diabetes or hypertension), and any recent dental X-rays if you have them.",
  },
  {
    question: "How do you ensure pain-free treatment?",
    answer: "We use computer-guided local anesthesia, soft-tissue dental lasers, and micro-rotary instruments that reduce tissue vibration and healing time, ensuring a comfortable experience.",
  },
];
