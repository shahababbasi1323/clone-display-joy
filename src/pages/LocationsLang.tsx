import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Globe, Search, PenTool, Monitor, Share2, BarChart3, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { locationsData, LANG_PREFIXES } from "@/data/locationsData";
import { useSeoMeta } from "@/hooks/useSeoMeta";
import NotFound from "./NotFound";

// Translations per language
const i18n: Record<string, {
  pageTitle: string;
  metaTitle: string;
  metaDesc: string;
  heroTitle: string;
  heroHighlight: string;
  heroDesc: string;
  servicesGrid: { label: string; desc: string }[];
  findTitle: string;
  findHighlight: string;
  viewServices: string;
  servicesSub: string;
  whyTitle: string;
  whyPoints: { title: string; desc: string }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  cities: string;
  city: string;
}> = {
  ar: {
    pageTitle: "المواقع",
    metaTitle: "وكالة تسويق رقمي عالمية | سيو، إعلانات PPC، تصميم مواقع",
    metaDesc: "وكالة تسويق رقمي متكاملة تخدم أكثر من 250 مدينة. سيو، إعلانات PPC، تصميم مواقع، تطوير مواقع، كتابة محتوى وإدارة وسائل التواصل الاجتماعي.",
    heroTitle: "وكالتك",
    heroHighlight: "للتسويق الرقمي",
    heroDesc: "نساعد الشركات في أكثر من {count} مدينة على النمو من خلال خبرتنا في تحسين محركات البحث، إدارة إعلانات PPC، تصميم المواقع وتطويرها، كتابة المحتوى، وتسويق وسائل التواصل الاجتماعي.",
    servicesGrid: [
      { label: "تحسين محركات البحث (SEO)", desc: "تصدّر نتائج البحث العضوية ومحركات الإجابة الذكية" },
      { label: "إعلانات الدفع بالنقرة (PPC)", desc: "إعلانات Google Ads وحملات إعلانية مدفوعة على وسائل التواصل" },
      { label: "تصميم وتطوير المواقع", desc: "مواقع احترافية مصممة للتحويل وسرعة الأداء والجوال" },
      { label: "كتابة المحتوى", desc: "مقالات، صفحات هبوط، ونصوص تسويقية محسّنة للسيو" },
      { label: "إدارة وسائل التواصل", desc: "استراتيجيات نمو عبر إنستغرام، لينكد إن، فيسبوك وتيك توك" },
      { label: "التحليلات والتقارير", desc: "رؤى مبنية على البيانات لقياس العائد وتحقيق النمو" },
    ],
    findTitle: "اعثر على خدمات التسويق الرقمي",
    findHighlight: "بالقرب منك",
    viewServices: "عرض الخدمات",
    servicesSub: "سيو · PPC · تصميم مواقع",
    whyTitle: "لماذا تختارنا كشريك تسويق رقمي؟",
    whyPoints: [
      { title: "خبرة رقمية شاملة", desc: "من السيو وإعلانات PPC إلى تصميم المواقع وتطويرها وكتابة المحتوى وإدارة وسائل التواصل الاجتماعي — كل خدمات التسويق الرقمي تحت سقف واحد." },
      { title: "ذكاء السوق المحلي", desc: "ندرس المنافسين المحليين وسلوك الجمهور واتجاهات البحث لبناء استراتيجيات فائقة الاستهداف." },
      { title: "نتائج مبنية على البيانات", desc: "كل حملة مدعومة بالتحليلات — نمو الزيارات العضوية، معدلات تحويل PPC، تفاعل التواصل الاجتماعي." },
      { title: "وصول عالمي، تركيز محلي", desc: "نخدم أكثر من 250 مدينة باستراتيجيات تحترم الفروق الثقافية وسلوك البحث المحلي." },
    ],
    ctaTitle: "هل أنت مستعد لتنمية أعمالك؟",
    ctaDesc: "احصل على تدقيق تسويق رقمي مجاني — يشمل السيو، PPC، تصميم المواقع، المحتوى، ووسائل التواصل الاجتماعي.",
    ctaButton: "احصل على تدقيق نمو مجاني",
    cities: "مدن",
    city: "مدينة",
  },
  fr: {
    pageTitle: "Emplacements",
    metaTitle: "Agence de Marketing Digital Mondiale | SEO, PPC, Web Design",
    metaDesc: "Agence de marketing digital complète desservant plus de 250 villes. SEO, PPC, web design, développement web, rédaction de contenu et gestion des réseaux sociaux.",
    heroTitle: "Votre",
    heroHighlight: "Agence de Marketing Digital",
    heroDesc: "Nous aidons les entreprises dans plus de {count} villes à croître grâce au SEO, à la gestion PPC, au web design et développement, à la rédaction de contenu et au marketing sur les réseaux sociaux.",
    servicesGrid: [
      { label: "SEO & Optimisation GEO", desc: "Dominez les résultats de recherche organiques et les moteurs de réponse IA" },
      { label: "PPC & Publicité Payante", desc: "Google Ads, publicités réseaux sociaux et campagnes axées performance" },
      { label: "Web Design & Développement", desc: "Sites web orientés conversion, rapides et mobile-first" },
      { label: "Rédaction de Contenu", desc: "Articles de blog, pages d'atterrissage et copywriting optimisé SEO" },
      { label: "Gestion des Réseaux Sociaux", desc: "Stratégies de croissance sur Instagram, LinkedIn, Facebook et TikTok" },
      { label: "Analytique & Rapports", desc: "Insights basés sur les données pour mesurer le ROI et accélérer la croissance" },
    ],
    findTitle: "Trouvez des Services de Marketing Digital",
    findHighlight: "Près de Vous",
    viewServices: "Voir les services",
    servicesSub: "SEO · PPC · Web Design",
    whyTitle: "Pourquoi Nous Choisir Comme Partenaire Digital ?",
    whyPoints: [
      { title: "Expertise Digitale Complète", desc: "Du SEO et PPC au développement web, web design, rédaction de contenu et gestion des réseaux sociaux — tous les services sous un même toit." },
      { title: "Intelligence du Marché Local", desc: "Nous étudions vos concurrents locaux, le comportement de l'audience et les tendances de recherche." },
      { title: "Résultats Basés sur les Données", desc: "Chaque campagne est soutenue par l'analytique — croissance du trafic, taux de conversion PPC, engagement social." },
      { title: "Portée Mondiale, Focus Local", desc: "Plus de 250 villes avec des stratégies respectant les nuances culturelles et le comportement local." },
    ],
    ctaTitle: "Prêt à Développer Votre Entreprise ?",
    ctaDesc: "Obtenez un audit de marketing digital gratuit — couvrant SEO, PPC, web design, contenu et réseaux sociaux.",
    ctaButton: "Obtenir un Audit Gratuit",
    cities: "villes",
    city: "ville",
  },
  de: {
    pageTitle: "Standorte",
    metaTitle: "Digitale Marketing Agentur Weltweit | SEO, PPC, Webdesign",
    metaDesc: "Full-Service Digitale Marketing Agentur in über 250 Städten. SEO, PPC, Webdesign, Webentwicklung, Content-Erstellung und Social-Media-Management.",
    heroTitle: "Ihre",
    heroHighlight: "Digitale Marketing Agentur",
    heroDesc: "Wir helfen Unternehmen in über {count} Städten beim Wachstum durch SEO, PPC-Management, Webdesign und Webentwicklung, Content-Erstellung und Social-Media-Marketing.",
    servicesGrid: [
      { label: "SEO & GEO-Optimierung", desc: "Dominieren Sie organische Suchergebnisse und KI-gestützte Antwortmaschinen" },
      { label: "PPC & Bezahlte Werbung", desc: "Google Ads, Social-Media-Werbung und leistungsorientierte Kampagnen" },
      { label: "Webdesign & Entwicklung", desc: "Conversion-optimierte Websites mit Geschwindigkeit und Mobile-First UX" },
      { label: "Content-Erstellung", desc: "Blogartikel, Landing Pages und SEO-optimiertes Copywriting" },
      { label: "Social-Media-Management", desc: "Wachstumsstrategien auf Instagram, LinkedIn, Facebook und TikTok" },
      { label: "Analytik & Berichte", desc: "Datengestützte Einblicke zur Messung des ROI und Wachstum" },
    ],
    findTitle: "Finden Sie Digitale Marketing-Dienste",
    findHighlight: "In Ihrer Nähe",
    viewServices: "Dienste ansehen",
    servicesSub: "SEO · PPC · Webdesign",
    whyTitle: "Warum Uns Als Digitalen Marketing-Partner Wählen?",
    whyPoints: [
      { title: "Full-Stack Digitale Expertise", desc: "Von SEO und PPC bis Webentwicklung, Webdesign, Content-Erstellung und Social-Media-Management — alles unter einem Dach." },
      { title: "Lokale Marktintelligenz", desc: "Wir analysieren lokale Wettbewerber, Zielgruppenverhalten und Suchtrends." },
      { title: "Datengetriebene Ergebnisse", desc: "Jede Kampagne wird durch Analytik unterstützt — organisches Traffic-Wachstum, PPC-Konversionsraten, Social-Media-Engagement." },
      { title: "Globale Reichweite, Lokaler Fokus", desc: "Über 250 Städte mit Strategien, die kulturelle Nuancen und lokales Suchverhalten respektieren." },
    ],
    ctaTitle: "Bereit, Ihr Unternehmen zu Wachsen?",
    ctaDesc: "Holen Sie sich ein kostenloses Digital-Marketing-Audit — SEO, PPC, Webdesign, Content und Social Media.",
    ctaButton: "Kostenloses Wachstums-Audit",
    cities: "Städte",
    city: "Stadt",
  },
  es: {
    pageTitle: "Ubicaciones",
    metaTitle: "Agencia de Marketing Digital Mundial | SEO, PPC, Diseño Web",
    metaDesc: "Agencia de marketing digital de servicio completo en más de 250 ciudades. SEO, PPC, diseño web, desarrollo web, redacción de contenidos y gestión de redes sociales.",
    heroTitle: "Tu",
    heroHighlight: "Agencia de Marketing Digital",
    heroDesc: "Ayudamos a empresas en más de {count} ciudades a crecer con SEO, gestión de PPC, diseño y desarrollo web, redacción de contenidos y marketing en redes sociales.",
    servicesGrid: [
      { label: "SEO y Optimización GEO", desc: "Domina los resultados de búsqueda orgánicos y los motores de respuesta IA" },
      { label: "PPC y Publicidad de Pago", desc: "Google Ads, anuncios en redes sociales y campañas orientadas al rendimiento" },
      { label: "Diseño y Desarrollo Web", desc: "Sitios web enfocados en la conversión, rápidos y mobile-first" },
      { label: "Redacción de Contenidos", desc: "Artículos de blog, landing pages y copywriting optimizado para SEO" },
      { label: "Gestión de Redes Sociales", desc: "Estrategias de crecimiento en Instagram, LinkedIn, Facebook y TikTok" },
      { label: "Analítica e Informes", desc: "Información basada en datos para medir el ROI y escalar el crecimiento" },
    ],
    findTitle: "Encuentra Servicios de Marketing Digital",
    findHighlight: "Cerca de Ti",
    viewServices: "Ver servicios",
    servicesSub: "SEO · PPC · Diseño Web",
    whyTitle: "¿Por Qué Elegirnos Como Tu Socio Digital?",
    whyPoints: [
      { title: "Experiencia Digital Completa", desc: "Desde SEO y PPC hasta desarrollo web, diseño web, redacción de contenidos y gestión de redes sociales — todo bajo un mismo techo." },
      { title: "Inteligencia del Mercado Local", desc: "Estudiamos tus competidores locales, el comportamiento de la audiencia y las tendencias de búsqueda." },
      { title: "Resultados Basados en Datos", desc: "Cada campaña respaldada por analítica — crecimiento del tráfico orgánico, tasas de conversión PPC, engagement social." },
      { title: "Alcance Global, Enfoque Local", desc: "Más de 250 ciudades con estrategias que respetan los matices culturales y el comportamiento de búsqueda local." },
    ],
    ctaTitle: "¿Listo Para Hacer Crecer Tu Negocio?",
    ctaDesc: "Obtén una auditoría de marketing digital gratuita — cubriendo SEO, PPC, diseño web, contenido y redes sociales.",
    ctaButton: "Obtener Auditoría Gratuita",
    cities: "ciudades",
    city: "ciudad",
  },
  nl: {
    pageTitle: "Locaties",
    metaTitle: "Digitaal Marketing Bureau Wereldwijd | SEO, PPC, Webdesign",
    metaDesc: "Full-service digitaal marketing bureau in meer dan 250 steden. SEO, PPC, webdesign, webontwikkeling, contentcreatie en social media management.",
    heroTitle: "Uw",
    heroHighlight: "Digitaal Marketing Bureau",
    heroDesc: "Wij helpen bedrijven in meer dan {count} steden groeien met SEO, PPC-management, webdesign en webontwikkeling, contentcreatie en social media marketing.",
    servicesGrid: [
      { label: "SEO & GEO-Optimalisatie", desc: "Domineer organische zoekresultaten en AI-aangedreven antwoordmachines" },
      { label: "PPC & Betaalde Advertenties", desc: "Google Ads, social media advertenties en prestatiegerichte campagnes" },
      { label: "Webdesign & Ontwikkeling", desc: "Conversie-gerichte websites gebouwd voor snelheid en mobile-first UX" },
      { label: "Contentcreatie", desc: "Blogposts, landingspagina's en SEO-geoptimaliseerde copywriting" },
      { label: "Social Media Management", desc: "Groeistrategieën op Instagram, LinkedIn, Facebook en TikTok" },
      { label: "Analyse & Rapportage", desc: "Datagestuurde inzichten om ROI te meten en groei te schalen" },
    ],
    findTitle: "Vind Digitale Marketing Diensten",
    findHighlight: "Bij U in de Buurt",
    viewServices: "Bekijk diensten",
    servicesSub: "SEO · PPC · Webdesign",
    whyTitle: "Waarom Ons Kiezen Als Uw Digitale Partner?",
    whyPoints: [
      { title: "Full-Stack Digitale Expertise", desc: "Van SEO en PPC tot webontwikkeling, webdesign, contentcreatie en social media management — alles onder één dak." },
      { title: "Lokale Marktintelligentie", desc: "We bestuderen uw lokale concurrenten, doelgroepgedrag en zoektrends." },
      { title: "Datagestuurde Resultaten", desc: "Elke campagne ondersteund door analytics — organische verkeersgroei, PPC-conversieratio's, social media engagement." },
      { title: "Wereldwijd Bereik, Lokale Focus", desc: "Meer dan 250 steden met strategieën die culturele nuances en lokaal zoekgedrag respecteren." },
    ],
    ctaTitle: "Klaar Om Uw Bedrijf Te Laten Groeien?",
    ctaDesc: "Ontvang een gratis digitale marketing audit — SEO, PPC, webdesign, content en social media.",
    ctaButton: "Gratis Groei-Audit Ontvangen",
    cities: "steden",
    city: "stad",
  },
  it: {
    pageTitle: "Sedi",
    metaTitle: "Agenzia di Marketing Digitale Mondiale | SEO, PPC, Web Design",
    metaDesc: "Agenzia di marketing digitale a servizio completo in oltre 250 città. SEO, PPC, web design, sviluppo web, scrittura contenuti e gestione social media.",
    heroTitle: "La Tua",
    heroHighlight: "Agenzia di Marketing Digitale",
    heroDesc: "Aiutiamo le aziende in oltre {count} città a crescere con SEO, gestione PPC, web design e sviluppo, scrittura contenuti e social media marketing.",
    servicesGrid: [
      { label: "SEO & Ottimizzazione GEO", desc: "Domina i risultati di ricerca organici e i motori di risposta AI" },
      { label: "PPC & Pubblicità a Pagamento", desc: "Google Ads, annunci social e campagne orientate alle performance" },
      { label: "Web Design & Sviluppo", desc: "Siti web orientati alla conversione, veloci e mobile-first" },
      { label: "Scrittura Contenuti", desc: "Articoli di blog, landing page e copywriting ottimizzato per SEO" },
      { label: "Gestione Social Media", desc: "Strategie di crescita su Instagram, LinkedIn, Facebook e TikTok" },
      { label: "Analisi & Report", desc: "Insight basati sui dati per misurare il ROI e scalare la crescita" },
    ],
    findTitle: "Trova Servizi di Marketing Digitale",
    findHighlight: "Vicino a Te",
    viewServices: "Vedi servizi",
    servicesSub: "SEO · PPC · Web Design",
    whyTitle: "Perché Sceglierci Come Partner Digitale?",
    whyPoints: [
      { title: "Competenza Digitale Completa", desc: "Da SEO e PPC a sviluppo web, web design, scrittura contenuti e gestione social media — tutto sotto un unico tetto." },
      { title: "Intelligenza del Mercato Locale", desc: "Studiamo i tuoi concorrenti locali, il comportamento del pubblico e le tendenze di ricerca." },
      { title: "Risultati Basati sui Dati", desc: "Ogni campagna supportata da analytics — crescita del traffico organico, tassi di conversione PPC, engagement social." },
      { title: "Portata Globale, Focus Locale", desc: "Oltre 250 città con strategie che rispettano le sfumature culturali e il comportamento di ricerca locale." },
    ],
    ctaTitle: "Pronto a Far Crescere la Tua Azienda?",
    ctaDesc: "Ottieni un audit di marketing digitale gratuito — SEO, PPC, web design, contenuti e social media.",
    ctaButton: "Ottieni Audit Gratuito",
    cities: "città",
    city: "città",
  },
  pt: {
    pageTitle: "Localizações",
    metaTitle: "Agência de Marketing Digital Mundial | SEO, PPC, Web Design",
    metaDesc: "Agência de marketing digital completa em mais de 250 cidades. SEO, PPC, web design, desenvolvimento web, redação de conteúdo e gestão de redes sociais.",
    heroTitle: "Sua",
    heroHighlight: "Agência de Marketing Digital",
    heroDesc: "Ajudamos empresas em mais de {count} cidades a crescer com SEO, gestão de PPC, web design e desenvolvimento, redação de conteúdo e marketing nas redes sociais.",
    servicesGrid: [
      { label: "SEO & Otimização GEO", desc: "Domine os resultados de pesquisa orgânica e motores de resposta IA" },
      { label: "PPC & Publicidade Paga", desc: "Google Ads, anúncios em redes sociais e campanhas orientadas a performance" },
      { label: "Web Design & Desenvolvimento", desc: "Sites focados em conversão, rápidos e mobile-first" },
      { label: "Redação de Conteúdo", desc: "Posts de blog, landing pages e copywriting otimizado para SEO" },
      { label: "Gestão de Redes Sociais", desc: "Estratégias de crescimento no Instagram, LinkedIn, Facebook e TikTok" },
      { label: "Análises & Relatórios", desc: "Insights baseados em dados para medir ROI e escalar o crescimento" },
    ],
    findTitle: "Encontre Serviços de Marketing Digital",
    findHighlight: "Perto de Você",
    viewServices: "Ver serviços",
    servicesSub: "SEO · PPC · Web Design",
    whyTitle: "Por Que Nos Escolher Como Parceiro Digital?",
    whyPoints: [
      { title: "Expertise Digital Completa", desc: "De SEO e PPC a desenvolvimento web, web design, redação de conteúdo e gestão de redes sociais — tudo sob o mesmo teto." },
      { title: "Inteligência do Mercado Local", desc: "Estudamos seus concorrentes locais, comportamento do público e tendências de busca." },
      { title: "Resultados Baseados em Dados", desc: "Cada campanha apoiada por analytics — crescimento de tráfego orgânico, taxas de conversão PPC, engajamento social." },
      { title: "Alcance Global, Foco Local", desc: "Mais de 250 cidades com estratégias que respeitam nuances culturais e comportamento de busca local." },
    ],
    ctaTitle: "Pronto Para Fazer Seu Negócio Crescer?",
    ctaDesc: "Receba uma auditoria de marketing digital gratuita — SEO, PPC, web design, conteúdo e redes sociais.",
    ctaButton: "Receber Auditoria Gratuita",
    cities: "cidades",
    city: "cidade",
  },
  tr: {
    pageTitle: "Konumlar",
    metaTitle: "Dünya Çapında Dijital Pazarlama Ajansı | SEO, PPC, Web Tasarım",
    metaDesc: "250'den fazla şehirde hizmet veren tam kapsamlı dijital pazarlama ajansı. SEO, PPC, web tasarım, web geliştirme, içerik yazarlığı ve sosyal medya yönetimi.",
    heroTitle: "Sizin",
    heroHighlight: "Dijital Pazarlama Ajansınız",
    heroDesc: "{count}'den fazla şehirdeki işletmelere SEO, PPC yönetimi, web tasarım ve geliştirme, içerik yazarlığı ve sosyal medya pazarlaması ile büyüme yardımı sağlıyoruz.",
    servicesGrid: [
      { label: "SEO & GEO Optimizasyonu", desc: "Organik arama sonuçlarında ve yapay zeka yanıt motorlarında üstünlük" },
      { label: "PPC & Ücretli Reklam", desc: "Google Ads, sosyal medya reklamları ve performans odaklı kampanyalar" },
      { label: "Web Tasarım & Geliştirme", desc: "Dönüşüm odaklı, hızlı ve mobil öncelikli web siteleri" },
      { label: "İçerik Yazarlığı", desc: "Blog yazıları, açılış sayfaları ve SEO uyumlu metin yazarlığı" },
      { label: "Sosyal Medya Yönetimi", desc: "Instagram, LinkedIn, Facebook ve TikTok'ta büyüme stratejileri" },
      { label: "Analitik & Raporlama", desc: "ROI ölçümü ve büyüme için veri odaklı içgörüler" },
    ],
    findTitle: "Yakınınızdaki Dijital Pazarlama Hizmetlerini",
    findHighlight: "Bulun",
    viewServices: "Hizmetleri gör",
    servicesSub: "SEO · PPC · Web Tasarım",
    whyTitle: "Neden Dijital Partneriniz Olarak Bizi Seçmelisiniz?",
    whyPoints: [
      { title: "Tam Kapsamlı Dijital Uzmanlık", desc: "SEO ve PPC'den web geliştirme, web tasarım, içerik yazarlığı ve sosyal medya yönetimine — tek çatı altında." },
      { title: "Yerel Pazar Zekası", desc: "Yerel rakiplerinizi, kitle davranışını ve arama trendlerini inceliyoruz." },
      { title: "Veri Odaklı Sonuçlar", desc: "Her kampanya analizlerle desteklenir — organik trafik büyümesi, PPC dönüşüm oranları, sosyal medya etkileşimi." },
      { title: "Küresel Erişim, Yerel Odak", desc: "Kültürel nüansları ve yerel arama davranışını dikkate alan stratejilerle 250'den fazla şehir." },
    ],
    ctaTitle: "İşletmenizi Büyütmeye Hazır mısınız?",
    ctaDesc: "Ücretsiz dijital pazarlama denetimi alın — SEO, PPC, web tasarım, içerik ve sosyal medya.",
    ctaButton: "Ücretsiz Büyüme Denetimi Alın",
    cities: "şehir",
    city: "şehir",
  },
  ja: {
    pageTitle: "拠点",
    metaTitle: "世界中のデジタルマーケティングエージェンシー | SEO、PPC、Webデザイン",
    metaDesc: "250以上の都市でサービスを提供するフルサービスデジタルマーケティングエージェンシー。SEO、PPC、Webデザイン、Web開発、コンテンツ制作、SNS管理。",
    heroTitle: "あなたの",
    heroHighlight: "デジタルマーケティングエージェンシー",
    heroDesc: "{count}以上の都市のビジネスをSEO、PPC管理、Webデザイン・開発、コンテンツ制作、SNSマーケティングで支援します。",
    servicesGrid: [
      { label: "SEO & GEO最適化", desc: "オーガニック検索結果とAI回答エンジンで優位に" },
      { label: "PPC & 有料広告", desc: "Google Ads、SNS広告、パフォーマンス重視キャンペーン" },
      { label: "Webデザイン & 開発", desc: "コンバージョン重視、高速、モバイルファーストのWebサイト" },
      { label: "コンテンツ制作", desc: "ブログ記事、LP、SEO最適化コピーライティング" },
      { label: "SNS管理", desc: "Instagram、LinkedIn、Facebook、TikTokでの成長戦略" },
      { label: "分析 & レポート", desc: "ROI測定と成長のためのデータドリブンインサイト" },
    ],
    findTitle: "お近くのデジタルマーケティングサービスを",
    findHighlight: "見つける",
    viewServices: "サービスを見る",
    servicesSub: "SEO · PPC · Webデザイン",
    whyTitle: "なぜ私たちをデジタルパートナーに選ぶのか？",
    whyPoints: [
      { title: "フルスタックデジタル専門知識", desc: "SEOとPPCからWeb開発、Webデザイン、コンテンツ制作、SNS管理まで — すべてワンストップ。" },
      { title: "ローカル市場インテリジェンス", desc: "地元の競合、ユーザー行動、検索トレンドを分析。" },
      { title: "データドリブンの結果", desc: "すべてのキャンペーンをアナリティクスで支援 — オーガニックトラフィック、PPC CVR、SNSエンゲージメント。" },
      { title: "グローバルリーチ、ローカルフォーカス", desc: "文化的ニュアンスとローカル検索行動を尊重した戦略で250以上の都市をカバー。" },
    ],
    ctaTitle: "ビジネスを成長させる準備はできていますか？",
    ctaDesc: "無料デジタルマーケティング監査を受けましょう — SEO、PPC、Webデザイン、コンテンツ、SNS。",
    ctaButton: "無料成長監査を受ける",
    cities: "都市",
    city: "都市",
  },
  ko: {
    pageTitle: "위치",
    metaTitle: "글로벌 디지털 마케팅 에이전시 | SEO, PPC, 웹 디자인",
    metaDesc: "250개 이상의 도시에서 서비스하는 풀서비스 디지털 마케팅 에이전시. SEO, PPC, 웹 디자인, 웹 개발, 콘텐츠 작성 및 소셜 미디어 관리.",
    heroTitle: "당신의",
    heroHighlight: "디지털 마케팅 에이전시",
    heroDesc: "{count}개 이상의 도시에서 SEO, PPC 관리, 웹 디자인 및 개발, 콘텐츠 작성, 소셜 미디어 마케팅으로 비즈니스 성장을 지원합니다.",
    servicesGrid: [
      { label: "SEO & GEO 최적화", desc: "자연 검색 결과와 AI 응답 엔진에서 우위 확보" },
      { label: "PPC & 유료 광고", desc: "Google Ads, 소셜 미디어 광고 및 성과 중심 캠페인" },
      { label: "웹 디자인 & 개발", desc: "전환 중심, 빠른 속도, 모바일 우선 웹사이트" },
      { label: "콘텐츠 작성", desc: "블로그 포스트, 랜딩 페이지, SEO 최적화 카피라이팅" },
      { label: "소셜 미디어 관리", desc: "Instagram, LinkedIn, Facebook, TikTok 성장 전략" },
      { label: "분석 & 보고", desc: "ROI 측정과 성장을 위한 데이터 기반 인사이트" },
    ],
    findTitle: "가까운 디지털 마케팅 서비스를",
    findHighlight: "찾아보세요",
    viewServices: "서비스 보기",
    servicesSub: "SEO · PPC · 웹 디자인",
    whyTitle: "왜 우리를 디지털 파트너로 선택해야 할까요?",
    whyPoints: [
      { title: "풀스택 디지털 전문성", desc: "SEO와 PPC부터 웹 개발, 웹 디자인, 콘텐츠 작성, 소셜 미디어 관리까지 — 한 지붕 아래 모든 서비스." },
      { title: "로컬 시장 인텔리전스", desc: "지역 경쟁사, 사용자 행동, 검색 트렌드를 분석합니다." },
      { title: "데이터 기반 결과", desc: "모든 캠페인을 분석으로 지원 — 유기적 트래픽 성장, PPC 전환율, 소셜 미디어 참여." },
      { title: "글로벌 도달, 로컬 포커스", desc: "문화적 뉘앙스와 지역 검색 행동을 존중하는 전략으로 250개 이상의 도시를 커버합니다." },
    ],
    ctaTitle: "비즈니스를 성장시킬 준비가 되셨나요?",
    ctaDesc: "무료 디지털 마케팅 감사를 받아보세요 — SEO, PPC, 웹 디자인, 콘텐츠, 소셜 미디어.",
    ctaButton: "무료 성장 감사 받기",
    cities: "도시",
    city: "도시",
  },
  he: {
    pageTitle: "מיקומים",
    metaTitle: "סוכנות שיווק דיגיטלי עולמית | SEO, PPC, עיצוב אתרים",
    metaDesc: "סוכנות שיווק דיגיטלי מלאה ביותר מ-250 ערים. SEO, PPC, עיצוב אתרים, פיתוח אתרים, כתיבת תוכן וניהול מדיה חברתית.",
    heroTitle: "סוכנות",
    heroHighlight: "השיווק הדיגיטלי שלך",
    heroDesc: "אנחנו עוזרים לעסקים ביותר מ-{count} ערים לצמוח עם SEO, ניהול PPC, עיצוב ופיתוח אתרים, כתיבת תוכן ושיווק במדיה חברתית.",
    servicesGrid: [
      { label: "SEO ואופטימיזציה", desc: "שליטה בתוצאות חיפוש אורגניות ומנועי תשובות AI" },
      { label: "PPC ופרסום ממומן", desc: "Google Ads, מודעות במדיה חברתית וקמפיינים מבוססי ביצועים" },
      { label: "עיצוב ופיתוח אתרים", desc: "אתרים מותאמי המרה, מהירים ומותאמי מובייל" },
      { label: "כתיבת תוכן", desc: "פוסטים בבלוג, דפי נחיתה וקופירייטינג מותאם SEO" },
      { label: "ניהול מדיה חברתית", desc: "אסטרטגיות צמיחה באינסטגרם, לינקדאין, פייסבוק וטיקטוק" },
      { label: "אנליטיקס ודוחות", desc: "תובנות מבוססות נתונים למדידת ROI והאצת צמיחה" },
    ],
    findTitle: "מצא שירותי שיווק דיגיטלי",
    findHighlight: "ליד שלך",
    viewServices: "צפה בשירותים",
    servicesSub: "SEO · PPC · עיצוב אתרים",
    whyTitle: "למה לבחור בנו כשותף הדיגיטלי שלך?",
    whyPoints: [
      { title: "מומחיות דיגיטלית מלאה", desc: "מ-SEO ו-PPC ועד פיתוח אתרים, עיצוב אתרים, כתיבת תוכן וניהול מדיה חברתית — הכל תחת קורת גג אחת." },
      { title: "מודיעין שוק מקומי", desc: "אנחנו חוקרים את המתחרים המקומיים, התנהגות קהל היעד ומגמות חיפוש." },
      { title: "תוצאות מבוססות נתונים", desc: "כל קמפיין נתמך באנליטיקס — צמיחת תנועה אורגנית, שיעורי המרה PPC, מעורבות במדיה חברתית." },
      { title: "הגעה גלובלית, מיקוד מקומי", desc: "יותר מ-250 ערים עם אסטרטגיות שמכבדות ניואנסים תרבותיים והתנהגות חיפוש מקומית." },
    ],
    ctaTitle: "מוכן לצמיחה של העסק שלך?",
    ctaDesc: "קבל ביקורת שיווק דיגיטלי חינם — SEO, PPC, עיצוב אתרים, תוכן ומדיה חברתית.",
    ctaButton: "קבל ביקורת צמיחה חינם",
    cities: "ערים",
    city: "עיר",
  },
  da: {
    pageTitle: "Lokationer",
    metaTitle: "Digital Marketing Bureau Worldwide | SEO, PPC, Webdesign",
    metaDesc: "Full-service digital marketing bureau i over 250 byer. SEO, PPC, webdesign, webudvikling, indholdsskrivning og administration af sociale medier.",
    heroTitle: "Dit",
    heroHighlight: "Digitale Marketing Bureau",
    heroDesc: "Vi hjælper virksomheder i over {count} byer med at vokse gennem SEO, PPC-styring, webdesign og webudvikling, indholdsskrivning og markedsføring på sociale medier.",
    servicesGrid: [
      { label: "SEO & GEO-Optimering", desc: "Dominer organiske søgeresultater og AI-drevne svarmaskiner" },
      { label: "PPC & Betalt Annoncering", desc: "Google Ads, sociale medier-annoncer og performancekampagner" },
      { label: "Webdesign & Udvikling", desc: "Konverteringsfokuserede, hurtige og mobilvenlige hjemmesider" },
      { label: "Indholdsproduktion", desc: "Blogindlæg, landingssider og SEO-optimeret tekstforfatning" },
      { label: "Sociale Medier", desc: "Vækststrategier på Instagram, LinkedIn, Facebook og TikTok" },
      { label: "Analyse & Rapportering", desc: "Datadrevne indsigter til måling af ROI og vækst" },
    ],
    findTitle: "Find Digitale Marketing Tjenester",
    findHighlight: "Nær Dig",
    viewServices: "Se tjenester",
    servicesSub: "SEO · PPC · Webdesign",
    whyTitle: "Hvorfor Vælge Os Som Din Digitale Partner?",
    whyPoints: [
      { title: "Fuld Digital Ekspertise", desc: "Fra SEO og PPC til webudvikling, webdesign, indholdsproduktion og administration af sociale medier — alt under ét tag." },
      { title: "Lokal Markedsintelligens", desc: "Vi studerer dine lokale konkurrenter, målgruppeadfærd og søgetendenser." },
      { title: "Datadrevne Resultater", desc: "Hver kampagne understøttet af analyse — organisk trafikvækst, PPC-konverteringsrater, engagement på sociale medier." },
      { title: "Global Rækkevidde, Lokalt Fokus", desc: "Over 250 byer med strategier der respekterer kulturelle nuancer og lokal søgeadfærd." },
    ],
    ctaTitle: "Klar Til At Vækste Din Virksomhed?",
    ctaDesc: "Få en gratis digital marketing audit — SEO, PPC, webdesign, indhold og sociale medier.",
    ctaButton: "Få Gratis Vækst-Audit",
    cities: "byer",
    city: "by",
  },
  sv: {
    pageTitle: "Platser",
    metaTitle: "Digital Marknadsföringsbyrå Världen Över | SEO, PPC, Webbdesign",
    metaDesc: "Fullservice digital marknadsföringsbyrå i över 250 städer. SEO, PPC, webbdesign, webbutveckling, innehållsskapande och hantering av sociala medier.",
    heroTitle: "Din",
    heroHighlight: "Digitala Marknadsföringsbyrå",
    heroDesc: "Vi hjälper företag i över {count} städer att växa genom SEO, PPC-hantering, webbdesign och webbutveckling, innehållsskapande och marknadsföring i sociala medier.",
    servicesGrid: [
      { label: "SEO & GEO-Optimering", desc: "Dominera organiska sökresultat och AI-drivna svarsmotorer" },
      { label: "PPC & Betald Annonsering", desc: "Google Ads, annonser i sociala medier och resultatdrivna kampanjer" },
      { label: "Webbdesign & Utveckling", desc: "Konverteringsfokuserade, snabba och mobilanpassade webbplatser" },
      { label: "Innehållsproduktion", desc: "Bloggposter, landningssidor och SEO-optimerad copywriting" },
      { label: "Sociala Medier", desc: "Tillväxtstrategier på Instagram, LinkedIn, Facebook och TikTok" },
      { label: "Analys & Rapportering", desc: "Datadrivna insikter för att mäta ROI och skala tillväxt" },
    ],
    findTitle: "Hitta Digitala Marknadsföringstjänster",
    findHighlight: "Nära Dig",
    viewServices: "Se tjänster",
    servicesSub: "SEO · PPC · Webbdesign",
    whyTitle: "Varför Välja Oss Som Din Digitala Partner?",
    whyPoints: [
      { title: "Fullstack Digital Expertis", desc: "Från SEO och PPC till webbutveckling, webbdesign, innehållsproduktion och hantering av sociala medier — allt under ett tak." },
      { title: "Lokal Marknadsintelligens", desc: "Vi studerar dina lokala konkurrenter, målgruppsbeteende och söktrender." },
      { title: "Datadrivna Resultat", desc: "Varje kampanj stöds av analys — organisk trafiktillväxt, PPC-konverteringsgrad, engagemang i sociala medier." },
      { title: "Global Räckvidd, Lokalt Fokus", desc: "Över 250 städer med strategier som respekterar kulturella nyanser och lokalt sökbeteende." },
    ],
    ctaTitle: "Redo Att Växa Ditt Företag?",
    ctaDesc: "Få en gratis digital marknadsföringsrevision — SEO, PPC, webbdesign, innehåll och sociala medier.",
    ctaButton: "Få Gratis Tillväxtrevision",
    cities: "städer",
    city: "stad",
  },
  no: {
    pageTitle: "Steder",
    metaTitle: "Digitalt Markedsføringsbyrå Verden Over | SEO, PPC, Webdesign",
    metaDesc: "Fullservice digitalt markedsføringsbyrå i over 250 byer. SEO, PPC, webdesign, webutvikling, innholdsproduksjon og administrasjon av sosiale medier.",
    heroTitle: "Ditt",
    heroHighlight: "Digitale Markedsføringsbyrå",
    heroDesc: "Vi hjelper bedrifter i over {count} byer med å vokse gjennom SEO, PPC-styring, webdesign og webutvikling, innholdsproduksjon og markedsføring i sosiale medier.",
    servicesGrid: [
      { label: "SEO & GEO-Optimalisering", desc: "Dominer organiske søkeresultater og AI-drevne svarmotorer" },
      { label: "PPC & Betalt Annonsering", desc: "Google Ads, sosiale medier-annonser og resultatdrevne kampanjer" },
      { label: "Webdesign & Utvikling", desc: "Konverteringsfokuserte, raske og mobiloptimaliserte nettsider" },
      { label: "Innholdsproduksjon", desc: "Blogginnlegg, landingssider og SEO-optimalisert tekstforfatting" },
      { label: "Sosiale Medier", desc: "Vekststrategier på Instagram, LinkedIn, Facebook og TikTok" },
      { label: "Analyse & Rapportering", desc: "Datadrevne innsikter for å måle ROI og skalere vekst" },
    ],
    findTitle: "Finn Digitale Markedsføringstjenester",
    findHighlight: "Nær Deg",
    viewServices: "Se tjenester",
    servicesSub: "SEO · PPC · Webdesign",
    whyTitle: "Hvorfor Velge Oss Som Din Digitale Partner?",
    whyPoints: [
      { title: "Fullstack Digital Ekspertise", desc: "Fra SEO og PPC til webutvikling, webdesign, innholdsproduksjon og administrasjon av sosiale medier — alt under ett tak." },
      { title: "Lokal Markedsintelligens", desc: "Vi studerer dine lokale konkurrenter, målgruppeatferd og søketrender." },
      { title: "Datadrevne Resultater", desc: "Hver kampanje støttet av analyse — organisk trafikkvekst, PPC-konverteringsrater, engasjement i sosiale medier." },
      { title: "Global Rekkevidde, Lokalt Fokus", desc: "Over 250 byer med strategier som respekterer kulturelle nyanser og lokal søkeatferd." },
    ],
    ctaTitle: "Klar Til Å Vokse Bedriften Din?",
    ctaDesc: "Få en gratis digital markedsføringsrevisjon — SEO, PPC, webdesign, innhold og sosiale medier.",
    ctaButton: "Få Gratis Vekstrevisjon",
    cities: "byer",
    city: "by",
  },
  fi: {
    pageTitle: "Sijainnit",
    metaTitle: "Digitaalinen Markkinointitoimisto Maailmanlaajuisesti | SEO, PPC, Verkkosivusuunnittelu",
    metaDesc: "Täyden palvelun digitaalinen markkinointitoimisto yli 250 kaupungissa. SEO, PPC, verkkosivusuunnittelu, verkkokehitys, sisällöntuotanto ja sosiaalisen median hallinta.",
    heroTitle: "Sinun",
    heroHighlight: "Digitaalinen Markkinointitoimistosi",
    heroDesc: "Autamme yrityksiä yli {count} kaupungissa kasvamaan SEO:n, PPC-hallinnan, verkkosivusuunnittelun ja -kehityksen, sisällöntuotannon ja sosiaalisen median markkinoinnin avulla.",
    servicesGrid: [
      { label: "SEO & GEO-optimointi", desc: "Hallitse orgaanisia hakutuloksia ja tekoälypohjaisia vastausmoottoreita" },
      { label: "PPC & Maksettu mainonta", desc: "Google Ads, sosiaalisen median mainokset ja tuloskeskeiset kampanjat" },
      { label: "Verkkosivusuunnittelu & kehitys", desc: "Konversiolähtöiset, nopeat ja mobiiliystävälliset verkkosivut" },
      { label: "Sisällöntuotanto", desc: "Blogikirjoitukset, laskeutumissivut ja SEO-optimoitu tekstinkirjoitus" },
      { label: "Sosiaalinen media", desc: "Kasvustrategiat Instagramissa, LinkedInissä, Facebookissa ja TikTokissa" },
      { label: "Analytiikka & raportointi", desc: "Datapohjaiset näkemykset ROI:n mittaamiseen ja kasvun skaalaamiseen" },
    ],
    findTitle: "Löydä Digitaalisen Markkinoinnin Palvelut",
    findHighlight: "Läheltäsi",
    viewServices: "Katso palvelut",
    servicesSub: "SEO · PPC · Verkkosivut",
    whyTitle: "Miksi Valita Meidät Digitaaliseksi Kumppaniksesi?",
    whyPoints: [
      { title: "Kattava Digitaalinen Osaaminen", desc: "SEO:sta ja PPC:stä verkkokehitykseen, suunnitteluun, sisällöntuotantoon ja sosiaalisen median hallintaan — kaikki saman katon alla." },
      { title: "Paikallinen Markkinatietämys", desc: "Tutkimme paikallisia kilpailijoitasi, kohdeyleisön käyttäytymistä ja hakutrendejä." },
      { title: "Datapohjaiset Tulokset", desc: "Jokainen kampanja analytiikan tukemana — orgaaninen liikenteen kasvu, PPC-konversioasteet, sosiaalisen median sitoutuminen." },
      { title: "Globaali Ulottuvuus, Paikallinen Fokus", desc: "Yli 250 kaupunkia strategioilla, jotka kunnioittavat kulttuurisia vivahteita ja paikallista hakukäyttäytymistä." },
    ],
    ctaTitle: "Valmis Kasvattamaan Liiketoimintaasi?",
    ctaDesc: "Tilaa ilmainen digitaalisen markkinoinnin auditointi — SEO, PPC, verkkosivut, sisältö ja sosiaalinen media.",
    ctaButton: "Tilaa Ilmainen Kasvuauditointi",
    cities: "kaupunkia",
    city: "kaupunki",
  },
};

// RTL languages
const RTL_LANGS = ["ar", "he"];

const icons = [Search, Megaphone, Monitor, PenTool, Share2, BarChart3];

const LocationsLang = () => {
  const { lang } = useParams<{ lang: string }>();

  if (!lang || !LANG_PREFIXES.includes(lang)) return <NotFound />;

  // Fallback to English-style content for languages without full i18n
  const t = i18n[lang] || i18n.en;
  if (!t) return <NotFound />;

  const isRTL = RTL_LANGS.includes(lang);

  // Get locations for this language
  const langLocations = locationsData.filter(l => l.langPrefix === lang);
  const groupedByCountry: Record<string, typeof langLocations> = {};
  langLocations.forEach(loc => {
    const countryLabel = loc.localCountry || loc.country;
    if (!groupedByCountry[countryLabel]) groupedByCountry[countryLabel] = [];
    groupedByCountry[countryLabel].push(loc);
  });

  const totalCities = langLocations.length;

  useSeoMeta({
    title: t.metaTitle,
    description: t.metaDesc,
    canonical: `https://shahababbasi.com/${lang}/locations`,
  });

  return (
    <Layout>
      <div dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero */}
        <section className="section-padding pb-0">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                {t.heroTitle} <span className="text-gradient">{t.heroHighlight}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.heroDesc.replace("{count}", String(totalCities))}
              </p>
            </motion.div>

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
              {t.servicesGrid.map((svc, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={svc.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="glass rounded-xl p-5 text-center"
                  >
                    <Icon className="h-6 w-6 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-sm mb-1">{svc.label}</h3>
                    <p className="text-xs text-muted-foreground">{svc.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Locations listing */}
        <section className="section-padding pt-0">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t.findTitle} <span className="text-gradient">{t.findHighlight}</span>
            </h2>

            {Object.entries(groupedByCountry)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([country, cities]) => (
                <div key={country} className="mb-12">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {country}
                    <span className="text-sm font-normal text-muted-foreground">
                      ({cities.length} {cities.length === 1 ? t.city : t.cities})
                    </span>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                    {cities.map((loc, i) => {
                      const displayName = loc.localCity || loc.city;
                      const href = `/${lang}/${loc.slug}`;
                      return (
                        <motion.div
                          key={loc.slug}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (i % 10) * 0.02 }}
                        >
                          <Link
                            to={href}
                            className="glass rounded-xl p-4 hover:border-primary/30 transition-all group block"
                          >
                            <h4 className="font-semibold text-sm">{displayName}</h4>
                            <span className="text-xs text-muted-foreground block mb-1">{t.servicesSub}</span>
                            <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                              {t.viewServices} <ArrowRight className={`h-3 w-3 ${isRTL ? "rotate-180" : ""}`} />
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}

            {/* Why choose us */}
            <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">{t.whyTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                {t.whyPoints.map((point, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-foreground mb-2">{point.title}</h4>
                    <p>{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="glass rounded-2xl p-10 md:p-16 glow-primary max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">{t.ctaTitle}</h2>
                <p className="text-muted-foreground mb-6">{t.ctaDesc}</p>
                <Link to="/free-seo-audit">
                  <Button size="lg" className="glow-primary">
                    {t.ctaButton} <ArrowRight className={`${isRTL ? "mr-2 rotate-180" : "ml-2"} h-5 w-5`} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LocationsLang;
