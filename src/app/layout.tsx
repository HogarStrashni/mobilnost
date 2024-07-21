import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/custom-ui/header";
import Footer from "@/components/custom-ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mobilnost.ba",
  description: "Generated by create next app",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto flex min-h-screen flex-col`}>
        <Header />
        <main className="mx-auto w-full max-w-screen-xl flex-1 border px-5 py-8 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
