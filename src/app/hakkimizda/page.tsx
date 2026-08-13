import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "İZSER'in servis taşımacılığı sektörüne yönelik dijital platform yaklaşımı, amacı ve ürün vizyonu.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

const principles = [
  {
    number: "01",
    title: "Sektöre odaklı",
    description:
      "Genel amaçlı bir ilan platformu yerine servis taşımacılığı sektörünün gerçek kullanıcılarını ve iş akışlarını merkeze alıyoruz.",
  },
  {
    number: "02",
    title: "Dijital süreç",
    description:
      "İlan, araç, belge, başvuru, eşleşme ve iletişim süreçlerini birbirinden kopuk araçlar yerine tek dijital çalışma alanında birleştirmeyi hedefliyoruz.",
  },
  {
    number: "03",
    title: "Rol bazlı deneyim",
    description:
      "Şoför, araç sahibi ve işverenin ihtiyaçları farklıdır. İzSer her kullanıcı tipine kendi görevlerine uygun deneyim sunar.",
  },
  {
    number: "04",
    title: "Gelişen platform",
    description:
      "Mobil uygulamayla başlayan ürün yapısını gelecekte web operasyonları, dijital teklif ve ihale süreçleriyle genişletmeyi planlıyoruz.",
  },
];

const audiences = [
  {
    title: "Şoförler",
    color: "#3B82F6",
    text:
      "Servis sektöründeki iş fırsatlarına ulaşmak, iş arama ilanı oluşturmak ve eşleşmelerini yönetmek isteyen sürücüler.",
  },
  {
    title: "Araç Sahipleri",
    color: "#14B8A6",
    text:
      "Araçlarına iş aramak, araçlarını ve belgelerini yönetmek veya uygun şoförlere ulaşmak isteyen araç sahipleri.",
  },
  {
    title: "İşverenler",
    color: "#8B5CF6",
    text:
      "Servis operasyonları için araç veya şoför arayan, ilan ve başvuru süreçlerini dijital olarak yönetmek isteyen işletmeler.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative overflow-hidden border-b border-[#202020] bg-[#050505]">
        <div className="hero-grid" />

        <div className="hero-glow top-[-260px] left-[-240px] opacity-55" />
        <div className="hero-glow-purple right-[-260px] bottom-[-280px] opacity-45" />

        <div className="site-container relative z-10 py-20 sm:py-28 lg:py-32">
          <p className="text-[9px] font-black tracking-[0.18em] text-[#71757a] uppercase">
            HAKKIMIZDA
          </p>

          <h1 className="mt-6 max-w-[900px] text-[43px] leading-[0.98] font-black tracking-[-0.055em] text-white sm:text-[62px] lg:text-[72px]">
            Servis taşımacılığının
            <br />
            dijital çalışma altyapısını
            <br />
            oluşturuyoruz.
          </h1>

          <p className="mt-8 max-w-[720px] text-[13px] leading-7 font-medium text-[#969a9f] sm:text-[15px]">
            İZSER; şoförleri, araç sahiplerini ve işverenleri
            servis taşımacılığı sektöründeki dijital süreçlerde
            bir araya getirmek amacıyla geliştirilen teknoloji
            platformudur.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#mobil-uygulama"
              className="button-primary"
            >
              Mobil Uygulamayı İncele
            </Link>

            <Link
              href="/gelecek"
              className="button-secondary"
            >
              Gelecek Vizyonu
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#202020]">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-[9px] font-black tracking-[0.16em] text-[#707479] uppercase">
                NEDEN İZSER?
              </p>

              <h2 className="mt-5 text-[34px] leading-[1.03] font-black tracking-[-0.045em] text-white sm:text-[44px]">
                Sektörün günlük
                <br />
                ihtiyaçlarına göre
                <br />
                tasarlandı.
              </h2>
            </div>

            <div>
              <p className="text-[13px] leading-7 font-medium text-[#999da2]">
                Servis taşımacılığı sektöründe iş arayan şoför,
                aracına iş arayan araç sahibi ve operasyonu için
                araç veya personel arayan işveren farklı ihtiyaçlara
                sahiptir.
              </p>

              <p className="mt-6 text-[13px] leading-7 font-medium text-[#999da2]">
                İZSER bu tarafları yalnızca bir ilan ekranında
                buluşturmayı değil; araç, belge, başvuru, eşleşme,
                mesajlaşma ve kurumsal süreçleri birbirine bağlı
                dijital iş akışlarına dönüştürmeyi amaçlar.
              </p>

              <div className="mt-8 rounded-[22px] border border-[#292929] bg-[#0d0d0d] p-5">
                <p className="text-[11px] leading-6 font-medium text-[#b2b5b9]">
                  İZSER taşıma hizmeti veren bir firma değildir.
                  Platformun temel görevi sektör paydaşlarının
                  birbirlerini bulmasına ve dijital süreçlerini
                  yönetmesine yardımcı olan teknoloji altyapısını
                  sunmaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#202020] bg-[#050505]">
        <div className="site-container">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[9px] font-black tracking-[0.17em] text-[#686c71] uppercase">
              YAKLAŞIMIMIZ
            </p>

            <h2 className="mt-4 text-[32px] leading-[1.05] font-black tracking-[-0.045em] text-white sm:text-[42px]">
              Bir ilan sitesinden daha fazlası.
            </h2>

            <p className="mt-5 text-[12px] leading-6 font-medium text-[#898d92] sm:text-[13px] sm:leading-7">
              Ürünün temelini, birbirine bağlı ve sektör
              ihtiyaçlarına göre şekillenen dijital süreçler oluşturur.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map(
              (principle) => (
                <article
                  key={principle.number}
                  className="rounded-[24px] border border-[#292929] bg-[#0d0d0d] p-6"
                >
                  <span className="text-[10px] font-black tracking-[0.12em] text-[#55595d]">
                    {principle.number}
                  </span>

                  <h3 className="mt-7 text-[18px] font-black tracking-[-0.025em] text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-[11px] leading-6 font-medium text-[#898d92]">
                    {principle.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#202020]">
        <div className="site-container">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[9px] font-black tracking-[0.17em] text-[#686c71] uppercase">
              EKOSİSTEM
            </p>

            <h2 className="mt-4 text-[32px] leading-[1.05] font-black tracking-[-0.045em] text-white sm:text-[42px]">
              Üç taraf. Tek dijital platform.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {audiences.map(
              (audience) => (
                <article
                  key={audience.title}
                  className="relative overflow-hidden rounded-[25px] border border-[#292929] bg-[#0d0d0d] p-6"
                >
                  <div
                    className="absolute top-0 left-0 h-[2px] w-full"
                    style={{
                      background: `linear-gradient(90deg, ${audience.color}, transparent 70%)`,
                    }}
                  />

                  <span
                    className="block h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: audience.color,
                      boxShadow: `0 0 15px ${audience.color}70`,
                    }}
                  />

                  <h3 className="mt-7 text-[21px] font-black tracking-[-0.03em] text-white">
                    {audience.title}
                  </h3>

                  <p className="mt-4 text-[11px] leading-6 font-medium text-[#8c9095]">
                    {audience.text}
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#050505]">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[32px] border border-[#303030] bg-[#0d0d0d] p-7 sm:p-10 lg:p-12">
            <div className="hero-glow right-[-300px] bottom-[-360px] opacity-45" />

            <div className="relative z-10 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[9px] font-black tracking-[0.16em] text-[#6d7176] uppercase">
                  BİRLİKTE BÜYÜYEN PLATFORM
                </p>

                <h2 className="mt-5 max-w-[700px] text-[34px] leading-[1.03] font-black tracking-[-0.045em] text-white sm:text-[46px]">
                  İzSer'in sonraki adımlarını keşfet.
                </h2>

                <p className="mt-5 max-w-[650px] text-[12px] leading-6 font-medium text-[#8d9196]">
                  Web operasyon platformu, dijital teklif ve
                  ihale süreçleri İzSer ürün yol haritasının
                  önemli parçaları arasında.
                </p>
              </div>

              <Link
                href="/gelecek"
                className="button-primary"
              >
                Gelecek Özellikleri Gör
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}