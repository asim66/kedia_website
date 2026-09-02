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
  registrationNumber?: string;
  experienceYears?: number;
  specialty: string;
  bio: string;
  image: string;
  objectPosition?: string;
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
  dciRegistration?: string;
  sameAs: string[];
  medicalDisclaimer: string;
  googleReviewUrl: string;
  googleRating: number;
  googleReviewCount: string;
  servedLocalities: string[];
  nearbyLandmarks: { name: string; distance: string; desc: string }[];
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
    googleMapsUrl: string;
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
  sameAs: [
    "https://www.facebook.com/kediadentalcare",
    "https://www.instagram.com/kediadentalcare",
    "https://www.youtube.com/@KediaDentalCare",
    "https://share.google/C0tHVh549BwsrdBnI"
  ],
  medicalDisclaimer: "Medical Disclaimer: The clinical information provided on this website is for educational and informational purposes only. It does not constitute medical advice or formal dental diagnosis. Always consult a licensed dental surgeon for individual oral health advice.",
  googleReviewUrl: "https://share.google/C0tHVh549BwsrdBnI",
  googleRating: 4.9,
  googleReviewCount: "500+",
  servedLocalities: [
    "Forest Park & Sishu Bhawan Road",
    "Unit-1 & Capital Hospital Area",
    "Bapuji Nagar & Rajmahal Square",
    "Master Canteen & Railway Station",
    "Saheed Nagar & Janpath",
    "Jaydev Vihar & Nayapalli",
    "Khandagiri & Baramunda",
    "Patia & KIIT University Area"
  ],
  nearbyLandmarks: [
    { name: "Sishu Bhawan Square", distance: "100 meters away", desc: "Located directly opposite Sishu Bhawan Square on Forest Park Road." },
    { name: "Forest Park Public Garden", distance: "200 meters away", desc: "Short walk from the main Forest Park entrance gate." },
    { name: "Capital Hospital (Unit-6)", distance: "1.0 km (3 mins)", desc: "Quick drive via Capital Hospital Road and Rajmahal Road." },
    { name: "Bhubaneswar Railway Station", distance: "2.5 km (8 mins)", desc: "Direct route through Rajmahal Square and Master Canteen." },
    { name: "Biju Patnaik Airport (BBI)", distance: "3.0 km (10 mins)", desc: "Easily accessible via Airport Road." }
  ],
  address: {
    street: "2nd Floor, Shuvam Towers",
    landmark: "Near Sishu Bhawan Road",
    locality: "Forest Park",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751009",
    full: "2nd Floor, Shuvam Towers, near Sishu Bhawan Road, Forest Park, Bhubaneswar, Odisha 751009",
    parkingInfo: "In case of special circumstances or emergencies, on-premise parking assistance is available, subject to space availability. Direct elevator access is available to the 2nd Floor.",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6642138249086!2d85.8239003!3d20.2727144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7cbd0d8f07b%3A0x6b1070183427f71b!2sForest%20Park%2C%20Bhubaneswar%2C%20Odisha%20751009!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsUrl: "https://share.google/C0tHVh549BwsrdBnI",
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
      title: "Parking Assistance",
      description: "In case of special circumstances or emergencies, on-premise parking assistance is available, subject to space availability.",
      icon: "Car",
    },
    {
      title: "Transparent & Honest Pricing",
      description: "Clear written cost estimates provided upfront before starting any dental procedure with no hidden charges.",
      icon: "ShieldCheck",
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
    bio: "Back in 2004, Dr. Shiv Dayal Kedia founded Kedia Dental Care on a simple, radical philosophy—dentistry should be ethical, incredibly gentle, and fundamentally human. Over the past two decades, Dr. Kedia has built a reputation across Odisha not just for his steady hands, but for the immense time he takes to actually listen to his patients. Whether he is carefully saving a tooth with a root canal, placing a permanent dental implant to help you eat your favorite food again, or completely redesigning a smile from scratch using digital mapping, he brings over twenty years of master-level clinical expertise to the chair. But more importantly, he treats every person sitting in that chair like family.",
    image: "/images/dr_kedia.webp",
  },
  {
    name: "Dr. Swetali Deo",
    title: "Senior Dental Surgeon",
    role: "in-house",
    qualifications: "BDS",
    experienceYears: 9,
    registrationNumber: "Registered Dental Surgeon (OSDC / DCI)",
    specialty: "Pediatric Dentistry & Orthodontics",
    bio: "With over nine years of distinguished clinical experience, Dr. Swetali Deo serves as the Senior Dental Surgeon at our practice. Renowned for her gentle approach to pediatric dentistry and advanced orthodontic treatments, she ensures patients of all ages achieve optimal alignment and lasting oral wellness.",
    image: "/images/dr_swetali_hd.webp",
    objectPosition: "top",
  },
  {
    name: "Dr. Ayushi",
    title: "Dental Surgeon",
    role: "in-house",
    qualifications: "BDS",
    experienceYears: 6,
    registrationNumber: "Registered Dental Surgeon (OSDC / DCI)",
    specialty: "General & Restorative Dentistry",
    bio: "Dr. Ayushi brings a refined approach to contemporary dental care, combining clinical precision with a deep commitment to preserving the natural beauty and function of every smile. With a special interest in restorative dentistry, her focus is on preserving what is natural, restoring what is lost, and creating dentistry that feels beautifully effortless.",
    image: "/images/dr_ayushi_hd.webp",
    objectPosition: "top",
  },
  {
    name: "Dr. Anwesha",
    title: "Dental Surgeon",
    role: "in-house",
    qualifications: "BDS",
    experienceYears: 3,
    registrationNumber: "Registered Dental Surgeon (OSDC / DCI)",
    specialty: "General & Endodontic Care",
    bio: "Dr. Anwesha approaches dentistry with a blend of clinical insight, precision, and a gentle understanding of patient needs. With a particular affinity for endodontic treatment, she focuses on the delicate balance between preserving natural tooth structure and restoring lasting oral function — guided by careful planning and an uncompromising eye for detail.",
    image: "/images/dr_anwesha_hd.webp",
    objectPosition: "top",
  },
  {
    name: "Dr. Vandana Jaiswal",
    title: "Dental Surgeon",
    role: "in-house",
    qualifications: "BDS",
    registrationNumber: "Registered Dental Surgeon (OSDC / DCI)",
    specialty: "General & Preventive Dentistry",
    bio: "Bringing fresh expertise, compassionate care, and a commitment to continuous learning, Dr. Vandana Jaiswal is dedicated to delivering comfortable, thoughtful, and patient-centred dental care. With a strong focus on clinical excellence, she is committed to creating a reassuring and positive dental experience for every patient.",
    image: "/images/dr_vandana_hd.webp",
    objectPosition: "top",
  },
  {
    name: "Dr. Shibani Mishra",
    title: "Dental Surgeon",
    role: "in-house",
    qualifications: "BDS",
    registrationNumber: "Registered Dental Surgeon (OSDC / DCI)",
    specialty: "General & Restorative Care",
    bio: "Dr. Shibani Mishra combines modern clinical knowledge with genuine empathy and a gentle chairside manner. Committed to continuous learning and high-standard patient care, she focuses on delivering comfortable, thoughtful dental solutions tailored to the individual needs of every patient.",
    image: "/images/dr_shibani_hd.webp",
    objectPosition: "top",
  },
];

export const doctorProfile = teamMembers[0];

export interface ClinicalDepartment {
  id: string;
  title: string;
  subtitle: string;
  specialists: string;
  description: string;
  treatmentsCovered: string[];
  icon: string;
}

export const clinicalDepartments: ClinicalDepartment[] = [
  {
    id: "endodontics",
    title: "Endodontics & Restorative Dentistry",
    subtitle: "Micro-Precision Root Canal & Natural Tooth Preservation",
    specialists: "Senior Endodontist & Micro-Dentistry Team",
    description: "Specialized in saving natural teeth using surgical magnification loupes, rotary apex locators, and painless single-sitting root canal protocols.",
    treatmentsCovered: ["Single-Sitting RCT", "Laser Disinfection", "Composite Tooth Fillings", "Micro-Endodontic Re-treatment"],
    icon: "ShieldCheck",
  },
  {
    id: "implantology",
    title: "Implantology & Full-Mouth Rehabilitation",
    subtitle: "Permanent Tooth Replacement with Global Implants",
    specialists: "Chief Dental Surgeon & Maxillofacial Implant Panel",
    description: "Restoring lost chewing efficiency and natural smile aesthetics with Osstem/Nobel Biocare titanium implants, crowns, and zirconia bridges.",
    treatmentsCovered: ["Single & Multiple Implants", "All-on-4 / All-on-6", "Sinus Lift & Bone Grafting", "Zirconia Crowns & Bridges"],
    icon: "Sparkles",
  },
  {
    id: "orthodontics",
    title: "Orthodontics & Clear Aligners",
    subtitle: "Bite Correction & Digital Smile Alignment",
    specialists: "Visiting Consultant Orthodontist Panel",
    description: "Aligning crooked, crowded, or spaced teeth for teenagers and adults using discreet clear aligners, ceramic braces, and self-ligating brackets.",
    treatmentsCovered: ["Invisible Clear Aligners", "Ceramic & Metal Braces", "Retainers & Habit Correction", "Bite & TMJ Alignment"],
    icon: "Smile",
  },
  {
    id: "laser-periodontics",
    title: "Laser Dentistry & Periodontics",
    subtitle: "Bloodless Gum Therapy & Aesthetic Contouring",
    specialists: "Periodontist & Diode Laser Surgery Team",
    description: "Treating bleeding gums, gingivitis, and dark gums with sterile diode lasers for accelerated healing without scalpels or sutures.",
    treatmentsCovered: ["Laser Gum Depigmentation", "Flapless Pocket Sterilization", "Gingival Contouring", "Ultrasonic Deep Scaling"],
    icon: "Zap",
  },
  {
    id: "pediatric-preventive",
    title: "Pediatric & Preventive Dentistry",
    subtitle: "Gentle & Child-Friendly Dental Care",
    specialists: "Pediatric Dental Care Team",
    description: "Fostering positive dental habits from a young age with zero-fear cavity prevention, fluoride treatments, pit & fissure sealants, and space maintainers.",
    treatmentsCovered: ["Cavity Prevention & Fluoride", "Pit & Fissure Sealants", "Painless Pulpectomy", "Habit Breaking Appliances"],
    icon: "HeartHandshake",
  },
  {
    id: "oral-surgery",
    title: "Oral & Maxillofacial Surgery",
    subtitle: "Wisdom Tooth & Surgical Care",
    specialists: "Senior Oral & Maxillofacial Surgeon Panel",
    description: "Atraumatic surgical extraction of impacted wisdom teeth, cyst enucleation, and pre-prosthetic bone contouring with hospital-grade sterility.",
    treatmentsCovered: ["Impacted Wisdom Tooth Removal", "Atraumatic Extractions", "Alveoloplasty", "Surgical Frenectomy"],
    icon: "Stethoscope",
  },
];

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
    subtitle: "Preserve What’s Naturally Yours. | Advanced Root Canal Therapy designed around precision, comfort & natural tooth preservation.",
    iconName: "Activity",
    isPopular: true,
    shortDescription: "Save severely decayed or infected teeth painlessly using computerized rotary instruments and apex locators in single-visit RCT.",
    fullDescription: "Root Canal Treatment doesn’t have to be stressful. We combine advanced technology with expert care to make your treatment comfortable, precise, and efficient. From rotary endodontics and digital apex locators to laser disinfection, every step is focused on removing infection while protecting your natural tooth.",
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
      { question: "Can a root canal be done in one sitting?", answer: "Yes, in many cases. With advanced technology and careful case selection, Root Canal Treatment can often be completed in a single visit. However, every tooth is different. The number of visits depends on factors such as infection, tooth anatomy, and overall clinical condition."},
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
    fullDescription: "Transform your smile with modern orthodontic care designed around precision, comfort, and aesthetics. From clear aligners to ceramic and metal braces, every treatment is thoughtfully customized to complement your smile, facial harmony, and lifestyle.",
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
    subtitle: "Designed to Look, Feel & Function Naturally.",
    iconName: "ShieldCheck",
    isPopular: true,
    shortDescription: "Medical-grade titanium tooth roots capped with custom Zirconia crowns to restore full chewing function and natural facial aesthetics.",
    fullDescription: "Replace missing teeth with a strong, stable, and lifelike solution. Dental implants act as artificial tooth roots, supporting natural looking crowns while helping maintain the health and structure of the jawbone. We offer dental implant solutions from reputed, globally recognized implant brands, like Osstem, Adin, Straumann, Neodent and many more. Each implant system is selected according to your clinical needs, bone quality, functional requirements, and treatment goals.",
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
    source: "Google Review",
  },
  {
    name: "Priyanka Patnaik",
    location: "Saheed Nagar, Bhubaneswar",
    rating: 5,
    treatment: "Clear Aligners",
    review: "Got my clear aligners from Kedia Dental Care. The 3D intraoral scan was so comfortable — no messy impression pastes! Within 8 months my crooked teeth were completely straight. The transparent pricing made the whole process smooth.",
    date: "May 2026",
    verified: true,
    source: "Google Review",
  },
  {
    name: "Rajeshwar Rao",
    location: "Jaydev Vihar, Bhubaneswar",
    rating: 5,
    treatment: "Dental Implants",
    review: "I got two dental implants done here. Dr. Kedia’s 22+ years of experience really shows in his gentle technique and precision. I can finally enjoy eating solid food again without any worry. Truly grateful!",
    date: "April 2026",
    verified: true,
    source: "Google Review",
  },
  {
    name: "Ananya Mishra",
    location: "Khandagiri, Bhubaneswar",
    rating: 5,
    treatment: "Teeth Whitening & Smile Design",
    review: "Remarkable experience! The clinic environment is so calm and hygienic. Dr. Swetali, Dr. Priyanka, and Dr. Ayushi took such good care of me. My teeth whitening session took under an hour and the results blew everyone away. Thank you!",
    date: "March 2026",
    verified: true,
    source: "Google Review",
  },
];

export const faqsList = [
  {
    question: "Where is Kedia Dental Care located in Bhubaneswar?",
    answer: "Kedia Dental Care is located on the 2nd Floor, Shuvam Towers, near Sishu Bhawan Road, Forest Park, Bhubaneswar, Odisha 751009. The building features elevator access, with on-premise parking assistance available for emergencies or special circumstances.",
  },
  {
    question: "What are the clinic timings?",
    answer: "Our clinic is open Monday to Saturday from 9:30 AM to 2:00 PM and 4:00 PM to 8:30 PM. On Sundays, we are open from 9:30 AM to 2:00 PM (By Appointment Only).",
  },
  {
    question: "How do I get in touch with Dr. Shiv Dayal Kedia & Team?",
    answer: "You can reach us directly by calling +91 78730 87575, emailing shivdayalkedia11@gmail.com, or sending us a message on WhatsApp.",
  },
  {
    question: "What payment options do you accept?",
    answer: "We accept Cash, all Bank UPI options (GPay, PhonePe, Paytm), and Credit/Debit cards (Visa, MasterCard, RuPay). We also provide reimbursement assistance for dental insurance claims.",
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

export interface ClinicalCase {
  id: string;
  title: string;
  treatmentName: string;
  category: string;
  badge: string;
  summary: string;
  clinicalConcern: string;
  treatmentProcedure: string;
  clinicalOutcome: string;
  materialUsed: string;
  timeframe: string;
  beforeImage: string;
  afterImage: string;
  altBefore: string;
  altAfter: string;
}

export const clinicalCases: ClinicalCase[] = [
  {
    id: "metal-free-bridge-case-1",
    title: "Tooth Replacement with Metal-Free Bridges",
    treatmentName: "Metal-Free All-Ceramic Zirconia Bridge",
    category: "Restorative Dentistry & Prosthodontics",
    badge: "Restored Natural Smile",
    summary: "Complete functional and aesthetic restoration of a missing tooth gap using a biocompatible, metal-free zirconia bridge.",
    clinicalConcern: "Missing tooth space causing chewing imbalance, bite misalignment, and smile hesitation.",
    treatmentProcedure: "Conservative preparation of adjacent anchor teeth, high-precision digital impression, and CAD/CAM fabrication of a custom shade-matched metal-free bridge.",
    clinicalOutcome: "Restored natural bite anatomy, seamless tooth translucency, and elimination of dark metal lines at the gumline.",
    materialUsed: "High-Translucency Metal-Free Monolithic Zirconia",
    timeframe: "Completed in 2 appointments",
    beforeImage: "/images/treatment_metal_free_bridge_before.webp",
    afterImage: "/images/treatment_metal_free_bridge_after.webp",
    altBefore: "Before treatment: Missing tooth space and prepared anchor teeth at Kedia Dental Care",
    altAfter: "After treatment: Tooth replacement with metal-free bridge at Kedia Dental Care",
  },
];

