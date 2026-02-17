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
    { title: "Intense Local Competition", desc: `${city} has a highly competitive digital market. Standing out requires a tailored SEO strategy combined with professional web design, content writing, and PPC advertising to capture the right audience segments in the ${city} market.` },
    { title: "Evolving Search Algorithms", desc: `Google's algorithms change constantly. Businesses in ${city} need a digital partner who stays ahead of updates and adapts SEO, content marketing, and social media strategies proactively to maintain and improve rankings.` },
    { title: "Multi-Channel Visibility", desc: `Modern digital marketing in ${city} isn't just about Google. AI search engines, social media platforms, PPC campaigns, and professional web development all play a role in how consumers in ${country} discover businesses online.` },
    { title: "Mobile-First Web Design", desc: `With the majority of searches in ${city} happening on mobile devices, your website needs expert web design and web development to deliver perfect mobile performance, speed, and user experience.` },
    { title: "Local Search Dominance", desc: `For businesses serving ${city} customers, appearing in Google Maps and local search results is critical. This requires optimized Google Business Profile, local citation management, and targeted local PPC campaigns.` },
    { title: "Content & Social Media Authority", desc: `Establishing your business as a trusted authority in ${city} requires consistent, high-quality content writing, strategic social media management, and a strong online presence across all digital channels.` },
  ],
  processTitle: `Our SEO Process for ${city} Businesses`,
  processSteps: [
    { title: "Discovery & Audit", desc: `We begin with a comprehensive audit of your website's SEO, web design, content quality, and competitive analysis of the ${city} market. We identify technical issues, content gaps, and digital marketing opportunities specific to your industry.` },
    { title: "Strategy Development", desc: `Based on our audit findings, we create a custom digital strategy tailored to the ${city} market. This includes SEO, PPC campaign planning, content writing strategy, social media management, and web development improvements.` },
    { title: "Web Design & Technical Optimization", desc: `We fix all technical SEO issues and enhance your web design — including site speed, Core Web Vitals, mobile-first web development, schema markup, and user experience optimization to convert more visitors into customers.` },
    { title: "Content Writing & On-Page SEO", desc: `Our content writing team creates and optimizes high-value content for the ${city} market. Every page is crafted with professional copywriting, proper meta tags, headings, and internal linking for both users and search engines.` },
    { title: "PPC, Social Media & Link Building", desc: `We complement organic SEO with targeted PPC advertising and social media management to drive immediate traffic. Our link building uses white-hat outreach and quality content creation to build domain authority in ${country}.` },
    { title: "Monitoring & Reporting", desc: `You receive detailed monthly reports covering SEO rankings, PPC performance, social media engagement, and content metrics. We continuously refine every channel based on performance data specific to the ${city} market.` },
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
    { q: `How much does SEO cost in ${city}?`, a: `Our SEO packages for ${city} businesses start at $500/month for the Starter plan, $1,000/month for Growth, and $2,000/month for Enterprise. We also offer bundled digital packages that include PPC management, content writing, and social media management. Contact us for a free consultation.` },
    { q: `How long does it take to see SEO results in ${city}?`, a: `Most ${city} businesses see initial improvements within 2-3 months, with significant results in 4-6 months. For faster results, we recommend combining SEO with PPC advertising and social media marketing to drive immediate traffic while organic rankings build.` },
    { q: `Do you offer web design and development in ${city}?`, a: `Yes! We provide professional web design and custom web development services for businesses in ${city}. From responsive WordPress and Shopify websites to custom web applications, our team builds high-converting sites optimized for SEO and user experience.` },
    { q: `What digital marketing services do you offer in ${city}?`, a: `We offer comprehensive digital marketing for ${city} businesses including SEO, PPC management (Google Ads & social ads), professional content writing, web design, web development, and social media management across all major platforms.` },
    { q: `Do you manage social media and content writing?`, a: `Absolutely. Our content writing team creates SEO-optimized blog posts, website copy, and marketing content. Our social media management services cover LinkedIn, Instagram, Facebook, X, and more — with content calendars, community management, and performance reporting for ${city} businesses.` },
    { q: `Can you run PPC campaigns alongside SEO in ${city}?`, a: `Yes! We manage Google Ads, Bing Ads, and social media PPC campaigns for ${city} businesses. Combining PPC with SEO delivers both immediate visibility and long-term organic growth — maximizing your digital marketing ROI.` },
    { q: `Do you work with businesses outside of ${city}?`, a: `Yes! While we specialize in ${city} digital marketing, we serve clients across ${country} and internationally. Our team offers SEO, PPC, web design, web development, content writing, and social media management for businesses targeting multiple locations.` },
  ],
  ctaTitle: `Ready to Grow Your ${city} Business?`,
  ctaDesc: `Get a free, comprehensive SEO audit for your ${city} business. We'll analyze your website, identify opportunities, and create a custom strategy to help you dominate search results.`,
  ctaButton: `Get Free SEO Audit for Your ${city} Business`,
  nearbyCitiesTitle: "SEO Services in Nearby Cities",
  // New enhanced sections
  lsiTitle: `Why ${city} Businesses Need Expert SEO in ${new Date().getFullYear()}`,
  lsiParagraphs: [
    `Digital marketing in ${city} has evolved far beyond traditional SEO. Today, growing your online presence requires a holistic approach that combines search engine optimization, professional web design, custom web development, strategic content writing, PPC advertising, and social media management. Businesses in ${city}, ${country} need an integrated digital strategy across Google, Bing, AI-powered search engines like ChatGPT and Perplexity, social media platforms, and paid search channels to stay ahead of the competition.`,
    `Our approach to digital growth in ${city} integrates SEO with high-converting web design, mobile-first web development, and expert content writing that targets Latent Semantic Indexing (LSI) keywords and natural language processing (NLP) optimization. We ensure your website answers user intent comprehensively — from informational queries about your industry to transactional searches where customers in ${city} are ready to convert. Our PPC management and social media marketing amplify your organic reach for faster results.`,
    `Local visibility is particularly crucial for ${city} businesses. We combine local SEO — including Google Business Profile optimization, NAP citations, and review management — with targeted PPC campaigns, social media advertising, and localized content writing. Paired with professional web development featuring Core Web Vitals optimization, mobile-first design, and structured data markup (JSON-LD schema), your ${city} business gains a comprehensive competitive advantage across all digital channels.`,
  ],
  landmarksTitle: `Serving Businesses Near Key Areas in ${city}`,
  landmarks: [],
  whyChooseTitle: `Why Choose Us as Your ${city} SEO Partner`,
  whyChoosePoints: [
    { title: "Full-Service Digital Agency", desc: `We're more than just an SEO company in ${city}. We offer comprehensive digital services including web design, web development, content writing, PPC management, and social media marketing — everything your ${city} business needs under one roof.` },
    { title: "AI & Generative Search Ready", desc: `We optimize your ${city} business for Google, Bing, and AI search engines including ChatGPT, Perplexity, and Google Gemini. Our GEO strategies ensure your brand appears in AI-generated answers alongside strong PPC and social media visibility.` },
    { title: "Data-Driven Strategies", desc: `Every decision — from SEO and PPC campaigns to content writing and web design — is backed by data. We use advanced analytics and competitor analysis to maximize ROI across all digital channels for your ${city} business.` },
    { title: "Custom Web Design & Development", desc: `Our in-house web design and web development team builds high-converting, mobile-first websites for ${city} businesses. From custom WordPress and Shopify development to bespoke web applications, we create digital experiences that rank and convert.` },
    { title: "Content Writing & Social Media", desc: `Our expert content writers and social media managers create engaging, SEO-optimized content that builds authority and drives engagement for your ${city} business across all platforms including LinkedIn, Instagram, Facebook, and X.` },
    { title: "Multi-Language & International Reach", desc: `For businesses in ${city} targeting international markets, we provide multilingual SEO, PPC, content writing, and social media management with culturally adapted strategies across multiple regions and languages.` },
  ],
  aeoTitle: `Answer Engine Optimization (AEO) for ${city}`,
  aeoParagraphs: [
    `As AI-powered search engines reshape how users in ${city} find information, Answer Engine Optimization (AEO) has become essential. Google AI Overviews, ChatGPT, Perplexity AI, and Microsoft Copilot are increasingly providing direct answers instead of traditional blue links. Your ${city} business needs a combination of AEO, expert content writing, and strong social media presence to be the source these AI systems cite.`,
    `Our AEO strategy for ${city} businesses includes structured data optimization, FAQ schema implementation, entity markup, and professional content writing that AI systems prefer to reference. Combined with social media management, PPC advertising for brand visibility, and a well-designed website built by our web development team, we build your brand's complete digital footprint — ensuring AI models recognize your ${city} business as a trusted authority in your industry.`,
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
  // Pakistan — remaining
  peshawar: [
    { name: "Saddar & University Road", desc: "SEO services for businesses along University Road, Saddar Bazaar, and the historic walled city area." },
    { name: "Hayatabad", desc: "Helping businesses in Hayatabad's commercial phases and the nearby industrial estate." },
    { name: "GT Road & Ring Road", desc: "Supporting retail and wholesale businesses along Grand Trunk Road and Peshawar Ring Road corridor." },
  ],
  faisalabad: [
    { name: "D Ground & Jaranwala Road", desc: "SEO for businesses around D Ground, Jaranwala Road, and the Susan Road commercial strip." },
    { name: "Ghulam Muhammad Abad", desc: "Supporting textile and manufacturing businesses in Faisalabad's industrial hub." },
    { name: "Clock Tower & Eight Bazaars", desc: "Helping traditional retailers in the historic eight bazaars radiating from the iconic Clock Tower." },
  ],
  multan: [
    { name: "Hussain Agahi & Bosan Road", desc: "SEO services for retailers and businesses along Hussain Agahi Bazaar and Bosan Road." },
    { name: "Shah Rukn-e-Alam Shrine Area", desc: "Helping hospitality and tourism businesses near the historic Sufi shrines of Multan." },
    { name: "Multan Industrial Estate", desc: "Digital marketing for export, manufacturing, and B2B businesses in Multan's industrial zone." },
  ],
  sialkot: [
    { name: "Paris Road & Cantt Area", desc: "SEO for export and sports goods businesses along Paris Road and the Cantonment commercial area." },
    { name: "Sialkot Industrial Estate", desc: "Supporting sporting goods manufacturers and leather exporters in the Sialkot Industrial Estate." },
    { name: "Iqbal Shaheed Road", desc: "Helping retail and service businesses along the main Iqbal Shaheed Road corridor." },
  ],
  // UAE — remaining
  sharjah: [
    { name: "Al Majaz & Buhaira Corniche", desc: "SEO for businesses along the Buhaira Corniche waterfront and Al Majaz commercial district." },
    { name: "Sharjah Industrial Area (SAIF Zone)", desc: "Helping manufacturing, logistics, and trade businesses in SAIF Zone and Sharjah Airport Free Zone." },
    { name: "Al Nahda & Al Qasimia", desc: "SEO services for retail and service businesses in the densely populated Al Nahda and Al Qasimia areas." },
  ],
  ajman: [
    { name: "Ajman Corniche & Al Rashidiya", desc: "SEO for hospitality and retail businesses along Ajman Corniche and Al Rashidiya area." },
    { name: "Ajman Free Zone", desc: "Helping trade and e-commerce businesses in Ajman Free Zone improve their online visibility." },
    { name: "Al Jurf Industrial Area", desc: "Digital marketing for industrial and manufacturing businesses in Al Jurf." },
  ],
  "ras-al-khaimah": [
    { name: "Al Nakheel & Corniche", desc: "SEO for businesses in the Al Nakheel commercial district and RAK Corniche waterfront." },
    { name: "RAK Free Trade Zone", desc: "Helping international trade and manufacturing businesses in RAK FTZ." },
    { name: "Al Hamra Village", desc: "SEO for hospitality, tourism, and real estate businesses in Al Hamra Village resort area." },
  ],
  fujairah: [
    { name: "Fujairah City Centre", desc: "SEO services for retail and service businesses in central Fujairah and Al Faseel area." },
    { name: "Fujairah Free Zone", desc: "Helping trade, oil storage, and logistics businesses in Fujairah Free Zone." },
  ],
  "al-ain": [
    { name: "Al Ain Oasis & City Centre", desc: "SEO for tourism, hospitality, and retail businesses near Al Ain Oasis UNESCO Heritage Site." },
    { name: "Jebel Hafeet & Al Ain Zoo", desc: "Helping hospitality and tourism businesses near Jebel Hafeet and the Al Ain Zoo area." },
    { name: "Al Ain Industrial Area", desc: "Digital optimization for manufacturing and B2B businesses in Al Ain's industrial zone." },
  ],
  // Saudi Arabia — remaining
  dammam: [
    { name: "Corniche & King Fahd Causeway", desc: "SEO for businesses along Dammam Corniche and near the Saudi-Bahrain causeway corridor." },
    { name: "Al Shatea & Al Faisaliyah", desc: "Helping retail and service businesses in the Al Shatea and Al Faisaliyah commercial districts." },
    { name: "Dammam Industrial City", desc: "Digital marketing for petrochemical, manufacturing, and logistics businesses in the industrial city." },
  ],
  makkah: [
    { name: "Haram Area & Ajyad", desc: "SEO for hospitality, hotels, and service businesses near Masjid al-Haram and Ajyad district." },
    { name: "Al Aziziyah & Third Ring Road", desc: "Helping retail and hospitality businesses along the Third Ring Road and Al Aziziyah area." },
  ],
  madinah: [
    { name: "Central Area & Masjid An-Nabawi", desc: "SEO for hotels, hospitality, and service businesses near the Prophet's Mosque area." },
    { name: "Knowledge Economic City", desc: "Helping technology and education businesses in Madinah's Knowledge Economic City development." },
  ],
  khobar: [
    { name: "Corniche & Prince Turkey Street", desc: "SEO for dining, retail, and hospitality businesses along Khobar Corniche and Prince Turkey Street." },
    { name: "Dhahran Techno Valley", desc: "Helping tech startups and companies in Dhahran Techno Valley and KFUPM area." },
  ],
  tabuk: [
    { name: "King Khalid Road & City Centre", desc: "SEO for businesses along King Khalid Road and the central commercial district of Tabuk." },
    { name: "NEOM Proximity", desc: "Helping businesses position for the growing NEOM mega-project development near Tabuk." },
  ],
  abha: [
    { name: "Al Saad & City Centre", desc: "SEO for hospitality and tourism businesses in Abha city centre and Al Saad district." },
    { name: "Asir National Park Area", desc: "Helping eco-tourism and hospitality businesses near Asir National Park and Green Mountain." },
  ],
  // Qatar — remaining
  "al-wakrah": [
    { name: "Al Wakrah Souq & Corniche", desc: "SEO for businesses near the renovated Al Wakrah Souq and waterfront corniche area." },
    { name: "Al Wakrah Main Road", desc: "Helping retail and service businesses along the main commercial road in Al Wakrah." },
  ],
  lusail: [
    { name: "Lusail Boulevard", desc: "SEO for luxury retail, dining, and entertainment businesses along Lusail Boulevard." },
    { name: "Lusail Marina & Waterfront", desc: "Helping hospitality and real estate businesses in the Lusail Marina district." },
  ],
  // Bahrain
  manama: [
    { name: "Bahrain Financial Harbour", desc: "SEO for financial services and corporate businesses in Bahrain Financial Harbour." },
    { name: "Seef District & City Centre", desc: "Helping retail, hospitality, and service businesses in the Seef Mall and City Centre area." },
    { name: "Adliya & Exhibition Road", desc: "SEO for restaurants, creative agencies, and lifestyle businesses in Adliya." },
  ],
  riffa: [
    { name: "Riffa Views & East Riffa", desc: "SEO for businesses in the premium Riffa Views development and East Riffa commercial area." },
    { name: "Bahrain International Circuit", desc: "Helping hospitality and entertainment businesses near the F1 circuit." },
  ],
  // Kuwait
  "kuwait-city": [
    { name: "Kuwait Towers & Sharq", desc: "SEO for businesses near Kuwait Towers, Sharq Market, and the central waterfront district." },
    { name: "Kuwait Free Trade Zone", desc: "Helping trade and logistics businesses in the Kuwait Free Trade Zone and Shuwaikh area." },
    { name: "Al Hamra Tower & Downtown", desc: "SEO for corporate and professional services businesses in Kuwait City's downtown towers." },
  ],
  hawalli: [
    { name: "Hawalli Commercial District", desc: "SEO for retail and service businesses in Hawalli's dense commercial center." },
    { name: "Salmiya Junction", desc: "Helping businesses near the Hawalli-Salmiya corridor and major shopping areas." },
  ],
  salmiya: [
    { name: "Marina Mall & Gulf Road", desc: "SEO for retail and entertainment businesses near Marina Mall and the Gulf Road strip." },
    { name: "Salem Al-Mubarak Street", desc: "Helping restaurants, cafes, and retail shops along Salmiya's main commercial street." },
  ],
  // Oman
  muscat: [
    { name: "Muttrah Souq & Corniche", desc: "SEO for tourism, hospitality, and retail businesses near the historic Muttrah Souq and Corniche." },
    { name: "Al Qurum & Shatti Al Qurum", desc: "Helping businesses in the upscale Al Qurum and Shatti Al Qurum residential-commercial areas." },
    { name: "Muscat Hills & Al Khuwair", desc: "SEO for corporate offices and businesses in Al Khuwair CBD and Muscat Hills." },
  ],
  salalah: [
    { name: "Al Haffa & City Centre", desc: "SEO for tourism and retail businesses in Salalah's historic Al Haffa area." },
    { name: "Salalah Free Zone", desc: "Helping logistics and trade businesses in Salalah Free Zone near the port." },
  ],
  sohar: [
    { name: "Sohar Industrial Port", desc: "SEO for industrial, logistics, and trade businesses in the Sohar Port and Free Zone." },
    { name: "Sohar City Centre", desc: "Helping local retail and service businesses in central Sohar." },
  ],
  // Jordan
  amman: [
    { name: "Abdali & Downtown", desc: "SEO for corporate and commercial businesses in the Abdali Boulevard and downtown Amman area." },
    { name: "Sweifieh & Mecca Street", desc: "Helping retail, dining, and service businesses along Mecca Street and in Sweifieh." },
    { name: "King Abdullah Business District", desc: "SEO for tech companies and startups in the King Abdullah II Design and Development Bureau area." },
  ],
  irbid: [
    { name: "University Street & City Centre", desc: "SEO for businesses near Yarmouk University and Irbid's central commercial district." },
    { name: "Al Husn Area", desc: "Helping local businesses in the historic Al Husn area and surrounding neighborhoods." },
  ],
  // Lebanon
  beirut: [
    { name: "Downtown Beirut & Solidere", desc: "SEO for corporate, hospitality, and luxury businesses in the rebuilt Downtown Beirut district." },
    { name: "Hamra & Verdun", desc: "Helping retail, education, and service businesses along Hamra Street and Verdun area." },
    { name: "Achrafieh & Gemmayzeh", desc: "SEO for creative agencies, restaurants, and nightlife businesses in East Beirut." },
  ],
  "tripoli-lebanon": [
    { name: "El Mina & Al Tal", desc: "SEO for businesses in Tripoli's historic centre, El Mina port area, and Al Tal commercial district." },
    { name: "Rachid Karami Fairground", desc: "Helping businesses near the iconic Rachid Karami International Fair complex." },
  ],
  // Egypt — remaining
  alexandria: [
    { name: "Corniche & Stanley Bridge", desc: "SEO for hospitality and tourism businesses along Alexandria's famous Corniche waterfront." },
    { name: "Smouha & Sidi Gaber", desc: "Helping retail and service businesses in the Smouha and Sidi Gaber commercial areas." },
  ],
  giza: [
    { name: "Pyramids Area & Haram Street", desc: "SEO for tourism, hospitality, and retail businesses near the Giza Pyramids and along Haram Street." },
    { name: "6th of October City", desc: "Helping tech and education businesses in 6th of October City and Mall of Egypt area." },
  ],
  // Morocco
  casablanca: [
    { name: "Hassan II Mosque & Corniche", desc: "SEO for tourism and hospitality businesses near the Hassan II Mosque and Ain Diab Corniche." },
    { name: "Casa Finance City", desc: "Helping financial and corporate businesses in Casablanca Finance City and Anfa Place." },
    { name: "Derb Sultan & Maarif", desc: "SEO for retail and service businesses in the Derb Sultan and Maarif shopping districts." },
  ],
  marrakech: [
    { name: "Jemaa el-Fnaa & Medina", desc: "SEO for tourism, hospitality, and artisan businesses in the Jemaa el-Fnaa and Medina area." },
    { name: "Gueliz & Hivernage", desc: "Helping modern retail and hospitality businesses in the Gueliz and Hivernage districts." },
  ],
  rabat: [
    { name: "Hassan Tower & Kasbah", desc: "SEO for tourism businesses near the Hassan Tower, Kasbah of the Udayas, and Rabat Medina." },
    { name: "Agdal & Souissi", desc: "Helping corporate and professional services businesses in the Agdal and Souissi districts." },
  ],
  // Tunisia
  tunis: [
    { name: "Medina & Avenue Habib Bourguiba", desc: "SEO for businesses along Avenue Habib Bourguiba and the historic Tunis Medina." },
    { name: "Les Berges du Lac", desc: "Helping corporate and tech businesses in the modern Les Berges du Lac business district." },
  ],
  // UK — remaining
  birmingham: [
    { name: "Bullring & City Centre", desc: "SEO for retail and hospitality businesses in Birmingham's Bullring and city centre area." },
    { name: "Jewellery Quarter", desc: "Helping creative, artisan, and professional businesses in the historic Jewellery Quarter." },
    { name: "Digbeth & Eastside", desc: "SEO for tech startups and creative agencies in Birmingham's emerging Digbeth and Eastside district." },
  ],
  leeds: [
    { name: "City Centre & Victoria Quarter", desc: "SEO for retail and professional businesses in Leeds city centre and the Victoria Quarter." },
    { name: "Leeds Dock & South Bank", desc: "Helping tech and creative businesses in the Leeds Dock and South Bank regeneration area." },
  ],
  liverpool: [
    { name: "Liverpool ONE & City Centre", desc: "SEO for retail, hospitality, and entertainment businesses in Liverpool ONE and the city centre." },
    { name: "Baltic Triangle", desc: "Helping creative, tech, and startup businesses in Liverpool's Baltic Triangle district." },
  ],
  bristol: [
    { name: "Harbourside & City Centre", desc: "SEO for hospitality and creative businesses around Bristol Harbourside and the city centre." },
    { name: "Temple Quarter", desc: "Helping tech and enterprise businesses in the Temple Quarter Enterprise Zone." },
  ],
  edinburgh: [
    { name: "Royal Mile & Old Town", desc: "SEO for tourism, hospitality, and retail businesses along the Royal Mile and Edinburgh Old Town." },
    { name: "Edinburgh Park & West End", desc: "Helping corporate and tech businesses in Edinburgh Park business district." },
  ],
  glasgow: [
    { name: "Buchanan Street & City Centre", desc: "SEO for retail and hospitality businesses on Buchanan Street and Glasgow city centre." },
    { name: "Finnieston & West End", desc: "Helping creative, dining, and tech businesses in Glasgow's trendy Finnieston and West End." },
  ],
  cardiff: [
    { name: "Cardiff Bay & City Centre", desc: "SEO for businesses in Cardiff Bay waterfront and the central shopping district." },
    { name: "Capitol Quarter", desc: "Helping professional services and tech businesses in Cardiff's Capitol Quarter." },
  ],
  newcastle: [
    { name: "Quayside & City Centre", desc: "SEO for hospitality and retail businesses along the Quayside and Grainger Town area." },
    { name: "Ouseburn Valley", desc: "Helping creative and tech businesses in Newcastle's cultural Ouseburn Valley." },
  ],
  sheffield: [
    { name: "City Centre & Devonshire Quarter", desc: "SEO for retail and creative businesses in Sheffield city centre and the Devonshire Quarter." },
    { name: "Sheffield Digital Campus", desc: "Helping tech and digital businesses on the Sheffield Digital Campus." },
  ],
  nottingham: [
    { name: "Old Market Square & Lace Market", desc: "SEO for retail and hospitality businesses around Old Market Square and the Lace Market." },
    { name: "Creative Quarter", desc: "Helping creative and tech startups in Nottingham's Creative Quarter." },
  ],
  // USA — remaining
  chicago: [
    { name: "The Loop & Magnificent Mile", desc: "SEO for businesses in Chicago's Loop financial district and the Magnificent Mile shopping strip." },
    { name: "River North & West Loop", desc: "Helping creative agencies, restaurants, and tech companies in River North and the West Loop." },
    { name: "Wicker Park & Logan Square", desc: "SEO for boutique and lifestyle businesses in Wicker Park and Logan Square." },
  ],
  houston: [
    { name: "Downtown & Galleria", desc: "SEO for corporate and retail businesses in downtown Houston and the Galleria/Uptown area." },
    { name: "Energy Corridor", desc: "Helping energy, oil & gas, and engineering businesses in Houston's Energy Corridor." },
    { name: "Texas Medical Center", desc: "SEO for healthcare providers and medical businesses in the world's largest medical complex." },
  ],
  phoenix: [
    { name: "Downtown & Roosevelt Row", desc: "SEO for businesses in downtown Phoenix and the arts-focused Roosevelt Row district." },
    { name: "Scottsdale & Tempe", desc: "Helping tech, hospitality, and retail businesses in nearby Scottsdale and Tempe." },
  ],
  "san-antonio": [
    { name: "River Walk & Downtown", desc: "SEO for hospitality and tourism businesses along the famous San Antonio River Walk." },
    { name: "The Pearl & Southtown", desc: "Helping restaurants, retail, and creative businesses in The Pearl and Southtown districts." },
  ],
  "san-diego": [
    { name: "Gaslamp Quarter & Downtown", desc: "SEO for hospitality, dining, and entertainment businesses in the Gaslamp Quarter." },
    { name: "La Jolla & UTC", desc: "Helping biotech, tech, and professional businesses in La Jolla and University City." },
  ],
  dallas: [
    { name: "Uptown & Downtown", desc: "SEO for corporate and hospitality businesses in Dallas Uptown and downtown districts." },
    { name: "Deep Ellum & Design District", desc: "Helping creative, entertainment, and design businesses in Deep Ellum and the Design District." },
  ],
  austin: [
    { name: "Downtown & South Congress", desc: "SEO for tech, hospitality, and creative businesses in downtown Austin and SoCo." },
    { name: "Domain & North Austin", desc: "Helping tech companies and retail businesses in The Domain and North Austin." },
  ],
  miami: [
    { name: "Brickell & Downtown", desc: "SEO for financial services, real estate, and corporate businesses in Brickell and downtown Miami." },
    { name: "Wynwood & Design District", desc: "Helping creative, art, and fashion businesses in Wynwood and the Miami Design District." },
    { name: "South Beach & Miami Beach", desc: "SEO for hospitality, tourism, and lifestyle businesses on South Beach." },
  ],
  atlanta: [
    { name: "Midtown & Buckhead", desc: "SEO for corporate, tech, and hospitality businesses in Midtown and Buckhead." },
    { name: "Old Fourth Ward & Ponce City", desc: "Helping creative and lifestyle businesses near Ponce City Market and the BeltLine." },
  ],
  denver: [
    { name: "LoDo & Union Station", desc: "SEO for businesses in Lower Downtown (LoDo) and the Union Station neighborhood." },
    { name: "RiNo Arts District", desc: "Helping creative, tech, and food businesses in the River North Art District." },
  ],
  seattle: [
    { name: "South Lake Union & Capitol Hill", desc: "SEO for tech companies in South Lake Union and creative businesses on Capitol Hill." },
    { name: "Pike Place & Downtown", desc: "Helping retail, tourism, and hospitality businesses near Pike Place Market." },
  ],
  "san-francisco": [
    { name: "SOMA & Financial District", desc: "SEO for tech startups and financial businesses in SOMA and the Financial District." },
    { name: "Mission District & Castro", desc: "Helping creative, dining, and lifestyle businesses in the Mission and Castro neighborhoods." },
  ],
  boston: [
    { name: "Back Bay & Copley Square", desc: "SEO for professional services and retail businesses in Back Bay and Copley Square." },
    { name: "Seaport District", desc: "Helping tech startups and innovative businesses in Boston's Seaport Innovation District." },
  ],
  "las-vegas": [
    { name: "The Strip & Convention Center", desc: "SEO for hospitality, entertainment, and tourism businesses on the Las Vegas Strip." },
    { name: "Downtown & Fremont Street", desc: "Helping emerging businesses in Downtown Las Vegas and the Fremont East district." },
  ],
  portland: [
    { name: "Pearl District & Downtown", desc: "SEO for creative, retail, and hospitality businesses in the Pearl District and downtown Portland." },
    { name: "Alberta Arts & NE Portland", desc: "Helping independent businesses on Alberta Street and in NE Portland neighborhoods." },
  ],
  charlotte: [
    { name: "Uptown & South End", desc: "SEO for financial, corporate, and hospitality businesses in Uptown Charlotte and South End." },
    { name: "NoDa Arts District", desc: "Helping creative and lifestyle businesses in Charlotte's NoDa (North Davidson) arts district." },
  ],
  detroit: [
    { name: "Downtown & Campus Martius", desc: "SEO for businesses in the revitalized downtown Detroit and Campus Martius area." },
    { name: "Corktown & Midtown", desc: "Helping tech startups and creative businesses in Detroit's Corktown and Midtown neighborhoods." },
  ],
  minneapolis: [
    { name: "Downtown & North Loop", desc: "SEO for corporate and tech businesses in downtown Minneapolis and the North Loop neighborhood." },
    { name: "Uptown & Lake Street", desc: "Helping retail and lifestyle businesses in Uptown Minneapolis and along Lake Street." },
  ],
  // Canada — remaining
  vancouver: [
    { name: "Gastown & Downtown", desc: "SEO for tech, creative, and hospitality businesses in Gastown and downtown Vancouver." },
    { name: "Mount Pleasant & Main Street", desc: "Helping independent businesses and startups on Main Street and in Mount Pleasant." },
  ],
  montreal: [
    { name: "Old Montreal & Downtown", desc: "SEO for tourism, hospitality, and corporate businesses in Old Montreal and downtown." },
    { name: "Mile End & Plateau", desc: "Helping creative, tech, and independent businesses in the Mile End and Plateau-Mont-Royal." },
  ],
  calgary: [
    { name: "Downtown & Beltline", desc: "SEO for energy, corporate, and hospitality businesses in downtown Calgary and the Beltline." },
    { name: "Kensington & Inglewood", desc: "Helping boutique and lifestyle businesses in Kensington and Inglewood neighborhoods." },
  ],
  ottawa: [
    { name: "Parliament Hill & ByWard Market", desc: "SEO for government services, tourism, and businesses near Parliament and ByWard Market." },
    { name: "Kanata North Tech Park", desc: "Helping tech companies in Kanata North, Ottawa's Silicon Valley." },
  ],
  edmonton: [
    { name: "Downtown & Ice District", desc: "SEO for businesses in downtown Edmonton and the new Ice District development." },
    { name: "Whyte Avenue & Old Strathcona", desc: "Helping retail and hospitality businesses along Whyte Avenue and Old Strathcona." },
  ],
  winnipeg: [
    { name: "Exchange District & Downtown", desc: "SEO for creative and corporate businesses in the Exchange District and downtown Winnipeg." },
    { name: "Osborne Village", desc: "Helping independent retailers and restaurants in Winnipeg's Osborne Village." },
  ],
  halifax: [
    { name: "Downtown & Waterfront", desc: "SEO for tourism, hospitality, and maritime businesses on Halifax's downtown waterfront." },
    { name: "Spring Garden Road", desc: "Helping retail and service businesses along Spring Garden Road." },
  ],
  // Germany — remaining
  munich: [
    { name: "Marienplatz & Altstadt", desc: "SEO für Unternehmen in der Altstadt, Marienplatz und dem Viktualienmarkt." },
    { name: "Schwabing & Maxvorstadt", desc: "SEO für Startups und kreative Unternehmen in Schwabing und Maxvorstadt." },
  ],
  hamburg: [
    { name: "HafenCity & Speicherstadt", desc: "SEO für Unternehmen in der HafenCity und historischen Speicherstadt." },
    { name: "Altona & St. Pauli", desc: "SEO für kreative und gastronomische Betriebe in Altona und St. Pauli." },
  ],
  frankfurt: [
    { name: "Bankenviertel & Innenstadt", desc: "SEO für Finanzdienstleister und Unternehmen im Bankenviertel und der Innenstadt." },
    { name: "Sachsenhausen", desc: "SEO für Gastronomie und Einzelhandel in Sachsenhausen." },
  ],
  cologne: [
    { name: "Dom & Altstadt", desc: "SEO für Tourismus und Gastgewerbe rund um den Kölner Dom und die Altstadt." },
    { name: "Ehrenfeld & Belgisches Viertel", desc: "SEO für kreative und gastronomische Betriebe in Ehrenfeld und dem Belgischen Viertel." },
  ],
  dusseldorf: [
    { name: "Königsallee & Altstadt", desc: "SEO für Luxusmarken und Einzelhandel an der Königsallee und in der Altstadt." },
    { name: "MedienHafen", desc: "SEO für Medien, Architektur und kreative Unternehmen im MedienHafen." },
  ],
  stuttgart: [
    { name: "Königstraße & City Centre", desc: "SEO für Einzelhandel und Dienstleistungen entlang der Königstraße und im Stadtzentrum." },
    { name: "Bad Cannstatt", desc: "SEO für Unternehmen in Bad Cannstatt und dem Mercedes-Benz Museum Areal." },
  ],
  dortmund: [
    { name: "City Centre & Westenhellweg", desc: "SEO für Einzelhandel entlang der Westenhellweg Einkaufsstraße." },
    { name: "Phoenix See", desc: "SEO für moderne Unternehmen am Phoenix See Entwicklungsgebiet." },
  ],
  leipzig: [
    { name: "City Centre & Augustusplatz", desc: "SEO für Unternehmen rund um den Augustusplatz und die Innenstadt Leipzig." },
    { name: "Plagwitz & Karl-Heine-Kanal", desc: "SEO für kreative und Startup-Unternehmen in Plagwitz." },
  ],
  hanover: [
    { name: "City Centre & Kröpcke", desc: "SEO für Unternehmen im Stadtzentrum rund um den Kröpcke Platz." },
    { name: "Expo Plaza & Messe", desc: "SEO für Messe- und Veranstaltungsunternehmen am Expo Plaza." },
  ],
  // Austria
  vienna: [
    { name: "Innere Stadt & Stephansplatz", desc: "SEO für Unternehmen in der Inneren Stadt und rund um den Stephansplatz." },
    { name: "Donau City & UNO City", desc: "SEO für internationale Organisationen und Unternehmen in der Donau City." },
  ],
  graz: [
    { name: "Altstadt & Herrengasse", desc: "SEO für Einzelhandel und Gastronomie in der Grazer Altstadt und entlang der Herrengasse." },
  ],
  salzburg: [
    { name: "Altstadt & Getreidegasse", desc: "SEO für Tourismus und Einzelhandel in der Salzburger Altstadt und der Getreidegasse." },
  ],
  // Switzerland
  zurich: [
    { name: "Bahnhofstrasse & City Centre", desc: "SEO für Finanz- und Luxusunternehmen an der Bahnhofstrasse und im Stadtzentrum." },
    { name: "Zürich West & Technopark", desc: "SEO für Startups und Tech-Unternehmen in Zürich West und am Technopark." },
  ],
  bern: [
    { name: "Altstadt & Bundeshaus", desc: "SEO für Unternehmen in der Berner Altstadt und rund um das Bundeshaus." },
  ],
  geneva: [
    { name: "Genève Centre & Jet d'Eau", desc: "SEO pour les entreprises du centre de Genève et du quartier des Nations." },
    { name: "CERN & Meyrin", desc: "SEO pour les entreprises technologiques et scientifiques à Meyrin et près du CERN." },
  ],
  lausanne: [
    { name: "Flon & Centre-Ville", desc: "SEO pour les entreprises du quartier du Flon et du centre-ville de Lausanne." },
    { name: "EPFL & Innovation Park", desc: "SEO pour les startups et entreprises tech à l'EPFL Innovation Park." },
  ],
  // France — remaining
  lyon: [
    { name: "Presqu'île & Part-Dieu", desc: "SEO pour les entreprises de la Presqu'île et du quartier d'affaires de la Part-Dieu." },
    { name: "Vieux Lyon & Confluence", desc: "SEO pour les commerces du Vieux Lyon et le quartier de la Confluence." },
  ],
  marseille: [
    { name: "Vieux-Port & La Canebière", desc: "SEO pour les entreprises autour du Vieux-Port et de La Canebière." },
    { name: "Euroméditerranée", desc: "SEO pour les entreprises du quartier d'affaires Euroméditerranée." },
  ],
  toulouse: [
    { name: "Capitole & Centre-Ville", desc: "SEO pour les entreprises autour de la Place du Capitole et du centre historique." },
    { name: "Aerospace Valley", desc: "SEO pour les entreprises aérospatiales et tech dans l'Aerospace Valley." },
  ],
  nice: [
    { name: "Promenade des Anglais & Centre", desc: "SEO pour le tourisme et l'hôtellerie sur la Promenade des Anglais et le centre de Nice." },
    { name: "Sophia Antipolis", desc: "SEO pour les entreprises technologiques de la technopole Sophia Antipolis." },
  ],
  nantes: [
    { name: "Île de Nantes & Centre", desc: "SEO pour les entreprises de l'Île de Nantes et du centre-ville." },
  ],
  strasbourg: [
    { name: "Grande Île & Petite France", desc: "SEO pour les commerces de la Grande Île et du quartier de la Petite France." },
    { name: "Quartier Européen", desc: "SEO pour les institutions et entreprises du Quartier Européen." },
  ],
  bordeaux: [
    { name: "Quais & Chartrons", desc: "SEO pour les entreprises des quais de la Garonne et du quartier des Chartrons." },
    { name: "Mériadeck & Centre", desc: "SEO pour les entreprises du centre d'affaires de Mériadeck." },
  ],
  lille: [
    { name: "Vieux-Lille & Grand Place", desc: "SEO pour les commerces du Vieux-Lille et autour de la Grand Place." },
    { name: "EuraTechnologies", desc: "SEO pour les startups et entreprises tech d'EuraTechnologies." },
  ],
  montpellier: [
    { name: "Place de la Comédie & Écusson", desc: "SEO pour les commerces de la Place de la Comédie et de l'Écusson." },
  ],
  // Belgium
  brussels: [
    { name: "Grand Place & City Centre", desc: "SEO pour les entreprises autour de la Grand Place et du centre-ville de Bruxelles." },
    { name: "European Quarter", desc: "SEO for EU institutions, lobbying firms, and international organizations in the European Quarter." },
  ],
  antwerp: [
    { name: "Meir & Groenplaats", desc: "SEO voor winkels en bedrijven op de Meir en rond de Groenplaats." },
    { name: "Diamond District & Centraal Station", desc: "SEO voor diamanthandelaren en bedrijven bij het Centraal Station." },
  ],
  // Netherlands — remaining
  rotterdam: [
    { name: "Kop van Zuid & Erasmusbrug", desc: "SEO voor bedrijven op de Kop van Zuid en rond de Erasmusbrug." },
    { name: "Rotterdam Centraal & Markthal", desc: "SEO voor horeca en winkels bij Rotterdam Centraal en de Markthal." },
  ],
  "the-hague": [
    { name: "Binnenhof & City Centre", desc: "SEO voor overheids- en juridische bedrijven rond het Binnenhof en het stadscentrum." },
    { name: "Scheveningen", desc: "SEO voor horeca en toerisme in Scheveningen." },
  ],
  utrecht: [
    { name: "Oudegracht & Centrum", desc: "SEO voor horeca en winkels langs de Oudegracht en in het centrum van Utrecht." },
    { name: "Utrecht Science Park", desc: "SEO voor tech- en wetenschapsbedrijven op het Utrecht Science Park." },
  ],
  eindhoven: [
    { name: "Strijp-S & Centrum", desc: "SEO voor creatieve en technologische bedrijven op Strijp-S en in het centrum." },
    { name: "High Tech Campus", desc: "SEO voor tech-bedrijven op de High Tech Campus Eindhoven." },
  ],
  groningen: [
    { name: "Grote Markt & Centrum", desc: "SEO voor horeca en winkels rond de Grote Markt en het centrum van Groningen." },
    { name: "Zernike Campus", desc: "SEO voor innovatieve en technologische bedrijven op het Zernike Campus." },
  ],
  // Italy
  milan: [
    { name: "Duomo & Centro Storico", desc: "SEO per aziende nel centro storico di Milano e zona Duomo." },
    { name: "Porta Nuova & CityLife", desc: "SEO per imprese nei quartieri innovativi di Porta Nuova e CityLife." },
  ],
  rome: [
    { name: "Centro Storico & Trastevere", desc: "SEO per attività nel centro storico di Roma e a Trastevere." },
    { name: "EUR & Tiburtina", desc: "SEO per imprese nei quartieri business EUR e Tiburtina." },
  ],
  turin: [
    { name: "Via Roma & Piazza Castello", desc: "SEO per aziende nel centro di Torino lungo Via Roma e Piazza Castello." },
  ],
  naples: [
    { name: "Centro Direzionale & Spaccanapoli", desc: "SEO per imprese nel Centro Direzionale e lungo Spaccanapoli." },
  ],
  florence: [
    { name: "Centro Storico & Santa Croce", desc: "SEO per attività turistiche e artigianali nel centro storico di Firenze." },
  ],
  bologna: [
    { name: "Piazza Maggiore & Due Torri", desc: "SEO per aziende nel centro di Bologna intorno a Piazza Maggiore." },
  ],
  palermo: [
    { name: "Quattro Canti & Via Maqueda", desc: "SEO per attività commerciali ai Quattro Canti e lungo Via Maqueda." },
  ],
  genoa: [
    { name: "Porto Antico & Centro Storico", desc: "SEO per imprese al Porto Antico e nel centro storico di Genova." },
  ],
  // Spain
  madrid: [
    { name: "Gran Vía & Sol", desc: "SEO para negocios en la Gran Vía y la Puerta del Sol." },
    { name: "Salamanca & Chamberí", desc: "SEO para empresas de lujo y servicios profesionales en Salamanca y Chamberí." },
  ],
  barcelona: [
    { name: "Passeig de Gràcia & Eixample", desc: "SEO para comercios y empresas en el Passeig de Gràcia y el Eixample." },
    { name: "22@ & Poblenou", desc: "SEO para startups y empresas tech en el distrito 22@ de Poblenou." },
  ],
  valencia: [
    { name: "Ciudad de las Artes y las Ciencias", desc: "SEO para turismo y negocios cerca de la Ciudad de las Artes y las Ciencias." },
    { name: "Centro Histórico & El Carmen", desc: "SEO para comercios en el centro histórico y el barrio del Carmen." },
  ],
  seville: [
    { name: "Centro & Triana", desc: "SEO para negocios en el centro histórico de Sevilla y el barrio de Triana." },
  ],
  bilbao: [
    { name: "Guggenheim & Abandoibarra", desc: "SEO para empresas de turismo y negocios cerca del Museo Guggenheim y Abandoibarra." },
  ],
  malaga: [
    { name: "Centro & Soho", desc: "SEO para negocios en el centro de Málaga y el distrito creativo Soho." },
    { name: "Málaga TechPark", desc: "SEO para empresas tecnológicas en el Parque Tecnológico de Andalucía." },
  ],
  zaragoza: [
    { name: "Plaza del Pilar & Centro", desc: "SEO para comercios y servicios en la Plaza del Pilar y el centro de Zaragoza." },
  ],
  alicante: [
    { name: "Explanada de España & Centro", desc: "SEO para negocios turísticos y comerciales en la Explanada y el centro de Alicante." },
  ],
  // Portugal
  lisbon: [
    { name: "Baixa & Chiado", desc: "SEO para empresas na Baixa, Chiado e Terreiro do Paço." },
    { name: "Parque das Nações", desc: "SEO para empresas de tecnologia e corporativas no Parque das Nações." },
  ],
  porto: [
    { name: "Ribeira & Centro Histórico", desc: "SEO para turismo e comércio na Ribeira e no centro histórico do Porto." },
    { name: "Boavista & Matosinhos", desc: "SEO para empresas modernas na Boavista e em Matosinhos." },
  ],
  braga: [
    { name: "Centro Histórico & Bom Jesus", desc: "SEO para empresas no centro histórico de Braga e junto ao Bom Jesus do Monte." },
  ],
  // Brazil
  "sao-paulo": [
    { name: "Avenida Paulista & Jardins", desc: "SEO para empresas na Avenida Paulista e nos Jardins." },
    { name: "Faria Lima & Vila Olímpia", desc: "SEO para startups e empresas de tecnologia na Faria Lima e Vila Olímpia." },
  ],
  "rio-de-janeiro": [
    { name: "Centro & Zona Sul", desc: "SEO para empresas no centro do Rio e na Zona Sul (Copacabana, Ipanema)." },
    { name: "Barra da Tijuca", desc: "SEO para empresas e comércio na Barra da Tijuca." },
  ],
  "belo-horizonte": [
    { name: "Savassi & Funcionários", desc: "SEO para empresas nos bairros Savassi e Funcionários." },
  ],
  brasilia: [
    { name: "Esplanada & Asa Sul", desc: "SEO para empresas na Esplanada dos Ministérios e Asa Sul." },
  ],
  curitiba: [
    { name: "Centro & Batel", desc: "SEO para empresas no centro de Curitiba e no bairro Batel." },
  ],
  fortaleza: [
    { name: "Beira Mar & Aldeota", desc: "SEO para empresas na Avenida Beira Mar e no bairro Aldeota." },
  ],
  // Scandinavia
  copenhagen: [
    { name: "Strøget & Nyhavn", desc: "SEO for businesses along Strøget shopping street and the Nyhavn waterfront." },
    { name: "Ørestad & Amager", desc: "SEO for modern businesses in the Ørestad development and Amager area." },
  ],
  aarhus: [
    { name: "Latinerkvarteret & City Centre", desc: "SEO for businesses in the Latin Quarter and Aarhus city centre." },
  ],
  stockholm: [
    { name: "Gamla Stan & Norrmalm", desc: "SEO for businesses in Gamla Stan (Old Town) and the Norrmalm commercial district." },
    { name: "Kista Science City", desc: "SEO for tech and IT companies in Kista Science City." },
  ],
  gothenburg: [
    { name: "Nordstan & Avenyn", desc: "SEO for retail and hospitality businesses along Avenyn and in the Nordstan area." },
  ],
  oslo: [
    { name: "Karl Johans gate & Sentrum", desc: "SEO for businesses along Karl Johans gate and Oslo city centre." },
    { name: "Bjørvika & Barcode", desc: "SEO for modern businesses in the Bjørvika waterfront and Barcode development." },
  ],
  helsinki: [
    { name: "Kamppi & Kluuvi", desc: "SEO for retail and corporate businesses in Kamppi and Kluuvi districts." },
    { name: "Otaniemi & Espoo", desc: "SEO for tech startups and companies at Aalto University campus in Otaniemi." },
  ],
  // Poland
  warsaw: [
    { name: "Śródmieście & Złote Tarasy", desc: "SEO for businesses in Warsaw's city centre and Złote Tarasy commercial area." },
    { name: "Mokotów & Wilanów", desc: "SEO for corporate and tech businesses in Mokotów business district." },
  ],
  krakow: [
    { name: "Rynek Główny & Stare Miasto", desc: "SEO for tourism and hospitality businesses around the Main Market Square." },
    { name: "Zabłocie & Kazimierz", desc: "SEO for creative and tech businesses in Zabłocie and the Kazimierz district." },
  ],
  wroclaw: [
    { name: "Rynek & Ostrów Tumski", desc: "SEO for businesses around Wrocław's Market Square and Cathedral Island." },
  ],
  // Czech Republic
  prague: [
    { name: "Staré Město & Nové Město", desc: "SEO for tourism, hospitality, and retail businesses in Prague's Old and New Town." },
    { name: "Karlín & Smíchov", desc: "SEO for tech startups and modern businesses in Karlín and Smíchov." },
  ],
  // Hungary
  budapest: [
    { name: "Belváros & Andrássy Avenue", desc: "SEO for businesses in Budapest's city centre and along Andrássy Avenue." },
    { name: "District XIII & Váci Corridor", desc: "SEO for corporate and tech businesses in the Váci Corridor office district." },
  ],
  // Romania
  bucharest: [
    { name: "Centru Vechi & Piața Universității", desc: "SEO for businesses in Bucharest's Old Centre and University Square area." },
    { name: "Pipera & Floreasca", desc: "SEO for corporate and tech businesses in the Pipera and Floreasca business districts." },
  ],
  cluj: [
    { name: "Centru & Piața Unirii", desc: "SEO for businesses in Cluj-Napoca's city centre and Union Square area." },
  ],
  // Greece
  athens: [
    { name: "Syntagma & Plaka", desc: "SEO for tourism and retail businesses near Syntagma Square and the Plaka neighbourhood." },
    { name: "Kifissia & Marousi", desc: "SEO for corporate businesses in the northern Athenian suburbs of Kifissia and Marousi." },
  ],
  // Turkey
  istanbul: [
    { name: "Levent & Maslak", desc: "SEO for corporate and financial businesses in the Levent-Maslak business corridor." },
    { name: "Sultanahmet & Beyoğlu", desc: "SEO for tourism, hospitality, and cultural businesses in Sultanahmet and Beyoğlu." },
    { name: "Kadıköy & Ataşehir", desc: "SEO for tech and startup businesses on the Asian side in Kadıköy and Ataşehir." },
  ],
  ankara: [
    { name: "Kızılay & Çankaya", desc: "SEO for businesses in the Kızılay commercial centre and Çankaya government district." },
  ],
  izmir: [
    { name: "Alsancak & Konak", desc: "SEO for retail, hospitality, and service businesses in Alsancak and Konak." },
  ],
  antalya: [
    { name: "Kaleiçi & Lara Beach", desc: "SEO for tourism and hospitality businesses in Kaleiçi Old Town and Lara Beach." },
  ],
  // Australia — remaining
  brisbane: [
    { name: "CBD & South Bank", desc: "SEO for businesses in Brisbane CBD and the South Bank cultural precinct." },
    { name: "Fortitude Valley", desc: "Helping creative, entertainment, and tech businesses in Fortitude Valley." },
  ],
  perth: [
    { name: "CBD & Elizabeth Quay", desc: "SEO for businesses in Perth CBD and the Elizabeth Quay waterfront development." },
    { name: "Northbridge & Leederville", desc: "Helping hospitality and creative businesses in Northbridge and Leederville." },
  ],
  adelaide: [
    { name: "CBD & Rundle Mall", desc: "SEO for retail and service businesses in Adelaide CBD and along Rundle Mall." },
    { name: "Lot Fourteen & Tonsley", desc: "Helping tech and innovation businesses at Lot Fourteen and Tonsley Innovation District." },
  ],
  "gold-coast": [
    { name: "Surfers Paradise & Broadbeach", desc: "SEO for tourism and hospitality businesses in Surfers Paradise and Broadbeach." },
    { name: "Robina & Varsity Lakes", desc: "Helping professional services and retail businesses in Robina and Varsity Lakes." },
  ],
  // New Zealand
  auckland: [
    { name: "CBD & Britomart", desc: "SEO for corporate and hospitality businesses in Auckland CBD and Britomart precinct." },
    { name: "Ponsonby & Parnell", desc: "Helping boutique and lifestyle businesses in Ponsonby and Parnell." },
  ],
  wellington: [
    { name: "CBD & Lambton Quay", desc: "SEO for government services and corporate businesses on Lambton Quay and in the CBD." },
    { name: "Cuba Street", desc: "Helping creative and independent businesses on Wellington's Cuba Street." },
  ],
  christchurch: [
    { name: "CBD & Cathedral Square", desc: "SEO for businesses in the rebuilt Christchurch CBD and Cathedral Square area." },
  ],
  // Southeast Asia
  singapore: [
    { name: "Marina Bay & CBD", desc: "SEO for financial and corporate businesses in Marina Bay and the Central Business District." },
    { name: "One-North & Ayer Rajah", desc: "Helping tech startups and biotech companies in the one-north business park." },
    { name: "Orchard Road", desc: "SEO for luxury retail and hospitality businesses along Orchard Road." },
  ],
  "kuala-lumpur": [
    { name: "KLCC & Bukit Bintang", desc: "SEO for businesses near the Petronas Towers, KLCC, and the Bukit Bintang shopping district." },
    { name: "Bangsar & Mont Kiara", desc: "Helping expat-focused and lifestyle businesses in Bangsar and Mont Kiara." },
  ],
  penang: [
    { name: "George Town Heritage Zone", desc: "SEO for tourism and hospitality businesses in George Town's UNESCO Heritage Zone." },
    { name: "Bayan Lepas FTZ", desc: "Helping electronics and manufacturing businesses in the Bayan Lepas Free Trade Zone." },
  ],
  "johor-bahru": [
    { name: "JB City Centre & CIQ", desc: "SEO for businesses in Johor Bahru city centre and near the Customs, Immigration and Quarantine complex." },
    { name: "Iskandar Puteri", desc: "Helping businesses in the Iskandar Malaysia special economic zone." },
  ],
  bangkok: [
    { name: "Sukhumvit & Silom", desc: "SEO for hospitality and corporate businesses along Sukhumvit Road and Silom." },
    { name: "Siam & Ratchaprasong", desc: "Helping retail and luxury businesses in the Siam and Ratchaprasong shopping area." },
  ],
  "chiang-mai": [
    { name: "Old City & Nimmanhaemin", desc: "SEO for tourism, hospitality, and digital nomad businesses in the Old City and Nimman area." },
  ],
  manila: [
    { name: "Makati CBD & BGC", desc: "SEO for corporate and financial businesses in Makati CBD and Bonifacio Global City." },
    { name: "Ortigas Center", desc: "Helping corporate and BPO businesses in Ortigas Center." },
  ],
  cebu: [
    { name: "Cebu IT Park & Lahug", desc: "SEO for BPO and tech businesses in Cebu IT Park and Lahug area." },
    { name: "Mactan & Mandaue", desc: "Helping export and manufacturing businesses in Mactan Economic Zone and Mandaue." },
  ],
  // Japan — remaining
  osaka: [
    { name: "Umeda & Kita", desc: "大阪梅田・北区エリアのビジネス向けSEOサービス。" },
    { name: "Namba & Shinsaibashi", desc: "難波・心斎橋の商業施設・飲食店向けSEO対策。" },
  ],
  // Korea — remaining
  busan: [
    { name: "Haeundae & Centum City", desc: "해운대 센텀시티 지역 비즈니스를 위한 SEO 서비스." },
    { name: "Nampo-dong & Gwangalli", desc: "남포동 및 광안리 상업지구 비즈니스를 위한 검색 최적화." },
  ],
  // South Africa
  johannesburg: [
    { name: "Sandton & Rosebank", desc: "SEO for corporate, financial, and retail businesses in Sandton CBD and Rosebank." },
    { name: "Braamfontein & Maboneng", desc: "Helping creative and startup businesses in Braamfontein and the Maboneng Precinct." },
  ],
  "cape-town": [
    { name: "V&A Waterfront & CBD", desc: "SEO for tourism, hospitality, and corporate businesses at the V&A Waterfront and in the CBD." },
    { name: "Woodstock & Observatory", desc: "Helping creative and tech businesses in Cape Town's Woodstock and Observatory." },
  ],
  durban: [
    { name: "Golden Mile & Beachfront", desc: "SEO for hospitality and tourism businesses along Durban's Golden Mile beachfront." },
    { name: "Umhlanga Ridge", desc: "Helping corporate and professional businesses in Umhlanga Ridge Town Centre." },
  ],
  // Nigeria
  lagos: [
    { name: "Victoria Island & Lekki", desc: "SEO for corporate, tech, and hospitality businesses on Victoria Island and in Lekki." },
    { name: "Yaba & Surulere", desc: "Helping tech startups in Yaba (Yabacon Valley) and local businesses in Surulere." },
  ],
  abuja: [
    { name: "Central Area & Wuse", desc: "SEO for government services and corporate businesses in Abuja's Central Area and Wuse district." },
    { name: "Garki & Maitama", desc: "Helping professional and diplomatic businesses in Garki and Maitama." },
  ],
  // Kenya
  nairobi: [
    { name: "CBD & Upper Hill", desc: "SEO for corporate and financial businesses in Nairobi CBD and Upper Hill." },
    { name: "Westlands & iHub", desc: "Helping tech startups and creative businesses in Westlands and near iHub." },
  ],
  // Mexico
  "mexico-city": [
    { name: "Polanco & Reforma", desc: "SEO para empresas de lujo y corporativas en Polanco y Paseo de la Reforma." },
    { name: "Roma & Condesa", desc: "SEO para negocios creativos y gastronómicos en la Roma y la Condesa." },
  ],
  guadalajara: [
    { name: "Centro Histórico & Chapultepec", desc: "SEO para negocios en el centro histórico y la zona de Chapultepec." },
  ],
  monterrey: [
    { name: "San Pedro & Valle Oriente", desc: "SEO para empresas corporativas y de lujo en San Pedro Garza García y Valle Oriente." },
  ],
  // Colombia
  bogota: [
    { name: "Zona T & Usaquén", desc: "SEO para empresas de entretenimiento y gastronómicas en la Zona T y Usaquén." },
    { name: "Chapinero & Calle 72", desc: "SEO para empresas tech y startups en Chapinero." },
  ],
  medellin: [
    { name: "El Poblado & Laureles", desc: "SEO para negocios de turismo y gastronomía en El Poblado y Laureles." },
    { name: "Ruta N & Centro", desc: "SEO para empresas tech e innovación en Ruta N y el centro de Medellín." },
  ],
  // Argentina
  "buenos-aires": [
    { name: "Puerto Madero & Microcentro", desc: "SEO para empresas corporativas en Puerto Madero y el Microcentro." },
    { name: "Palermo & Recoleta", desc: "SEO para negocios de gastronomía y moda en Palermo y Recoleta." },
  ],
  "cordoba-argentina": [
    { name: "Centro & Nueva Córdoba", desc: "SEO para negocios en el centro de Córdoba y Nueva Córdoba." },
  ],
  // Chile
  santiago: [
    { name: "Las Condes & Providencia", desc: "SEO para empresas corporativas y de servicios en Las Condes y Providencia." },
    { name: "Santiago Centro & Barrio Italia", desc: "SEO para negocios en el centro de Santiago y el Barrio Italia." },
  ],
  // Peru
  lima: [
    { name: "Miraflores & San Isidro", desc: "SEO para empresas en Miraflores y el distrito financiero de San Isidro." },
    { name: "Barranco", desc: "SEO para negocios creativos y turísticos en el bohemio barrio de Barranco." },
  ],
  // Israel
  "tel-aviv": [
    { name: "Rothschild Boulevard & White City", desc: "SEO for startups and tech companies along Rothschild Boulevard in the White City." },
    { name: "Herzliya Pituach", desc: "Helping high-tech businesses in the Herzliya Pituach tech hub." },
  ],
  // Ireland
  dublin: [
    { name: "Silicon Docks & Grand Canal", desc: "SEO for tech companies in the Silicon Docks and Grand Canal innovation district." },
    { name: "Grafton Street & Temple Bar", desc: "Helping retail, hospitality, and tourism businesses on Grafton Street and in Temple Bar." },
  ],
  cork: [
    { name: "Patrick Street & City Centre", desc: "SEO for retail and hospitality businesses on Patrick Street and in Cork city centre." },
    { name: "Mahon & Little Island", desc: "Helping pharma and tech businesses in Mahon and Little Island business parks." },
  ],
};
