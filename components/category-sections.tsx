import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, Calendar, Briefcase } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    name: "Task Manager Pro",
    description: "Full-stack task management with real-time collaboration",
    image: "/task-manager-app.png",
    stars: 87,
    forks: 23,
    language: "TypeScript",
  },
  {
    name: "Weather Dashboard",
    description: "Beautiful weather app with OpenWeather API integration",
    image: "/weather-dashboard.png",
    stars: 45,
    forks: 12,
    language: "React",
  },
  {
    name: "Portfolio CMS",
    description: "Custom content management system built with Next.js",
    image: "/cms-interface.jpg",
    stars: 62,
    forks: 18,
    language: "Next.js",
  },
]

const blogs = [
  {
    title: "Getting Started with Next.js 15",
    excerpt: "A comprehensive guide to the latest Next.js features",
    image: "/nextjs-tutorial.jpg",
    date: "3 days ago",
    readTime: "5 min read",
  },
  {
    title: "Mastering Tailwind CSS",
    excerpt: "Advanced techniques for building beautiful UIs",
    image: "/tailwind-css-design.png",
    date: "1 week ago",
    readTime: "8 min read",
  },
  {
    title: "React Server Components Deep Dive",
    excerpt: "Understanding the future of React rendering",
    image: "/react-components.png",
    date: "2 weeks ago",
    readTime: "12 min read",
  },
]

const works = [
  {
    title: "SaaS Platform Redesign",
    company: "TechCorp",
    description: "Complete redesign of enterprise dashboard interface",
    image: "/saas-dashboard-overview.png",
    year: "2024",
  },
  {
    title: "Mobile Banking App",
    company: "FinanceApp",
    description: "Secure and intuitive mobile banking experience",
    image: "/banking-app-interface.png",
    year: "2023",
  },
  {
    title: "E-learning Platform",
    company: "EduTech",
    description: "Interactive learning platform for online courses",
    image: "/elearning-platform.png",
    year: "2023",
  },
]

export function CategorySections() {
  return (
    <div className="space-y-16 pb-16">
      {/* Projects Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <button className="text-sm text-primary hover:underline">See All →</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-base mb-1 line-clamp-1">{project.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{project.forks}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                      {project.language}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Blog</h2>
            <button className="text-sm text-primary hover:underline">See All →</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog) => (
              <Card
                key={blog.title}
                className="overflow-hidden hover:border-primary transition-all cursor-pointer group bg-card"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-base mb-1 line-clamp-1">{blog.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{blog.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{blog.date}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Work</h2>
            <button className="text-sm text-primary hover:underline">See All →</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map((work) => (
              <Card
                key={work.title}
                className="overflow-hidden hover:border-primary transition-all cursor-pointer group bg-card"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-3 w-3 text-primary" />
                    <span className="text-xs text-primary font-medium">{work.company}</span>
                  </div>
                  <h3 className="font-bold text-base mb-1 line-clamp-1">{work.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{work.description}</p>

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                      {work.year}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
