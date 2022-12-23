"use client";

import "../styles/globals.css";
import Header from "../src/components/main/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>SPOTCAST</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
