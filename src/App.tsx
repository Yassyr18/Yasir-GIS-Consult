import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  Layers,
  BookOpen,
  Users,
} from "lucide-react";

/* ───────────────────────────── TYPES ───────────────────────────── */

type MapEntry = {
  id: string;
  src: string;
  caption: string;
};

type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  maps: MapEntry[];
  sampleNote?: string;
  elements?: string[];
};

type ProjectGroup = {
  id: string;
  label: string;
  icon: typeof Layers;
  description: string;
  projects: Project[];
};

type ExperienceEntry = {
  years: string;
  role: string;
  place: string;
  detail: string;
};

/* ───────────────────────────── HELPERS ───────────────────────────── */

const assetPath = (path: string) => encodeURI(path);

/* ───────────────────────────── DATA ───────────────────────────── */

const experience: ExperienceEntry[] = [
  {
    years: "2024–2025",
    role: "Consultant",
    place: "Krachi East Municipal Assembly / World Bank GSCSP",
    detail:
      "Led GIS data collection, geodatabase development, and map production for Dambai's first integrated Roads, Walkways & Drainage Master Plan under the World Bank Ghana Secondary Cities Support Programme (GSCSP).",
  },
  {
    years: "2023–2024",
    role: "GIS Analyst",
    place: "Birim Central Municipal Assembly, Eastern Region",
    detail:
      "Produced various spatial outputs for a 15-year Structure Plan and Disaster Risk Management Plan for Akim Oda.",
  },
  {
    years: "2024",
    role: "GIS Contributor",
    place: "Kwabre East District Assembly, Ashanti Region",
    detail:
      "Mapped disaster-prone communities to support the district's Disaster Risk Management Plan (DRMP).",
  },
  {
    years: "2024",
    role: "Research Assistant",
    place: "KNUST, Department of Planning / World Bank KUMAP",
    detail:
      "Contributed field surveys and map production to the World Bank-funded Kumasi Urban Mobility & Accessibility Project (KUMAP), focusing on Bus Rapid Transit (BRT) corridor planning.",
  },
  {
    years: "2023–2024",
    role: "Teaching Assistant",
    place: "KNUST, Department of Planning",
    detail:
      "Collaborated with professors to teach GIS undergraduate courses, providing instructional support to over 250 students. Tutored students on spatial analysis, data visualization, and other GIS concepts, including the use of relevant GIS software. Also supervised GIS lab operations.",
  },
];

const portfolioGroups: ProjectGroup[] = [
  {
    id: "municipal",
    label: "Municipal & Planning",
    icon: Layers,
    description:
      "Official spatial work delivered for municipal assemblies and district planning departments — structure plans, disaster risk maps, and infrastructure master plans.",
    projects: [
      {
        id: "akim-oda",
        title: "Akim Oda Structure Plan & Disaster Risk Management Plan",
        subtitle: "Birim Central Municipal Assembly | 2023–2024",
        description:
          "Produced various spatial outputs for a 15-year Structure Plan (2024–2039) and Disaster Risk Management Plan for Akim Oda, a fast-growing municipal capital. The maps shown below are a selection of the maps produced for this project, covering land use, transportation, infrastructure, natural hazards, and environmental protection.",
        maps: [
          {
            id: "a1",
            src: "/images/municipal/Akim Oda Contextual _compressed_compressed.jpg",
            caption: "Akim Oda in its municipal, regional, and national context.",
          },
          {
            id: "a2",
            src: "/images/municipal/Base Map of Akim Oda (2024) conv 1_compressed_compressed.jpg",
            caption:
              "Comprehensive snapshot of existing land use, road networks, public facilities, and natural features.",
          },
          {
            id: "a3",
            src: "/images/municipal/Problem_compressed_compressed.jpg",
            caption: "Problem map identifying key spatial planning challenges.",
          },
          {
            id: "a4",
            src: "/images/municipal/Residential Density conv 1_compressed_compressed.jpg",
            caption: "Residential housing density distribution across Akim Oda.",
          },
          {
            id: "a5",
            src: "/images/municipal/Structure Plan (2024 - 2039)_compressed_compressed.jpg",
            caption:
              "Final adopted Structure Plan consolidating the strongest planning directions.",
          },
          {
            id: "a6",
            src: "/images/municipal/Flood Prone Areas in Akim Oda Image_compressed_compressed.jpg",
            caption: "Flood-prone areas across Akim Oda.",
          },
          {
            id: "a7",
            src: "/images/municipal/Flood Prone Areas in Gyadem Image_compressed_compressed.jpg",
            caption: "Flood-prone areas in Gyadem, Akim Oda.",
          },
        ],
      },
      {
        id: "kwabre-east",
        title: "Kwabre East District Disaster Risk Management Plan",
        subtitle: "Kwabre East District Assembly, Ashanti Region | 2024",
        description:
          "Appointed as the sole GIS expert on this project. Produced all relevant maps for the comprehensive Disaster Risk Management Plan, indicating disaster-prone areas in various communities with on-site photographs. The maps shown below are a selection of the maps produced for this project.",
        maps: [
          {
            id: "k1",
            src: "/images/municipal/Adwumam Kenkaase conv 1_compressed.jpg",
            caption: "Disaster-prone areas in Adwumam and Kenkaase.",
          },
          {
            id: "k2",
            src: "/images/municipal/AhwaaTruban conv 1_compressed.jpg",
            caption: "Disaster-prone areas in Ahwaa Truban.",
          },
          {
            id: "k3",
            src: "/images/municipal/Mmedoma conv 1_compressed.jpg",
            caption: "Disaster-prone areas in Mmedoma.",
          },
        ],
      },
      {
        id: "dambai",
        title: "Dambai Roads, Walkways & Drainage Master Plan",
        subtitle:
          "Krachi East Municipal Assembly, Oti Region | World Bank GSCSP | 2024–2025",
        description:
          "Led the GIS component for Dambai's first integrated Roads, Walkways & Drainage Master Plan under the World Bank's Ghana Secondary Cities Support Programme. Designed and executed primary data collection, built the municipal geodatabase from scratch, and produced maps that informed the final Master Plan. The maps shown below are a selection of the maps produced for this project.",
        maps: [
          {
            id: "d1",
            src: "/images/municipal/Dambai Contextual Map_compressed_compressed.jpg",
            caption: "Dambai in its municipal, regional, and national context.",
          },
          {
            id: "d2",
            src: "/images/municipal/Road Condition_compressed.jpg",
            caption: "Condition assessment of existing roads.",
          },
          {
            id: "d3",
            src: "/images/municipal/Traffic_compressed.jpg",
            caption: "Traffic congestion hotspots at key junctions.",
          },
          {
            id: "d4",
            src: "/images/municipal/Proposed Roads_compressed.jpg",
            caption: "Proposed road network improvements.",
          },
          {
            id: "d5",
            src: "/images/municipal/Proposed Walkways_compressed.jpg",
            caption: "Proposed walkway network.",
          },
          {
            id: "d6",
            src: "/images/municipal/Proposed Drains_compressed.jpg",
            caption: "Proposed drainage network.",
          },
          {
            id: "d7",
            src: "/images/municipal/Masterplan_compressed.jpg",
            caption: "Final Master Plan showing all approved proposals.",
          },
        ],
      },
    ],
  },

  {
    id: "academic",
    label: "Academic & Research",
    icon: BookOpen,
    description:
      "University-linked and funded research mapping — baseline studies, transit planning support, and evidence-based spatial analysis for major development programmes.",
    projects: [
      {
        id: "kumasi-brt",
        title: "Kumasi BRT Baseline Study",
        subtitle: "KNUST, Department of Planning | World Bank KUMAP | 2024",
        description:
          "Contributed to a baseline study establishing the evidence base for introducing Kumasi's first Bus Rapid Transit (BRT) system. Covering two priority corridors (Ejisu – 18 km and Abuakwa – 10 km) across five metropolitan/municipal assemblies. Contributions spanned field surveys, map production, and identification of high-impact Transit-Oriented Development (TOD) sites. The maps shown below are a selection of the maps produced for this study.",
        maps: [
          {
            id: "b1",
            src: "/images/academic/KMA_compressed.jpg",
            caption:
              "Activity nodes of high public transport usage — Kumasi Metropolitan Assembly.",
          },
          {
            id: "b2",
            src: "/images/academic/Oforikrom_compressed.jpg",
            caption:
              "Activity nodes of high public transport usage — Oforikrom Municipal Assembly.",
          },
          {
            id: "b3",
            src: "/images/academic/Kwaadaso_compressed.jpg",
            caption:
              "Activity nodes of high public transport usage — Kwaadaso Municipal Assembly.",
          },
          {
            id: "b4",
            src: "/images/academic/Ejisu_compressed.jpg",
            caption:
              "Activity nodes of high public transport usage — Ejisu Municipal Assembly.",
          },
          {
            id: "b5",
            src: "/images/academic/Atwima_compressed.jpg",
            caption:
              "Activity nodes of high public transport usage — Atwima Nwabiagya South Municipal Assembly.",
          },
          {
            id: "b6",
            src: "/images/academic/High Activity Zones_Pt-1_compressed.jpg",
            caption: "High activity zones based on land use patterns (Part 1).",
          },
          {
            id: "b7",
            src: "/images/academic/High Activity Zones_Pt-2_compressed.jpg",
            caption: "High activity zones based on land use patterns (Part 2).",
          },
        ],
      },
    ],
  },

  {
    id: "private",
    label: "Private & Individual",
    icon: Users,
    description:
      "Custom maps for students, researchers, professors and private clients — from heavy metal distribution studies to project location maps and tailored thematic outputs.",
    projects: [
      {
        id: "heavy-metals",
        title: "Heavy Metal & Geochemical Distribution Maps",
        description:
          "Spatial distribution maps showing soil and water concentrations of various heavy metals and geochemical elements, produced for professors and researchers across six different studies. The maps shown below are a selection of the maps produced across those studies.",
        sampleNote:
          "The maps shown below are selected outputs from six different studies.",
        elements: [
          "Arsenic",
          "Chromium",
          "Lead",
          "Copper",
          "Zinc",
          "Cadmium",
          "Iron",
          "Manganese",
          "Nickel",
          "Mercury",
          "Vanadium",
          "Titanium",
          "Uranium-238",
          "Potassium-40",
          "Thorium-232",
        ],
        maps: [
          {
            id: "hm1",
            src: "/images/private/Arsenic Distribution_compressed_compressed.jpg",
            caption: "Arsenic (As) concentration in study area.",
          },
          {
            id: "hm2",
            src: "/images/private/Chromium Distribution_compressed_compressed.jpg",
            caption: "Chromium (Cr) concentration in study area.",
          },
          {
            id: "hm3",
            src: "/images/private/Lead Distribution_compressed_compressed.jpg",
            caption: "Lead (Pb) concentration in study area.",
          },
          {
            id: "hm4",
            src: "/images/private/Copper Distribution_compressed_compressed.jpg",
            caption: "Copper (Cu) concentration in study area.",
          },
          {
            id: "hm5",
            src: "/images/private/Zinc Distribution_compressed_compressed.jpg",
            caption: "Zinc (Zn) concentration in study area.",
          },
          {
            id: "hm6",
            src: "/images/private/Cadmium Distribution_compressed_compressed.jpg",
            caption: "Cadmium (Cd) concentration in study area.",
          },
          {
            id: "hm7",
            src: "/images/private/Manganese Distribution_compressed_compressed.jpg",
            caption: "Manganese (Mn) concentration in study area.",
          },
          {
            id: "hm8",
            src: "/images/private/Nickel Distribution_compressed_compressed.jpg",
            caption: "Nickel (Ni) concentration in study area.",
          },
          {
            id: "hm9",
            src: "/images/private/Vanadium Distribution_compressed_compressed.jpg",
            caption: "Vanadium (V) concentration in study area.",
          },
          {
            id: "hm10",
            src: "/images/private/Amansie Uranium-238 _[Both]_compressed_compressed.jpg",
            caption: "Uranium-238 concentration in study area.",
          },
          {
            id: "hm11",
            src: "/images/private/Konongo Potassium-40 _[Both]_compressed_compressed.jpg",
            caption: "Potassium-40 concentration in study area.",
          },
          {
            id: "hm12",
            src: "/images/private/Mampong Thorium-232 _[Both]_compressed_compressed.jpg",
            caption: "Thorium-232 concentration in study area.",
          },
        ],
      },
      {
        id: "other-custom",
        title: "Other Custom Maps",
        description:
          "Project location maps, contextual maps, and thematic maps tailored to individual client needs — from flood-affected areas to university layouts and water distribution networks. The maps shown below are a selection of the maps produced for different clients.",
        maps: [
          {
            id: "o1",
            src: "/images/private/Affected areas_compressed_compressed.jpg",
            caption: "Flood-affected areas.",
          },
          {
            id: "o2",
            src: "/images/private/Amansie_compressed_compressed.jpg",
            caption: "Contextual map with sample point locations.",
          },
          {
            id: "o3",
            src: "/images/private/Assin Fosu_compressed_compressed.jpg",
            caption:
              "Water distribution and transmission network — treatment facilities, storage tanks, and pump houses.",
          },
          {
            id: "o4",
            src: "/images/private/Contextual Map (2)_compressed_compressed.jpg",
            caption: "Contextual map for client project.",
          },
          {
            id: "o5",
            src: "/images/private/Contextual Map_compressed_compressed.jpg",
            caption: "Contextual map for client project.",
          },
          {
            id: "o6",
            src: "/images/private/Crops and soil_1_compressed_compressed.jpg",
            caption: "Crop farming distribution across three districts.",
          },
          {
            id: "o7",
            src: "/images/private/GKMA_compressed_compressed.jpg",
            caption:
              "Greater Kumasi Metropolitan Area in regional and national context.",
          },
          {
            id: "o8",
            src: "/images/private/Layout_compressed_compressed.jpg",
            caption: "Public universities in southern Ghana.",
          },
          {
            id: "o9",
            src: "/images/private/Operation Areas_compressed_compressed.jpg",
            caption: "Dominant operational areas of waste collector dump sites.",
          },
          {
            id: "o10",
            src: "/images/private/Project Location_compressed_compressed.jpg",
            caption: "Project location map for student thesis.",
          },
          {
            id: "o11",
            src: "/images/private/Study Area Map_compressed_compressed.jpg",
            caption: "Study area map for student research.",
          },
          {
            id: "o12",
            src: "/images/private/Talensi_compressed_compressed.jpg",
            caption: "Contextual map — Talensi District.",
          },
          {
            id: "o13",
            src: "/images/private/Thesis- Contextual Map_compressed_compressed.jpg",
            caption: "Contextual map for student thesis.",
          },
        ],
      },
    ],
  },
];

const stats = [
  { value: "108+", label: "Maps produced" },
  { value: "5", label: "Major engagements" },
  { value: "3", label: "World Bank projects" },
  { value: "250+", label: "Students taught" },
];

/* ─────────────────────── UTILITY COMPONENTS ─────────────────────── */

function BrandMark({ light = false }: { light?: boolean }) {
  const baseColor = light ? "#ffffff" : "#173e35";
  const accentColor = "#cbf277";

  return (
    <span className="relative block h-10 w-10 shrink-0" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full w-full" fill="none">
        <polygon
          points="50,2 93,27 93,73 50,98 7,73 7,27"
          fill={light ? "rgba(255,255,255,0.08)" : "rgba(23,62,53,0.08)"}
          stroke={baseColor}
          strokeWidth="2.5"
          opacity="0.95"
        />
        <polygon
          points="50,14 81,32 81,68 50,86 19,68 19,32"
          fill="none"
          stroke={baseColor}
          strokeWidth="1.2"
          opacity="0.28"
        />
        <polygon
          points="50,22 73,36 73,64 50,78 27,64 27,36"
          fill="none"
          stroke={accentColor}
          strokeWidth="1.5"
          opacity="0.5"
        />
        <path
          d="M26 45 Q38 36 50 42 Q62 48 74 39"
          stroke={accentColor}
          strokeWidth="1.2"
          opacity="0.45"
        />
        <path
          d="M26 55 Q38 49 50 55 Q62 61 74 54"
          stroke={accentColor}
          strokeWidth="1"
          opacity="0.32"
        />
        <circle cx="50" cy="37.5" r="2.5" fill={accentColor} opacity="0.72" />
        <line
          x1="50"
          y1="40.5"
          x2="50"
          y2="46"
          stroke={accentColor}
          strokeWidth="1"
          opacity="0.5"
        />
        <text
          x="50"
          y="67"
          textAnchor="middle"
          fontFamily="'DM Mono', monospace"
          fontSize="16"
          fontWeight="700"
          letterSpacing="2"
          fill={baseColor}
        >
          YGC
        </text>
      </svg>
    </span>
  );
}

function MapCard({ src, caption }: MapEntry) {
  return (
    <div className="group">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-ink/8 bg-white shadow-sm">
        <img
          src={assetPath(src)}
          alt={caption}
          loading="lazy"
          className="h-full w-full object-contain bg-[#f8f6ef] p-1 transition-transform duration-500 group-hover:scale-[1.015]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/16 via-ink/3 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <p className="mt-2.5 line-clamp-2 text-[11px] leading-[1.55] text-ink/55">
        {caption}
      </p>
    </div>
  );
}

/* ─────────────────── SECTION: HERO ─────────────────── */

function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[720px] items-end overflow-hidden bg-ink text-white sm:min-h-[800px] lg:min-h-screen"
    >
      <motion.img
        src={assetPath("/images/hero/gis-urban-hero.jpg")}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,25,23,.94)_0%,rgba(7,25,23,.7)_40%,rgba(7,25,23,.12)_82%),linear-gradient(0deg,rgba(7,25,23,.75)_0%,transparent_42%)]" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1600 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <motion.path
          d="M-30 711C210 665 311 510 503 550C690 589 785 683 989 503C1161 351 1281 310 1631 269"
          stroke="#cbf277"
          strokeWidth="2"
          strokeDasharray="6 12"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 2.2, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.circle
          cx="987"
          cy="504"
          r="7"
          fill="#cbf277"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.2, type: "spring" }}
        />
      </svg>

      <div className="relative mx-auto w-full max-w-[1480px] px-5 pb-10 pt-36 sm:px-8 sm:pb-14 lg:px-12 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-5xl"
        >
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } }}
            className="mt-4 font-display text-[clamp(3.5rem,9vw,9.5rem)] leading-[.78] tracking-[-0.06em]"
          >
            Yasir <span className="block text-lime">GIS Solutions</span>
          </motion.h1>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 flex max-w-3xl flex-col gap-6 border-t border-white/25 pt-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="font-display text-xl tracking-[-0.02em] sm:text-2xl lg:text-3xl">
                Quality maps and fast service delivery at reasonable prices.
              </p>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/65 sm:text-base">
                Custom maps for research, assignments, and beyond. Bring your data to life.
              </p>
            </div>
            <a
              href="#portfolio"
              className="group inline-flex shrink-0 items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              View My Work
              <span className="grid h-11 w-11 place-items-center border border-white/40 transition-colors group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                <ArrowDown size={16} />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────── SECTION: ABOUT ─────────────────── */

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-10 bg-forest px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-lime">
              About Me
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[.96] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              I turn complex spatial data into clear, visually compelling maps.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-white/65">
              <p>
                I am{" "}
                <strong className="font-semibold text-white/90">
                  Yasir Arafat Muhammed
                </strong>
                , a GIS specialist with hands-on experience delivering spatial
                solutions for municipal assemblies, World&nbsp;Bank-funded
                programmes, researchers, professors, businesses, students, and
                individuals across Ghana. Through Yasir GIS Solutions, I transform
                complex spatial data into clear, visually compelling maps for
                research, planning, assignments, and professional projects.
              </p>
              <p className="text-white/48 italic">
                Beyond institutional projects, I produce specialized maps for
                individuals — including heavy metal and geochemical distribution
                maps, project location maps, and custom thematic maps for
                students, researchers, and professionals.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-3 border-b border-lime pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-lime"
            >
              Get in touch <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="lg:pt-6">
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                Professional experience
              </p>
              <span className="text-[10px] text-lime">Kumasi, Ghana</span>
            </div>
            <div className="max-h-[640px] overflow-y-auto pr-1">
              {experience.map((item) => (
                <div
                  key={item.years + item.role}
                  className="grid gap-2 border-b border-white/12 py-6 sm:grid-cols-[100px_1fr] sm:gap-4"
                >
                  <p className="font-mono text-[10px] tracking-[0.08em] text-lime">
                    {item.years}
                  </p>
                  <div>
                    <h3 className="font-display text-xl tracking-[-0.02em] sm:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-xs text-white/42">{item.place}</p>
                    <p className="mt-2 text-[13px] leading-[1.6] text-white/55">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-white/20 pt-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-lime lg:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-white/45">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SECTION: SERVICES ─────────────────── */

function ServicesStrip() {
  const services = [
    {
      icon: "🗺️",
      title: "Research mapping",
      text: "Study-area, project location and thematic maps for theses, assignments and funded studies.",
    },
    {
      icon: "🏗️",
      title: "Planning & infrastructure",
      text: "Structure plans, road, walkway and drainage mapping for assemblies and consultants.",
    },
    {
      icon: "⚠️",
      title: "Risk & environmental",
      text: "Flood, fire and community risk maps plus geochemical concentration visualisations.",
    },
    {
      icon: "💾",
      title: "Spatial data support",
      text: "Data cleaning, digitisation, geodatabase development and analysis.",
    },
  ];

  return (
    <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <p className="section-kicker">Services</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="bg-paper p-7 sm:p-8">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="mt-4 font-display text-xl tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-ink/50">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SECTION: PORTFOLIO ─────────────────── */

function PortfolioSection() {
  const [activeGroupId, setActiveGroupId] = useState(portfolioGroups[0].id);
  const activeGroup = portfolioGroups.find((g) => g.id === activeGroupId)!;

  return (
    <section
      id="portfolio"
      className="scroll-mt-10 bg-paper px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-[1480px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="border-b border-ink/15 pb-8"
        >
          <p className="section-kicker">My Work</p>
          <h2 className="section-title mt-3">Maps built for real&nbsp;decisions.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/55">
            From municipal master plans to focused academic studies and individual
            commissions — every output is designed to make spatial evidence easier
            to understand and act&nbsp;on.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Portfolio categories">
          {portfolioGroups.map((group) => {
            const Icon = group.icon;
            const isActive = group.id === activeGroupId;

            return (
              <button
                key={group.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveGroupId(group.id)}
                className={`inline-flex items-center gap-2.5 rounded-lg border px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-all ${
                  isActive
                    ? "border-forest bg-forest text-white shadow-md"
                    : "border-ink/12 bg-white text-ink/55 hover:border-ink/25 hover:text-ink"
                }`}
              >
                <Icon size={15} />
                {group.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroupId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-10"
          >
            <p className="max-w-3xl text-sm leading-6 text-ink/50">
              {activeGroup.description}
            </p>

            <div className="mt-10 space-y-10">
              {activeGroup.projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-ink/8 bg-white p-5 sm:p-8 lg:p-10"
                >
                  <div>
                    <h3 className="font-display text-2xl tracking-[-0.03em] sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink/45">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={12} /> {project.subtitle}
                        </span>
                      </p>
                    )}

                    <p className="mt-4 max-w-3xl text-sm leading-6 text-ink/55">
                      {project.description}
                    </p>

                    {project.elements && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.elements.map((el) => (
                          <span
                            key={el}
                            className="rounded-md border border-ink/10 bg-paper px-2.5 py-1 font-mono text-[10px] text-ink/55"
                          >
                            {el}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {project.sampleNote && (
                    <div className="mt-5 rounded-lg border border-lime/30 bg-lime/10 px-4 py-3">
                      <p className="text-xs leading-5 text-forest/80">
                        {project.sampleNote}
                      </p>
                    </div>
                  )}

                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {project.maps.map((map) => (
                      <MapCard
                        key={map.id}
                        id={map.id}
                        src={map.src}
                        caption={map.caption}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────── SECTION: HOW IT WORKS ─────────────────── */

function ProcessSection() {
  const steps = [
    ["01", "Share your brief", "Send your data, study area, preferred output and deadline."],
    ["02", "Confirm the scope", "We agree on deliverables, timing, file formats and a reasonable quote."],
    ["03", "Review your map", "Receive a clear draft, share feedback and approve the final output."],
  ];

  return (
    <section className="bg-paper px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <p className="section-kicker">A simple process</p>
        <div className="mt-8 grid border-t border-ink/15 md:grid-cols-3">
          {steps.map(([number, title, text], index) => (
            <div
              key={number}
              className={`py-8 md:px-8 md:py-10 ${
                index > 0 ? "border-t border-ink/15 md:border-l md:border-t-0" : "md:pl-0"
              }`}
            >
              <p className="font-mono text-[10px] text-forest">{number}</p>
              <h3 className="mt-7 font-display text-2xl tracking-[-0.025em] sm:text-3xl">
                {title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-ink/50">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SECTION: CONTACT ─────────────────── */

function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") || "");
    const service = String(d.get("service") || "GIS mapping enquiry");
    const message = String(d.get("message") || "");
    const subject = encodeURIComponent(`${service} enquiry from ${name}`);
    const body = encodeURIComponent(`Hello Yasir,\n\n${message}\n\nFrom: ${name}`);
    window.location.href = `mailto:muhammedarafat0000@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-10 bg-lime px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-36"
    >
      <div className="mx-auto grid max-w-[1480px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-forest">
            Get in Touch
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[.88] tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
            Bring your data to&nbsp;life.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-ink/60">
            Ready to bring your data to life? Reach out today to discuss your mapping needs.
          </p>
          <div className="mt-10 grid gap-5 text-sm">
            <a className="group flex w-fit items-center gap-3" href="tel:+233538772013">
              <Phone size={16} className="shrink-0 text-forest" /> 053&nbsp;877&nbsp;2013&nbsp;/&nbsp;055&nbsp;794&nbsp;7712{" "}
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={14} />
            </a>
            <a
              className="group flex w-fit items-center gap-3 break-all"
              href="mailto:muhammedarafat0000@gmail.com"
            >
              <Mail size={16} className="shrink-0 text-forest" /> muhammedarafat0000@gmail.com{" "}
              <ArrowRight
                className="hidden transition-transform group-hover:translate-x-1 sm:block"
                size={14}
              />
            </a>
            <a
              className="group flex w-fit items-center gap-3"
              href="https://wa.me/233557947712"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} className="shrink-0 text-forest" /> WhatsApp&nbsp;→&nbsp;Chat now
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border-t border-ink/30" aria-label="Project enquiry form">
          <label className="block border-b border-ink/20 py-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/45">
              Your name
            </span>
            <input
              name="name"
              required
              className="mt-2 block w-full bg-transparent font-display text-2xl outline-none placeholder:text-ink/22"
              placeholder="Name or organisation"
            />
          </label>

          <label className="block border-b border-ink/20 py-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/45">
              What do you need?
            </span>
            <select
              name="service"
              className="mt-2 block w-full appearance-none bg-transparent font-display text-2xl outline-none"
            >
              <option>Research mapping</option>
              <option>Planning &amp; infrastructure mapping</option>
              <option>Risk &amp; environmental analysis</option>
              <option>Spatial data support</option>
              <option>Something else</option>
            </select>
          </label>

          <label className="block border-b border-ink/20 py-5">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/45">
              Project details
            </span>
            <textarea
              name="message"
              required
              rows={3}
              className="mt-2 block w-full resize-none bg-transparent font-display text-2xl leading-snug outline-none placeholder:text-ink/22"
              placeholder="Brief, deadline and required output"
            />
          </label>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-[11px] leading-5 text-ink/40">
              Submitting opens your email app with the project details ready to&nbsp;send.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-forest"
            >
              Send enquiry{" "}
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ─────────────────── MAIN APP ─────────────────── */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 text-white backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="Yasir GIS Solutions home">
            <BrandMark light />
            <span className="font-display text-[17px] tracking-[-0.02em]">
              Yasir GIS Solutions
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.14em] md:flex"
            aria-label="Main navigation"
          >
            <a className="transition-colors hover:text-lime" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-lime" href="#portfolio">
              Work
            </a>
            <a className="transition-colors hover:text-lime" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="https://wa.me/233557947712"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border border-white/40 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors hover:border-lime hover:bg-lime hover:text-ink sm:flex"
          >
            WhatsApp <ExternalLink size={13} />
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/30 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="border-t border-white/10 bg-ink px-5 py-5 text-sm font-semibold uppercase tracking-[0.12em] md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              aria-label="Mobile navigation"
            >
              {[
                ["About", "#about"],
                ["Work", "#portfolio"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/8 py-3.5"
                >
                  {label}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesStrip />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <footer className="bg-ink px-5 py-8 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <BrandMark light />
            <div>
              <p className="font-display text-lg">Yasir GIS Solutions</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-white/40">
                Quality maps and fast service delivery at reasonable prices
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.12em] text-white/40">
            <a href="https://wa.me/233557947712" target="_blank" rel="noreferrer" className="hover:text-lime">
              WhatsApp
            </a>
            <a href="mailto:muhammedarafat0000@gmail.com" className="hover:text-lime">
              Email
            </a>
            <a href="#top" className="hover:text-lime">
              Back to top
            </a>
            <span>© 2025 Yasir GIS Solutions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
