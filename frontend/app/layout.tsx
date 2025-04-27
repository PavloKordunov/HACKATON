'use client';

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/hooks/useUser";
import { RegisterProvider } from "@/hooks/useRegister";

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        <SessionProvider>
          <UserProvider>
          <RegisterProvider>
            {children}
            </RegisterProvider>
          </UserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
