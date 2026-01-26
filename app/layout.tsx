import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry to the Moon 🌙",
  description: "A beautiful website about Earth's Moon, created by Harry",
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
