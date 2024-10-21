import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Home from './Home/intro/page';
import Progressbar from '../components/ProgressBar';
import Sessionwrap from '../app/camponent/sessionwraper';
import Link from "next/link";

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
      <Sessionwrap> 
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} > 
          <Progressbar />
          <div className="border border-gray-800 shadow-2xl py-2 hover:cursor-pointer sticky z-50 bg-slate-800 top-0">
            <nav className="flex flex-col md:flex-row items-center justify-around">
              <ul className="flex space-x-10">
                <li>Product</li>
                <li>Solution</li>
                <li>Resources</li>
                <li>Pricing</li>
              </ul>
              <ul className="flex items-center space-x-10">
                <li>
                  <Link href="/signin">Log in</Link>
                </li>
                <li>Contact</li>
                <li className="bg-blue-700 p-2 rounded-xl">Get started - Free</li>
              </ul>
            </nav>
          </div>
          <Home />
          {children}
        </body>
      </Sessionwrap>
    </html>
  );
}
