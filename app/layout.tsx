import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { jsonLd, profile } from "@/lib/profile";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nishuacharya.com"),
  title: {
    default: "Nishu Acharya | Public Health Professional & Healthcare Consultant",
    template: "%s | Nishu Acharya"
  },
  description: profile.intro,
  keywords: [
    "Nishu Acharya",
    "Public Health Professional",
    "Healthcare Consultant",
    "Health Equity",
    "Research",
    "Program Design",
    "Implementation",
    "Community Well-being",
    "Epidemiology",
    "Global Health"
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    title: "Nishu Acharya | Public Health & Healthcare Consulting",
    description: profile.intro,
    url: "https://nishuacharya.com",
    siteName: "Nishu Acharya",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Nishu Acharya — Public Health Professional"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishu Acharya | Public Health & Healthcare Consulting",
    description: profile.intro,
    images: ["/og.svg"]
  },
  alternates: {
    canonical: "https://nishuacharya.com"
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05080f" },
    { media: "(prefers-color-scheme: light)", color: "#05080f" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://d8j0ntlcm91z4.cloudfront.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://d8j0ntlcm91z4.cloudfront.net" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#05080f" />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-cyan focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <ThemeProvider>
          <div id="main">{children}</div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}
