import { ArrowLeft, ThumbsDown, ThumbsUp, Paintbrush } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TutorialPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center gap-4 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to tutorials
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ThumbsUp className="h-4 w-4" />
              <span className="sr-only">Upvote</span>
            </Button>
            <Button variant="outline" size="icon">
              <ThumbsDown className="h-4 w-4" />
              <span className="sr-only">Downvote</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 md:px-6">
        <article className="mx-auto max-w-3xl">
          <div className="mb-8">
            <div className="flex items-start space-x-3 mb-4">
              <Paintbrush className="h-10 w-10 text-black flex-shrink-0 mt-2" />
              <h1 className="text-4xl font-bold">Creating a Professional Logo with Midjourney</h1>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>Design</Badge>
              <Badge>AI Art</Badge>
              <Badge>Branding</Badge>
            </div>
            <p className="text-lg text-muted-foreground">
              A step-by-step guide to creating professional logos using Midjourney AI
            </p>
          </div>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Prerequisites</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A Midjourney account</li>
                <li>Discord account (required for Midjourney)</li>
                <li>Basic understanding of design principles (optional)</li>
              </ul>
            </CardContent>
          </Card>
          <div className="prose prose-gray max-w-none">
            <h2>Step 1: Planning Your Logo</h2>
            <p>
              Before diving into Midjourney, it's essential to have a clear vision of what you want your logo to represent.
              Consider your brand's:
            </p>
            <ul>
              <li>Values and mission</li>
              <li>Target audience</li>
              <li>Industry and competitors</li>
              <li>Desired color scheme</li>
              <li>Preferred style (minimal, elaborate, modern, classic)</li>
            </ul>

            <h2>Step 2: Crafting Your Prompt</h2>
            <p>
              The key to getting great results with Midjourney is writing effective prompts. Here's a formula that works
              well:
            </p>
            <pre>
              <code>
                {`[style] logo for [industry/purpose], [design elements], [colors], [additional details], --ar 1:1 --v 5`}
              </code>
            </pre>

            <h2>Step 3: Generating and Iterating</h2>
            <p>
              Once you have your initial results, you can use Midjourney's variation and upscale features to refine your
              logo:
            </p>
            <ol>
              <li>Use the V1-V4 buttons to create variations of your favorite result</li>
              <li>Click U1-U4 to upscale and get higher resolution versions</li>
              <li>Try slight modifications to your prompt based on the results</li>
            </ol>

            <h2>Step 4: Finalizing Your Logo</h2>
            <p>
              After generating a logo you're happy with, you'll want to:
            </p>
            <ol>
              <li>Download the highest resolution version</li>
              <li>Clean up any imperfections using an image editor</li>
              <li>Create variations for different use cases (light/dark versions, different sizes)</li>
              <li>Save in appropriate file formats (PNG, SVG if possible)</li>
            </ol>

            <h2>Pro Tips</h2>
            <ul>
              <li>Use --stylize or --quality parameters to control the level of detail</li>
              <li>Experiment with different aspect ratios using --ar</li>
              <li>Try both positive and negative space designs</li>
              <li>Keep iterating until you get the perfect result</li>
            </ul>

            <h2>Common Mistakes to Avoid</h2>
            <ul>
              <li>Making the logo too complex</li>
              <li>Ignoring scalability</li>
              <li>Not checking for similar existing logos</li>
              <li>Forgetting to consider different use cases</li>
            </ul>
          </div>
        </article>
        <footer className="border-t mt-20">
          <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <p className="text-center text-sm leading-loose md:text-left">
                Project by{" "}
                <a
                  href="https://x.com/shl"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  Sahil Lavingia
                </a>
              </p>
            </div>
            <div className="flex flex-1 items-center justify-end gap-4">
              <Link
                href="https://x.com/shl"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
              >
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow on X
                </div>
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

