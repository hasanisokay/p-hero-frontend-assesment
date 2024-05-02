import { Inter } from "next/font/google";
import "./globals.css";
import { BaseURL, ProjectName } from "@/constants/constants";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/providers/QueryProvider";
import Navbar from "@/components/nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Home - ${ProjectName}`,
  description:
    "Welcome to programming hero assessment. You are going to enjoy this project.",
  keywords: ["community", "p-hero"],
  other: {
    "twitter:image": "https://web.programming-hero.com/thumbnail.png",
    "twitter:card": "summary_large_image",
    "og-url": `${BaseURL}`,
    "og:image": "https://web.programming-hero.com/thumbnail.png",
  },
  image: "https://web.programming-hero.com/thumbnail.png",
  url: `${BaseURL}`,
};

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          {children}
          <Toaster />
        </body>
      </html>
    </QueryProvider>
  );
}
