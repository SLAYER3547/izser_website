import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { legalDocuments } from "@/lib/legal-documents";

const document =
  legalDocuments[
    "cerez-politikasi"
  ];

export const metadata: Metadata = {
  title: document.shortTitle,
  description: document.description,
  alternates: {
    canonical:
      "/cerez-politikasi",
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalDocumentPage
      document={document}
    />
  );
}