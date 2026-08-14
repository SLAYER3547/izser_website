import { siteContact } from "@/lib/site-contact";

const organizationJsonLd = {
  "@context":
    "https://schema.org",

  "@type":
    "Organization",

  "@id":
    "https://izser.com.tr/#organization",

  name:
    "İZSER Teknoloji Ulaşım Hizmetleri Ticaret Limited Şirketi",

  alternateName:
    "İZSER",

  url:
    "https://izser.com.tr",

  logo: {
    "@type":
      "ImageObject",

    url:
      "https://izser.com.tr/brand/izser-site-icon.png",

    width:
      512,

    height:
      512,
  },

  image:
    "https://izser.com.tr/opengraph-image.png",

  email:
    siteContact.email.display,

  telephone:
    siteContact.phone.international,

  sameAs: [
    siteContact.social.instagram.href,
    siteContact.social.facebook.href,
  ],

  description:
    "Servis taşımacılığı sektöründeki şoförleri, araç sahiplerini ve işverenleri dijital süreçlerde bir araya getiren teknoloji platformu.",

  contactPoint: [
    {
      "@type":
        "ContactPoint",

      telephone:
        siteContact.phone.international,

      email:
        siteContact.email.display,

      contactType:
        "customer support",

      availableLanguage: [
        "Turkish",
      ],
    },
  ],
};

const websiteJsonLd = {
  "@context":
    "https://schema.org",

  "@type":
    "WebSite",

  "@id":
    "https://izser.com.tr/#website",

  url:
    "https://izser.com.tr",

  name:
    "İZSER",

  alternateName:
    "İZSER Dijital Servis Platformu",

  description:
    "Servis taşımacılığı sektöründeki şoförleri, araç sahiplerini ve işverenleri dijital ortamda bir araya getiren teknoloji platformu.",

  publisher: {
    "@id":
      "https://izser.com.tr/#organization",
  },

  inLanguage:
    "tr-TR",
};

export function SiteJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            serializeJsonLd(
              organizationJsonLd,
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            serializeJsonLd(
              websiteJsonLd,
            ),
        }}
      />
    </>
  );
}

function serializeJsonLd(
  value: unknown,
) {
  return JSON.stringify(
    value,
  ).replace(
    /</g,
    "\\u003c",
  );
}