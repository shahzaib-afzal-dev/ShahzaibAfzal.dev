"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect, useMemo } from "react"
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiAmazon, 
  SiDocker, 
  SiGraphql, 
  SiTypescript, 
  SiNextdotjs, 
  SiPostgresql, 
  SiRedis 
} from "react-icons/si"
import type { IconType } from "react-icons"

const skills = [
  { name: "React", icon: SiReact, position: { x: 25, y: 20, z: 0.8 }, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, position: { x: 75, y: 30, z: 0.6 }, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, position: { x: 20, y: 60, z: 0.9 }, color: "#47A248" },
  { name: "AWS", icon: SiAmazon, position: { x: 80, y: 70, z: 0.7 }, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, position: { x: 45, y: 15, z: 0.5 }, color: "#2496ED" },
  { name: "GraphQL", icon: SiGraphql, position: { x: 15, y: 80, z: 0.8 }, color: "#E10098" },
  { name: "TypeScript", icon: SiTypescript, position: { x: 85, y: 45, z: 0.6 }, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, position: { x: 10, y: 40, z: 0.9 }, color: "#FFFFFF" },
  { name: "PostgreSQL", icon: SiPostgresql, position: { x: 70, y: 85, z: 0.7 }, color: "#336791" },
  { name: "Redis", icon: SiRedis, position: { x: 90, y: 25, z: 0.5 }, color: "#DC382D" },
]

export default function RealisticGlobe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const shouldReduceMotion = useReducedMotion()

  // Throttle mouse updates for better performance
  useEffect(() => {
    let rafId: number
    let lastUpdate = 0
    const throttleMs = 50 // Update at most every 50ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastUpdate < throttleMs) return
      
      const rect = document.getElementById("globe-container")?.getBoundingClientRect()
      if (rect) {
        cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          const x = (e.clientX - rect.left - rect.width / 2) / rect.width
          const y = (e.clientY - rect.top - rect.height / 2) / rect.height
          setMousePosition({ x, y })
          setRotation({ x: y * 20, y: x * 20 })
          lastUpdate = now
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div id="globe-container" className="relative w-96 h-96 cursor-hover">
      {/* Globe container with 3D perspective */}
      <motion.div
        className="relative w-full h-full"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y + 360,
        }}
        transition={{
          rotateY: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          rotateX: { type: "spring", stiffness: 100, damping: 20 },
        }}
      >
        {/* Main globe sphere */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900/80 via-purple-900/20 to-gray-900/80 border border-purple-500/30 backdrop-blur-sm overflow-hidden">
          {/* Globe surface with realistic texture */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-purple-500/5 to-transparent" />

          {/* Latitude lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {[...Array(8)].map((_, i) => (
              <motion.ellipse
                key={`lat-${i}`}
                cx="200"
                cy="200"
                rx={180 - i * 15}
                ry={15 + i * 3}
                fill="none"
                stroke="url(#latGradient)"
                strokeWidth="0.5"
                opacity={0.3 - i * 0.03}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}

            {/* Longitude lines */}
            {[...Array(16)].map((_, i) => (
              <motion.ellipse
                key={`lng-${i}`}
                cx="200"
                cy="200"
                rx="180"
                ry="180"
                fill="none"
                stroke="url(#lngGradient)"
                strokeWidth="0.3"
                opacity={0.2}
                transform={`rotate(${i * 22.5} 200 200)`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.05 }}
              />
            ))}

            <defs>
              <linearGradient id="latGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lngGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Atmospheric glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-transparent to-violet-500/10 blur-sm" />
        </div>

        {/* Floating skill nodes with 3D positioning */}
        {skills.map((skill, index) => {
          const zOffset = (skill.position.z - 0.5) * 100
          const scale = 0.7 + skill.position.z * 0.6

          return (
            <motion.div
              key={skill.name}
              className="absolute cursor-hover"
              style={{
                left: `${skill.position.x}%`,
                top: `${skill.position.y}%`,
                transform: `translate(-50%, -50%) translateZ(${zOffset}px) scale(${scale})`,
                zIndex: Math.floor(skill.position.z * 10),
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: scale, opacity: skill.position.z > 0.3 ? 1 : 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: scale * 1.3, z: 20 }}
            >
              <motion.div
                className="relative group"
                animate={{
                  y: [0, -8, 0],
                  rotateY: [0, 360],
                }}
                transition={{
                  y: { duration: 3 + index * 0.2, repeat: Number.POSITIVE_INFINITY },
                  rotateY: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
              >
                {/* Skill node */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                    boxShadow: `0 0 20px ${skill.color}40, inset 0 0 20px ${skill.color}20`,
                  }}
                >
                  <skill.icon size={24} style={{ color: skill.color }} />
                </div>

                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-full blur-lg opacity-60"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}40, transparent)`,
                  }}
                />

                {/* Connection line to center */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-px origin-left"
                  style={{
                    height: `${Math.sqrt(Math.pow(50 - skill.position.x, 2) + Math.pow(50 - skill.position.y, 2))}px`,
                    background: `linear-gradient(to right, ${skill.color}40, transparent)`,
                    transform: `translate(-50%, -50%) rotate(${(Math.atan2(50 - skill.position.y, 50 - skill.position.x) * 180) / Math.PI}deg)`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900/90 text-white text-sm rounded-lg border border-purple-500/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90" />
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}

        {/* Central core with enhanced 3D effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full cursor-hover"
          style={{
            background: "radial-gradient(circle at 30% 30%, #a855f7, #8b5cf6, #7c3aed)",
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)",
          }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 40px rgba(139, 92, 246, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)",
              "0 0 60px rgba(139, 92, 246, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.2)",
              "0 0 40px rgba(139, 92, 246, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-white font-bold text-xl">SA</span>
          </div>

          {/* Inner highlight */}
          <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full blur-sm" />
        </motion.div>

        {/* Orbiting particles - Reduced for performance */}
        {!shouldReduceMotion && [...Array(4)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              rotate: 360,
              x: Math.cos(i * 45 * (Math.PI / 180)) * (120 + i * 10),
              y: Math.sin(i * 45 * (Math.PI / 180)) * (120 + i * 10),
            }}
            transition={{
              rotate: { duration: 10 + i, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              x: { duration: 10 + i, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              y: { duration: 10 + i, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />
        ))}
      </motion.div>

      {/* Outer atmospheric effects */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-violet-600/10 blur-3xl -z-10 animate-pulse" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/5 to-violet-500/5 blur-2xl -z-10" />
    </div>
  )
}
