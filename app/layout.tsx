import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Karla } from "next/font/google";
import "./globals.css";

import styles from '../styles/modules/Layout.module.scss'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"] });
const karla = Karla({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Find out all about your favorite cartoon or discover a huge universe of grandpa's and grandson's story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} ${styles.container}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}