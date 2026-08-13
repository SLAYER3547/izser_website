import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "İZSER ile iletişime geçin. Platform, iş birlikleri ve ürün hakkında bilgi alın.",
  alternates: {
    canonical: "/iletisim",
  },
};

const contactItems = [
  {
    eyebrow: "TELEFON",
    title: "0533 134 14 35",
    description:
      "İZSER ürün ve platform süreçleri hakkında bilgi için.",
    href: "tel:+905331341435",
  },
  {
    eyebrow: "TELEFON",
    title: "0533 250 14 35",
    description:
      "İş birlikleri ve genel iletişim için.",
    href: "tel:+905332501435",
  },
  {
    eyebrow: "E-POSTA",
    title: "info@izser.com",
    description:
      "Platform, iş birlikleri ve hukuki süreçlerle ilgili yazılı iletişim.",
    href: "mailto:info@izser.com",
  },
];

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
            Platform, ürün,
            iş birlikleri veya İzSer
            hakkında merak ettiğin
            konular için doğrudan
            bizimle iletişime
            geçebilirsin.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="site-container">
          <div className="grid gap-4 lg:grid-cols-3">
            {contactItems.map(
              (item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-[26px] border border-[#292929] bg-[#0d0d0d] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#464646]"
                >
                  <p className="text-[8px] font-black tracking-[0.15em] text-[#63676c] uppercase">
                    {item.eyebrow}
                  </p>

                  <h2 className="mt-6 text-[20px] font-black tracking-[-0.025em] text-white">
                    {item.title}
                  </h2>

                  <p className="mt-4 min-h-[50px] text-[10.5px] leading-5 font-medium text-[#83878c]">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-[#252525] pt-5">
                    <span className="text-[10px] font-black text-[#b9bcc0]">
                      İletişime geç
                    </span>

                    <span className="text-[18px] text-white transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              ),
            )}
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
                  İZSER; servis
                  taşımacılığı sektöründeki
                  şoförleri, araç sahiplerini
                  ve işverenleri dijital
                  ortamda bir araya getiren
                  teknoloji ve aracılık
                  platformudur.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#292929] bg-[#101010] p-5">
                <p className="text-[10.5px] leading-6 font-medium text-[#989ca1]">
                  İZSER taşıma hizmetini
                  kendisi gerçekleştirmez,
                  taşıma sözleşmesinin
                  tarafı değildir ve
                  kullanıcıların işvereni
                  veya temsilcisi olarak
                  hareket etmez.
                </p>

                <a
                  href="/kullanim-kosullari"
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
        </div>
      </section>
    </div>
  );
}