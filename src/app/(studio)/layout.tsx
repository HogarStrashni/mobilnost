import { ReactNode } from "react";
import "../globals.css";
import { Home } from "lucide-react";

export const metadata = {
  title: "Mobilnost.ba | Admin",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <>
          <a
            href="/"
            className="absolute bottom-16 right-10 z-50 flex flex-col items-center justify-center text-gray-600"
          >
            <Home className="size-10" />
            <span>home</span>
          </a>
          {children}
        </>
      </body>
    </html>
  );
}