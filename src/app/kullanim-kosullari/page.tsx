import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { legalDocuments } from "@/lib/legal-documents";

const document =
  legalDocuments["kullanim-kosullari"];

export const metadata: Metadata = {
  title: document.shortTitle,
  description: document.description,
  alternates: {
    canonical:
      "/kullanim-kosullari/",
  },
};

export default function TermsPage() {
  return (
    <LegalDocumentPage
      document={document}
    />
  );
}