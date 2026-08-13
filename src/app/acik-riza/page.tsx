import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { legalDocuments } from "@/lib/legal-documents";

const document =
  legalDocuments["acik-riza"];

export const metadata: Metadata = {
  title: document.shortTitle,
  description: document.description,
  alternates: {
    canonical: "/acik-riza",
  },
};

export default function ExplicitConsentPage() {
  return (
    <LegalDocumentPage
      document={document}
    />
  );
}