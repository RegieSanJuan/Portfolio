import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  const languages = [
    {
      name: "C",
      color: "#A8B9CC",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      color: "#00599C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Python",
      color: "#3776AB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      color: "#007396",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Next.js",
      color: "#000000",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind",
      color: "#06B6D4",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Laravel",
      color: "#FF2D20",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "React",
      color: "#61DAFB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "PostgreSQL",
      color: "#4169E1",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Linux",
      color: "#FCC624",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "MySQL",
      color: "#4479A1",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Git",
      color: "#F05032",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">
          Home
        </h1>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              Tech Stack ({languages.length})
            </h2>
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
                      <AvatarImage
                        src={language.logo}
                        alt={`${language.name} logo`}
                        className="p-3"
                      />
                      <AvatarFallback
                        style={{ backgroundColor: `${language.color}20` }}
                      >
                        <span
                          style={{ color: language.color }}
                          className="text-xl font-bold"
                        >
                          {language.name.substring(0, 2)}
                        </span>
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">
                      {language.name}
                    </p>
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
                      <AvatarImage
                        src={language.logo}
                        alt={`${language.name} logo`}
                        className="p-3"
                      />
                      <AvatarFallback
                        style={{ backgroundColor: `${language.color}20` }}
                      >
                        <span
                          style={{ color: language.color }}
                          className="text-xl font-bold"
                        >
                          {language.name.substring(0, 2)}
                        </span>
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">
                      {language.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
