"use client"

import { Coffee } from "lucide-react"
import { useState } from "react"

export function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-all duration-300 ${
        isHovered ? "scale-110" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Coffee
        className={`h-4 w-4 text-primary-foreground transition-all duration-300 ${isHovered ? "rotate-12" : ""}`}
      />
    </div>
  )
}

