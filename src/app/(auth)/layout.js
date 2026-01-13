import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Link in bio tool: Everything you are, in one simple | Linktree",
  description: "Create your free Linktree page to house all your important links in one place. Perfect for social media bios, portfolios, and more.",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#d2e823]`}
        suppressHydrationWarning
      >
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
