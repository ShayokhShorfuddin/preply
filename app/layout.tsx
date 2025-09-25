import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ReactScan } from "./_components/ReactScan";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preply - The job preparation platform",
  description: "A complete platform for job interview preparation and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We don't want to include the ReactScan component in production builds. Its just for local tests */}
      {process.env.NODE_ENV === "development" && <ReactScan />}
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
