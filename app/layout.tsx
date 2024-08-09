import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workily App",
  description: "Work out your tasks like a pro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200 text-lg min-h-screen`}>
        <header className="flex justify-between items-center px-20 py-5">
          <h1 className="font-bold">Workily</h1>
          <span className="bg-orange-400 h-4 w-4 text-xs flex justify-center items-center rounded-full">A</span>
        </header>
        
        {children}
        
        </body>
    </html>
  );
}
