import {
  BriefcaseBusiness,
  CalendarDays,
  Facebook,
  Github,
  GraduationCap,
  HandHeart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Stethoscope,
  HeartPulse,
  Microscope,
  Activity,
  ShieldCheck,
  Users,
  FileText,
  Lightbulb,
  Globe2,
  Heart,
  Brain
} from "lucide-react";

export const profile = {
  name: "Nishu Acharya",
  headline:
    "Public Health Professional · Healthcare Consultant · Health Equity Advocate",
  intro:
    "Designing evidence-based health programs, advancing research, and strengthening community well-being through data-driven public health leadership across Nepal and beyond.",
  location: "Nepal",
  email: "info@nishuacharya.com.np",
  linkedin: "https://www.linkedin.com/in/nishuacharya/",
  facebook: "https://facebook.com/nishuacharya",
  instagram: "https://instagram.com/nishuacharya",
  github: "https://github.com/",
  twitter: "https://twitter.com/",
  calendar: "https://cal.com/",
  typingWords: [
    "Public Health",
    "Healthcare Consulting",
    "Research",
    "Program Design",
    "Health Equity",
    "Community Well-being",
    "Epidemiology",
    "Global Health"
  ]
};

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Facebook", href: profile.facebook, icon: Facebook },
  { label: "Instagram", href: profile.instagram, icon: Instagram },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Twitter", href: profile.twitter, icon: Twitter }
];

export const stats = [
  { value: "120+", label: "Health Programs Designed", icon: BriefcaseBusiness },
  { value: "18K+", label: "Community Members Reached", icon: Users },
  { value: "45+", label: "Research Projects Led", icon: Microscope },
  { value: "7", label: "Provinces of Nepal Covered", icon: Globe2 }
];

export const bioCards = [
  {
    title: "Journey",
    body:
      "A public health path shaped by field experience, research, monitoring and evaluation, teaching, and community engagement.",
    icon: "✦"
  },
  {
    title: "Career",
    body:
      "Focused on health program implementation, evidence generation, strategic planning, and practical support to health institutions.",
    icon: "▲"
  },
  {
    title: "Leadership",
    body:
      "A collaborative approach to project coordination, stakeholder communication, health worker capacity building, and data-informed decisions.",
    icon: "●"
  },
  {
    title: "Mission",
    body:
      "To advance health equity and community well-being through evidence-based interventions and accountable public health practice.",
    icon: "◆"
  }
];

export const expertise = [
  {
    title: "Public Health Strategy",
    description:
      "Designing national and provincial health strategies aligned with WHO frameworks and Sustainable Development Goals.",
    icon: Stethoscope,
    color: "cyan",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Epidemiology & Research",
    description:
      "Mixed-methods research design, disease surveillance, statistical analysis, and evidence generation for health policy.",
    icon: Microscope,
    color: "teal",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Program Design & Implementation",
    description:
      "End-to-end health program lifecycle — from theory of change and logic models to field execution and evaluation.",
    icon: BriefcaseBusiness,
    color: "electric",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Monitoring & Evaluation",
    description:
      "Building M&E frameworks, indicators, dashboards, and learning systems that turn data into action.",
    icon: Activity,
    color: "neon",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Health Equity & Inclusion",
    description:
      "Centering gender, geography, and marginalized populations in every intervention to close the health gap.",
    icon: HeartPulse,
    color: "cyan",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Capacity Building",
    description:
      "Training frontline health workers, faculty, and program teams in evidence-based practice and quality care.",
    icon: GraduationCap,
    color: "teal",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Health Systems Strengthening",
    description:
      "Working with hospitals, ministries, and NGOs to build resilient primary healthcare delivery systems.",
    icon: ShieldCheck,
    color: "electric",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Community Engagement",
    description:
      "Co-creating interventions with communities, local leaders, and youth for sustainable health outcomes.",
    icon: HandHeart,
    color: "neon",
    image:
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=800&auto=format&fit=crop"
  }
];

export const projects = [
  {
    title: "NTD Mapping & Coordination",
    category: "Neglected Tropical Diseases",
    summary:
      "Coordinated multi-province mapping and co-endemicity analysis for NTD intervention planning across Nepal.",
    impact: ["3 provinces", "12 districts", "120+ health workers trained"],
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
    color: "cyan"
  },
  {
    title: "Hospital Strategic Planning",
    category: "Health Systems",
    summary:
      "Provided technical support for hospital strategic planning, research proposals, and 365-day outpatient care design.",
    impact: ["2 hospitals", "5 research proposals", "Priority programs aligned"],
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    color: "electric"
  },
  {
    title: "Health Insurance Research",
    category: "Health Economics",
    summary:
      "Led research proposal development on community health insurance and outpatient service utilization patterns.",
    impact: ["1,200+ respondents", "Provincial insights", "Policy brief"],
    icon: FileText,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    color: "teal"
  },
  {
    title: "Youth Emergency Preparedness",
    category: "Community Health",
    summary:
      "Research on youth leadership in emergency preparedness and response during COVID-19, with qualitative field work.",
    impact: ["18 focus groups", "5 provinces", "Policy recommendations"],
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    color: "pink"
  }
];

export const programs = [
  {
    year: "2024",
    title: "NTD Mapping & Coordination",
    category: "NTD",
    description:
      "Coordinated multi-province mapping and co-endemicity analysis for NTD intervention planning across Nepal.",
    bullets: ["3 provinces", "12 districts", "120+ health workers trained"]
  },
  {
    year: "2023",
    title: "Hospital Strategic Planning",
    category: "Health Systems",
    description:
      "Provided technical support for hospital strategic planning, research proposals, and 365-day outpatient care design.",
    bullets: ["2 hospitals", "5 research proposals", "Priority programs aligned"]
  },
  {
    year: "2022",
    title: "Health Insurance Research",
    category: "Health Economics",
    description:
      "Led research proposal development on community health insurance and outpatient service utilization patterns.",
    bullets: ["1,200+ respondents", "Provincial insights", "Policy brief"]
  },
  {
    year: "2021",
    title: "Youth Emergency Preparedness",
    category: "Community Health",
    description:
      "Youth-led emergency response and disaster preparedness training.",
    bullets: ["50+ youth trained", "Emergency response plans", "School preparedness"]
  }
];

export const caseStudies = [
  {
    title: "Multi-Province NTD Coordination",
    challenge:
      "Coordinating neglected tropical disease response across three provinces with fragmented data and limited field capacity.",
    approach:
      "Built unified M&E framework, trained frontline workers, and integrated disease mapping for co-endemicity analysis.",
    outcome:
      "Improved visibility into disease burden and stronger cross-province coordination for NTD elimination.",
    icon: Globe2
  },
  {
    title: "Hospital 365-Day Outpatient Care",
    challenge:
      "Designing research and operations to support continuous outpatient care in a public hospital.",
    approach:
      "Led research proposal development, priority program review, and data-driven decision support for strategic planning.",
    outcome:
      "Strengthened evidence-led planning and operational improvements in hospital service delivery.",
    icon: Stethoscope
  },
  {
    title: "Youth Leadership in Emergencies",
    challenge:
      "Engaging young people in emergency preparedness and response during the COVID-19 pandemic.",
    approach:
      "Mixed-methods research, online content creation, and direct community engagement across multiple provinces.",
    outcome:
      "Generated evidence and amplified youth voices in national emergency preparedness policy.",
    icon: Lightbulb
  }
];

export const initiatives = [
  {
    title: "Health Education for All",
    summary:
      "Health promotion content and community sessions expanding access to clear, evidence-based health information.",
    detail:
      "Designing multilingual health education materials, running community sessions, and partnering with local media to ensure that evidence-based information reaches underserved populations. Topics include hygiene, nutrition, maternal health, vaccination, and disease prevention.",
    metric: "60K+ reached",
    year: "2022 — Present",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Mental Health Awareness",
    summary:
      "Public awareness content and youth-led conversations reducing stigma and expanding mental health literacy.",
    detail:
      "Coordinating youth-led mental health campaigns, training peer counselors, producing podcasts and short videos, and integrating mental health first aid into school and community programs.",
    metric: "30K+ engaged",
    year: "2021 — Present",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Child Protection Programs",
    summary:
      "Action-at-Home and community programs promoting child safety, well-being, and protective environments.",
    detail:
      "Implementing the Action-at-Home initiative, training teachers and parents on safeguarding, and partnering with child welfare organizations to create safer schools, neighborhoods, and digital spaces for children.",
    metric: "12 districts",
    year: "2020 — Present",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Youth in Public Health",
    summary:
      "Building the next generation of public health leaders through engagement, research, and capacity building.",
    detail:
      "Mentoring young professionals, leading youth research fellowships, and creating pathways for students to enter public health practice through field placements, scholarships, and leadership development programs.",
    metric: "200+ mentored",
    year: "2020 — Present",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop"
  }
];

export const publications = [
  {
    title: "Health Insurance Utilization in Provincial Nepal",
    venue: "Journal of Public Health Research",
    year: "2024",
    type: "Peer-Reviewed"
  },
  {
    title: "Co-endemicity Mapping of NTDs in Madhesh Province",
    venue: "Tropical Medicine & International Health",
    year: "2024",
    type: "Peer-Reviewed"
  },
  {
    title: "Youth Leadership in Emergency Preparedness",
    venue: "Global Health Action",
    year: "2023",
    type: "Peer-Reviewed"
  },
  {
    title: "Frontline Worker Capacity for NTD Programs",
    venue: "WHO South-East Asia Journal",
    year: "2023",
    type: "Working Paper"
  },
  {
    title: "Community-based M&E Approaches",
    venue: "Nepal Public Health Foundation",
    year: "2022",
    type: "Report"
  },
  {
    title: "School Health Program Effectiveness",
    venue: "Richmond Fellowship Research Series",
    year: "2022",
    type: "Working Paper"
  }
];

export const collaborations = [
  { name: "UNICEF Nepal", logo: "/images/English.png.webp" },
  { name: "NLR | until No Leprosy Remains", logo: "/images/nlr.jpg" },
  { name: "Restless Development", logo: "/images/restless-development.svg" },
  { name: "Tribhuvan University", logo: "/images/TU.png" },
  { name: "Nepal Public Health Foundation", logo: "/images/public-health-foundation.png" }
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
  { name: "Public Health", value: 95 },
  { name: "Research", value: 92 },
  { name: "Program Design", value: 90 },
  { name: "Implementation", value: 91 },
  { name: "Monitoring & Evaluation", value: 90 },
  { name: "Health Equity", value: 94 },
  { name: "Strategic Planning", value: 86 },
  { name: "Data-driven Decisions", value: 88 },
  { name: "Capacity Building", value: 89 },
  { name: "Community Engagement", value: 93 }
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

export const testimonials = [
  {
    quote:
      "Nishu brings a rare balance of public health insight, community connection, and implementation discipline.",
    name: "Executive Partner",
    role: "Public Health Programs",
    rating: 5
  },
  {
    quote:
      "A thoughtful leader who understands how to build trust across teams, communities, and partner networks.",
    name: "Community Leader",
    role: "Health Initiative",
    rating: 5
  },
  {
    quote:
      "Professional, composed, and deeply committed to creating value that lasts beyond a single project.",
    name: "Colleague",
    role: "Health Systems",
    rating: 5
  },
  {
    quote:
      "An evidence-driven public health professional with the rare ability to translate data into community action.",
    name: "Program Director",
    role: "Global Health NGO",
    rating: 5
  }
];

export const blogPosts = [
  {
    title: "Designing Evidence-based Public Health Interventions",
    excerpt:
      "How theory of change, logic models, and field reality combine to create programs that actually work.",
    date: "2026-05-12",
    readTime: "6 min",
    category: "Program Design"
  },
  {
    title: "Health Equity as a Practical Program Standard",
    excerpt:
      "Moving equity from a slogan to a measurable design principle that shapes every intervention.",
    date: "2026-04-02",
    readTime: "8 min",
    category: "Health Equity"
  },
  {
    title: "Using M&E to Improve Community Health Programs",
    excerpt:
      "Practical monitoring and evaluation patterns that turn data into decisions at the community level.",
    date: "2026-02-18",
    readTime: "7 min",
    category: "M&E"
  },
  {
    title: "Strengthening Health Systems Through Better Data",
    excerpt:
      "Why hospital public health needs the same data discipline as national programs — and how to build it.",
    date: "2026-01-22",
    readTime: "5 min",
    category: "Health Systems"
  }
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
    "Healthcare Consulting",
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
