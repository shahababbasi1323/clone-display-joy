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
});

// Generic template for other languages - uses the language code to select appropriate content
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
  }),
};

// For languages without dedicated templates, fall back to English content structure
export function getLocationContent(lang: string, city: string, country: string): LocationContent {
  const generator = contentMap[lang] || genericContent;
  return generator(city, country);
}
