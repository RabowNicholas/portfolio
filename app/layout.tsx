import type { Metadata } from "next";
import "./styles/globals.css";
import "./styles/buttons.css";
import { Roboto } from "next/font/google";

const robot = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-richBlack text-white ${robot.className}`}>
        {children}
        <script src="tilt.jquery.js"></script>
      </body>
    </html>
  );
}
