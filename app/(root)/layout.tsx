import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME } from "@/lib/constants";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: "A modern ecommerce platform build with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
        
        <main className="flex-1 wrapper">
            {children}
        </main>
    </div>
  );
}
