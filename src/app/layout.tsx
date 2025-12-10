import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "@/components/ui/shared/Footer/Footer";
import AuthProviders from "@/providers/AuthProviders";
import Navbar from "@/components/ui/shared/Navbar/Navbar";
// import { Navbar } from "@/components/ui/shared/Navbar/Navbar";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehedi Mehad | Full Stack Developer Portfolio Website",
  description:
    "Professional portfolio showcasing full stack development projects and expertise in React, Next.js, and TypeScript.Experienced in creating responsive and user-friendly web applications.",
  generator: "Mehedi Mehad | Full Stack Developer Portfolio Website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <AuthProviders>
          <Navbar />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#1E1E2F", // custom background
                color: "#fff", // custom text color
                padding: "16px",
                borderRadius: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                fontWeight: "500",
              },
              success: {
                style: {
                  background: "green",
                  color: "#fff",
                },
              },
              error: {
                style: {
                  background: "red",
                  color: "#fff",
                },
              },
            }}
          />
          {/* <Footer /> */}
        </AuthProviders>
      </body>
    </html>
  );
}
