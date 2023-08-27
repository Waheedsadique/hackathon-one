import Navbar from "@/components/Layout/Navbar";
import "./globals.css";
import Providers from "./provider";
import { Inter, Maven_Pro } from "next/font/google";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/Layout/ThemeProvider";

const inter = Maven_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Dine Market",
  description: "Ecommerce shopping App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${inter.className} max-w-6xl xl:max-w-7xl mx-auto `}>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster position="top-left" />
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
