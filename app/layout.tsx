import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SSA Hunter Valley | Signature Slam Academy",
  description:
    "Grow your game with the professionals. SSA Hunter Valley — the world's first 60 multi surface court tennis academy in the Asia Pacific.",
  keywords: [
    "tennis academy",
    "Hunter Valley",
    "SSA",
    "Signature Slam Academy",
    "tennis coaching Australia",
  ],
  openGraph: {
    title: "SSA Hunter Valley | Signature Slam Academy",
    description:
      "Grow your game with the professionals. The world's first one-stop tennis academy in the Asia Pacific.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.self !== window.top) {
                var style = document.createElement('style');
                style.innerHTML = '::-webkit-scrollbar { display: none; } * { -ms-overflow-style: none; scrollbar-width: none; } .hide-in-mockup { display: none !important; }';
                document.head.appendChild(style);
              }
            `
          }}
        />
      </body>
    </html>
  );
}
