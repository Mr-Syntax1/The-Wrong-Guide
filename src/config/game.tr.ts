import type { GameLocaleContent } from "./game.en";

export const gameLocaleContent: GameLocaleContent = {
  shortDescription:
    "Bir baba. Bir telefon araması. Onu asla kurtarması için tasarlanmamış bir Rehber. Geçmişini yok eden canavar tarafından yönlendirilen, sonsuz bir döngüye hapsolmuş bir babanın hikayesi — dua sayfaları kızının kurtuluşunun anahtarını tutarken, her talimat bir yalandır.",

  longDescription: `Sen Mohsen'sin. İranlı bir baba. Bir doğa keşifçisi. 9 yaşındaki kızını dünyadan fazla seven bir adam.

Bir gece, eşiyle kavgadan sonra kafasını dinlemek için arabayla yola çıkar. Çölde boş bir otoyolda benzin biter. Tek başına bir benzin istasyonunda durur. Depoyu doldururken telefon çalar.

Öbür uçtaki ses tanıdık. Çok tanıdık. Yıllar önce eşini kendisi için terk eden adam — karanlık bir geçmişi olan, bir zamanlar başka biriydi. Sadece "Defterli Adam" veya "Defter Sahibi" olarak bilinen. O sırları elinde tutuyor.

"Eğer iyi bir baba isen," der ses, "kızını kurtar gel."

Mohsen aceleyle arabasına koşar, kızını bulmak için. Ama arabasına ulaşmadan önce biri arkadan vurur. Karanlık onu kaplar.

Terk edilmiş bir hastanede uyanır. Işıklar titrer. Koridorlar nefes alır. Ve bu çürümüş yerin bir yerinde, kızı onu bekliyor.

Rehber izliyor. Rehber yönlendiriyor. Ama Rehber baştan beri yanlıştı.

Mohsen asla bitmeyen bir döngüye hapsolmuş — çünkü o darbeden beri dünya karanlık. (Bu gerçek mi değil mi belli değil.) Karanlık geçmişli adam, Defterli Adam, Defter Sahibi — o sırları biliyor. Mohsen ona "Rehber" diyor ama Mohsen onun ne kadar alçak biri olduğunu biliyor.

Hastane, avlu, çevre ortam her yerine sayfalar saçmış — dua yazma sayfaları (dua-nevisi), kara boyayıp yazılmış aile isimleri (İran geleneği). Bu sayfalar anahtar. Motivasyonu? Kendi buruk eğlencesi. Zaten olmuş bir geçmişe yönelik buruk bir intikam.

Mohsen kızı için her şeyi vermeli. Aksi takdirde asla istemediği bir acı kökleşecek...

Bu yol sadece yanlış bir rehber...`,

  genre: "Psikolojik Korku / Anlatı Odaklı Keşif / Hikaye Odaklı",

  releaseStatus: "Yakında",

  languages: ["İngilizce", "Farsça"],

  features: [
    {
      id: "story-driven",
      title: "HİKAYE ODAKLI",
      description:
        "Sonsuz bir kabus döngüsüne hapsolmuş, kızını kurtarmak için dua sayfaları arayan bir babanın derin derece kişisel hikayesi. Her ipucu, her karalanmış isim, her fısılda seni gerçeğe yaklaştırır — ve kurtuluştan uzaklaştırır.",
    },
    {
      id: "single-player",
      title: "TEK OYUNCU",
      description:
        "Yalnız oynanmak için tasarlanmış odaklanmış, samimi bir korku deneyimi. Koop yok, çok oyunculu yok — sadece sen, hastane ve hayatını mahveden adamın sesi seni yönlendiriyor.",
    },
    {
      id: "offline",
      title: "ÇEVRIMDIŞI",
      description:
        "İnternet bağlantısı gerekmez. Her yerde, her zaman DRM'siz ve sürekli çevrimiçi olma zorunluluğu olmadan oyna.",
    },
    {
      id: "exploration",
      title: "KEŞİF",
      description:
        "Terk edilmiş hastane kanatları, unutulmuş avlular ve imkansız koridorlarda ilerle. Dünya dikkatli gözlemi ödüllendirir — ama Rehber'e kör güven cezalandırır.",
    },
    {
      id: "puzzles",
      title: "BULMACALAR",
      description:
        "Dikkat et. Hastanenin kuralları var. Rehber'in talimatları var. Ama bazı kapılar dışarıdan kilitli — ve dua sayfaları seni gitmesini istemeyen biri tarafından saçılmış.",
    },
    {
      id: "atmospheric-horror",
      title: "ATMOSFERİK KORKU",
      description:
        "Ortam, ses ve belirsizlik yoluyla gerilim yaratır. Jumpscare yok — Rehber'in asla onu kurtarmak için tasarlanmadığını anlayan bir babanın yavaş, sinsi dehşeti var.",
    },
  ],

  locations: [
    {
      id: "the-path",
      name: "Yol",
      description:
        "Ölü birorman içinden geçen dar bir yol. Rehber इस üzerinde kal demiş. Ama ağaçlar içeri doğru eğilmiş — ve önde bir yerde bir çocuk ağlıyor. Olmaması gereken rüzgarda dua sayfaları sallanıyor.",
    },
    {
      id: "the-cabin",
      name: "Kulübe",
      description:
        "Bir açıklığa çöken dökük bir yapı. Mohsen bu yeri hatırlıyor — ama bu hayattan değil. Kapı içeri açılıyor. Kilit dışarıda. Masada kara boyayıp yazılmış sayfalar yığını duruyor.",
    },
    {
      id: "the-tower",
      name: "Kule",
      description:
        "Sislerden yükselen bir monolit. Rehber daha iyi görmek için tırman demiş. Ama Mohsen ne kadar yükselirse o kadar net görüyor: kızı tepedeki değil. Defter Sahibi pencereden izliyor.",
    },
    {
      id: "the-subterrain",
      name: "Yeraltı",
      description:
        "Her şeyin altındaki tüneller. Rehber bu bir kısayol demiş. Ama duvarlar nefes alıyor, harita yalan söylüyor ve karanlık bir yerde Defterli Adam son sayfalarla bekliyor.",
    },
  ],

  coreDesign: {
    label: "ANA TASARIM",
    heading: "El Tutma. Yanlış Güvenlik Yok.",
    paragraph1:
      "The Wrong Guide zekanı sayar. Hedef işaretçisi yok, görev günlüğü yok, vurgulanmış etkileşim öğesi yok. Dünya çevresel ipuçları, ses ve Rehber kendisi aracılığıyla iletişim kurar — güvenilir olsun ya da olmasın.",
    paragraph2:
      "Her mekanik anlatıma hizmet eder. Bulmacalar gözlemden doğar. Korku belirsizlikten doğar. Rehber şu sorudan doğar: seni hayatta tutan tek şey seni sonuna götüren şeyse ne olur?",
  },

  moods: {
    oppressive: {
      label: "BAŞKALDIRICI",
      description: "Ağır atmosfer, sürekli baskı, gözetlenme hissi",
    },
    uncanny: {
      label: "TUHAF",
      description: "Tanıdık ama derinlerde yanlış, ince bozulmalar",
    },
    vertigo: {
      label: "BAŞ DÖNMESİ",
      description: "Yönsüzlüğü bozan dikeylik, uzamsal kaybolma",
    },
    claustrophobic: {
      label: "KAPALI ALAN KORKUSU",
      description: "Kapalı mekanlar, yaklaştıran duvarlar, sınırlı kaçış yolları",
    },
  },

  steamFeatures: [
    { label: "Tek Oyunculu", description: "Odaklanmış solo deneyim" },
    { label: "Çevrimdışı Oynama", description: "İnternet gerekmez" },
    { label: "Steam Deck Doğrulanmış", description: "Taşınabilir için optimize" },
    { label: "DRM Yok", description: "Her yerde, her zaman oyna" },
    { label: "Bulut Kayıtları", description: "İlerlemen seninle" },
    { label: "Tam Kontrolcü Desteği", description: "Kendi tarzınla oyna" },
  ],

  news: [
    {
      id: "first-trailer",
      title: "İlk Fragman Yayınlandı",
      excerpt:
        "The Wrong Guide'ın resmi tanıtım fragmanını izleyin. İzlediğiniz şeye güvenip güvenemeyeceğinizi soran iki dakikalık atmosferik korku.",
      content: `The Wrong Guide'ın resmi tanıtım fragmanını izleyin. İzlediğiniz şeye güvenip güvenemeyeceğinizi soran iki dakikalık atmosferik korku.

İlk fragmanımız, takip ettiğin Rehber'in göründüğü gibi olmayabileceği The Wrong Guide'ın atmosferik dünyasını sergiliyor. Fragmanda:

- Yol, Kulübe, Kule ve Yeraltı'nın sinematik kareleri
- Rehber'in gizemli talimatlarının parçaları
- Oyunun benzersiz görsel stili ve atmosferik ışıklandırması
- Dua sayfası bulmacaları ve anlatısal gizemlere ipuçları

Fragman, oyunun hiçbir gizemini açığa çıkarmadan atmosferinin tadını çıkarman için yapıldı. Deneyimin her yanına işleyen belirsizlik ve dehşet hissini yakalamak istedik.

Şimdi izle ve kendin karar ver: Rehber'e güvenebilir misin?`,
      category: "Trailer",
    },
    {
      id: "devlog-1",
      title: "Geliştirme Günlüğü #1: Baba, Rehber ve Yalan",
      excerpt:
        "Oyuncunun tek rehber kaynağı en büyük tehdidine dönüştüğünde ne olur? Temel tasarım felsefesinin arkasında kalanlara bakış.",
      content: `Oyuncunun tek rehber kaynağı en büyük tehdidine dönüştüğünde ne olur? Temel tasarım felsefesinin arkasında kalanlara bakış.

Bu ilk geliştirme günlüğünde, The Wrong Guide'ın arkasındaki temel kavramın perde arkasını açıyoruz.

Fikir basit bir soruyla başladı: Bir korku oyununda seni hayatta tutan tek şey, seni de yok edecek şey olursa ne olur? Geleneksel korku oyunları net hedefler, net yollar, net düşmanlar verir. Ama seni yardım için tasarlanan sistem — hedef işaretçileri, rehber sesi, yol işaretleri — kökten güvenilmezse ne olur?

Bu The Wrong Guide tasarımının merkezi direği oldu. Her mekanik bu temaya hizmet eder:
- Rehber'in talimatları faydalı görünse de seni sapıtabilir
- Çevresel işaretler birbirleriyle çelişir
- "Kastedilen" yoldan sapıldığında ses ipuçları incecik değişir
- Haritada olmayan odalar görünür
- Dua sayfaları (dua-nevisi) hem anahtar hem tuzak

Bu kavram üzerinde geniş çapta yineleme yaptık. Erken prototiplerde Rehber'i açık bir antagonist yaptık, ama belirsizlik çok daha rahatsız edici olduğunu keştik. Oyuncu Rehber'in bozuk mu, kötü niyetli mi, yoksa sadece yanlış yorumladığını asla tam bilememeli.

Bu felsefe oyunun her yönüne yayılır — seviye tasarımı, ses, UI, anlatı. Sonuç, jumpscare'ler yerine, oyunların sana güvenmeni öğrettiği şeye güvenemeyeceğini yavaş yavaş fark etmenle derinine işleyen bir deneyim.

Çevresel hikaye anlatımı, ses tasarımı ve güvenilmez rehber sistemi inşa etmenin teknik zorluklarını kapsayan daha fazla geliştirme günlüğü gelecek.`,
      category: "Geliştirme",
    },
    {
      id: "publisher-announcement",
      title: "Yayıncı Açıklandı",
      excerpt:
        "The Wrong Guide'ın Steam'deki küresel yayını için Sourena Games ile ortaklığımızı duyurmak için gururluyuz.",
      content: `The Wrong Guide'ın Steam'deki küresel yayını için Sourena Games ile ortaklığımızı duyurmak için gururluyuz.

Doğru ortağı arayarak aylar geçti, The Wrong Guide için vizyonumuzu paylaşan bir yayıncı bulduk. Sourena Games, atmosferik, anlatı odaklı indie oyunlarda kanıtlanmış geçmişi var ve kolay kategorize edilemeyen bir oyunun pazarlamasındaki benzersiz zorlukları anlıyor.

Bu ortaklık şunları تعني eder:
- Steam'de küresel dağıtım ve bölgesel fiyatlandırma
- Wishlist kampanyası ve lansman için pazarlama desteği
- Çoklu dil için QA ve yerelleştirme desteği
- Steam Deck doğrulama yardımı
- Lansman sonrası destek ve güncelleme hattı

Oyunun sanatsal vizyonuna saygı duyarken en geniş kitleye ulaşmamızı sağlayacak bir ekiple çalışmaktan mutluluk duyuyoruz. The Wrong Guide kendi şartlarında yaşanması gereken bir oyun ve Sourena Games bunu anlıyor.

Yayın zamanı ve pazarlama planları hakkında detaylar gelecek aylerde paylaşılacak. Bu arada geliştirme tam hızde devam ediyor — içerik üretiminin son aşamalarında ve poliş/optimizasyon fazına geçiyoruz.

Sabrınız ve destekleriniz için teşekkürler. Rehber neredeyse hazır.`,
      category: "İş",
    },
  ],

  categoryLabels: {
    All: "Hepsi",
    Announcement: "Duyuru",
    Trailer: "Fragman",
    Development: "Geliştirme",
    Business: "İş",
  },

  faq: [
    {
      question: "Hangi platformlarda çıkacak?",
      answer: "Steam (Windows). Steam Deck doğrulaması planlanıyor. Konsol portu yok.",
    },
    {
      question: "Ne kadar tutacak?",
      answer: "$7.99 USD. Steam'de bölgesel fiyatlandırma uygulanır.",
    },
    {
      question: "Ne zaman çıkacak?",
      answer: "2027. Rehber hazır olduğunda kesin tarih duyurulacak.",
    },
    {
      question: "Hangi diller destekleniyor?",
      answer: "Lansmanda Farsça, İngilizce, Türkçe, Japonca ve Rusça.",
    },
    {
      question: "Çok oyunculu mu?",
      answer: "Hayır. The Wrong Guide tek oyunculu, çevrimdışı bir deneyim. Rehber'i yalnızsın takip ediyorsun.",
    },
    {
      question: "Oyun ne kadar sürer?",
      answer: "Ana hikaye için yaklaşık 2-4 saat. Rehber kesin süreyi biliyor. Söylemiyor.",
    },
    {
      question: "Savaş var mı?",
      answer: "Evet, silahlı savaş var ama minimal. Oyun keşif, çevresel bulmacalar ve atmosfere odaklanır.",
    },
    {
      question: "Erişilebilirlik seçenekleri neler?",
      answer: "Ayarlanabilir metin boyutu, altyazı ölçekleme, renk körlüğü modları, hareket azaltma, başlangıçta içerik uyarısı ekranı. Rehber uyum sağlar. Sen de sağlayabilirsin.",
    },
    {
      question: "Kontrolcü destekliyor mu?",
      answer: "Tam kontrolcü desteği (Xbox / DualSense / Steam Input). Klavye ve fare de tam desteklenir.",
    },
    {
      question: "Steam Deck için doğrulanmış mı?",
      answer: "Steam Deck doğrulaması lansman hedefi. Rehber eline sığar.",
    },
    {
      question: "Ne kadar korkutucu?",
      answer: "17+. Psikolojik korku — korku, belirsizlik ve yanlış güvenin dehşeti. Jumpscare yok. Kan yok. Korku görmediğin şeylerde yaşar.",
    },
    {
      question: "DLC veya devam edecek mi?",
      answer: "Rehber bu soruya cevap vermiyor. Henüz.",
    },
  ],

  mediaCaptions: {
    "scr-1": { alt: "Yol - Bilinmeze İlk Adımlar", caption: "Yol - Bilinmeze İlk Adımlar" },
    "scr-2": { alt: "Kulübe - Güvenlik mi Tuzak mı?", caption: "Kulübe - Güvenlik mi Tuzak mı?" },
    "scr-3": { alt: "Kule - Sise Tırmanış", caption: "Kule - Sise Tırmanış" },
    "scr-4": { alt: "Çevresel Bulmaca - İşaretleri Dikkatle Oku", caption: "Çevresel Bulmaca - İşaretleri Dikkatle Oku" },
    "scr-5": { alt: "Yeraltı - Yüzeyin Altında", caption: "Yeraltı - Yüzeyin Altında" },
    "scr-6": { alt: "Rehber'in Talimatları - Takip Eder misin?", caption: "Rehber'in Talimatları - Takip Eder misin?" },
    "scr-7": { alt: "Atmosferik İç Mekan - Işık ve Gölge", caption: "Atmosferik İç Mekan - Işık ve Gölge" },
    "scr-8": { alt: "Yanlışlık Anı - Bir Şey Değişti", caption: "Yanlışlık Anı - Bir Şey Değişti" },
    "gp-1": { alt: "Oynanış Kayıtı - Yol Keşfi", caption: "Oynanış: Yol Keşfi" },
  },

  pressKit: {
    assets: {
      "logo-horizontal.webp": { name: "Logo - Yatay", description: "Üst kısım için birincil yatay logo" },
      "logo-vertical.webp": { name: "Logo - Dikey", description: "Kare formatlar için yığın logo" },
      "logo-icon.webp": { name: "Logo - Sadece İkon", description: "Favicon ve sosyal avatarlar için minimal ikon" },
      "key-art-main.webp": { name: "Anahtar Sanat - Ana", description: "Birincil pazarlama sanat çalışması" },
      "key-art-vertical.webp": { name: "Anahtar Sanat - Dikey", description: "Mobil ve afiş için dikey format" },
      "key-art-capsule.webp": { name: "Anahtar Sanat - Kapsül", description: "Steam kapsül sanat formatı" },
      "trailer-announce.mp4": { name: "Tanıtım Fragmanı", description: "Resmi tanıtım fragmanı" },
      "trailer-gameplay.mp4": { name: "Oynanış Önizlemesi", description: "Ham oynanış kaydı" },
    },
    screenshotCaptions: {
      "screenshot-01.webp": "Yol - Bilinmeze İlk Adımlar",
      "screenshot-02.webp": "Kulübe - Güvenlik mi Tuzak mı?",
      "screenshot-03.webp": "Kule - Sise Tırmanış",
      "screenshot-04.webp": "Çevresel Bulmaca - İşaretleri Dikkatle Oku",
      "screenshot-05.webp": "Yeraltı - Yüzeyin Altında",
      "screenshot-06.webp": "Rehber'in Talimatları - Takip Eder misin?",
      "screenshot-07.webp": "Atmosferik İç Mekan - Işık ve Gölge",
      "screenshot-08.webp": "Yanlışlık Anı - Bir Şey Değişti",
    },
    conceptCaptions: {
      "concept-01.webp": "Erken Yol Ortamı Konsepti",
      "concept-02.webp": "Kulübe İç Mekan Hali Çalışması",
      "concept-03.webp": "Kule Mimarisi Keşfi",
      "concept-04.webp": "Yeraltı Tünel Sistemi",
      "concept-05.webp": "Rehber UI/UX Yinelemeleri",
      "concept-06.webp": "Karakter Siluet Çalışmaları",
    },
  },

  effects: {
    textShifts: [
      { original: "Sen güvenlisin.", shifted: "Sen güvendin." },
      { original: "Rehber seni korur.", shifted: "Rehber kendini korur." },
      { original: "İleri gitmeye devam et.", shifted: "İleri gitmeye devam et. O şimdi daha yakın." },
      { original: "Yol açık.", shifted: "Yol açıktı." },
      { original: "Sen yalnızsın.", shifted: "Sen yalnız değilsin." },
      { original: "Arkana bakma.", shifted: "Arkana bakma. O zaten arkanda." },
      { original: "Çıkış öndedir.", shifted: "Çıkış öndeyken vardı." },
      { original: "Rehber'e güven.", shifted: "Rehber'e güven. Rehber'e güven. Rehber'e güven." },
      { original: "Işığı takip et.", shifted: "Işığı takip et. Senin adını biliyor." },
      { original: "Sağ kalacaksın.", shifted: "Sağ kalacaksın. Şimdilik." },
      { original: "Kapı kilitli.", shifted: "Kapı dışarıdan kilitli." },
      { original: "O seni bekliyor.", shifted: "O uzun süredir bekliyor." },
    ],
    labelFlickers: [
      { original: "STEAM'DE WISHLIST", flicker: "STEAM'DE WISHLIST?" },
      { original: "FRAGMAN İZLE", flicker: "FRAGMAN İZLE?" },
      { original: "HİKAYE", flicker: "HİKAYE?" },
      { original: "MEKANLAR", flicker: "MEKANLAR?" },
      { original: "ÖZELLİKLER", flicker: "ÖZELLİKLER?" },
      { original: "MEDYA", flicker: "MEDYA?" },
      { original: "HABERLER", flicker: "HABERLER?" },
      { original: "BASIN KİTİ", flicker: "BASIN KİTİ?" },
    ],
    navShifts: [
      { original: "HİKAYE", shifted: "HİKAYE?" },
      { original: "MEKANLAR", shifted: "MEKANLAR?" },
      { original: "ÖZELLİKLER", shifted: "ÖZELLİKLER?" },
    ],
    timestampDrifts: [
      { original: "Son güncelleme: Ocak 2025", drifted: "Son güncelleme: Ocak 2024" },
      { original: "2 gün önce yayınlandı", drifted: "3 gün önce yayınlandı" },
      { original: "Az önce güncellendi", drifted: "Az önce güncellendi" },
    ],
    warningFlashes: [
      "\u26a0 YOL SAPMASI TESPİT EDİLDİ",
      "\u26a0 REHBER BÜTÜNLÜĞÜ TEHLİKEDE",
      "\u26a0 İŞARETÇİ UYUMSUZLUĞU",
      "\u26a0 SİNYAL PARAZİTİ",
      "\u26a0 GÜVEN SEVİYESİ DÜŞÜYOR",
      "\u26a0 KONU GÖZLEM ALTINDA",
      "\u26a0 YÖNLENDİRME KAYNAĞI ONAYLANMADI",
      "\u26a0 SAPMA TESPİT EDİLDİ",
      "\u26a0 REHBER SİZİ FARK ETTİ",
      "\u26a0 BİR ŞEY SİZİ TAKİP EDİYOR",
      "\u26a0 BİR SONRAKİ TALİMATA GÜVENMEYİN",
      "\u26a0 O SİZİN BURADA OLDUĞUNU BİLİYOR",
      "\u26a0 YOL YENİDEN YAZILDI",
    ],
    textCorrections: [
      { original: "Kulübe güvenli bir sığınaktır.", corrected: "Kulübe güvenli bir sığınaktır. [DÜZELTME: Kulübe dışarıdan kilitlenir.]" },
      { original: "Kule net bir manzara sunar.", corrected: "Kule net bir manzara sunar. [DÜZELTME: Ne kadar yükselirsen o kadar az görürsün.]" },
      { original: "İşaretçileri takip et.", corrected: "İşaretçileri takip et. [DÜZELTME: Bazı işaretçiler iki yöne gösterir.]" },
      { original: "Sen burada tek kişisin.", corrected: "Sen burada tek kişisin. [DÜZELTME: Hala yaşayan tek kişi sensin.]" },
      { original: "Rehber sana yardım etmek istiyor.", corrected: "Rehber sana yardım etmek istiyor. [DÜZELTME: Rehber kendisine yardım etmek istiyor.]" },
      { original: "Kızın güvenli.", corrected: "Kızın güvenli. [DÜZELTME: Kızın güvenli... şimdilik.]" },
      { original: "Çıkış buradadır.", corrected: "Çıkış buradadır. [DÜZELTME: Çıkış buradaydı. Taşındı.]" },
      { original: "Kimseye güvenme.", corrected: "Kimseye güvenme. [DÜZELTME: Kendini de dahil.]" },
    ],
    locationDrifts: [
      { original: "Yol", drifted: "Yol?" },
      { original: "Kulübe", drifted: "Kulübe?" },
      { original: "Kule", drifted: "Kule?" },
      { original: "Yeraltı", drifted: "Yeraltı?" },
      { original: "Yol", drifted: "Olan Yol" },
      { original: "Kulübe", drifted: "Kilitli Kulübe" },
      { original: "Kule", drifted: "Kör Kule" },
      { original: "Yeraltı", drifted: "Aşağı" },
    ],
    observedHints: [
      "Sen gözetleniyorsun.",
      "Rehber seni görüyor.",
      "Bir şey izliyor.",
      "Yolda yalnız değilsin.",
      "İşaretçiler bakıyor.",
      "Bunu okuduğunu biliyor.",
      "Sen burada olmamalısın.",
      "Rehber yüzünü hatırlıyor.",
      "Daha önce buradaydın.",
      "O nefesini duyuyor.",
      "Yol asla senin için değildi.",
      "Sen yönlendiriliyorsun. Kurtarılmıyorsun.",
      "Birisi omzundan okuyor.",
      "Rehber sandığından daha yakın.",
    ],
  },
};

export type GameLocaleContent = typeof gameLocaleContent;