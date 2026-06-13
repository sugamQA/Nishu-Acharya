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
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nishuacharya.com"),
  title: {
    default: "Nishu Acharya | Public Health Professional",
    template: "%s | Nishu Acharya"
  },
  description: profile.intro,
  keywords: [
    "Nishu Acharya",
    "Public Health",
    "Research",
    "Program Design",
    "Implementation",
    "Health Equity",
    "Community Well-being",
    "Executive Portfolio"
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    title: "Nishu Acharya | Public Health Portfolio",
    description: profile.intro,
    url: "https://nishuacharya.com",
    siteName: "Nishu Acharya",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Nishu Acharya executive portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishu Acharya | Public Health Portfolio",
    description: profile.intro,
    images: ["/og.svg"]
  },
  alternates: {
    canonical: "https://nishuacharya.com"
  },
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#070a12" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>
          {children}
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
