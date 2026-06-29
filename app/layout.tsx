import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carsystem RM | Sajt je u pripremi",
  description:
    "Carsystem RM priprema novo digitalno iskustvo za profesionalce u automotive refinishing industriji.",
};

export const viewport: Viewport = {
  themeColor: "#141112",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sr-Latn">
      <body>{children}</body>
    </html>
  );
}
