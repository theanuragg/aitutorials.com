import {
  Search,
  Paintbrush,
  MessageSquare,
  Code,
  FileText,
  Briefcase,
  Scale,
  ShoppingCart,
  Zap,
  PlayCircle,
  FileCode2,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="font-bold text-2xl">
            AI Tutorials
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link
              href="/categories"
              className="text-sm font-medium hover:underline"
            >
              Categories
            </Link>
            <Link
              href="/popular"
              className="text-sm font-medium hover:underline"
            >
              Popular
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              What are you looking to do?
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed">
              Get step-by-step AI tutorials for any task. Learn how to use AI
              tools effectively with our community-driven guides.
            </p>
          </div>
          <div className="w-full max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                className="pl-10 pr-4 py-6 text-lg"
                placeholder="e.g. Make a brand logo, Generate a contract..."
                type="search"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Make a brand logo
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Generate a contract
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Sell digital products
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Write a business plan
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Create an AI chatbot
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Build a recommendation system
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Train a custom AI model
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Generate product descriptions
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Create social media content
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm cursor-pointer hover:bg-muted"
            >
              Design an AI workflow
            </Badge>
          </div>
        </div>
        <div className="mt-20">
          <Tabs defaultValue="popular" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-xl mx-auto">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </TabsList>
            <TabsContent value="popular" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TutorialCard
                  title="Creating a Professional Logo with Midjourney"
                  categories={["Design", "AI Art"]}
                  votes={342}
                />
                <TutorialCard
                  title="Writing Effective Marketing Copy with ChatGPT"
                  categories={["Marketing", "Writing", "AI"]}
                  votes={289}
                />
                <TutorialCard
                  title="Building a Website Portfolio using AI Tools"
                  categories={["Development", "Design", "AI"]}
                  votes={256}
                />
                <TutorialCard
                  title="Automating Customer Support with AI"
                  categories={["Business", "AI", "Customer Service"]}
                  votes={234}
                />
                <TutorialCard
                  title="Creating Custom ChatGPT Agents"
                  categories={["Development", "AI", "Chatbots"]}
                  votes={198}
                />
                <TutorialCard
                  title="AI-Powered Social Media Strategy"
                  categories={["Marketing", "Social Media", "AI"]}
                  votes={187}
                />
              </div>
            </TabsContent>
            <TabsContent value="recent" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <TutorialCard
                  title="AI-Powered Content Calendar Creation"
                  categories={["Marketing", "Content", "AI"]}
                  votes={45}
                />
                <TutorialCard
                  title="Generating Product Descriptions at Scale"
                  categories={["E-commerce", "Writing", "AI"]}
                  votes={32}
                />
                <TutorialCard
                  title="Legal Document Review with AI"
                  categories={["Legal", "AI", "Document Processing"]}
                  votes={28}
                />
              </div>
            </TabsContent>
            <TabsContent value="categories" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/categories/${category.slug}`}
                  >
                    <Card className="hover:bg-muted/50 transition-colors">
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.count} tutorials
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* New section: Learn how to make this website */}
        <div className="mt-24 bg-gray-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Learn How to Make This Website!
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Master AI-Powered Web Development
              </h3>
              <p className="mb-4">
                Unlock the secrets behind this powerful AI tutorial platform.
                Our comprehensive course includes:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Step-by-step video tutorials</li>
                <li>Full source code access</li>
                <li>Exclusive Discord community</li>
                <li>Live Q&A sessions with experts</li>
                <li>Certificate of completion</li>
              </ul>
              <div className="flex items-center space-x-4 mb-6">
                <PlayCircle className="h-8 w-8 text-blue-500" />
                <p className="text-lg font-medium">
                  20+ hours of in-depth content
                </p>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <FileCode2 className="h-8 w-8 text-green-500" />
                <p className="text-lg font-medium">
                  Complete source code included
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8 text-purple-500" />
                <p className="text-lg font-medium">
                  Join a community of AI enthusiasts
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Limited Time Offer</h3>
              <p className="text-4xl font-bold text-blue-600 mb-6">$199</p>
              <ul className="text-sm mb-6 space-y-2">
                <li>✅ Lifetime access to course materials</li>
                <li>✅ Source code for this entire platform</li>
                <li>✅ 1-year access to our Discord community</li>
                <li>✅ Monthly live coding sessions</li>
              </ul>
              <Link
                href="https://sahil.gumroad.com/l/the-ai-tutorial?wanted=true"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Enroll Now and Build Your AI Future!
              </Link>
            </div>
          </div>
        </div>

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
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
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
  );
}

function TutorialCard({
  title,
  categories,
  votes,
}: {
  title: string;
  categories: string[];
  votes: number;
}) {
  const IconComponent = getCategoryIcon(categories[0]);
  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <IconComponent className="h-8 w-8 text-black flex-shrink-0 mt-1" />
              <h3 className="font-semibold">{title}</h3>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <span className="sr-only">Upvote</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <span>{votes}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "design":
      return Paintbrush;
    case "marketing":
      return MessageSquare;
    case "development":
      return Code;
    case "writing":
      return FileText;
    case "business":
      return Briefcase;
    case "legal":
      return Scale;
    case "e-commerce":
      return ShoppingCart;
    default:
      return Zap;
  }
}

const categories = [
  { name: "Design", slug: "design", count: 145 },
  { name: "Marketing", slug: "marketing", count: 132 },
  { name: "Development", slug: "development", count: 112 },
  { name: "Writing", slug: "writing", count: 98 },
  { name: "Business", slug: "business", count: 87 },
  { name: "Legal", slug: "legal", count: 76 },
];
