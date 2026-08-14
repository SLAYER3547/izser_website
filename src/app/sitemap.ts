import type {
  MetadataRoute,
} from "next";

export const dynamic =
  "force-static";

const baseUrl =
  "https://izser.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate =
    new Date();

  return [
    {
      url:
        baseUrl,

      lastModified:
        buildDate,

      changeFrequency:
        "weekly",

      priority:
        1,
    },
    {
      url:
        `${baseUrl}/hakkimizda`,

      lastModified:
        buildDate,

      changeFrequency:
        "monthly",

      priority:
        0.8,
    },
    {
      url:
        `${baseUrl}/gelecek`,

      lastModified:
        buildDate,

      changeFrequency:
        "monthly",

      priority:
        0.8,
    },
    {
      url:
        `${baseUrl}/iletisim`,

      lastModified:
        buildDate,

      changeFrequency:
        "monthly",

      priority:
        0.7,
    },
    {
      url:
        `${baseUrl}/kullanim-kosullari`,

      lastModified:
        buildDate,

      changeFrequency:
        "yearly",

      priority:
        0.4,
    },
    {
      url:
        `${baseUrl}/kvkk`,

      lastModified:
        buildDate,

      changeFrequency:
        "yearly",

      priority:
        0.4,
    },
    {
      url:
        `${baseUrl}/gizlilik`,

      lastModified:
        buildDate,

      changeFrequency:
        "yearly",

      priority:
        0.4,
    },
    {
      url:
        `${baseUrl}/cerez-politikasi`,

      lastModified:
        buildDate,

      changeFrequency:
        "yearly",

      priority:
        0.4,
    },
    {
      url:
        `${baseUrl}/acik-riza`,

      lastModified:
        buildDate,

      changeFrequency:
        "yearly",

      priority:
        0.3,
    },
  ];
}