import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  size?: "header" | "footer";
  showTagline?: boolean;
};

export function BrandLogo({
  href = "/",
  size = "header",
  showTagline = false,
}: BrandLogoProps) {
  const isFooter =
    size === "footer";

  return (
    <Link
      href={href}
      aria-label="İZSER ana sayfa"
      className="inline-flex shrink-0 items-center"
    >
      <div className="flex flex-col items-start">
        <Image
          src="/brand/izser-logo-horizontal.png"
          alt="İZSER"
          width={384}
          height={182}
          priority={!isFooter}
          className={
            isFooter
              ? "h-[58px] w-auto object-contain"
              : "h-[46px] w-auto object-contain"
          }
        />

        {showTagline && (
          <span className="mt-1.5 pl-1 text-[7.5px] font-bold tracking-[0.16em] text-[#74787d] uppercase">
            Dijital Servis Platformu
          </span>
        )}
      </div>
    </Link>
  );
}