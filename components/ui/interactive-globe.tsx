"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const skills = [
  { name: "React", position: { x: 20, y: 30 }, color: "from-blue-400 to-blue-600" },
  { name: "Node.js", position: { x: 80, y: 25 }, color: "from-green-400 to-green-600" },
  { name: "MongoDB", position: { x: 15, y: 70 }, color: "from-emerald-400 to-emerald-600" },
  { name: "AWS", position: { x: 75, y: 65 }, color: "from-orange-400 to-orange-600" },
  { name: "Docker", position: { x: 50, y: 20 }, color: "from-cyan-400 to-cyan-600" },
  { name: "GraphQL", position: { x: 30, y: 80 }, color: "from-pink-400 to-pink-600" },
  { name: "TypeScript", position: { x: 85, y: 45 }, color: "from-indigo-400 to-indigo-600" },
  { name: "Next.js", position: { x: 10, y: 50 }, color: "from-gray-400 to-gray-600" },
]

export default function InteractiveGlobe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-96 h-96">
      {/* Main globe container */}
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {/* Globe background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/20 via-violet-900/30 to-purple-900/20 border border-purple-500/30 backdrop-blur-sm">
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {/* Horizontal lines */}
            {[...Array(8)].map((_, i) => (
              <motion.ellipse
                key={`h-${i}`}
                cx="200"
                cy="200"
                rx={180 - i * 15}
                ry={20 + i * 5}
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}

            {/* Vertical lines */}
            {[...Array(12)].map((_, i) => (
              <motion.ellipse
                key={`v-${i}`}
                cx="200"
                cy="200"
                rx="180"
                ry="180"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="1"
                opacity="0.2"
                transform={`rotate(${i * 30} 200 200)`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.05 }}
              />
            ))}

            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating skill nodes */}
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="absolute"
            style={{
              left: `${skill.position.x}%`,
              top: `${skill.position.y}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, z: 10 }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
          >
            <motion.div
              className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center cursor-pointer shadow-lg`}
              animate={{
                y: [0, -5, 0],
                rotateY: [0, 360],
              }}
              transition={{
                y: { duration: 2 + index * 0.2, repeat: Number.POSITIVE_INFINITY },
                rotateY: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            >
              <span className="text-white text-xs font-bold">{skill.name.slice(0, 2).toUpperCase()}</span>

              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} opacity-50 blur-lg`} />

              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900/90 text-white text-sm rounded-lg border border-purple-500/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {skill.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90" />
                </motion.div>
              )}
            </motion.div>

            {/* Connection lines */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-px h-20 bg-gradient-to-b from-purple-500/50 to-transparent origin-top"
              style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </motion.div>
        ))}

        {/* Central core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(139, 92, 246, 0.5)",
              "0 0 40px rgba(139, 92, 246, 0.8)",
              "0 0 20px rgba(139, 92, 246, 0.5)",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-white font-bold text-lg">SA</span>
        </motion.div>

        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              rotate: 360,
              x: Math.cos(i * 60 * (Math.PI / 180)) * 120,
              y: Math.sin(i * 60 * (Math.PI / 180)) * 120,
            }}
            transition={{
              rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              x: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />
        ))}
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-violet-600/20 blur-3xl -z-10" />
    </div>
  )
}
