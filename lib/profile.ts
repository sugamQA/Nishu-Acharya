import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Github,
  GraduationCap,
  HandHeart,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Network,
  Sparkles,
  Twitter
} from "lucide-react";

export const profile = {
  name: "Nishu Acharya",
  headline:
    "Public Health Professional | Specializing in Research, Program Design, and Implementation | Health Equity Advocate",
  intro:
    "Advancing community well-being through evidence-based interventions, health systems strengthening, research, and equitable public health programming.",
  location: "Nepal",
  email: "hello@nishuacharya.com",
  linkedin: "https://www.linkedin.com/in/nishuacharya/",
  github: "https://github.com/",
  twitter: "https://twitter.com/",
  calendar: "https://cal.com/",
  typingWords: [
    "Public Health",
    "Research",
    "Program Design",
    "Implementation",
    "Health Equity",
    "Community Well-being"
  ]
};

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Twitter", href: profile.twitter, icon: Twitter }
];

export const bioCards = [
  {
    title: "Journey",
    copy:
      "A public health path shaped by field experience, research, monitoring and evaluation, teaching, and community engagement."
  },
  {
    title: "Career",
    copy:
      "Focused on health program implementation, evidence generation, strategic planning, and practical support to health institutions."
  },
  {
    title: "Leadership",
    copy:
      "A collaborative approach to project coordination, stakeholder communication, health worker capacity building, and data-informed decisions."
  },
  {
    title: "Mission",
    copy:
      "To advance health equity and community well-being through evidence-based interventions and accountable public health practice."
  }
];

export const timeline = [
  {
    year: "Present",
    title: "Public Health Teaching & Practice",
    body:
      "Serving as visiting faculty while continuing to advance applied public health knowledge and program insight."
  },
  {
    year: "2023 - 2025",
    title: "Health Programs & Research",
    body:
      "Worked across hospital public health, neglected tropical disease coordination, research proposals, strategic planning, and monitoring."
  },
  {
    year: "2020 - 2023",
    title: "MPH, M&E, and Youth Engagement",
    body:
      "Built foundations in public health research, monitoring and evaluation, youth leadership, and community-level programming."
  }
];

export const education = [
  {
    school: "Tribhuvan University",
    degree: "Master of Public Health - MPH, Public Health",
    duration: "2021 - 2023",
    logo: "TU",
    url: "https://www.linkedin.com/school/15109237/"
  },
  {
    school: "Purbanchal University",
    degree: "Bachelor of Public Health, Public Health",
    duration: "Jan 2015 - Jan 2019",
    logo: "PU",
    url: "https://www.linkedin.com/school/3938370/"
  }
];

type ExperienceEntry = {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  companyUrl?: string;
  courses?: string[];
  responsibilities: string[];
  achievements: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    company: "Purbanchal University",
    position: "Visiting Faculty",
    duration: "May 2025 - Present · 1 yr 2 mos",
    location: "Morang District, Nepal · On-site",
    type: "Part-time",
    logo: "PU",
    companyUrl: "https://www.linkedin.com/school/3938370/",
    courses: [
      "Health Management Information System and Logistic Management",
      "Applied Health Education and Health Promotion",
      "Health Promoting School Program"
    ],
    responsibilities: [
      "Deliver public health instruction across information systems, logistics, health education, and school health promotion.",
      "Support students with applied understanding of health systems, community health, and program implementation."
    ],
    achievements: [
      "Contributing academic expertise to future health professionals.",
      "Connecting field-level public health practice with classroom learning."
    ]
  },
  {
    company: "Chatara Hospital",
    position: "Public Health Officer",
    duration: "Sep 2024 - Feb 2025 · 6 mos",
    location: "Nepal · On-site",
    type: "Full-time",
    logo: "CH",
    responsibilities: [
      "Led research proposal development for studies pertaining to health insurance and 365-day outpatient care.",
      "Provided technical support for strategic planning and data-driven decision making.",
      "Reviewed and monitored priority public health programs aligned with national targets.",
      "Supported capacity-building initiatives and contributed to hospital-based research projects."
    ],
    achievements: [
      "Strengthened evidence-led planning and program monitoring.",
      "Advanced research and operational improvement priorities in a hospital setting."
    ]
  },
  {
    company: "NLR | until No Leprosy Remains (Nepal)",
    position: "NTD (Neglected Tropical Disease) Coordinator",
    duration: "Jun 2023 - May 2024 · 1 yr",
    location: "Nepal · On-site",
    type: "Full-time",
    logo: "NLR",
    responsibilities: [
      "Coordinated and managed Neglected Tropical Disease project activities in line with organizational goals and donor guidelines.",
      "Developed project plans, schedules, and M&E frameworks to track progress and measure impact.",
      "Maintained communication and collaboration with government bodies, partner organizations, and provincial networks across Madhesh, Koshi, and Sudurpaschim.",
      "Led capacity-building sessions and developed training materials for frontline health workers on NTD management.",
      "Utilized mapping software and updated the NTD inventory to analyze disease co-endemicity and inform interventions.",
      "Conducted routine monitoring and prepared reports highlighting performance, challenges, and outcomes."
    ],
    achievements: [
      "Enhanced multi-province coordination for NTD response.",
      "Improved visibility into disease co-endemicity through mapping and inventory updates."
    ]
  },
  {
    company: "Richmond Fellowship Morang",
    position: "Monitoring and Evaluation Intern",
    duration: "Nov 2022 - Jan 2023 · 3 mos",
    location: "Nepal · On-site",
    type: "Internship",
    logo: "RFM",
    companyUrl: "https://www.linkedin.com/company/9371856/",
    responsibilities: [
      "Assisted the M&E Officer in monitoring and evaluation activities as part of MPH degree requirements.",
      "Prepared evidence on factors influencing Oral Substitution Therapy status.",
      "Designed tools for evaluating the effectiveness of the Regular School Health Program."
    ],
    achievements: [
      "Built practical M&E experience across school health and treatment program evaluation.",
      "Supported evidence generation for community health programming."
    ]
  },
  {
    company: "Restless Development Nepal",
    position: "Alumni Engagement Committee Youth",
    duration: "Sep 2020 - Dec 2020 · 4 mos",
    location: "Nepal · Remote",
    type: "Contract",
    logo: "RDN",
    companyUrl: "https://www.linkedin.com/company/103024962/",
    responsibilities: [
      "Prepared a research document through qualitative and quantitative data collection and analysis on youth leadership in emergency preparedness and response.",
      "Assisted in creating online content focused on COVID-19 awareness, mental health, and youth engagement."
    ],
    achievements: [
      "Supported youth-centered emergency preparedness research.",
      "Contributed to public awareness content during the COVID-19 response."
    ]
  },
  {
    company: "Restless Development Nepal",
    position: "International Citizen Service Volunteer",
    duration: "Feb 2020 - Apr 2020 · 3 mos",
    location: "Lalitpur District, Nepal · On-site",
    type: "Contract",
    logo: "RDN",
    companyUrl: "https://www.linkedin.com/company/103024962/",
    responsibilities: [
      "Identified community needs and implemented targeted programs to address local health and social issues.",
      "Managed data and reporting for conducted programs.",
      "Conducted the Action at Home project promoting child protection and safety."
    ],
    achievements: [
      "Delivered community-level programming for health, safety, and social awareness.",
      "Strengthened reporting discipline for volunteer-led initiatives."
    ]
  }
];

export const skills = [
  ["Public Health", 95],
  ["Research", 92],
  ["Program Design", 90],
  ["Implementation", 91],
  ["Monitoring & Evaluation", 90],
  ["Health Equity", 94],
  ["Strategic Planning", 86],
  ["Data-driven Decisions", 88],
  ["Capacity Building", 89],
  ["Community Well-being", 93]
] as const;

export const featuredWork = [
  {
    title: "Research Projects",
    body: "Evidence generation across public health programs, hospital priorities, and community needs.",
    icon: BriefcaseBusiness
  },
  {
    title: "Program Design",
    body: "Structured interventions that connect public health goals with practical implementation pathways.",
    icon: Network
  },
  {
    title: "Community Programs",
    body: "Health promotion, youth engagement, child protection, and community-level awareness initiatives.",
    icon: HandHeart
  },
  {
    title: "Hospital Public Health",
    body: "Strategic planning, priority program monitoring, capacity building, and hospital-based research support.",
    icon: Sparkles
  },
  {
    title: "Health Information Systems",
    body: "HMIS, logistics, mapping, inventories, and data use for better decisions and targeted interventions.",
    icon: Megaphone
  },
  {
    title: "Health Equity Advocacy",
    body: "Work centered on access, prevention, community well-being, and inclusive public health outcomes.",
    icon: CalendarDays
  }
];

export const impact = [
  {
    title: "Scholarships",
    detail: "Supporting access to education and long-term personal growth.",
    image: "/gallery/education.svg"
  },
  {
    title: "Youth Empowerment",
    detail: "Encouraging confidence, leadership, and entrepreneurship for emerging talent.",
    image: "/gallery/community.svg"
  },
  {
    title: "Volunteer Programs",
    detail: "Helping community organizations mobilize people and resources.",
    image: "/gallery/network.svg"
  }
];

export const certifications = [
  {
    title: "Monitoring & Evaluation for Public Health",
    issuer: "Johns Hopkins University",
    year: "2024",
    credential: "JHSPH-ME-2024",
    link: "https://www.linkedin.com/"
  },
  {
    title: "Health Systems Strengthening",
    issuer: "World Health Organization",
    year: "2023",
    credential: "WHO-HSS-2023",
    link: "https://www.linkedin.com/"
  },
  {
    title: "Research Ethics & Compliance",
    issuer: "CITI Program",
    year: "2023",
    credential: "CITI-REC-2023",
    link: "https://www.linkedin.com/"
  },
  {
    title: "Project Management in Global Health",
    issuer: "PMI & Global Health Council",
    year: "2023",
    credential: "PMGH-2023",
    link: "https://www.linkedin.com/"
  },
  {
    title: "Epidemiology & Biostatistics",
    issuer: "University of North Carolina",
    year: "2022",
    credential: "UNC-EB-2022",
    link: "https://www.linkedin.com/"
  },
  {
    title: "Gender Equality & Social Inclusion",
    issuer: "UN Women Training Centre",
    year: "2022",
    credential: "UNW-GESI-2022",
    link: "https://www.linkedin.com/"
  }
];

export const trainings = [
  {
    title: "Leadership in Health Emergency Response",
    provider: "WHO & Ministry of Health, Nepal",
    year: "2024",
    type: "Workshop"
  },
  {
    title: "Advanced Qualitative Research Methods",
    provider: "University of Melbourne (Online)",
    year: "2023",
    type: "Short Course"
  },
  {
    title: "Health Financing & Universal Health Coverage",
    provider: "World Bank Open Learning",
    year: "2023",
    type: "Online Course"
  },
  {
    title: "Data Analysis Using SPSS & R",
    provider: "Nepal Public Health Foundation",
    year: "2022",
    type: "Hands-on Training"
  },
  {
    title: "Child Health & Nutrition Program Management",
    provider: "UNICEF Nepal",
    year: "2022",
    type: "Technical Training"
  },
  {
    title: "Communication for Development (C4D)",
    provider: "UNICEF & Restless Development",
    year: "2021",
    type: "Workshop"
  }
];

export const achievements = [
  { label: "Recognition", icon: Award },
  { label: "Leadership", icon: Network },
  { label: "Speaking Events", icon: Megaphone },
  { label: "Certifications", icon: GraduationCap },
  { label: "Media", icon: Sparkles },
  { label: "Awards", icon: Award }
];

export const testimonials = [
  {
    quote:
      "Nishu brings a rare balance of public health insight, community connection, and implementation discipline.",
    name: "Executive Partner",
    role: "Public Health Programs"
  },
  {
    quote:
      "A thoughtful leader who understands how to build trust across teams, communities, and business networks.",
    name: "Community Leader",
    role: "Education Initiative"
  },
  {
    quote:
      "Professional, composed, and deeply committed to creating value that lasts beyond a single project.",
    name: "Colleague",
    role: "Business Development"
  }
];

export const blogPosts = [
  "Designing Evidence-based Public Health Interventions",
  "Health Equity as a Practical Program Standard",
  "Using M&E to Improve Community Health Programs",
  "Strengthening Health Systems Through Better Data"
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://nishuacharya.com",
  sameAs: [profile.linkedin],
  jobTitle: "Public Health Professional",
  knowsAbout: [
    "Public Health",
    "Research",
    "Program Design",
    "Health Equity",
    "Monitoring and Evaluation",
    "Community Well-being"
  ]
};

export const contactItems = [
  { label: "Email", value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/nishuacharya", icon: Linkedin, href: profile.linkedin },
  { label: "Location", value: profile.location, icon: MapPin, href: "#" },
  { label: "Calendar", value: "Book a meeting", icon: CalendarDays, href: profile.calendar }
];
