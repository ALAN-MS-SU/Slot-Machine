import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Slot Machine",
  description: "Slot Machine Web Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="bg-body w-full h-full ">{children}</body>
    </html>
  );
}
