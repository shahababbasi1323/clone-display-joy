import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import type { LocationContent } from "@/data/locationContent";

// Localized service labels
const serviceLabels: Record<string, Record<string, { title: string; desc: string }>> = {
  ar: {
    "technical-seo": { title: "السيو التقني", desc: "تدقيق المواقع، سرعة الأداء، Core Web Vitals، وإصلاح الزحف" },
    "on-page-seo": { title: "السيو الداخلي", desc: "تحسين المحتوى، العلامات الوصفية، الروابط الداخلية، وبنية الصفحات" },
    "link-building": { title: "بناء الروابط", desc: "روابط خلفية عالية الجودة، التواصل، ومنشورات الضيوف" },
    "local-seo": { title: "السيو المحلي", desc: "ملف جوجل التجاري، الاستشهادات المحلية، وإدارة المراجعات" },
    "ecommerce-seo": { title: "سيو التجارة الإلكترونية", desc: "تحسين صفحات المنتجات والفئات والمتاجر الإلكترونية" },
    "geo-optimization": { title: "تحسين GEO", desc: "الظهور في محركات البحث الذكية مثل ChatGPT وPerplexity" },
    "content-strategy": { title: "استراتيجية المحتوى", desc: "كتابة المحتوى، التخطيط التحريري، والتسويق بالمحتوى" },
    "seo-consulting": { title: "استشارات السيو", desc: "تحليل تنافسي، خارطة طريق، وتدريب فرق العمل" },
    "keyword-research": { title: "بحث الكلمات المفتاحية", desc: "تحليل الكلمات المفتاحية، فجوات المنافسين، ونية البحث" },
    "schema-markup": { title: "ترميز Schema", desc: "بيانات منظمة JSON-LD، مقتطفات غنية، وFAQ Schema" },
    "website-speed-optimization": { title: "تحسين سرعة الموقع", desc: "أداء الويب، التحميل البطيء، وتحسين الصور" },
    "international-seo": { title: "السيو الدولي", desc: "Hreflang، المحتوى متعدد اللغات، والاستهداف الجغرافي" },
  },
  fr: {
    "technical-seo": { title: "SEO Technique", desc: "Audit de site, vitesse, Core Web Vitals et correction de crawl" },
    "on-page-seo": { title: "SEO On-Page", desc: "Optimisation de contenu, balises méta, liens internes et structure" },
    "link-building": { title: "Netlinking", desc: "Backlinks de qualité, outreach et articles invités" },
    "local-seo": { title: "SEO Local", desc: "Google Business Profile, citations locales et gestion des avis" },
    "ecommerce-seo": { title: "SEO E-commerce", desc: "Optimisation des pages produits, catégories et boutiques en ligne" },
    "geo-optimization": { title: "Optimisation GEO", desc: "Visibilité dans les moteurs de recherche IA comme ChatGPT" },
    "content-strategy": { title: "Stratégie de Contenu", desc: "Rédaction de contenu, planification éditoriale et content marketing" },
    "seo-consulting": { title: "Conseil SEO", desc: "Analyse concurrentielle, feuille de route et formation d'équipe" },
    "keyword-research": { title: "Recherche de Mots-Clés", desc: "Analyse des mots-clés, gaps concurrentiels et intention de recherche" },
    "schema-markup": { title: "Balisage Schema", desc: "Données structurées JSON-LD, extraits enrichis et FAQ Schema" },
    "website-speed-optimization": { title: "Optimisation de Vitesse", desc: "Performance web, lazy loading et optimisation d'images" },
    "international-seo": { title: "SEO International", desc: "Hreflang, contenu multilingue et ciblage géographique" },
  },
  de: {
    "technical-seo": { title: "Technisches SEO", desc: "Site-Audit, Geschwindigkeit, Core Web Vitals und Crawl-Korrekturen" },
    "on-page-seo": { title: "On-Page SEO", desc: "Content-Optimierung, Meta-Tags, interne Verlinkung und Seitenstruktur" },
    "link-building": { title: "Linkaufbau", desc: "Hochwertige Backlinks, Outreach und Gastbeiträge" },
    "local-seo": { title: "Lokales SEO", desc: "Google Business Profile, lokale Zitate und Bewertungsmanagement" },
    "ecommerce-seo": { title: "E-Commerce SEO", desc: "Produkt- und Kategorienseiten-Optimierung für Online-Shops" },
    "geo-optimization": { title: "GEO-Optimierung", desc: "Sichtbarkeit in KI-Suchmaschinen wie ChatGPT und Perplexity" },
    "content-strategy": { title: "Content-Strategie", desc: "Content-Erstellung, Redaktionsplanung und Content-Marketing" },
    "seo-consulting": { title: "SEO-Beratung", desc: "Wettbewerbsanalyse, Roadmap und Team-Schulung" },
    "keyword-research": { title: "Keyword-Recherche", desc: "Keyword-Analyse, Wettbewerber-Gaps und Suchintention" },
    "schema-markup": { title: "Schema Markup", desc: "Strukturierte Daten JSON-LD, Rich Snippets und FAQ Schema" },
    "website-speed-optimization": { title: "Speed-Optimierung", desc: "Web Performance, Lazy Loading und Bildoptimierung" },
    "international-seo": { title: "Internationales SEO", desc: "Hreflang, mehrsprachige Inhalte und Geo-Targeting" },
  },
  es: {
    "technical-seo": { title: "SEO Técnico", desc: "Auditoría de sitio, velocidad, Core Web Vitals y corrección de rastreo" },
    "on-page-seo": { title: "SEO On-Page", desc: "Optimización de contenido, meta tags, enlaces internos y estructura" },
    "link-building": { title: "Link Building", desc: "Backlinks de calidad, outreach y artículos de invitados" },
    "local-seo": { title: "SEO Local", desc: "Google Business Profile, citas locales y gestión de reseñas" },
    "ecommerce-seo": { title: "SEO E-commerce", desc: "Optimización de páginas de productos, categorías y tiendas online" },
    "geo-optimization": { title: "Optimización GEO", desc: "Visibilidad en motores de búsqueda IA como ChatGPT y Perplexity" },
    "content-strategy": { title: "Estrategia de Contenidos", desc: "Redacción de contenidos, planificación editorial y content marketing" },
    "seo-consulting": { title: "Consultoría SEO", desc: "Análisis competitivo, hoja de ruta y formación de equipo" },
    "keyword-research": { title: "Investigación de Palabras Clave", desc: "Análisis de keywords, gaps competitivos e intención de búsqueda" },
    "schema-markup": { title: "Marcado Schema", desc: "Datos estructurados JSON-LD, rich snippets y FAQ Schema" },
    "website-speed-optimization": { title: "Optimización de Velocidad", desc: "Rendimiento web, lazy loading y optimización de imágenes" },
    "international-seo": { title: "SEO Internacional", desc: "Hreflang, contenido multilingüe y segmentación geográfica" },
  },
  nl: {
    "technical-seo": { title: "Technische SEO", desc: "Site-audit, snelheid, Core Web Vitals en crawl-correcties" },
    "on-page-seo": { title: "On-Page SEO", desc: "Content-optimalisatie, meta-tags, interne links en paginastructuur" },
    "link-building": { title: "Linkbuilding", desc: "Kwalitatieve backlinks, outreach en gastartikelen" },
    "local-seo": { title: "Lokale SEO", desc: "Google Bedrijfsprofiel, lokale citaten en beoordelingsbeheer" },
    "ecommerce-seo": { title: "E-commerce SEO", desc: "Product- en categoriepagina-optimalisatie voor webshops" },
    "geo-optimization": { title: "GEO-Optimalisatie", desc: "Zichtbaarheid in AI-zoekmachines zoals ChatGPT en Perplexity" },
    "content-strategy": { title: "Contentstrategie", desc: "Contentcreatie, redactieplanning en contentmarketing" },
    "seo-consulting": { title: "SEO-Advies", desc: "Concurrentieanalyse, roadmap en teamtraining" },
  },
  it: {
    "technical-seo": { title: "SEO Tecnico", desc: "Audit del sito, velocità, Core Web Vitals e correzione crawl" },
    "on-page-seo": { title: "SEO On-Page", desc: "Ottimizzazione contenuti, meta tag, link interni e struttura" },
    "link-building": { title: "Link Building", desc: "Backlink di qualità, outreach e guest post" },
    "local-seo": { title: "SEO Locale", desc: "Google Business Profile, citazioni locali e gestione recensioni" },
    "ecommerce-seo": { title: "SEO E-commerce", desc: "Ottimizzazione pagine prodotto, categorie e negozi online" },
    "content-strategy": { title: "Strategia dei Contenuti", desc: "Scrittura contenuti, pianificazione editoriale e content marketing" },
    "seo-consulting": { title: "Consulenza SEO", desc: "Analisi competitiva, roadmap e formazione del team" },
  },
  pt: {
    "technical-seo": { title: "SEO Técnico", desc: "Auditoria de site, velocidade, Core Web Vitals e correção de rastreamento" },
    "on-page-seo": { title: "SEO On-Page", desc: "Otimização de conteúdo, meta tags, links internos e estrutura" },
    "link-building": { title: "Link Building", desc: "Backlinks de qualidade, outreach e guest posts" },
    "local-seo": { title: "SEO Local", desc: "Google Business Profile, citações locais e gestão de avaliações" },
    "ecommerce-seo": { title: "SEO E-commerce", desc: "Otimização de páginas de produtos, categorias e lojas online" },
    "content-strategy": { title: "Estratégia de Conteúdo", desc: "Redação de conteúdo, planejamento editorial e content marketing" },
    "seo-consulting": { title: "Consultoria SEO", desc: "Análise competitiva, roadmap e treinamento de equipe" },
  },
  tr: {
    "technical-seo": { title: "Teknik SEO", desc: "Site denetimi, hız, Core Web Vitals ve tarama düzeltmeleri" },
    "on-page-seo": { title: "Sayfa İçi SEO", desc: "İçerik optimizasyonu, meta etiketler, iç linkler ve yapı" },
    "link-building": { title: "Link İnşası", desc: "Kaliteli backlink, outreach ve konuk yazıları" },
    "local-seo": { title: "Yerel SEO", desc: "Google İşletme Profili, yerel alıntılar ve yorum yönetimi" },
    "content-strategy": { title: "İçerik Stratejisi", desc: "İçerik yazarlığı, editoryal planlama ve içerik pazarlaması" },
  },
  ja: {
    "technical-seo": { title: "テクニカルSEO", desc: "サイト監査、速度、Core Web Vitals、クロール修正" },
    "on-page-seo": { title: "オンページSEO", desc: "コンテンツ最適化、メタタグ、内部リンク、ページ構造" },
    "link-building": { title: "リンクビルディング", desc: "高品質なバックリンク、アウトリーチ、ゲスト投稿" },
    "local-seo": { title: "ローカルSEO", desc: "Googleビジネスプロフィール、ローカル引用、レビュー管理" },
    "content-strategy": { title: "コンテンツ戦略", desc: "コンテンツ制作、編集計画、コンテンツマーケティング" },
  },
  ko: {
    "technical-seo": { title: "기술 SEO", desc: "사이트 감사, 속도, Core Web Vitals, 크롤링 수정" },
    "on-page-seo": { title: "온페이지 SEO", desc: "콘텐츠 최적화, 메타 태그, 내부 링크, 페이지 구조" },
    "link-building": { title: "링크 빌딩", desc: "고품질 백링크, 아웃리치, 게스트 포스트" },
    "local-seo": { title: "로컬 SEO", desc: "Google 비즈니스 프로필, 로컬 인용, 리뷰 관리" },
    "content-strategy": { title: "콘텐츠 전략", desc: "콘텐츠 작성, 편집 계획, 콘텐츠 마케팅" },
  },
  he: {
    "technical-seo": { title: "SEO טכני", desc: "ביקורת אתר, מהירות, Core Web Vitals ותיקוני סריקה" },
    "on-page-seo": { title: "SEO בדף", desc: "אופטימיזציית תוכן, תגיות מטא, קישורים פנימיים ומבנה" },
    "link-building": { title: "בניית קישורים", desc: "באקלינקים איכותיים, אאוטריץ' ופוסטים כאורח" },
    "local-seo": { title: "SEO מקומי", desc: "פרופיל עסקי בגוגל, ציטוטים מקומיים וניהול ביקורות" },
    "content-strategy": { title: "אסטרטגיית תוכן", desc: "כתיבת תוכן, תכנון עריכתי ושיווק תוכן" },
  },
};

const learnMoreLabels: Record<string, string> = {
  ar: "اعرف المزيد", fr: "En savoir plus", de: "Mehr erfahren", es: "Saber más",
  nl: "Meer leren", it: "Scopri di più", pt: "Saiba mais", tr: "Daha fazla",
  ja: "詳しく見る", ko: "더 알아보기", he: "למידע נוסף",
};

interface Props {
  content: LocationContent;
  lang?: string;
}

const LocationServicesInterlink = ({ content, lang = "en" }: Props) => {
  const langLabels = serviceLabels[lang];
  const learnMore = learnMoreLabels[lang] || "Learn more";

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Wrench className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">{content.servicesInterlinkTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesData.slice(0, 12).map((svc, i) => {
            const SvcIcon = svc.icon;
            const localized = langLabels?.[svc.slug];
            const title = localized?.title || svc.title;
            const desc = localized?.desc || svc.heroDescription;

            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <Link
                  to={`/services/${svc.slug}`}
                  className="glass rounded-xl p-5 flex items-start gap-4 hover:border-primary/30 transition-all group block h-full"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <SvcIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm mb-1">{title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{desc}</p>
                    <span className="text-xs text-primary flex items-center gap-1 mt-2">
                      {learnMore} <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationServicesInterlink;
