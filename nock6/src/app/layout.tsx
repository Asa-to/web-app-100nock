import type { Metadata } from "next";
import "./globals.css";
import "almond.css/dist/almond.min.css";

export const metadata: Metadata = {
  title: "travel maker",
  description: "saikou",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-w-full min-h-screen">{children}</body>
    </html>
  );
}
