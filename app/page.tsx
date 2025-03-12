import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { YoutubeEmbed } from "@/components/youtube-embed"
import { ArrowRight, Code, Compass, Palette } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center md:px-6 max-w-6xl mx-auto">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-primary">AITutorials.com</span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="#tutorials">Tutorials</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#">About</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#">Contact</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Learn to Build with AI
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Master the art of building with AI through our comprehensive tutorials covering product management,
                coding, and design.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="#tutorials">
                  Explore Tutorials <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div id="tutorials" className="container px-4 md:px-6 py-12 max-w-6xl mx-auto">
        {/* PMing Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Compass className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Product Management with AI</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Learn how to leverage AI to enhance your product management workflow, from ideation to execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Driven Product Discovery</CardTitle>
                <CardDescription>Learn how to use AI to identify market opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="dQw4w9WgXcQ" title="AI-Driven Product Discovery" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Research with AI</CardTitle>
                <CardDescription>Leverage AI to gather and analyze user feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="dQw4w9WgXcQ" title="User Research with AI" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI for Product Roadmapping</CardTitle>
                <CardDescription>Use AI to prioritize features and plan your roadmap</CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="dQw4w9WgXcQ" title="AI for Product Roadmapping" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Coding Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Code className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Coding with AI</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Discover how to use AI tools to accelerate your development process and write better code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started with AI Coding Assistants</CardTitle>
                <CardDescription>Introduction to AI pair programming</CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="7UIYiOGtC8Y" title="Developing with Devin" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Building React Apps with AI</CardTitle>
                <CardDescription>Learn to build modern React applications with AI assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="dQw4w9WgXcQ" title="Building React Apps with AI" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Code Refactoring</CardTitle>
                <CardDescription>Use AI to improve and optimize your existing codebase</CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="dQw4w9WgXcQ" title="AI-Powered Code Refactoring" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Designing Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Palette className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Designing with AI</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Explore how AI can enhance your design process, from ideation to final assets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Generated UI Design</CardTitle>
                <CardDescription>Create stunning UI designs with AI assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="dQw4w9WgXcQ" title="AI-Generated UI Design" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prompt Engineering for Designers</CardTitle>
                <CardDescription>Master the art of crafting effective prompts for design tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="dQw4w9WgXcQ" title="Prompt Engineering for Designers" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI for Design Systems</CardTitle>
                <CardDescription>Learn how to use AI to create and maintain design systems</CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="dQw4w9WgXcQ" title="AI for Design Systems" />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

