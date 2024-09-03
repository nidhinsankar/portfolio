import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { cn } from "@/lib/utils";
import Providers from "./providers";

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nidhin Portfolio",
  description: "personal portfolio for a frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, " relative h-screen")}>
        {/* <Providers> */}
        {/* <Navbar /> */}

        {children}
        <BottomNav />
        {/* </Providers> */}
      </body>
    </html>
  );
}
