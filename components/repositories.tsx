import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork } from "lucide-react"
import Image from "next/image"

const repositories = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS",
    image: "/modern-web-portfolio-screenshot.jpg",
    stars: 42,
    forks: 12,
    language: "TypeScript",
    color: "bg-[#3178c6]",
  },
  {
    name: "Task Manager App",
    description: "A full-stack task management application with real-time updates",
    image: "/task-management-app.png",
    stars: 87,
    forks: 23,
    language: "React",
    color: "bg-[#61dafb]",
  },
  {
    name: "Weather Dashboard",
    description: "Real-time weather dashboard using OpenWeather API",
    image: "/weather-dashboard-ui.png",
    stars: 35,
    forks: 8,
    language: "JavaScript",
    color: "bg-[#f7df1e]",
  },
  {
    name: "E-commerce Store",
    description: "Modern e-commerce platform with cart and checkout features",
    image: "/ecommerce-store-interface.png",
    stars: 124,
    forks: 45,
    language: "Next.js",
    color: "bg-white",
  },
]

export function Repositories() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recommended For You</h2>
          <button className="text-sm text-primary hover:underline">View All →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {repositories.map((repo) => (
            <Card
              key={repo.name}
              className="overflow-hidden hover:border-primary transition-all cursor-pointer group bg-card"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={repo.image || "/placeholder.svg"}
                  alt={repo.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-base mb-1 line-clamp-1 text-foreground">{repo.name}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{repo.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{repo.forks}</span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`${repo.color} text-xs px-2 py-0.5 ${repo.language === "Next.js" ? "text-black" : repo.language === "JavaScript" ? "text-black" : "text-white"}`}
                  >
                    {repo.language}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
