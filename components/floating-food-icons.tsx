"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Coffee,
  Pizza,
  Sandwich,
  Beef,
  Utensils,
  Soup,
  IceCream,
  Martini,
  BeefIcon as Burger,
  Salad,
  Cake,
} from "lucide-react"

type FoodIconType = "fastfood" | "noodles" | "beverages" | "sandwich" | "soda"

interface FloatingIconProps {
  icon: React.ReactNode
  x: number
  y: number
  delay: number
  duration: number
  size: number
  color: string
  rotation: number
}

const FloatingIcon = ({ icon, x, y, delay, duration, size, color, rotation }: FloatingIconProps) => {
  return (
    <motion.div
      className={`absolute ${color}`}
      style={{
        fontSize: size,
        left: `${x}%`,
        top: `${y}%`,
        transform: `rotate(${rotation}deg)`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0, 1, 0.8, 1, 0],
        scale: [0.7, 1.2, 1, 1.1, 0.7],
        rotate: rotation + Math.random() * 20 - 10,
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: Math.random() * 2,
      }}
    >
      {icon}
    </motion.div>
  )
}

export function FloatingFoodIcons({ type }: { type: FoodIconType }) {
  const [icons, setIcons] = useState<React.ReactNode[]>([])

  useEffect(() => {
    // Define icons based on type
    let iconComponents: React.ReactNode[] = []
    let colors: string[] = []

    switch (type) {
      case "fastfood":
        iconComponents = [
          <Burger key="burger" size={32} />,
          <Pizza key="pizza" size={32} />,
          <Beef key="beef" size={32} />,
          <Utensils key="utensils" size={32} />,
        ]
        colors = ["text-red-500", "text-orange-500", "text-yellow-500", "text-amber-500"]
        break
      case "noodles":
        iconComponents = [
          <Soup key="soup" size={32} />,
          <Utensils key="utensils" size={32} />,
          <Salad key="salad" size={32} />,
        ]
        colors = ["text-amber-500", "text-yellow-500", "text-green-500"]
        break
      case "beverages":
        iconComponents = [<Coffee key="coffee" size={32} />, <Martini key="martini" size={32} />]
        colors = ["text-brown-500", "text-blue-500"]
        break
      case "sandwich":
        iconComponents = [<Sandwich key="sandwich" size={32} />, <Salad key="salad" size={32} />]
        colors = ["text-amber-600", "text-green-500"]
        break
      case "soda":
        iconComponents = [
          <Coffee key="coffee" size={32} />,
          <IceCream key="icecream" size={32} />,
          <Cake key="cake" size={32} />,
        ]
        colors = ["text-purple-500", "text-pink-500", "text-blue-400"]
        break
    }

    // Create 15 random floating icons with better visibility
    // Position them around the entire container, not just around the center
    const newIcons = Array.from({ length: 15 }).map((_, i) => {
      const iconIndex = i % iconComponents.length
      const icon = iconComponents[iconIndex]
      const color = colors[iconIndex]
      const size = Math.random() * 20 + 30 // Larger size
      const delay = Math.random() * 3
      const duration = Math.random() * 5 + 5

      // Position icons around the entire container
      // Use percentage values for responsive positioning
      let x, y

      // Create a pattern that places icons around the edges, not in the center
      if (i % 4 === 0) {
        // Left side
        x = Math.random() * 20
        y = Math.random() * 100
      } else if (i % 4 === 1) {
        // Right side
        x = 80 + Math.random() * 20
        y = Math.random() * 100
      } else if (i % 4 === 2) {
        // Top
        x = Math.random() * 100
        y = Math.random() * 20
      } else {
        // Bottom
        x = Math.random() * 100
        y = 80 + Math.random() * 20
      }

      const rotation = Math.random() * 360

      return (
        <FloatingIcon
          key={i}
          icon={icon}
          x={x}
          y={y}
          delay={delay}
          duration={duration}
          size={size}
          color={color}
          rotation={rotation}
        />
      )
    })

    setIcons(newIcons)
  }, [type])

  return <div className="absolute inset-0 overflow-visible pointer-events-none">{icons}</div>
}

