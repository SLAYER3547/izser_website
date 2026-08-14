import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons/social-icons";
import { siteContact } from "@/lib/site-contact";

const roles = [
  {
    title: "Şoför",
    eyebrow: "DRIVER",
    color: "#3B82F6",
    description:
      "Servis sektöründeki iş fırsatlarını keşfet, iş arama ilanını oluştur ve başvurularını tek noktadan yönet.",
    items: [
      "İş fırsatlarını keşfet",
      "İş arama ilanı oluştur",
      "Başvurularını yönet",
      "Belgelerini dijital olarak takip et",
    ],
  },
  {
    title: "Araç Sahibi",
    eyebrow: "VEHICLE OWNER",
    color: "#14B8A6",
    description:
      "Aracın için iş fırsatlarına ulaş, araçlarını ve belgelerini yönet, ihtiyaç halinde şoför arama ilanı oluştur.",
    items: [
      "Aracına iş ara",
      "Şoför arama ilanı oluştur",
      "Araç ve evrak yönetimi",
      "Başvuru ve iletişim süreçleri",
    ],
  },
  {
    title: "İşveren",
    eyebrow: "EMPLOYER",
    color: "#8B5CF6",
    description:
      "Servis operasyonun için uygun araç ve şoförleri keşfet, ilanlarını ve kurumsal süreçlerini yönet.",
    items: [
      "Araç ve şoför ara",
      "İlanlarını yönet",
      "Başvuruları değerlendir",
      "Kurumsal ekip yönetimi",
    ],
  },
];

const features = [
  {
    number: "01",
    title: "Rol Bazlı İlan Sistemi",
    description:
      "Şoför, araç sahibi ve işveren hesapları kendi ihtiyaçlarına uygun ilan akışlarını görür ve yönetir.",
  },
  {
    number: "02",
    title: "Araç Yönetimi",
    description:
      "Araç bilgileri, fotoğraflar ve araç belgeleri dijital olarak tek merkezden yönetilebilir.",
  },
  {
    number: "03",
    title: "Dijital Belge Merkezi",
    description:
      "Kullanıcı ve araç belgeleri yüklenebilir, durumları takip edilebilir ve gerekli iş akışlarında kontrollü olarak kullanılabilir.",
  },
  {
    number: "04",
    title: "Başvuru ve Eşleşme",
    description:
      "İlanlara yapılan başvurular değerlendirilir, kabul edilen süreçler dijital eşleşme akışına dönüşür.",
  },
  {
    number: "05",
    title: "Platform İçi Mesajlaşma",
    description:
      "Eşleşen taraflar İzSer üzerinden iletişime geçebilir ve görüşmelerini tek noktadan yönetebilir.",
  },
  {
    number: "06",
    title: "Anlık Bildirimler",
    description:
      "Mesaj, başvuru, belge, ilan ve hesap süreçlerindeki önemli gelişmeler kullanıcıya bildirilir.",
  },
  {
    number: "07",
    title: "Kurumsal Yönetim",
    description:
      "Kurumsal hesaplar şirket araçlarını, personellerini ve yetkilendirilmiş operasyonlarını yönetebilir.",
  },
  {
    number: "08",
    title: "Dijital Süreç Takibi",
    description:
      "İlan, belge, başvuru, mesajlaşma ve eşleşme süreçleri düzenli bir dijital iş akışı üzerinden takip edilir.",
  },
];

const screenshots = [
  {
    src: "/app/listings-market.png",
    eyebrow: "İLAN PAZARI",
    title: "İlanları keşfet",
    description:
      "Araç ve şoför ilanlarını filtrele, sırala ve ihtiyacına göre incele.",
    color: "#3B82F6",
  },
  {
    src: "/app/listing-detail.png",
    eyebrow: "İLAN DETAYI",
    title: "Detaylı bilgiye ulaş",
    description:
      "Konum, kapasite, hizmet bilgileri ve ilan detaylarını tek ekranda görüntüle.",
    color: "#8B5CF6",
  },
  {
    src: "/app/company-vehicles.png",
    eyebrow: "ARAÇ YÖNETİMİ",
    title: "Araç havuzunu yönet",
    description:
      "Şirket veya kullanıcı araçlarını, durumlarını ve temel özelliklerini yönet.",
    color: "#14B8A6",
  },
  {
    src: "/app/documents.png",
    eyebrow: "BELGE MERKEZİ",
    title: "Belgelerini güvende tut",
    description:
      "Kullanıcı ve araç belgelerini ilgili iş akışları üzerinden görüntüle ve yönet.",
    color: "#FFFFFF",
  },
  {
    src: "/app/messages.png",
    eyebrow: "MESAJLAŞMA",
    title: "Eşleşmelerinle iletişim kur",
    description:
      "Kabul edilen eşleşmeler sonrasında görüşmelerini İzSer içinden yönet.",
    color: "#3B82F6",
  },
  {
    src: "/app/profile.png",
    eyebrow: "HESAP YÖNETİMİ",
    title: "Her şey tek profilde",
    description:
      "Profil, belgeler, araçlar, şirket ve belge talebi süreçlerine tek noktadan ulaş.",
    color: "#8B5CF6",
  },
];

const workingSteps = [
  {
    number: "01",
    title: "Hesabını oluştur",
    description:
      "Şoför, araç sahibi veya işveren rolünü seçerek İzSer hesabını oluştur.",
  },
  {
    number: "02",
    title: "Bilgilerini tamamla",
    description:
      "Rolüne göre gerekli profil, belge ve araç bilgilerini sisteme ekle.",
  },
  {
    number: "03",
    title: "İlan oluştur veya keşfet",
    description:
      "İş arama, şoför arama veya araç ihtiyacına uygun ilan süreçlerini kullan.",
  },
  {
    number: "04",
    title: "Başvuru ve eşleşmeleri yönet",
    description:
      "Başvuruları değerlendir, uygun taraflarla eşleş ve sürecini takip et.",
  },
  {
    number: "05",
    title: "İletişime geç",
    description:
      "Kabul edilen eşleşmeler üzerinden platform içi mesajlaşmayı kullan.",
  },
];

const platformDoes = [
  "Şoför, araç sahibi ve işverenleri dijital ortamda buluşturur.",
  "İlan, başvuru ve eşleşme süreçleri için teknoloji altyapısı sunar.",
  "Araç ve dijital belge yönetimi süreçlerini kolaylaştırır.",
  "Platform içi iletişim ve bildirim altyapısı sağlar.",
];

const platformDoesNot = [
  "Taşıma hizmetini kendisi gerçekleştirmez.",
  "Taşıma sözleşmesinin tarafı değildir.",
  "Kullanıcı adına hareket etmez veya kullanıcıların temsilcisi değildir.",
  "Hizmet sağlayıcıların işvereni olarak hareket etmez.",
];

export default function Home() {
  return (
    <>
      <section
        id="platform"
        className="relative isolate overflow-hidden border-b border-[#1d1d1d]"
      >
        <div className="hero-grid" />

        <div className="hero-glow top-[-180px] left-[-180px]" />

        <div className="hero-glow-purple top-[140px] right-[-180px]" />

        <div className="hero-glow-teal right-[20%] bottom-[-260px]" />

        <div className="site-container relative z-10 grid min-h-[calc(100vh-var(--header-height))] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2b2b2b] bg-[#101010]/85 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] shadow-[0_0_12px_rgba(34,197,94,0.7)]" />

              <span className="text-[9px] font-extrabold tracking-[0.12em] text-[#a3a7ab] uppercase">
                Servis taşımacılığı için dijital altyapı
              </span>
            </div>

            <h1 className="text-gradient mt-7 max-w-[780px] text-[45px] leading-[0.98] font-black tracking-[-0.055em] sm:text-[60px] lg:text-[76px]">
              Servis sektörünün
              <br />
              dijital çalışma ağı.
            </h1>

            <p className="mt-7 max-w-[660px] text-[15px] leading-7 font-medium text-[#9b9fa4] sm:text-[17px] sm:leading-8">
              Şoförleri, araç sahiplerini ve işverenleri ilan,
              başvuru, araç, belge ve iletişim süreçlerinde tek
              bir dijital platformda bir araya getiriyoruz.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mobil-uygulama"
                className="button-primary"
              >
                <span>
                  Mobil Uygulamayı Keşfet
                </span>

                <span className="ml-3 text-[16px]">
                  →
                </span>
              </a>

              <a
                href="/gelecek"
                className="button-secondary"
              >
                Gelecek Özellikler
              </a>
            </div>

            <div className="mt-11 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#222222] pt-7">
              <RoleMiniLabel
                color="#3B82F6"
                label="Şoför"
              />

              <RoleMiniLabel
                color="#14B8A6"
                label="Araç Sahibi"
              />

              <RoleMiniLabel
                color="#8B5CF6"
                label="İşveren"
              />
            </div>
          </div>

          <div
            id="mobil-uygulama"
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="absolute top-[15%] left-[-2%] z-10 hidden rounded-2xl border border-[#292929] bg-[#0d0d0d]/90 px-4 py-3 shadow-2xl backdrop-blur-xl lg:block">
              <p className="text-[8px] font-black tracking-[0.12em] text-[#686c71] uppercase">
                Gerçek İzSer
              </p>

              <p className="mt-1 text-[11px] font-extrabold text-white">
                Mobil uygulama deneyimi
              </p>
            </div>

            <div className="absolute right-[-4%] bottom-[18%] z-20 hidden rounded-2xl border border-[#292929] bg-[#0d0d0d]/95 px-4 py-3 shadow-2xl backdrop-blur-xl xl:block">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />

                <span className="text-[10px] font-bold text-[#d3d5d7]">
                  Araç • İlan • Belge
                </span>
              </div>
            </div>

            <RealPhonePreview
              src="/app/home.png"
              alt="İzSer mobil uygulama ana sayfası"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="roller"
        className="section-padding border-b border-[#1d1d1d] bg-[#050505]"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="KİMLER İÇİN?"
            title="Her rol için kendi çalışma alanı."
            description="İzSer, servis taşımacılığı ekosistemindeki farklı kullanıcı tiplerine aynı ekranı dayatmak yerine rolüne uygun dijital süreçler sunar."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {roles.map((role) => (
              <article
                key={role.title}
                className="role-card relative overflow-hidden rounded-[26px] border border-[#292929] bg-[#0d0d0d] p-6 sm:p-7"
              >
                <div
                  className="absolute top-0 left-0 h-[2px] w-full opacity-90"
                  style={{
                    background:
                      `linear-gradient(90deg, ${role.color}, transparent 70%)`,
                  }}
                />

                <div
                  className="flex h-11 w-11 items-center justify-center rounded-[14px] text-[13px] font-black"
                  style={{
                    color:
                      role.color,

                    backgroundColor:
                      `${role.color}17`,

                    border:
                      `1px solid ${role.color}28`,
                  }}
                >
                  {role.title.charAt(
                    0,
                  )}
                </div>

                <p
                  className="mt-6 text-[9px] font-black tracking-[0.14em] uppercase"
                  style={{
                    color:
                      role.color,
                  }}
                >
                  {role.eyebrow}
                </p>

                <h2 className="mt-2 text-[25px] font-black tracking-[-0.035em] text-white">
                  {role.title}
                </h2>

                <p className="mt-4 min-h-[76px] text-[12px] leading-6 font-medium text-[#8d9196]">
                  {role.description}
                </p>

                <div className="mt-6 space-y-3 border-t border-[#222222] pt-5">
                  {role.items.map(
                    (item) => (
                      <div
                        key={
                          item
                        }
                        className="flex items-center gap-3"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{
                            backgroundColor:
                              role.color,
                          }}
                        />

                        <span className="text-[11px] font-semibold text-[#b5b8bb]">
                          {item}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="uygulama"
        className="section-padding relative overflow-hidden border-b border-[#1d1d1d]"
      >
        <div className="hero-glow top-[20%] left-[-320px] opacity-40" />

        <div className="hero-glow-purple right-[-320px] bottom-[10%] opacity-40" />

        <div className="site-container relative z-10">
          <SectionHeading
            eyebrow="MOBİL UYGULAMA"
            title="İzSer'i yalnızca anlatmıyoruz. Gösteriyoruz."
            description="Gerçek İzSer mobil uygulamasından alınan ekranlarla ilan, araç, belge, mesajlaşma ve hesap yönetimi deneyimini incele."
          />

          <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative">
              <div className="absolute top-[10%] left-[0%] hidden h-[380px] w-[380px] rounded-full bg-[#3b82f6]/5 blur-[90px] lg:block" />

              <RealPhonePreview
                src="/app/listings-market.png"
                alt="İzSer ilan arama ekranı"
              />
            </div>

            <div>
              <p className="text-[9px] font-black tracking-[0.17em] text-[#3b82f6] uppercase">
                İLAN VE EŞLEŞME
              </p>

              <h3 className="mt-4 max-w-[600px] text-[34px] leading-[1.03] font-black tracking-[-0.045em] text-white sm:text-[44px]">
                Aradığın fırsata
                <br />
                daha hızlı ulaş.
              </h3>

              <p className="mt-6 max-w-[590px] text-[12px] leading-7 font-medium text-[#8e9297]">
                İlan arama ekranında kullanıcılar kendilerine
                uygun araç veya şoför fırsatlarını keşfedebilir,
                ilan türüne göre filtreleme yapabilir ve detaylı
                ilan bilgilerine ulaşabilir.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <ProductPoint
                  title="Filtrele"
                  text="Konum ve ilan türüne göre sonuçları daralt."
                />

                <ProductPoint
                  title="Sırala"
                  text="İlanları ihtiyacına göre görüntüle."
                />

                <ProductPoint
                  title="Araç görselleri"
                  text="Araçlı ilanlarda gerçek araç fotoğraflarını incele."
                />

                <ProductPoint
                  title="Detaylı ilan"
                  text="Konum, kapasite ve hizmet bilgilerine ulaş."
                />
              </div>
            </div>
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="order-2 lg:order-1">
              <p className="text-[9px] font-black tracking-[0.17em] text-[#14b8a6] uppercase">
                ARAÇ YÖNETİMİ
              </p>

              <h3 className="mt-4 max-w-[620px] text-[34px] leading-[1.03] font-black tracking-[-0.045em] text-white sm:text-[44px]">
                Araç operasyonunu
                <br />
                tek merkezden yönet.
              </h3>

              <p className="mt-6 max-w-[590px] text-[12px] leading-7 font-medium text-[#8e9297]">
                Araç sahipleri ve yetkili kurumsal kullanıcılar
                araç havuzlarını, araç durumlarını, temel
                özellikleri ve araçla ilişkili belge
                süreçlerini dijital olarak yönetebilir.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <ProductPoint
                  title="Araç havuzu"
                  text="Tüm kayıtlı araçlarını tek ekranda görüntüle."
                />

                <ProductPoint
                  title="Aktif / pasif"
                  text="Araçların operasyon durumlarını takip et."
                />

                <ProductPoint
                  title="Araç bilgileri"
                  text="Model, yıl, kapasite ve teknik bilgileri yönet."
                />

                <ProductPoint
                  title="Araç belgeleri"
                  text="Ruhsat ve araç belgelerine ilgili araçtan ulaş."
                />
              </div>
            </div>

            <div className="order-1 relative lg:order-2">
              <RealPhonePreview
                src="/app/company-vehicles.png"
                alt="İzSer şirket araç havuzu"
              />
            </div>
          </div>

          <div className="mt-24 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <RealPhonePreview
                src="/app/messages.png"
                alt="İzSer mesajlar ekranı"
              />
            </div>

            <div>
              <p className="text-[9px] font-black tracking-[0.17em] text-[#8b5cf6] uppercase">
                MESAJLAŞMA VE İLETİŞİM
              </p>

              <h3 className="mt-4 max-w-[620px] text-[34px] leading-[1.03] font-black tracking-[-0.045em] text-white sm:text-[44px]">
                Eşleşmeden sonra
                <br />
                iletişim İzSer&apos;de devam eder.
              </h3>

              <p className="mt-6 max-w-[590px] text-[12px] leading-7 font-medium text-[#8e9297]">
                Kabul edilen eşleşmeler için konuşma alanı
                oluşturulur. Taraflar ilan ve eşleşme
                bağlamını kaybetmeden platform içinde
                görüşmelerini sürdürebilir.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <ProductPoint
                  title="Eşleşme bazlı"
                  text="Mesajlaşma kabul edilen süreçlerle ilişkilidir."
                />

                <ProductPoint
                  title="Anlık bildirim"
                  text="Yeni mesajlardan uygulama bildirimiyle haberdar ol."
                />

                <ProductPoint
                  title="Konuşma geçmişi"
                  text="Aktif görüşmelerini düzenli şekilde takip et."
                />

                <ProductPoint
                  title="Tek platform"
                  text="İlan ve iletişim süreçlerini aynı uygulamada yönet."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ozellikler"
        className="section-padding border-b border-[#1d1d1d] bg-[#050505]"
      >
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <div className="lg:sticky lg:top-[120px]">
                <SectionHeading
                  eyebrow="İZSER ÖZELLİKLERİ"
                  title="Sektörün günlük işlerini tek uygulamada topla."
                  description="İlan oluşturmadan araç ve belge yönetimine, başvurulardan mesajlaşmaya kadar operasyonun temel dijital adımlarını aynı platform üzerinden yönet."
                  align="left"
                />

                <div className="mt-8 overflow-hidden rounded-[22px] border border-[#292929] bg-[#0b0b0b]">
                  <div className="relative aspect-[832/1840] max-h-[530px] w-full">
                    <Image
                      src="/app/profile.png"
                      alt="İzSer profil ekranı"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map(
                (feature) => (
                  <article
                    key={
                      feature.number
                    }
                    className="feature-card rounded-[22px] border border-[#292929] bg-[#0c0c0c] p-6"
                  >
                    <span className="text-[10px] font-black tracking-[0.12em] text-[#55595d]">
                      {
                        feature.number
                      }
                    </span>

                    <h3 className="mt-7 text-[16px] font-black tracking-[-0.02em] text-white">
                      {
                        feature.title
                      }
                    </h3>

                    <p className="mt-3 text-[11px] leading-6 font-medium text-[#85898e]">
                      {
                        feature.description
                      }
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#1d1d1d]">
        <div className="site-container">
          <SectionHeading
            eyebrow="ÜRÜN TURU"
            title="İzSer'in temel ekranlarına yakından bak."
            description="Uygulamanın gerçek ekranlarından ilan, belge, araç ve profil yönetiminin nasıl göründüğünü keşfet."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {screenshots.map(
              (item) => (
                <AppScreenshotCard
                  key={
                    item.src
                  }
                  {...item}
                />
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="nasil-calisir"
        className="section-padding border-b border-[#1d1d1d] bg-[#050505]"
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="NASIL ÇALIŞIR?"
            title="İlk kayıttan eşleşmeye kadar sade bir süreç."
            description="İzSer, farklı kullanıcı rollerinin servis taşımacılığı süreçlerini anlaşılır ve kontrollü dijital adımlara dönüştürür."
          />

          <div className="mt-14 grid gap-3 lg:grid-cols-5">
            {workingSteps.map(
              (step) => (
                <article
                  key={
                    step.number
                  }
                  className="relative rounded-[22px] border border-[#292929] bg-[#0d0d0d] p-5"
                >
                  <span className="text-[10px] font-black tracking-[0.12em] text-[#55595d]">
                    {
                      step.number
                    }
                  </span>

                  <h3 className="mt-8 text-[15px] font-black tracking-[-0.025em] text-white">
                    {
                      step.title
                    }
                  </h3>

                  <p className="mt-3 text-[10.5px] leading-5 font-medium text-[#85898e]">
                    {
                      step.description
                    }
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="gelecek"
        className="section-padding relative overflow-hidden border-b border-[#1d1d1d]"
      >
        <div className="hero-glow-purple top-[-220px] right-[-220px] opacity-60" />

        <div className="hero-glow-teal bottom-[-260px] left-[-220px] opacity-70" />

        <div className="site-container relative z-10">
          <SectionHeading
            eyebrow="GELECEK ÖZELLİKLER"
            title="Mobil uygulamadan tam dijital servis ekosistemine."
            description="İzSer'in sonraki ürün aşamalarında teklif, ihale ve web operasyonlarını aynı dijital altyapının parçaları haline getirmeyi planlıyoruz."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="future-card rounded-[30px] border border-[#303030] bg-[#0d0d0d] p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-[#3b82f6]/25 bg-[#3b82f6]/10 px-3 py-1.5 text-[9px] font-black tracking-[0.1em] text-[#60a5fa] uppercase">
                  Gelecek Özellik
                </span>

                <span className="text-[11px] font-black text-[#474b4f]">
                  01
                </span>
              </div>

              <h3 className="mt-10 max-w-[500px] text-[27px] leading-[1.08] font-black tracking-[-0.045em] text-white sm:text-[34px]">
                Dijital İhale &
                <br />
                Teklif Toplama Sistemi
              </h3>

              <p className="mt-6 max-w-[570px] text-[12px] leading-6 font-medium text-[#92969b]">
                Kurumsal kullanıcıların servis ihtiyaçlarını
                dijital olarak tanımlayabileceği, uygun hizmet
                sağlayıcıların teklif sunabileceği ve tekliflerin
                sistem üzerinden karşılaştırılıp
                değerlendirilebileceği yeni nesil iş akışı.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <FutureItem text="Güzergâh ve servis ihtiyacı" />
                <FutureItem text="Araç tipi ve araç sayısı" />
                <FutureItem text="Çalışma günleri ve başlangıç" />
                <FutureItem text="Dijital fiyat teklifleri" />
                <FutureItem text="Teklif karşılaştırma" />
                <FutureItem text="Süreç ve sonuç takibi" />
              </div>

              <div className="mt-9 border-t border-[#262626] pt-6">
                <p className="text-[9px] leading-5 font-semibold text-[#65696e]">
                  Bu özellik İzSer ürün yol haritasındadır.
                  Mevcut mobil uygulamada aktif bir ihale hizmeti
                  olarak sunulmamaktadır.
                </p>
              </div>
            </article>

            <article className="future-card rounded-[30px] border border-[#303030] bg-[#0d0d0d] p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/10 px-3 py-1.5 text-[9px] font-black tracking-[0.1em] text-[#a78bfa] uppercase">
                  Gelecek Özellik
                </span>

                <span className="text-[11px] font-black text-[#474b4f]">
                  02
                </span>
              </div>

              <h3 className="mt-10 max-w-[500px] text-[27px] leading-[1.08] font-black tracking-[-0.045em] text-white sm:text-[34px]">
                İzSer Web
                <br />
                Operasyon Platformu
              </h3>

              <p className="mt-6 max-w-[570px] text-[12px] leading-6 font-medium text-[#92969b]">
                Mobil uygulamadaki temel İzSer işlemlerinin
                ilerleyen aşamalarda masaüstü ve mobil tarayıcı
                üzerinden de yönetilebilmesi planlanıyor.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <FutureItem text="İlan yönetimi" />
                <FutureItem text="Araç yönetimi" />
                <FutureItem text="Belge süreçleri" />
                <FutureItem text="Başvuru yönetimi" />
                <FutureItem text="Mesajlaşma" />
                <FutureItem text="İhale ve teklifler" />
                <FutureItem text="Kurumsal ekipler" />
                <FutureItem text="Operasyon geçmişi" />
              </div>

              <div className="mt-9 border-t border-[#262626] pt-6">
                <p className="text-[9px] leading-5 font-semibold text-[#65696e]">
                  Mobil uygulamada yapılabilen temel işlemlerin
                  önemli bir bölümünün gelecekte İzSer Web
                  üzerinden de kullanılabilmesi hedeflenmektedir.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#1d1d1d] bg-[#050505]">
        <div className="site-container">
          <SectionHeading
            eyebrow="PLATFORMUN ROLÜ"
            title="Taşımayı değil, dijital süreci kolaylaştırıyoruz."
            description="İzSer'in rolü taşıma hizmeti vermek değil; sektör paydaşlarının birbirlerini bulmasını, iletişim kurmasını ve dijital süreçlerini daha düzenli yönetmesini sağlayan teknoloji altyapısını sunmaktır."
          />

          <div className="relative mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[26px] border border-[#26372d] bg-[#0c120e] p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22c55e]/10 text-[12px] font-black text-[#4ade80]">
                  ✓
                </span>

                <h3 className="text-[18px] font-black text-white">
                  İZSER ne yapar?
                </h3>
              </div>

              <div className="mt-7 space-y-4">
                {platformDoes.map(
                  (item) => (
                    <PlatformItem
                      key={
                        item
                      }
                      text={
                        item
                      }
                      positive
                    />
                  ),
                )}
              </div>
            </div>

            <div className="rounded-[26px] border border-[#352828] bg-[#120c0c] p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ef4444]/10 text-[12px] font-black text-[#f87171]">
                  ×
                </span>

                <h3 className="text-[18px] font-black text-white">
                  İZSER ne yapmaz?
                </h3>
              </div>

              <div className="mt-7 space-y-4">
                {platformDoesNot.map(
                  (item) => (
                    <PlatformItem
                      key={
                        item
                      }
                      text={
                        item
                      }
                      positive={
                        false
                      }
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[#292929] bg-[#0b0b0b] px-5 py-4">
            <p className="text-[10px] leading-5 font-medium text-[#74787d]">
              Hizmetin kapsamı, bedeli, kalitesi, zamanı ve
              taraflar arasındaki hukuki ilişki ilgili hizmet
              alan ile hizmet sağlayıcı arasındadır. Ayrıntılı
              hükümler İzSer Kullanım Koşulları ve Üyelik
              Sözleşmesi&apos;nde yer alır.
            </p>
          </div>
        </div>
      </section>

      <section
        id="iletisim"
        className="section-padding"
      >
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[34px] border border-[#303030] bg-[#0d0d0d] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="hero-glow top-[-320px] right-[-260px] opacity-50" />

            <div className="relative z-10 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[9px] font-black tracking-[0.16em] text-[#73777c] uppercase">
                  İLETİŞİM
                </p>

                <h2 className="mt-4 max-w-[620px] text-[34px] leading-[1.02] font-black tracking-[-0.045em] text-white sm:text-[46px]">
                  İzSer hakkında
                  <br />
                  bizimle iletişime geç.
                </h2>

                <p className="mt-5 max-w-[570px] text-[12px] leading-6 font-medium text-[#8b8f94]">
                  Platform, iş birlikleri ve ürün hakkında bilgi
                  almak için doğrudan bize ulaşabilir veya sosyal
                  medya hesaplarımızı takip edebilirsin.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <a
                    href={siteContact.social.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="İZSER Instagram hesabı"
                    className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#303030] bg-[#101010] text-[#babdc1] transition-all hover:-translate-y-1 hover:border-[#505050] hover:bg-[#171717] hover:text-white"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>

                  <a
                    href={siteContact.social.facebook.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="İZSER Facebook hesabı"
                    className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#303030] bg-[#101010] text-[#babdc1] transition-all hover:-translate-y-1 hover:border-[#505050] hover:bg-[#171717] hover:text-white"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:grid-cols-1">
                <a
                  href={siteContact.phone.href}
                  className="contact-link min-w-[230px] rounded-2xl border border-[#2c2c2c] bg-[#101010] px-5 py-4"
                >
                  <p className="text-[8px] font-black tracking-[0.12em] text-[#61656a] uppercase">
                    Telefon
                  </p>

                  <p className="mt-1 text-[12px] font-extrabold text-white">
                    {siteContact.phone.display}
                  </p>
                </a>

                <a
                  href={siteContact.email.href}
                  className="contact-link min-w-[230px] rounded-2xl border border-[#2c2c2c] bg-[#101010] px-5 py-4"
                >
                  <p className="text-[8px] font-black tracking-[0.12em] text-[#61656a] uppercase">
                    E-posta
                  </p>

                  <p className="mt-1 text-[12px] font-extrabold text-white">
                    {siteContact.email.display}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function RealPhonePreview({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[330px]">
      <div className="absolute inset-x-[8%] bottom-[-20px] h-[80px] rounded-full bg-white/10 blur-[45px]" />

      <div className="relative rounded-[50px] border border-[#3a3a3a] bg-[linear-gradient(145deg,#363636,#070707_15%,#000_70%,#333)] p-[9px] shadow-[0_45px_100px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)]">
        <div className="relative aspect-[832/1840] overflow-hidden rounded-[41px] border border-[#252525] bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 88vw, 330px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function AppScreenshotCard({
  src,
  eyebrow,
  title,
  description,
  color,
}: {
  src: string;
  eyebrow: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[26px] border border-[#292929] bg-[#0d0d0d] transition duration-300 hover:-translate-y-1 hover:border-[#404040]">
      <div className="relative h-[440px] overflow-hidden border-b border-[#292929] bg-[#080808]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
        />

        <div className="absolute inset-x-0 bottom-0 h-[110px] bg-gradient-to-t from-[#0d0d0d] to-transparent" />
      </div>

      <div className="p-6">
        <p
          className="text-[8.5px] font-black tracking-[0.14em] uppercase"
          style={{
            color,
          }}
        >
          {eyebrow}
        </p>

        <h3 className="mt-3 text-[17px] font-black tracking-[-0.025em] text-white">
          {title}
        </h3>

        <p className="mt-3 text-[10.5px] leading-5 font-medium text-[#84888d]">
          {description}
        </p>
      </div>
    </article>
  );
}

function ProductPoint({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[16px] border border-[#282828] bg-[#0d0d0d] p-4">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />

        <p className="text-[11px] font-black text-white">
          {title}
        </p>
      </div>

      <p className="mt-2 text-[9.5px] leading-5 font-medium text-[#777b80]">
        {text}
      </p>
    </div>
  );
}

function RoleMiniLabel({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="h-2 w-2 rounded-full"
        style={{
          backgroundColor:
            color,

          boxShadow:
            `0 0 14px ${color}70`,
        }}
      />

      <span className="text-[10px] font-extrabold text-[#8e9297]">
        {label}
      </span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  const centered =
    align === "center";

  return (
    <div
      className={
        centered
          ? "mx-auto max-w-[760px] text-center"
          : "max-w-[620px]"
      }
    >
      <p className="text-[9px] font-black tracking-[0.17em] text-[#686c71] uppercase">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-[32px] leading-[1.05] font-black tracking-[-0.045em] text-white sm:text-[42px]">
        {title}
      </h2>

      <p className="mt-5 text-[12px] leading-6 font-medium text-[#898d92] sm:text-[13px] sm:leading-7">
        {description}
      </p>
    </div>
  );
}

function FutureItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#272727] bg-[#101010] px-4 py-3">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a8e93]" />

      <span className="text-[10px] font-semibold text-[#aeb1b5]">
        {text}
      </span>
    </div>
  );
}

function PlatformItem({
  text,
  positive,
}: {
  text: string;
  positive: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={
          positive
            ? "mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#22c55e]"
            : "mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef4444]"
        }
      />

      <p className="text-[11px] leading-6 font-medium text-[#a2a6aa]">
        {text}
      </p>
    </div>
  );
}