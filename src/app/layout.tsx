import "./globals.css";
import { hackNerdFont } from "./utils/fonts";

export const metadata = {
  title: "statics.wiki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hackNerdFont.className}>
      <body>{children}</body>
    </html>
  );
}
