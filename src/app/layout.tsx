import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://izser.com.tr"),
  title: {
    default: "İZSER | Servis Taşımacılığının Dijital Platformu",
    template: "%s | İZSER",
  },
  description:
    "Şoförleri, araç sahiplerini ve işverenleri dijital ortamda bir araya getiren servis taşımacılığı teknoloji platformu.",
  keywords: [
    "İZSER",
    "servis taşımacılığı",
    "servis işi",
    "şoför",
    "araç sahibi",
    "personel servisi",
    "servis ilanları",
    "servis ihale sistemi",
    "taşımacılık platformu",
  ],
  applicationName: "İZSER",
  creator: "İZSER Teknoloji Ulaşım Hizmetleri Ticaret Limited Şirketi",
  publisher: "İZSER Teknoloji Ulaşım Hizmetleri Ticaret Limited Şirketi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://izser.com.tr",
    siteName: "İZSER",
    title: "İZSER | Servis Taşımacılığının Dijital Platformu",
    description:
      "Şoförleri, araç sahiplerini ve işverenleri dijital ortamda bir araya getiren servis taşımacılığı teknoloji platformu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}