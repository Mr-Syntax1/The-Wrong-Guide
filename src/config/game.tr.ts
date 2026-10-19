import type { GameLocaleContent } from "./game.en";

export const gameLocaleContent: GameLocaleContent = {
  shortDescription:
    "Bir baba. Bir telefon görüşmesi. Onu kurtarmak için hiç var olmamış bir rehber. Yanlış güven ve talimatlara uymanın bedeli üzerine kurulu, hikâye odaklı atmosferik bir korku oyunu.",

  longDescription: `Sen Mohsen'sin. Bir baba. Bir doğa kaşifi. 9 yaşındaki kızını dünyadaki her şeyden çok seven bir adam.

Bir gece, eşiyle tartıştıktan sonra kafasını dağıtmak için arabayla dışarı çıkar. Benzini biter. Issız bir çöl otoyolunda yalnız bir benzin istasyonunda durur. Depoyu doldururken telefonu çalar.

Hattın diğer ucundaki ses tanıdık. Fazla tanıdık. Bu, eşinin yıllar önce uğruna onu terk ettiği adam — karanlık bir geçmişi olan, bir zamanlar bambaşka biri olmuş bir adam.

"Eğer iyi bir babaysan," der ses, "gel kızını kurtar."

Mohsen aceleyle gitmek ister. Ama arabasına ulaşamadan biri ona arkadan vurur.

Terk edilmiş bir hastanede uyanır. Işıklar titrer. Koridorlar nefes alır. Ve bu çürüyen yerin bir yerinde, kızı onu beklemektedir.

Rehber izliyor. Rehber yol gösteriyor. Ama rehber en başından beri yanlıştı.`,

  genre: "Psikolojik Korku / Anlatı Keşfi / Hikâye Odaklı",

  releaseStatus: "Yakında",

  languages: ["İngilizce", "Farsça"],

  features: [
    {
      id: "story-driven",
      title: "HİKÂYE ODAKLI",
      description:
        "Kızını arayan bir baba hakkında derinden kişisel bir anlatı. Her ipucu, her not, her fısıltı seni gerçeğe yaklaştırır — ve güvenlikten uzaklaştırır.",
    },
    {
      id: "single-player",
      title: "TEK OYUNCULU",
      description:
        "Yalnız oynanmak üzere tasarlanmış, odaklı ve samimi bir korku deneyimi. Co-op yok, çok oyunculu yok — sadece sen, hastane ve sana yol gösteren ses.",
    },
    {
      id: "offline",
      title: "ÇEVRİMDIŞI",
      description:
        "İnternet bağlantısı gerekmez. DRM veya sürekli çevrimiçi zorunluluğu olmadan, her yerde ve her zaman oyna.",
    },
    {
      id: "exploration",
      title: "KEŞİF",
      description:
        "Terk edilmiş hastane kanatlarında, unutulmuş bodrumlarda ve imkânsız koridorlarda ilerle. Dünya dikkatli gözlemi ödüllendirir — ama kör güveni cezalandırır.",
    },
    {
      id: "puzzles",
      title: "BULMACALAR",
      description:
        "Dikkat et. Hastanenin kuralları var. Rehberin talimatları var. Ama bazı kapılar dışarıdan kilitli — ve bazı işaretler, gitmeni istemeyen biri tarafından yazıldı.",
    },
    {
      id: "atmospheric-horror",
      title: "ATMOSFERİK KORKU",
      description:
        "Ortam, ses ve belirsizlikle gerilim inşa eder. Ani korkutmalar yok — sadece bu yerden asla çıkamayabileceğini fark eden bir babanın yavaş, sinsi dehşeti.",
    },
  ],

  locations: [
    {
      id: "the-path",
      name: "Patika",
      description:
        "Ölü bir ormanda dar bir iz. Rehber üzerinde kalmanı söylüyor. Ama ağaçlar içe doğru eğiliyor — ve ileride bir yerde bir çocuk ağlıyor.",
    },
    {
      id: "the-cabin",
      name: "Kulübe",
      description:
        "Açıklıkta çürüyen bir yapı. Mohsen bu yeri hatırlıyor — ama bu hayattan değil. Kapı içe açılıyor. Kilit dışarıda.",
    },
    {
      id: "the-tower",
      name: "Kule",
      description:
        "Sisin içinden yükselen bir monolit. Rehber daha iyi bir manzara için tırmanmanı söylüyor. Ama Mohsen ne kadar yükselirse o kadar net görüyor: kızı tepede değil.",
    },
    {
      id: "the-subterrain",
      name: "Yeraltı",
      description:
        "Her şeyin altındaki tüneller. Rehber bunun kestirme olduğunu söylüyor. Ama duvarlar nefes alıyor, harita yalan söylüyor ve karanlıkta bir yerde bir adam bekliyor.",
    },
  ],

  coreDesign: {
    label: "ÇEKİRDEK TASARIM",
    heading: "El Tutma Yok. Sahte Güvenlik Yok.",
    paragraph1:
      "The Wrong Guide zekâna saygı duyar. Hedef işaretleri yok, görev günlükleri yok, vurgulanmış etkileşim öğeleri yok. Dünya çevresel ipuçları, ses ve rehberin kendisiyle iletişim kurar — ki bu güvenilir olabilir de olmayabilir de.",
    paragraph2:
      "Her mekanik anlatıya hizmet eder. Bulmacalar gözlemden doğar. Korku belirsizlikten doğar. Rehber şu sorudan doğar: seni hayatta tutan tek şey, seni sonuna götüren şey olabilirse ne olur?",
  },

  moods: {
    oppressive: {
      label: "BASKICI",
      description: "Ağır atmosfer, sürekli baskı, izlenme hissi",
    },
    uncanny: {
      label: "TEKİNSİZ",
      description: "Tanıdık ama derinden yanlış, ince bozulmalar",
    },
    vertigo: {
      label: "BAŞ DÖNDÜRÜCÜ",
      description: "Yön kaybettiren dikeylik, mekânsal zeminin kaybı",
    },
    claustrophobic: {
      label: "KLASTROFOBİK",
      description: "Kapalı alanlar, üzerine kapanan duvarlar, sınırlı kaçış",
    },
  },

  steamFeatures: [
    { label: "Tek Oyunculu", description: "Odaklı solo deneyim" },
    { label: "Çevrimdışı Oynama", description: "İnternet gerekmez" },
    { label: "Steam Deck Onaylı", description: "El cihazı için optimize" },
    { label: "DRM Yok", description: "Her yerde, her zaman oyna" },
    { label: "Bulut Kayıtları", description: "İlerlemen seni takip eder" },
    { label: "Tam Kontrolcü Desteği", description: "Kendi tarzında oyna" },
  ],

  news: [
//     {
//       id: "steam-page-live",
//       title: "Steam Sayfası Yayında",
//       excerpt:
//         "The Wrong Guide resmen Steam'e geldi. Rehber erişilebilir olduğunda haber almak için istek listene ekle.",
//       content: `The Wrong Guide resmen Steam'e geldi. Rehber erişilebilir olduğunda haber almak için istek listene ekle.

// The Wrong Guide'ın resmi Steam mağaza sayfasının yayında olduğunu duyurmaktan heyecan duyuyoruz. Bu, geliştirme yolculuğumuzda büyük bir kilometre taşı.

// Steam sayfasında bulacakların:
// - Resmi oyun açıklaması ve özellikler
// - Sistem gereksinimleri (minimum ve önerilen)
// - Oyunun atmosferik ortamlarını gösteren ekran görüntüleri
// - Resmi fragman
// - Oyun çıkınca haber almak için istek listesi düğmesi

// Zekâna saygı duyan ve dikkatli gözlemi ödüllendiren atmosferik bir korku deneyimi yaratmak için çok çalıştık. Steam sayfası sadece başlangıç — önümüzdeki aylarda daha fazla geliştirme güncellemesi, kamera arkası içerik ve oynanış görüntüsü paylaşacağız.

// The Wrong Guide'ı bugün istek listene ekle, rehber erişilebilir olduğu an haberin olsun.`,
//       category: "Announcement",
//     },
    {
      id: "first-trailer",
      title: "İlk Fragman Yayınlandı",
      excerpt:
        "The Wrong Guide'ın resmi tanıtım fragmanını izle. Gördüklerine güvenebilir misin diye soran iki dakikalık atmosferik korku.",
      content: `The Wrong Guide'ın resmi tanıtım fragmanını izle. Gördüklerine güvenebilir misin diye soran iki dakikalık atmosferik korku.

İlk fragmanımız The Wrong Guide'ın atmosferik dünyasını gösteriyor — takip ettiğin rehberin göründüğü gibi olmayabileceği bir yer. Fragmanda şunlar var:

- Patika, Kulübe, Kule ve Yeraltı'ndan sinematik görüntüler
- Rehberin gizemli talimatlarına bakışlar
- Oyunun kendine özgü görsel tarzı ve atmosferik ışıklandırması
- Çevresel bulmacalara ve anlatı gizemlerine ipuçları

Fragman, gizemlerinden hiçbirini bozmadan sana oyunun atmosferinden bir tat vermek için hazırlandı. Deneyime sinen belirsizlik ve dehşet hissini yakalamak istedik.

Şimdi izle ve kendin karar ver: rehbere güvenebilir misin?`,
      category: "Trailer",
    },
    {
      id: "devlog-1",
      title: "Geliştirici Günlüğü #1: Baba, Rehber ve Yalan",
      excerpt:
        "Çekirdek tasarım felsefesine kamera arkası bakış: oyuncunun tek rehberlik kaynağı en büyük tehdidine dönüştüğünde ne olur?",
      content: `Çekirdek tasarım felsefesine kamera arkası bakış: oyuncunun tek rehberlik kaynağı en büyük tehdidine dönüştüğünde ne olur?

Bu ilk geliştirici günlüğünde The Wrong Guide'ın arkasındaki çekirdek konseptin perdesini aralıyoruz.

Fikir basit bir soruyla başladı: bir korku oyununda seni hayatta tutan tek şey, aynı zamanda seni felakete sürükleyen şey olsaydı ne olurdu? Geleneksel korku oyunları net hedefler, net yollar, net düşmanlar verir. Ama sana yardım için tasarlanmış sistemin ta kendisi — hedef işaretleri, rehber sesi, yol işaretleri — özünde güvenilmez olsaydı?

Bu, The Wrong Guide tasarımının merkezi direği oldu. Her mekanik bu temaya hizmet ediyor:
- Rehberin talimatları yardımsever görünür ama seni yanlış yöne götürebilir
- Çevresel işaretler birbiriyle çelişir
- "İstenen" yoldan saptığında ses ipuçları ince ince değişir
- Harita var olmayan odalar gösterir

Bu konsept üzerinde kapsamlı şekilde çalıştık. İlk prototiplerde rehber açık bir düşmandı, ama belirsizliğin çok daha tedirgin edici olduğunu gördük. Oyuncu, rehberin bozuk mu, kötü niyetli mi olduğundan yoksa sadece yanlış mı yorumladığından asla tam emin olmamalı.

Bu felsefe oyunun her alanına uzanıyor — seviye tasarımı, ses, arayüz, anlatı. Sonuç, ani korkutmalarla değil, oyunlarda güvenmeye şartlandığın şeye güvenemeyeceğini yavaş yavaş fark etmenle derine işleyen bir deneyim.

Çevresel hikâye anlatımı, ses tasarımı ve güvenilmez bir rehber sistemi kurmanın teknik zorlukları üzerine daha fazla günlük yakında geliyor.`,
      category: "Development",
    },
    {
      id: "publisher-announcement",
      title: "Yayıncı Duyuruldu",
      excerpt:
        "The Wrong Guide'ın Steam'de küresel çıkışı için Sourena Games ile ortaklığımızı duyurmaktan gurur duyuyoruz.",
      content: `The Wrong Guide'ın Steam'de küresel çıkışı için Sourena Games ile ortaklığımızı duyurmaktan gurur duyuyoruz.

Aylar süren doğru ortak arayışından sonra vizyonumuzu paylaşan bir yayıncı bulduk. Sourena Games'in atmosferik, anlatı odaklı bağımsız oyunlarda kanıtlanmış bir geçmişi var ve kolayca kategorize edilemeyen bir oyunu pazarlamanın benzersiz zorluklarını anlıyorlar.

Bu ortaklık şu anlama geliyor:
- Küresel Steam dağıtımı ve bölgesel fiyatlandırma
- İstek listesi kampanyası ve çıkış için pazarlama desteği
- Birden çok dil için QA ve yerelleştirme desteği
- Steam Deck doğrulama yardımı
- Çıkış sonrası destek ve güncelleme hattı

Oyunun sanatsal vizyonuna saygı duyarken en geniş kitleye ulaşmamıza yardım eden bir ekiple çalışmaktan heyecanlıyız. The Wrong Guide kendi şartlarında deneyimlenmeyi talep eden bir oyun ve Sourena Games bunu anlıyor.

Çıkış takvimi ve pazarlama planları hakkında daha fazla detay önümüzdeki aylarda paylaşılacak. Bu arada geliştirme tam hız devam ediyor — içerik üretiminin son aşamalarındayız ve cilalama ile optimizasyona geçiyoruz.

Sabrin ve desteğin için teşekkürler. Rehber neredeyse hazır.`,
      category: "Business",
    },
  ],

  categoryLabels: {
    All: "Tümü",
    Announcement: "Duyuru",
    Trailer: "Fragman",
    Development: "Geliştirme",
    Business: "Ticari",
  },

  faq: [
    {
      question: "Oyun hangi platformlarda olacak?",
      answer:
        "Steam (Windows). Steam Deck doğrulaması planlanıyor. Konsol sürümleri [DUYURULACAK].",
    },
    {
      question: "Fiyatı ne kadar olacak?",
      answer: "7,99 USD. Steam'de bölgesel fiyatlandırma uygulanır.",
    },
    {
      question: "Ne zaman çıkacak?",
      answer: "2027. Rehber hazır olduğunda net tarih duyurulacak.",
    },
    {
      question: "Hangi diller destekleniyor?",
      answer:
        "Çıkışta İngilizce ve Farsça. Çıkış sonrası ek yerelleştirmeler planlanıyor.",
    },
    {
      question: "Oyun çok oyunculu mu?",
      answer:
        "Hayır. The Wrong Guide tek oyunculu, çevrimdışı bir deneyim. Rehberi yalnız takip ediyorsun.",
    },
    {
      question: "Oyun ne kadar sürüyor?",
      answer:
        "Ana hikâye yaklaşık 4-6 saat. Rehber tam sayıyı biliyor. Söylemiyor.",
    },
    {
      question: "Savaş var mı?",
      answer:
        "Hayır. Oyun keşif, çevresel bulmacalar ve atmosfere odaklanıyor. Tek silahların gözlem ve şüphe.",
    },
    {
      question: "Hangi erişilebilirlik seçenekleri var?",
      answer:
        "Ayarlanabilir metin boyutu, altyazı ölçekleme, renk körü modları, azaltılmış hareket düğmesi ve başlangıçta içerik uyarı ekranı. Rehber uyum sağlar. Sen de sağlayabilirsin.",
    },
    {
      question: "Kontrolcü destekliyor mu?",
      answer:
        "Tam kontrolcü desteği (Xbox / DualSense / Steam Input). Klavye ve fare de tam destekleniyor.",
    },
    {
      question: "Steam Deck için onaylı mı?",
      answer:
        "Steam Deck doğrulaması çıkış hedefi. Rehber ellerine sığıyor.",
    },
    {
      question: "Ne kadar korkutucu?",
      answer:
        "17+. Psikolojik korku — dehşet, belirsizlik ve yanlış güvenin terörü. Ani korkutma yok. Kan yok. Korku görmediklerinde yaşıyor.",
    },
    {
      question: "DLC veya devam oyunu olacak mı?",
      answer: "Rehber bu soruyu yanıtlamıyor. Henüz.",
    },
  ],

  mediaCaptions: {
    "scr-1": {
      alt: "Patika - Bilinmeze ilk adımlar",
      caption: "Patika - Bilinmeze ilk adımlar",
    },
    "scr-2": {
      alt: "Kulübe - Güvenlik mi tuzak mı?",
      caption: "Kulübe - Güvenlik mi tuzak mı?",
    },
    "scr-3": {
      alt: "Kule - Siste yükseliş",
      caption: "Kule - Siste yükseliş",
    },
    "scr-4": {
      alt: "Çevresel bulmaca - İşaretleri dikkatle oku",
      caption: "Çevresel bulmaca - İşaretleri dikkatle oku",
    },
    "scr-5": {
      alt: "Yeraltı - Yüzeyin altı",
      caption: "Yeraltı - Yüzeyin altı",
    },
    "scr-6": {
      alt: "Rehberin talimatları - Onları takip etmeli misin?",
      caption: "Rehberin talimatları - Onları takip etmeli misin?",
    },
    "scr-7": {
      alt: "Atmosferik iç mekân - Işık ve gölge",
      caption: "Atmosferik iç mekân - Işık ve gölge",
    },
    "scr-8": {
      alt: "Bir yanlışlık anı - Bir şey değişti",
      caption: "Bir yanlışlık anı - Bir şey değişti",
    },
    "gp-1": {
      alt: "Oynanış görüntüsü - Patika keşfi",
      caption: "Oynanış: Patika keşfi",
    },
  },

  pressKit: {
    assets: {
      "logo-horizontal.webp": {
        name: "Logo - Yatay",
        description: "Başlık kullanımı için birincil yatay logo",
      },
      "logo-vertical.webp": {
        name: "Logo - Dikey",
        description: "Kare formatlar için istiflenmiş logo",
      },
      "logo-icon.webp": {
        name: "Logo - Yalnızca Simge",
        description: "Favicon ve sosyal avatarlar için minimal simge",
      },
      "key-art-main.webp": {
        name: "Ana Görsel - Ana",
        description: "Birincil pazarlama görseli",
      },
      "key-art-vertical.webp": {
        name: "Ana Görsel - Dikey",
        description: "Mobil ve poster için dikey format",
      },
      "key-art-capsule.webp": {
        name: "Ana Görsel - Kapsül",
        description: "Steam kapsül formatı",
      },
      "trailer-announce.mp4": {
        name: "Tanıtım Fragmanı",
        description: "Resmi tanıtım fragmanı",
      },
      "trailer-gameplay.mp4": {
        name: "Oynanış Tanıtımı",
        description: "Ham oynanış görüntüsü",
      },
    },
    screenshotCaptions: {
      "screenshot-01.webp": "Patika - Bilinmeze ilk adımlar",
      "screenshot-02.webp": "Kulübe - Güvenlik mi tuzak mı?",
      "screenshot-03.webp": "Kule - Siste yükseliş",
      "screenshot-04.webp": "Çevresel bulmaca - İşaretleri dikkatle oku",
      "screenshot-05.webp": "Yeraltı - Yüzeyin altı",
      "screenshot-06.webp": "Rehberin talimatları - Onları takip etmeli misin?",
      "screenshot-07.webp": "Atmosferik iç mekân - Işık ve gölge",
      "screenshot-08.webp": "Bir yanlışlık anı - Bir şey değişti",
    },
    conceptCaptions: {
      "concept-01.webp": "Erken Patika ortam konsepti",
      "concept-02.webp": "Kulübe iç mekân ruh çalışması",
      "concept-03.webp": "Kule mimari keşfi",
      "concept-04.webp": "Yeraltı tünel sistemi",
      "concept-05.webp": "Rehber arayüz yinelemeleri",
      "concept-06.webp": "Karakter siluet çalışmaları",
    },
  },

  effects: {
    textShifts: [
      { original: "G\u00fcvendesin.", shifted: "G\u00fcvendeydin." },
      { original: "Rehber seni koruyor.", shifted: "Rehber kendini koruyor." },
      { original: "\u0130lerlemeye devam et.", shifted: "\u0130lerlemeye devam et. Art\u0131k daha yak\u0131n." },
      { original: "Yol a\u00e7\u0131k.", shifted: "Yol a\u00e7\u0131kt\u0131." },
      { original: "Yaln\u0131zs\u0131n.", shifted: "Yaln\u0131z de\u011filsin." },
      { original: "Arkana bakma.", shifted: "Arkana bakma. Zaten arkanda." },
      { original: "\u00c7\u0131k\u0131\u015f ileride.", shifted: "\u00c7\u0131k\u0131\u015f ilerideydi." },
      { original: "Rehbere g\u00fcven.", shifted: "Rehbere g\u00fcven. Rehbere g\u00fcven. Rehbere g\u00fcven." },
      { original: "I\u015f\u0131\u011f\u0131 takip et.", shifted: "I\u015f\u0131\u011f\u0131 takip et. Ad\u0131n\u0131 biliyor." },
      { original: "Hayatta kalacaks\u0131n.", shifted: "Hayatta kalacaks\u0131n. \u015eimdilik." },
      { original: "Kap\u0131 kilitli.", shifted: "Kap\u0131 d\u0131\u015far\u0131dan kilitli." },
      { original: "O seni bekliyor.", shifted: "O uzun zamand\u0131r bekliyor." },
    ],
    labelFlickers: [
      { original: "STEAM'DE WISHLIST", flicker: "STEAM'DE WISHLIST?" },
      { original: "FRAGMAN \u0130ZLE", flicker: "FRAGMAN \u0130ZLE?" },
      { original: "H\u0130KAYE", flicker: "H\u0130KAYE?" },
      { original: "MEKANLAR", flicker: "MEKANLAR?" },
      { original: "\u00d6ZELL\u0130KLER", flicker: "\u00d6ZELL\u0130KLER?" },
      { original: "MEDYA", flicker: "MEDYA?" },
      { original: "HABERLER", flicker: "HABERLER?" },
      { original: "BASIN K\u0130T\u0130", flicker: "BASIN K\u0130T\u0130?" },
    ],
    navShifts: [
      { original: "H\u0130KAYE", shifted: "H\u0130KAYE?" },
      { original: "MEKANLAR", shifted: "MEKANLAR?" },
      { original: "\u00d6ZELL\u0130KLER", shifted: "\u00d6ZELL\u0130KLER?" },
    ],
    timestampDrifts: [
      { original: "Son g\u00fcncelleme: Ocak 2025", drifted: "Son g\u00fcncelleme: Ocak 2024" },
      { original: "2 g\u00fcn \u00f6nce yay\u0131nland\u0131", drifted: "3 g\u00fcn \u00f6nce yay\u0131nland\u0131" },
      { original: "Az \u00f6nce g\u00fcncellendi", drifted: "Az \u00f6nce g\u00fcncellendi" },
    ],
    warningFlashes: [
      "\u26a0 YOL SAPMASI TESP\u0130T ED\u0130LD\u0130",
      "\u26a0 REHBER B\u00dcT\u00dcNL\u00dc\u011e\u00dc TEHL\u0130KEDE",
      "\u26a0 \u0130\u015eARET\u00c7\u0130 TUTARSIZLI\u011eI",
      "\u26a0 S\u0130NYAL PARAZ\u0130T\u0130",
      "\u26a0 G\u00dcVEN SEV\u0130YES\u0130 D\u00dc\u015e\u00dcYOR",
      "\u26a0 \u00d6ZNE G\u00d6ZET\u0130M ALTINDA",
      "\u26a0 REHBERL\u0130K KAYNA\u011eI DO\u011eRULANMADI",
      "\u26a0 SAPMA TESP\u0130T ED\u0130LD\u0130",
      "\u26a0 REHBER SEN\u0130 FARK ETT\u0130",
      "\u26a0 B\u0130R \u015eEY SEN\u0130 TAK\u0130P ED\u0130YOR",
      "\u26a0 SONRAK\u0130 TAL\u0130MATA G\u00dcVENME",
      "\u26a0 O BURADA OLDU\u011eUNU B\u0130L\u0130YOR",
      "\u26a0 YOL YEN\u0130DEN YAZILDI",
    ],
    textCorrections: [
      {
        original: "Kul\u00fcbe g\u00fcvenli bir s\u0131\u011f\u0131nak.",
        corrected: "Kul\u00fcbe g\u00fcvenli bir s\u0131\u011f\u0131nak. [D\u00dcZELTME: Kul\u00fcbe d\u0131\u015far\u0131dan kilitleniyor.]",
      },
      {
        original: "Kule net bir manzara sunuyor.",
        corrected: "Kule net bir manzara sunuyor. [D\u00dcZELTME: Ne kadar y\u00fckselirsen o kadar az g\u00f6r\u00fcrs\u00fcn.]",
      },
      {
        original: "\u0130\u015faretleri takip et.",
        corrected: "\u0130\u015faretleri takip et. [D\u00dcZELTME: Baz\u0131 i\u015faretler iki y\u00f6n\u00fc g\u00f6steriyor.]",
      },
      {
        original: "Burada yaln\u0131z olan sensin.",
        corrected: "Burada yaln\u0131z olan sensin. [D\u00dcZELTME: H\u00e2l\u00e2 hayatta olan tek ki\u015fi sensin.]",
      },
      {
        original: "Rehber sana yard\u0131m etmek istiyor.",
        corrected: "Rehber sana yard\u0131m etmek istiyor. [D\u00dcZELTME: Rehber kendine yard\u0131m etmek istiyor.]",
      },
      {
        original: "K\u0131z\u0131n g\u00fcvende.",
        corrected: "K\u0131z\u0131n g\u00fcvende. [D\u00dcZELTME: K\u0131z\u0131n g\u00fcvende... \u015fimdilik.]",
      },
      {
        original: "\u00c7\u0131k\u0131\u015f bu tarafta.",
        corrected: "\u00c7\u0131k\u0131\u015f bu tarafta. [D\u00dcZELTME: \u00c7\u0131k\u0131\u015f bu taraftayd\u0131. Yer de\u011fi\u015ftirdi.]",
      },
      {
        original: "Kimseye g\u00fcvenme.",
        corrected: "Kimseye g\u00fcvenme. [D\u00dcZELTME: Kendin dahil.]",
      },
    ],
    locationDrifts: [
      { original: "Patika", drifted: "Patika?" },
      { original: "Kul\u00fcbe", drifted: "Kul\u00fcbe?" },
      { original: "Kule", drifted: "Kule?" },
      { original: "Yeralt\u0131", drifted: "Yeralt\u0131?" },
      { original: "Patika", drifted: "Eski Patika" },
      { original: "Kul\u00fcbe", drifted: "Kilitli Kul\u00fcbe" },
      { original: "Kule", drifted: "K\u00f6r Kule" },
      { original: "Yeralt\u0131", drifted: "Derinlik" },
    ],
    observedHints: [
      "G\u00f6zetleniyorsun.",
      "Rehber seni g\u00f6r\u00fcyor.",
      "Bir \u015fey izliyor.",
      "Patikada yaln\u0131z de\u011filsin.",
      "\u0130\u015faret\u00e7iler izliyor.",
      "Bunu okudu\u011funu biliyor.",
      "Burada olmamal\u0131yd\u0131n.",
      "Rehber y\u00fcz\u00fcn\u00fc hat\u0131rl\u0131yor.",
      "Daha \u00f6nce buradayd\u0131n.",
      "O nefesini duyabiliyor.",
      "Patika asla senin i\u00e7in de\u011fildi.",
      "Y\u00f6nlendiriliyorsun. Kurtar\u0131lm\u0131yorsun.",
      "Biri omzunun \u00fczerinden okuyor.",
      "Rehber sand\u0131\u011f\u0131ndan daha yak\u0131n.",
    ],
  },
};
