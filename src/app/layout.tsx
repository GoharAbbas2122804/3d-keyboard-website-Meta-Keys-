import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import './globals.css';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const robotoflex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
  axes: ['wdth', 'slnt', 'opsz']
});



export const metadata: Metadata = {
  metadataBase: new URL("https://3d-keyboard-shop.vercel.app"),
  title: "MetaData | 3D Keyboard Shop",
  description: "Customize and buy your perfect 3D mechanical keyboard. Choose keycaps, switches, and more.",
  openGraph: {
    title: "MetaData | 3D Keyboard Shop",
    description: "Customize and buy your perfect 3D mechanical keyboard.",
    url: "https://3d-keyboard-shop.vercel.app", // Replace with actual URL if known, or leave generic
    siteName: "MetaData",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists or use a placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaData | 3D Keyboard Shop",
    description: "Customize and buy your perfect 3D mechanical keyboard.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoflex.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
