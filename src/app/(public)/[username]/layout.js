import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
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
  title: "LinkTree - Admin",
  description: "Manage your Linktree page.",
};

export default function LinkTreeLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f3f3f1] text-gray-900 flex h-screen overflow-hidden`}
      >
        <main className="flex-1 overflow-y-auto h-full relative bg-linear-to-bl from-violet-500 to-fuchsia-500">
          <Toaster position="bottom-right" />
          {children}
        </main>
      </body>
    </html>
  );
}
