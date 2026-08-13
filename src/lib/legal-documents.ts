export type LegalDocumentSlug =
  | "kullanim-kosullari"
  | "kvkk"
  | "gizlilik"
  | "cerez-politikasi"
  | "acik-riza";

export type LegalDocumentDefinition = {
  slug: LegalDocumentSlug;
  title: string;
  shortTitle: string;
  description: string;
  documentCode: string;
  version: string;
  effectiveDate: string;
  fileName: string;
};

export const legalDocuments: Record<
  LegalDocumentSlug,
  LegalDocumentDefinition
> = {
  "kullanim-kosullari": {
    slug: "kullanim-kosullari",
    title: "Kullanım Koşulları ve Üyelik Sözleşmesi",
    shortTitle: "Kullanım Koşulları",
    description:
      "İZSER mobil uygulaması ve platform hizmetlerinin kullanımına ilişkin üyelik esasları, haklar ve yükümlülükler.",
    documentCode: "UKS-001",
    version: "1.0",
    effectiveDate: "12.08.2026",
    fileName: "kullanim_kosullari.txt",
  },

  kvkk: {
    slug: "kvkk",
    title: "KVKK Aydınlatma Metni",
    shortTitle: "KVKK Aydınlatma Metni",
    description:
      "İZSER tarafından kişisel verilerin işlenmesine ilişkin 6698 sayılı KVKK kapsamındaki bilgilendirme metni.",
    documentCode: "KVKK-AM-001",
    version: "1.0",
    effectiveDate: "12.08.2026",
    fileName: "kvkk_aydinlatma.txt",
  },

  gizlilik: {
    slug: "gizlilik",
    title: "Gizlilik Politikası",
    shortTitle: "Gizlilik Politikası",
    description:
      "İZSER platformunda gizlilik, veri güvenliği ve kullanıcı bilgilerinin korunmasına ilişkin politika.",
    documentCode: "GP-001",
    version: "1.0",
    effectiveDate: "12.08.2026",
    fileName: "gizlilik_politikasi.txt",
  },

  "cerez-politikasi": {
    slug: "cerez-politikasi",
    title: "Çerez Politikası",
    shortTitle: "Çerez Politikası",
    description:
      "İZSER web hizmetlerinde kullanılan çerezler ve benzeri teknolojilere ilişkin bilgilendirme.",
    documentCode: "KVKK-ÇP-001",
    version: "1.0",
    effectiveDate: "12.08.2026",
    fileName: "cerez_politikasi.txt",
  },

  "acik-riza": {
    slug: "acik-riza",
    title:
      "Kişisel Verilerin İşlenmesine İlişkin Açık Rıza Metni",
    shortTitle: "Açık Rıza Metni",
    description:
      "Açık rızaya tabi kişisel veri işleme faaliyetlerine ilişkin bilgilendirme ve tercih metni.",
    documentCode: "KVKK-AR-001",
    version: "1.0",
    effectiveDate: "12.08.2026",
    fileName: "kvkk_acik_riza.txt",
  },
};

export const legalDocumentList =
  Object.values(legalDocuments);