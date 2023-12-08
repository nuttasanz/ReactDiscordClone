import { Noto_Sans } from "next/font/google";
import "./globals.css";

const font = Noto_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Discord",
  description: "Discord Clone For Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
