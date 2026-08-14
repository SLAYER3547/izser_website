import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal/legal-document-page";
import { legalDocuments } from "@/lib/legal-documents";

const document =
  legalDocuments.kvkk;

export const metadata: Metadata = {
  title: document.shortTitle,
  description: document.description,
  alternates: {
    canonical: "/kvkk/",
  },
};

export default function KvkkPage() {
  return (
    <LegalDocumentPage
      document={document}
    />
  );
}