"use client"

import dynamic from "next/dynamic"
import { Suspense, useEffect, useState } from "react"
import Navbar from "@/components/layout/navbar"
import Hero from "@/components/sections/hero"
import LoadingScreen from "@/components/ui/loading-screen"

// Dynamic imports for heavy components with loading states
const CursorEffect = dynamic(() => import("@/components/ui/cursor-effect"), {
  ssr: false,
  loading: () => null,
})

const About = dynamic(() => import("@/components/sections/about"), {
  loading: () => <SectionSkeleton />,
})

const Skills = dynamic(() => import("@/components/sections/skills"), {
  loading: () => <SectionSkeleton />,
})

const Experience = dynamic(() => import("@/components/sections/experience"), {
  loading: () => <SectionSkeleton />,
})

const Projects = dynamic(() => import("@/components/sections/projects"), {
  loading: () => <SectionSkeleton />,
})

const Contact = dynamic(() => import("@/components/sections/contact"), {
  loading: () => <SectionSkeleton />,
})

// Lightweight skeleton loader
function SectionSkeleton() {
  return (
    <div className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-800/50 rounded w-1/3 mx-auto" />
          <div className="h-4 bg-gray-800/50 rounded w-1/2 mx-auto" />
          <div className="grid gap-4 mt-8">
            <div className="h-32 bg-gray-800/30 rounded" />
            <div className="h-32 bg-gray-800/30 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // 1 second loading

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <CursorEffect />
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </main>
  )
}
