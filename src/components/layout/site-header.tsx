import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { siteNavigationItems } from "@/components/layout/site-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#202020] bg-black/85 backdrop-blur-2xl">
      <div className="site-container flex h-[var(--header-height)] items-center justify-between gap-5">
        <BrandLogo />

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Ana navigasyon"
        >
          {siteNavigationItems.map(
            (item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[11px] font-semibold text-[#a5a8ac] transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="mailto:info@izser.com"
            className="whitespace-nowrap rounded-xl border border-[#303030] px-4 py-2.5 text-[11px] font-bold text-[#c9cbce] transition-colors hover:border-[#484848] hover:text-white"
          >
            info@izser.com
          </a>

          <Link
            href="/#mobil-uygulama"
            className="button-primary min-h-[42px] whitespace-nowrap rounded-xl px-5 py-2.5 text-[11px]"
          >
            Mobil Uygulama
          </Link>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}