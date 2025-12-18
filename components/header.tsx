"use client"

import Link from "next/link"
import { Menu, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <div className="h-6 w-6 bg-background rounded-sm transform rotate-45" />
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors">
                Home
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/works"
                className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors"
              >
                Works
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-secondary rounded-lg px-4 py-2 max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none text-sm w-full"
              />
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>

            <Avatar className="h-8 w-8">
              <AvatarImage src="/developer-portrait.png" />
              <AvatarFallback>YN</AvatarFallback>
            </Avatar>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-secondary rounded-lg">
              <span className="text-sm font-medium">Your Name</span>
              <span className="text-xs text-muted-foreground">13+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="flex flex-col p-4 gap-2">
            <Link href="/" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors">
              Home
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/works"
              className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors"
            >
              Works
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
