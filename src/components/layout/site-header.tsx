import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";

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
    label: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    label: "Gelecek",
    href: "/gelecek",
  },
  {
    label: "İletişim",
    href: "/iletisim",
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#202020] bg-black/85 backdrop-blur-2xl">
      <div className="site-container flex h-[var(--header-height)] items-center justify-between gap-5">
        <BrandLogo />

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Ana navigasyon"
        >
          {navigationItems.map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold text-[#a5a8ac] transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:info@izser.com"
            className="rounded-xl border border-[#303030] px-4 py-2.5 text-[11px] font-bold text-[#c9cbce] transition-colors hover:border-[#484848] hover:text-white"
          >
            info@izser.com
          </a>

          <Link
            href="/#mobil-uygulama"
            className="button-primary min-h-[42px] rounded-xl px-5 py-2.5 text-[11px]"
          >
            Mobil Uygulama
          </Link>
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

          <div className="absolute top-12 right-0 w-[275px] overflow-hidden rounded-2xl border border-[#2b2b2b] bg-[#0d0d0d] p-2 shadow-2xl shadow-black/60">
            <nav
              className="flex flex-col"
              aria-label="Mobil navigasyon"
            >
              {navigationItems.map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-[13px] font-semibold text-[#c4c6c9] transition-colors hover:bg-[#181818] hover:text-white"
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <div className="my-2 h-px bg-[#262626]" />

              <Link
                href="/#mobil-uygulama"
                className="button-primary min-h-[44px] rounded-xl px-4 text-[12px]"
              >
                Mobil Uygulamayı Keşfet
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}