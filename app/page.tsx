"use client"

import { useEffect, useRef } from "react"
import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CategoryCard } from "@/components/category-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FloatingElements } from "@/components/floating-elements"
import { FloatingFoodIcons } from "@/components/floating-food-icons"

export default function Home() {
  // Reference to the top of the page for home button
  const homeRef = useRef<HTMLDivElement>(null)

  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)

        // Special case for home button (empty hash)
        if (id === "") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
          window.history.pushState(null, "", "/")
          return
        }

        if (id) {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
            // Update URL without page reload
            window.history.pushState(null, "", `#${id}`)
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <div className="flex min-h-screen flex-col" ref={homeRef}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <Image
                src="/images/logo.png"
                alt="Undergrad's Den Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-primary">Undergrad's Den</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#menu" className="text-sm font-medium hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex" asChild>
              <a
                href="https://link.zomato.com/xqzv/rshare?id=102102415689b9351"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-16 md:py-24 lg:py-32">
          <FloatingElements />
          <div className="container relative z-10 grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none"
              >
                Pop, Sip, Repeat – Where Every Bubble Tells a Story!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-[600px] text-white/90 md:text-xl"
              >
                The ultimate hangout spot for students and young professionals. Delicious food, refreshing drinks, and a
                vibe that keeps you coming back.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <Button size="lg" className="group bg-white text-primary hover:bg-white/90" asChild>
                  <a href="#menu">
                    View Menu
                    <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <a href="#contact">Contact Us</a>
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
              className="flex items-center justify-center"
            >
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                <Image
                  src="/images/storefront.png"
                  alt="Undergrad's Den Storefront"
                  width={400}
                  height={400}
                  className="object-contain rounded-[10px]"
                  priority
                />
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-0 z-0 opacity-20">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="5" fill="white" />
              <circle cx="40" cy="70" r="3" fill="white" />
              <circle cx="80" cy="30" r="7" fill="white" />
              <circle cx="70" cy="80" r="4" fill="white" />
              <circle cx="10" cy="50" r="3" fill="white" />
              <circle cx="30" cy="90" r="6" fill="white" />
              <circle cx="90" cy="60" r="5" fill="white" />
              <circle cx="50" cy="10" r="4" fill="white" />
              <circle cx="60" cy="40" r="3" fill="white" />
            </svg>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:mb-12"
            >
              Explore Our Categories
            </motion.h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <CategoryCard
                  title="Fast Food"
                  icon="burger"
                  description="Burgers, fries, and more"
                  bgColor="bg-red-100 dark:bg-red-950"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CategoryCard
                  title="Beverages"
                  icon="coffee"
                  description="Coffee, tea, and sodas"
                  bgColor="bg-blue-100 dark:bg-blue-950"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <CategoryCard
                  title="Desserts"
                  icon="cake"
                  description="Sweet treats for everyone"
                  bgColor="bg-yellow-100 dark:bg-yellow-950"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <CategoryCard
                  title="Specialties"
                  icon="utensils"
                  description="Our signature dishes"
                  bgColor="bg-green-100 dark:bg-green-950"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="mb-4 text-muted-foreground">
                  Undergrad's Den started as a small coffee cart on campus in 2018. Founded by Shirley Parikh who was
                  tired of overpriced, mediocre campus food, she set out to create a place where students could enjoy
                  quality food and drinks at reasonable prices.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Today, we've grown into a full-service café and restaurant, but our mission remains the same: to
                  provide a cozy, welcoming space where students and young professionals can eat, study, socialize, and
                  feel at home.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex">
                    <Image
                      src="/images/founder.png"
                      alt="Shirley Parikh"
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-background object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Founded by Shirley Parikh</p>
                    <a
                      href="https://www.linkedin.com/in/shirley-parikh-453815281"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[300px] overflow-hidden rounded-xl md:h-auto"
              >
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Undergrad's Den Interior"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section id="menu" className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:mb-12"
            >
              Our Menu
            </motion.h2>
            <Tabs defaultValue="quick-bites" className="w-full">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="quick-bites">Quick Bites</TabsTrigger>
                  <TabsTrigger value="maggie">Maggie</TabsTrigger>
                  <TabsTrigger value="beverages">Beverages</TabsTrigger>
                  <TabsTrigger value="sandwich">Sandwich</TabsTrigger>
                  <TabsTrigger value="soda">Soda</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="quick-bites" className="mt-0">
                <div className="relative min-h-[600px] flex justify-center">
                  <FloatingFoodIcons type="fastfood" />
                  <div className="rounded-lg overflow-hidden shadow-lg max-w-3xl z-20 relative">
                    <Image
                      src="/images/menu-quick-bites.png"
                      alt="Quick Bites Menu"
                      width={600}
                      height={800}
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="maggie" className="mt-0">
                <div className="relative min-h-[600px] flex justify-center">
                  <FloatingFoodIcons type="noodles" />
                  <div className="rounded-lg overflow-hidden shadow-lg max-w-3xl z-20 relative">
                    <Image
                      src="/images/menu-maggie.png"
                      alt="Maggie Menu"
                      width={600}
                      height={800}
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="beverages" className="mt-0">
                <div className="relative min-h-[600px] flex justify-center">
                  <FloatingFoodIcons type="beverages" />
                  <div className="rounded-lg overflow-hidden shadow-lg max-w-3xl z-20 relative">
                    <Image
                      src="/images/menu-beverages.png"
                      alt="Beverages Menu"
                      width={600}
                      height={800}
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="sandwich" className="mt-0">
                <div className="relative min-h-[600px] flex justify-center">
                  <FloatingFoodIcons type="sandwich" />
                  <div className="rounded-lg overflow-hidden shadow-lg max-w-3xl z-20 relative">
                    <Image
                      src="/images/menu-sandwich.png"
                      alt="Sandwich Menu"
                      width={600}
                      height={800}
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="soda" className="mt-0">
                <div className="relative min-h-[600px] flex justify-center">
                  <FloatingFoodIcons type="soda" />
                  <div className="rounded-lg overflow-hidden shadow-lg max-w-3xl z-20 relative">
                    <Image
                      src="/images/menu-soda.png"
                      alt="Soda Menu"
                      width={600}
                      height={800}
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Can't decide? Visit us in person to explore our full menu!</p>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Find Our Location</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Rest of the page remains unchanged */}
        {/* Testimonials */}
        <section id="testimonials" className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:mb-12"
            >
              What Our Customers Say
            </motion.h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Contact & Location */}
        <section id="contact" className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Visit Us</h2>
                <p className="mb-6 text-muted-foreground">
                  We're conveniently located near campus. Drop by for a quick bite or stay and hang out!
                </p>
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        Sri Govindam Residency, D-10, PDPU Hostel Rd, Raysan, Gujarat 382421
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">07041316888</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">hello@undergradsden.com</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground">7:00 AM - 10:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday - Sunday</p>
                      <p className="text-muted-foreground">8:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                    <a href="https://maps.app.goo.gl/b7X6nbSpT4QtWqgKA" target="_blank" rel="noopener noreferrer">
                      Find Our Location
                    </a>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-[300px] overflow-hidden rounded-xl md:h-auto"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5232727589397!2d72.65807571492355!3d23.160370084883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81005e335dbf%3A0x3ff4d4f07b2a926!2sUndergrad&#39;s%20Den!5e0!3m2!1sen!2sin!4v1711566000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                  title="Undergrad's Den Location"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6 md:py-8">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="/images/logo.png"
                    alt="Undergrad's Den Logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-lg font-bold">Undergrad's Den</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                The ultimate hangout spot for students and young professionals.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="text-muted-foreground hover:text-foreground">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium">Connect</h3>
              <div className="flex gap-3">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Undergrad's Den. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

