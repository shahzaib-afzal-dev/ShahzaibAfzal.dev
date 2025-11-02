"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Code, Zap, Eye, Star } from "lucide-react"

const projects = [
  {
  title: "Flush Warranty",
  description: "A warranty-management web application built with modern stack integration.",
  longDescription: "Flush Warranty is a full-fledged web application designed to streamline warranty claims, customer interactions, and inspections. Built using React on the the front end, it offers a clean, responsive UI. On the backend / workflow side, it integrates with the marketing / CRM platform GoHighLevel (Go High Level) to manage leads, automate communications, follow-ups, and workflow automation (e.g. sending inspection offers, tracking claims).",
  image: "/projects/project1.PNG",
  technologies: ["React", "Go High Level", "REST / API integration", "Tailwind CSS", "Node.js "],
  features: [
    "Responsive design and modern UI with React components",
    "Integration with CRM / marketing automation (Go High Level) to handle leads, customer data & campaigns",
    "Warranty claim submission and tracking",
    "Inspection booking & promotional offers for first service / inspection",
    "Automated follow-ups and notifications using CRM workflows"
  ],
  category: "Full Stack / SaaS / CRM integration",
  status: "Completed",
  github: "# (or insert your repo link)",
  demo: "https://flushwarranty.com",
  color: "from-blue-500 to-cyan-600"
},

{
  title: "The Gift Guide platform",
  description: "A dynamic gift-curation & wish-list platform with seamless social + event reminder features.",
  longDescription: "A full-featured platform that allows users to create wish lists, browse trending gift suggestions, receive event reminders for upcoming occasions, and connect with loved ones to share gift ideas. Built with scalability, real-time interactions, personalization, and performance in mind.",
  image: "/projects/project2.png",
  technologies: ["React", "Node.js / Express", "MongoDB", "Redis", "GraphQL", "Docker", "AWS (Lambda + S3 + CloudFront)"],
  features: [
    "User wish lists & gift tracking",
    "Event reminders (birthdays, anniversaries, etc.)",
    "Trending gift suggestions & curated guides",
    "Social sharing & connection with friends/family",
    "Push / email reminders for upcoming events",
    "Personalization & recommendations engine"
  ],
  category: "Full Stack / SaaS",
  status: "Completed",
  github: "#",
  demo: "https://thegiftguide.com",
  color: "from-emerald-500 to-green-600"
},

  {
  title: "AllStars Medical Billing Platform",
  description: "Advanced medical billing & credentialing system with strong compliance and workflow automation.",
  longDescription: "A sophisticated platform combining frontend excellence, a robust backend architecture, and strict regulatory compliance to manage medical billing, credentialing, patient eligibility, claim submission, and patient billing workflows at scale for healthcare providers across many specialties.",
  image: "/projects/project3.png",
  technologies: ["React", "Node.js / Express", "PostgreSQL or MySQL", "Redis (caching)", "Python (for batch / analytics)", "Docker / Kubernetes", "AWS or other cloud infrastructure"],
  features: [
    "Claim submission & revenue cycle automation",
    "Credentialing & provider onboarding workflow",
    "Eligibility & benefit verification",
    "Prior authorization handling",
    "Patient billing & collections tracking",
    "Analytics / reporting & denial tracking",
    "HIPAA-compliant data handling and secure file transfer"
  ],
  category: "Full Stack / SaaS / Workflow Automation",
  status: "Completed",
  github: "#",
  demo: "https://allstarsmb.com",
  color: "from-purple-500 to-violet-600"
}
,
  {
  title: "My Story Vault Platform",
  description: "Enterprise / creator-grade journaling & memory platform with storytelling workflows.",
  longDescription: "A robust platform designed for capturing, preserving, and sharing personal stories & memories. It allows users to reflect via prompts, compile memories into custom formats (books or journals), and share or archive their stories in a structured, legacy-focused way. Built for reliability, scalability, and long-term archiving of content.",
  image: "/projects/project4.png",
  technologies: ["Next.js", "Node.js / Express", "MongoDB / document store", "AWS (S3, Lambda, CloudFront)", "Stripe or similar payments / subscription integration", "Docker / Kubernetes"],
  features: [
    "Story / prompt based journaling workflow",
    "Custom printable hardcover or digital storybooks",
    "User accounts + subscription / upsell flows",
    "Cloud storage & backup for long term archival",
    "Content export (PDF / print ready)",
    "Sharing with family or private archive",
    "Scalable infrastructure for many user generated entries"
  ],
  category: "Full Stack / SaaS",
  status: "Completed",
  github: "#",
  demo: "https://mystoryvault.co",
  color: "from-orange-500 to-red-600"
}
,
  {
  title: "Core Cash Offer Platform",
  description: "Creative real-estate offer platform with interactive visuals and user-friendly flow.",
  longDescription: "An artistic frontend project combining design excellence with technical precision to present property offers, comparisons and lead capture in an engaging interface with subtle 3D / animated elements and smooth interactions.",
  image: "/projects/project5.png",
  technologies: ["React", "Three.js", "WebGL", "GSAP", "Tailwind CSS", "TypeScript"],
  features: [
    "3D graphics or interactive object views (e.g. property previews or interactive UI elements)",
    "Animations for transitions and calls to action",
    "Interactive form flows and lead capture",
    "Optimized performance & responsiveness on desktop / mobile"
  ],
  category: "Frontend",
  status: "Completed",
  github: "#",
  demo: "https://corecashoffer.com",
  color: "from-pink-500 to-rose-600"
}
,
  {
  title: "Act of Sharing (Frontend)",
  description: "Collaborative platform for events, contributions & messaging with responsive design.",
  longDescription: "A complete frontend application for managing events, accepting contributions, and facilitating user messaging and interactions. It supports authentication, event creation/management, contributions / donations, and real-time or near-real-time messaging or notifications in a responsive and polished UI.",
  image: "/projects/project6.png",
  technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Stripe"],
  features: [
    "User authentication & authorization",
    "Event management (create / edit / list events)",
    "Contribution / donation flows (payments via Stripe)",
    "Responsive design with modern UI",
    "Routing via React Router",
    "Build & deploy via Vite (fast dev / optimized build)"
  ],
  category: "Frontend",
  status: "Completed",
  github: "https://github.com/AbdulHaye/act-of-sharing-frontend",
  demo: "#", 
  color: "from-indigo-500 to-blue-600"
}
,
  {
  title: "RapidSkip Skiptracing Platform",
  description: "Data-driven skip-tracing & lead generation platform tailored for real estate investors.",
  longDescription: "A sophisticated analytics & skip-tracing platform that allows real estate professionals to upload lists, get high accuracy contact data, and generate lead insights. It combines data aggregation from multiple public / proprietary records, list processing, pricing models, and interfaces for managing leads & campaigns.",
  image: "/projects/project7.png",
  technologies: ["React", "Node.js / Express", "PostgreSQL or MySQL", "Redis / cache layer", "AWS (S3, Lambda, API endpoints)", "REST-oriented API or GraphQL"],
  features: [
    "Upload / submit list of records (property owners / seller leads)",
    "Skip-trace each record to get contact info with high accuracy (phone numbers, addresses, etc.)",
    "Pricing model per record (e.g. $0.05 / record) and membership tiers",
    "Free list generation capabilities / no minimum records",
    "Dashboard for managing leads, results, contact records",
    "Affiliate / referral dashboard",
    "Reports & analytics on lead conversions / campaign results"
  ],
  category: "Full Stack",
  status: "Completed",
  github: "#",
  demo: "https://rapidskip.us",
  color: "from-teal-500 to-cyan-600"
}
,
  {
  title: "StopShopREI Lead Generation App",
  description: "Omni-channel lead generation & outreach application.",
  longDescription: "A responsive application built to support lead generation, outreach campaigns (text, ringless voicemail, postcards, emails), and CRM workflows optimized for real estate investor / agent marketing operations. Supports campaign management, lead capture, and staff workflow integrations.",
  image: "/projects/project8.png",
  technologies: ["React", "Firebase (Auth + Realtime / Firestore)", "Redux / React Context", "Expo", "Node.js backend (or Firebase Cloud Functions)", "Push Notifications / background sync"],
  features: [
    "Cross-platform web app for campaign / lead management",
    "Offline support and background sync for field agents or VAs",
    "Push notifications for new leads, follow up reminders",
    "Sync with backend CRM / database and campaign pipelines"
  ],
  category: "Web / Cross-platform",
  status: "Completed",
  github: "#",
  demo: "#",
  color: "from-yellow-500 to-orange-600"
}
,
  {
  title: "AI Frontend Client",
  description: "Modern frontend client for AI / data-driven application.",
  longDescription: "A frontend client built to integrate with AI services or backend APIs, handling user input, visualizations, and interactive flows in a responsive, modern UI.",
  image: "/projects/project9.png",
  technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  features: [
    "User interface for interacting with AI models / endpoints",
    "Responsive / mobile-friendly layout",
    "Client-side state management (hooks / context)",
    "Integration with backend or AI service endpoints"
  ],
  category: "Frontend",
  status: "In Progress",
  github: "https://github.com/aifrondendclient/aifrondendclient",
  demo: "#",
  color: "from-green-500 to-emerald-600"
}
,
  {
  title: "Rehan Roshni Cleaning Platform",
  description: "Booking & management system for cleaning & maintenance services.",
  longDescription: "A responsive web platform enabling users to schedule cleaning, maintenance, pest control and property care services. Supports service catalog, booking slots, user accounts, admin management, and backend operations for service providers.",
  image: "/projects/project10.png",
  technologies: ["Next.js", "React", "Tailwind CSS", "Firebase / Firestore or MongoDB", "Node.js / Express", "Stripe or payment integration"],
  features: [
    "Service catalog: cleaning, maintenance, pest control, property care tasks",
    "Booking scheduling with time slots and availability",
    "User / customer accounts & profile management",
    "Admin dashboard for staff / cleaning crew assignment",
    "Notifications and reminders for scheduled services",
    "Responsive design optimized for desktop & mobile customers"
  ],
  category: "Full Stack",
  status: "Completed",
  github: "#",
  demo: "https://rehan-roshni-cleaning.vercel.app",
  color: "from-violet-500 to-purple-600"
}
,
  {
  title: "Cullinan Clean Services Platform",
  description: "Booking & management platform for professional cleaning services.",
  longDescription: "A responsive web application that allows customers to browse cleaning service options, schedule jobs (residential or commercial), view/modify bookings, and manage accounts. Includes admin interface for cleaning crew management, job assignment, and status tracking.",
  image: "/projects/project11.png",
  technologies: ["Next.js", "React", "Tailwind CSS", "Firebase / Firestore or MongoDB", "Node.js / Express", "Stripe or payment integration", "Vercel hosting"],
  features: [
    "Service catalogue for cleaning (house, offices, schools, private buildings)",
    "Booking scheduler with time slots and cleaning team assignment",
    "Customer account dashboard with booking history & profile management",
    "Admin / crew interface to manage jobs and update status",
    "Responsive design optimized for mobile and desktop customers",
    "Payment / deposit integration for service bookings"
  ],
  category: "Full Stack",
  status: "Completed",
  github: "#",
  demo: "https://cullinan-clean.vercel.app",
  color: "from-red-500 to-pink-600"
}
,
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [displayCount, setDisplayCount] = useState(4)
  const projectsPerPage = 4

  const displayedProjects = projects.slice(0, Math.min(displayCount, projects.length))
  const hasMore = displayCount < projects.length

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            Featured Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my latest work and technical achievements in web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 auto-rows-fr">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 overflow-hidden flex flex-col h-full">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Status and category badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === "Completed" ? "bg-green-600 text-white" : "bg-orange-600 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-medium rounded-full`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Quick actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                    >
                      <Eye size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {/* <div className="flex items-center text-yellow-400">
                      <Star size={16} className="mr-1" />
                      <span className="text-sm">4.9</span>
                    </div> */}
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed min-h-[5rem]">
                    {selectedProject === index ? project.longDescription : project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
                      <Zap size={16} className="mr-2" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features
                        .slice(0, selectedProject === index ? project.features.length : 4)
                        .map((feature, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="text-gray-300 text-sm flex items-center group/feature"
                          >
                            <span className="text-purple-400 mr-2 group-hover/feature:text-violet-400 transition-colors duration-200">
                              •
                            </span>
                            <span className="group-hover/feature:text-white transition-colors duration-200">
                              {feature}
                            </span>
                          </motion.span>
                        ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
                      <Code size={16} className="mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/30 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-violet-600/20 hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    {project.github && project.github !== "#" && !project.github.includes("# (") ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl text-sm font-medium transition-all duration-300 group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                        Code
                      </motion.a>
                    ) : (
                      <motion.button
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl text-sm font-medium transition-all duration-300 group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                        Code
                      </motion.button>
                    )}
                    {project.demo && project.demo !== "#" ? (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl text-sm font-medium transition-all duration-300 group/btn`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink
                          size={16}
                          className="mr-2 group-hover/btn:rotate-12 transition-transform duration-200"
                        />
                        Live Demo
                      </motion.a>
                    ) : (
                      <motion.button
                        onClick={(e) => e.preventDefault()}
                        className={`flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl text-sm font-medium transition-all duration-300 group/btn`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                        Live Demo
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more projects button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setDisplayCount((prev) => Math.min(prev + projectsPerPage, projects.length))}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Load More Projects</span>
              <ExternalLink size={16} className="inline group-hover:rotate-12 transition-transform duration-200" />
            </motion.button>
          </motion.div>
        )}

        {/* Showing count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-8 text-gray-400 text-sm"
        >
          Showing {Math.min(displayCount, projects.length)} of {projects.length} projects
        </motion.div>
      </div>
    </section>
  )
}
