"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Create a bubble component
const Bubble = ({
  size,
  delay,
  duration,
  left,
  top,
}: {
  size: number
  delay: number
  duration: number
  left: string
  top: string
}) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white/30"
      style={{
        width: size,
        height: size,
        left,
        top,
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 0.7, 0],
        y: -100,
        scale: [1, 1.2, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
    />
  )
}

export function FloatingElements() {
  const [bubbles, setBubbles] = useState<React.ReactNode[]>([])

  useEffect(() => {
    // Create 20 random bubbles
    const newBubbles = Array.from({ length: 20 }).map((_, i) => {
      const size = Math.random() * 20 + 5
      const delay = Math.random() * 2
      const duration = Math.random() * 3 + 2
      const left = `${Math.random() * 100}%`
      const top = `${Math.random() * 100}%`

      return <Bubble key={i} size={size} delay={delay} duration={duration} left={left} top={top} />
    })

    setBubbles(newBubbles)
  }, [])

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{bubbles}</div>
}

