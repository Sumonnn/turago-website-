
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turago | Move Smarter, Move Better",
  description:
    "Discover Turago, your mobility partner for convenient and reliable rides.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
