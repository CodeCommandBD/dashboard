import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: {
    template: "%s - Shopcart online store",
    default: 'Shopcart online store',
  },
  description: "Shopcart online store, your one stop shop for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <Header></Header>
          {children}
          <Footer></Footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
