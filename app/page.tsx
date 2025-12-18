import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IntroSection } from "@/components/intro-section"
import { LatestContent } from "@/components/latest-content"
import { CategorySections } from "@/components/category-sections"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <IntroSection />
        <LatestContent />
        <CategorySections />
      </main>
    </div>
  )
}
