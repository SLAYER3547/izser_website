import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-var(--header-height))] overflow-hidden bg-black">
      <div className="hero-grid" />

      <div className="hero-glow top-[-260px] left-[-280px] opacity-50" />

      <div className="hero-glow-purple right-[-260px] bottom-[-280px] opacity-45" />

      <div className="site-container relative z-10 flex min-h-[calc(100vh-var(--header-height))] items-center justify-center py-20">
        <div className="w-full max-w-[680px] text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#303030] bg-[#101010]">
            <span className="text-[23px] font-black text-white">
              404
            </span>
          </div>

          <p className="mt-8 text-[9px] font-black tracking-[0.18em] text-[#686c71] uppercase">
            SAYFA BULUNAMADI
          </p>

          <h1 className="mt-5 text-[38px] leading-[1.02] font-black tracking-[-0.05em] text-white sm:text-[54px]">
            Aradığın sayfaya
            <br />
            ulaşamadık.
          </h1>

          <p className="mx-auto mt-6 max-w-[540px] text-[12px] leading-6 font-medium text-[#8e9297] sm:text-[13px]">
            Bağlantı değiştirilmiş,
            kaldırılmış veya adres
            hatalı girilmiş olabilir.
            Ana sayfaya dönerek İzSer
            platformunu keşfetmeye
            devam edebilirsin.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="button-primary"
            >
              Ana Sayfaya Dön
            </Link>

            <Link
              href="/iletisim"
              className="button-secondary"
            >
              İletişime Geç
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-[#242424] pt-7">
            <Link
              href="/#uygulama"
              className="text-[10px] font-bold text-[#7c8085] transition-colors hover:text-white"
            >
              Mobil Uygulama
            </Link>

            <Link
              href="/hakkimizda"
              className="text-[10px] font-bold text-[#7c8085] transition-colors hover:text-white"
            >
              Hakkımızda
            </Link>

            <Link
              href="/gelecek"
              className="text-[10px] font-bold text-[#7c8085] transition-colors hover:text-white"
            >
              Gelecek
            </Link>

            <Link
              href="/kullanim-kosullari"
              className="text-[10px] font-bold text-[#7c8085] transition-colors hover:text-white"
            >
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}