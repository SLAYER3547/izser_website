const navigationItems = [
  {
    label: "Platform",
    href: "/#platform",
  },
  {
    label: "Kimler için?",
    href: "/#roller",
  },
  {
    label: "Özellikler",
    href: "/#ozellikler",
  },
  {
    label: "Gelecek",
    href: "/#gelecek",
  },
  {
    label: "İletişim",
    href: "/#iletisim",
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#202020] bg-black/80 backdrop-blur-2xl">
      <div className="site-container flex h-[var(--header-height)] items-center justify-between gap-5">
        <a
          href="/"
          className="group flex items-center gap-3"
          aria-label="İZSER ana sayfa"
        >
          <div className="flex flex-col">
            <span className="text-[20px] font-black tracking-[-0.055em] text-white">
              İZSER
            </span>

            <span className="mt-[-2px] hidden text-[8px] font-bold tracking-[0.17em] text-[#74787d] uppercase sm:block">
              Dijital Servis Platformu
            </span>
          </div>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Ana navigasyon"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] font-semibold text-[#a5a8ac] transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:info@izser.com"
            className="rounded-xl border border-[#303030] px-4 py-2.5 text-[11px] font-bold text-[#c9cbce] transition-colors hover:border-[#484848] hover:text-white"
          >
            info@izser.com
          </a>

          <a
            href="#mobil-uygulama"
            className="rounded-xl bg-white px-5 py-2.5 text-[11px] font-black text-black transition-transform duration-200 hover:-translate-y-0.5"
          >
            Mobil Uygulama
          </a>
        </div>

        <details className="mobile-menu relative lg:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#292929] bg-[#101010]"
            aria-label="Menüyü aç"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="mobile-menu-line h-[1.5px] w-[17px] bg-white" />
              <span className="mobile-menu-line h-[1.5px] w-[17px] bg-white" />
            </span>
          </summary>

          <div className="absolute top-12 right-0 w-[260px] overflow-hidden rounded-2xl border border-[#2b2b2b] bg-[#0d0d0d] p-2 shadow-2xl shadow-black/60">
            <nav
              className="flex flex-col"
              aria-label="Mobil navigasyon"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-[13px] font-semibold text-[#c4c6c9] transition-colors hover:bg-[#181818] hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <div className="my-2 h-px bg-[#262626]" />

              <a
                href="#mobil-uygulama"
                className="rounded-xl bg-white px-4 py-3 text-center text-[12px] font-black text-black"
              >
                Mobil Uygulamayı Keşfet
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}