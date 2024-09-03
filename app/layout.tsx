import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Black & Heale",
  description:
    "Our skilled team specialises in both commercial and private projects, offering comprehensive planning and execution from start to finish.",
  keywords: [
    "Black & Heale",
    "Black and Heale",
    "Black and Heale Joinery",
    "Black and Heale Construction",
    "Construction Bishop Auckland",
    "Joinery Bishop Auckland",
    "Carpentry Bishop Auckland",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
