import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Alex Dee Media | Photography & Videography in Ibadan",
    description: "Professional photography and videography services in Ibadan, Nigeria. Capturing weddings, events, portraits, and brand content with creativity and soul. Visual stories that move people and build brands.",
    keywords: [
        "photography Ibadan",
        "videography Nigeria",
        "wedding photographer",
        "event photography",
        "brand content",
        "Alex Dee Media",
        "Aduragbemi",
        "portrait photography",
        "commercial photography",
    ],
    authors: [{ name: "Alex Dee Media" }],
    openGraph: {
        title: "Alex Dee Media | Visual Stories That Move People",
        description: "Professional media creator specializing in photography, videography, and brand content in Ibadan, Nigeria.",
        type: "website",
        locale: "en_NG",
        siteName: "Alex Dee Media",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alex Dee Media | Photography & Videography",
        description: "Visual stories that move people and build brands.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
