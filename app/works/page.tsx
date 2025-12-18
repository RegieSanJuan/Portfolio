import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    name: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses using OpenAI API",
    image: "/ai-chat-interface.png",
    tags: ["React", "Node.js", "OpenAI", "WebSocket"],
    link: "#",
  },
  {
    name: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media performance across platforms",
    image: "/analytics-dashboard.png",
    tags: ["Next.js", "Chart.js", "Tailwind"],
    link: "#",
  },
  {
    name: "Fitness Tracker",
    description: "Mobile-first fitness tracking app with workout plans and progress tracking",
    image: "/fitness-app-interface.png",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
  },
  {
    name: "Recipe Finder",
    description: "Discover and save recipes with ingredient-based search and meal planning",
    image: "/recipe-app-design.jpg",
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    link: "#",
  },
]

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">Works</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="overflow-hidden hover:border-primary transition-all cursor-pointer group bg-card"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.name}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
