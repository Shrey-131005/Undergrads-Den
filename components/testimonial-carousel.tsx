"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Computer Science Student",
    content: "This place is my go-to spot for study sessions. Great coffee, fast Wi-Fi, and the bubble tea is amazing!",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
  },
  {
    id: 2,
    name: "Sam Rodriguez",
    role: "Graphic Design Major",
    content: "The atmosphere is perfect for both socializing and getting work done. Their loaded fries are to die for!",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
  },
  {
    id: 3,
    name: "Taylor Kim",
    role: "Business Student",
    content: "I've had countless study group meetings here. The staff is super friendly and they never rush you out.",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
  },
  {
    id: 4,
    name: "Jordan Lee",
    role: "Engineering Graduate",
    content:
      "Even after graduating, I still come back for their amazing food and the nostalgic vibes. Best burger near campus!",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Medical Student",
    content:
      "The perfect place to recharge between classes. Their Maggie noodles are just like home and the staff remembers my order!",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
  },
  {
    id: 6,
    name: "Mike Chen",
    role: "Architecture Student",
    content:
      "I love the cozy atmosphere and affordable prices. The sandwich selection is amazing and perfect for a quick lunch.",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
  },
  {
    id: 7,
    name: "Aisha Patel",
    role: "Literature Major",
    content:
      "My favorite study spot on campus! The bubble tea selection is incredible and the ambient noise is perfect for focusing.",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Adjust visible testimonials based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleTestimonials + 1))
      }, 5000)
    }

    startAutoScroll()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [visibleTestimonials])

  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - visibleTestimonials : prev - 1))
  }

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleTestimonials + 1))
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <div className="flex gap-6 overflow-hidden">
          {testimonials.map((testimonial, index) => {
            const isVisible = index >= currentIndex && index < currentIndex + visibleTestimonials

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  x: isVisible ? 0 : 50,
                  display: isVisible ? "block" : "none",
                }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="min-w-[300px] flex-1"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="mb-6 text-sm text-muted-foreground">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </AnimatePresence>
      <div className="mt-6 flex justify-center gap-2">
        <Button variant="outline" size="icon" onClick={handlePrev} className="h-8 w-8 rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        {Array.from({ length: testimonials.length - visibleTestimonials + 1 }).map((_, i) => (
          <Button
            key={i}
            variant="outline"
            size="icon"
            onClick={() => setCurrentIndex(i)}
            className={`h-2 w-2 rounded-full p-0 ${i === currentIndex ? "bg-primary" : "bg-muted"}`}
          >
            <span className="sr-only">Go to slide {i + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={handleNext} className="h-8 w-8 rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

