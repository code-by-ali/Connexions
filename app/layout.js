import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include the weights you need
});

export const metadata = {
  title: "Connexions",
  description: "Conneexions App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
