"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Code, Zap, Eye, Star } from "lucide-react"

const projects = [
  {
    title: "Real-time Chat Application",
    description:
      "A comprehensive chat application with AI integration, real-time messaging, file sharing, and advanced features for seamless communication.",
    longDescription:
      "Built with modern technologies to provide instant messaging capabilities with AI-powered responses, secure file sharing, and real-time notifications. Features include user authentication, message encryption, and scalable architecture.",
    image: "/placeholder.svg?height=400&width=600&text=Chat+App",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AI Integration", "Redis"],
    features: [
      "Real-time messaging",
      "AI-powered responses",
      "File sharing",
      "User authentication",
      "Message encryption",
    ],
    category: "Full Stack",
    status: "In Development",
    github: "#",
    demo: "#",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "E-commerce Platform",
    description:
      "Complete e-commerce solution with payment integration, inventory management, and admin dashboard for business operations.",
    longDescription:
      "A full-featured e-commerce platform built with scalability in mind. Includes secure payment processing, real-time inventory tracking, order management, and comprehensive analytics dashboard.",
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
    technologies: ["MERN Stack", "Stripe", "Redux", "JWT", "AWS S3", "Docker"],
    features: ["Payment processing", "Inventory management", "Order tracking", "Admin dashboard", "Analytics"],
    category: "Full Stack",
    status: "Completed",
    github: "#",
    demo: "#",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with team features, task tracking, and real-time updates for enhanced productivity.",
    longDescription:
      "A comprehensive project management solution designed for teams. Features include task assignment, progress tracking, team collaboration tools, and real-time notifications to keep everyone synchronized.",
    image: "/placeholder.svg?height=400&width=600&text=Task+Management",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSocket", "Docker", "Redis"],
    features: ["Team collaboration", "Task tracking", "Real-time updates", "File management", "Time tracking"],
    category: "Full Stack",
    status: "Completed",
    github: "#",
    demo: "#",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "API Gateway Service",
    description:
      "Microservices architecture with API gateway, authentication, rate limiting, and monitoring for scalable applications.",
    longDescription:
      "A robust API gateway solution that handles authentication, rate limiting, load balancing, and monitoring for microservices architecture. Built for high availability and scalability.",
    image: "/placeholder.svg?height=400&width=600&text=API+Gateway",
    technologies: ["Node.js", "Express", "Redis", "Docker", "Nginx", "JWT"],
    features: ["Rate limiting", "Authentication", "Load balancing", "Monitoring", "Caching"],
    category: "Backend",
    status: "Completed",
    github: "#",
    demo: "#",
    color: "from-orange-500 to-red-600",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

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

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
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
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-yellow-400">
                      <Star size={16} className="mr-1" />
                      <span className="text-sm">4.9</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {selectedProject === index ? project.longDescription : project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
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
                    <motion.a
                      href={project.github}
                      className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl text-sm font-medium transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
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
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">View All Projects</span>
            <ExternalLink size={16} className="inline group-hover:rotate-12 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
