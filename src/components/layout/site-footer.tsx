export function SiteFooter() {
  return (
    <footer className="border-t border-[#202020] bg-[#050505]">
      <div className="site-container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a
              href="/"
              className="inline-flex flex-col"
              aria-label="İZSER ana sayfa"
            >
              <span className="text-[24px] font-black tracking-[-0.055em] text-white">
                İZSER
              </span>

              <span className="text-[9px] font-bold tracking-[0.16em] text-[#6f7378] uppercase">
                Dijital Servis Platformu
              </span>
            </a>

            <p className="mt-5 max-w-[430px] text-[12px] leading-6 font-medium text-[#888c91]">
              Servis taşımacılığı sektöründeki şoförleri,
              araç sahiplerini ve işverenleri dijital
              süreçlerde bir araya getiren teknoloji
              platformu.
            </p>

            <div className="mt-6 rounded-xl border border-[#292929] bg-[#0d0d0d] px-4 py-3">
              <p className="text-[10px] leading-5 font-medium text-[#777b80]">
                İZSER taşıma hizmeti sağlayıcısı değildir.
                Platform, sektör paydaşlarının dijital
                ortamda birbirlerini bulmasına ve
                süreçlerini yönetmesine yardımcı olur.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-black tracking-[0.12em] text-white uppercase">
              İletişim
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="tel:+905331341435"
                className="text-[12px] font-semibold text-[#9ea2a7] transition-colors hover:text-white"
              >
                0533 134 14 35
              </a>

              <a
                href="tel:+905332501435"
                className="text-[12px] font-semibold text-[#9ea2a7] transition-colors hover:text-white"
              >
                0533 250 14 35
              </a>

              <a
                href="mailto:info@izser.com"
                className="text-[12px] font-semibold text-[#9ea2a7] transition-colors hover:text-white"
              >
                info@izser.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-black tracking-[0.12em] text-white uppercase">
              Hukuki
            </p>

            <div className="mt-5 flex flex-col gap-3 text-[11px] font-medium text-[#777b80]">
              <span>Kullanım Koşulları</span>
              <span>KVKK Aydınlatma Metni</span>
              <span>Gizlilik Politikası</span>
              <span>Çerez Politikası</span>
            </div>

            <p className="mt-4 text-[9px] leading-4 text-[#54585c]">
              Hukuki sayfalar sonraki geliştirme
              aşamasında aktif bağlantılara
              dönüştürülecek.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#202020] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-medium text-[#62666b]">
            © {new Date().getFullYear()} İZSER Teknoloji
            Ulaşım Hizmetleri Ticaret Limited Şirketi.
          </p>

          <p className="text-[9px] font-medium text-[#4f5357]">
            Servis taşımacılığının dijital çalışma ağı.
          </p>
        </div>
      </div>
    </footer>
  );
}