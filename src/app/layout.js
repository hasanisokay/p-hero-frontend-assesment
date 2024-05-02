import { Inter } from "next/font/google";
import "./globals.css";
import { BaseURL } from "@/constants/constants";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Home - ${BaseURL}`,
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
    <html lang="en" className="pt-[10px]">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
