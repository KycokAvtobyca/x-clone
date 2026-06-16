import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - X App",
    default: "X App"
  },
  description: "Front-end insights, style like X.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`${geistSans.className} min-h-dvh flex flex-col w-full`}>
        <div className="app-container space-y-4 max-w-xl min-w-52 mx-auto w-full h-full">
            {children}
        </div>
      </body>
    </html>
  );
}
