"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Cloud, Wrench, Zap, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Front-End Development",
    icon: Code,
    color: "#3B82F6",
    skills: ["React (Redux)", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Vue.js"],
  },
  {
    title: "Back-End Development",
    icon: Database,
    color: "#10B981",
    skills: ["Node.js", "Express.js", "Laravel", "RESTful APIs"],
  },
  {
    title: "Databases",
    icon: Cloud,
    color: "#8B5CF6",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma"],
  },
  {
    title: "DevOps & Cloud",
    icon: Wrench,
    color: "#F59E0B",
    skills: ["AWS", "Docker", "Nginx", "Vercel", "Netlify", "Render", "Kinsta", "Hostinger"],
  },
  {
    title: "Real-Time & APIs",
    icon: Zap,
    color: "#EF4444",
    skills: ["WebSocket", "GraphQL", "Swagger", "Third-party APIs", "Payment Integrations"],
  },
  {
    title: "Tools & Collaboration",
    icon: Users,
    color: "#8B5CF6",
    skills: ["Git", "Jira", "Slack", "ClickUp", "Trello", "Jest"],
  },
]

const additionalExpertise = [
  {
    icon: "🔧",
    title: "Version Control",
    description: "Git, GitHub workflows",
  },
  {
    icon: "🧪",
    title: "Testing",
    description: "Jest, Unit Testing",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Mobile-first approach",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="group cursor-hover"
            >
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-500 h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: category.color }}
                  >
                    <category.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group/item"
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-purple-400 mb-8">Additional Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalExpertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 cursor-hover group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
