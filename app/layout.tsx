import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/responsive.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albania & Montenegro Off-Road Guide",
  description: "Land Cruiser Expedition Through the Balkans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
