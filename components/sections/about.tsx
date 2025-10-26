"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, GraduationCap, Code, Users } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#1a0a2e]/30 to-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Crafting Digital Excellence Through{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Image and decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl -rotate-6 opacity-20" />
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-purple-500/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-violet-600/10" />
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">SA</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Shahzaib Afzal</h3>
                      <p className="text-purple-400">Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center"
                animate={{ rotate: 360, y: [0, -10, 0] }}
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Code className="text-white" size={24} />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center"
                animate={{ rotate: -360, x: [0, 10, 0] }}
                transition={{
                  rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  x: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Users className="text-white" size={16} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                Software Engineer with over two+ years of experience, seeking a full-time role to tackle complex
                challenges. I specialize in leveraging technical expertise, strong interpersonal abilities, and creative
                problem-solving to deliver innovative solutions.
              </p>

              <p className="text-gray-400 leading-relaxed">
                My journey in software development has been driven by a passion for creating scalable, efficient, and
                user-centric applications. I thrive in collaborative environments and am committed to continuous
                learning and growth in the ever-evolving tech landscape.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <h4 className="text-white font-semibold">Location</h4>
                </div>
                <p className="text-gray-300">Doha, Qatar</p>
                {/* <p className="text-sm text-purple-400">Relocating to Qatar</p> */}
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <h4 className="text-white font-semibold">Experience</h4>
                </div>
                <p className="text-gray-300">3+ Years</p>
                <p className="text-sm text-blue-400">Full Stack Development</p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 sm:col-span-2"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                  <h4 className="text-white font-semibold">Education</h4>
                </div>
                <p className="text-gray-300">BS Computer Science</p>
                <p className="text-sm text-emerald-400">Superior University Lahore</p>
              </motion.div>
            </div>

            {/* Languages */}
            <div className="bg-gradient-to-r from-purple-600/10 to-violet-600/10 p-6 rounded-xl border border-purple-500/20">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full text-sm font-medium">
                  English (Fluent)
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full text-sm font-medium">
                  Urdu (Native)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
