import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniket Sharma | Full-Stack Web Developer",
  description:
    "Full-stack web developer with 7 years of experience in PHP, Laravel, React, and more.",
  icons: {
    icon: "/images/favicon.png",
  },
  verification: {
    google: "7N_RtDQWvAVpYSS_pZDicrZRR9hw9zvwxpHVg3uL5kA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-70NNC5KY4D" />
    </html>
  );
}

import "./globals.css";
