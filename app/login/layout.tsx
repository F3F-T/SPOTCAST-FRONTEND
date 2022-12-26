/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/react-in-jsx-scope */

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
