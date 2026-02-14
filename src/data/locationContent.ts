export interface LocationContent {
  heroSubtitle: string;
  challengesTitle: string;
  challenges: { title: string; desc: string }[];
  processTitle: string;
  processSteps: { title: string; desc: string }[];
  industriesTitle: string;
  industries: string[];
  resultsTitle: string;
  results: { stat: string; label: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
  nearbyCitiesTitle: string;
  // New fields for enhanced SEO
  lsiTitle: string;
  lsiParagraphs: string[];
  landmarksTitle: string;
  landmarks: { name: string; desc: string }[];
  whyChooseTitle: string;
  whyChoosePoints: { title: string; desc: string }[];
  aeoTitle: string;
  aeoParagraphs: string[];
  servicesInterlinkTitle: string;
  industriesInterlinkTitle: string;
}

type ContentGenerator = (city: string, country: string) => LocationContent;

const enContent: ContentGenerator = (city, country) => ({
  heroSubtitle: `Dominate search results in ${city} with data-driven SEO strategies. We help businesses across ${country} increase organic traffic, improve rankings, and drive revenue through expert search engine optimization.`,
  challengesTitle: `SEO Challenges for Businesses in ${city}`,
  challenges: [
    { title: "Intense Local Competition", desc: `${city} has a highly competitive digital market. Standing out requires a tailored SEO strategy that targets the right keywords and audience segments specific to the ${city} market.` },
    { title: "Evolving Search Algorithms", desc: `Google's algorithms change constantly. Businesses in ${city} need an SEO partner who stays ahead of updates and adapts strategies proactively to maintain and improve rankings.` },
    { title: "Multi-Channel Visibility", desc: `Modern SEO in ${city} isn't just about Google. AI search engines like ChatGPT, Perplexity, and Google AI Overviews are changing how consumers in ${country} find businesses.` },
    { title: "Mobile-First Indexing", desc: `With the majority of searches in ${city} happening on mobile devices, your website must be perfectly optimized for mobile performance, speed, and user experience.` },
    { title: "Local Search Dominance", desc: `For businesses serving ${city} customers, appearing in Google Maps and local search results is critical. This requires optimized Google Business Profile and local citation management.` },
    { title: "Content Authority Building", desc: `Establishing your business as a trusted authority in ${city} requires consistent, high-quality content that resonates with local audiences and builds topical relevance.` },
  ],
  processTitle: `Our SEO Process for ${city} Businesses`,
  processSteps: [
    { title: "Discovery & Audit", desc: `We begin with a comprehensive audit of your website and competitive analysis of the ${city} market. We identify technical issues, content gaps, and keyword opportunities specific to your industry.` },
    { title: "Strategy Development", desc: `Based on our audit findings, we create a custom SEO strategy tailored to the ${city} market. This includes keyword targeting, content planning, technical improvements, and link building goals.` },
    { title: "Technical Optimization", desc: `We fix all technical SEO issues including site speed, Core Web Vitals, mobile optimization, schema markup, and crawlability to ensure search engines can properly index your ${city} business.` },
    { title: "Content & On-Page SEO", desc: `Our team creates and optimizes content targeting high-value keywords for the ${city} market. Every page is optimized for both users and search engines with proper meta tags, headings, and internal linking.` },
    { title: "Link Building & Authority", desc: `We build high-quality backlinks from relevant, authoritative websites to increase your domain authority. Our white-hat approach focuses on earning links through quality content and genuine outreach in ${country}.` },
    { title: "Monitoring & Reporting", desc: `You receive detailed monthly reports showing keyword rankings, traffic growth, and ROI. We continuously refine our strategy based on performance data specific to the ${city} market.` },
  ],
  industriesTitle: `Industries We Serve in ${city}`,
  industries: ["Healthcare & Medical", "Legal & Law Firms", "Real Estate", "E-commerce & Retail", "Technology & SaaS", "Construction & Home Services", "Education & Training", "Hospitality & Tourism", "Financial Services", "Manufacturing & B2B", "Restaurants & Food", "Professional Services"],
  resultsTitle: `Results We Deliver for ${city} Businesses`,
  results: [
    { stat: "500%", label: "Average Traffic Growth" },
    { stat: "200+", label: "Keywords Ranked" },
    { stat: "50+", label: "Clients Worldwide" },
    { stat: "5+", label: "Countries Served" },
  ],
  faqTitle: `Frequently Asked Questions About SEO in ${city}`,
  faqs: [
    { q: `How much does SEO cost in ${city}?`, a: `Our SEO packages for ${city} businesses start at $500/month for the Starter plan, $1,000/month for Growth, and $2,000/month for Enterprise. The right package depends on your industry, competition level, and growth goals. We offer a free consultation to recommend the best plan for your ${city} business.` },
    { q: `How long does it take to see SEO results in ${city}?`, a: `Most ${city} businesses see initial improvements within 2-3 months, with significant results in 4-6 months. Competitive industries in ${city} may take longer. SEO is a long-term investment — the results compound over time and deliver sustainable growth unlike paid advertising.` },
    { q: `Do you offer local SEO services in ${city}?`, a: `Yes! Local SEO is a core part of our ${city} service offering. We optimize your Google Business Profile, build local citations, manage reviews, and create location-specific content to help you dominate local search results and Google Maps in ${city}.` },
    { q: `What makes your SEO services different in ${city}?`, a: `We combine traditional SEO with cutting-edge GEO (Generative Engine Optimization) to ensure your ${city} business is visible not just on Google, but also on AI search engines like ChatGPT and Perplexity. Our data-driven approach and transparent reporting set us apart.` },
    { q: `Can you help my ${city} business rank on Google Maps?`, a: `Absolutely. Google Maps ranking is essential for local businesses in ${city}. We optimize your Google Business Profile, build consistent local citations, generate authentic reviews, and create location-specific content to improve your visibility in the map pack.` },
    { q: `Do you work with businesses outside of ${city}?`, a: `Yes! While we specialize in ${city} SEO, we serve clients across ${country} and internationally. Our team has experience in 5+ countries and can create strategies for businesses targeting multiple locations.` },
    { q: `What SEO tools do you use for ${city} businesses?`, a: `We use industry-leading tools including Ahrefs, SEMrush, Screaming Frog, Google Search Console, Google Analytics 4, and specialized local SEO tools. These help us track your ${city} market performance and identify opportunities.` },
  ],
  ctaTitle: `Ready to Grow Your ${city} Business?`,
  ctaDesc: `Get a free, comprehensive SEO audit for your ${city} business. We'll analyze your website, identify opportunities, and create a custom strategy to help you dominate search results.`,
  ctaButton: `Get Free SEO Audit for Your ${city} Business`,
  nearbyCitiesTitle: "SEO Services in Nearby Cities",
  // New enhanced sections
  lsiTitle: `Why ${city} Businesses Need Expert SEO in ${new Date().getFullYear()}`,
  lsiParagraphs: [
    `Search engine optimization in ${city} has evolved far beyond traditional keyword stuffing and meta tag manipulation. Today, ranking on Google, Bing, and AI-powered search engines like ChatGPT Search, Google AI Overviews, and Perplexity requires a holistic approach that encompasses technical SEO, semantic search optimization, entity-based SEO, and E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals. Businesses in ${city}, ${country} must adapt to these changes or risk losing visibility to competitors who embrace modern search optimization techniques.`,
    `Our approach to SEO in ${city} integrates Latent Semantic Indexing (LSI) keywords, natural language processing (NLP) optimization, and topical authority building. We ensure your website answers user intent comprehensively — from informational queries about your industry to transactional searches where customers in ${city} are ready to buy. This includes optimizing for voice search, featured snippets, People Also Ask boxes, and AI-generated summaries that increasingly dominate search results pages.`,
    `Local SEO factors are particularly crucial for ${city} businesses. We optimize your Google Business Profile with accurate NAP (Name, Address, Phone) citations, geo-tagged images, localized content, and review management strategies. Combined with technical foundations like Core Web Vitals optimization, mobile-first design, and structured data markup (JSON-LD schema), your ${city} business gains a comprehensive competitive advantage in organic search across all major search platforms.`,
  ],
  landmarksTitle: `Serving Businesses Near Key Areas in ${city}`,
  landmarks: [],
  whyChooseTitle: `Why Choose Us as Your ${city} SEO Partner`,
  whyChoosePoints: [
    { title: "AI & Generative Search Ready", desc: `We optimize your ${city} business not just for Google and Bing, but for AI search engines including ChatGPT, Perplexity, Google Gemini, and Copilot. Our GEO (Generative Engine Optimization) strategies ensure your brand appears in AI-generated answers and summaries.` },
    { title: "Data-Driven Strategies", desc: `Every SEO decision we make for your ${city} business is backed by data. We use advanced analytics, competitor analysis, and market research to identify the most profitable keywords and content opportunities in the ${city} market.` },
    { title: "Transparent Monthly Reporting", desc: `You'll receive detailed reports showing exactly how your ${city} SEO campaign is performing — keyword rankings, organic traffic growth, conversion rates, and ROI metrics. No hidden tactics, no black-box approaches.` },
    { title: "Multi-Language & International SEO", desc: `For businesses in ${city} targeting international markets, we provide multilingual SEO services with proper hreflang implementation, culturally adapted content, and geo-targeted optimization across multiple regions and languages.` },
  ],
  aeoTitle: `Answer Engine Optimization (AEO) for ${city}`,
  aeoParagraphs: [
    `As AI-powered search engines reshape how users in ${city} find information, Answer Engine Optimization (AEO) has become essential. Google AI Overviews, ChatGPT, Perplexity AI, and Microsoft Copilot are increasingly providing direct answers instead of traditional blue links. Your ${city} business needs to be the source these AI systems cite.`,
    `Our AEO strategy for ${city} businesses includes structured data optimization, FAQ schema implementation, entity markup, and creating authoritative content that AI systems prefer to reference. We build your brand's digital footprint across Wikipedia, industry directories, news sources, and high-authority platforms — ensuring AI models recognize your ${city} business as a trusted source in your industry.`,
  ],
  servicesInterlinkTitle: `Our SEO Services Available in ${city}`,
  industriesInterlinkTitle: `Industries We Specialize in Across ${city}`,
});

const arContent: ContentGenerator = (city, country) => ({
  heroSubtitle: `سيطر على نتائج البحث في ${city} مع استراتيجيات سيو مبنية على البيانات. نساعد الشركات في ${country} على زيادة الزيارات العضوية وتحسين الترتيب وزيادة الإيرادات.`,
  challengesTitle: `تحديات السيو للشركات في ${city}`,
  challenges: [
    { title: "المنافسة المحلية الشديدة", desc: `يتميز سوق ${city} الرقمي بالمنافسة العالية. التميز يتطلب استراتيجية سيو مخصصة تستهدف الكلمات المفتاحية والجمهور المناسب في سوق ${city}.` },
    { title: "تحديثات خوارزميات البحث", desc: `تتغير خوارزميات جوجل باستمرار. تحتاج الشركات في ${city} إلى شريك سيو يبقى في المقدمة ويكيّف الاستراتيجيات بشكل استباقي.` },
    { title: "الظهور في محركات البحث الذكية", desc: `السيو الحديث في ${city} لا يقتصر على جوجل فقط. محركات البحث الذكية مثل ChatGPT وPerplexity تغير طريقة بحث المستهلكين في ${country}.` },
    { title: "أولوية الجوال", desc: `مع إجراء غالبية عمليات البحث في ${city} عبر الهواتف المحمولة، يجب أن يكون موقعك محسّنًا بالكامل لأداء الجوال والسرعة وتجربة المستخدم.` },
    { title: "السيطرة على البحث المحلي", desc: `للشركات التي تخدم عملاء ${city}، الظهور في خرائط جوجل ونتائج البحث المحلية أمر بالغ الأهمية.` },
    { title: "بناء سلطة المحتوى", desc: `تأسيس عملك كمرجع موثوق في ${city} يتطلب محتوى عالي الجودة ومتسق يتفاعل مع الجمهور المحلي.` },
  ],
  processTitle: `عمليتنا في تحسين السيو لشركات ${city}`,
  processSteps: [
    { title: "الاكتشاف والتدقيق", desc: `نبدأ بتدقيق شامل لموقعك وتحليل تنافسي لسوق ${city}. نحدد المشاكل التقنية وفجوات المحتوى وفرص الكلمات المفتاحية.` },
    { title: "تطوير الاستراتيجية", desc: `بناءً على نتائج التدقيق، نضع استراتيجية سيو مخصصة لسوق ${city} تشمل استهداف الكلمات المفتاحية وتخطيط المحتوى.` },
    { title: "التحسين التقني", desc: `نصلح جميع مشاكل السيو التقنية بما في ذلك سرعة الموقع وCore Web Vitals وتحسين الجوال والبيانات المنظمة.` },
    { title: "المحتوى والسيو الداخلي", desc: `يقوم فريقنا بإنشاء وتحسين المحتوى الذي يستهدف كلمات مفتاحية عالية القيمة لسوق ${city}.` },
    { title: "بناء الروابط والسلطة", desc: `نبني روابط خلفية عالية الجودة من مواقع ذات صلة وموثوقة لزيادة سلطة نطاقك في ${country}.` },
    { title: "المراقبة والتقارير", desc: `تتلقى تقارير شهرية مفصلة توضح ترتيب الكلمات المفتاحية ونمو الزيارات والعائد على الاستثمار.` },
  ],
  industriesTitle: `القطاعات التي نخدمها في ${city}`,
  industries: ["الرعاية الصحية", "القانون والمحاماة", "العقارات", "التجارة الإلكترونية", "التكنولوجيا والبرمجيات", "البناء والخدمات المنزلية", "التعليم والتدريب", "الضيافة والسياحة", "الخدمات المالية", "التصنيع والأعمال", "المطاعم والأغذية", "الخدمات المهنية"],
  resultsTitle: `النتائج التي نحققها لشركات ${city}`,
  results: [
    { stat: "٥٠٠٪", label: "متوسط نمو الزيارات" },
    { stat: "+٢٠٠", label: "كلمة مفتاحية مُصنّفة" },
    { stat: "+٥٠", label: "عميل حول العالم" },
    { stat: "+٥", label: "دول نخدمها" },
  ],
  faqTitle: `الأسئلة الشائعة حول السيو في ${city}`,
  faqs: [
    { q: `كم تكلفة خدمات السيو في ${city}؟`, a: `تبدأ باقات السيو لشركات ${city} من ٥٠٠ دولار شهريًا للباقة المبتدئة، و١٠٠٠ دولار للنمو، و٢٠٠٠ دولار للمؤسسات. نقدم استشارة مجانية لتوصية أفضل خطة لعملك.` },
    { q: `كم من الوقت يستغرق رؤية نتائج السيو في ${city}؟`, a: `تشهد معظم شركات ${city} تحسينات أولية خلال ٢-٣ أشهر، مع نتائج كبيرة خلال ٤-٦ أشهر. السيو استثمار طويل الأمد يحقق نموًا مستدامًا.` },
    { q: `هل تقدمون خدمات السيو المحلي في ${city}؟`, a: `نعم! السيو المحلي جزء أساسي من خدماتنا في ${city}. نحسّن ملفك التجاري على جوجل ونبني الاستشهادات المحلية وندير المراجعات.` },
    { q: `ما الذي يميز خدمات السيو الخاصة بكم في ${city}؟`, a: `نجمع بين السيو التقليدي وتحسين محركات البحث التوليدية (GEO) لضمان ظهور عملك في ${city} ليس فقط على جوجل، بل أيضًا على محركات البحث الذكية.` },
    { q: `هل يمكنكم مساعدة عملي في ${city} على الظهور في خرائط جوجل؟`, a: `بالتأكيد. ترتيب خرائط جوجل ضروري للشركات المحلية في ${city}. نحسّن ملفك التجاري على جوجل ونبني استشهادات محلية متسقة.` },
  ],
  ctaTitle: `هل أنت مستعد لتنمية أعمالك في ${city}؟`,
  ctaDesc: `احصل على تدقيق سيو مجاني وشامل لعملك في ${city}. سنحلل موقعك ونحدد الفرص ونضع استراتيجية مخصصة.`,
  ctaButton: `احصل على تدقيق سيو مجاني لعملك في ${city}`,
  nearbyCitiesTitle: "خدمات سيو في مدن قريبة",
  lsiTitle: `لماذا تحتاج شركات ${city} إلى خبير سيو في ${new Date().getFullYear()}`,
  lsiParagraphs: [
    `تحسين محركات البحث في ${city} تطور بشكل كبير ليتجاوز حشو الكلمات المفتاحية التقليدي. اليوم، يتطلب الترتيب على جوجل وبينج ومحركات البحث الذكية مثل ChatGPT وPerplexity نهجًا شاملاً يشمل السيو التقني، والتحسين الدلالي، وبناء الكيانات، وإشارات E-E-A-T (الخبرة، التخصص، الموثوقية، الجدارة بالثقة). يجب على شركات ${city} التكيف مع هذه التغييرات.`,
    `نهجنا في السيو لشركات ${city} يدمج كلمات LSI المفتاحية، وتحسين معالجة اللغة الطبيعية (NLP)، وبناء السلطة الموضوعية. نضمن أن موقعك يجيب على نية المستخدم بشكل شامل — من الاستفسارات المعلوماتية إلى عمليات البحث التجارية حيث يكون العملاء في ${city} مستعدين للشراء.`,
    `عوامل السيو المحلي حاسمة بشكل خاص لشركات ${city}. نحسّن ملفك التجاري على جوجل مع استشهادات NAP الدقيقة، والصور الجغرافية، والمحتوى المحلي، واستراتيجيات إدارة المراجعات. مع أساسيات تقنية قوية مثل Core Web Vitals والتصميم المتجاوب والبيانات المنظمة (JSON-LD).`,
  ],
  landmarksTitle: `نخدم الشركات بالقرب من المناطق الرئيسية في ${city}`,
  landmarks: [],
  whyChooseTitle: `لماذا تختارنا كشريك سيو في ${city}`,
  whyChoosePoints: [
    { title: "جاهزون للبحث الذكي والتوليدي", desc: `نحسّن عملك في ${city} ليس فقط لجوجل وبينج، بل لمحركات البحث الذكية مثل ChatGPT وPerplexity وGoogle Gemini. استراتيجيات GEO تضمن ظهور علامتك التجارية في الإجابات المولّدة بالذكاء الاصطناعي.` },
    { title: "استراتيجيات مبنية على البيانات", desc: `كل قرار سيو نتخذه لعملك في ${city} مدعوم بالبيانات. نستخدم تحليلات متقدمة وأبحاث السوق لتحديد أكثر الكلمات المفتاحية ربحية.` },
    { title: "تقارير شهرية شفافة", desc: `تتلقى تقارير مفصلة توضح أداء حملتك — ترتيب الكلمات المفتاحية، نمو الزيارات العضوية، ومعدلات التحويل.` },
    { title: "سيو متعدد اللغات والدولي", desc: `للشركات في ${city} التي تستهدف أسواقًا دولية، نقدم خدمات سيو متعددة اللغات مع تطبيق hreflang الصحيح والمحتوى المكيّف ثقافيًا.` },
  ],
  aeoTitle: `تحسين محركات الإجابة (AEO) في ${city}`,
  aeoParagraphs: [
    `مع تغيير محركات البحث الذكية لطريقة بحث المستخدمين في ${city}، أصبح تحسين محركات الإجابة (AEO) ضروريًا. Google AI Overviews وChatGPT وPerplexity يقدمون إجابات مباشرة بدلاً من الروابط التقليدية. يجب أن يكون عملك في ${city} هو المصدر الذي تستشهد به هذه الأنظمة.`,
    `استراتيجيتنا AEO لشركات ${city} تشمل تحسين البيانات المنظمة، وتطبيق FAQ schema، وبناء البصمة الرقمية لعلامتك عبر الدلائل الصناعية والمصادر الموثوقة.`,
  ],
  servicesInterlinkTitle: `خدمات السيو المتاحة في ${city}`,
  industriesInterlinkTitle: `القطاعات التي نتخصص فيها في ${city}`,
});

const frContent: ContentGenerator = (city, country) => ({
  heroSubtitle: `Dominez les résultats de recherche à ${city} avec des stratégies SEO basées sur les données. Nous aidons les entreprises à ${country} à augmenter le trafic organique et améliorer les classements.`,
  challengesTitle: `Défis SEO pour les Entreprises à ${city}`,
  challenges: [
    { title: "Concurrence Locale Intense", desc: `Le marché numérique de ${city} est très compétitif. Se démarquer nécessite une stratégie SEO sur mesure ciblant les bons mots-clés et segments de marché.` },
    { title: "Algorithmes en Évolution", desc: `Les algorithmes de Google changent constamment. Les entreprises de ${city} ont besoin d'un partenaire SEO qui anticipe les mises à jour.` },
    { title: "Visibilité Multi-Canal", desc: `Le SEO moderne à ${city} ne se limite plus à Google. Les moteurs de recherche IA comme ChatGPT et Perplexity changent la donne.` },
    { title: "Indexation Mobile-First", desc: `Avec la majorité des recherches à ${city} effectuées sur mobile, votre site doit être parfaitement optimisé pour les performances mobiles.` },
    { title: "Domination de la Recherche Locale", desc: `Pour les entreprises servant des clients à ${city}, apparaître dans Google Maps et les résultats locaux est critique.` },
    { title: "Construction d'Autorité", desc: `Établir votre entreprise comme référence de confiance à ${city} nécessite un contenu cohérent et de haute qualité.` },
  ],
  processTitle: `Notre Processus SEO pour les Entreprises de ${city}`,
  processSteps: [
    { title: "Découverte & Audit", desc: `Nous commençons par un audit complet de votre site et une analyse concurrentielle du marché de ${city}.` },
    { title: "Développement de Stratégie", desc: `Nous créons une stratégie SEO personnalisée adaptée au marché de ${city}.` },
    { title: "Optimisation Technique", desc: `Nous corrigeons tous les problèmes techniques SEO : vitesse, Core Web Vitals, mobile, données structurées.` },
    { title: "Contenu & SEO On-Page", desc: `Notre équipe crée et optimise le contenu ciblant les mots-clés à haute valeur pour le marché de ${city}.` },
    { title: "Netlinking & Autorité", desc: `Nous construisons des backlinks de qualité depuis des sites pertinents et autoritaires en ${country}.` },
    { title: "Suivi & Rapports", desc: `Vous recevez des rapports mensuels détaillés montrant les classements, la croissance du trafic et le ROI.` },
  ],
  industriesTitle: `Secteurs que Nous Servons à ${city}`,
  industries: ["Santé & Médical", "Juridique & Avocats", "Immobilier", "E-commerce & Retail", "Technologie & SaaS", "Construction & Services", "Éducation & Formation", "Hôtellerie & Tourisme", "Services Financiers", "Industrie & B2B", "Restaurants & Alimentation", "Services Professionnels"],
  resultsTitle: `Résultats pour les Entreprises de ${city}`,
  results: [
    { stat: "500%", label: "Croissance Moyenne du Trafic" },
    { stat: "200+", label: "Mots-Clés Positionnés" },
    { stat: "50+", label: "Clients dans le Monde" },
    { stat: "5+", label: "Pays Desservis" },
  ],
  faqTitle: `Questions Fréquentes sur le SEO à ${city}`,
  faqs: [
    { q: `Combien coûte le SEO à ${city} ?`, a: `Nos forfaits SEO pour les entreprises de ${city} commencent à 500$/mois pour le plan Starter, 1000$/mois pour Growth, et 2000$/mois pour Enterprise. Nous offrons une consultation gratuite pour recommander le meilleur plan.` },
    { q: `Combien de temps faut-il pour voir des résultats SEO à ${city} ?`, a: `La plupart des entreprises de ${city} voient des améliorations initiales en 2-3 mois, avec des résultats significatifs en 4-6 mois. Le SEO est un investissement à long terme.` },
    { q: `Proposez-vous du SEO local à ${city} ?`, a: `Oui ! Le SEO local est un élément central de notre offre à ${city}. Nous optimisons votre fiche Google Business Profile, construisons des citations locales et gérons les avis.` },
    { q: `Qu'est-ce qui différencie vos services SEO à ${city} ?`, a: `Nous combinons le SEO traditionnel avec le GEO (Generative Engine Optimization) pour assurer la visibilité de votre entreprise sur Google et les moteurs de recherche IA.` },
    { q: `Travaillez-vous avec des entreprises en dehors de ${city} ?`, a: `Oui ! Bien que nous nous spécialisions dans le SEO à ${city}, nous servons des clients dans tout ${country} et à l'international.` },
  ],
  ctaTitle: `Prêt à Développer Votre Entreprise à ${city} ?`,
  ctaDesc: `Obtenez un audit SEO gratuit et complet pour votre entreprise à ${city}. Nous analyserons votre site et créerons une stratégie personnalisée.`,
  ctaButton: `Audit SEO Gratuit pour Votre Entreprise à ${city}`,
  nearbyCitiesTitle: "Services SEO dans les Villes Proches",
  lsiTitle: `Pourquoi les Entreprises de ${city} Ont Besoin d'un Expert SEO en ${new Date().getFullYear()}`,
  lsiParagraphs: [
    `Le référencement naturel à ${city} a considérablement évolué. Aujourd'hui, se positionner sur Google, Bing et les moteurs de recherche IA comme ChatGPT, Google AI Overviews et Perplexity nécessite une approche holistique intégrant le SEO technique, l'optimisation sémantique, le SEO basé sur les entités, et les signaux E-E-A-T. Les entreprises de ${city}, ${country} doivent s'adapter à ces changements.`,
    `Notre approche du SEO à ${city} intègre les mots-clés LSI (Latent Semantic Indexing), l'optimisation NLP (traitement du langage naturel) et la construction d'autorité thématique. Nous veillons à ce que votre site réponde à l'intention de recherche de manière exhaustive — des requêtes informationnelles aux recherches transactionnelles.`,
    `Les facteurs de SEO local sont particulièrement cruciaux pour les entreprises de ${city}. Nous optimisons votre fiche Google Business Profile avec des citations NAP précises, des images géolocalisées, du contenu localisé et des stratégies de gestion des avis.`,
  ],
  landmarksTitle: `Au Service des Entreprises Près des Zones Clés de ${city}`,
  landmarks: [],
  whyChooseTitle: `Pourquoi Nous Choisir comme Partenaire SEO à ${city}`,
  whyChoosePoints: [
    { title: "Prêt pour la Recherche IA", desc: `Nous optimisons votre entreprise de ${city} pour Google, Bing, mais aussi pour ChatGPT, Perplexity et Google Gemini. Nos stratégies GEO assurent la visibilité de votre marque dans les réponses générées par l'IA.` },
    { title: "Stratégies Basées sur les Données", desc: `Chaque décision SEO pour votre entreprise à ${city} est soutenue par des données. Nous utilisons des analyses avancées et des recherches de marché.` },
    { title: "Rapports Mensuels Transparents", desc: `Vous recevez des rapports détaillés montrant les performances de votre campagne — classements, trafic organique et taux de conversion.` },
    { title: "SEO Multilingue & International", desc: `Pour les entreprises de ${city} ciblant des marchés internationaux, nous fournissons des services SEO multilingues avec une implémentation hreflang correcte.` },
  ],
  aeoTitle: `Optimisation pour les Moteurs de Réponse (AEO) à ${city}`,
  aeoParagraphs: [
    `Avec les moteurs de recherche IA qui transforment la façon dont les utilisateurs de ${city} trouvent l'information, l'optimisation AEO est devenue essentielle. Google AI Overviews, ChatGPT et Perplexity fournissent des réponses directes au lieu des liens bleus traditionnels.`,
    `Notre stratégie AEO pour les entreprises de ${city} inclut l'optimisation des données structurées, l'implémentation du schéma FAQ, le balisage des entités et la création de contenu autorité que les systèmes IA préfèrent référencer.`,
  ],
  servicesInterlinkTitle: `Nos Services SEO Disponibles à ${city}`,
  industriesInterlinkTitle: `Secteurs dans Lesquels Nous Sommes Spécialisés à ${city}`,
});

const deContent: ContentGenerator = (city, country) => ({
  heroSubtitle: `Dominieren Sie die Suchergebnisse in ${city} mit datengesteuerten SEO-Strategien. Wir helfen Unternehmen in ${country}, den organischen Traffic zu steigern und Rankings zu verbessern.`,
  challengesTitle: `SEO-Herausforderungen für Unternehmen in ${city}`,
  challenges: [
    { title: "Intensiver Lokaler Wettbewerb", desc: `Der digitale Markt in ${city} ist hart umkämpft. Um sich abzuheben, brauchen Sie eine maßgeschneiderte SEO-Strategie.` },
    { title: "Sich Entwickelnde Algorithmen", desc: `Die Algorithmen von Google ändern sich ständig. Unternehmen in ${city} brauchen einen SEO-Partner, der proaktiv handelt.` },
    { title: "Multi-Channel-Sichtbarkeit", desc: `Modernes SEO in ${city} geht über Google hinaus. KI-Suchmaschinen wie ChatGPT und Perplexity verändern die Suche.` },
    { title: "Mobile-First-Indexierung", desc: `Die Mehrheit der Suchanfragen in ${city} erfolgt über Mobilgeräte. Ihre Website muss perfekt für Mobile optimiert sein.` },
    { title: "Lokale Suchdominanz", desc: `Für Unternehmen in ${city} ist die Sichtbarkeit in Google Maps und lokalen Suchergebnissen entscheidend.` },
    { title: "Autoritätsaufbau", desc: `Ihr Unternehmen als vertrauenswürdige Autorität in ${city} zu etablieren erfordert konsistenten, hochwertigen Content.` },
  ],
  processTitle: `Unser SEO-Prozess für Unternehmen in ${city}`,
  processSteps: [
    { title: "Analyse & Audit", desc: `Wir beginnen mit einem umfassenden Audit Ihrer Website und einer Wettbewerbsanalyse des Marktes in ${city}.` },
    { title: "Strategieentwicklung", desc: `Basierend auf unserer Analyse erstellen wir eine maßgeschneiderte SEO-Strategie für den Markt in ${city}.` },
    { title: "Technische Optimierung", desc: `Wir beheben alle technischen SEO-Probleme: Geschwindigkeit, Core Web Vitals, Mobile, strukturierte Daten.` },
    { title: "Content & On-Page SEO", desc: `Unser Team erstellt und optimiert Content für hochwertige Keywords im Markt ${city}.` },
    { title: "Linkaufbau & Autorität", desc: `Wir bauen hochwertige Backlinks von relevanten, autoritativen Websites in ${country} auf.` },
    { title: "Monitoring & Reporting", desc: `Sie erhalten detaillierte monatliche Berichte über Rankings, Traffic-Wachstum und ROI.` },
  ],
  industriesTitle: `Branchen, die wir in ${city} bedienen`,
  industries: ["Gesundheit & Medizin", "Recht & Anwälte", "Immobilien", "E-Commerce & Einzelhandel", "Technologie & SaaS", "Bau & Handwerk", "Bildung & Training", "Gastgewerbe & Tourismus", "Finanzdienstleistungen", "Industrie & B2B", "Gastronomie", "Beratung & Dienstleistungen"],
  resultsTitle: `Ergebnisse für Unternehmen in ${city}`,
  results: [
    { stat: "500%", label: "Durchschnittliches Traffic-Wachstum" },
    { stat: "200+", label: "Rankende Keywords" },
    { stat: "50+", label: "Kunden Weltweit" },
    { stat: "5+", label: "Betreute Länder" },
  ],
  faqTitle: `Häufige Fragen zu SEO in ${city}`,
  faqs: [
    { q: `Was kostet SEO in ${city}?`, a: `Unsere SEO-Pakete für Unternehmen in ${city} beginnen bei 500$/Monat für Starter, 1.000$/Monat für Growth und 2.000$/Monat für Enterprise. Wir bieten eine kostenlose Beratung an.` },
    { q: `Wie lange dauert es, SEO-Ergebnisse in ${city} zu sehen?`, a: `Die meisten Unternehmen in ${city} sehen erste Verbesserungen innerhalb von 2-3 Monaten, mit signifikanten Ergebnissen in 4-6 Monaten.` },
    { q: `Bieten Sie lokales SEO in ${city} an?`, a: `Ja! Lokales SEO ist ein Kernbestandteil unseres Angebots in ${city}. Wir optimieren Ihr Google Business Profil und bauen lokale Zitationen auf.` },
    { q: `Was unterscheidet Ihre SEO-Dienste in ${city}?`, a: `Wir kombinieren traditionelles SEO mit GEO (Generative Engine Optimization) für Sichtbarkeit auf Google und KI-Suchmaschinen.` },
    { q: `Arbeiten Sie auch mit Unternehmen außerhalb von ${city}?`, a: `Ja! Obwohl wir uns auf SEO in ${city} spezialisieren, betreuen wir Kunden in ganz ${country} und international.` },
  ],
  ctaTitle: `Bereit, Ihr Unternehmen in ${city} zu stärken?`,
  ctaDesc: `Erhalten Sie ein kostenloses, umfassendes SEO-Audit für Ihr Unternehmen in ${city}. Wir analysieren Ihre Website und erstellen eine maßgeschneiderte Strategie.`,
  ctaButton: `Kostenloses SEO-Audit für Ihr ${city} Unternehmen`,
  nearbyCitiesTitle: "SEO-Dienste in Nahegelegenen Städten",
  lsiTitle: `Warum Unternehmen in ${city} einen SEO-Experten in ${new Date().getFullYear()} brauchen`,
  lsiParagraphs: [
    `Suchmaschinenoptimierung in ${city} hat sich weit über traditionelles Keyword-Stuffing hinaus entwickelt. Heute erfordert das Ranking auf Google, Bing und KI-Suchmaschinen wie ChatGPT, Google AI Overviews und Perplexity einen ganzheitlichen Ansatz, der technisches SEO, semantische Suchoptimierung, entitätsbasiertes SEO und E-E-A-T-Signale umfasst.`,
    `Unser Ansatz für SEO in ${city} integriert LSI-Keywords (Latent Semantic Indexing), NLP-Optimierung (Natural Language Processing) und den Aufbau thematischer Autorität. Wir stellen sicher, dass Ihre Website die Suchintention umfassend bedient.`,
    `Lokale SEO-Faktoren sind besonders entscheidend für Unternehmen in ${city}. Wir optimieren Ihr Google Business Profil mit genauen NAP-Zitationen, geogetaggten Bildern, lokalisiertem Content und Bewertungsmanagement-Strategien.`,
  ],
  landmarksTitle: `Wir Bedienen Unternehmen in Schlüsselbereichen von ${city}`,
  landmarks: [],
  whyChooseTitle: `Warum Sie Uns als SEO-Partner in ${city} Wählen Sollten`,
  whyChoosePoints: [
    { title: "Bereit für KI & Generative Suche", desc: `Wir optimieren Ihr ${city} Unternehmen nicht nur für Google und Bing, sondern auch für KI-Suchmaschinen wie ChatGPT, Perplexity und Google Gemini.` },
    { title: "Datengesteuerte Strategien", desc: `Jede SEO-Entscheidung für Ihr ${city} Unternehmen wird durch Daten gestützt. Wir nutzen fortschrittliche Analysen und Marktforschung.` },
    { title: "Transparente Monatsberichte", desc: `Sie erhalten detaillierte Berichte zu Keyword-Rankings, organischem Traffic-Wachstum und Konversionsraten.` },
    { title: "Mehrsprachiges & Internationales SEO", desc: `Für Unternehmen in ${city}, die internationale Märkte ansprechen, bieten wir mehrsprachige SEO-Dienste mit korrekter Hreflang-Implementierung.` },
  ],
  aeoTitle: `Answer Engine Optimization (AEO) für ${city}`,
  aeoParagraphs: [
    `Da KI-Suchmaschinen die Art verändern, wie Nutzer in ${city} Informationen finden, ist Answer Engine Optimization (AEO) unverzichtbar geworden. Google AI Overviews, ChatGPT und Perplexity liefern direkte Antworten statt traditioneller blauer Links.`,
    `Unsere AEO-Strategie für ${city} umfasst die Optimierung strukturierter Daten, FAQ-Schema-Implementierung, Entitäts-Markup und die Erstellung autoritativer Inhalte, die KI-Systeme bevorzugt referenzieren.`,
  ],
  servicesInterlinkTitle: `Unsere SEO-Dienste in ${city}`,
  industriesInterlinkTitle: `Branchen, auf die Wir Uns in ${city} Spezialisieren`,
});

// Generic template for other languages - extends English with localized headers
const genericContent: ContentGenerator = (city, country) => enContent(city, country);

const contentMap: Record<string, ContentGenerator> = {
  en: enContent,
  ar: arContent,
  fr: frContent,
  de: deContent,
  nl: (city, country) => ({
    ...enContent(city, country),
    heroSubtitle: `Domineer de zoekresultaten in ${city} met datagedreven SEO-strategieën. Wij helpen bedrijven in ${country} organisch verkeer te verhogen en rankings te verbeteren.`,
    challengesTitle: `SEO-Uitdagingen voor Bedrijven in ${city}`,
    processTitle: `Ons SEO-Proces voor Bedrijven in ${city}`,
    industriesTitle: `Sectoren die we Bedienen in ${city}`,
    resultsTitle: `Resultaten voor Bedrijven in ${city}`,
    faqTitle: `Veelgestelde Vragen over SEO in ${city}`,
    ctaTitle: `Klaar om uw ${city} Bedrijf te Laten Groeien?`,
    ctaDesc: `Ontvang een gratis, uitgebreide SEO-audit voor uw bedrijf in ${city}.`,
    ctaButton: `Gratis SEO-Audit voor uw ${city} Bedrijf`,
    nearbyCitiesTitle: "SEO-Diensten in Nabijgelegen Steden",
    lsiTitle: `Waarom Bedrijven in ${city} een SEO-Expert Nodig Hebben`,
    servicesInterlinkTitle: `Onze SEO-Diensten Beschikbaar in ${city}`,
    industriesInterlinkTitle: `Sectoren Waarin Wij Gespecialiseerd Zijn in ${city}`,
  }),
  it: (city, country) => ({
    ...enContent(city, country),
    heroSubtitle: `Domina i risultati di ricerca a ${city} con strategie SEO basate sui dati. Aiutiamo le aziende in ${country} ad aumentare il traffico organico e migliorare i posizionamenti.`,
    challengesTitle: `Sfide SEO per le Aziende a ${city}`,
    processTitle: `Il Nostro Processo SEO per le Aziende di ${city}`,
    industriesTitle: `Settori che Serviamo a ${city}`,
    resultsTitle: `Risultati per le Aziende di ${city}`,
    faqTitle: `Domande Frequenti sul SEO a ${city}`,
    ctaTitle: `Pronto a Far Crescere la tua Azienda a ${city}?`,
    ctaDesc: `Ottieni un audit SEO gratuito per la tua azienda a ${city}. Analizzeremo il tuo sito e creeremo una strategia personalizzata.`,
    ctaButton: `Audit SEO Gratuito per la tua Azienda a ${city}`,
    nearbyCitiesTitle: "Servizi SEO nelle Città Vicine",
    lsiTitle: `Perché le Aziende di ${city} Hanno Bisogno di un Esperto SEO`,
    servicesInterlinkTitle: `I Nostri Servizi SEO Disponibili a ${city}`,
    industriesInterlinkTitle: `Settori in Cui Siamo Specializzati a ${city}`,
  }),
  es: (city, country) => ({
    ...enContent(city, country),
    heroSubtitle: `Domina los resultados de búsqueda en ${city} con estrategias SEO basadas en datos. Ayudamos a empresas en ${country} a aumentar el tráfico orgánico y mejorar posiciones.`,
    challengesTitle: `Desafíos SEO para Empresas en ${city}`,
    processTitle: `Nuestro Proceso SEO para Empresas de ${city}`,
    industriesTitle: `Sectores que Servimos en ${city}`,
    resultsTitle: `Resultados para Empresas de ${city}`,
    faqTitle: `Preguntas Frecuentes sobre SEO en ${city}`,
    ctaTitle: `¿Listo para Hacer Crecer tu Negocio en ${city}?`,
    ctaDesc: `Obtén una auditoría SEO gratuita para tu empresa en ${city}. Analizaremos tu sitio web y crearemos una estrategia personalizada.`,
    ctaButton: `Auditoría SEO Gratuita para tu Empresa en ${city}`,
    nearbyCitiesTitle: "Servicios SEO en Ciudades Cercanas",
    lsiTitle: `Por Qué las Empresas de ${city} Necesitan un Experto SEO`,
    servicesInterlinkTitle: `Nuestros Servicios SEO Disponibles en ${city}`,
    industriesInterlinkTitle: `Industrias en las que Nos Especializamos en ${city}`,
  }),
  pt: (city, country) => ({
    ...enContent(city, country),
    heroSubtitle: `Domine os resultados de busca em ${city} com estratégias de SEO baseadas em dados. Ajudamos empresas em ${country} a aumentar o tráfego orgânico e melhorar rankings.`,
    challengesTitle: `Desafios de SEO para Empresas em ${city}`,
    processTitle: `Nosso Processo de SEO para Empresas de ${city}`,
    industriesTitle: `Setores que Atendemos em ${city}`,
    resultsTitle: `Resultados para Empresas de ${city}`,
    faqTitle: `Perguntas Frequentes sobre SEO em ${city}`,
    ctaTitle: `Pronto para Crescer seu Negócio em ${city}?`,
    ctaDesc: `Obtenha uma auditoria SEO gratuita para sua empresa em ${city}. Analisaremos seu site e criaremos uma estratégia personalizada.`,
    ctaButton: `Auditoria SEO Gratuita para sua Empresa em ${city}`,
    nearbyCitiesTitle: "Serviços SEO em Cidades Próximas",
    lsiTitle: `Por Que Empresas em ${city} Precisam de um Especialista SEO`,
    servicesInterlinkTitle: `Nossos Serviços SEO Disponíveis em ${city}`,
    industriesInterlinkTitle: `Setores em Que Somos Especializados em ${city}`,
  }),
  tr: (city, country) => ({
    ...enContent(city, country),
    heroSubtitle: `${city} arama sonuçlarında veri odaklı SEO stratejileri ile öne çıkın. ${country} genelinde işletmelerin organik trafiğini artırıyor ve sıralamaları yükseltiyoruz.`,
    challengesTitle: `${city} İşletmeleri için SEO Zorlukları`,
    processTitle: `${city} İşletmeleri için SEO Sürecimiz`,
    industriesTitle: `${city}'de Hizmet Verdiğimiz Sektörler`,
    resultsTitle: `${city} İşletmeleri için Sonuçlarımız`,
    faqTitle: `${city}'de SEO Hakkında Sık Sorulan Sorular`,
    ctaTitle: `${city}'deki İşletmenizi Büyütmeye Hazır mısınız?`,
    ctaDesc: `${city} işletmeniz için ücretsiz, kapsamlı bir SEO denetimi alın.`,
    ctaButton: `${city} İşletmeniz İçin Ücretsiz SEO Denetimi`,
    nearbyCitiesTitle: "Yakın Şehirlerde SEO Hizmetleri",
    lsiTitle: `${city} İşletmeleri Neden SEO Uzmanına İhtiyaç Duyar`,
    servicesInterlinkTitle: `${city}'de Mevcut SEO Hizmetlerimiz`,
    industriesInterlinkTitle: `${city}'de Uzmanlaştığımız Sektörler`,
  }),
};

// For languages without dedicated templates, fall back to English content structure
export function getLocationContent(lang: string, city: string, country: string): LocationContent {
  const generator = contentMap[lang] || genericContent;
  return generator(city, country);
}

/** City-specific landmark data for enhanced local SEO */
export const cityLandmarks: Record<string, { name: string; desc: string }[]> = {
  // Pakistan
  islamabad: [
    { name: "Faisal Mosque Area", desc: "Serving businesses in the Faisal Mosque district, E-7 to E-11 sectors, and Margalla Hills vicinity." },
    { name: "Blue Area / Jinnah Avenue", desc: "SEO services for businesses along Blue Area, Jinnah Avenue, and the central commercial district." },
    { name: "F-6 & F-7 Markaz", desc: "Helping retailers and restaurants in F-6 Super Market and F-7 Markaz improve their online visibility." },
    { name: "I-8 & I-9 Industrial Area", desc: "Supporting manufacturing and B2B businesses near I-8 Markaz and I-9 Industrial Zone." },
  ],
  rawalpindi: [
    { name: "Raja Bazaar", desc: "SEO services for businesses in and around the historic Raja Bazaar commercial hub." },
    { name: "Saddar", desc: "Serving retailers and service providers in the Saddar cantonment area." },
    { name: "Bahria Town Rawalpindi", desc: "Digital marketing for businesses in Bahria Town and DHA Rawalpindi." },
  ],
  lahore: [
    { name: "Gulberg & MM Alam Road", desc: "SEO for businesses along the MM Alam Road commercial strip and Gulberg area." },
    { name: "Liberty Market & Model Town", desc: "Helping retailers and services near Liberty Roundabout and Model Town." },
    { name: "Johar Town & Wapda Town", desc: "Supporting businesses in Johar Town, Wapda Town, and surrounding residential-commercial areas." },
    { name: "DHA Lahore", desc: "Digital optimization for premium businesses in Defence Housing Authority phases." },
  ],
  karachi: [
    { name: "Clifton & DHA", desc: "SEO services for businesses in Clifton, DHA, and Sea View commercial areas." },
    { name: "Saddar & I.I. Chundrigar Road", desc: "Supporting financial and corporate businesses in Karachi's central business district." },
    { name: "Korangi & SITE Industrial Areas", desc: "SEO for manufacturing and export businesses in Korangi and SITE Town." },
    { name: "Gulshan-e-Iqbal & Gulistan-e-Jauhar", desc: "Helping local businesses in Gulshan and Jauhar improve their search visibility." },
  ],
  // UAE
  dubai: [
    { name: "Downtown Dubai & Burj Khalifa", desc: "SEO for luxury brands and businesses near Burj Khalifa, Dubai Mall, and DIFC." },
    { name: "Dubai Marina & JBR", desc: "Helping hospitality and retail businesses in Dubai Marina, JBR, and JLT improve rankings." },
    { name: "Business Bay & DIFC", desc: "SEO for financial services, consulting firms, and tech companies in Business Bay and DIFC." },
    { name: "Deira & Bur Dubai", desc: "Supporting traditional and wholesale businesses in Deira, Gold Souk, and Bur Dubai areas." },
  ],
  "abu-dhabi": [
    { name: "Al Maryah Island & ADGM", desc: "SEO for financial institutions and businesses in Abu Dhabi Global Market district." },
    { name: "Corniche & Al Khalidiyah", desc: "Helping hospitality and retail businesses along the Corniche waterfront area." },
    { name: "Yas Island", desc: "SEO services for entertainment, hospitality, and tourism businesses on Yas Island." },
  ],
  // Saudi Arabia
  riyadh: [
    { name: "King Fahd Road & Olaya District", desc: "SEO for corporate offices and businesses along King Fahd Road and Olaya Street commercial corridor." },
    { name: "KAFD (King Abdullah Financial District)", desc: "Digital optimization for fintech and financial services in KAFD." },
    { name: "Al Malqa & Al Yasmin", desc: "Supporting emerging businesses in north Riyadh's fast-growing Al Malqa and Al Yasmin districts." },
  ],
  jeddah: [
    { name: "Corniche & Al Hamra", desc: "SEO services for hospitality and retail businesses along the Jeddah Corniche and Al Hamra district." },
    { name: "Tahlia Street", desc: "Helping luxury retail and dining businesses on Tahlia Street improve their online presence." },
    { name: "King Abdullah Economic City (KAEC)", desc: "SEO for businesses in the KAEC special economic zone near Jeddah." },
  ],
  // UK
  london: [
    { name: "City of London & Canary Wharf", desc: "SEO for financial services, fintech, and corporate businesses in the City and Canary Wharf." },
    { name: "Shoreditch & Tech City", desc: "Helping startups and tech companies in Shoreditch and the Silicon Roundabout area." },
    { name: "Westminster & Mayfair", desc: "SEO for luxury brands, professional services, and businesses in Westminster and Mayfair." },
    { name: "Camden & Islington", desc: "Supporting creative agencies, restaurants, and local businesses in North London." },
  ],
  manchester: [
    { name: "Northern Quarter & Spinningfields", desc: "SEO for creative agencies and financial businesses in Manchester's key commercial areas." },
    { name: "MediaCityUK Salford", desc: "Digital optimization for media and tech companies at MediaCityUK and Salford Quays." },
  ],
  // USA
  "new-york": [
    { name: "Manhattan & Midtown", desc: "SEO for businesses in Midtown Manhattan, Times Square, and the central business district." },
    { name: "SoHo & Greenwich Village", desc: "Helping boutique brands and creative businesses in SoHo, West Village, and NoHo." },
    { name: "Brooklyn & DUMBO", desc: "SEO for tech startups, creative agencies, and local businesses in Brooklyn and DUMBO." },
    { name: "Financial District & Wall Street", desc: "Digital optimization for financial services and fintech companies in FiDi." },
  ],
  "los-angeles": [
    { name: "Hollywood & West Hollywood", desc: "SEO for entertainment, hospitality, and creative businesses in the Hollywood area." },
    { name: "Santa Monica & Venice", desc: "Helping tech startups and lifestyle brands on Silicon Beach and the Westside." },
    { name: "Downtown LA & Arts District", desc: "SEO for emerging businesses in DTLA and the growing Arts District." },
  ],
  // Germany
  berlin: [
    { name: "Mitte & Alexanderplatz", desc: "SEO für Unternehmen im Zentrum Berlins, rund um Mitte und Alexanderplatz." },
    { name: "Kreuzberg & Friedrichshain", desc: "Suchmaschinenoptimierung für Startups und kreative Unternehmen in Kreuzberg und Friedrichshain." },
  ],
  // France
  paris: [
    { name: "La Défense", desc: "SEO pour les entreprises du quartier d'affaires de La Défense." },
    { name: "Le Marais & Châtelet", desc: "Référencement pour les commerces et restaurants du Marais et de Châtelet-Les Halles." },
    { name: "Champs-Élysées & 8ème", desc: "SEO pour les marques de luxe et les entreprises près des Champs-Élysées." },
  ],
  // Qatar
  doha: [
    { name: "West Bay & Lusail", desc: "SEO for businesses in Doha's West Bay financial district and the new Lusail City development." },
    { name: "The Pearl-Qatar", desc: "Helping luxury retail and hospitality businesses on The Pearl-Qatar island." },
    { name: "Souq Waqif & Msheireb", desc: "SEO for traditional and modern businesses in the Souq Waqif and Msheireb Downtown areas." },
  ],
  // Egypt
  cairo: [
    { name: "New Cairo & Fifth Settlement", desc: "SEO for businesses in the rapidly growing New Cairo and Fifth Settlement districts." },
    { name: "Maadi & Zamalek", desc: "Helping professional services and lifestyle businesses in Maadi and Zamalek." },
    { name: "Smart Village & 6th of October", desc: "SEO for tech companies and businesses in Smart Village and Sheikh Zayed City." },
  ],
  // Additional cities with landmarks
  toronto: [
    { name: "Financial District & Bay Street", desc: "SEO for financial services and corporate businesses in Toronto's downtown core." },
    { name: "Liberty Village & King West", desc: "Helping startups and creative agencies in Liberty Village and the King West corridor." },
  ],
  sydney: [
    { name: "CBD & Circular Quay", desc: "SEO for businesses in Sydney's central business district near the Opera House and Harbour Bridge." },
    { name: "Surry Hills & Darlinghurst", desc: "Helping creative and hospitality businesses in Sydney's inner-city suburbs." },
  ],
  melbourne: [
    { name: "CBD & Southbank", desc: "SEO for businesses in Melbourne's central business district and Southbank arts precinct." },
    { name: "Richmond & Collingwood", desc: "Supporting creative agencies and local businesses in Melbourne's inner east." },
  ],
  amsterdam: [
    { name: "Zuidas Business District", desc: "SEO voor bedrijven in het Zuidas financiële district." },
    { name: "De Pijp & Jordaan", desc: "SEO voor horeca en winkels in De Pijp en de Jordaan." },
  ],
  // Japan
  tokyo: [
    { name: "Shibuya & Shinjuku", desc: "渋谷・新宿エリアの企業向けSEOサービス。" },
    { name: "Minato & Roppongi", desc: "港区・六本木エリアのビジネス向け検索エンジン最適化。" },
  ],
  // Korea
  seoul: [
    { name: "Gangnam & Teheran-ro", desc: "강남 테헤란로 IT 기업 및 스타트업을 위한 SEO 서비스." },
    { name: "Myeongdong & Jung-gu", desc: "명동 및 중구 상업지구 비즈니스를 위한 검색 최적화." },
  ],
};
