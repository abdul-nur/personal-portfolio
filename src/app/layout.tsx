import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Nur — Software Engineer",
  description:
    "Portfolio of Abdul Nur, a backend-focused software engineer building distributed systems and platforms at Adobe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
