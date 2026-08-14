import type { Metadata } from "next";

import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/social-icons";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "İletişim",

  description:
    "İZSER ile iletişime geçin. Platform, iş birlikleri ve ürün hakkında bilgi alın.",

  alternates: {
    canonical: "/iletisim",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative overflow-hidden border-b border-[#202020] bg-[#050505]">
        <div className="hero-grid" />

        <div className="hero-glow top-[-280px] right-[-200px] opacity-50" />

        <div className="site-container relative z-10 py-20 sm:py-28">
          <p className="text-[9px] font-black tracking-[0.17em] text-[#6e7277] uppercase">
            İLETİŞİM
          </p>

          <h1 className="mt-5 max-w-[780px] text-[43px] leading-[0.98] font-black tracking-[-0.055em] text-white sm:text-[62px]">
            İzSer hakkında
            <br />
            konuşalım.
          </h1>

          <p className="mt-7 max-w-[650px] text-[13px] leading-7 font-medium text-[#909499] sm:text-[15px]">
            Platform, ürün, iş birlikleri veya İzSer
            hakkında merak ettiğin konular için doğrudan
            bizimle iletişime geçebilirsin.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ContactCard
              eyebrow="TELEFON"
              title={siteContact.phone.display}
              description="İZSER ürün, platform ve iş birliği süreçleri hakkında bilgi için."
              href={siteContact.phone.href}
              action="Ara"
            />

            <ContactCard
              eyebrow="E-POSTA"
              title={siteContact.email.display}
              description="Platform, iş birlikleri ve genel iletişim için."
              href={siteContact.email.href}
              action="E-posta gönder"
            />

            <SocialContactCard
              eyebrow="INSTAGRAM"
              title={siteContact.social.instagram.username}
              description="İZSER gelişmelerini ve platform duyurularını Instagram üzerinden takip et."
              href={siteContact.social.instagram.href}
              icon={
                <InstagramIcon className="h-6 w-6" />
              }
            />

            <SocialContactCard
              eyebrow="FACEBOOK"
              title="İZSER"
              description="İZSER'in Facebook hesabına ulaş ve sosyal medya paylaşımlarını takip et."
              href={siteContact.social.facebook.href}
              icon={
                <FacebookIcon className="h-6 w-6" />
              }
            />
          </div>

          <div className="mt-8 rounded-[28px] border border-[#292929] bg-[#0d0d0d] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-[9px] font-black tracking-[0.14em] text-[#6b6f74] uppercase">
                  PLATFORM HAKKINDA
                </p>

                <h2 className="mt-4 max-w-[580px] text-[27px] leading-[1.05] font-black tracking-[-0.04em] text-white sm:text-[34px]">
                  İZSER bir taşıma şirketi değildir.
                </h2>

                <p className="mt-5 max-w-[650px] text-[11px] leading-6 font-medium text-[#898d92]">
                  İZSER; servis taşımacılığı sektöründeki
                  şoförleri, araç sahiplerini ve işverenleri
                  dijital ortamda bir araya getiren teknoloji
                  ve aracılık platformudur.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#292929] bg-[#101010] p-5">
                <p className="text-[10.5px] leading-6 font-medium text-[#989ca1]">
                  İZSER taşıma hizmetini kendisi
                  gerçekleştirmez, taşıma sözleşmesinin
                  tarafı değildir ve kullanıcıların işvereni
                  veya temsilcisi olarak hareket etmez.
                </p>

                <a
                  href="/kullanim-kosullari/"
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-black text-white"
                >
                  Kullanım Koşullarını İncele

                  <span>
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#292929] bg-[#050505] p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[9px] font-black tracking-[0.14em] text-[#696d72] uppercase">
                  SOSYAL MEDYA
                </p>

                <h2 className="mt-3 text-[22px] font-black tracking-[-0.03em] text-white">
                  İzSer&apos;i sosyal medyada takip et.
                </h2>

                <p className="mt-3 max-w-[570px] text-[10.5px] leading-5 font-medium text-[#85898e]">
                  Platform gelişmeleri, duyurular ve İzSer
                  ekosistemiyle ilgili içerikler için sosyal
                  medya hesaplarımızı takip edebilirsin.
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={siteContact.social.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="İZSER Instagram hesabını aç"
                  className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#303030] bg-[#101010] text-[#d5d7da] transition-all hover:-translate-y-1 hover:border-[#505050] hover:bg-[#171717] hover:text-white"
                >
                  <InstagramIcon className="h-[22px] w-[22px]" />
                </a>

                <a
                  href={siteContact.social.facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="İZSER Facebook hesabını aç"
                  className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#303030] bg-[#101010] text-[#d5d7da] transition-all hover:-translate-y-1 hover:border-[#505050] hover:bg-[#171717] hover:text-white"
                >
                  <FacebookIcon className="h-[22px] w-[22px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  eyebrow,
  title,
  description,
  href,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-[26px] border border-[#292929] bg-[#0d0d0d] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#464646]"
    >
      <p className="text-[8px] font-black tracking-[0.15em] text-[#63676c] uppercase">
        {eyebrow}
      </p>

      <h2 className="mt-6 text-[18px] font-black tracking-[-0.025em] text-white">
        {title}
      </h2>

      <p className="mt-4 min-h-[50px] text-[10.5px] leading-5 font-medium text-[#83878c]">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between border-t border-[#252525] pt-5">
        <span className="text-[10px] font-black text-[#b9bcc0]">
          {action}
        </span>

        <span className="text-[18px] text-white transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </a>
  );
}

function SocialContactCard({
  eyebrow,
  title,
  description,
  href,
  icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-[26px] border border-[#292929] bg-[#0d0d0d] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#464646]"
    >
      <div className="flex items-center justify-between">
        <p className="text-[8px] font-black tracking-[0.15em] text-[#63676c] uppercase">
          {eyebrow}
        </p>

        <span className="text-[#a8abb0] transition-colors group-hover:text-white">
          {icon}
        </span>
      </div>

      <h2 className="mt-6 text-[18px] font-black tracking-[-0.025em] text-white">
        {title}
      </h2>

      <p className="mt-4 min-h-[50px] text-[10.5px] leading-5 font-medium text-[#83878c]">
        {description}
      </p>

      <div className="mt-8 flex items-center justify-between border-t border-[#252525] pt-5">
        <span className="text-[10px] font-black text-[#b9bcc0]">
          Hesabı aç
        </span>

        <span className="text-[18px] text-white transition-transform group-hover:translate-x-1">
          ↗
        </span>
      </div>
    </a>
  );
}