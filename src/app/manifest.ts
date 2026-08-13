import type {
  MetadataRoute,
} from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name:
      "İZSER | Dijital Servis Platformu",

    short_name:
      "İZSER",

    description:
      "Servis taşımacılığı sektöründeki şoförleri, araç sahiplerini ve işverenleri dijital süreçlerde bir araya getiren teknoloji platformu.",

    start_url:
      "/",

    scope:
      "/",

    display:
      "standalone",

    background_color:
      "#000000",

    theme_color:
      "#000000",

    lang:
      "tr",

    orientation:
      "any",
  };
}