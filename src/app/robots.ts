import type {
  MetadataRoute,
} from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap:
      "https://izser.com.tr/sitemap.xml",

    host:
      "https://izser.com.tr",
  };
}