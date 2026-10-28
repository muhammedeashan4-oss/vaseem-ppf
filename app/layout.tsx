
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Vaseem | Sales & Service",
  description:
    "Professional portfolio of Mohammed Vaseem, Sales & Service at Mouser Electronics for India and Sri Lanka.",
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
