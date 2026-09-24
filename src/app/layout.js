import Footer from "@/Components/Shared/Footer";
import Navbar from "@/Components/Shared/Navbar";
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
  title: {
    default: "Md. Ashikur Rahman | Lecturer ICT | Computer Engineer",
    template: "%s | Md. Ashikur Rahman | Lecturer ICT",
  },
  description:
    "Md. Ashikur Rahman Is a Computer Engineer and Lecturer at the Department of ICT, Nayabazar University, Bangladesh. He is passionate about technology, programming, and education.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
          {children}
        <Footer />
    </body>
    </html>
  );
}
