import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Home from './Home/intro/page'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="ml-28 mr-28 border border-gray-800 shadow-2xl shadow-gray-900 rounded-2xl py-2 hover:cursor-pointer sticky z-50 bg-slate-800 top-0">
          <nav className="flex flex-row justify-evenly">
            <ul className="flex space-x-10 mt-2">
              <li>Product</li>
              <li>Solution</li>
              <li>Resources</li>
              <li>pricing</li>
            </ul>
            <ul className="flex items-center space-x-10">
              <li>Log in</li>
              <li>contact</li>
              <li className="bg-blue-700 p-2 rounded-sm">Get started-Free</li>
            </ul>
          </nav>
        </div>
        <Home/>
        {children}
      </body>
    </html>
  );
}
