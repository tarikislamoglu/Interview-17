import "./globals.css";
import { Mukta } from "next/font/google";

const mukta_init = Mukta({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mukta",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center items-center h-[100vh] ${mukta_init.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
