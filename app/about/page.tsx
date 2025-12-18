import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">About</h1>

          <Card className="mb-8 bg-card">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="/developer-portrait.png" />
                  <AvatarFallback>YN</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2 text-foreground">Your Name</h2>
                  <p className="text-xl text-primary mb-4">Full Stack Developer</p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate developer who loves creating innovative web applications. With expertise in modern
                    web technologies like React, Next.js, and TypeScript, I build scalable and performant applications
                    that deliver exceptional user experiences.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    When I'm not coding, you can find me contributing to open-source projects, writing technical blog
                    posts, or exploring new technologies and frameworks.
                  </p>

                  <div className="flex gap-4">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Senior Developer</h4>
                    <p className="text-sm text-muted-foreground">Tech Company • 2022 - Present</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Full Stack Developer</h4>
                    <p className="text-sm text-muted-foreground">Startup Inc • 2020 - 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Computer Science</h4>
                    <p className="text-sm text-muted-foreground">University Name • 2016 - 2020</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Certifications</h4>
                    <p className="text-sm text-muted-foreground">AWS Certified Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
