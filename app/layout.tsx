
import Gnb from "./Gnb";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
      <Gnb />
        {children}
        </body>
    </html>
  );
}
