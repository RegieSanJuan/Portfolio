import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Hero() {
  const languages = [
    { name: "C", color: "#A8B9CC", query: "C programming logo" },
    { name: "C++", color: "#00599C", query: "C++ logo" },
    { name: "Python", color: "#3776AB", query: "Python logo" },
    { name: "Java", color: "#007396", query: "Java logo" },
    { name: "JavaScript", color: "#F7DF1E", query: "JavaScript logo" },
    { name: "Next.js", color: "#000000", query: "Next.js logo" },
    { name: "Tailwind", color: "#06B6D4", query: "Tailwind CSS logo" },
    { name: "Laravel", color: "#FF2D20", query: "Laravel logo" },
    { name: "React", color: "#61DAFB", query: "React logo" },
    { name: "PostgreSQL", color: "#4169E1", query: "PostgreSQL logo" },
    { name: "Linux", color: "#FCC624", query: "Linux logo" },
    { name: "MySQL", color: "#4479A1", query: "MySQL logo" },
    { name: "TypeScript", color: "#3178C6", query: "TypeScript logo" },
    { name: "Git", color: "#F05032", query: "Git logo" },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">Home</h1>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Languages ({languages.length})</h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll">
              {/* First set of languages */}
              {languages.map((language, index) => (
                <div
                  key={`${language.name}-${index}`}
                  className="flex flex-col items-center gap-2 min-w-[100px] flex-shrink-0"
                >
                  <div className="relative">
                    <Avatar className="h-20 w-20 border-2 border-border bg-card">
                      <AvatarImage src={`/.jpg?height=80&width=80&query=${language.query}`} />
                      <AvatarFallback style={{ backgroundColor: `${language.color}20` }}>
                        <span style={{ color: language.color }} className="text-xl font-bold">
                          {language.name.substring(0, 2)}
                        </span>
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">{language.name}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {languages.map((language, index) => (
                <div
                  key={`${language.name}-duplicate-${index}`}
                  className="flex flex-col items-center gap-2 min-w-[100px] flex-shrink-0"
                >
                  <div className="relative">
                    <Avatar className="h-20 w-20 border-2 border-border bg-card">
                      <AvatarImage src={`/.jpg?height=80&width=80&query=${language.query}`} />
                      <AvatarFallback style={{ backgroundColor: `${language.color}20` }}>
                        <span style={{ color: language.color }} className="text-xl font-bold">
                          {language.name.substring(0, 2)}
                        </span>
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">{language.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
