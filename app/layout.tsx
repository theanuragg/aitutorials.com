import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Tutorials - Learn to Build with AI",
  description:
    "Master the art of building with AI through our comprehensive tutorials covering product management, coding, and design.",
  openGraph: {
    title: "AI Tutorials - Learn to Build with AI",
    description:
      "Master the art of building with AI through our comprehensive tutorials covering product management, coding, and design.",
    url: "https://aitutorials.com",
    siteName: "AI Tutorials",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tutorials - Learn to Build with AI",
    description:
      "Master the art of building with AI through our comprehensive tutorials covering product management, coding, and design.",
    creator: "@shl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
