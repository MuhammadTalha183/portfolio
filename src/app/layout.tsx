import "./globals.css";
import type { ReactNode } from "react";

export const metadata = { title: "Muhammad Talha — Frontend Developer", description: "Frontend Developer open to internships. React, Next.js, responsive design." };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
