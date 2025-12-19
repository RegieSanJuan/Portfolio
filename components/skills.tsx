"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const languages = [
  {
    name: "JavaScript",
    color: "bg-[#f7df1e] text-black hover:bg-[#f7df1e]/90",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    color: "bg-[#3178c6] text-white hover:bg-[#3178c6]/90",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    color: "bg-[#3776ab] text-white hover:bg-[#3776ab]/90",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "React",
    color: "bg-[#61dafb] text-black hover:bg-[#61dafb]/90",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    color: "bg-white text-black hover:bg-white/90",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    color: "bg-[#339933] text-white hover:bg-[#339933]/90",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind",
    color: "bg-[#06b6d4] text-white hover:bg-[#06b6d4]/90",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    color: "bg-[#f05032] text-white hover:bg-[#f05032]/90",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export function Skills() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <Badge
              key={lang.name}
              className={`${lang.color} px-4 py-2 text-sm font-semibold cursor-pointer transition-all hover:scale-105 flex items-center gap-2`}
            >
              <Image
                src={lang.logo}
                alt={`${lang.name} logo`}
                width={20}
                height={20}
                className="w-5 h-5"
              />
              {lang.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
