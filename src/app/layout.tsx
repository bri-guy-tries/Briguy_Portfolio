import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Briguy Tries",
  description: "Welcome to Briguy Tries' Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <header className="w-full bg-[#002d72] sticky">
          <div className="max-w-screen-xl mx-auto p-4 flex">
            <div className="logo mr-auto"><img src="https://placehold.co/50" alt="profile image" /></div>
            <nav className="navigation text-white self-center">
                <button className="p4 ml-4">About Us</button>
                <button className="p4 ml-4">Portfolio</button>
                <button className="p4 ml-4">Contact Us</button>
            </nav>
          </div>
        </header>
        {children}
        <footer>
            <div className="text-center">Follow me on <a href="https://www.twitch.tv/bri_guy_tries">Twitch</a></div>
        </footer>
      </body>
    </html>
  );
}
