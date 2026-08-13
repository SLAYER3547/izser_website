import type {
  Metadata,
  Viewport,
} from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteJsonLd } from "@/components/seo/site-json-ld";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://izser.com.tr",
  ),

  title: {
    default:
      "İZSER | Servis Taşımacılığının Dijital Platformu",

    template:
      "%s | İZSER",
  },

  description:
    "Şoförleri, araç sahiplerini ve işverenleri dijital ortamda bir araya getiren servis taşımacılığı teknoloji platformu.",

  keywords: [
    "İZSER",
    "servis taşımacılığı",
    "servis işi",
    "şoför",
    "araç sahibi",
    "işveren",
    "personel servisi",
    "servis ilanları",
    "servis ihale sistemi",
    "taşımacılık platformu",
    "servis aracı",
    "servis şoförü",
  ],

  applicationName:
    "İZSER",

  creator:
    "İZSER Teknoloji Ulaşım Hizmetleri Ticaret Limited Şirketi",

  publisher:
    "İZSER Teknoloji Ulaşım Hizmetleri Ticaret Limited Şirketi",

  category:
    "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    locale: "tr_TR",

    url:
      "https://izser.com.tr",

    siteName:
      "İZSER",

    title:
      "İZSER | Servis Taşımacılığının Dijital Platformu",

    description:
      "Şoförleri, araç sahiplerini ve işverenleri dijital ortamda bir araya getiren servis taşımacılığı teknoloji platformu.",

    images: [
      {
        url:
          "/opengraph-image.png",

        width: 1200,

        height: 630,

        alt:
          "İZSER - Servis sektörünün dijital çalışma ağı",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "İZSER | Servis Taşımacılığının Dijital Platformu",

    description:
      "Şoförleri, araç sahiplerini ve işverenleri dijital ortamda bir araya getiren servis taşımacılığı teknoloji platformu.",

    images: [
      "/twitter-image.png",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],

    shortcut:
      "/favicon.ico",

    apple:
      "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  themeColor:
    "#000000",

  colorScheme:
    "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
    >
      <body>
        <SiteJsonLd />

        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[100] -translate-y-[160%] rounded-xl bg-white px-4 py-3 text-[11px] font-black !text-black transition-transform focus:translate-y-0"
        >
          İçeriğe geç
        </a>

        <SiteHeader />

        <main
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}