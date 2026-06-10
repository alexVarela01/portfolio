import "./global.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Varela | Portfolio",
  description: "My personal portfolio site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://eshkay.dev" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}<Analytics /></body>
    </html>
  );
}
