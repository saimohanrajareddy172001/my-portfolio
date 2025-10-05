import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Globe,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  GraduationCap,
  Award,
  Server,
  Code2,
} from "lucide-react";

/* ===== DATA ===== */
const PROFILE = {
  name: "Sai Mohan Raja Reddy Janna Reddy",
  title: "Full-Stack Developer · Python · AWS · Automation",
  location: "St. Louis, MO",
  email: "saimohanrajareddyjannareddy@gmail.com",
  phone: "(314) 412-5622",
  github: "https://github.com/saimohanrajareddy172001",
  linkedin: "https://www.linkedin.com/in/sai-mohan-raja-reddy-janna-reddy-4309291a4/",
  resumeUrl: "#", // add your actual resume link
  portfolio: "https://your-username.github.io/", // optional
};

const EDUCATION = [
  {
    school: "University of Central Missouri",
    degree: "M.S. in Computer Science",
    meta: "GPA: 3.2/4.0 · Jan 2024 – Dec 2025 (Expected) · Lee’s Summit, MO",
  },
  {
    school: "Brilliant Institute of Engineering and Technology (JNTUH), Hyderabad",
    degree: "B.Tech in Computer Science and Engineering",
    meta: "GPA: 7.2/10 · Aug 2019 – May 2023 · Hyderabad, India",
  },
];

const CERTS = [
  { name: "[NEW] Ultimate AWS Certified Cloud Practitioner (CLF-C02)", org: "Udemy", date: "Oct 2023" },
];

const PROJECTS = [
  {
    title: "SmartMealPlanner",
    stack: ["Flask", "MongoDB", "AWS"],
    summary:
      "Meal-planning app with role-based dashboards, weekly nutrition tracking, and logs. AWS auth/storage; clean REST APIs.",
    links: [{ label: "GitHub", href: "https://github.com/saimohanrajareddy172001" }],
  },
  {
    title: "Restaurant Grocery Automation",
    stack: ["n8n", "Google Sheets", "Gmail API"],
    summary:
      "Automated receipt scanning and categorized cost tracking using Google Sheets and n8n workflows.",
    links: [{ label: "Workflow", href: "https://github.com/saimohanrajareddy172001" }],
  },
  {
    title: "Cricket Club Management System",
    stack: ["Python", "Flask", "MongoDB"],
    summary:
      "Collections for Players, Teams, Matches, and Venues; admin dashboards; indexes and role permissions.",
    links: [{ label: "Source", href: "https://github.com/saimohanrajareddy172001" }],
  },
  {
    title: "Course Enrollment (AWS Cloud)",
    stack: ["React", "Node.js", "AWS", "Lambda", "RDS"],
    summary:
      "React + Node app on AWS EC2 with PostgreSQL (RDS), Lambda functions, SES for notifications, and CloudWatch logs.",
    links: [{ label: "Case Study", href: "https://github.com/saimohanrajareddy172001" }],
  },
];

const SKILLS = {
  Languages: ["Python", "Java", "SQL", "JavaScript"],
  Frameworks: ["Flask", "FastAPI", "React", "Node.js"],
  "Cloud / DevOps": [
    "AWS (EC2, RDS, S3, Lambda, SES, CloudWatch, IAM)",
    "n8n",
    "Git / GitHub",
    "Linux CLI",
  ],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  Tools: ["VS Code", "Postman", "Jupyter", "Google Sheets / Apps Script"],
};

/* ===== HELPERS ===== */
const fade = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d },
});

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

/* ===== APP ===== */
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900" style={{ fontFamily: "Inter, system-ui, Arial, sans-serif" }}>
      {/* NAV */}
      <nav className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-lg font-semibold">
            {PROFILE.name.split(" ")[0]}<span className="text-zinc-500">.dev</span>
          </a>
          <div className="hidden gap-6 text-sm sm:flex">
            <a href="#projects" className="hover:text-zinc-700">Projects</a>
            <a href="#skills" className="hover:text-zinc-700">Skills</a>
            <a href="#education" className="hover:text-zinc-700">Education</a>
            <a href="#certs" className="hover:text-zinc-700">Certs</a>
            <a href="#contact" className="hover:text-zinc-700">Contact</a>
          </div>
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
      </nav>

      {/* HERO (centered) */}
      <motion.section
        id="home"
        {...fade(0)}
        className="relative mx-4 mt-6 overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 px-6 py-14 text-center shadow-sm"
      >
        {/* soft animated background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-[-20%] h-64 w-64 rounded-full bg-zinc-100 blur-3xl animate-pulse" />
          <div className="absolute right-[-10%] bottom-[-20%] h-72 w-72 rounded-full bg-zinc-100 blur-3xl animate-pulse" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl"
        >
          <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent">
            {PROFILE.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-3 max-w-2xl text-lg text-zinc-600"
        >
          {PROFILE.title}
        </motion.p>

        {/* contact strip (like resume) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-4 flex flex-wrap items-center justify-center text-sm text-zinc-900"
        >
          <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1 hover:underline">
            <Mail className="h-4 w-4" /> {PROFILE.email}
          </a>

          <span className="mx-3 text-zinc-400">—</span>

          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>

          <span className="mx-3 text-zinc-400">—</span>

          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
            <Github className="h-4 w-4" /> GitHub
          </a>

          <span className="mx-3 text-zinc-400">—</span>

          <a href={PROFILE.portfolio} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
            <Globe className="h-4 w-4" /> Portfolio
          </a>
        </motion.div>

        {/* location + phone */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-600"
        >
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {PROFILE.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Phone className="h-4 w-4" /> {PROFILE.phone}
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-50"
          >
            <Download className="h-4 w-4" /> Résumé
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-900 bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            <Code2 className="h-4 w-4" /> View Projects
          </a>
        </motion.div>
      </motion.section>

      <div className="my-10" />

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24">
        <div className="mb-4 flex items-center gap-2">
          <Code2 className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Projects</h2>
        </div>
        <motion.div {...fade(0.1)} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Card key={i} className="p-4">
              <div className="mb-2 flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="flex flex-wrap justify-end gap-1">
                  {p.stack.map((s, j) => (
                    <span key={j} className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-zinc-600">{p.summary}</p>
              <div className="mt-3 flex gap-2">
                {p.links.map((l, k) => (
                  <a
                    key={k}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" /> {l.label}
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>
      </section>

      <div className="my-10" />

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24">
        <div className="mb-4 flex items-center gap-2">
          <Server className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Skills</h2>
        </div>
        <motion.div {...fade(0.1)} className="grid gap-6 md:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items]) => (
            <Card key={group} className="p-4">
              <h4 className="mb-2 font-semibold">{group}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((it, idx) => (
                  <span key={idx} className="rounded-full border border-zinc-200 bg-white px-2 py-1 text-xs">
                    {it}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>
      </section>

      <div className="my-10" />

      {/* EDUCATION */}
      <section id="education" className="scroll-mt-24">
        <div className="mb-4 flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Education</h2>
        </div>
        <motion.div {...fade(0.1)} className="space-y-4">
          {EDUCATION.map((e, i) => (
            <Card key={i} className="p-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold">{e.school}</p>
                <p className="text-sm text-zinc-600">{e.meta}</p>
              </div>
              <p className="mt-1 text-sm text-zinc-700">{e.degree}</p>
            </Card>
          ))}
        </motion.div>
      </section>

      <div className="my-10" />

      {/* CERTIFICATIONS */}
      <section id="certs" className="scroll-mt-24">
        <div className="mb-4 flex items-center gap-2">
          <Award className="h-5 w-5" />
          <h2 className="text-xl font-semibold">Certifications</h2>
        </div>
        <motion.ul {...fade(0.1)} className="space-y-3">
          {CERTS.map((c, i) => (
            <li key={i} className="rounded-2xl border border-zinc-200 bg-white/90 p-4">
              <p className="font-medium">{c.name}</p>
              <p className="text-sm text-zinc-600">{c.org} · {c.date}</p>
            </li>
          ))}
        </motion.ul>
      </section>

      <div className="my-12" />

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <Card className="p-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-lg font-semibold">Let’s build something!</h3>
              <p className="text-sm text-zinc-600">
                I’m open to internships and full-time roles in full-stack, cloud, or automation.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50" href={`mailto:${PROFILE.email}`}>
                <Mail className="h-4 w-4" /> Email
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-3 py-1.5 text-sm hover:bg-zinc-50" href={PROFILE.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </Card>
      </section>

      <div className="h-px my-10 bg-zinc-200" />
      <footer className="py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind.
      </footer>
    </div>
  );
}