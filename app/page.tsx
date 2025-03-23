'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ArrowRight,
  Code,
  Compass,
  MessageSquare,
  Twitter,
  Github,
  Menu,
  X, 
  Info,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: "smooth",
          });

          // Update URL without reload
          window.history.pushState(null, "", href);
        }
        // Close mobile menu after navigation
        setIsMenuOpen(false);
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener(
        "click",
        handleAnchorClick as unknown as EventListener
      );
    });

    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener(
          "click",
          handleAnchorClick as unknown as EventListener
        );
      });
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between md:px-6 mx-auto px-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-primary hover:text-primary/80 transition-colors">
              AITutorials.com
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" asChild className="hover:bg-primary/10 transition-colors">
              <Link href="#tutorials">Tutorials</Link>
            </Button>
            <Button variant="ghost" asChild className="hover:bg-primary/10 transition-colors">
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" asChild className="hover:bg-primary/10 transition-colors">
              <Link href="#contact">Contact</Link>
            </Button>
            <Button variant="ghost" asChild className="hover:bg-primary/10 transition-colors">
              <a
                href="https://github.com/slavingia/aitutorials.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <ThemeToggle />
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="hover:bg-primary/10 transition-colors">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
            <div className="container mx-auto px-4 py-3 space-y-1">
              <Button variant="ghost" asChild className="w-full justify-start hover:bg-primary/10 transition-colors">
                <Link href="#tutorials" onClick={() => setIsMenuOpen(false)}>
                  <Compass className="mr-2 h-4 w-4" />
                  Tutorials
                </Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start hover:bg-primary/10 transition-colors">
                <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                  <Info className="mr-2 h-4 w-4" />
                  About
                </Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start hover:bg-primary/10 transition-colors">
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start hover:bg-primary/10 transition-colors">
                <a
                  href="https://github.com/slavingia/aitutorials.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Learn to Build with AI
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Master the art of building with AI through our comprehensive
                tutorials covering product management, coding, and design.
              </p>
            </div>
            <div>
              <Button asChild size="lg" className="hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-md">
                <Link href="#tutorials">
                  Explore Tutorials <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div id="tutorials" className="container px-4 md:px-6 py-12 mx-auto">
        {/* PMing Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Compass className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              Product Management with AI
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Learn how to leverage AI to enhance your product management
            workflow, from ideation to execution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/40">
              <CardHeader>
                <CardTitle>PMing with o1 pro, v0, and DeepSeek-R1</CardTitle>
                <CardDescription>
                  Improved audio version for better product management with AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed
                  videoId="EBosnqXWxYI"
                  title="PMing with o1 pro, v0, and DeepSeek-R1 (better audio)"
                />
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/40">
              <CardHeader>
                <CardTitle>Developing with Devin</CardTitle>
                <CardDescription>
                  Learn how to use Devin for AI-assisted development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed
                  videoId="7UIYiOGtC8Y"
                  title="Developing with Devin"
                />
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/40">
              <CardHeader>
                <CardTitle>
                  Using Cursor + Claude 3.5 Sonnet + Tailwind
                </CardTitle>
                <CardDescription>
                  Ship 20x faster with modern AI-assisted development tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed
                  videoId="bEU15KXIAVk"
                  title="Using Cursor + Claude 3.5 Sonnet + Tailwind to ship 20x faster"
                />
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/40">
              <CardHeader>
                <CardTitle>QAing with AI</CardTitle>
                <CardDescription>
                  Learn effective techniques for quality assurance using AI
                  tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed videoId="7ahhZDlTP8M" title="QAing with AI" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Coding Section */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Code className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              Coding with AI
            </h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Discover how to use AI tools to accelerate your development process
            and write better code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/40">
              <CardHeader>
                <CardTitle>Coding with Cursor: Session 1</CardTitle>
                <CardDescription>
                  Getting started with AI-assisted development ft. @shpigford
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed
                  videoId="1CC88QGQiEA"
                  title="Coding with Cursor: Session 1 ft. @shpigford"
                />
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/40">
              <CardHeader>
                <CardTitle>Coding with Cursor: Session 2</CardTitle>
                <CardDescription>
                  Continuing your journey with AI-assisted development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed
                  videoId="mY6oV7tZUi0"
                  title="Coding with Cursor: Session 2"
                />
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/40">
              <CardHeader>
                <CardTitle>Coding with Cursor: Session 3</CardTitle>
                <CardDescription>
                  Advanced techniques for coding with AI assistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed
                  videoId="XuCRzqgD_ns"
                  title="Coding with Cursor: Session 3"
                />
              </CardContent>
            </Card>

            <Card className="transition-all duration-200 hover:shadow-lg hover:border-primary/40">
              <CardHeader>
                <CardTitle>Coding with Cursor: Session 4</CardTitle>
                <CardDescription>
                  Advanced AI-assisted development with @shaoruu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed
                  videoId="42zmF9ARSWM"
                  title="Coding with Cursor: Session 4 ft. @shaoruu"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="flex items-center mb-6">
            <MessageSquare className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              About AITutorials
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              AITutorials is dedicated to helping developers, product managers,
              and designers leverage the power of AI in their daily workflows.
              Our tutorials are created by industry professionals who are
              passionate about sharing their knowledge and experience with the
              community.
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              We believe that AI tools can dramatically improve productivity and
              creativity when used effectively. Our mission is to provide clear,
              practical guidance on integrating these powerful tools into your
              work.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="flex items-center mb-6">
            <Twitter className="h-8 w-8 mr-3 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Have questions or suggestions? I&apos;d love to hear from you!
          </p>
          <div>
            <Button size="lg" asChild className="hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-md">
              <a
                href="https://twitter.com/messages/compose?recipient_id=shl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Twitter className="mr-2 h-5 w-5" />
                DM me on X (@shl)
              </a>
            </Button>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="w-full py-6 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 AITutorials. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://twitter.com/shl" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://github.com/slavingia/aitutorials.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}