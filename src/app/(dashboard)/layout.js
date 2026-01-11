import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import AdminSidebar from "./AdminSidebar";

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

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f3f3f1] text-gray-900 flex h-screen overflow-hidden`}
      >
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto h-full relative">
          <Toaster position="bottom-right" />
          {children}
        </main>
      </body>
    </html>
  );
}
