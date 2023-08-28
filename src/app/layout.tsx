import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "../../src/Providers/Providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thesis.it",
  description: "Your best bet to defending your thesis with confidence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers></body>
      </html>
    </ClerkProvider>
  );
}
