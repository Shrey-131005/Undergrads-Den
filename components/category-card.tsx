import { BeefIcon as Burger, Coffee, Cake, Utensils } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  icon: "burger" | "coffee" | "cake" | "utensils"
  description: string
  bgColor: string
}

export function CategoryCard({ title, icon, description, bgColor }: CategoryCardProps) {
  const IconComponent = {
    burger: Burger,
    coffee: Coffee,
    cake: Cake,
    utensils: Utensils,
  }[icon]

  return (
    <Card className={`group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md ${bgColor}`}>
      <CardContent className="p-6">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-background">
          <IconComponent className="h-6 w-6 text-foreground" />
        </div>
        <h3 className="mb-1 font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

