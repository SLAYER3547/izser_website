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

  const content = (
    <div className="flex items-center">
      <Image
        src="/brand/izser-mark.png"
        alt=""
        width={
          isFooter ? 48 : 37
        }
        height={
          isFooter ? 62 : 48
        }
        priority={!isFooter}
        className={
          isFooter
            ? "h-[52px] w-auto object-contain"
            : "h-[40px] w-auto object-contain"
        }
      />

      <div
        className={
          isFooter
            ? "ml-3 flex flex-col"
            : "ml-2.5 flex flex-col"
        }
      >
        <Image
          src="/brand/izser-wordmark.png"
          alt="İZSER"
          width={
            isFooter ? 124 : 96
          }
          height={
            isFooter ? 46 : 36
          }
          priority={!isFooter}
          className={
            isFooter
              ? "h-[36px] w-auto object-contain"
              : "h-[29px] w-auto object-contain"
          }
        />

        {showTagline && (
          <span className="mt-1 text-[7.5px] font-bold tracking-[0.16em] text-[#74787d] uppercase">
            Dijital Servis Platformu
          </span>
        )}
      </div>
    </div>
  );

  return (
    <Link
      href={href}
      aria-label="İZSER ana sayfa"
      className="inline-flex shrink-0 items-center"
    >
      {content}
    </Link>
  );
}