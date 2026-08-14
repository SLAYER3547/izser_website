import Link from "next/link";

import { BrandLogo } from "@/components/brand/brand-logo";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/social-icons";
import { siteContact } from "@/lib/site-contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#202020] bg-[#050505]">
      <div className="site-container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.75fr_0.9fr_0.9fr]">
          <div>
            <BrandLogo
              size="footer"
              showTagline
            />

            <p className="mt-5 max-w-[430px] text-[12px] leading-6 font-medium text-[#888c91]">
              Servis taşımacılığı sektöründeki şoförleri,
              araç sahiplerini ve işverenleri dijital
              süreçlerde bir araya getiren teknoloji
              platformu.
            </p>

            <div className="mt-6 max-w-[440px] rounded-xl border border-[#292929] bg-[#0d0d0d] px-4 py-3">
              <p className="text-[10px] leading-5 font-medium text-[#777b80]">
                İZSER taşıma hizmeti sağlayıcısı değildir.
                Platform, sektör paydaşlarının dijital ortamda
                birbirlerini bulmasına ve süreçlerini
                yönetmesine yardımcı olur.
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <SocialLink
                href={siteContact.social.instagram.href}
                label="İZSER Instagram hesabı"
                icon={
                  <InstagramIcon className="h-[18px] w-[18px]" />
                }
              />

              <SocialLink
                href={siteContact.social.facebook.href}
                label="İZSER Facebook hesabı"
                icon={
                  <FacebookIcon className="h-[18px] w-[18px]" />
                }
              />
            </div>
          </div>

          <div>
            <FooterTitle>
              Platform
            </FooterTitle>

            <div className="mt-5 flex flex-col gap-3">
              <FooterLink href="/hakkimizda">
                Hakkımızda
              </FooterLink>

              <FooterLink href="/#roller">
                Kimler İçin?
              </FooterLink>

              <FooterLink href="/#uygulama">
                Mobil Uygulama
              </FooterLink>

              <FooterLink href="/#ozellikler">
                Özellikler
              </FooterLink>

              <FooterLink href="/gelecek">
                Gelecek Vizyonu
              </FooterLink>

              <FooterLink href="/iletisim">
                İletişim
              </FooterLink>
            </div>
          </div>

          <div>
            <FooterTitle>
              İletişim
            </FooterTitle>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href={siteContact.phone.href}
                className="text-[11px] font-semibold text-[#8c9095] transition-colors hover:text-white"
              >
                {siteContact.phone.display}
              </a>

              <a
                href={siteContact.email.href}
                className="text-[11px] font-semibold text-[#8c9095] transition-colors hover:text-white"
              >
                {siteContact.email.display}
              </a>

              <a
                href={siteContact.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#8c9095] transition-colors hover:text-white"
              >
                <InstagramIcon className="h-[15px] w-[15px]" />

                {siteContact.social.instagram.username}
              </a>

              <a
                href={siteContact.social.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#8c9095] transition-colors hover:text-white"
              >
                <FacebookIcon className="h-[15px] w-[15px]" />

                Facebook
              </a>
            </div>
          </div>

          <div>
            <FooterTitle>
              Hukuki
            </FooterTitle>

            <div className="mt-5 flex flex-col gap-3">
              <FooterLink href="/kullanim-kosullari">
                Kullanım Koşulları
              </FooterLink>

              <FooterLink href="/kvkk">
                KVKK Aydınlatma Metni
              </FooterLink>

              <FooterLink href="/gizlilik">
                Gizlilik Politikası
              </FooterLink>

              <FooterLink href="/cerez-politikasi">
                Çerez Politikası
              </FooterLink>

              <FooterLink href="/acik-riza">
                Açık Rıza Metni
              </FooterLink>
            </div>
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

function FooterTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-[10px] font-black tracking-[0.12em] text-white uppercase">
      {children}
    </p>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[11px] font-medium text-[#85898e] transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2b2b2b] bg-[#101010] text-[#a7aaae] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4b4b4b] hover:bg-[#171717] hover:text-white"
    >
      {icon}
    </a>
  );
}