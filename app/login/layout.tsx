"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>SPOTCAST</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
