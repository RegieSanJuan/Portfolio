import { Header } from "@/components/header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const posts = [
  {
    title: "Getting Started with Next.js 15",
    excerpt: "Learn the new features and improvements in Next.js 15 and how to migrate your existing projects.",
    date: "2024-03-15",
    readTime: "5 min read",
  },
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices and patterns for building large-scale React applications that are maintainable and performant.",
    date: "2024-03-10",
    readTime: "8 min read",
  },
  {
    title: "The Power of TypeScript",
    excerpt: "Why TypeScript is becoming essential for modern web development and how to get started.",
    date: "2024-03-05",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">Blog</h1>
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.title} className="hover:border-primary transition-colors cursor-pointer bg-card">
                <CardHeader>
                  <h2 className="text-2xl font-bold mb-2 text-foreground">{post.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
