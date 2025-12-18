import Image from "next/image"
import { Card } from "@/components/ui/card"

export function IntroSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side - Avatar/Character */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 border-2 border-border flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-card border-4 border-border overflow-hidden">
                <Image
                  src="/developer-avatar-character.jpg"
                  alt="Your Avatar"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Introduction Cards */}
          <div className="flex flex-col gap-4 justify-center">
            <Card className="p-6 bg-card border-2 border-border">
              <p className="text-lg leading-relaxed font-mono">
                Hey, I'm <span className="text-primary font-bold">[Your Name]</span>! I'm a developer and tech
                enthusiast.
              </p>
            </Card>

            <Card className="p-6 bg-card border-2 border-border">
              <p className="text-base leading-relaxed text-muted-foreground">
                I specialize in full-stack development with a passion for building scalable web applications. I work
                with modern technologies like React, Next.js, and various backend frameworks.
              </p>
            </Card>

            <Card className="p-6 bg-card border-2 border-border">
              <p className="text-base leading-relaxed text-muted-foreground">
                This portfolio showcases my projects, writings, and journey as a developer. Feel free to explore my work
                and{" "}
                <a href="/about" className="text-primary hover:underline font-semibold">
                  learn more about me
                </a>
                !
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
