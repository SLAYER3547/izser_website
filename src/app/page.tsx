const roles = [
  {
    title: "Şoför",
    eyebrow: "DRIVER",
    color: "#3B82F6",
    description:
      "Servis sektöründeki iş fırsatlarını keşfet, iş arama ilanını oluştur ve başvurularını tek noktadan yönet.",
    items: [
      "İş ilanlarını keşfet",
      "İş arama ilanı oluştur",
      "Başvuru ve eşleşmeleri yönet",
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
      "Kullanıcı ve araç belgeleri yüklenebilir, durumları takip edilebilir ve gerekli süreçlerde kontrollü şekilde paylaşılabilir.",
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
      "Eşleşen taraflar İzSer üzerinden iletişime geçebilir ve konuşmalarını tek noktadan yönetebilir.",
  },
  {
    number: "06",
    title: "Anlık Bildirimler",
    description:
      "Mesaj, başvuru, belge ve hesap süreçlerindeki önemli gelişmeler kullanıcıya bildirilir.",
  },
  {
    number: "07",
    title: "Kurumsal Yönetim",
    description:
      "Kurumsal hesaplar ekip üyelerini ve yetkilendirilmiş operasyonlarını daha düzenli şekilde yönetebilir.",
  },
  {
    number: "08",
    title: "Güvenli Süreç Takibi",
    description:
      "İlan, belge, başvuru, mesajlaşma ve eşleşme geçmişleri dijital süreç mantığıyla takip edilir.",
  },
];

const platformDoes = [
  "Şoför, araç sahibi ve işverenleri dijital ortamda buluşturur.",
  "İlan, başvuru ve eşleşme süreçleri için teknoloji altyapısı sunar.",
  "Dijital belge ve araç yönetimi süreçlerini kolaylaştırır.",
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

        <div className="site-container relative z-10 grid min-h-[calc(100vh-var(--header-height))] items-center gap-16 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
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
              Şoförleri, araç sahiplerini ve işverenleri
              ilan, başvuru, araç, belge ve iletişim
              süreçlerinde tek bir dijital platformda bir
              araya getiriyoruz.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mobil-uygulama"
                className="inline-flex min-h-13 items-center justify-center rounded-2xl bg-white px-6 text-[12px] font-black text-black transition-transform duration-200 hover:-translate-y-0.5"
              >
                Mobil Uygulamayı Keşfet
                <span className="ml-3 text-[16px]">→</span>
              </a>

              <a
                href="#gelecek"
                className="inline-flex min-h-13 items-center justify-center rounded-2xl border border-[#343434] bg-[#101010] px-6 text-[12px] font-extrabold text-[#d5d7da] transition-colors duration-200 hover:border-[#505050] hover:text-white"
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
            <div className="absolute top-[12%] left-[6%] hidden rounded-2xl border border-[#252525] bg-[#0d0d0d]/90 p-4 shadow-2xl backdrop-blur lg:block">
              <p className="text-[8px] font-black tracking-[0.1em] text-[#6d7175] uppercase">
                Dijital Süreç
              </p>

              <p className="mt-1 text-[11px] font-bold text-white">
                İlan → Başvuru → Eşleşme
              </p>
            </div>

            <div className="absolute right-[-2%] bottom-[18%] z-10 hidden rounded-2xl border border-[#252525] bg-[#0d0d0d]/90 p-4 shadow-2xl backdrop-blur xl:block">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#22c55e]" />

                <span className="text-[10px] font-bold text-[#d3d5d7]">
                  Belgeler takipte
                </span>
              </div>
            </div>

            <PhonePreview />
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
            description="İzSer, servis taşımacılığı ekosistemindeki farklı kullanıcı tiplerine aynı ekranı dayatmak yerine, rolüne uygun dijital süreçler sunar."
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
                    background: `linear-gradient(90deg, ${role.color}, transparent 70%)`,
                  }}
                />

                <div
                  className="flex h-11 w-11 items-center justify-center rounded-[14px] text-[13px] font-black"
                  style={{
                    color: role.color,
                    backgroundColor: `${role.color}17`,
                    border: `1px solid ${role.color}28`,
                  }}
                >
                  {role.title.charAt(0)}
                </div>

                <p
                  className="mt-6 text-[9px] font-black tracking-[0.14em] uppercase"
                  style={{
                    color: role.color,
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
                  {role.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          backgroundColor: role.color,
                        }}
                      />

                      <span className="text-[11px] font-semibold text-[#b5b8bb]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ozellikler"
        className="section-padding border-b border-[#1d1d1d]"
      >
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <div className="lg:sticky lg:top-[120px]">
                <SectionHeading
                  eyebrow="İZSER MOBİL"
                  title="Sektörün günlük işlerini tek uygulamada topla."
                  description="İlan oluşturmadan araç ve belge yönetimine, başvurulardan mesajlaşmaya kadar operasyonun temel dijital adımlarını aynı platform üzerinden yönet."
                  align="left"
                />

                <div className="mt-8 rounded-2xl border border-[#282828] bg-[#0b0b0b] p-5">
                  <span className="text-[9px] font-black tracking-[0.12em] text-[#74787d] uppercase">
                    Mobil Uygulama
                  </span>

                  <p className="mt-2 text-[13px] leading-6 font-bold text-white">
                    Android ve iOS deneyimi için geliştirilen
                    rol bazlı İzSer mobil platformu.
                  </p>

                  <p className="mt-3 text-[10px] leading-5 font-medium text-[#777b80]">
                    Gerçek uygulama ekranları sonraki
                    aşamada bu alana telefon mockup&apos;ları
                    olarak yerleştirilecek.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <article
                  key={feature.number}
                  className="feature-card rounded-[22px] border border-[#292929] bg-[#0c0c0c] p-6"
                >
                  <span className="text-[10px] font-black tracking-[0.12em] text-[#55595d]">
                    {feature.number}
                  </span>

                  <h3 className="mt-7 text-[16px] font-black tracking-[-0.02em] text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-6 font-medium text-[#85898e]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="gelecek"
        className="section-padding relative overflow-hidden border-b border-[#1d1d1d] bg-[#050505]"
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
                  Yakında
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
                dijital olarak tanımlayabileceği; uygun araç
                sahiplerinin teklif sunabileceği ve tekliflerin
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
                  Bu özellik geliştirme yol haritasındadır.
                  Mevcut mobil uygulamada aktif bir ihale
                  hizmeti olarak sunulmamaktadır.
                </p>
              </div>
            </article>

            <article className="future-card rounded-[30px] border border-[#303030] bg-[#0d0d0d] p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/10 px-3 py-1.5 text-[9px] font-black tracking-[0.1em] text-[#a78bfa] uppercase">
                  Yol Haritası
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
                gelecekte masaüstü ve mobil tarayıcı
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
                  Tanıtım sitesi, ürün geliştirme aşamalarında
                  İzSer&apos;in web tabanlı kullanıcı
                  platformuna açılan kapısı olacak.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-[#1d1d1d]">
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
                {platformDoes.map((item) => (
                  <PlatformItem
                    key={item}
                    text={item}
                    positive
                  />
                ))}
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
                {platformDoesNot.map((item) => (
                  <PlatformItem
                    key={item}
                    text={item}
                    positive={false}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[#292929] bg-[#0b0b0b] px-5 py-4">
            <p className="text-[10px] leading-5 font-medium text-[#74787d]">
              Hizmetin kapsamı, bedeli, kalitesi, zamanı ve
              taraflar arasındaki hukuki ilişki; ilgili
              hizmet alan ile hizmet sağlayıcı arasındadır.
              Ayrıntılı hükümler İzSer Kullanım Koşulları ve
              Üyelik Sözleşmesi&apos;nde yer alır.
            </p>
          </div>
        </div>
      </section>

      <section
        id="iletisim"
        className="section-padding bg-[#050505]"
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
                  Platform, iş birlikleri ve ürün hakkında
                  bilgi almak için doğrudan bize
                  ulaşabilirsin.
                </p>
              </div>

              <div className="grid w-full gap-3 sm:grid-cols-3 lg:w-auto lg:grid-cols-1">
                <a
                  href="tel:+905331341435"
                  className="contact-link min-w-[210px] rounded-2xl border border-[#2c2c2c] bg-[#101010] px-5 py-4"
                >
                  <p className="text-[8px] font-black tracking-[0.12em] text-[#61656a] uppercase">
                    Telefon
                  </p>

                  <p className="mt-1 text-[12px] font-extrabold text-white">
                    0533 134 14 35
                  </p>
                </a>

                <a
                  href="tel:+905332501435"
                  className="contact-link min-w-[210px] rounded-2xl border border-[#2c2c2c] bg-[#101010] px-5 py-4"
                >
                  <p className="text-[8px] font-black tracking-[0.12em] text-[#61656a] uppercase">
                    Telefon
                  </p>

                  <p className="mt-1 text-[12px] font-extrabold text-white">
                    0533 250 14 35
                  </p>
                </a>

                <a
                  href="mailto:info@izser.com"
                  className="contact-link min-w-[210px] rounded-2xl border border-[#2c2c2c] bg-[#101010] px-5 py-4"
                >
                  <p className="text-[8px] font-black tracking-[0.12em] text-[#61656a] uppercase">
                    E-posta
                  </p>

                  <p className="mt-1 text-[12px] font-extrabold text-white">
                    info@izser.com
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

function PhonePreview() {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <div className="phone-island" />

        <div className="px-5 pt-14">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-black tracking-[0.12em] text-[#63676b] uppercase">
                İZSER
              </p>

              <p className="mt-1 text-[20px] font-black tracking-[-0.035em] text-white">
                Ana Sayfa
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#303030] bg-[#121212]">
              <span className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>

          <div className="mt-6 rounded-[21px] border border-[#2b2b2b] bg-[#111111] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[13px] bg-[#3b82f6]/10 text-[12px] font-black text-[#60a5fa]">
                Ş
              </div>

              <div>
                <p className="text-[9px] font-bold text-[#71757a]">
                  Şoför hesabı
                </p>

                <p className="mt-1 text-[11px] font-black text-white">
                  İş fırsatlarını keşfet
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <PhoneStat
              value="4"
              label="İlan"
            />

            <PhoneStat
              value="2"
              label="Başvuru"
            />

            <PhoneStat
              value="1"
              label="Mesaj"
            />
          </div>

          <p className="mt-6 text-[10px] font-black text-white">
            Hızlı İşlemler
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <PhoneAction
              title="İlan Ara"
              color="#3B82F6"
            />

            <PhoneAction
              title="İlan Ver"
              color="#FFFFFF"
            />

            <PhoneAction
              title="Belgelerim"
              color="#14B8A6"
            />

            <PhoneAction
              title="Mesajlar"
              color="#8B5CF6"
            />
          </div>

          <div className="mt-5 rounded-[18px] border border-[#292929] bg-[#101010] p-4">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-black text-white">
                Son Gelişmeler
              </p>

              <span className="text-[8px] font-bold text-[#65696d]">
                Şimdi
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#22c55e]" />

              <p className="text-[9px] leading-4 font-semibold text-[#aeb1b4]">
                İlan ve başvuru süreçlerin tek
                ekranda.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-4 bottom-4 left-4">
          <div className="grid grid-cols-5 rounded-[18px] border border-[#292929] bg-[#0c0c0c] px-2 py-3">
            {[
              "Ana",
              "İlanlar",
              "+",
              "Mesaj",
              "Profil",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center"
              >
                <span
                  className={
                    item === "+"
                      ? "flex h-8 w-8 items-center justify-center rounded-full bg-white text-[15px] font-black text-black"
                      : "text-[7px] font-bold text-[#767a7e]"
                  }
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[14px] border border-[#292929] bg-[#0e0e0e] px-2 py-3 text-center">
      <p className="text-[15px] font-black text-white">
        {value}
      </p>

      <p className="mt-1 text-[7px] font-bold text-[#64686c]">
        {label}
      </p>
    </div>
  );
}

function PhoneAction({
  title,
  color,
}: {
  title: string;
  color: string;
}) {
  return (
    <div className="rounded-[15px] border border-[#292929] bg-[#0e0e0e] p-3">
      <span
        className="block h-2 w-2 rounded-full"
        style={{
          backgroundColor: color,
        }}
      />

      <p className="mt-4 text-[9px] font-extrabold text-[#d4d6d8]">
        {title}
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
          backgroundColor: color,
          boxShadow: `0 0 14px ${color}70`,
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
  const centered = align === "center";

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