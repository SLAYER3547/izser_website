import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gelecek Vizyonu",
  description:
    "İZSER'in dijital ihale, teklif toplama ve web operasyon platformuna yönelik gelecek ürün vizyonu.",
  alternates: {
    canonical: "/gelecek",
  },
};

const tenderFeatures = [
  "Servis ihtiyacının dijital olarak oluşturulması",
  "Güzergâh bilgilerinin tanımlanması",
  "Araç tipi ve araç sayısının belirlenmesi",
  "Çalışma günleri ve operasyon koşulları",
  "Uygun taraflardan dijital teklif alınması",
  "Tekliflerin karşılaştırılması",
  "Teklif ve süreç geçmişinin takip edilmesi",
  "Sonuçların tek merkezden yönetilmesi",
];

const webFeatures = [
  "İlan oluşturma ve ilan yönetimi",
  "İlan arama ve filtreleme",
  "Başvuru süreçleri",
  "Araç ve araç havuzu yönetimi",
  "Kullanıcı ve araç belge süreçleri",
  "Belge talepleri",
  "Platform içi mesajlaşma",
  "Kurumsal ekip yönetimi",
  "Dijital ihale ve teklifler",
  "Operasyon geçmişi",
];

export default function FuturePage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative overflow-hidden border-b border-[#202020] bg-[#050505]">
        <div className="hero-grid" />

        <div className="hero-glow-purple top-[-260px] right-[-260px] opacity-60" />
        <div className="hero-glow-teal bottom-[-300px] left-[-260px] opacity-50" />

        <div className="site-container relative z-10 py-20 sm:py-28 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#303030] bg-[#101010] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />

            <span className="text-[9px] font-black tracking-[0.14em] text-[#a1a5aa] uppercase">
              Ürün Yol Haritası
            </span>
          </div>

          <h1 className="mt-7 max-w-[940px] text-[43px] leading-[0.98] font-black tracking-[-0.055em] text-white sm:text-[62px] lg:text-[72px]">
            Servis sektörünün
            <br />
            dijital geleceğini
            <br />
            birlikte kuruyoruz.
          </h1>

          <p className="mt-8 max-w-[720px] text-[13px] leading-7 font-medium text-[#969a9f] sm:text-[15px]">
            Mobil uygulamayla başlayan İzSer ekosistemini,
            gelecekte web operasyonları ve dijital ihale /
            teklif sistemleriyle genişletmeyi hedefliyoruz.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#mobil-uygulama/"
              className="button-primary"
            >
              Mevcut Mobil Uygulama
            </Link>

            <Link
              href="/iletisim/"
              className="button-secondary"
            >
              Bizimle İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#202020]">
        <div className="site-container">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="inline-flex rounded-full border border-[#3b82f6]/25 bg-[#3b82f6]/10 px-3 py-1.5 text-[9px] font-black tracking-[0.1em] text-[#60a5fa] uppercase">
                Gelecek Özellik
              </span>

              <h2 className="mt-6 text-[34px] leading-[1.02] font-black tracking-[-0.045em] text-white sm:text-[46px]">
                Dijital İhale &
                <br />
                Teklif Sistemi
              </h2>

              <p className="mt-6 max-w-[570px] text-[12px] leading-7 font-medium text-[#91959a]">
                Kurumsal kullanıcıların servis ihtiyaçlarını
                sistem üzerinden tanımlayabileceği, uygun hizmet
                sağlayıcıların teklif sunabileceği ve teklif
                süreçlerinin dijital olarak karşılaştırılıp
                takip edilebileceği yeni nesil operasyon yapısı.
              </p>

              <div className="mt-7 rounded-[18px] border border-[#343434] bg-[#0d0d0d] p-4">
                <p className="text-[10px] leading-5 font-semibold text-[#7e8287]">
                  Bu özellik şu anda aktif değildir. İzSer ürün
                  yol haritasındaki gelecek özelliklerden biridir.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {tenderFeatures.map(
                (feature, index) => (
                  <article
                    key={feature}
                    className="rounded-[18px] border border-[#292929] bg-[#0d0d0d] p-5"
                  >
                    <span className="text-[9px] font-black text-[#4f5357]">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <p className="mt-5 text-[11px] leading-5 font-bold text-[#c2c5c8]">
                      {feature}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#202020] bg-[#050505]">
        <div className="site-container">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <span className="inline-flex rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/10 px-3 py-1.5 text-[9px] font-black tracking-[0.1em] text-[#a78bfa] uppercase">
                Gelecek Özellik
              </span>

              <h2 className="mt-6 text-[34px] leading-[1.02] font-black tracking-[-0.045em] text-white sm:text-[46px]">
                İzSer Web
                <br />
                Operasyon Platformu
              </h2>

              <p className="mt-6 max-w-[570px] text-[12px] leading-7 font-medium text-[#91959a]">
                Mobil uygulamada yürütülen temel işlemlerin
                ilerleyen aşamalarda masaüstü ve mobil web
                tarayıcıları üzerinden de kullanılabilmesini
                planlıyoruz.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {webFeatures.map(
                (feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-[16px] border border-[#292929] bg-[#0d0d0d] px-4 py-4"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b5cf6]" />

                    <span className="text-[10.5px] font-semibold text-[#aaadb1]">
                      {feature}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#202020]">
        <div className="site-container">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[9px] font-black tracking-[0.17em] text-[#686c71] uppercase">
              MOBİL UYGULAMA
            </p>

            <h2 className="mt-4 text-[32px] leading-[1.05] font-black tracking-[-0.045em] text-white sm:text-[42px]">
              İzSer cebinde olacak.
            </h2>

            <p className="mt-5 text-[12px] leading-6 font-medium text-[#898d92] sm:text-[13px]">
              Uygulama mağazası yayın süreci tamamlandığında
              İzSer mobil uygulamasına doğrudan mağazalardan
              ulaşılabilecek.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[760px] gap-4 sm:grid-cols-2">
            <StoreCard
              platform="Google Play"
              subtitle="Android uygulaması"
              icon="▶"
            />

            <StoreCard
              platform="App Store"
              subtitle="iPhone uygulaması"
              icon="●"
            />
          </div>

          <p className="mt-7 text-center text-[9px] font-bold tracking-[0.08em] text-[#55595d] uppercase">
            Mağaza yayınları yakında
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#050505]">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[32px] border border-[#303030] bg-[#0d0d0d] p-7 sm:p-10 lg:p-12">
            <div className="hero-glow-teal bottom-[-300px] left-[-260px] opacity-40" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[9px] font-black tracking-[0.16em] text-[#696d72] uppercase">
                  İZSER
                </p>

                <h2 className="mt-5 max-w-[700px] text-[34px] leading-[1.03] font-black tracking-[-0.045em] text-white sm:text-[46px]">
                  Bugünün mobil platformu.
                  Yarın daha büyük bir dijital ekosistem.
                </h2>

                <p className="mt-5 max-w-[650px] text-[12px] leading-6 font-medium text-[#8d9196]">
                  Mevcut mobil platformu geliştirirken aynı
                  zamanda servis sektörünün daha kapsamlı dijital
                  operasyonlarını destekleyecek altyapıyı
                  oluşturuyoruz.
                </p>
              </div>

              <Link
                href="/iletisim/"
                className="button-primary"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StoreCard({
  platform,
  subtitle,
  icon,
}: {
  platform: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <div className="store-card rounded-[22px] border border-[#303030] bg-[#0d0d0d] p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#343434] bg-[#151515] text-[18px] font-black text-white">
          {icon}
        </div>

        <div>
          <p className="text-[9px] font-bold text-[#73777c]">
            {subtitle}
          </p>

          <p className="mt-1 text-[17px] font-black tracking-[-0.025em] text-white">
            {platform}
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-[#262626] pt-4">
        <span className="inline-flex rounded-full border border-[#3b3b3b] bg-[#161616] px-3 py-1.5 text-[8.5px] font-black tracking-[0.1em] text-[#8d9196] uppercase">
          Yakında
        </span>
      </div>
    </div>
  );
}