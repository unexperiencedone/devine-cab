import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bansal Travels | Premium Car Rentals & Tour Packages",
  description:
    "Bansal Travels offers reliable taxi services, luxury tempo travellers, and customized tour packages. Your trusted partner for local and outstation travel.",
  keywords: [
    "Bansal Travels",
    "Car hire Delhi",
    "Outstation taxi",
    "Tempo Traveller on rent",
    "Tour operators",
  ],
  openGraph: {
    title: "Bansal Travels | Reliable Journeys, Unforgettable Memories",
    description:
      "Book premium cars and buses for your next trip. 24/7 service with professional chauffeurs.",
    url: "https://www.bansaltravels.com",
    siteName: "Bansal Travels",
    images: [{ url: "https://www.bansaltravels.com/og-image.jpg" }],
    type: "website",
  },
  icons: {
    icon: "/bansal_travels.jpeg", // Points to public/favicon.ico
    shortcut: "/bansal_travels.jpeg",
    apple: "/bansal_travels.jpeg",
    other: {
      rel: "/bansal_travels.jpeg",
      url: "/bansal_travels.jpeg",
    },
  },
  verification: {
    google: "pSOhu8nPhJFKNmvNueSPOcJUs5zicvNx-yp6BXUYj-w",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-300">{children}</body>
    </html>
  );
}
