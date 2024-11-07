import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Book.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Gotham-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Gotham-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  title:
    "IDEC Corporation Global | To create the optimum environment for humans and machines",
  description:
    "IDEC | IDEC Corporation Global | To create the optimum environment for humans and machines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gotham.variable} font-sans`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </head>
      <body className="IDEC bg-white">
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
