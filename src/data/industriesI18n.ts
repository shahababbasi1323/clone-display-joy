import {
  Heart, Scale, Home, Building2, UtensilsCrossed, Code, GraduationCap,
  ShoppingBag, Car, Sparkles, Camera, Plane, Landmark, Dumbbell, Stethoscope,
  Wrench, Store, Dog, Scissors, Hammer, Truck, Globe, Zap,
  type LucideIcon
} from "lucide-react";
import type { IndustryData, IndustryFaq } from "./industriesData";

export type SupportedIndustryLang = "ar" | "fr" | "de" | "es" | "nl";

/* ───────────────────────── UI translations ───────────────────────── */
export interface IndustryI18nUI {
  hubTitle: string;
  hubHighlight: string;
  hubDescription: string;
  learnMore: string;
  dontSeeTitle: string;
  dontSeeDesc: string;
  ctaButton: string;
  servicesCount: (n: number) => string;
  challengesTitle: (s: string) => string;
  approachTitle: (s: string) => string;
  keywordsTitle: (s: string) => string;
  resultsTitle: (s: string) => string;
  faqTitle: (s: string) => string;
  readyCta: (s: string) => string;
  freeAudit: (s: string) => string;
  talkExpert: string;
  viewPackages: string;
  breadcrumbHome: string;
  breadcrumbIndustries: string;
  dir: "ltr" | "rtl";
}

export const industryI18nUI: Record<SupportedIndustryLang, IndustryI18nUI> = {
  ar: {
    hubTitle: "سيو لكل",
    hubHighlight: "قطاع",
    hubDescription: "استراتيجيات سيو متخصصة مصممة خصيصًا للتحديات والفرص الفريدة لقطاعك. نخدم أكثر من 150 قطاعًا حول العالم.",
    learnMore: "اعرف المزيد",
    dontSeeTitle: "لا ترى قطاعك؟",
    dontSeeDesc: "نعمل مع شركات في كل القطاعات. تواصل معنا للحصول على استراتيجية سيو مخصصة لسوقك.",
    ctaButton: "استشارة مجانية",
    servicesCount: (n) => `${n} خدمة سيو متخصصة`,
    challengesTitle: (s) => `تحديات قطاع ${s}`,
    approachTitle: (s) => `نهجنا في سيو ${s}`,
    keywordsTitle: (s) => `الكلمات المفتاحية المستهدفة لـ ${s}`,
    resultsTitle: (s) => `النتائج التي نحققها لـ ${s}`,
    faqTitle: (s) => `الأسئلة الشائعة حول سيو ${s}`,
    readyCta: (s) => `هل أنت مستعد لتنمية أعمالك في ${s}؟`,
    freeAudit: (s) => `تدقيق سيو مجاني لـ ${s}`,
    talkExpert: "تحدث مع خبير",
    viewPackages: "عرض باقات السيو",
    breadcrumbHome: "الرئيسية",
    breadcrumbIndustries: "القطاعات",
    dir: "rtl",
  },
  fr: {
    hubTitle: "SEO pour Chaque",
    hubHighlight: "Secteur",
    hubDescription: "Stratégies SEO spécialisées adaptées aux défis et opportunités uniques de votre secteur. Plus de 150 secteurs servis dans le monde.",
    learnMore: "En savoir plus",
    dontSeeTitle: "Votre secteur n'apparaît pas ?",
    dontSeeDesc: "Nous travaillons avec des entreprises de tous secteurs. Contactez-nous pour une stratégie SEO personnalisée.",
    ctaButton: "Consultation Gratuite",
    servicesCount: (n) => `${n} services SEO spécialisés`,
    challengesTitle: (s) => `Défis du Secteur ${s}`,
    approachTitle: (s) => `Notre Approche SEO ${s}`,
    keywordsTitle: (s) => `Mots-Clés Ciblés pour ${s}`,
    resultsTitle: (s) => `Résultats pour ${s}`,
    faqTitle: (s) => `FAQ SEO ${s}`,
    readyCta: (s) => `Prêt à développer votre activité ${s} ?`,
    freeAudit: (s) => `Audit SEO Gratuit ${s}`,
    talkExpert: "Parler à un Expert",
    viewPackages: "Voir les Forfaits SEO",
    breadcrumbHome: "Accueil",
    breadcrumbIndustries: "Secteurs",
    dir: "ltr",
  },
  de: {
    hubTitle: "SEO für Jede",
    hubHighlight: "Branche",
    hubDescription: "Spezialisierte SEO-Strategien, die auf die einzigartigen Herausforderungen und Chancen Ihrer Branche zugeschnitten sind. Über 150 Branchen weltweit betreut.",
    learnMore: "Mehr erfahren",
    dontSeeTitle: "Ihre Branche nicht dabei?",
    dontSeeDesc: "Wir arbeiten mit Unternehmen aller Branchen. Kontaktieren Sie uns für eine maßgeschneiderte SEO-Strategie.",
    ctaButton: "Kostenlose Beratung",
    servicesCount: (n) => `${n} spezialisierte SEO-Dienste`,
    challengesTitle: (s) => `Herausforderungen der ${s}-Branche`,
    approachTitle: (s) => `Unser ${s} SEO-Ansatz`,
    keywordsTitle: (s) => `Ziel-Keywords für ${s}`,
    resultsTitle: (s) => `Ergebnisse für ${s}`,
    faqTitle: (s) => `FAQ ${s} SEO`,
    readyCta: (s) => `Bereit, Ihr ${s}-Geschäft auszubauen?`,
    freeAudit: (s) => `Kostenloses SEO-Audit ${s}`,
    talkExpert: "Experten Sprechen",
    viewPackages: "SEO-Pakete Ansehen",
    breadcrumbHome: "Startseite",
    breadcrumbIndustries: "Branchen",
    dir: "ltr",
  },
  es: {
    hubTitle: "SEO para Cada",
    hubHighlight: "Industria",
    hubDescription: "Estrategias SEO especializadas adaptadas a los desafíos y oportunidades únicos de tu industria. Más de 150 industrias atendidas en todo el mundo.",
    learnMore: "Saber más",
    dontSeeTitle: "¿No ves tu industria?",
    dontSeeDesc: "Trabajamos con empresas de todas las industrias. Contáctanos para una estrategia SEO personalizada.",
    ctaButton: "Consulta Gratuita",
    servicesCount: (n) => `${n} servicios SEO especializados`,
    challengesTitle: (s) => `Desafíos del Sector ${s}`,
    approachTitle: (s) => `Nuestro Enfoque SEO ${s}`,
    keywordsTitle: (s) => `Palabras Clave para ${s}`,
    resultsTitle: (s) => `Resultados para ${s}`,
    faqTitle: (s) => `FAQ SEO ${s}`,
    readyCta: (s) => `¿Listo para hacer crecer tu negocio ${s}?`,
    freeAudit: (s) => `Auditoría SEO Gratuita ${s}`,
    talkExpert: "Hablar con un Experto",
    viewPackages: "Ver Paquetes SEO",
    breadcrumbHome: "Inicio",
    breadcrumbIndustries: "Industrias",
    dir: "ltr",
  },
  nl: {
    hubTitle: "SEO voor Elke",
    hubHighlight: "Branche",
    hubDescription: "Gespecialiseerde SEO-strategieën op maat van de unieke uitdagingen en kansen van uw branche. Meer dan 150 branches wereldwijd bediend.",
    learnMore: "Meer info",
    dontSeeTitle: "Uw branche niet gevonden?",
    dontSeeDesc: "Wij werken met bedrijven uit alle branches. Neem contact op voor een SEO-strategie op maat.",
    ctaButton: "Gratis Adviesgesprek",
    servicesCount: (n) => `${n} gespecialiseerde SEO-diensten`,
    challengesTitle: (s) => `Uitdagingen van de ${s}-Branche`,
    approachTitle: (s) => `Onze ${s} SEO-Aanpak`,
    keywordsTitle: (s) => `Doelzoekwoorden voor ${s}`,
    resultsTitle: (s) => `Resultaten voor ${s}`,
    faqTitle: (s) => `FAQ ${s} SEO`,
    readyCta: (s) => `Klaar om uw ${s}-bedrijf te laten groeien?`,
    freeAudit: (s) => `Gratis SEO-Audit ${s}`,
    talkExpert: "Spreek een Expert",
    viewPackages: "SEO-Pakketten Bekijken",
    breadcrumbHome: "Home",
    breadcrumbIndustries: "Branches",
    dir: "ltr",
  },
};

/* ───────────── Category translations ───────────── */
export const categoryI18n: Record<SupportedIndustryLang, Record<string, string>> = {
  ar: {
    "Healthcare & Medical": "الرعاية الصحية والطبية",
    "Legal & Professional Services": "الخدمات القانونية والمهنية",
    "Home Services & Trades": "الخدمات المنزلية والحرفية",
    "Real Estate & Property": "العقارات والممتلكات",
    "Food & Hospitality": "الأغذية والضيافة",
    "Technology & SaaS": "التكنولوجيا والبرمجيات",
    "Education & Training": "التعليم والتدريب",
    "Ecommerce & Retail": "التجارة الإلكترونية والتجزئة",
    "Automotive & Transportation": "السيارات والنقل",
    "Beauty & Wellness": "الجمال والعناية",
    "Finance & Banking": "المالية والبنوك",
    "Fitness & Sports": "اللياقة والرياضة",
  },
  fr: {
    "Healthcare & Medical": "Santé & Médical",
    "Legal & Professional Services": "Juridique & Services Professionnels",
    "Home Services & Trades": "Services à Domicile & Artisanat",
    "Real Estate & Property": "Immobilier",
    "Food & Hospitality": "Restauration & Hôtellerie",
    "Technology & SaaS": "Technologie & SaaS",
    "Education & Training": "Éducation & Formation",
    "Ecommerce & Retail": "E-commerce & Commerce",
    "Automotive & Transportation": "Automobile & Transport",
    "Beauty & Wellness": "Beauté & Bien-être",
    "Finance & Banking": "Finance & Banque",
    "Fitness & Sports": "Fitness & Sport",
  },
  de: {
    "Healthcare & Medical": "Gesundheit & Medizin",
    "Legal & Professional Services": "Recht & Professionelle Dienste",
    "Home Services & Trades": "Hausdienste & Handwerk",
    "Real Estate & Property": "Immobilien",
    "Food & Hospitality": "Gastronomie & Hotellerie",
    "Technology & SaaS": "Technologie & SaaS",
    "Education & Training": "Bildung & Weiterbildung",
    "Ecommerce & Retail": "E-Commerce & Einzelhandel",
    "Automotive & Transportation": "Automobil & Transport",
    "Beauty & Wellness": "Schönheit & Wellness",
    "Finance & Banking": "Finanzen & Banken",
    "Fitness & Sports": "Fitness & Sport",
  },
  es: {
    "Healthcare & Medical": "Salud y Medicina",
    "Legal & Professional Services": "Legal y Servicios Profesionales",
    "Home Services & Trades": "Servicios para el Hogar",
    "Real Estate & Property": "Bienes Raíces",
    "Food & Hospitality": "Restaurantes y Hostelería",
    "Technology & SaaS": "Tecnología y SaaS",
    "Education & Training": "Educación y Formación",
    "Ecommerce & Retail": "E-commerce y Retail",
    "Automotive & Transportation": "Automotriz y Transporte",
    "Beauty & Wellness": "Belleza y Bienestar",
    "Finance & Banking": "Finanzas y Banca",
    "Fitness & Sports": "Fitness y Deportes",
  },
  nl: {
    "Healthcare & Medical": "Gezondheidszorg & Medisch",
    "Legal & Professional Services": "Juridisch & Zakelijke Diensten",
    "Home Services & Trades": "Huisdiensten & Ambachten",
    "Real Estate & Property": "Vastgoed",
    "Food & Hospitality": "Horeca & Gastvrijheid",
    "Technology & SaaS": "Technologie & SaaS",
    "Education & Training": "Onderwijs & Training",
    "Ecommerce & Retail": "E-commerce & Retail",
    "Automotive & Transportation": "Automobiel & Transport",
    "Beauty & Wellness": "Schoonheid & Wellness",
    "Finance & Banking": "Financiën & Bankieren",
    "Fitness & Sports": "Fitness & Sport",
  },
};

/* ───────────── Factory helpers per language ───────────── */

const defaultCase = [
  { metric: "350%", label: "Organic Traffic Growth" },
  { metric: "180+", label: "Keywords Page 1" },
  { metric: "65%", label: "Lead Increase" },
  { metric: "4.8x", label: "ROI" },
];
const defaultLocs = ["islamabad", "dubai", "london", "new-york"];
const defaultServices = ["local-seo", "google-business-profile", "content-strategy"];

// Arabic case study
const arCase = [
  { metric: "٣٥٠٪", label: "نمو الزيارات العضوية" },
  { metric: "+١٨٠", label: "كلمات مفتاحية صفحة 1" },
  { metric: "٦٥٪", label: "زيادة العملاء المحتملين" },
  { metric: "٤.٨x", label: "عائد الاستثمار" },
];

type MiniEntry = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDesc: string;
  icon: LucideIcon;
  category: string;
  heroHighlight: string;
  heroDesc: string;
  keywords: string[];
  faqs: IndustryFaq[];
  challenges: { title: string; desc: string }[];
  approach: { title: string; desc: string }[];
};

const toIndustryData = (e: MiniEntry, heroTitle: string, caseStudy: { metric: string; label: string }[]): IndustryData => ({
  slug: e.slug,
  title: e.title,
  shortTitle: e.shortTitle,
  metaTitle: e.metaTitle,
  metaDescription: e.metaDesc,
  icon: e.icon,
  category: e.category,
  heroTitle,
  heroHighlight: e.heroHighlight,
  heroDescription: e.heroDesc,
  challenges: e.challenges,
  approach: e.approach,
  keywords: e.keywords,
  caseStudy,
  faqs: e.faqs,
  relatedServices: defaultServices,
  relatedLocations: defaultLocs,
});

/* ═══════════════════════════════════════════════════════
   ARABIC INDUSTRIES — Top 35 high-demand in MENA/Gulf
   ═══════════════════════════════════════════════════════ */

const arIndustries: MiniEntry[] = [
  { slug: "real-estate-seo", title: "سيو العقارات", shortTitle: "العقارات", metaTitle: "سيو العقارات - تسويق رقمي للشركات العقارية", metaDesc: "خدمات سيو متخصصة للشركات العقارية. زيادة الظهور في محركات البحث وجذب المشترين والمستأجرين.", icon: Building2, category: "Real Estate & Property", heroHighlight: "العقارات", heroDesc: "اجذب المزيد من المشترين والمستأجرين مع استراتيجيات سيو مصممة خصيصًا لقطاع العقارات في الشرق الأوسط.",
    keywords: ["عقارات للبيع", "شقق للإيجار", "فلل للبيع", "عقارات دبي", "شقق الرياض", "أراضي للبيع", "استثمار عقاري", "وكيل عقاري", "مشاريع سكنية", "عقارات تجارية", "تمويل عقاري", "شقق مفروشة", "مكاتب للإيجار"],
    faqs: [
      { q: "كيف يساعد السيو شركات العقارات؟", a: "السيو يضع شركتك العقارية في أعلى نتائج البحث عندما يبحث الناس عن شقق للبيع أو فلل للإيجار، مما يجذب عملاء محتملين مؤهلين." },
      { q: "كم من الوقت يستغرق ترتيب موقع عقاري؟", a: "عادة ما تظهر النتائج الأولية خلال 2-3 أشهر مع تحسينات كبيرة في 4-6 أشهر. قطاع العقارات تنافسي ويحتاج استراتيجية طويلة المدى." },
      { q: "هل تساعدون في تحسين بطاقة جوجل للأعمال؟", a: "نعم، تحسين Google Business Profile أمر حاسم للشركات العقارية لتظهر في نتائج البحث المحلية وخرائط جوجل." },
      { q: "ما الكلمات المفتاحية المهمة للعقارات؟", a: "نستهدف كلمات مثل 'شقق للبيع'، 'فلل للإيجار'، 'عقارات [اسم المدينة]'، وكلمات طويلة مثل 'شقة غرفتين بالتقسيط'." },
      { q: "هل تقدمون خدمات سيو للمطورين العقاريين؟", a: "نعم، نقدم حلول سيو شاملة للمطورين العقاريين تشمل تحسين صفحات المشاريع والمحتوى التسويقي." },
    ],
    challenges: [
      { title: "منافسة عالية", desc: "قطاع العقارات من أكثر القطاعات تنافسية في البحث الرقمي بالمنطقة العربية." },
      { title: "بحث جغرافي محدد", desc: "العملاء يبحثون بأسماء أحياء ومدن محددة مما يتطلب محتوى محلي متخصص." },
      { title: "محتوى بصري ثقيل", desc: "مواقع العقارات تحتاج صور وفيديوهات عالية الجودة مع الحفاظ على سرعة الموقع." },
      { title: "تحديث مستمر", desc: "القوائم العقارية تتغير باستمرار مما يتطلب إدارة فعالة للمحتوى والفهرسة." },
    ],
    approach: [
      { title: "سيو محلي متقدم", desc: "نحسن ظهورك في كل منطقة وحي تخدمه مع صفحات مخصصة لكل موقع." },
      { title: "تحسين تقني", desc: "نضمن سرعة الموقع وتوافقه مع الجوال وتطبيق البيانات المنظمة لقوائم العقارات." },
      { title: "محتوى عقاري متخصص", desc: "ننشئ أدلة أحياء ومقالات سوقية وصفحات مشاريع محسنة لمحركات البحث." },
      { title: "بناء الروابط", desc: "نبني روابط من بوابات عقارية ومواقع أخبار وأدلة أعمال محلية." },
    ],
  },
  { slug: "healthcare-seo-ar", title: "سيو الرعاية الصحية", shortTitle: "الرعاية الصحية", metaTitle: "سيو للمستشفيات والعيادات - تسويق طبي رقمي", metaDesc: "خدمات سيو متخصصة للمستشفيات والعيادات والمراكز الطبية. جذب المرضى وتحسين الظهور في البحث.", icon: Heart, category: "Healthcare & Medical", heroHighlight: "الرعاية الصحية", heroDesc: "اجذب المزيد من المرضى مع استراتيجيات سيو متوافقة مع المعايير الطبية ومحسنة لمحركات البحث العربية.",
    keywords: ["مستشفى قريب", "عيادة طبية", "أفضل دكتور", "موعد طبي", "عيادة أسنان", "طبيب عيون", "جراح تجميل", "مركز طبي", "رعاية صحية", "طبيب أطفال", "عيادة نسائية", "أشعة وتحاليل"],
    faqs: [
      { q: "كيف يختلف سيو الرعاية الصحية عن السيو العادي؟", a: "سيو الرعاية الصحية يتطلب التوافق مع معايير E-E-A-T الطبية ومحتوى دقيق طبيًا مع تحسين للبحث المحلي." },
      { q: "هل يمكن أن يساعد السيو في جذب مرضى جدد؟", a: "نعم، أغلب المرضى يبحثون عبر الإنترنت قبل اختيار طبيب أو مستشفى. الظهور في النتائج الأولى يزيد عدد المرضى بشكل كبير." },
      { q: "كم تكلفة سيو المستشفيات؟", a: "تبدأ باقاتنا من 500 دولار شهريًا حسب حجم المنشأة الطبية ومستوى المنافسة في منطقتك." },
      { q: "هل تكتبون محتوى طبي؟", a: "نعم، ننشئ محتوى طبي دقيق ومراجع من متخصصين يتوافق مع معايير جوجل للمحتوى الصحي." },
      { q: "هل تحسنون الظهور في خرائط جوجل؟", a: "بالتأكيد، تحسين Google Business Profile وإدارة المراجعات أمر أساسي للعيادات والمستشفيات." },
    ],
    challenges: [
      { title: "معايير E-E-A-T الصارمة", desc: "جوجل يطبق معايير جودة أعلى على المحتوى الصحي (YMYL)." },
      { title: "منافسة محلية شديدة", desc: "عدد كبير من العيادات والمستشفيات تتنافس على نفس الكلمات المفتاحية المحلية." },
      { title: "تعدد التخصصات", desc: "المنشآت الطبية تقدم خدمات متعددة تحتاج كل منها صفحة محسنة." },
      { title: "المراجعات والسمعة", desc: "المرضى يعتمدون بشكل كبير على المراجعات عند اختيار مقدم الرعاية الصحية." },
    ],
    approach: [
      { title: "محتوى طبي موثوق", desc: "ننشئ محتوى طبي دقيق يبني الثقة مع المرضى ومحركات البحث." },
      { title: "سيو محلي للعيادات", desc: "نحسن ظهورك في البحث المحلي وخرائط جوجل لجذب مرضى من منطقتك." },
      { title: "بيانات منظمة طبية", desc: "نطبق Schema markup للأطباء والعيادات والخدمات الطبية." },
      { title: "إدارة المراجعات", desc: "نساعد في بناء وإدارة المراجعات الإيجابية على جوجل ومنصات الصحة." },
    ],
  },
  { slug: "restaurant-seo-ar", title: "سيو المطاعم", shortTitle: "المطاعم", metaTitle: "سيو للمطاعم والمقاهي - تسويق رقمي للأغذية", metaDesc: "خدمات سيو متخصصة للمطاعم والمقاهي. زيادة الحجوزات والطلبات عبر تحسين الظهور في محركات البحث.", icon: UtensilsCrossed, category: "Food & Hospitality", heroHighlight: "المطاعم", heroDesc: "زيادة حجوزات مطعمك وطلبات التوصيل مع استراتيجيات سيو مصممة لقطاع المطاعم.",
    keywords: ["مطعم قريب", "أفضل مطاعم", "توصيل طعام", "حجز مطعم", "مطعم عربي", "مطعم إيطالي", "كافيه قريب", "بوفيه مفتوح", "مطعم عائلي", "مطعم سمك", "برجر", "مشاوي"],
    faqs: [
      { q: "هل يحتاج مطعمي للسيو؟", a: "نعم، 90% من الناس يبحثون عن مطاعم عبر الإنترنت قبل الزيارة. السيو يضمن ظهورك في أعلى النتائج." },
      { q: "كيف تحسنون ظهور المطعم في خرائط جوجل؟", a: "نحسن بطاقة جوجل للأعمال بالصور والقائمة وساعات العمل وندير المراجعات بفعالية." },
      { q: "هل تساعدون في تحسين الطلبات عبر الإنترنت؟", a: "نعم، نحسن صفحات القائمة والطلب الإلكتروني لزيادة التحويلات." },
      { q: "ما أهمية المراجعات للمطاعم؟", a: "المراجعات عامل ترتيب رئيسي في البحث المحلي. مطعم بتقييم 4.5+ يحصل على زيارات أكثر بكثير." },
      { q: "كم تكلفة سيو المطاعم؟", a: "تبدأ باقاتنا من 400 دولار شهريًا وتشمل تحسين البحث المحلي وإدارة المراجعات." },
    ],
    challenges: [
      { title: "بحث محلي مكثف", desc: "معظم عمليات بحث المطاعم محلية وتحتاج تحسين جغرافي دقيق." },
      { title: "تنافس على المراجعات", desc: "التقييمات والمراجعات تؤثر بشكل مباشر على اختيار العملاء." },
      { title: "محتوى بصري", desc: "صور الأطعمة عالية الجودة ضرورية لجذب العملاء." },
      { title: "تحديث القوائم", desc: "القوائم والعروض تتغير باستمرار وتحتاج تحديث مستمر." },
    ],
    approach: [
      { title: "تحسين خرائط جوجل", desc: "نحسن بطاقة جوجل بالكامل مع صور احترافية وقائمة محدثة." },
      { title: "سيو القائمة", desc: "نحسن صفحات القائمة والأطباق لاستهداف عمليات البحث المحددة." },
      { title: "إدارة المراجعات", desc: "نبني استراتيجية للحصول على مراجعات إيجابية والرد على التعليقات." },
      { title: "محتوى محلي", desc: "ننشئ محتوى عن المطبخ والعروض والمناسبات لجذب عملاء جدد." },
    ],
  },
  { slug: "beauty-salon-seo-ar", title: "سيو صالونات التجميل", shortTitle: "صالونات التجميل", metaTitle: "سيو لصالونات التجميل والسبا", metaDesc: "خدمات سيو للصالونات ومراكز التجميل. جذب عملاء جدد وزيادة الحجوزات.", icon: Sparkles, category: "Beauty & Wellness", heroHighlight: "صالونات التجميل", heroDesc: "زد حجوزات صالونك مع سيو متخصص يستهدف عملاء يبحثون عن خدمات التجميل في منطقتك.",
    keywords: ["صالون تجميل قريب", "كوافير", "مكياج عروس", "سبا", "عناية بالبشرة", "تصفيف شعر", "أظافر", "ليزر إزالة الشعر", "بوتكس", "فيلر", "صالون نسائي", "حلاق رجالي"],
    faqs: [
      { q: "كيف يساعد السيو صالون التجميل؟", a: "السيو يظهر صالونك في أعلى النتائج عندما يبحث الناس عن خدمات تجميل في منطقتك." },
      { q: "ما الكلمات المفتاحية الأهم لصالونات التجميل؟", a: "كلمات مثل 'صالون تجميل قريب'، 'كوافير [اسم الحي]'، و'مكياج عروس' من أكثر الكلمات بحثًا." },
      { q: "هل المراجعات مهمة لصالونات التجميل؟", a: "جدًا! العملاء يقرأون المراجعات ويشاهدون الصور قبل اختيار الصالون." },
      { q: "كيف تزيدون الحجوزات الإلكترونية؟", a: "نحسن موقعك لتجربة حجز سهلة ونستهدف الكلمات المفتاحية عالية النية الشرائية." },
      { q: "هل تساعدون في التسويق على انستغرام أيضًا؟", a: "تركيزنا الأساسي على السيو لكننا نحسن المحتوى ليعمل عبر جميع المنصات." },
    ],
    challenges: [
      { title: "منافسة محلية كبيرة", desc: "عدد كبير من الصالونات يتنافس في كل منطقة." },
      { title: "اعتماد على البصريات", desc: "العملاء يريدون رؤية نتائج قبل الحجز." },
      { title: "موسمية الطلب", desc: "الطلب يرتفع في مواسم الأعراس والمناسبات." },
      { title: "تنوع الخدمات", desc: "كل خدمة تحتاج صفحة محسنة مستقلة." },
    ],
    approach: [
      { title: "صفحات خدمات محسنة", desc: "ننشئ صفحة مخصصة لكل خدمة تجميل مع محتوى وصور محسنة." },
      { title: "معرض أعمال مُحسّن", desc: "نحسن معرض الأعمال بالنصوص البديلة والبيانات المنظمة." },
      { title: "سيو محلي", desc: "نحسن ظهورك في خرائط جوجل ونتائج البحث المحلية." },
      { title: "استراتيجية مراجعات", desc: "نبني نظام للحصول على مراجعات إيجابية باستمرار." },
    ],
  },
  { slug: "ecommerce-seo-ar", title: "سيو التجارة الإلكترونية", shortTitle: "التجارة الإلكترونية", metaTitle: "سيو للمتاجر الإلكترونية - تسويق أونلاين", metaDesc: "خدمات سيو للمتاجر الإلكترونية. زيادة المبيعات والزيارات العضوية لمتجرك.", icon: ShoppingBag, category: "Ecommerce & Retail", heroHighlight: "التجارة الإلكترونية", heroDesc: "زد مبيعات متجرك الإلكتروني مع سيو يستهدف المشترين المستعدين للشراء.",
    keywords: ["تسوق أونلاين", "متجر إلكتروني", "شراء أونلاين", "أفضل سعر", "عروض وخصومات", "توصيل مجاني", "منتجات أصلية", "سيو شوبيفاي", "سيو ووكومرس", "تسويق متاجر إلكترونية"],
    faqs: [
      { q: "كيف يزيد السيو مبيعات متجري الإلكتروني؟", a: "السيو يجلب زوار مؤهلين يبحثون عن منتجاتك بالتحديد، مما يؤدي لمعدلات تحويل أعلى من الإعلانات المدفوعة." },
      { q: "أي منصة أفضل للسيو؟", a: "نعمل مع جميع المنصات: شوبيفاي، ووكومرس، ماجنتو. كل منصة لها متطلبات سيو مختلفة ونحسنها وفقًا لذلك." },
      { q: "كم من الوقت لرؤية نتائج؟", a: "المتاجر الإلكترونية تشهد تحسنًا في الزيارات خلال 2-3 أشهر مع زيادة ملحوظة في المبيعات خلال 4-6 أشهر." },
      { q: "هل تحسنون صفحات المنتجات؟", a: "نعم، تحسين صفحات المنتجات يشمل العناوين والوصف والصور والبيانات المنظمة للمنتجات." },
      { q: "ما تكلفة سيو المتاجر الإلكترونية؟", a: "تعتمد على حجم المتجر وعدد المنتجات. باقاتنا تبدأ من 700 دولار شهريًا." },
    ],
    challenges: [
      { title: "آلاف صفحات المنتجات", desc: "المتاجر الكبيرة تحتاج تحسين آلاف الصفحات بكفاءة." },
      { title: "المحتوى المكرر", desc: "وصف المنتجات المتشابهة والتصنيفات يسبب مشاكل محتوى مكرر." },
      { title: "سرعة الموقع", desc: "المتاجر الثقيلة بالصور تحتاج تحسين أداء مستمر." },
      { title: "تنافس مع أمازون", desc: "المنافسة مع المنصات الكبرى تتطلب استراتيجية ذكية." },
    ],
    approach: [
      { title: "تحسين بنية الموقع", desc: "نحسن هيكل التصنيفات والتنقل الداخلي لتجربة مستخدم وزحف أفضل." },
      { title: "سيو صفحات المنتجات", desc: "نحسن كل صفحة منتج بمحتوى فريد وبيانات منظمة." },
      { title: "تحسين تقني", desc: "نسرّع الموقع ونحل مشاكل الفهرسة والمحتوى المكرر." },
      { title: "استراتيجية محتوى", desc: "ننشئ أدلة شراء ومقارنات ومراجعات تجذب الزيارات." },
    ],
  },
  { slug: "education-seo-ar", title: "سيو التعليم", shortTitle: "التعليم", metaTitle: "سيو للمدارس والجامعات والتدريب", metaDesc: "سيو متخصص للمؤسسات التعليمية. جذب الطلاب وأولياء الأمور.", icon: GraduationCap, category: "Education & Training", heroHighlight: "التعليم", heroDesc: "اجذب المزيد من الطلاب مع سيو يستهدف أولياء الأمور والمتعلمين الباحثين عن فرص تعليمية.",
    keywords: ["مدارس قريبة", "أفضل مدرسة", "جامعات", "دورات تدريبية", "تعليم عن بعد", "حضانة أطفال", "مدرسة خاصة", "تعليم لغة إنجليزية", "رسوم المدارس", "معاهد", "تدريب مهني", "كورسات أونلاين"],
    faqs: [
      { q: "كيف يساعد السيو المؤسسات التعليمية؟", a: "السيو يظهر مدرستك أو معهدك عندما يبحث أولياء الأمور والطلاب عن خيارات تعليمية." },
      { q: "ما الكلمات المفتاحية الأهم للتعليم؟", a: "كلمات مثل 'أفضل مدرسة في [المدينة]'، 'رسوم المدارس الخاصة'، و'دورات تدريبية' من أكثرها بحثًا." },
      { q: "هل يعمل السيو للتعليم عن بعد؟", a: "نعم، التعليم عن بعد والكورسات الأونلاين من أسرع القطاعات نموًا في البحث." },
      { q: "كم يكلف سيو للمدارس؟", a: "تبدأ باقاتنا من 500 دولار شهريًا حسب حجم المؤسسة التعليمية." },
      { q: "هل تنشئون محتوى تعليمي؟", a: "نعم، ننشئ محتوى تعليمي جذاب يبني سلطة مؤسستك ويجذب الزوار." },
    ],
    challenges: [
      { title: "موسمية التسجيل", desc: "الطلب يرتفع في مواسم التسجيل ويحتاج تخطيط مسبق." },
      { title: "قرارات معقدة", desc: "اختيار المدرسة قرار كبير يحتاج محتوى مقنع ومفصل." },
      { title: "تعدد الجمهور", desc: "تستهدف أولياء الأمور والطلاب بمحتوى مختلف لكل فئة." },
      { title: "منافسة المنصات الكبرى", desc: "المنافسة مع منصات التعليم العالمية تتطلب تميز محلي." },
    ],
    approach: [
      { title: "صفحات برامج محسنة", desc: "ننشئ صفحة مفصلة لكل برنامج تعليمي مع محتوى محسن." },
      { title: "سيو محلي تعليمي", desc: "نستهدف الآباء الباحثين عن مدارس في مناطق محددة." },
      { title: "محتوى إرشادي", desc: "ننشئ أدلة اختيار المدارس ومقالات تعليمية تجذب الزوار." },
      { title: "تحسين تقني", desc: "نضمن سرعة الموقع وتوافقه مع الجوال وتطبيق Schema التعليمي." },
    ],
  },
  { slug: "legal-seo-ar", title: "سيو المحاماة", shortTitle: "المحاماة", metaTitle: "سيو للمحامين ومكاتب المحاماة", metaDesc: "سيو متخصص للمحامين ومكاتب المحاماة. جذب عملاء يبحثون عن خدمات قانونية.", icon: Scale, category: "Legal & Professional Services", heroHighlight: "المحاماة", heroDesc: "اجذب عملاء جدد لمكتب المحاماة مع سيو يستهدف الباحثين عن خدمات قانونية.",
    keywords: ["محامي قريب", "مكتب محاماة", "استشارة قانونية", "محامي عقارات", "محامي شركات", "محامي جنائي", "محامي أحوال شخصية", "محامي تجاري", "رسوم المحاماة", "محامي هجرة"],
    faqs: [
      { q: "لماذا يحتاج المحامون للسيو؟", a: "أغلب الناس يبحثون عبر الإنترنت عند حاجتهم لمحامي. الظهور في النتائج الأولى يعني المزيد من العملاء." },
      { q: "ما أهم الكلمات المفتاحية للمحامين؟", a: "كلمات مثل 'محامي [تخصص] في [المدينة]'، 'استشارة قانونية مجانية'، و'أفضل مكتب محاماة'." },
      { q: "كم يستغرق السيو للمحامين لإظهار نتائج؟", a: "عادة 3-6 أشهر لرؤية نتائج ملموسة. القطاع القانوني تنافسي ويحتاج صبر." },
      { q: "هل تكتبون محتوى قانوني؟", a: "نعم، ننشئ مقالات قانونية تعليمية تبني سلطة مكتبك وتجذب عملاء محتملين." },
      { q: "ما تكلفة سيو للمحامين؟", a: "تبدأ باقاتنا من 600 دولار شهريًا حسب التخصص القانوني ومستوى المنافسة." },
    ],
    challenges: [
      { title: "تنافس شديد", desc: "المحاماة من أكثر القطاعات تنافسية في السيو." },
      { title: "معايير YMYL", desc: "جوجل يطبق معايير جودة أعلى على المحتوى القانوني." },
      { title: "تخصصات متعددة", desc: "كل تخصص قانوني يحتاج استراتيجية سيو مستقلة." },
      { title: "بناء الثقة", desc: "العملاء يحتاجون محتوى يبني الثقة قبل التواصل." },
    ],
    approach: [
      { title: "صفحات تخصص", desc: "صفحة مخصصة لكل تخصص قانوني مع محتوى شامل." },
      { title: "محتوى قانوني", desc: "مقالات ودليل قانوني يبني سلطتك كمرجع موثوق." },
      { title: "سيو محلي", desc: "ظهور في البحث المحلي وخرائط جوجل لمنطقتك." },
      { title: "مراجعات العملاء", desc: "بناء ملف مراجعات قوي يعزز الثقة والترتيب." },
    ],
  },
  { slug: "automotive-seo-ar", title: "سيو السيارات", shortTitle: "السيارات", metaTitle: "سيو لمعارض ووكالات السيارات", metaDesc: "سيو متخصص لوكالات ومعارض السيارات. زيادة المبيعات وجذب المشترين.", icon: Car, category: "Automotive & Transportation", heroHighlight: "السيارات", heroDesc: "اجذب مشترين مؤهلين لمعرض السيارات مع سيو يستهدف الباحثين عن سيارات.",
    keywords: ["سيارات للبيع", "معرض سيارات", "وكالة سيارات", "سيارات مستعملة", "سيارات جديدة", "تقسيط سيارات", "أسعار سيارات", "تأمين سيارات", "صيانة سيارات", "غسيل سيارات", "تأجير سيارات"],
    faqs: [
      { q: "كيف يساعد السيو معارض السيارات؟", a: "السيو يظهر معرضك عندما يبحث الناس عن سيارات للبيع أو سيارات مستعملة في منطقتك." },
      { q: "ما أهم الكلمات المفتاحية لقطاع السيارات؟", a: "'سيارات للبيع في [المدينة]'، '[ماركة] مستعمل'، 'أفضل سيارة عائلية'، 'تقسيط سيارات'." },
      { q: "هل تحسنون صفحات المركبات الفردية؟", a: "نعم، كل صفحة مركبة يمكن تحسينها بمحتوى فريد وبيانات منظمة للسيارات." },
      { q: "كم يستغرق سيو السيارات لإظهار نتائج؟", a: "عادة 3-4 أشهر لبدء رؤية تحسن في الترتيب والزيارات." },
      { q: "هل تعملون مع ورش الصيانة أيضًا؟", a: "نعم، نقدم سيو لمعارض السيارات وورش الصيانة ومراكز غسيل السيارات." },
    ],
    challenges: [
      { title: "مخزون متغير", desc: "السيارات المعروضة تتغير باستمرار مما يحتاج تحديث مستمر." },
      { title: "منافسة مع المنصات", desc: "المنافسة مع مواقع بيع السيارات الكبرى." },
      { title: "قرار شراء كبير", desc: "العملاء يبحثون كثيرًا قبل شراء سيارة." },
      { title: "تعدد الخدمات", desc: "البيع والصيانة والتأجير كل منها يحتاج تحسين مستقل." },
    ],
    approach: [
      { title: "صفحات مركبات محسنة", desc: "تحسين كل صفحة مركبة بمواصفات كاملة وبيانات منظمة." },
      { title: "محتوى سيارات", desc: "أدلة شراء ومقارنات ومراجعات تجذب الباحثين." },
      { title: "سيو محلي", desc: "ظهور في البحث المحلي وخرائط جوجل." },
      { title: "تحسين تقني", desc: "سرعة الموقع وتوافق الجوال وفهرسة فعالة." },
    ],
  },
  { slug: "construction-seo-ar", title: "سيو البناء والمقاولات", shortTitle: "البناء", metaTitle: "سيو لشركات المقاولات والبناء", metaDesc: "سيو لشركات البناء والمقاولات. جذب مشاريع جديدة.", icon: Hammer, category: "Home Services & Trades", heroHighlight: "البناء والمقاولات", heroDesc: "اجذب مشاريع بناء جديدة مع سيو متخصص لقطاع المقاولات.",
    keywords: ["شركة مقاولات", "بناء منازل", "ترميم", "تشطيبات", "مقاول بناء", "تصميم داخلي", "ديكور", "بناء فلل", "مقاول قريب", "أعمال جبس", "دهانات"],
    faqs: [
      { q: "هل يحتاج المقاول للسيو؟", a: "نعم، العملاء يبحثون عن مقاولين عبر الإنترنت بشكل متزايد. السيو يجلب مشاريع مؤهلة." },
      { q: "ما الكلمات المفتاحية للمقاولات؟", a: "'شركة مقاولات في [المدينة]'، 'مقاول بناء قريب'، 'تشطيبات فلل'، 'ترميم منازل'." },
      { q: "كيف يبني السيو ثقة العملاء؟", a: "من خلال معرض أعمال محسن ومراجعات إيجابية ومحتوى يعرض خبرتك." },
      { q: "هل تساعدون في التسويق للمشاريع الكبيرة؟", a: "نعم، نقدم استراتيجيات سيو B2B لجذب مشاريع تجارية وحكومية." },
      { q: "ما تكلفة سيو المقاولات؟", a: "تبدأ من 500 دولار شهريًا حسب حجم الشركة والمنطقة المستهدفة." },
    ],
    challenges: [
      { title: "مشاريع كبيرة", desc: "العملاء يبحثون عن شركات موثوقة لمشاريع بمبالغ كبيرة." },
      { title: "إثبات الخبرة", desc: "تحتاج إظهار أعمال سابقة وشهادات." },
      { title: "بحث محلي", desc: "المقاولات خدمة محلية بالدرجة الأولى." },
      { title: "موسمية", desc: "الطلب يتغير حسب المواسم وحالة السوق." },
    ],
    approach: [
      { title: "معرض أعمال محسن", desc: "عرض مشاريعك السابقة بصور وتفاصيل محسنة للسيو." },
      { title: "صفحات خدمات", desc: "صفحة لكل خدمة: بناء، ترميم، تشطيبات، ديكور." },
      { title: "سيو محلي", desc: "ظهور في خرائط جوجل وبحث المنطقة." },
      { title: "شهادات العملاء", desc: "عرض شهادات ومراجعات العملاء بشكل بارز." },
    ],
  },
  { slug: "technology-seo-ar", title: "سيو التكنولوجيا", shortTitle: "التكنولوجيا", metaTitle: "سيو لشركات التكنولوجيا والبرمجيات", metaDesc: "سيو لشركات التكنولوجيا والبرمجيات. زيادة العملاء والاشتراكات.", icon: Code, category: "Technology & SaaS", heroHighlight: "التكنولوجيا", heroDesc: "زد عملاءك واشتراكاتك مع سيو يستهدف المستخدمين الباحثين عن حلول تقنية.",
    keywords: ["شركة برمجيات", "تطوير تطبيقات", "تصميم مواقع", "حلول تقنية", "برنامج محاسبة", "نظام إدارة", "استضافة مواقع", "أمن سيبراني", "حوسبة سحابية", "ذكاء اصطناعي"],
    faqs: [
      { q: "كيف يساعد السيو شركات التكنولوجيا؟", a: "السيو يجلب عملاء يبحثون عن حلول تقنية محددة مما يقلل تكلفة اكتساب العميل." },
      { q: "ما استراتيجية المحتوى المناسبة؟", a: "محتوى تقني تعليمي ومقارنات ودراسات حالة تبني سلطتك كخبير تقني." },
      { q: "هل تعملون مع شركات SaaS؟", a: "نعم، لدينا خبرة واسعة في سيو SaaS تشمل صفحات الميزات والتسعير والمدونة." },
      { q: "ما أهمية السيو الدولي للتكنولوجيا؟", a: "شركات التكنولوجيا غالبًا تستهدف أسواقًا متعددة مما يحتاج سيو متعدد اللغات." },
      { q: "كم تكلفة سيو شركات التكنولوجيا؟", a: "تبدأ من 800 دولار شهريًا حسب حجم الشركة والأسواق المستهدفة." },
    ],
    challenges: [
      { title: "محتوى تقني معقد", desc: "شرح المنتجات التقنية بطريقة مفهومة ومحسنة للبحث." },
      { title: "سوق عالمي", desc: "المنافسة مع شركات عالمية على كلمات مفتاحية تقنية." },
      { title: "تحديث مستمر", desc: "التكنولوجيا تتطور بسرعة والمحتوى يحتاج تحديث دائم." },
      { title: "دورة مبيعات طويلة", desc: "العملاء يبحثون ويقارنون كثيرًا قبل الشراء." },
    ],
    approach: [
      { title: "محتوى تقني شامل", desc: "أدلة ومقالات تقنية تبني سلطتك كخبير في مجالك." },
      { title: "سيو صفحات المنتج", desc: "تحسين صفحات الميزات والتسعير والمقارنات." },
      { title: "بناء روابط تقنية", desc: "روابط من مواقع تقنية ومدونات ومجلات متخصصة." },
      { title: "تحسين التحويل", desc: "تحسين صفحات الهبوط لزيادة التسجيلات والاستفسارات." },
    ],
  },
  { slug: "hotel-seo-ar", title: "سيو الفنادق", shortTitle: "الفنادق", metaTitle: "سيو للفنادق والمنتجعات", metaDesc: "سيو للفنادق والمنتجعات. زيادة الحجوزات المباشرة.", icon: Plane, category: "Food & Hospitality", heroHighlight: "الفنادق", heroDesc: "زد حجوزاتك المباشرة وقلل اعتمادك على مواقع الحجز مع سيو فندقي متخصص.",
    keywords: ["فندق قريب", "حجز فندق", "منتجع", "شقق فندقية", "أفضل فنادق", "فندق رخيص", "فندق فاخر", "استراحة", "شاليه", "حجز أونلاين"],
    faqs: [
      { q: "كيف يقلل السيو اعتمادي على Booking؟", a: "بتحسين موقعك للظهور مباشرة في نتائج البحث تجذب حجوزات مباشرة بدون عمولات." },
      { q: "ما أهم الكلمات المفتاحية للفنادق؟", a: "'فندق في [المدينة]'، 'أفضل فنادق [المنطقة]'، 'فندق قريب من [معلم]'." },
      { q: "هل تحسنون الظهور في Google Hotels؟", a: "نعم، نحسن Google Business Profile وبيانات الفندق للظهور في Google Hotels." },
      { q: "ما أهمية المراجعات للفنادق؟", a: "المراجعات عامل حاسم في اختيار الفندق وتؤثر مباشرة على الترتيب والحجوزات." },
      { q: "ما تكلفة سيو الفنادق؟", a: "تبدأ من 700 دولار شهريًا حسب حجم الفندق والمنافسة في المنطقة." },
    ],
    challenges: [
      { title: "منافسة OTAs", desc: "مواقع الحجز الكبرى تسيطر على نتائج البحث." },
      { title: "موسمية عالية", desc: "الطلب يتغير بشكل كبير حسب المواسم." },
      { title: "تعدد اللغات", desc: "الفنادق تحتاج محتوى بلغات متعددة للضيوف الدوليين." },
      { title: "محتوى بصري", desc: "الصور والفيديوهات ضرورية لكنها تؤثر على السرعة." },
    ],
    approach: [
      { title: "تحسين الحجز المباشر", desc: "سيو يستهدف كلمات مفتاحية تجلب حجوزات مباشرة بدلاً من OTAs." },
      { title: "محتوى وجهة", desc: "أدلة سياحية ومعالم قريبة تجذب الزوار الباحثين." },
      { title: "سيو متعدد اللغات", desc: "محتوى محسن بلغات متعددة مع hreflang صحيح." },
      { title: "تحسين المراجعات", desc: "استراتيجية للحصول على مراجعات إيجابية وإدارتها." },
    ],
  },
  { slug: "fitness-seo-ar", title: "سيو اللياقة", shortTitle: "اللياقة", metaTitle: "سيو لصالات الرياضة واللياقة", metaDesc: "سيو لصالات الرياضة ومراكز اللياقة. جذب أعضاء جدد.", icon: Dumbbell, category: "Fitness & Sports", heroHighlight: "اللياقة", heroDesc: "اجذب أعضاء جدد لصالتك الرياضية مع سيو يستهدف المهتمين باللياقة.",
    keywords: ["صالة رياضة قريبة", "جيم", "نادي رياضي", "مدرب شخصي", "يوغا", "كروسفيت", "سباحة", "حمام سباحة", "اشتراك جيم", "لياقة بدنية"],
    faqs: [
      { q: "كيف يجذب السيو أعضاء للجيم؟", a: "السيو يظهر صالتك عندما يبحث الناس عن جيم أو مدرب شخصي في منطقتك." },
      { q: "ما أهم الكلمات المفتاحية لصالات الرياضة؟", a: "'جيم قريب'، 'صالة رياضة [حي]'، 'اشتراك جيم'، 'مدرب شخصي'." },
      { q: "هل المراجعات مهمة للجيم؟", a: "نعم جدًا، المراجعات الإيجابية تؤثر بشكل كبير على قرار الاشتراك." },
      { q: "هل يساعد المحتوى في جذب أعضاء؟", a: "نعم، مقالات التمارين والتغذية تجذب زوارًا يهتمون باللياقة." },
      { q: "ما تكلفة سيو الجيم؟", a: "تبدأ من 400 دولار شهريًا مع تركيز على السيو المحلي." },
    ],
    challenges: [
      { title: "منافسة محلية", desc: "عدة صالات رياضية في كل منطقة." },
      { title: "موسمية", desc: "الاشتراكات تزيد في يناير وبداية الصيف." },
      { title: "احتفاظ بالأعضاء", desc: "ليس فقط جذب أعضاء جدد بل الاحتفاظ بهم." },
      { title: "تنوع الخدمات", desc: "جيم، يوغا، سباحة، مدرب شخصي - كلها تحتاج تحسين." },
    ],
    approach: [
      { title: "سيو محلي قوي", desc: "ظهور في خرائط جوجل وبحث المنطقة." },
      { title: "صفحات خدمات", desc: "صفحة لكل خدمة: جيم، يوغا، بيلاتس، مدرب شخصي." },
      { title: "محتوى لياقة", desc: "مقالات تمارين وتغذية تجذب المهتمين." },
      { title: "عروض وحملات", desc: "صفحات عروض محسنة لجذب المشتركين الجدد." },
    ],
  },
  { slug: "dental-seo-ar", title: "سيو طب الأسنان", shortTitle: "طب الأسنان", metaTitle: "سيو لعيادات الأسنان", metaDesc: "سيو لعيادات الأسنان. جذب مرضى يبحثون عن طبيب أسنان.", icon: Stethoscope, category: "Healthcare & Medical", heroHighlight: "طب الأسنان", heroDesc: "اجذب مرضى جدد لعيادة الأسنان مع سيو يستهدف الباحثين عن خدمات الأسنان.",
    keywords: ["طبيب أسنان قريب", "تقويم أسنان", "زراعة أسنان", "تبييض أسنان", "حشو أسنان", "عيادة أسنان", "طوارئ أسنان", "تركيبات أسنان", "عدسات أسنان", "ابتسامة هوليوود"],
    faqs: [
      { q: "كيف يجذب السيو مرضى لعيادة الأسنان؟", a: "السيو يظهر عيادتك في أعلى النتائج عندما يبحث الناس عن طبيب أسنان في منطقتك." },
      { q: "ما أهم خدمات الأسنان للتسويق؟", a: "زراعة الأسنان، تبييض الأسنان، ابتسامة هوليوود، وتقويم الأسنان من أكثر الخدمات بحثًا." },
      { q: "هل الصور مهمة لسيو الأسنان؟", a: "نعم، صور قبل وبعد تعزز الثقة وتحسن تجربة المستخدم." },
      { q: "كيف تديرون المراجعات؟", a: "نساعد في الحصول على مراجعات من المرضى الراضين والرد على جميع المراجعات." },
      { q: "ما تكلفة سيو عيادات الأسنان؟", a: "تبدأ من 500 دولار شهريًا حسب عدد الخدمات والمنافسة المحلية." },
    ],
    challenges: [
      { title: "منافسة محلية عالية", desc: "عيادات أسنان كثيرة في كل منطقة تتنافس على نفس المرضى." },
      { title: "خدمات متعددة", desc: "كل خدمة أسنان تحتاج صفحة ومحتوى مخصص." },
      { title: "مخاوف المرضى", desc: "كثير من الناس يخافون من طبيب الأسنان ويحتاجون محتوى مطمئن." },
      { title: "تأمين صحي", desc: "المرضى يبحثون عن عيادات تقبل تأمينهم الصحي." },
    ],
    approach: [
      { title: "صفحات خدمات أسنان", desc: "صفحة محسنة لكل خدمة: زراعة، تبييض، تقويم، حشو." },
      { title: "محتوى تعليمي", desc: "مقالات عن صحة الأسنان والعناية تجذب مرضى محتملين." },
      { title: "سيو محلي", desc: "ظهور في خرائط جوجل والبحث المحلي." },
      { title: "معرض قبل وبعد", desc: "عرض نتائج العلاج بصور محسنة تعزز الثقة." },
    ],
  },
  { slug: "interior-design-seo-ar", title: "سيو التصميم الداخلي", shortTitle: "التصميم الداخلي", metaTitle: "سيو لمصممي الديكور الداخلي", metaDesc: "سيو لشركات التصميم الداخلي والديكور. جذب عملاء يبحثون عن مصمم.", icon: Home, category: "Home Services & Trades", heroHighlight: "التصميم الداخلي", heroDesc: "اجذب عملاء يبحثون عن مصمم ديكور داخلي مع سيو متخصص.",
    keywords: ["مصمم داخلي", "ديكور منزلي", "تصميم داخلي", "ديكور فلل", "تصميم مطبخ", "ديكور شقق", "تصميم مكاتب", "أثاث مودرن", "ألوان دهانات", "تصميم حمامات"],
    faqs: [
      { q: "كيف يساعد السيو مصممي الديكور؟", a: "السيو يظهر أعمالك عندما يبحث الناس عن مصمم داخلي أو أفكار ديكور في منطقتك." },
      { q: "ما الكلمات المفتاحية للتصميم الداخلي؟", a: "'مصمم داخلي [المدينة]'، 'ديكور فلل'، 'تصميم مطابخ حديثة'، 'أفكار ديكور'." },
      { q: "هل معرض الأعمال مهم للسيو؟", a: "جدًا! معرض أعمال محسن بصور عالية الجودة يجذب العملاء ويحسن الترتيب." },
      { q: "هل يساعد المحتوى في جذب عملاء؟", a: "نعم، مقالات عن اتجاهات الديكور وأفكار التصميم تجذب آلاف الزوار شهريًا." },
      { q: "ما تكلفة سيو التصميم الداخلي؟", a: "تبدأ من 500 دولار شهريًا حسب حجم الشركة والسوق المستهدف." },
    ],
    challenges: [
      { title: "محتوى بصري", desc: "التصميم الداخلي يعتمد بشكل كبير على الصور والفيديو." },
      { title: "بحث إلهامي", desc: "كثير من الباحثين يبحثون عن أفكار وليس خدمات مباشرة." },
      { title: "منافسة بنترست", desc: "المنافسة مع منصات مثل بنترست وانستغرام." },
      { title: "مشاريع متنوعة", desc: "سكني وتجاري ومكاتب كلها تحتاج محتوى مختلف." },
    ],
    approach: [
      { title: "معرض أعمال محسن", desc: "صور عالية الجودة مع نص بديل وبيانات منظمة." },
      { title: "محتوى إلهامي", desc: "مقالات عن اتجاهات الديكور تجذب باحثين عن أفكار." },
      { title: "صفحات خدمات", desc: "صفحة لكل نوع تصميم: سكني، تجاري، مكاتب." },
      { title: "سيو محلي", desc: "استهداف عملاء في منطقتك الجغرافية." },
    ],
  },
  { slug: "photography-seo-ar", title: "سيو التصوير", shortTitle: "التصوير", metaTitle: "سيو للمصورين واستوديوهات التصوير", metaDesc: "سيو للمصورين. جذب عملاء يبحثون عن خدمات تصوير.", icon: Camera, category: "Beauty & Wellness", heroHighlight: "التصوير", heroDesc: "اجذب عملاء لاستوديو التصوير مع سيو يستهدف الباحثين عن مصور.",
    keywords: ["مصور فوتوغرافي", "تصوير أعراس", "استوديو تصوير", "تصوير منتجات", "مصور قريب", "تصوير حفلات", "جلسة تصوير", "تصوير عقاري", "تصوير أطفال", "فيديوغرافر"],
    faqs: [
      { q: "كيف يساعد السيو المصورين؟", a: "السيو يظهر أعمالك عندما يبحث العملاء عن مصور لحفلة زفاف أو جلسة تصوير." },
      { q: "ما أهم الكلمات للمصورين؟", a: "'مصور أعراس [المدينة]'، 'تصوير منتجات'، 'استوديو تصوير قريب'." },
      { q: "هل الصور تساعد في السيو؟", a: "نعم، تحسين الصور بالنص البديل والضغط يحسن الترتيب." },
      { q: "كيف أتميز عن المصورين الآخرين؟", a: "بمحتوى فريد يعرض أسلوبك ونتائج عملك ومراجعات عملائك." },
      { q: "ما تكلفة سيو للمصورين؟", a: "تبدأ من 400 دولار شهريًا." },
    ],
    challenges: [
      { title: "منافسة انستغرام", desc: "كثير من المصورين يعتمدون على انستغرام فقط." },
      { title: "محتوى بصري ثقيل", desc: "المواقع الثقيلة بالصور تحتاج تحسين أداء." },
      { title: "موسمية", desc: "الطلب يرتفع في مواسم الأعراس والتخرج." },
      { title: "تخصصات متعددة", desc: "أعراس، منتجات، عقارات كلها أسواق مختلفة." },
    ],
    approach: [
      { title: "معرض أعمال SEO", desc: "تحسين كل صورة بنص بديل وبيانات وصفية." },
      { title: "صفحات تخصص", desc: "صفحة لكل تخصص تصوير مع أمثلة ومحتوى." },
      { title: "سيو محلي", desc: "ظهور في بحث المنطقة وخرائط جوجل." },
      { title: "مدونة تصوير", desc: "مقالات عن نصائح التصوير تجذب عملاء محتملين." },
    ],
  },
  { slug: "cleaning-seo-ar", title: "سيو شركات التنظيف", shortTitle: "التنظيف", metaTitle: "سيو لشركات التنظيف والنظافة", metaDesc: "سيو لشركات التنظيف. جذب عملاء يبحثون عن خدمات تنظيف.", icon: Home, category: "Home Services & Trades", heroHighlight: "التنظيف", heroDesc: "اجذب عملاء يبحثون عن شركة تنظيف مع سيو محلي متخصص.",
    keywords: ["شركة تنظيف", "تنظيف منازل", "تنظيف فلل", "شركة نظافة", "تنظيف مكاتب", "غسيل سجاد", "تنظيف خزانات", "مكافحة حشرات", "تعقيم", "خادمات تنظيف"],
    faqs: [
      { q: "كيف يساعد السيو شركات التنظيف؟", a: "السيو يظهر شركتك عندما يبحث الناس عن خدمات تنظيف في منطقتك." },
      { q: "ما أهم الكلمات للتنظيف؟", a: "'شركة تنظيف [المدينة]'، 'تنظيف منازل قريب'، 'غسيل سجاد'." },
      { q: "هل المراجعات مهمة لشركات التنظيف؟", a: "نعم جدًا، العملاء يختارون شركة التنظيف بناءً على المراجعات." },
      { q: "كم يكلف السيو لشركات التنظيف؟", a: "تبدأ من 400 دولار شهريًا." },
      { q: "هل تساعدون في الإعلانات أيضًا؟", a: "نركز على السيو لكن يمكننا تقديم نصائح للإعلانات المدفوعة." },
    ],
    challenges: [
      { title: "منافسة عالية", desc: "عدد كبير من شركات التنظيف في كل منطقة." },
      { title: "أسعار تنافسية", desc: "العملاء يقارنون الأسعار بشكل كبير." },
      { title: "ثقة العملاء", desc: "دخول المنزل يحتاج مستوى عالي من الثقة." },
      { title: "خدمة محلية بالكامل", desc: "الخدمة محصورة جغرافيًا." },
    ],
    approach: [
      { title: "سيو محلي مكثف", desc: "صفحات لكل حي ومنطقة تخدمها." },
      { title: "صفحات خدمات", desc: "صفحة لكل خدمة: تنظيف منازل، مكاتب، سجاد." },
      { title: "مراجعات وثقة", desc: "بناء ملف مراجعات قوي يعزز الثقة." },
      { title: "محتوى مفيد", desc: "نصائح تنظيف تجذب زوارًا وتبني سلطة." },
    ],
  },
  { slug: "insurance-seo-ar", title: "سيو التأمين", shortTitle: "التأمين", metaTitle: "سيو لشركات التأمين ووسطاء التأمين", metaDesc: "سيو لشركات التأمين. جذب عملاء يبحثون عن تأمين.", icon: Landmark, category: "Finance & Banking", heroHighlight: "التأمين", heroDesc: "اجذب عملاء تأمين جدد مع سيو يستهدف الباحثين عن حلول تأمينية.",
    keywords: ["تأمين سيارات", "تأمين صحي", "تأمين سفر", "تأمين حياة", "شركة تأمين", "أسعار التأمين", "تأمين شامل", "وثيقة تأمين", "تأمين منازل", "تأمين تجاري"],
    faqs: [
      { q: "كيف يساعد السيو شركات التأمين؟", a: "السيو يجلب عملاء يبحثون عن أنواع تأمين محددة جاهزين للشراء." },
      { q: "ما أهم الكلمات المفتاحية للتأمين؟", a: "'تأمين سيارات [المدينة]'، 'أفضل تأمين صحي'، 'أسعار التأمين'." },
      { q: "هل المحتوى مهم لشركات التأمين؟", a: "نعم، مقالات تشرح أنواع التأمين والتغطية تجذب عملاء محتملين." },
      { q: "كيف تتعامل مع معايير YMYL؟", a: "المحتوى المالي يحتاج دقة وموثوقية. نتبع معايير E-E-A-T الصارمة." },
      { q: "ما تكلفة سيو التأمين؟", a: "تبدأ من 600 دولار شهريًا حسب أنواع التأمين والمنطقة." },
    ],
    challenges: [
      { title: "منافسة شديدة", desc: "التأمين من أغلى الكلمات المفتاحية في البحث المدفوع." },
      { title: "معايير YMYL", desc: "جوجل يطبق معايير أعلى على المحتوى المالي." },
      { title: "تعدد المنتجات", desc: "كل نوع تأمين يحتاج استراتيجية مستقلة." },
      { title: "ثقة المستهلك", desc: "العملاء حذرون ويحتاجون محتوى يبني الثقة." },
    ],
    approach: [
      { title: "صفحات منتجات تأمين", desc: "صفحة مفصلة لكل نوع تأمين بمحتوى شامل." },
      { title: "محتوى تعليمي", desc: "أدلة شرح التأمين والمقارنات تجذب عملاء." },
      { title: "سيو محلي", desc: "استهداف باحثين عن تأمين في مناطق محددة." },
      { title: "بناء سلطة", desc: "محتوى موثوق يبني E-E-A-T لشركة التأمين." },
    ],
  },
  { slug: "wedding-seo-ar", title: "سيو خدمات الأعراس", shortTitle: "الأعراس", metaTitle: "سيو لخدمات ومستلزمات الأعراس", metaDesc: "سيو لمنظمي وخدمات الأعراس. جذب العرسان الباحثين عن خدمات زفاف.", icon: Sparkles, category: "Beauty & Wellness", heroHighlight: "الأعراس", heroDesc: "اجذب عرسان يبحثون عن خدمات زفاف مع سيو متخصص.",
    keywords: ["منظم أعراس", "قاعة أفراح", "فستان زفاف", "كوش أعراس", "تصوير زفاف", "دي جي حفلات", "بطاقات دعوة", "تنسيق حفلات", "كيك زفاف", "زينة أعراس"],
    faqs: [
      { q: "كيف يساعد السيو صناعة الأعراس؟", a: "العرسان يبحثون عبر الإنترنت عن كل خدمات الزفاف. السيو يضمن ظهورك." },
      { q: "متى يبدأ العرسان بالبحث؟", a: "عادة 6-12 شهر قبل الزفاف. السيو يضمن ظهورك في الوقت المناسب." },
      { q: "ما أهم الكلمات للأعراس؟", a: "'قاعة أفراح [المدينة]'، 'منظم أعراس'، 'فستان زفاف'." },
      { q: "هل انستغرام أهم من السيو للأعراس؟", a: "كلاهما مهم لكن السيو يجلب عملاء بنية شرائية أعلى ونتائج مستدامة." },
      { q: "ما تكلفة سيو خدمات الأعراس؟", a: "تبدأ من 500 دولار شهريًا." },
    ],
    challenges: [
      { title: "موسمية عالية", desc: "الطلب يتركز في مواسم الأعراس." },
      { title: "بحث طويل المدى", desc: "دورة البحث تستمر أشهر قبل الحجز." },
      { title: "محتوى بصري", desc: "صور وفيديوهات الأعراس ضرورية." },
      { title: "منافسة المنصات", desc: "المنافسة مع منصات تخطيط الأعراس." },
    ],
    approach: [
      { title: "معرض أعراس محسن", desc: "صور حفلات سابقة مع تفاصيل محسنة للسيو." },
      { title: "محتوى تخطيط", desc: "أدلة تخطيط الزفاف تجذب عرسان في بداية البحث." },
      { title: "سيو محلي", desc: "استهداف عرسان في منطقتك الجغرافية." },
      { title: "شهادات عملاء", desc: "مراجعات العرسان السابقين تبني الثقة." },
    ],
  },
  { slug: "pharmacy-seo-ar", title: "سيو الصيدليات", shortTitle: "الصيدليات", metaTitle: "سيو للصيدليات والمتاجر الطبية", metaDesc: "سيو للصيدليات. زيادة الظهور في البحث المحلي.", icon: Stethoscope, category: "Healthcare & Medical", heroHighlight: "الصيدليات", heroDesc: "زد عملاء صيدليتك مع سيو محلي يستهدف الباحثين عن أدوية ومنتجات صحية.",
    keywords: ["صيدلية قريبة", "صيدلية 24 ساعة", "أدوية", "مستلزمات طبية", "صيدلية أونلاين", "فيتامينات", "مكملات غذائية", "صيدلية توصيل"],
    faqs: [
      { q: "هل تحتاج الصيدليات للسيو؟", a: "نعم، كثير من الناس يبحثون عن صيدلية قريبة أو أدوية محددة عبر الإنترنت." },
      { q: "ما أهم الكلمات للصيدليات؟", a: "'صيدلية قريبة'، 'صيدلية 24 ساعة'، 'توصيل أدوية'." },
      { q: "هل يمكن بيع الأدوية أونلاين؟", a: "نعم مع الالتزام بالقوانين. نحسن متجرك الإلكتروني للصيدلية." },
      { q: "ما أهمية Google Maps للصيدليات؟", a: "حاسمة! معظم بحث الصيدليات محلي ويعتمد على خرائط جوجل." },
      { q: "ما تكلفة سيو الصيدليات؟", a: "تبدأ من 400 دولار شهريًا." },
    ],
    challenges: [
      { title: "قيود المحتوى الطبي", desc: "الإعلان عن الأدوية له قوانين صارمة." },
      { title: "منافسة سلاسل الصيدليات", desc: "المنافسة مع السلاسل الكبرى والصيدليات الأونلاين." },
      { title: "بحث طوارئ", desc: "كثير من البحث يكون عاجل ويحتاج ظهور فوري." },
      { title: "تعدد المنتجات", desc: "آلاف المنتجات تحتاج فهرسة صحيحة." },
    ],
    approach: [
      { title: "سيو محلي", desc: "ظهور قوي في خرائط جوجل وبحث المنطقة." },
      { title: "صفحات منتجات صحية", desc: "محتوى عن الأدوية والمكملات بشكل قانوني." },
      { title: "تحسين تقني", desc: "فهرسة آلاف المنتجات وتحسين أداء الموقع." },
      { title: "محتوى صحي", desc: "مقالات صحية تجذب زوارًا ضمن إرشادات E-E-A-T." },
    ],
  },
  { slug: "travel-seo-ar", title: "سيو السفر والسياحة", shortTitle: "السفر والسياحة", metaTitle: "سيو لوكالات السفر والسياحة", metaDesc: "سيو لوكالات ومكاتب السفر. جذب مسافرين يبحثون عن رحلات.", icon: Plane, category: "Food & Hospitality", heroHighlight: "السفر والسياحة", heroDesc: "اجذب مسافرين يبحثون عن رحلات وحجوزات سفر مع سيو متخصص.",
    keywords: ["رحلات سياحية", "حجز طيران", "وكالة سفر", "سياحة", "عمرة", "حج", "رحلات شهر عسل", "تأشيرة سفر", "سفر عائلي", "رحلات رخيصة"],
    faqs: [
      { q: "كيف يساعد السيو وكالات السفر؟", a: "السيو يجلب مسافرين يبحثون عن رحلات وحجوزات محددة." },
      { q: "ما أهم الكلمات للسفر؟", a: "'رحلات [وجهة]'، 'حجز طيران رخيص'، 'تأشيرة [بلد]'." },
      { q: "كيف تنافس مواقع الحجز الكبرى؟", a: "بالتركيز على خدمات مخصصة والمحتوى المحلي والسوق المتخصص." },
      { q: "هل المحتوى مهم لقطاع السفر؟", a: "نعم، أدلة الوجهات ونصائح السفر تجذب آلاف الزوار." },
      { q: "ما تكلفة سيو السفر؟", a: "تبدأ من 600 دولار شهريًا." },
    ],
    challenges: [
      { title: "منافسة عالمية", desc: "المنافسة مع مواقع الحجز الكبرى مثل Booking وExpedia." },
      { title: "موسمية", desc: "الطلب يتغير بشكل كبير حسب المواسم والأعياد." },
      { title: "تغير الأسعار", desc: "أسعار الرحلات والفنادق تتغير باستمرار." },
      { title: "محتوى ضخم", desc: "تغطية وجهات متعددة تحتاج محتوى ضخم." },
    ],
    approach: [
      { title: "صفحات وجهات", desc: "صفحة مفصلة لكل وجهة سياحية مع أدلة ونصائح." },
      { title: "محتوى سفر", desc: "مقالات عن الوجهات والنصائح تجذب مسافرين." },
      { title: "تحسين الحجز", desc: "تحسين صفحات الحجز لزيادة التحويلات." },
      { title: "سيو متعدد اللغات", desc: "محتوى بلغات متعددة لجذب سياح دوليين." },
    ],
  },
  { slug: "accounting-seo-ar", title: "سيو المحاسبة", shortTitle: "المحاسبة", metaTitle: "سيو للمحاسبين ومكاتب المحاسبة", metaDesc: "سيو لمكاتب المحاسبة والتدقيق. جذب عملاء يبحثون عن محاسب.", icon: Landmark, category: "Finance & Banking", heroHighlight: "المحاسبة", heroDesc: "اجذب عملاء جدد لمكتب المحاسبة مع سيو يستهدف الباحثين عن خدمات محاسبية.",
    keywords: ["محاسب قريب", "مكتب محاسبة", "تدقيق حسابات", "إقرار ضريبي", "محاسبة شركات", "خدمات مالية", "استشارات مالية", "مسك دفاتر", "ضريبة القيمة المضافة"],
    faqs: [
      { q: "لماذا يحتاج المحاسب للسيو؟", a: "كثير من أصحاب الأعمال يبحثون عن محاسب عبر الإنترنت. الظهور في النتائج الأولى يجلب عملاء." },
      { q: "ما أهم الكلمات للمحاسبين؟", a: "'محاسب في [المدينة]'، 'خدمات محاسبية'، 'إقرار ضريبي'." },
      { q: "هل يساعد المحتوى في جذب عملاء؟", a: "نعم، مقالات عن الضرائب والمحاسبة تجذب أصحاب أعمال يبحثون عن إجابات." },
      { q: "كيف يبني السيو ثقة العملاء؟", a: "محتوى موثوق ومراجعات إيجابية تبني الثقة." },
      { q: "ما تكلفة سيو المحاسبين؟", a: "تبدأ من 500 دولار شهريًا." },
    ],
    challenges: [
      { title: "موسمية ضريبية", desc: "الطلب يرتفع في مواسم الإقرارات الضريبية." },
      { title: "بناء الثقة", desc: "العملاء يحتاجون مستوى عالي من الثقة للتعامل المالي." },
      { title: "تخصصات متعددة", desc: "محاسبة شركات، أفراد، تدقيق كلها أسواق مختلفة." },
      { title: "منافسة رقمية", desc: "المنافسة مع برامج المحاسبة الذاتية." },
    ],
    approach: [
      { title: "صفحات خدمات", desc: "صفحة لكل خدمة: محاسبة، تدقيق، ضرائب، استشارات." },
      { title: "محتوى مالي", desc: "مقالات ضريبية ومحاسبية تجذب أصحاب أعمال." },
      { title: "سيو محلي", desc: "ظهور في بحث المنطقة وخرائط جوجل." },
      { title: "بناء سلطة E-E-A-T", desc: "محتوى يعرض خبراتك وشهاداتك المهنية." },
    ],
  },
  { slug: "fashion-seo-ar", title: "سيو الأزياء والموضة", shortTitle: "الأزياء", metaTitle: "سيو لمتاجر الأزياء والموضة", metaDesc: "سيو لمتاجر الأزياء والملابس. زيادة المبيعات الإلكترونية.", icon: ShoppingBag, category: "Ecommerce & Retail", heroHighlight: "الأزياء", heroDesc: "زد مبيعات متجر الأزياء مع سيو يستهدف محبي الموضة والتسوق.",
    keywords: ["ملابس أونلاين", "فساتين", "عبايات", "أزياء رجالية", "ملابس أطفال", "أحذية", "حقائب", "إكسسوارات", "ملابس محجبات", "أزياء عصرية"],
    faqs: [
      { q: "كيف يزيد السيو مبيعات متجر الأزياء؟", a: "بجلب زوار يبحثون عن منتجات محددة جاهزين للشراء." },
      { q: "ما أهم الكلمات للأزياء؟", a: "'فساتين سهرة'، 'عبايات أونلاين'، 'أحذية رجالية'." },
      { q: "كيف أتعامل مع آلاف المنتجات؟", a: "بتحسين بنية الموقع والتصنيفات وصفحات المنتجات بشكل منظم." },
      { q: "هل المدونة مفيدة لمتجر أزياء؟", a: "نعم، مقالات عن اتجاهات الموضة ونصائح التنسيق تجذب زوارًا." },
      { q: "ما تكلفة سيو متاجر الأزياء؟", a: "تبدأ من 600 دولار شهريًا حسب حجم المتجر." },
    ],
    challenges: [
      { title: "تغير الاتجاهات", desc: "الموضة تتغير كل موسم والمحتوى يحتاج تحديث." },
      { title: "صور كثيرة", desc: "آلاف صور المنتجات تؤثر على سرعة الموقع." },
      { title: "منافسة شديدة", desc: "المنافسة مع المنصات الكبرى ومتاجر الماركات." },
      { title: "موسمية", desc: "مواسم الخصومات والأعياد تحتاج تخطيط مسبق." },
    ],
    approach: [
      { title: "تحسين صفحات المنتجات", desc: "محتوى فريد لكل منتج مع بيانات منظمة." },
      { title: "بنية تصنيفات", desc: "هيكل تصنيفات واضح يسهل التنقل والفهرسة." },
      { title: "محتوى موضة", desc: "مقالات اتجاهات ونصائح تنسيق تجذب محبي الموضة." },
      { title: "تحسين تقني", desc: "سرعة الموقع وضغط الصور وتحسين Core Web Vitals." },
    ],
  },
  { slug: "pet-care-seo-ar", title: "سيو رعاية الحيوانات", shortTitle: "رعاية الحيوانات", metaTitle: "سيو للعيادات البيطرية ومتاجر الحيوانات", metaDesc: "سيو للعيادات البيطرية ومحلات الحيوانات الأليفة.", icon: Dog, category: "Healthcare & Medical", heroHighlight: "رعاية الحيوانات", heroDesc: "اجذب أصحاب الحيوانات الأليفة مع سيو يستهدف الباحثين عن رعاية حيوانية.",
    keywords: ["بيطري قريب", "عيادة بيطرية", "طعام حيوانات", "محل حيوانات أليفة", "تطعيم حيوانات", "قطط للبيع", "كلاب للبيع", "مستلزمات حيوانات", "حلاقة حيوانات"],
    faqs: [
      { q: "كيف يساعد السيو العيادات البيطرية؟", a: "السيو يظهر عيادتك عندما يبحث أصحاب الحيوانات عن بيطري في منطقتك." },
      { q: "ما أهم الكلمات للبيطري؟", a: "'بيطري قريب'، 'عيادة بيطرية [المدينة]'، 'تطعيم حيوانات'." },
      { q: "هل المحتوى مفيد للبيطريين؟", a: "نعم، مقالات عن رعاية الحيوانات تجذب أصحاب حيوانات أليفة." },
      { q: "ما أهمية خرائط جوجل للبيطريين؟", a: "حاسمة! معظم بحث البيطريين محلي وعاجل." },
      { q: "ما تكلفة سيو البيطري؟", a: "تبدأ من 400 دولار شهريًا." },
    ],
    challenges: [
      { title: "بحث طوارئ", desc: "كثير من البحث يكون عاجل لحيوان مريض." },
      { title: "منافسة محلية", desc: "عيادات بيطرية متعددة في كل منطقة." },
      { title: "تنوع الحيوانات", desc: "قطط، كلاب، طيور - كل منها جمهور مختلف." },
      { title: "ثقة أصحاب الحيوانات", desc: "أصحاب الحيوانات يبحثون كثيرًا عن بيطري موثوق." },
    ],
    approach: [
      { title: "سيو محلي عاجل", desc: "ظهور في بحث الطوارئ وخرائط جوجل." },
      { title: "صفحات خدمات", desc: "صفحة لكل خدمة: تطعيم، جراحة، حلاقة." },
      { title: "محتوى رعاية", desc: "مقالات عن رعاية الحيوانات تجذب أصحابها." },
      { title: "مراجعات", desc: "مراجعات أصحاب الحيوانات تبني الثقة." },
    ],
  },
  { slug: "jewelry-seo-ar", title: "سيو المجوهرات", shortTitle: "المجوهرات", metaTitle: "سيو لمتاجر المجوهرات والذهب", metaDesc: "سيو لمحلات المجوهرات والذهب. زيادة المبيعات.", icon: Sparkles, category: "Ecommerce & Retail", heroHighlight: "المجوهرات", heroDesc: "زد مبيعات متجر المجوهرات مع سيو يستهدف الباحثين عن ذهب ومجوهرات.",
    keywords: ["ذهب", "مجوهرات", "خاتم خطوبة", "ألماس", "فضة", "سعر الذهب", "محل ذهب قريب", "مجوهرات أونلاين", "هدايا ذهب", "سلسلة ذهب"],
    faqs: [
      { q: "كيف يساعد السيو متاجر المجوهرات؟", a: "السيو يجلب مشترين يبحثون عن قطع مجوهرات محددة أو محل ذهب قريب." },
      { q: "ما أهم الكلمات للمجوهرات؟", a: "'خاتم خطوبة ذهب'، 'مجوهرات [ماركة]'، 'سعر الذهب اليوم'." },
      { q: "هل الصور مهمة لسيو المجوهرات؟", a: "جدًا! صور عالية الجودة مع تحسين للبحث ضرورية." },
      { q: "كيف أتنافس مع الماركات الكبرى؟", a: "بالتركيز على البحث المحلي والمنتجات المميزة والمحتوى الفريد." },
      { q: "ما تكلفة سيو المجوهرات؟", a: "تبدأ من 500 دولار شهريًا." },
    ],
    challenges: [
      { title: "ثقة المشتري", desc: "شراء المجوهرات يحتاج مستوى عالي من الثقة." },
      { title: "صور عالية الجودة", desc: "المجوهرات تحتاج تصوير احترافي." },
      { title: "أسعار متغيرة", desc: "أسعار الذهب تتغير يوميًا." },
      { title: "منافسة الماركات", desc: "المنافسة مع ماركات المجوهرات العالمية." },
    ],
    approach: [
      { title: "صفحات منتجات فاخرة", desc: "صفحات منتجات بصور عالية الجودة وبيانات منظمة." },
      { title: "محتوى مجوهرات", desc: "أدلة اختيار خواتم الخطوبة ومقالات عن الأحجار الكريمة." },
      { title: "سيو محلي", desc: "ظهور في بحث 'محل ذهب قريب' وخرائط جوجل." },
      { title: "بناء الثقة", desc: "شهادات وضمانات وسياسة إرجاع واضحة." },
    ],
  },
  { slug: "mobile-repair-seo-ar", title: "سيو إصلاح الجوالات", shortTitle: "إصلاح الجوالات", metaTitle: "سيو لمحلات إصلاح وصيانة الجوالات", metaDesc: "سيو لمحلات صيانة الجوالات والأجهزة الإلكترونية.", icon: Wrench, category: "Home Services & Trades", heroHighlight: "إصلاح الجوالات", heroDesc: "اجذب عملاء يبحثون عن إصلاح جوالات مع سيو محلي متخصص.",
    keywords: ["إصلاح جوال", "صيانة آيفون", "تصليح شاشة", "محل جوالات", "صيانة سامسونج", "فتح قفل", "استرجاع بيانات", "إصلاح لابتوب", "قطع غيار جوالات"],
    faqs: [
      { q: "هل يحتاج محل صيانة جوالات للسيو؟", a: "نعم، معظم الناس يبحثون عن محل إصلاح جوالات عبر الإنترنت قبل الزيارة." },
      { q: "ما أهم الكلمات لإصلاح الجوالات؟", a: "'تصليح شاشة آيفون [المدينة]'، 'محل صيانة جوالات قريب'." },
      { q: "كيف أتميز عن المنافسين؟", a: "بمراجعات إيجابية وأسعار واضحة وضمان على الإصلاح." },
      { q: "هل خرائط جوجل مهمة؟", a: "جدًا! معظم البحث عن إصلاح جوالات محلي وعاجل." },
      { q: "ما تكلفة السيو؟", a: "تبدأ من 350 دولار شهريًا." },
    ],
    challenges: [
      { title: "بحث عاجل", desc: "العملاء يبحثون عند كسر الشاشة ويحتاجون حل سريع." },
      { title: "منافسة محلية", desc: "محلات صيانة كثيرة في كل منطقة." },
      { title: "ثقة العميل", desc: "العميل يثق بجواله لمحل غير معروف." },
      { title: "تعدد الأجهزة", desc: "آيفون، سامسونج، هواوي - كل منها كلمات مفتاحية مختلفة." },
    ],
    approach: [
      { title: "سيو طوارئ", desc: "ظهور فوري للباحثين عن إصلاح عاجل." },
      { title: "صفحات أجهزة", desc: "صفحة لكل نوع جهاز ونوع إصلاح." },
      { title: "سيو محلي", desc: "ظهور في خرائط جوجل ونتائج البحث المحلية." },
      { title: "مراجعات", desc: "بناء ملف مراجعات قوي لبناء الثقة." },
    ],
  },
  { slug: "courier-seo-ar", title: "سيو خدمات التوصيل", shortTitle: "خدمات التوصيل", metaTitle: "سيو لشركات التوصيل والشحن", metaDesc: "سيو لشركات التوصيل والشحن. جذب عملاء يبحثون عن خدمات شحن.", icon: Truck, category: "Automotive & Transportation", heroHighlight: "خدمات التوصيل", heroDesc: "اجذب عملاء يبحثون عن خدمات توصيل وشحن مع سيو متخصص.",
    keywords: ["شركة شحن", "توصيل طلبات", "شحن سريع", "خدمة توصيل", "شحن دولي", "نقل بضائع", "مندوب توصيل", "شركة نقل", "شحن داخلي"],
    faqs: [
      { q: "كيف يساعد السيو شركات التوصيل؟", a: "السيو يجلب عملاء يبحثون عن خدمات شحن وتوصيل في منطقتك." },
      { q: "ما أهم الكلمات للتوصيل؟", a: "'شركة شحن [المدينة]'، 'توصيل سريع'، 'شحن دولي'." },
      { q: "هل المحتوى مفيد لشركات التوصيل؟", a: "نعم، صفحات مناطق الخدمة والأسعار تجذب عملاء محتملين." },
      { q: "كيف أتنافس مع الشركات الكبرى؟", a: "بالتركيز على السوق المحلي والخدمات المتخصصة والأسعار التنافسية." },
      { q: "ما تكلفة السيو؟", a: "تبدأ من 400 دولار شهريًا." },
    ],
    challenges: [
      { title: "منافسة الشركات الكبرى", desc: "المنافسة مع أرامكس وDHL وغيرها." },
      { title: "تغطية جغرافية", desc: "تحتاج صفحات لكل منطقة تخدمها." },
      { title: "تسعير معقد", desc: "الأسعار تختلف حسب الحجم والوزن والمسافة." },
      { title: "تتبع الشحنات", desc: "العملاء يحتاجون تتبع سهل ومريح." },
    ],
    approach: [
      { title: "صفحات مناطق", desc: "صفحة لكل منطقة ومدينة تخدمها." },
      { title: "تحسين التسعير", desc: "صفحات أسعار واضحة تجذب الباحثين." },
      { title: "سيو محلي", desc: "ظهور في بحث المنطقة للشحن المحلي." },
      { title: "محتوى شحن", desc: "أدلة الشحن والتغليف تجذب عملاء." },
    ],
  },
  { slug: "furniture-seo-ar", title: "سيو الأثاث", shortTitle: "الأثاث", metaTitle: "سيو لمتاجر الأثاث والمفروشات", metaDesc: "سيو لمحلات الأثاث. زيادة المبيعات وجذب المشترين.", icon: Home, category: "Ecommerce & Retail", heroHighlight: "الأثاث", heroDesc: "زد مبيعات متجر الأثاث مع سيو يستهدف الباحثين عن مفروشات وأثاث منزلي.",
    keywords: ["أثاث منزلي", "كنب", "غرف نوم", "طاولات", "أثاث مكتبي", "مطابخ", "أثاث أونلاين", "ديكور", "ستائر", "سجاد"],
    faqs: [
      { q: "كيف يساعد السيو متاجر الأثاث؟", a: "السيو يجلب مشترين يبحثون عن أنواع أثاث محددة." },
      { q: "ما أهم الكلمات للأثاث؟", a: "'كنب مودرن'، 'غرف نوم للبيع'، 'أثاث [المدينة]'." },
      { q: "هل الصور مهمة لسيو الأثاث؟", a: "جدًا! صور عالية الجودة مع أبعاد وأسعار ضرورية." },
      { q: "كيف أتعامل مع مخزون كبير؟", a: "بتحسين بنية التصنيفات وأتمتة تحسين الصفحات." },
      { q: "ما تكلفة السيو؟", a: "تبدأ من 500 دولار شهريًا حسب حجم المتجر." },
    ],
    challenges: [
      { title: "منتجات ضخمة", desc: "الأثاث يحتاج صور من زوايا متعددة وأبعاد." },
      { title: "منافسة الماركات", desc: "المنافسة مع ايكيا والماركات الكبرى." },
      { title: "قرار شراء مدروس", desc: "العملاء يبحثون ويقارنون كثيرًا." },
      { title: "شحن وتوصيل", desc: "التوصيل والتركيب يؤثر على قرار الشراء." },
    ],
    approach: [
      { title: "صفحات منتجات غنية", desc: "صور متعددة وأبعاد وبيانات منظمة لكل قطعة." },
      { title: "أدلة شراء", desc: "أدلة اختيار الأثاث ومقالات ديكور." },
      { title: "سيو محلي", desc: "ظهور في بحث 'أثاث [المدينة]'." },
      { title: "تحسين تقني", desc: "سرعة الموقع مع آلاف الصور." },
    ],
  },
  { slug: "perfume-seo-ar", title: "سيو العطور", shortTitle: "العطور", metaTitle: "سيو لمتاجر العطور والبخور", metaDesc: "سيو لمحلات العطور والبخور. زيادة المبيعات الإلكترونية.", icon: Sparkles, category: "Beauty & Wellness", heroHighlight: "العطور", heroDesc: "زد مبيعات متجر العطور مع سيو يستهدف محبي العطور والبخور.",
    keywords: ["عطور", "عطر رجالي", "عطر نسائي", "بخور", "عود", "عطور فرنسية", "عطور عربية", "دهن عود", "مسك", "عطور أونلاين"],
    faqs: [
      { q: "كيف يساعد السيو متاجر العطور؟", a: "السيو يجلب مشترين يبحثون عن عطور محددة أو يقارنون بين عطور." },
      { q: "ما أهم الكلمات للعطور؟", a: "'أفضل عطر رجالي'، 'عطور [ماركة]'، 'بخور فاخر'." },
      { q: "هل المحتوى مفيد لمتاجر العطور؟", a: "نعم، مراجعات العطور وأدلة الاختيار تجذب آلاف الزوار." },
      { q: "كيف أتنافس مع المتاجر الكبرى؟", a: "بالتخصص في العطور العربية أو التركيز على سوق محلي." },
      { q: "ما تكلفة السيو؟", a: "تبدأ من 400 دولار شهريًا." },
    ],
    challenges: [
      { title: "محتوى حسي", desc: "وصف الروائح بالكلمات تحدي فريد." },
      { title: "منافسة الماركات", desc: "المنافسة مع العلامات التجارية العالمية." },
      { title: "تقييم المنتج", desc: "العملاء لا يستطيعون شم العطر أونلاين." },
      { title: "تعدد المنتجات", desc: "مئات العطور تحتاج صفحات محسنة." },
    ],
    approach: [
      { title: "مراجعات عطور", desc: "مراجعات تفصيلية تصف كل عطر وتجذب الباحثين." },
      { title: "صفحات منتجات غنية", desc: "وصف مفصل مع ملاحظات العطر وبيانات منظمة." },
      { title: "أدلة اختيار", desc: "أفضل عطور للمناسبات، للصيف، للشتاء." },
      { title: "سيو متجر إلكتروني", desc: "تحسين تقني وبنية الموقع للتسوق." },
    ],
  },
  { slug: "catering-seo-ar", title: "سيو خدمات التموين", shortTitle: "التموين والضيافة", metaTitle: "سيو لشركات التموين وتنظيم المناسبات", metaDesc: "سيو لشركات التموين والضيافة. جذب عملاء للمناسبات.", icon: UtensilsCrossed, category: "Food & Hospitality", heroHighlight: "التموين والضيافة", heroDesc: "اجذب عملاء يبحثون عن خدمات تموين وضيافة للمناسبات.",
    keywords: ["تموين مناسبات", "بوفيه", "ضيافة", "تقديم طعام", "بوفيه أعراس", "كوفي بريك", "تموين شركات", "طبخ مناسبات", "خدمات ضيافة"],
    faqs: [
      { q: "كيف يساعد السيو شركات التموين؟", a: "السيو يظهر شركتك عندما يبحث الناس عن تموين لمناسباتهم." },
      { q: "ما أهم الكلمات للتموين؟", a: "'تموين مناسبات [المدينة]'، 'بوفيه أعراس'، 'ضيافة شركات'." },
      { q: "هل الصور مهمة للتموين؟", a: "نعم جدًا! صور الأطباق والمناسبات تعزز القرار." },
      { q: "كيف أجذب عملاء شركات؟", a: "بصفحات خدمات B2B وسيو يستهدف مدراء المشتريات." },
      { q: "ما تكلفة السيو؟", a: "تبدأ من 500 دولار شهريًا." },
    ],
    challenges: [
      { title: "موسمية المناسبات", desc: "الطلب يتركز في مواسم الأعراس والأعياد." },
      { title: "تنوع العملاء", desc: "أفراد وشركات يحتاجون محتوى مختلف." },
      { title: "صور الأطعمة", desc: "تصوير احترافي ضروري لجذب العملاء." },
      { title: "تسعير مخصص", desc: "كل مناسبة لها متطلبات وأسعار مختلفة." },
    ],
    approach: [
      { title: "صفحات مناسبات", desc: "صفحة لكل نوع مناسبة: أعراس، شركات، عائلية." },
      { title: "قوائم طعام محسنة", desc: "عرض القوائم بشكل جذاب ومحسن للبحث." },
      { title: "سيو محلي", desc: "ظهور في بحث المنطقة والمناسبات المحلية." },
      { title: "شهادات عملاء", desc: "عرض تجارب المناسبات السابقة." },
    ],
  },
  { slug: "private-school-seo-ar", title: "سيو المدارس الخاصة", shortTitle: "المدارس الخاصة", metaTitle: "سيو للمدارس الخاصة والأهلية", metaDesc: "سيو للمدارس الخاصة. جذب أولياء أمور يبحثون عن مدرسة.", icon: GraduationCap, category: "Education & Training", heroHighlight: "المدارس الخاصة", heroDesc: "اجذب أولياء أمور يبحثون عن مدرسة خاصة لأبنائهم.",
    keywords: ["مدرسة خاصة", "مدارس أهلية", "رسوم المدارس", "أفضل مدرسة", "مدرسة دولية", "مدرسة ثنائية اللغة", "حضانة", "روضة أطفال", "مناهج عالمية"],
    faqs: [
      { q: "كيف يساعد السيو المدارس الخاصة؟", a: "السيو يظهر مدرستك في أعلى النتائج عندما يبحث أولياء الأمور عن مدرسة." },
      { q: "متى يبدأ أولياء الأمور بالبحث؟", a: "عادة 3-6 أشهر قبل بداية العام الدراسي." },
      { q: "ما أهم الكلمات للمدارس؟", a: "'أفضل مدرسة خاصة [المدينة]'، 'رسوم مدارس خاصة'، 'مدرسة دولية'." },
      { q: "هل المحتوى مهم للمدارس؟", a: "نعم، صفحات المناهج والأنشطة والنتائج تعزز قرار الالتحاق." },
      { q: "ما تكلفة سيو المدارس؟", a: "تبدأ من 600 دولار شهريًا." },
    ],
    challenges: [
      { title: "موسمية التسجيل", desc: "فترة التسجيل محدودة وتحتاج تحضير مسبق." },
      { title: "قرار عائلي", desc: "اختيار المدرسة قرار كبير يحتاج محتوى مقنع." },
      { title: "منافسة محلية", desc: "مدارس كثيرة تتنافس في كل منطقة." },
      { title: "سمعة المدرسة", desc: "السمعة والنتائج الأكاديمية حاسمة." },
    ],
    approach: [
      { title: "صفحات برامج", desc: "صفحة لكل مرحلة ومنهج مع تفاصيل شاملة." },
      { title: "محتوى أولياء أمور", desc: "أدلة اختيار المدرسة ومقالات تربوية." },
      { title: "سيو محلي", desc: "ظهور في بحث المدارس في المنطقة." },
      { title: "جولات افتراضية", desc: "فيديو وصور المدرسة محسنة للبحث." },
    ],
  },
  { slug: "marketing-agency-seo-ar", title: "سيو وكالات التسويق", shortTitle: "وكالات التسويق", metaTitle: "سيو لوكالات التسويق الرقمي", metaDesc: "سيو لوكالات التسويق الرقمي والإعلان. جذب عملاء جدد.", icon: Globe, category: "Technology & SaaS", heroHighlight: "وكالات التسويق", heroDesc: "اجذب عملاء لوكالتك التسويقية مع سيو يثبت خبرتك الرقمية.",
    keywords: ["وكالة تسويق", "تسويق رقمي", "إعلانات جوجل", "تسويق سوشيال ميديا", "إدارة حملات", "تصميم جرافيك", "إنتاج فيديو", "تسويق محتوى", "وكالة إعلانات"],
    faqs: [
      { q: "هل تحتاج وكالات التسويق للسيو؟", a: "بالتأكيد! وكالة التسويق يجب أن تثبت قدرتها بترتيبها هي أولاً." },
      { q: "كيف أثبت خبرتي عبر السيو؟", a: "بالترتيب في كلمات تنافسية ونشر دراسات حالة ومحتوى متميز." },
      { q: "ما أهم الكلمات لوكالات التسويق؟", a: "'وكالة تسويق [المدينة]'، 'شركة تسويق رقمي'، 'إدارة حملات إعلانية'." },
      { q: "هل دراسات الحالة مهمة؟", a: "نعم جدًا، دراسات الحالة تثبت نتائجك وتبني الثقة." },
      { q: "ما تكلفة السيو لوكالات التسويق؟", a: "تبدأ من 600 دولار شهريًا." },
    ],
    challenges: [
      { title: "المصداقية", desc: "وكالة تسويق يجب أن تكون مرئية هي نفسها أولاً." },
      { title: "منافسة شديدة", desc: "وكالات التسويق كثيرة وتتنافس بقوة." },
      { title: "تنوع الخدمات", desc: "كل خدمة تسويقية تحتاج صفحة وسيو مستقل." },
      { title: "إثبات النتائج", desc: "العملاء يريدون رؤية نتائج حقيقية." },
    ],
    approach: [
      { title: "دراسات حالة", desc: "عرض نتائج حقيقية مع أرقام وإحصائيات." },
      { title: "مدونة تسويقية", desc: "مقالات تسويقية تثبت خبرتك وتجذب عملاء." },
      { title: "صفحات خدمات", desc: "صفحة لكل خدمة تسويقية بتفاصيل ونتائج." },
      { title: "سيو تنافسي", desc: "الترتيب في كلمات تسويقية تنافسية يثبت قدرتك." },
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   FRENCH INDUSTRIES — Top 35 high-demand in France/Africa
   ═══════════════════════════════════════════════════════ */

const frChallenges = (s: string) => [
  { title: "Concurrence Locale", desc: `Le marché ${s} est très compétitif. Se démarquer nécessite une stratégie SEO ciblée.` },
  { title: "Avis & Réputation", desc: `Les clients s'appuient fortement sur les avis en ligne pour choisir un prestataire ${s}.` },
  { title: "SEO Mobile", desc: `La majorité des recherches ${s} se font sur mobile. Votre site doit être parfaitement optimisé.` },
  { title: "Référencement Local", desc: `Le SEO local est crucial pour les entreprises ${s} servant des clients de proximité.` },
];

const frApproach = (s: string) => [
  { title: "Audit SEO Complet", desc: `Analyse approfondie de votre site ${s} et de la concurrence pour identifier toutes les opportunités.` },
  { title: "SEO Local Avancé", desc: `Optimisation de votre fiche Google Business, citations locales et avis pour dominer la recherche locale ${s}.` },
  { title: "Contenu de Qualité", desc: `Création de contenu expert et optimisé qui positionne votre entreprise ${s} comme référence du secteur.` },
  { title: "Suivi & Optimisation", desc: `Rapports mensuels détaillés et optimisation continue de votre stratégie SEO ${s}.` },
];

const frInd = (slug: string, title: string, shortTitle: string, metaDesc: string, heroDesc: string, icon: LucideIcon, category: string, keywords: string[], faqs: IndustryFaq[]): MiniEntry => ({
  slug, title, shortTitle, metaTitle: `${title} - Référencement et Marketing Digital`, metaDesc, icon, category, heroHighlight: shortTitle, heroDesc, keywords, faqs,
  challenges: frChallenges(shortTitle.toLowerCase()),
  approach: frApproach(shortTitle.toLowerCase()),
});

const frIndustries: MiniEntry[] = [
  frInd("restaurant-seo-fr", "SEO pour Restaurants", "Restaurants", "Référencement pour restaurants et cafés. Augmentez vos réservations.", "Attirez plus de clients dans votre restaurant avec un SEO qui vous place en tête des résultats de recherche locaux.", UtensilsCrossed, "Food & Hospitality",
    ["restaurant près de moi", "meilleur restaurant", "réservation restaurant", "restaurant italien", "restaurant japonais", "brunch", "restaurant gastronomique", "livraison repas", "terrasse restaurant", "restaurant familial"],
    [{ q: "Le SEO est-il important pour un restaurant ?", a: "Oui, 90% des clients cherchent un restaurant en ligne avant de s'y rendre. Le SEO assure votre visibilité." }, { q: "Comment améliorer mon classement Google Maps ?", a: "Optimisation de votre fiche Google Business, gestion des avis, photos de qualité et informations à jour." }, { q: "Combien coûte le SEO pour un restaurant ?", a: "Nos forfaits commencent à 400€/mois avec focus sur le SEO local et la gestion des avis." }, { q: "Les avis sont-ils importants ?", a: "Essentiels ! Un restaurant avec 4.5+ étoiles reçoit beaucoup plus de visites." }, { q: "Combien de temps pour voir des résultats ?", a: "Les premiers résultats apparaissent en 2-3 mois, avec des améliorations significatives en 4-6 mois." }]),
  frInd("immobilier-seo", "SEO Immobilier", "Immobilier", "Référencement pour agences immobilières. Attirez acheteurs et vendeurs.", "Générez plus de mandats et de contacts acheteurs avec un SEO immobilier performant.", Building2, "Real Estate & Property",
    ["agence immobilière", "maison à vendre", "appartement à louer", "estimation immobilière", "achat immobilier", "location appartement", "terrain à vendre", "investissement locatif", "agent immobilier", "viager"],
    [{ q: "Pourquoi le SEO pour l'immobilier ?", a: "95% des acheteurs commencent leur recherche en ligne. Le SEO positionne votre agence devant ces prospects qualifiés." }, { q: "Quels mots-clés cibler ?", a: "'Maison à vendre [ville]', 'estimation gratuite', 'agence immobilière [quartier]' sont parmi les plus recherchés." }, { q: "Combien de temps pour les résultats ?", a: "2-3 mois pour les premières améliorations, 4-6 mois pour des résultats significatifs." }, { q: "Le SEO local est-il important ?", a: "Absolument. L'immobilier est intrinsèquement local. Google Maps et le référencement local sont essentiels." }, { q: "Quel budget prévoir ?", a: "Nos forfaits SEO immobilier commencent à 600€/mois." }]),
  frInd("avocat-seo", "SEO pour Avocats", "Avocats", "Référencement pour cabinets d'avocats. Attirez de nouveaux clients.", "Développez votre clientèle avec un SEO juridique qui vous positionne comme expert.", Scale, "Legal & Professional Services",
    ["avocat près de moi", "cabinet d'avocats", "avocat droit du travail", "avocat divorce", "consultation juridique", "avocat pénal", "avocat immobilier", "avocat droit des affaires", "aide juridique", "avocat gratuit"],
    [{ q: "Les avocats ont-ils besoin du SEO ?", a: "Oui, la majorité des personnes cherchent un avocat en ligne. Être visible est crucial pour attirer de nouveaux clients." }, { q: "Quels mots-clés pour un avocat ?", a: "'Avocat [spécialité] [ville]', 'consultation juridique gratuite', 'meilleur avocat [domaine]'." }, { q: "Le contenu juridique est-il important ?", a: "Essentiel. Les articles de blog juridiques attirent des prospects qualifiés et renforcent votre autorité." }, { q: "Combien coûte le SEO pour avocats ?", a: "Nos forfaits commencent à 600€/mois selon la spécialité et la concurrence locale." }, { q: "Combien de temps pour les résultats ?", a: "3-6 mois pour des résultats tangibles dans un secteur aussi compétitif que le juridique." }]),
  frInd("dentiste-seo", "SEO pour Dentistes", "Dentistes", "Référencement pour cabinets dentaires. Attirez de nouveaux patients.", "Remplissez votre agenda de patients avec un SEO dentaire performant.", Stethoscope, "Healthcare & Medical",
    ["dentiste près de moi", "cabinet dentaire", "implant dentaire", "orthodontiste", "blanchiment dentaire", "urgence dentaire", "facettes dentaires", "prothèse dentaire", "détartrage", "dentiste enfant"],
    [{ q: "Le SEO est-il efficace pour les dentistes ?", a: "Très efficace. La plupart des patients cherchent un dentiste en ligne. Le SEO local est particulièrement important." }, { q: "Quels mots-clés cibler ?", a: "'Dentiste [ville]', 'implant dentaire prix', 'urgence dentaire', 'blanchiment dentaire'." }, { q: "Les avis patients comptent-ils ?", a: "Enormément. Les avis Google influencent fortement le choix d'un dentiste par les patients." }, { q: "Combien de temps pour les résultats ?", a: "2-4 mois pour les premières améliorations de classement." }, { q: "Quel est le coût ?", a: "Nos forfaits SEO dentaire commencent à 500€/mois." }]),
  frInd("plombier-seo", "SEO pour Plombiers", "Plombiers", "Référencement pour plombiers. Générez plus d'appels urgents.", "Soyez le premier plombier trouvé par les clients en urgence avec un SEO local puissant.", Wrench, "Home Services & Trades",
    ["plombier près de moi", "plombier urgence", "fuite d'eau", "débouchage", "chauffe-eau", "plombier pas cher", "réparation plomberie", "installation sanitaire", "robinet", "canalisations bouchées"],
    [{ q: "Pourquoi le SEO pour un plombier ?", a: "Les urgences plomberie génèrent des recherches instantanées. Être #1 sur Google signifie recevoir l'appel en premier." }, { q: "Quels mots-clés pour un plombier ?", a: "'Plombier [ville]', 'plombier urgence', 'fuite d'eau réparation', 'débouchage canalisation'." }, { q: "Le SEO local fonctionne-t-il bien ?", a: "C'est le canal le plus efficace pour les plombiers. Google Maps est votre meilleur outil d'acquisition." }, { q: "Combien coûte le SEO ?", a: "À partir de 400€/mois avec focus sur le SEO local et les appels urgents." }, { q: "Combien de temps pour les résultats ?", a: "Le SEO local pour plombiers peut montrer des résultats dès 6-8 semaines." }]),
  frInd("electricien-seo", "SEO pour Électriciens", "Électriciens", "Référencement pour électriciens. Plus d'appels et de chantiers.", "Attirez plus de clients avec un SEO qui vous positionne comme l'électricien de référence.", Zap, "Home Services & Trades",
    ["électricien près de moi", "électricien urgence", "installation électrique", "panne électrique", "tableau électrique", "mise aux normes", "dépannage électrique", "électricien pas cher", "éclairage", "domotique"],
    [{ q: "Le SEO est-il utile pour un électricien ?", a: "Oui, les clients cherchent un électricien en ligne surtout en urgence. Le SEO local est votre meilleur investissement." }, { q: "Quels mots-clés cibler ?", a: "'Électricien [ville]', 'dépannage électrique urgence', 'installation électrique maison'." }, { q: "Google Maps est-il important ?", a: "Essentiel. La majorité des recherches d'électriciens sont locales et urgentes." }, { q: "Combien coûte le SEO ?", a: "À partir de 400€/mois." }, { q: "Résultats en combien de temps ?", a: "Premières améliorations en 4-8 semaines pour le SEO local." }]),
  frInd("salon-coiffure-seo", "SEO pour Salons de Coiffure", "Salons de Coiffure", "Référencement pour coiffeurs. Remplissez votre agenda.", "Attirez de nouveaux clients dans votre salon avec un SEO local performant.", Scissors, "Beauty & Wellness",
    ["coiffeur près de moi", "salon de coiffure", "coupe de cheveux", "coloration", "lissage brésilien", "barbier", "coiffeur homme", "extensions cheveux", "balayage", "mèches"],
    [{ q: "Le SEO aide-t-il les salons de coiffure ?", a: "Oui, beaucoup de clients cherchent un coiffeur en ligne. Le SEO local vous rend visible au bon moment." }, { q: "Quels mots-clés pour un coiffeur ?", a: "'Coiffeur [quartier]', 'salon de coiffure [ville]', 'barbier près de moi'." }, { q: "Les avis sont-ils importants ?", a: "Très. Les clients lisent les avis et regardent les photos avant de choisir un salon." }, { q: "Combien coûte le SEO ?", a: "À partir de 350€/mois." }, { q: "Combien de temps pour voir des résultats ?", a: "2-3 mois pour le SEO local, 4-6 mois pour le référencement organique complet." }]),
  frInd("ecommerce-seo-fr", "SEO E-commerce", "E-commerce", "Référencement pour boutiques en ligne. Augmentez vos ventes.", "Boostez vos ventes en ligne avec un SEO e-commerce qui attire des acheteurs qualifiés.", ShoppingBag, "Ecommerce & Retail",
    ["boutique en ligne", "acheter en ligne", "livraison gratuite", "promo", "soldes", "meilleures ventes", "comparateur prix", "avis produit", "code promo", "vente privée"],
    [{ q: "Comment le SEO augmente les ventes e-commerce ?", a: "Le SEO attire des visiteurs qui cherchent activement vos produits, avec des taux de conversion supérieurs à la pub." }, { q: "Quelle plateforme pour le SEO ?", a: "Nous optimisons Shopify, WooCommerce, PrestaShop et Magento." }, { q: "Les fiches produits sont-elles importantes ?", a: "Essentielles. Chaque fiche produit doit être unique et optimisée avec des données structurées." }, { q: "Combien de temps pour les résultats ?", a: "2-3 mois pour le trafic, 4-6 mois pour une augmentation significative des ventes." }, { q: "Quel budget prévoir ?", a: "À partir de 700€/mois selon la taille du catalogue." }]),
  frInd("medecin-seo", "SEO pour Médecins", "Médecins", "Référencement pour cabinets médicaux. Attirez de nouveaux patients.", "Développez votre patientèle avec un SEO médical conforme aux réglementations.", Heart, "Healthcare & Medical",
    ["médecin près de moi", "cabinet médical", "généraliste", "spécialiste", "prise de rendez-vous", "médecin traitant", "consultation médicale", "centre médical", "téléconsultation"],
    [{ q: "Les médecins ont-ils besoin de SEO ?", a: "Oui, de plus en plus de patients cherchent un médecin en ligne, surtout les nouveaux arrivants dans une ville." }, { q: "Quels mots-clés cibler ?", a: "'Médecin [spécialité] [ville]', 'rendez-vous médecin', 'cabinet médical [quartier]'." }, { q: "Le contenu médical est-il réglementé ?", a: "Oui, nous créons du contenu conforme aux réglementations et aux normes E-E-A-T de Google." }, { q: "Combien coûte le SEO médical ?", a: "À partir de 500€/mois." }, { q: "Les avis patients sont-ils importants ?", a: "Très. Les avis Google influencent fortement le choix d'un médecin." }]),
  frInd("boulangerie-seo", "SEO pour Boulangeries", "Boulangeries", "Référencement pour boulangeries-pâtisseries. Plus de clients.", "Attirez plus de clients dans votre boulangerie avec un SEO local efficace.", Store, "Food & Hospitality",
    ["boulangerie près de moi", "pâtisserie", "pain artisanal", "croissant", "gâteau d'anniversaire", "boulangerie artisanale", "viennoiseries", "traiteur boulanger", "gâteau mariage", "commande gâteau"],
    [{ q: "Une boulangerie a-t-elle besoin de SEO ?", a: "Oui ! 'Boulangerie près de moi' est une recherche très fréquente. Le SEO local vous assure d'être trouvé." }, { q: "Comment optimiser Google Maps ?", a: "Photos de qualité, horaires à jour, avis positifs et publications régulières." }, { q: "Quels mots-clés cibler ?", a: "'Boulangerie [quartier]', 'pâtisserie artisanale [ville]', 'gâteau anniversaire'." }, { q: "Combien coûte le SEO ?", a: "À partir de 300€/mois avec focus sur le SEO local." }, { q: "Les photos sont-elles importantes ?", a: "Essentielles ! Des photos appétissantes attirent les clients et améliorent votre fiche Google." }]),
  frInd("serrurier-seo", "SEO pour Serruriers", "Serruriers", "Référencement pour serruriers. Recevez plus d'appels d'urgence.", "Soyez le premier serrurier appelé en cas d'urgence grâce au SEO local.", Wrench, "Home Services & Trades",
    ["serrurier urgence", "serrurier près de moi", "ouverture de porte", "changement serrure", "porte claquée", "serrurier 24h", "blindage porte", "clé cassée", "serrure bloquée"],
    [{ q: "Le SEO est-il crucial pour un serrurier ?", a: "Vital ! Les recherches de serrurier sont presque toujours urgentes. Être #1 signifie recevoir l'appel." }, { q: "Comment se démarquer des arnaques ?", a: "Avis vérifiés, tarifs transparents, certifications affichées et contenu de confiance." }, { q: "Quels mots-clés cibler ?", a: "'Serrurier [ville]', 'serrurier urgence nuit', 'ouverture porte claquée'." }, { q: "Combien de temps pour les résultats ?", a: "Le SEO local pour serruriers peut être rapide : 4-8 semaines pour les premières positions." }, { q: "Quel budget ?", a: "À partir de 400€/mois." }]),
  frInd("veterinaire-seo", "SEO pour Vétérinaires", "Vétérinaires", "Référencement pour cliniques vétérinaires.", "Attirez les propriétaires d'animaux avec un SEO vétérinaire ciblé.", Dog, "Healthcare & Medical",
    ["vétérinaire près de moi", "clinique vétérinaire", "urgence vétérinaire", "vaccination chien", "stérilisation chat", "vétérinaire NAC", "toilettage", "pension animaux"],
    [{ q: "Le SEO aide-t-il les vétérinaires ?", a: "Oui, les propriétaires d'animaux cherchent un vétérinaire en ligne, surtout en cas d'urgence." }, { q: "Quels mots-clés ?", a: "'Vétérinaire [ville]', 'urgence vétérinaire', 'vaccination chien prix'." }, { q: "Les avis comptent-ils ?", a: "Beaucoup. Les propriétaires d'animaux sont très attentifs aux avis d'autres propriétaires." }, { q: "Combien coûte le SEO ?", a: "À partir de 400€/mois." }, { q: "Résultats en combien de temps ?", a: "2-3 mois pour le SEO local." }]),
  frInd("hotel-seo-fr", "SEO pour Hôtels", "Hôtels", "Référencement pour hôtels et hébergements. Plus de réservations directes.", "Augmentez vos réservations directes et réduisez les commissions OTA.", Plane, "Food & Hospitality",
    ["hôtel [ville]", "chambre d'hôtel", "réservation hôtel", "hôtel pas cher", "hôtel de charme", "gîte", "chambre d'hôtes", "hébergement", "week-end romantique"],
    [{ q: "Le SEO peut-il concurrencer Booking ?", a: "Oui ! Un bon SEO génère des réservations directes sans commission de 15-25%." }, { q: "Quels mots-clés cibler ?", a: "'Hôtel [ville]', 'chambre d'hôtes [région]', 'hébergement [destination]'." }, { q: "Le contenu est-il important ?", a: "Oui, des pages sur les activités et attractions locales attirent les voyageurs." }, { q: "Combien de temps pour les résultats ?", a: "3-6 mois selon la concurrence de votre destination." }, { q: "Quel budget ?", a: "À partir de 600€/mois." }]),
  frInd("coach-seo", "SEO pour Coachs", "Coachs & Consultants", "Référencement pour coachs et consultants. Attirez des clients.", "Développez votre activité de coaching avec un SEO qui attire votre clientèle idéale.", GraduationCap, "Education & Training",
    ["coach professionnel", "coaching entreprise", "développement personnel", "coach sportif", "consultant indépendant", "bilan de compétences", "formation coaching", "coach de vie", "mentor"],
    [{ q: "Le SEO est-il utile pour un coach ?", a: "Très. Les personnes cherchent un coach en ligne. Le SEO positionne votre expertise au bon moment." }, { q: "Quels mots-clés cibler ?", a: "'Coach [spécialité] [ville]', 'coaching professionnel', 'développement personnel'." }, { q: "Le contenu aide-t-il ?", a: "Absolument. Des articles sur votre domaine d'expertise attirent et qualifient vos prospects." }, { q: "Combien coûte le SEO ?", a: "À partir de 400€/mois." }, { q: "Résultats ?", a: "3-4 mois pour les premiers résultats." }]),
  frInd("fitness-seo-fr", "SEO pour Salles de Sport", "Salles de Sport", "Référencement pour salles de sport et fitness. Plus d'abonnés.", "Remplissez votre salle avec un SEO local qui attire les sportifs de votre zone.", Dumbbell, "Fitness & Sports",
    ["salle de sport près de moi", "fitness", "musculation", "cours de yoga", "crossfit", "pilates", "coach sportif", "abonnement salle de sport", "gymnastique"],
    [{ q: "Le SEO aide-t-il les salles de sport ?", a: "Oui, 'salle de sport près de moi' est une recherche très populaire. Le SEO local est essentiel." }, { q: "Comment attirer de nouveaux abonnés ?", a: "SEO local, avis positifs, et contenu fitness qui engage votre communauté." }, { q: "Quels mots-clés ?", a: "'Salle de sport [ville]', 'cours de yoga [quartier]', 'crossfit [ville]'." }, { q: "Combien coûte le SEO ?", a: "À partir de 400€/mois." }, { q: "Résultats en combien de temps ?", a: "2-3 mois pour le SEO local." }]),
  frInd("demenagement-seo", "SEO pour Déménageurs", "Déménageurs", "Référencement pour entreprises de déménagement.", "Attirez plus de clients en période de déménagement avec un SEO ciblé.", Truck, "Home Services & Trades",
    ["déménageur près de moi", "entreprise déménagement", "devis déménagement", "déménagement pas cher", "monte-meuble", "garde-meuble", "déménagement international", "cartons déménagement"],
    [{ q: "Le SEO fonctionne-t-il pour les déménageurs ?", a: "Très bien. Les clients comparent les déménageurs en ligne et demandent plusieurs devis." }, { q: "Quels mots-clés cibler ?", a: "'Déménageur [ville]', 'devis déménagement gratuit', 'entreprise déménagement [région]'." }, { q: "Comment se démarquer ?", a: "Avis vérifiés, devis en ligne, et contenu utile sur l'organisation d'un déménagement." }, { q: "Combien coûte le SEO ?", a: "À partir de 450€/mois." }, { q: "Résultats ?", a: "2-4 mois selon la concurrence locale." }]),
  frInd("pharmacie-seo-fr", "SEO pour Pharmacies", "Pharmacies", "Référencement pour pharmacies et parapharmacies.", "Augmentez la visibilité de votre pharmacie avec un SEO local et e-commerce.", Stethoscope, "Healthcare & Medical",
    ["pharmacie près de moi", "pharmacie de garde", "pharmacie en ligne", "parapharmacie", "médicaments", "ordonnance", "compléments alimentaires", "cosmétiques pharmacie"],
    [{ q: "Les pharmacies ont-elles besoin de SEO ?", a: "Oui, surtout pour la vente en ligne et la visibilité locale (pharmacie de garde)." }, { q: "Quels mots-clés cibler ?", a: "'Pharmacie [quartier]', 'pharmacie de garde [ville]', 'pharmacie en ligne France'." }, { q: "Le e-commerce pharmaceutique est-il réglementé ?", a: "Oui, nous créons du contenu conforme aux réglementations pharmaceutiques." }, { q: "Combien coûte le SEO ?", a: "À partir de 500€/mois." }, { q: "Résultats ?", a: "2-3 mois pour le SEO local, 4-6 mois pour le e-commerce." }]),
  frInd("auto-seo-fr", "SEO Automobile", "Automobile", "Référencement pour garages et concessions automobiles.", "Attirez plus de clients dans votre garage ou concession avec un SEO automobile.", Car, "Automotive & Transportation",
    ["garage automobile", "réparation voiture", "contrôle technique", "concessionnaire", "voiture occasion", "vidange", "pneus", "carrosserie", "mécanicien près de moi"],
    [{ q: "Le SEO est-il utile pour un garage ?", a: "Oui, les automobilistes cherchent un mécanicien ou un garage en ligne, surtout en cas de panne." }, { q: "Quels mots-clés cibler ?", a: "'Garage [ville]', 'contrôle technique [quartier]', 'voiture occasion [marque]'." }, { q: "Google Maps est-il important ?", a: "Essentiel pour les garages et concessions. Les clients cherchent le plus proche." }, { q: "Combien coûte le SEO ?", a: "À partir de 450€/mois." }, { q: "Résultats ?", a: "2-4 mois pour le SEO local." }]),
  frInd("architecte-seo", "SEO pour Architectes", "Architectes", "Référencement pour cabinets d'architectes.", "Attirez des projets de construction et rénovation avec un SEO architecte.", Building2, "Home Services & Trades",
    ["architecte près de moi", "cabinet architecte", "architecte intérieur", "plan maison", "rénovation maison", "extension maison", "architecte DPLG", "permis de construire"],
    [{ q: "Le SEO est-il important pour un architecte ?", a: "Oui, les clients cherchent un architecte en ligne pour leurs projets de construction ou rénovation." }, { q: "Quels mots-clés cibler ?", a: "'Architecte [ville]', 'architecte intérieur [quartier]', 'plan maison contemporaine'." }, { q: "Le portfolio est-il important pour le SEO ?", a: "Très. Un portfolio optimisé avec de belles photos attire et convertit les prospects." }, { q: "Combien coûte le SEO ?", a: "À partir de 500€/mois." }, { q: "Résultats ?", a: "3-5 mois pour un architecte." }]),
  frInd("spa-seo-fr", "SEO pour Spas", "Spas & Bien-être", "Référencement pour spas et centres de bien-être.", "Remplissez votre planning avec un SEO qui attire les amateurs de bien-être.", Sparkles, "Beauty & Wellness",
    ["spa près de moi", "massage", "hammam", "sauna", "soin du visage", "institut de beauté", "épilation", "manucure", "centre de bien-être", "modelage"],
    [{ q: "Le SEO aide-t-il les spas ?", a: "Oui, les clients recherchent des soins bien-être en ligne. Le SEO local est très efficace pour les spas." }, { q: "Quels mots-clés ?", a: "'Spa [ville]', 'massage relaxant [quartier]', 'hammam [ville]'." }, { q: "Les avis comptent-ils ?", a: "Énormément. Les clients choisissent un spa principalement sur les avis et photos." }, { q: "Combien coûte le SEO ?", a: "À partir de 400€/mois." }, { q: "Résultats ?", a: "2-3 mois pour le SEO local." }]),
  frInd("assurance-seo-fr", "SEO pour Assurances", "Assurances", "Référencement pour courtiers et agents d'assurance.", "Attirez des prospects qualifiés avec un SEO assurance performant.", Landmark, "Finance & Banking",
    ["assurance auto", "assurance habitation", "mutuelle santé", "assurance vie", "courtier assurance", "comparateur assurance", "assurance professionnelle", "devis assurance"],
    [{ q: "Le SEO fonctionne-t-il pour les assurances ?", a: "Très bien. Les consommateurs comparent les assurances en ligne avant de souscrire." }, { q: "Quels mots-clés cibler ?", a: "'Assurance [type] [ville]', 'meilleure mutuelle', 'devis assurance auto gratuit'." }, { q: "Le contenu est-il important ?", a: "Oui, des articles explicatifs sur les garanties et comparatifs attirent des prospects qualifiés." }, { q: "Combien coûte le SEO ?", a: "À partir de 600€/mois (secteur compétitif)." }, { q: "Résultats ?", a: "4-6 mois dans ce secteur très concurrentiel." }]),
];

/* ═════════════════════════════════════════════════════════════
   GERMAN INDUSTRIES — Top 30 high-demand in DACH region
   ═════════════════════════════════════════════════════════════ */

const deChallenges = (s: string) => [
  { title: "Starker Wettbewerb", desc: `Der ${s}-Markt ist hart umkämpft. Gezielte SEO-Strategien sind entscheidend.` },
  { title: "Bewertungen", desc: `Kunden verlassen sich stark auf Online-Bewertungen bei der Wahl eines ${s}-Anbieters.` },
  { title: "Mobile Suche", desc: `Die meisten ${s}-Suchen erfolgen mobil. Ihre Website muss perfekt optimiert sein.` },
  { title: "Lokale Sichtbarkeit", desc: `Lokales SEO ist entscheidend für ${s}-Unternehmen mit Kundenkontakt vor Ort.` },
];
const deApproach = (s: string) => [
  { title: "SEO-Audit", desc: `Umfassende Analyse Ihrer ${s}-Website und der Wettbewerbslandschaft.` },
  { title: "Lokales SEO", desc: `Google Business Profil, lokale Citations und Bewertungsmanagement für ${s}.` },
  { title: "Content-Erstellung", desc: `Hochwertiger, optimierter Content, der Ihre ${s}-Expertise demonstriert.` },
  { title: "Monitoring & Reporting", desc: `Detaillierte monatliche Berichte über Ihre ${s}-SEO-Performance.` },
];

const deInd = (slug: string, title: string, shortTitle: string, metaDesc: string, heroDesc: string, icon: LucideIcon, category: string, keywords: string[], faqs: IndustryFaq[]): MiniEntry => ({
  slug, title, shortTitle, metaTitle: `${title} - Suchmaschinenoptimierung & Online-Marketing`, metaDesc, icon, category, heroHighlight: shortTitle, heroDesc, keywords, faqs,
  challenges: deChallenges(shortTitle),
  approach: deApproach(shortTitle),
});

const deIndustries: MiniEntry[] = [
  deInd("zahnarzt-seo", "SEO für Zahnärzte", "Zahnärzte", "SEO für Zahnarztpraxen. Mehr Patienten gewinnen.", "Gewinnen Sie mehr Patienten mit gezieltem SEO für Ihre Zahnarztpraxis.", Stethoscope, "Healthcare & Medical",
    ["Zahnarzt in der Nähe", "Zahnarztpraxis", "Zahnimplantat", "Bleaching", "Kieferorthopäde", "Zahnreinigung", "Zahnschmerzen", "Veneers", "Zahnersatz", "Kinderzahnarzt"],
    [{ q: "Brauchen Zahnärzte SEO?", a: "Ja! Die meisten Patienten suchen ihren Zahnarzt online. Lokales SEO ist besonders wichtig." }, { q: "Welche Keywords sind wichtig?", a: "'Zahnarzt [Stadt]', 'Zahnimplantat Kosten', 'Bleaching [Stadt]', 'Notfall Zahnarzt'." }, { q: "Was kostet SEO für Zahnärzte?", a: "Unsere Pakete beginnen ab 500€/Monat." }, { q: "Wie lange dauert es?", a: "Erste Ergebnisse in 2-3 Monaten, signifikante Verbesserungen in 4-6 Monaten." }, { q: "Sind Bewertungen wichtig?", a: "Sehr! Patientenbewertungen beeinflussen maßgeblich die Praxiswahl." }]),
  deInd("immobilien-seo", "SEO für Immobilien", "Immobilien", "SEO für Immobilienmakler und -unternehmen.", "Gewinnen Sie mehr Käufer und Verkäufer mit Immobilien-SEO.", Building2, "Real Estate & Property",
    ["Immobilienmakler", "Haus kaufen", "Wohnung mieten", "Immobilienbewertung", "Grundstück kaufen", "Eigentumswohnung", "Mietwohnung", "Immobilienverkauf", "Hausverwaltung"],
    [{ q: "Warum SEO für Immobilien?", a: "95% der Käufer beginnen ihre Suche online. SEO positioniert Sie vor diesen Interessenten." }, { q: "Welche Keywords?", a: "'Immobilienmakler [Stadt]', 'Haus kaufen [Region]', 'Wohnung mieten [Stadt]'." }, { q: "Was kostet es?", a: "Ab 600€/Monat." }, { q: "Wie schnell sehe ich Ergebnisse?", a: "3-4 Monate für erste Verbesserungen." }, { q: "Ist lokales SEO wichtig?", a: "Absolut. Immobilien sind per Definition lokal." }]),
  deInd("rechtsanwalt-seo", "SEO für Rechtsanwälte", "Rechtsanwälte", "SEO für Anwaltskanzleien. Mehr Mandanten gewinnen.", "Gewinnen Sie neue Mandanten mit SEO für Rechtsanwälte.", Scale, "Legal & Professional Services",
    ["Rechtsanwalt in der Nähe", "Anwaltskanzlei", "Fachanwalt Arbeitsrecht", "Scheidungsanwalt", "Strafverteidiger", "Rechtsberatung", "Anwalt Mietrecht", "Verkehrsrecht Anwalt"],
    [{ q: "Brauchen Anwälte SEO?", a: "Ja, potenzielle Mandanten suchen Rechtsanwälte zunehmend online." }, { q: "Welche Keywords?", a: "'Anwalt [Fachgebiet] [Stadt]', 'Rechtsberatung [Thema]', 'Fachanwalt [Gebiet]'." }, { q: "Was kostet es?", a: "Ab 600€/Monat." }, { q: "Wie lange dauert es?", a: "3-6 Monate für signifikante Ergebnisse." }, { q: "Ist Content wichtig?", a: "Sehr. Fachbeiträge stärken Ihre Autorität und ziehen Mandanten an." }]),
  deInd("autohaus-seo", "SEO für Autohäuser", "Autohäuser", "SEO für Autohändler und KFZ-Betriebe.", "Verkaufen Sie mehr Autos mit gezieltem Autohaus-SEO.", Car, "Automotive & Transportation",
    ["Autohaus", "Gebrauchtwagen", "Neuwagen", "Auto kaufen", "KFZ-Werkstatt", "Autohändler", "Leasing", "Probefahrt", "Auto Finanzierung"],
    [{ q: "Hilft SEO Autohäusern?", a: "Ja! Autokäufer beginnen ihre Recherche online. SEO bringt qualifizierte Leads." }, { q: "Welche Keywords?", a: "'Autohaus [Stadt]', '[Marke] Gebrauchtwagen', 'Auto kaufen [Region]'." }, { q: "Was kostet es?", a: "Ab 600€/Monat." }, { q: "Wie schnell Ergebnisse?", a: "3-4 Monate für erste Verbesserungen." }, { q: "Google Maps wichtig?", a: "Sehr wichtig für die lokale Sichtbarkeit Ihres Autohauses." }]),
  deInd("handwerker-seo", "SEO für Handwerker", "Handwerker", "SEO für Handwerksbetriebe. Mehr Aufträge gewinnen.", "Gewinnen Sie mehr Aufträge mit SEO für Ihr Handwerksunternehmen.", Hammer, "Home Services & Trades",
    ["Handwerker in der Nähe", "Maler", "Schreiner", "Fliesenleger", "Sanitär", "Heizung", "Dachdecker", "Elektriker", "Trockenbau", "Renovierung"],
    [{ q: "Brauchen Handwerker SEO?", a: "Ja! Kunden suchen Handwerker zunehmend online statt im Telefonbuch." }, { q: "Welche Keywords?", a: "'Handwerker [Stadt]', '[Gewerk] in der Nähe', 'Renovierung [Region]'." }, { q: "Was kostet es?", a: "Ab 400€/Monat." }, { q: "Wie schnell Ergebnisse?", a: "2-3 Monate für lokales SEO." }, { q: "Google Maps wichtig?", a: "Essenziell für Handwerksbetriebe." }]),
  deInd("steuerberater-seo", "SEO für Steuerberater", "Steuerberater", "SEO für Steuerberater und Steuerkanzleien.", "Gewinnen Sie neue Mandanten mit SEO für Ihre Steuerkanzlei.", Landmark, "Finance & Banking",
    ["Steuerberater in der Nähe", "Steuerkanzlei", "Steuererklärung", "Buchhaltung", "Lohnabrechnung", "Finanzamt", "Jahresabschluss", "Steuerberatung Freiberufler"],
    [{ q: "Brauchen Steuerberater SEO?", a: "Ja, viele Mandanten suchen einen neuen Steuerberater online." }, { q: "Welche Keywords?", a: "'Steuerberater [Stadt]', 'Steuererklärung machen lassen', 'Steuerberatung [Branche]'." }, { q: "Was kostet es?", a: "Ab 500€/Monat." }, { q: "Content wichtig?", a: "Ja, Fachbeiträge zu Steuerthemen ziehen qualifizierte Mandanten an." }, { q: "Ergebnisse?", a: "3-5 Monate für signifikante Verbesserungen." }]),
  deInd("arzt-seo", "SEO für Ärzte", "Ärzte", "SEO für Arztpraxen. Mehr Patienten gewinnen.", "Gewinnen Sie neue Patienten mit SEO für Ihre Arztpraxis.", Heart, "Healthcare & Medical",
    ["Arzt in der Nähe", "Hausarzt", "Facharzt", "Orthopäde", "Hautarzt", "HNO-Arzt", "Kinderarzt", "Augenarzt", "Internist", "Termin Arzt"],
    [{ q: "Brauchen Ärzte SEO?", a: "Ja, immer mehr Patienten wählen ihren Arzt nach Online-Recherche." }, { q: "Welche Keywords?", a: "'[Facharzt] [Stadt]', 'Arzt in der Nähe', 'Termin [Facharzt]'." }, { q: "Was kostet es?", a: "Ab 500€/Monat." }, { q: "Bewertungen wichtig?", a: "Sehr wichtig für die Patientengewinnung." }, { q: "Ergebnisse?", a: "2-4 Monate für lokales SEO." }]),
  deInd("restaurant-seo-de", "SEO für Restaurants", "Restaurants", "SEO für Restaurants und Gastronomie.", "Bringen Sie mehr Gäste in Ihr Restaurant mit SEO.", UtensilsCrossed, "Food & Hospitality",
    ["Restaurant in der Nähe", "bestes Restaurant", "Tisch reservieren", "Lieferservice", "italienisches Restaurant", "griechisches Restaurant", "Brunch", "Biergarten"],
    [{ q: "Brauchen Restaurants SEO?", a: "Ja, die meisten Gäste suchen Restaurants online." }, { q: "Welche Keywords?", a: "'Restaurant [Stadt]', 'bestes [Küche] Restaurant', '[Küche] in der Nähe'." }, { q: "Was kostet es?", a: "Ab 400€/Monat." }, { q: "Google Maps wichtig?", a: "Essenziell für die Gastronomie." }, { q: "Bewertungen?", a: "Bewertungen sind der wichtigste Faktor bei der Restaurantwahl." }]),
  deInd("friseur-seo", "SEO für Friseure", "Friseure", "SEO für Friseursalons. Mehr Kunden gewinnen.", "Füllen Sie Ihren Terminkalender mit SEO für Ihren Friseursalon.", Scissors, "Beauty & Wellness",
    ["Friseur in der Nähe", "Friseursalon", "Haarschnitt", "Färben", "Barbershop", "Damenfriseur", "Herrenfriseur", "Haarverlängerung", "Hochzeitsfrisur"],
    [{ q: "Hilft SEO Friseuren?", a: "Ja, viele Kunden suchen einen neuen Friseur online." }, { q: "Welche Keywords?", a: "'Friseur [Stadtteil]', 'Barbershop [Stadt]', 'Damenfriseur in der Nähe'." }, { q: "Was kostet es?", a: "Ab 350€/Monat." }, { q: "Bewertungen wichtig?", a: "Sehr! Kunden lesen Bewertungen und sehen Fotos vor der Buchung." }, { q: "Ergebnisse?", a: "2-3 Monate für lokales SEO." }]),
  deInd("fitnessstudio-seo", "SEO für Fitnessstudios", "Fitnessstudios", "SEO für Fitnessstudios und Gyms.", "Gewinnen Sie neue Mitglieder mit SEO für Ihr Fitnessstudio.", Dumbbell, "Fitness & Sports",
    ["Fitnessstudio in der Nähe", "Gym", "Krafttraining", "Yoga Kurs", "CrossFit", "Personal Trainer", "Fitness Abo", "Schwimmbad", "Pilates"],
    [{ q: "Hilft SEO Fitnessstudios?", a: "Ja, 'Fitnessstudio in der Nähe' ist eine häufige Suche." }, { q: "Welche Keywords?", a: "'Fitnessstudio [Stadt]', 'Gym [Stadtteil]', 'Personal Trainer [Stadt]'." }, { q: "Was kostet es?", a: "Ab 400€/Monat." }, { q: "Bewertungen?", a: "Sehr wichtig für die Mitgliedergewinnung." }, { q: "Ergebnisse?", a: "2-3 Monate für lokales SEO." }]),
  deInd("hotel-seo-de", "SEO für Hotels", "Hotels", "SEO für Hotels und Pensionen. Mehr Direktbuchungen.", "Steigern Sie Ihre Direktbuchungen mit Hotel-SEO.", Plane, "Food & Hospitality",
    ["Hotel [Stadt]", "Pension", "Übernachtung", "Hotelzimmer", "Wellnesshotel", "Familienhotel", "Boutiquehotel", "Frühstückshotel"],
    [{ q: "Kann SEO gegen Booking konkurrieren?", a: "Ja! Gutes SEO generiert Direktbuchungen ohne 15-25% Provision." }, { q: "Welche Keywords?", a: "'Hotel [Stadt]', 'Pension [Region]', 'Wellnesshotel [Gebiet]'." }, { q: "Was kostet es?", a: "Ab 600€/Monat." }, { q: "Wie lange dauert es?", a: "3-6 Monate je nach Wettbewerb." }, { q: "Content wichtig?", a: "Ja, Seiten über lokale Sehenswürdigkeiten ziehen Reisende an." }]),
  deInd("onlineshop-seo", "SEO für Online-Shops", "Online-Shops", "SEO für E-Commerce und Online-Shops.", "Steigern Sie Ihren Umsatz mit E-Commerce-SEO.", ShoppingBag, "Ecommerce & Retail",
    ["Online-Shop", "online kaufen", "kostenloser Versand", "Angebote", "Bestseller", "Produktvergleich", "Kundenbewertung", "Rabatt", "Sale"],
    [{ q: "Wie hilft SEO Online-Shops?", a: "SEO bringt kaufbereite Besucher, die aktiv nach Ihren Produkten suchen." }, { q: "Welche Plattformen?", a: "Wir optimieren Shopify, WooCommerce, Shopware und Magento." }, { q: "Was kostet es?", a: "Ab 700€/Monat je nach Kataloggrüße." }, { q: "Ergebnisse?", a: "2-3 Monate für Traffic, 4-6 Monate für signifikante Umsatzsteigerung." }, { q: "Produktseiten wichtig?", a: "Ja, jede Produktseite muss einzigartig und mit strukturierten Daten optimiert sein." }]),
  deInd("versicherung-seo", "SEO für Versicherungen", "Versicherungen", "SEO für Versicherungsmakler und -agenturen.", "Gewinnen Sie qualifizierte Leads mit Versicherungs-SEO.", Landmark, "Finance & Banking",
    ["Versicherung vergleichen", "Kfz-Versicherung", "Krankenversicherung", "Haftpflichtversicherung", "Lebensversicherung", "Versicherungsmakler", "Hausratversicherung"],
    [{ q: "Funktioniert SEO für Versicherungen?", a: "Ja, Verbraucher vergleichen Versicherungen online vor dem Abschluss." }, { q: "Welche Keywords?", a: "'Versicherung [Typ] vergleichen', 'Versicherungsmakler [Stadt]'." }, { q: "Was kostet es?", a: "Ab 600€/Monat (wettbewerbsintensiv)." }, { q: "Content wichtig?", a: "Ja, Erklärungsartikel ziehen qualifizierte Interessenten an." }, { q: "Ergebnisse?", a: "4-6 Monate in diesem wettbewerbsintensiven Markt." }]),
];

/* ═══════════════════════════════════════════════════════
   SPANISH INDUSTRIES — Top 30 high-demand in Spain/LATAM
   ═══════════════════════════════════════════════════════ */

const esChallenges = (s: string) => [
  { title: "Competencia Local", desc: `El mercado ${s} es muy competitivo. Destacar requiere una estrategia SEO enfocada.` },
  { title: "Reseñas y Reputación", desc: `Los clientes confían mucho en las reseñas para elegir un proveedor ${s}.` },
  { title: "SEO Móvil", desc: `La mayoría de búsquedas ${s} son en móvil. Tu sitio debe estar optimizado.` },
  { title: "Posicionamiento Local", desc: `El SEO local es crucial para negocios ${s} con atención presencial.` },
];
const esApproach = (s: string) => [
  { title: "Auditoría SEO", desc: `Análisis completo de tu sitio ${s} y la competencia para identificar oportunidades.` },
  { title: "SEO Local", desc: `Optimización de Google Business, citas locales y gestión de reseñas para ${s}.` },
  { title: "Contenido Experto", desc: `Creación de contenido optimizado que posiciona tu negocio ${s} como referente.` },
  { title: "Seguimiento", desc: `Informes mensuales detallados y optimización continua de tu estrategia ${s}.` },
];

const esInd = (slug: string, title: string, shortTitle: string, metaDesc: string, heroDesc: string, icon: LucideIcon, category: string, keywords: string[], faqs: IndustryFaq[]): MiniEntry => ({
  slug, title, shortTitle, metaTitle: `${title} - Posicionamiento Web y Marketing Digital`, metaDesc, icon, category, heroHighlight: shortTitle, heroDesc, keywords, faqs,
  challenges: esChallenges(shortTitle.toLowerCase()),
  approach: esApproach(shortTitle.toLowerCase()),
});

const esIndustries: MiniEntry[] = [
  esInd("restaurantes-seo", "SEO para Restaurantes", "Restaurantes", "SEO para restaurantes y cafeterías. Más reservas y pedidos.", "Atrae más clientes a tu restaurante con SEO local que te posiciona en los primeros resultados.", UtensilsCrossed, "Food & Hospitality",
    ["restaurante cerca de mí", "mejor restaurante", "reservar restaurante", "comida a domicilio", "restaurante italiano", "marisquería", "restaurante mexicano", "brunch", "terraza", "restaurante familiar"],
    [{ q: "¿Funciona el SEO para restaurantes?", a: "Sí, el 90% de los clientes buscan restaurantes online antes de ir. El SEO te asegura visibilidad." }, { q: "¿Cómo mejorar en Google Maps?", a: "Optimizando tu ficha de Google Business con fotos, menú, horarios y gestionando reseñas." }, { q: "¿Cuánto cuesta el SEO?", a: "Nuestros planes empiezan desde $400/mes con enfoque en SEO local." }, { q: "¿Las reseñas importan?", a: "¡Mucho! Un restaurante con 4.5+ estrellas recibe significativamente más visitas." }, { q: "¿Cuánto tiempo para ver resultados?", a: "2-3 meses para mejoras iniciales, 4-6 meses para resultados significativos." }]),
  esInd("inmobiliaria-seo", "SEO Inmobiliario", "Inmobiliarias", "SEO para inmobiliarias y agentes de bienes raíces.", "Genera más contactos de compradores y vendedores con SEO inmobiliario.", Building2, "Real Estate & Property",
    ["inmobiliaria cerca de mí", "casas en venta", "departamentos en renta", "bienes raíces", "terrenos", "inversión inmobiliaria", "agente inmobiliario", "avalúo", "hipoteca", "propiedades"],
    [{ q: "¿Por qué SEO inmobiliario?", a: "El 95% de los compradores inician su búsqueda online. El SEO te posiciona ante estos prospectos." }, { q: "¿Qué palabras clave usar?", a: "'Casas en venta [ciudad]', 'departamentos en renta [zona]', 'inmobiliaria [ciudad]'." }, { q: "¿Cuánto cuesta?", a: "Desde $600/mes." }, { q: "¿Cuánto tiempo para resultados?", a: "3-4 meses para primeras mejoras." }, { q: "¿El SEO local es importante?", a: "Absolutamente. Los bienes raíces son inherentemente locales." }]),
  esInd("abogados-seo", "SEO para Abogados", "Abogados", "SEO para despachos de abogados. Más clientes.", "Atrae nuevos clientes a tu despacho con SEO jurídico especializado.", Scale, "Legal & Professional Services",
    ["abogado cerca de mí", "despacho de abogados", "abogado laboral", "abogado de divorcios", "asesoría legal", "abogado penalista", "abogado de inmigración", "consulta legal gratuita"],
    [{ q: "¿Los abogados necesitan SEO?", a: "Sí, la mayoría de las personas buscan un abogado online. La visibilidad es clave." }, { q: "¿Qué palabras clave?", a: "'Abogado [especialidad] [ciudad]', 'consulta legal', 'mejor abogado [área]'." }, { q: "¿El contenido importa?", a: "Mucho. Artículos legales atraen prospectos y refuerzan tu autoridad." }, { q: "¿Cuánto cuesta?", a: "Desde $600/mes." }, { q: "¿Cuánto tiempo?", a: "3-6 meses para resultados significativos." }]),
  esInd("dentista-seo", "SEO para Dentistas", "Dentistas", "SEO para clínicas dentales. Más pacientes.", "Llena tu agenda de pacientes con SEO dental efectivo.", Stethoscope, "Healthcare & Medical",
    ["dentista cerca de mí", "clínica dental", "implantes dentales", "ortodoncia", "blanqueamiento dental", "urgencia dental", "carillas dentales", "limpieza dental", "endodoncia"],
    [{ q: "¿El SEO funciona para dentistas?", a: "Muy bien. La mayoría de los pacientes buscan dentista online. El SEO local es fundamental." }, { q: "¿Qué palabras clave?", a: "'Dentista [ciudad]', 'implantes dentales precio', 'blanqueamiento dental'." }, { q: "¿Las reseñas importan?", a: "Enormemente. Las reseñas influyen mucho en la elección del dentista." }, { q: "¿Cuánto cuesta?", a: "Desde $500/mes." }, { q: "¿Cuánto tiempo?", a: "2-4 meses para primeras mejoras." }]),
  esInd("tienda-online-seo", "SEO para Tiendas Online", "Tiendas Online", "SEO para e-commerce. Más ventas orgánicas.", "Aumenta las ventas de tu tienda online con SEO que atrae compradores calificados.", ShoppingBag, "Ecommerce & Retail",
    ["comprar online", "tienda online", "envío gratis", "ofertas", "descuentos", "mejores precios", "opiniones producto", "código descuento", "venta online"],
    [{ q: "¿Cómo aumenta el SEO las ventas?", a: "El SEO atrae visitantes que buscan activamente tus productos, con tasas de conversión superiores a la publicidad." }, { q: "¿Qué plataformas optimizan?", a: "Shopify, WooCommerce, PrestaShop, Magento y más." }, { q: "¿Cuánto cuesta?", a: "Desde $700/mes según tamaño del catálogo." }, { q: "¿Las fichas de producto importan?", a: "Sí, cada ficha debe ser única y optimizada con datos estructurados." }, { q: "¿Cuánto tiempo para resultados?", a: "2-3 meses para tráfico, 4-6 para aumento significativo en ventas." }]),
  esInd("medico-seo", "SEO para Médicos", "Médicos", "SEO para consultorios y clínicas médicas.", "Atrae más pacientes con SEO médico profesional.", Heart, "Healthcare & Medical",
    ["médico cerca de mí", "consultorio médico", "doctor", "especialista", "cita médica", "clínica", "médico general", "pediatra", "ginecólogo", "telemedicina"],
    [{ q: "¿Los médicos necesitan SEO?", a: "Sí, cada vez más pacientes eligen médico tras buscar online." }, { q: "¿Qué palabras clave?", a: "'Médico [especialidad] [ciudad]', 'cita médica', 'consultorio [zona]'." }, { q: "¿Cuánto cuesta?", a: "Desde $500/mes." }, { q: "¿Las reseñas son importantes?", a: "Muy importantes para la captación de pacientes." }, { q: "¿Cuánto tiempo?", a: "2-4 meses para SEO local." }]),
  esInd("plomero-seo", "SEO para Plomeros", "Plomeros", "SEO para plomeros y fontaneros. Más llamadas.", "Sé el primer plomero que encuentran los clientes en emergencia con SEO local.", Wrench, "Home Services & Trades",
    ["plomero cerca de mí", "fontanero urgente", "fuga de agua", "destape de cañerías", "calentador de agua", "plomero barato", "reparación plomería", "instalación sanitaria"],
    [{ q: "¿El SEO funciona para plomeros?", a: "Sí, las emergencias de plomería generan búsquedas instantáneas. Ser #1 significa recibir la llamada." }, { q: "¿Qué palabras clave?", a: "'Plomero [ciudad]', 'fontanero urgente', 'destape cañerías'." }, { q: "¿Cuánto cuesta?", a: "Desde $400/mes." }, { q: "¿Google Maps es importante?", a: "Esencial para plomeros." }, { q: "¿Cuánto tiempo?", a: "4-8 semanas para SEO local." }]),
  esInd("salon-belleza-seo", "SEO para Salones de Belleza", "Salones de Belleza", "SEO para salones de belleza y estéticas.", "Llena tu agenda con SEO que atrae clientes buscando servicios de belleza.", Sparkles, "Beauty & Wellness",
    ["salón de belleza cerca", "estética", "corte de cabello", "uñas", "maquillaje", "depilación láser", "tratamiento facial", "barbería", "extensiones", "spa"],
    [{ q: "¿El SEO ayuda a los salones?", a: "Sí, muchos clientes buscan servicios de belleza online." }, { q: "¿Qué palabras clave?", a: "'Salón de belleza [zona]', 'estética [ciudad]', 'barbería cerca de mí'." }, { q: "¿Las reseñas importan?", a: "Mucho, los clientes ven reseñas y fotos antes de elegir." }, { q: "¿Cuánto cuesta?", a: "Desde $350/mes." }, { q: "¿Cuánto tiempo?", a: "2-3 meses para SEO local." }]),
  esInd("constructor-seo", "SEO para Constructoras", "Constructoras", "SEO para empresas de construcción y remodelación.", "Atrae más proyectos con SEO para tu constructora.", Hammer, "Home Services & Trades",
    ["empresa constructora", "remodelación de casas", "construcción", "contratista", "albañil", "ampliación", "remodelación baños", "remodelación cocinas", "impermeabilización"],
    [{ q: "¿Las constructoras necesitan SEO?", a: "Sí, los clientes buscan constructoras y contratistas online cada vez más." }, { q: "¿Qué palabras clave?", a: "'Constructora [ciudad]', 'remodelación [servicio]', 'contratista [zona]'." }, { q: "¿Cuánto cuesta?", a: "Desde $500/mes." }, { q: "¿El portafolio importa?", a: "Mucho. Mostrar proyectos anteriores genera confianza." }, { q: "¿Cuánto tiempo?", a: "3-5 meses para resultados." }]),
  esInd("gym-seo", "SEO para Gimnasios", "Gimnasios", "SEO para gimnasios y centros fitness.", "Atrae nuevos socios con SEO local para tu gimnasio.", Dumbbell, "Fitness & Sports",
    ["gimnasio cerca de mí", "gym", "CrossFit", "yoga", "pilates", "entrenador personal", "membresía gym", "clases de baile", "natación"],
    [{ q: "¿El SEO ayuda a los gimnasios?", a: "Sí, 'gimnasio cerca de mí' es una búsqueda muy popular." }, { q: "¿Qué palabras clave?", a: "'Gimnasio [ciudad]', 'gym [zona]', 'clases de yoga [ciudad]'." }, { q: "¿Cuánto cuesta?", a: "Desde $400/mes." }, { q: "¿Las reseñas importan?", a: "Mucho para la decisión de inscripción." }, { q: "¿Cuánto tiempo?", a: "2-3 meses para SEO local." }]),
  esInd("hotel-seo-es", "SEO para Hoteles", "Hoteles", "SEO para hoteles y alojamientos. Más reservas directas.", "Aumenta tus reservas directas y reduce comisiones OTA.", Plane, "Food & Hospitality",
    ["hotel [ciudad]", "reservar hotel", "hotel barato", "hotel boutique", "alojamiento", "hospedaje", "all inclusive", "hotel familiar", "fin de semana romántico"],
    [{ q: "¿El SEO puede competir con Booking?", a: "Sí, un buen SEO genera reservas directas sin comisión del 15-25%." }, { q: "¿Qué palabras clave?", a: "'Hotel [ciudad]', 'alojamiento [destino]', 'hotel todo incluido [playa]'." }, { q: "¿Cuánto cuesta?", a: "Desde $600/mes." }, { q: "¿Cuánto tiempo?", a: "3-6 meses según la competencia." }, { q: "¿El contenido importa?", a: "Sí, páginas sobre atracciones locales atraen viajeros." }]),
  esInd("contador-seo", "SEO para Contadores", "Contadores", "SEO para despachos contables y fiscales.", "Atrae nuevos clientes con SEO para tu despacho contable.", Landmark, "Finance & Banking",
    ["contador cerca de mí", "despacho contable", "declaración de impuestos", "contabilidad empresas", "asesoría fiscal", "facturación electrónica", "auditoría", "nóminas"],
    [{ q: "¿Los contadores necesitan SEO?", a: "Sí, muchos empresarios buscan contador o asesor fiscal online." }, { q: "¿Qué palabras clave?", a: "'Contador [ciudad]', 'asesoría fiscal', 'declaración de impuestos'." }, { q: "¿Cuánto cuesta?", a: "Desde $500/mes." }, { q: "¿El contenido ayuda?", a: "Sí, artículos sobre impuestos y contabilidad atraen prospectos calificados." }, { q: "¿Cuánto tiempo?", a: "3-5 meses para resultados." }]),
  esInd("autoescuela-seo", "SEO para Autoescuelas", "Autoescuelas", "SEO para autoescuelas y escuelas de manejo.", "Atrae más alumnos con SEO para tu autoescuela.", Car, "Education & Training",
    ["autoescuela cerca de mí", "escuela de manejo", "licencia de conducir", "clases de manejo", "examen de conducir", "permiso de conducir", "curso de manejo", "autoescuela barata"],
    [{ q: "¿El SEO funciona para autoescuelas?", a: "Sí, la mayoría busca autoescuela online comparando precios y reseñas." }, { q: "¿Qué palabras clave?", a: "'Autoescuela [ciudad]', 'clases de manejo [zona]', 'licencia de conducir'." }, { q: "¿Las reseñas importan?", a: "Mucho, los alumnos eligen según las experiencias de otros." }, { q: "¿Cuánto cuesta?", a: "Desde $400/mes." }, { q: "¿Cuánto tiempo?", a: "2-3 meses para SEO local." }]),
  esInd("veterinario-seo-es", "SEO para Veterinarios", "Veterinarios", "SEO para clínicas veterinarias.", "Atrae dueños de mascotas con SEO veterinario.", Dog, "Healthcare & Medical",
    ["veterinario cerca de mí", "clínica veterinaria", "urgencia veterinaria", "vacunación mascotas", "castración", "peluquería canina", "tienda de mascotas"],
    [{ q: "¿Los veterinarios necesitan SEO?", a: "Sí, los dueños de mascotas buscan veterinario online, especialmente en emergencias." }, { q: "¿Qué palabras clave?", a: "'Veterinario [ciudad]', 'urgencia veterinaria', 'vacunas perros precio'." }, { q: "¿Cuánto cuesta?", a: "Desde $400/mes." }, { q: "¿Las reseñas importan?", a: "Mucho, los dueños de mascotas son muy exigentes." }, { q: "¿Cuánto tiempo?", a: "2-3 meses para SEO local." }]),
];

/* ═══════════════════════════════════════════════════════
   DUTCH INDUSTRIES — Top 25 high-demand in NL/BE
   ═══════════════════════════════════════════════════════ */

const nlChallenges = (s: string) => [
  { title: "Sterke Concurrentie", desc: `De ${s}-markt is zeer competitief. Gerichte SEO-strategieën zijn essentieel.` },
  { title: "Reviews & Reputatie", desc: `Klanten vertrouwen sterk op online reviews bij het kiezen van een ${s}-aanbieder.` },
  { title: "Mobiel Zoeken", desc: `De meeste ${s}-zoekopdrachten zijn mobiel. Uw website moet perfect geoptimaliseerd zijn.` },
  { title: "Lokale Vindbaarheid", desc: `Lokale SEO is cruciaal voor ${s}-bedrijven met fysieke locaties.` },
];
const nlApproach = (s: string) => [
  { title: "SEO-Audit", desc: `Uitgebreide analyse van uw ${s}-website en de concurrentie.` },
  { title: "Lokale SEO", desc: `Google Bedrijfsprofiel, lokale vermeldingen en reviewbeheer voor ${s}.` },
  { title: "Content Creatie", desc: `Hoogwaardige, geoptimaliseerde content die uw ${s}-expertise toont.` },
  { title: "Monitoring", desc: `Gedetailleerde maandelijkse rapportages over uw ${s}-SEO-prestaties.` },
];

const nlInd = (slug: string, title: string, shortTitle: string, metaDesc: string, heroDesc: string, icon: LucideIcon, category: string, keywords: string[], faqs: IndustryFaq[]): MiniEntry => ({
  slug, title, shortTitle, metaTitle: `${title} - Zoekmachineoptimalisatie & Online Marketing`, metaDesc, icon, category, heroHighlight: shortTitle, heroDesc, keywords, faqs,
  challenges: nlChallenges(shortTitle),
  approach: nlApproach(shortTitle),
});

const nlIndustries: MiniEntry[] = [
  nlInd("tandarts-seo", "SEO voor Tandartsen", "Tandartsen", "SEO voor tandartspraktijken. Meer patiënten.", "Win meer patiënten met gerichte SEO voor uw tandartspraktijk.", Stethoscope, "Healthcare & Medical",
    ["tandarts in de buurt", "tandartspraktijk", "implantaat", "orthodontist", "tanden bleken", "spoed tandarts", "kroon", "gebitsprothese"],
    [{ q: "Hebben tandartsen SEO nodig?", a: "Ja! De meeste patiënten zoeken hun tandarts online. Lokale SEO is bijzonder belangrijk." }, { q: "Welke zoekwoorden?", a: "'Tandarts [stad]', 'implantaat kosten', 'spoed tandarts'." }, { q: "Wat kost het?", a: "Onze pakketten starten vanaf €500/maand." }, { q: "Hoe lang duurt het?", a: "Eerste resultaten in 2-3 maanden." }, { q: "Zijn reviews belangrijk?", a: "Zeer! Reviews beïnvloeden sterk de keuze van patiënten." }]),
  nlInd("makelaar-seo", "SEO voor Makelaars", "Makelaars", "SEO voor makelaars en vastgoedkantoren.", "Win meer kopers en verkopers met vastgoed-SEO.", Building2, "Real Estate & Property",
    ["makelaar", "huis kopen", "woning huren", "taxatie", "appartement", "koopwoning", "huurwoning", "vastgoed", "hypotheek"],
    [{ q: "Waarom SEO voor makelaars?", a: "Bijna alle kopers beginnen online. SEO positioneert u voor deze potentiële klanten." }, { q: "Welke zoekwoorden?", a: "'Makelaar [stad]', 'huis kopen [regio]', 'woning huren [stad]'." }, { q: "Wat kost het?", a: "Vanaf €600/maand." }, { q: "Hoe snel resultaten?", a: "3-4 maanden voor eerste verbeteringen." }, { q: "Is lokale SEO belangrijk?", a: "Absoluut. Vastgoed is per definitie lokaal." }]),
  nlInd("advocaat-seo", "SEO voor Advocaten", "Advocaten", "SEO voor advocatenkantoren.", "Win nieuwe cliënten met SEO voor advocaten.", Scale, "Legal & Professional Services",
    ["advocaat in de buurt", "advocatenkantoor", "arbeidsrecht advocaat", "echtscheidingsadvocaat", "strafrecht", "juridisch advies", "letselschade advocaat"],
    [{ q: "Hebben advocaten SEO nodig?", a: "Ja, steeds meer mensen zoeken een advocaat online." }, { q: "Welke zoekwoorden?", a: "'Advocaat [specialisatie] [stad]', 'juridisch advies', 'letselschade advocaat'." }, { q: "Wat kost het?", a: "Vanaf €600/maand." }, { q: "Hoe lang duurt het?", a: "3-6 maanden voor significante resultaten." }, { q: "Is content belangrijk?", a: "Zeer. Juridische artikelen versterken uw autoriteit." }]),
  nlInd("restaurant-seo-nl", "SEO voor Restaurants", "Restaurants", "SEO voor restaurants en horeca.", "Breng meer gasten naar uw restaurant met SEO.", UtensilsCrossed, "Food & Hospitality",
    ["restaurant in de buurt", "beste restaurant", "reserveren", "bezorging", "Italiaans restaurant", "afhalen", "brunch", "terras"],
    [{ q: "Hebben restaurants SEO nodig?", a: "Ja, de meeste gasten zoeken restaurants online." }, { q: "Welke zoekwoorden?", a: "'Restaurant [stad]', 'beste [keuken]', '[keuken] in de buurt'." }, { q: "Wat kost het?", a: "Vanaf €400/maand." }, { q: "Google Maps belangrijk?", a: "Essentieel voor de horeca." }, { q: "Reviews?", a: "Reviews zijn de belangrijkste factor bij restaurantkeuze." }]),
  nlInd("loodgieter-seo", "SEO voor Loodgieters", "Loodgieters", "SEO voor loodgieters. Meer spoedoproepen.", "Wees de eerste loodgieter die klanten vinden bij nood.", Wrench, "Home Services & Trades",
    ["loodgieter in de buurt", "loodgieter spoed", "lekkage", "afvoer verstopt", "cv-ketel", "warmwater", "sanitair", "reparatie"],
    [{ q: "Is SEO belangrijk voor loodgieters?", a: "Ja! Spoedopdrachten genereren directe zoekopdrachten. #1 zijn betekent de oproep krijgen." }, { q: "Welke zoekwoorden?", a: "'Loodgieter [stad]', 'spoed loodgieter', 'lekkage reparatie'." }, { q: "Wat kost het?", a: "Vanaf €400/maand." }, { q: "Hoe snel resultaten?", a: "4-8 weken voor lokale SEO." }, { q: "Google Maps?", a: "Essentieel voor loodgieters." }]),
  nlInd("kapper-seo", "SEO voor Kappers", "Kappers", "SEO voor kapperszaken. Meer klanten.", "Vul uw agenda met SEO dat nieuwe klanten aantrekt.", Scissors, "Beauty & Wellness",
    ["kapper in de buurt", "kapsalon", "haarknipbeurt", "verven", "barbershop", "dameskapper", "herenkapper", "extensions"],
    [{ q: "Helpt SEO kappers?", a: "Ja, veel klanten zoeken een nieuwe kapper online." }, { q: "Welke zoekwoorden?", a: "'Kapper [wijk]', 'barbershop [stad]', 'dameskapper in de buurt'." }, { q: "Wat kost het?", a: "Vanaf €350/maand." }, { q: "Reviews belangrijk?", a: "Zeer! Klanten lezen reviews en bekijken foto's voor het boeken." }, { q: "Resultaten?", a: "2-3 maanden voor lokale SEO." }]),
  nlInd("webshop-seo", "SEO voor Webshops", "Webshops", "SEO voor e-commerce en webshops.", "Verhoog uw omzet met webshop-SEO.", ShoppingBag, "Ecommerce & Retail",
    ["online kopen", "webshop", "gratis verzending", "aanbiedingen", "sale", "productreviews", "vergelijken", "kortingscode"],
    [{ q: "Hoe helpt SEO webshops?", a: "SEO brengt koopklare bezoekers die actief naar uw producten zoeken." }, { q: "Welke platforms?", a: "Wij optimaliseren Shopify, WooCommerce, Magento en Lightspeed." }, { q: "Wat kost het?", a: "Vanaf €700/maand afhankelijk van catalogusgrootte." }, { q: "Productpagina's belangrijk?", a: "Ja, elke pagina moet uniek en met gestructureerde data geoptimaliseerd zijn." }, { q: "Resultaten?", a: "2-3 maanden voor verkeer, 4-6 voor significante omzetgroei." }]),
  nlInd("huisarts-seo", "SEO voor Huisartsen", "Huisartsen", "SEO voor huisartspraktijken.", "Win nieuwe patiënten met SEO voor uw praktijk.", Heart, "Healthcare & Medical",
    ["huisarts in de buurt", "huisartspraktijk", "afspraak huisarts", "dokter", "specialist", "medisch centrum", "spoedarts"],
    [{ q: "Hebben huisartsen SEO nodig?", a: "Ja, vooral nieuwe praktijken of praktijken die groeien willen." }, { q: "Welke zoekwoorden?", a: "'Huisarts [stad]', 'huisartspraktijk [wijk]', 'afspraak huisarts'." }, { q: "Wat kost het?", a: "Vanaf €450/maand." }, { q: "Reviews belangrijk?", a: "Ja, patiënten kiezen steeds vaker op basis van online reviews." }, { q: "Resultaten?", a: "2-3 maanden voor lokale SEO." }]),
  nlInd("garage-seo-nl", "SEO voor Garages", "Garages", "SEO voor autogarages en autobedrijven.", "Meer klanten voor uw garage met auto-SEO.", Car, "Automotive & Transportation",
    ["garage in de buurt", "APK keuring", "autoreparatie", "autodealer", "tweedehands auto", "bandenwissel", "autoservice", "monteur"],
    [{ q: "Helpt SEO garages?", a: "Ja, automobilisten zoeken een garage online, vooral bij pech." }, { q: "Welke zoekwoorden?", a: "'Garage [stad]', 'APK [wijk]', 'autoreparatie in de buurt'." }, { q: "Wat kost het?", a: "Vanaf €400/maand." }, { q: "Google Maps belangrijk?", a: "Essentieel voor garages." }, { q: "Resultaten?", a: "2-4 maanden voor lokale SEO." }]),
  nlInd("accountant-seo-nl", "SEO voor Accountants", "Accountants", "SEO voor accountants- en administratiekantoren.", "Win nieuwe klanten met SEO voor uw accountantskantoor.", Landmark, "Finance & Banking",
    ["accountant in de buurt", "accountantskantoor", "belastingaangifte", "boekhouder", "administratiekantoor", "jaarrekening", "salarisadministratie", "BTW-aangifte"],
    [{ q: "Hebben accountants SEO nodig?", a: "Ja, veel ondernemers zoeken een nieuwe accountant online." }, { q: "Welke zoekwoorden?", a: "'Accountant [stad]', 'boekhouder [regio]', 'belastingaangifte laten doen'." }, { q: "Wat kost het?", a: "Vanaf €500/maand." }, { q: "Content belangrijk?", a: "Ja, artikelen over belastingen en boekhouding trekken klanten aan." }, { q: "Resultaten?", a: "3-5 maanden voor significante verbeteringen." }]),
  nlInd("sportschool-seo", "SEO voor Sportscholen", "Sportscholen", "SEO voor sportscholen en fitnesscentra.", "Meer leden met lokale SEO voor uw sportschool.", Dumbbell, "Fitness & Sports",
    ["sportschool in de buurt", "fitness", "krachttraining", "yoga les", "personal trainer", "abonnement sportschool", "zwembad", "groepslessen"],
    [{ q: "Helpt SEO sportscholen?", a: "Ja, 'sportschool in de buurt' is een veelgezochte term." }, { q: "Welke zoekwoorden?", a: "'Sportschool [stad]', 'fitness [wijk]', 'personal trainer [stad]'." }, { q: "Wat kost het?", a: "Vanaf €400/maand." }, { q: "Reviews?", a: "Zeer belangrijk voor ledenwerving." }, { q: "Resultaten?", a: "2-3 maanden voor lokale SEO." }]),
  nlInd("schilder-seo-nl", "SEO voor Schilders", "Schilders", "SEO voor schildersbedrijven.", "Meer opdrachten met SEO voor uw schildersbedrijf.", Home, "Home Services & Trades",
    ["schilder in de buurt", "schildersbedrijf", "buitenschilderwerk", "binnenschilderwerk", "behangen", "latex spuiten", "houtrot reparatie"],
    [{ q: "Hebben schilders SEO nodig?", a: "Ja, klanten zoeken schilders online en vergelijken offertes." }, { q: "Welke zoekwoorden?", a: "'Schilder [stad]', 'buitenschilderwerk [regio]', 'schildersbedrijf in de buurt'." }, { q: "Wat kost het?", a: "Vanaf €400/maand." }, { q: "Resultaten?", a: "2-4 maanden voor lokale SEO." }, { q: "Reviews?", a: "Zeer belangrijk voor het opbouwen van vertrouwen." }]),
];

/* ═══════════════════════════════════════════════════════
   BUILD FINAL DATA STRUCTURES
   ═══════════════════════════════════════════════════════ */

const buildData = (entries: MiniEntry[], heroTitle: string, caseStudy: { metric: string; label: string }[]): IndustryData[] =>
  entries.map(e => toIndustryData(e, heroTitle, caseStudy));

export const industriesI18nData: Record<SupportedIndustryLang, IndustryData[]> = {
  ar: buildData(arIndustries, "خدمات سيو لـ", arCase),
  fr: buildData(frIndustries, "Services SEO pour", defaultCase),
  de: buildData(deIndustries, "SEO-Dienste für", defaultCase),
  es: buildData(esIndustries, "Servicios SEO para", defaultCase),
  nl: buildData(nlIndustries, "SEO-diensten voor", defaultCase),
};

export const INDUSTRY_CATEGORIES_I18N: Record<SupportedIndustryLang, string[]> = {
  ar: ["Real Estate & Property", "Healthcare & Medical", "Food & Hospitality", "Beauty & Wellness", "Ecommerce & Retail", "Education & Training", "Legal & Professional Services", "Automotive & Transportation", "Home Services & Trades", "Technology & SaaS", "Finance & Banking", "Fitness & Sports"],
  fr: ["Food & Hospitality", "Healthcare & Medical", "Legal & Professional Services", "Home Services & Trades", "Real Estate & Property", "Beauty & Wellness", "Ecommerce & Retail", "Automotive & Transportation", "Education & Training", "Fitness & Sports", "Finance & Banking"],
  de: ["Healthcare & Medical", "Real Estate & Property", "Legal & Professional Services", "Food & Hospitality", "Home Services & Trades", "Beauty & Wellness", "Ecommerce & Retail", "Automotive & Transportation", "Finance & Banking", "Fitness & Sports"],
  es: ["Food & Hospitality", "Healthcare & Medical", "Real Estate & Property", "Legal & Professional Services", "Ecommerce & Retail", "Home Services & Trades", "Beauty & Wellness", "Education & Training", "Fitness & Sports", "Finance & Banking", "Automotive & Transportation"],
  nl: ["Healthcare & Medical", "Real Estate & Property", "Legal & Professional Services", "Food & Hospitality", "Home Services & Trades", "Beauty & Wellness", "Ecommerce & Retail", "Automotive & Transportation", "Finance & Banking", "Fitness & Sports"],
};

export function getI18nIndustryBySlug(lang: SupportedIndustryLang, slug: string): IndustryData | undefined {
  return industriesI18nData[lang]?.find(i => i.slug === slug);
}
