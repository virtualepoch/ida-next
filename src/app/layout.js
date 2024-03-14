import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { UI } from "./components/ui";
import { Header } from "./components/global/header";
import { Footer } from "./components/global/footer";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import "./components/ui/ui.css";

const inter = Inter({ subsets: ["latin"] });
const comfortaa = localFont({
  src: "/fonts/Comfortaa-Light.ttf",
  variable: "--font-comfortaa",
});

export const metadata = {
  title: {
    default: "Pool & Spa Service Professionals - IdaHomeServ Pool & Spa",
    template: "%s - IdaHomeServ Pool & Spa",
  },
  description:
    "We provide Residential & Commercial Pool & Spa Cleaning, Maintenance, Technical Services, Openings, Closings, Water Treatment, and many other services.",
  generator: "Next.js",
  applicationName: "IdaHomeServ Pool & Spa Web App",
  referrer: "origin-when-cross-origin",
  keywords: [
    "pool openings",
    "boise pool openings",
    "pool opening services",
    "boise pool opening services",
    "Pool opening and closing services",
    "IdaHomeServ Pool & Spa",
    "Pool maintenance services",
    "Spa maintenance services",
    "Pool cleaning services",
    "Professional pool cleaning services",
    "Spa cleaning services",
    "Professional spa cleaning services",
    "Pool filter cleaning and replacement",
    "Spa filter cleaning and replacement",
    "Professional pool services",
    "Professional spa services",
    "Residential pool services",
    "Residential spa services",
    "Commercial pool services",
    "Commercial spa services",
    "Pool chemical balancing",
    "Pool equipment repair",
    "Pool leak detection",
    "pool closings",
  ],
  authors: [
    { name: "James Davis" },
    { name: "Paul Elie" },
    { name: "Craig Kaufman", url: "https://www.virtualepoch.com" },
  ],
  creator: "Craig Kaufman",
  publishers: [{ name: "James Davis" }, { name: "Paul Elie" }],

  metadataBase: new URL("https://www.idahomeserv.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "IdaHomeServ Pool & Spa",
    description:
      "Your Pool & Spa Service Professionals - Residential & Commercial Services",
    url: "/",
    siteName: "Pool & Spa Service Professionals - IdaHomeServ Pool & Spa",
    images: {
      url: "/og.jpg",
      width: 1200,
      height: 630,
    },
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#fff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${comfortaa.variable}`}>
        <div className="app">
          <UI />

          <Header />

          {children}

          <Footer />
        </div>
      </body>

      <GoogleTagManager gtmId="G-DXX4VQFTV3" />
    </html>
  );
}
