import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/rootpage/header/Header";
import Footer from "@/components/rootpage/footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700", "500", "200", "300"],
});

export const metadata: Metadata = {
    title: "Fablab Universiapolis",
    description:
        "A hub where ideas materialize. Our fabrication lab merges technology and creativity. Join us in shaping the future through hands-on exploration at FabLab Universiapolis.",
    icons: {
        icon: "/logo.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ClerkProvider>
                <body className={`${poppins.className} min-h-screen w-full`}>
                    <link rel="icon" href="/logo.svg" />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </body>
            </ClerkProvider>
        </html>
    );
}
