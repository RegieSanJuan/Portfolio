import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import Image from "next/image"

const latestContent = [
  {
    type: "Blog",
    title: "Building a Roblox-Themed Portfolio",
    description: "Learn how I created my portfolio with a gaming-inspired design",
    image: "/modern-blog-design.png",
    date: "2 days ago",
    tag: "Design",
  },
  {
    type: "Project",
    title: "Real-Time Chat Application",
    description: "A scalable chat app built with Next.js and WebSockets",
    image: "/chat-application-interface.png",
    date: "5 days ago",
    tag: "Full-Stack",
  },
  {
    type: "Blog",
    title: "TypeScript Best Practices 2024",
    description: "Essential TypeScript patterns every developer should know",
    image: "/typescript-code.png",
    date: "1 week ago",
    tag: "Tutorial",
  },
  {
    type: "Work",
    title: "E-commerce Platform Redesign",
    description: "Complete UI/UX overhaul for a modern shopping experience",
    image: "/ecommerce-website-homepage.png",
    date: "2 weeks ago",
    tag: "UI/UX",
  },
]

export function LatestContent() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recommended For You</h2>
          <button className="text-sm text-primary hover:underline">See All →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {latestContent.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:border-primary transition-all cursor-pointer group bg-card"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-roblox-blue text-white text-xs">{item.type}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-base mb-1 line-clamp-1 text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5">
                    {item.tag}
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
