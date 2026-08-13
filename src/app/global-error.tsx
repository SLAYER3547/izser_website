"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#000000",
          color: "#ffffff",
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "620px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "22px",
                border: "1px solid #303030",
                background: "#101010",
                fontSize: "26px",
                fontWeight: 900,
              }}
            >
              !
            </div>

            <p
              style={{
                marginTop: "28px",
                marginBottom: 0,
                fontSize: "10px",
                fontWeight: 900,
                letterSpacing: "0.15em",
                color: "#74787d",
              }}
            >
              BEKLENMEYEN BİR HATA
            </p>

            <h1
              style={{
                marginTop: "16px",
                marginBottom: 0,
                fontSize: "clamp(34px, 6vw, 52px)",
                lineHeight: 1.05,
                fontWeight: 900,
                letterSpacing: "-0.045em",
              }}
            >
              Bir şeyler
              <br />
              beklendiği gibi gitmedi.
            </h1>

            <p
              style={{
                maxWidth: "500px",
                margin: "22px auto 0",
                color: "#969a9f",
                fontSize: "13px",
                lineHeight: 1.7,
              }}
            >
              Sayfayı tekrar yükleyebilir veya İzSer ana sayfasına
              dönebilirsin.
            </p>

            <div
              style={{
                marginTop: "32px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                onClick={reset}
                style={{
                  minHeight: "50px",
                  padding: "0 24px",
                  borderRadius: "15px",
                  border: "1px solid #ffffff",
                  background: "#ffffff",
                  color: "#000000",
                  fontSize: "12px",
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Tekrar Dene
              </button>

              <Link
                href="/"
                style={{
                  minHeight: "50px",
                  padding: "0 24px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px",
                  border: "1px solid #343434",
                  background: "#101010",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: 900,
                }}
              >
                Ana Sayfa
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}