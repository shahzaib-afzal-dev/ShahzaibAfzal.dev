"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Building, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "360SynergyTech",
    position: "Full Stack Developer",
    duration: "2023 - Present",
    location: "Remote",
    type: "Full-time",
    description:
      "Leading development of innovative web applications with focus on real-time features and scalable architecture.",
    responsibilities: [
      "Developing a real-time chat application with integrated AI models for advanced features",
      "Implementing and managing secure payment systems to handle transactions and subscriptions",
      "Designing and maintaining database schemas for efficient record-keeping and data retrieval",
      "Developing features for users to upload and manage files and images, ensuring secure and scalable storage solutions",
      "Overseeing the deployment process, including server configuration, load balancing, and monitoring",
    ],
    technologies: ["Node.js", "React", "MongoDB", "WebSocket", "AWS", "Docker", "AI Integration"],
    achievements: [
      "Improved application performance by 40%",
      "Successfully deployed 5+ production applications",
      "Reduced server costs by 25% through optimization",
    ],
  },
  {
    company: "Xenure.co",
    position: "MERN Stack Developer",
    duration: "2022 - 2023",
    location: "Remote",
    type: "Full-time",
    description:
      "Built and maintained robust web applications using the MERN stack with focus on performance and user experience.",
    responsibilities: [
      "Built and maintained web applications using the MERN stack (MongoDB, Express.js, React, Node.js)",
      "Wrote clean, efficient, and reusable code, adhering to best practices and leveraging asynchronous programming",
      "Integrated user authentication systems to enhance application security and user experience",
      "Utilized Git for version control and collaborative development",
      "Designed and implemented back-end solutions with Node.js and Express.js",
      "Optimized application performance and ensured scalability",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "MySQL", "Git", "JWT"],
    achievements: [
      "Delivered 10+ successful projects",
      "Improved code quality through comprehensive testing",
      "Mentored 2 junior developers",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#1a0a2e]/20 to-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            Professional Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key contributions in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-violet-600 to-purple-500 rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full border-4 border-[#0a0a0a] z-10 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full blur-md opacity-50" />
                </div>

                {/* Content */}
                <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group overflow-hidden"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Header */}
                    <div className="relative mb-6">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span
                          className={`px-3 py-1 ${exp.type === "Full-time" ? "bg-green-600" : "bg-blue-600"} text-white text-sm rounded-full font-medium`}
                        >
                          {exp.type}
                        </span>
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">{exp.location}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {exp.position}
                      </h3>

                      <div className="flex items-center text-purple-400 mb-2">
                        <Building size={18} className="mr-2" />
                        <span className="font-semibold text-lg">{exp.company}</span>
                      </div>

                      <div className="flex items-center text-gray-400 mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    </div>

                    {/* Responsibilities */}
                    <div className="relative mb-6">
                      <h4 className="text-white font-semibold mb-4 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                            className="text-gray-300 text-sm flex items-start group/item"
                          >
                            <span className="text-purple-400 mr-3 mt-1.5 group-hover/item:text-violet-400 transition-colors duration-200">
                              •
                            </span>
                            <span className="group-hover/item:text-white transition-colors duration-200">
                              {responsibility}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="relative mb-6">
                      <h4 className="text-white font-semibold mb-4 flex items-center">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.05 }}
                            className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/30 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-violet-600/20 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="relative">
                      <h4 className="text-white font-semibold mb-4 flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 + 0.3 }}
                            className="text-gray-300 text-sm flex items-start group/achievement"
                          >
                            <span className="text-emerald-400 mr-3 mt-1.5 group-hover/achievement:text-emerald-300 transition-colors duration-200">
                              ✓
                            </span>
                            <span className="group-hover/achievement:text-white transition-colors duration-200">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="text-purple-400" size={20} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-violet-600/10 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we
              can bring your ideas to life.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
