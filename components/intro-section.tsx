import Image from "next/image";

export function IntroSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start">
          {/* Avatar */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-40 h-40 rounded-full border-2 border-border overflow-hidden">
              <Image
                src="/developer-avatar-character.jpg"
                alt="Regie"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="font-semibold">Regie</span>, an IT
              student from PUP San Juan and an aspiring full-stack web
              developer.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              I'm passionate about web development, project management, and data
              analysis, and I'm constantly exploring new areas of IT while
              growing as a student leader. This website is my personal portfolio
              and blog, where I share my projects, ideas, reflections on life,
              and quotes that inspire me.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              This space represents who I am and what I'm becoming—feel free to
              look around and explore my work and writings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
