import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servelya Premium | Oto Servis",
  description:
    "Alman araçlarda uzman teşhis, bakım ve onarım. Servelya Premium ile güvenli ve hızlı çözüm.",
  metadataBase: new URL("https://servelya.vercel.app"),
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Servelya Premium | Oto Servis",
    description:
      "Alman araçlarda uzman teşhis, bakım ve onarım. Servelya Premium ile güvenli ve hızlı çözüm.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0f14] text-slate-50 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
