import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { legalDocuments } from "@/lib/legal-documents";

const document =
  legalDocuments.gizlilik;

export const metadata: Metadata = {
  title: document.shortTitle,
  description: document.description,
  alternates: {
    canonical: "/gizlilik/",
  },
};

export default function PrivacyPage() {
  return (
    <LegalDocumentPage
      document={document}
    />
  );
}