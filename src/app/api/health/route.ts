export const dynamic =
  "force-dynamic";

export const revalidate = 0;

export function GET() {
  return Response.json(
    {
      status: "ok",

      service:
        "izser-website",

      timestamp:
        new Date().toISOString(),
    },
    {
      status: 200,

      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate",
      },
    },
  );
}