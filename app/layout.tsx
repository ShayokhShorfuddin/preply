import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
