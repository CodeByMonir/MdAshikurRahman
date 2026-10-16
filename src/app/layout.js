import HeroBackground from "@/Components/Home/HeroBG";
import Footer from "@/Components/Shared/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/Context/AuthContext";
import Navbar from "@/Components/Shared/Navbar";

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
        <AuthProvider>
          <Navbar />
          <div className="relative min-h-screen overflow-hidden">
            <HeroBackground />
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
