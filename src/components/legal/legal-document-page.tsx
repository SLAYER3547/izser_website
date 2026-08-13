import { readFile } from "node:fs/promises";
import path from "node:path";

import Link from "next/link";

import type {
  LegalDocumentDefinition,
} from "@/lib/legal-documents";

type LegalDocumentPageProps = {
  document: LegalDocumentDefinition;
};

export async function LegalDocumentPage({
  document,
}: LegalDocumentPageProps) {
  const content = await loadLegalDocument(
    document.fileName,
  );

  const lines = content
    .replace(/\r\n/g, "\n")
    .split("\n");

  return (
    <div className="min-h-screen bg-black">
      <section className="border-b border-[#202020] bg-[#050505]">
        <div className="site-container py-12 sm:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-bold text-[#85898e] transition-colors hover:text-white"
          >
            <span aria-hidden="true">
              ←
            </span>

            Ana Sayfa
          </Link>

          <div className="mt-9 max-w-[880px]">
            <p className="text-[9px] font-black tracking-[0.16em] text-[#707479] uppercase">
              HUKUKİ METİN
            </p>

            <h1 className="mt-4 text-[34px] leading-[1.05] font-black tracking-[-0.045em] text-white sm:text-[48px]">
              {document.title}
            </h1>

            <p className="mt-5 max-w-[720px] text-[12px] leading-6 font-medium text-[#8d9196] sm:text-[13px]">
              {document.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <DocumentMeta
                label="Doküman"
                value={document.documentCode}
              />

              <DocumentMeta
                label="Sürüm"
                value={document.version}
              />

              <DocumentMeta
                label="Yürürlük"
                value={document.effectiveDate}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
            <article className="rounded-[26px] border border-[#292929] bg-[#0d0d0d] p-5 sm:p-8 lg:p-10">
              <LegalContent
                lines={lines}
              />
            </article>

            <aside className="lg:sticky lg:top-[110px] lg:self-start">
              <div className="rounded-[22px] border border-[#292929] bg-[#0d0d0d] p-5">
                <p className="text-[9px] font-black tracking-[0.14em] text-[#666a6f] uppercase">
                  Hukuki Metinler
                </p>

                <div className="mt-5 flex flex-col gap-1">
                  <LegalNavigationLink
                    href="/kullanim-kosullari"
                    label="Kullanım Koşulları"
                    active={
                      document.slug ===
                      "kullanim-kosullari"
                    }
                  />

                  <LegalNavigationLink
                    href="/kvkk"
                    label="KVKK Aydınlatma"
                    active={
                      document.slug === "kvkk"
                    }
                  />

                  <LegalNavigationLink
                    href="/gizlilik"
                    label="Gizlilik Politikası"
                    active={
                      document.slug ===
                      "gizlilik"
                    }
                  />

                  <LegalNavigationLink
                    href="/cerez-politikasi"
                    label="Çerez Politikası"
                    active={
                      document.slug ===
                      "cerez-politikasi"
                    }
                  />

                  <LegalNavigationLink
                    href="/acik-riza"
                    label="Açık Rıza Metni"
                    active={
                      document.slug ===
                      "acik-riza"
                    }
                  />
                </div>
              </div>

              <div className="mt-4 rounded-[22px] border border-[#292929] bg-[#0d0d0d] p-5">
                <p className="text-[9px] font-black tracking-[0.14em] text-[#666a6f] uppercase">
                  İletişim
                </p>

                <p className="mt-4 text-[10.5px] leading-5 font-medium text-[#83878c]">
                  Hukuki metinler veya
                  kişisel verilerle ilgili
                  konular için bizimle
                  iletişime geçebilirsin.
                </p>

                <a
                  href="mailto:info@izser.com"
                  className="mt-4 block text-[11px] font-black text-white transition-colors hover:text-[#c7c9cc]"
                >
                  info@izser.com
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

async function loadLegalDocument(
  fileName: string,
) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "legal",
    fileName,
  );

  return readFile(
    filePath,
    "utf8",
  );
}

function LegalContent({
  lines,
}: {
  lines: string[];
}) {
  return (
    <div className="space-y-3">
      {lines.map(
        (
          originalLine,
          index,
        ) => {
          const line =
            originalLine.trim();

          if (!line) {
            return (
              <div
                key={index}
                className="h-2"
              />
            );
          }

          if (isMainHeading(line)) {
            return (
              <h2
                key={index}
                className="pt-5 text-[18px] leading-7 font-black tracking-[-0.025em] text-white sm:text-[20px]"
              >
                {line}
              </h2>
            );
          }

          if (isMetadataLine(line)) {
            return (
              <p
                key={index}
                className="text-[10px] leading-5 font-bold text-[#71757a]"
              >
                {line}
              </p>
            );
          }

          if (line.startsWith("•")) {
            return (
              <div
                key={index}
                className="flex items-start gap-3 pl-1"
              >
                <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f9398]" />

                <p className="text-[12px] leading-7 font-medium text-[#b1b4b8]">
                  {line
                    .replace(/^•\s*/, "")}
                </p>
              </div>
            );
          }

          return (
            <p
              key={index}
              className="text-[12px] leading-7 font-medium text-[#b1b4b8]"
            >
              {line}
            </p>
          );
        },
      )}
    </div>
  );
}

function isMainHeading(
  line: string,
) {
  return (
    /^MADDE\s+\d+/i.test(line) ||
    /^BÖLÜM\s+\d+/i.test(line) ||
    /^KİŞİSEL VERİ/i.test(line) ||
    /^ÇEREZ/i.test(line)
  );
}

function isMetadataLine(
  line: string,
) {
  return (
    line.startsWith(
      "Doküman Kodu:",
    ) ||
    line.startsWith(
      "Sürüm:",
    ) ||
    line.startsWith(
      "Yürürlük Tarihi:",
    ) ||
    line.startsWith(
      "Revizyon Tarihi:",
    )
  );
}

function DocumentMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-full border border-[#303030] bg-[#101010] px-3 py-2">
      <span className="text-[8.5px] font-bold text-[#696d72]">
        {label}
      </span>

      <span className="ml-2 text-[9px] font-black text-[#d1d3d6]">
        {value}
      </span>
    </div>
  );
}

function LegalNavigationLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "rounded-xl bg-white px-3 py-2.5 text-[10.5px] font-black text-black"
          : "rounded-xl px-3 py-2.5 text-[10.5px] font-bold text-[#8c9095] transition-colors hover:bg-[#181818] hover:text-white"
      }
    >
      {label}
    </Link>
  );
}