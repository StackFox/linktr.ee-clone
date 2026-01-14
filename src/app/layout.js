import Navbar from "./ui/Navbar"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Link in bio tool: Everything you are, in one simple link | Linktree",
    description: "Create your free Linktree page to house all your important links in one place. Perfect for social media bios, portfolios, and more.",
    icons: {
        icon: '/favicon.png',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#d2e823]`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}