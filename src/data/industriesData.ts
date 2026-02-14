import {
  Heart, Scale, Home, Building2, UtensilsCrossed, Code, GraduationCap,
  ShoppingBag, Car, Sparkles, Camera, Plane, type LucideIcon
} from "lucide-react";

export interface IndustryFaq {
  q: string;
  a: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  category: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  challenges: { title: string; desc: string }[];
  approach: { title: string; desc: string }[];
  keywords: string[];
  caseStudy: { metric: string; label: string }[];
  faqs: IndustryFaq[];
  relatedServices: string[];
  relatedLocations: string[];
}

// Helper to generate consistent data
const ind = (
  slug: string, title: string, shortTitle: string, metaTitle: string, metaDescription: string,
  icon: LucideIcon, category: string, heroHighlight: string, heroDescription: string,
  challenges: { title: string; desc: string }[],
  approach: { title: string; desc: string }[],
  keywords: string[],
  caseStudy: { metric: string; label: string }[],
  faqs: IndustryFaq[],
  relatedServices: string[],
  relatedLocations: string[]
): IndustryData => ({
  slug, title, shortTitle, metaTitle, metaDescription, icon, category,
  heroTitle: `SEO Services for`, heroHighlight, heroDescription,
  challenges, approach, keywords, caseStudy, faqs, relatedServices, relatedLocations,
});

// Default case study metrics
const defaultCase = [
  { metric: "350%", label: "Organic Traffic Growth" },
  { metric: "180+", label: "Keywords Ranked Page 1" },
  { metric: "65%", label: "Increase in Leads" },
  { metric: "4.8x", label: "Return on Investment" },
];

// Default related locations
const defaultLocs = ["islamabad", "dubai", "london", "new-york"];

export const industriesData: IndustryData[] = [
  // ============================================================
  // HEALTHCARE & MEDICAL
  // ============================================================
  ind("healthcare-seo", "Healthcare SEO", "Healthcare", "SEO for Healthcare - Medical Practice Marketing Services", "Specialized SEO services for healthcare providers. HIPAA-compliant digital marketing, medical content optimization, and patient acquisition strategies.", Heart, "Healthcare & Medical", "Healthcare", "Attract more patients with HIPAA-compliant SEO strategies designed specifically for healthcare providers. We help medical practices rank higher and grow their patient base.",
    [
      { title: "HIPAA Compliance", desc: "Healthcare SEO must follow strict HIPAA regulations. Content, forms, and tracking need careful handling to protect patient information while maximizing visibility." },
      { title: "E-E-A-T Requirements", desc: "Google applies stricter quality standards to health content (YMYL). Your medical content needs demonstrated expertise, authoritativeness, and trustworthiness." },
      { title: "Competitive Local Market", desc: "Healthcare is intensely competitive locally. Multiple practices compete for the same patient searches, making local SEO and reviews critical." },
      { title: "Complex Services", desc: "Medical services are complex to explain to search engines and patients. Structured data and clear content architecture are essential." },
    ],
    [
      { title: "Medical Content Strategy", desc: "We create authoritative, doctor-reviewed content that builds trust with both patients and search engines while meeting E-E-A-T standards." },
      { title: "Local Patient Acquisition", desc: "Optimize Google Business Profile, build medical citations, and generate patient reviews to dominate local search results." },
      { title: "Technical Medical SEO", desc: "Implement medical schema markup, optimize site speed, and ensure HIPAA-compliant tracking and analytics setup." },
      { title: "Reputation Management", desc: "Monitor and respond to patient reviews, build online reputation, and manage your practice's digital presence across platforms." },
    ],
    ["doctor near me", "best hospital in [city]", "medical clinic", "family doctor", "specialist appointment", "healthcare provider", "urgent care near me", "pediatrician", "orthopedic surgeon"],
    defaultCase,
    [
      { q: "Is healthcare SEO different from regular SEO?", a: "Yes. Healthcare SEO requires HIPAA compliance, E-E-A-T optimization for YMYL content, medical schema markup, and strategies that balance patient privacy with marketing effectiveness. We specialize in navigating these unique requirements." },
      { q: "How do you handle HIPAA compliance in SEO?", a: "We ensure all tracking, forms, and analytics comply with HIPAA regulations. We use HIPAA-compliant tools, avoid collecting PHI through marketing channels, and implement proper consent mechanisms." },
      { q: "How long does it take for a medical practice to see SEO results?", a: "Most medical practices see initial ranking improvements within 2-3 months, with significant patient acquisition increases in 4-6 months. Healthcare SEO compounds over time." },
      { q: "Can you help with Google Business Profile for my practice?", a: "Absolutely. GBP optimization is critical for medical practices. We optimize your profile, manage reviews, post regular updates, and ensure accurate NAP information across all directories." },
      { q: "Do you write medical content for our blog?", a: "Yes, we create medical content that's reviewed for accuracy. Our content follows Google's E-E-A-T guidelines and is optimized for patient-focused keywords that drive appointments." },
    ],
    ["local-seo", "google-business-profile", "content-strategy"],
    defaultLocs
  ),

  ind("dental-seo", "Dental SEO", "Dentists", "SEO for Dentists - Dental Practice Marketing & Lead Gen", "Specialized SEO for dental practices. Rank higher for dental services, attract new patients, and grow your dental practice with targeted digital marketing.", Heart, "Healthcare & Medical", "Dentists", "Get more dental patients with SEO strategies built specifically for dental practices. From teeth cleaning to cosmetic dentistry, we help you rank for the services that matter.",
    [
      { title: "High Local Competition", desc: "Dental practices face intense competition for 'dentist near me' searches. Standing out requires a strong local SEO strategy and exceptional online reputation." },
      { title: "Service-Specific Rankings", desc: "Patients search for specific services like implants, Invisalign, or emergency dental care. Each service needs its own optimized page." },
      { title: "Review Dependency", desc: "Dental patients heavily rely on reviews when choosing a dentist. Managing and growing your review profile is essential for conversions." },
      { title: "Insurance & Pricing Concerns", desc: "Patients search for dentists who accept their insurance. Creating content around insurance and pricing questions captures high-intent traffic." },
    ],
    [
      { title: "Service Page Optimization", desc: "Create and optimize dedicated pages for each dental service — implants, veneers, Invisalign, emergency dental, pediatric dentistry." },
      { title: "Local Map Pack Dominance", desc: "Optimize GBP, build dental citations, and implement review generation to appear in the top 3 map results." },
      { title: "Patient-Focused Content", desc: "Blog posts answering common dental questions, treatment explainers, and before/after case studies that build trust." },
      { title: "Dental Schema Markup", desc: "Implement dental practice schema, FAQ schema, and review schema for enhanced search result appearances." },
    ],
    ["dentist near me", "best dentist in [city]", "emergency dentist", "dental implants", "teeth whitening", "Invisalign provider", "cosmetic dentist", "pediatric dentist", "dental cleaning"],
    [{ metric: "400%", label: "New Patient Inquiries" }, { metric: "150+", label: "Keywords Ranked" }, { metric: "#1", label: "Map Pack Position" }, { metric: "45%", label: "Revenue Growth" }],
    [
      { q: "How can SEO help my dental practice get more patients?", a: "SEO puts your practice in front of patients actively searching for dental services. By ranking for 'dentist near me' and specific service terms, you attract patients ready to book appointments." },
      { q: "Should I create separate pages for each dental service?", a: "Yes! Each dental service should have its own dedicated page optimized for relevant keywords. This helps you rank for specific searches like 'dental implants in [city]' or 'Invisalign near me'." },
      { q: "How important are reviews for dental SEO?", a: "Reviews are one of the top 3 ranking factors for local dental searches. They also significantly impact conversion rates. We implement review generation systems to consistently grow your review profile." },
      { q: "Can you help with dental practice websites?", a: "While our focus is SEO, we optimize your existing website's content, structure, and technical elements. If your site needs redesign, we can recommend partners." },
      { q: "What's the ROI of dental SEO?", a: "A single new patient is worth $500-$1,000+ in lifetime value. Most dental practices see 3-5x ROI from SEO within the first year, with returns growing as organic traffic compounds." },
    ],
    ["local-seo", "google-business-profile", "on-page-seo"],
    defaultLocs
  ),

  ind("hospital-seo", "Hospital SEO", "Hospitals", "SEO for Hospitals - Healthcare System Online Visibility", "SEO services for hospitals and healthcare systems. Improve online visibility, attract patients, and establish digital authority for your hospital.", Heart, "Healthcare & Medical", "Hospitals", "Increase patient volume and establish your hospital as the trusted healthcare authority in your region with comprehensive SEO strategies.",
    [
      { title: "Multi-Department Optimization", desc: "Hospitals offer dozens of departments and services. Each needs targeted SEO to capture patients searching for specific medical needs." },
      { title: "Physician Profiles", desc: "Patients search for specific doctors. Optimizing physician profile pages is essential for attracting patients and building trust." },
      { title: "Emergency & Urgent Searches", desc: "Hospital searches often have urgency. Your SEO must capture 'ER near me', 'hospital emergency room', and similar high-intent queries." },
      { title: "Multi-Location Management", desc: "Hospital systems with multiple locations need coordinated SEO strategies that avoid cannialization while maximizing local visibility." },
    ],
    [
      { title: "Department & Service SEO", desc: "Optimize pages for each department, medical service, and specialty to capture targeted patient searches." },
      { title: "Physician Profile Optimization", desc: "Create and optimize individual physician profiles with schema markup for improved visibility in doctor searches." },
      { title: "Multi-Location Strategy", desc: "Coordinate SEO across multiple hospital locations with unique content and localized targeting for each facility." },
      { title: "Medical Authority Content", desc: "Build medical content hubs establishing your hospital as the definitive health resource in your region." },
    ],
    ["hospital near me", "emergency room", "best hospital for [condition]", "cardiology department", "orthopedic hospital", "maternity ward", "cancer treatment center", "pediatric hospital"],
    defaultCase,
    [
      { q: "How does hospital SEO differ from small practice SEO?", a: "Hospital SEO is more complex with multiple departments, locations, and physician profiles to optimize. It requires enterprise-level strategy, coordinated content, and careful internal linking architecture." },
      { q: "Can SEO help our hospital compete with larger systems?", a: "Absolutely. SEO levels the playing field. Smaller hospitals can outrank larger systems for specific services and locations by creating better-optimized, more relevant content." },
      { q: "How do you optimize physician profile pages?", a: "We optimize each physician's page with proper schema markup, relevant keywords, patient reviews, conditions treated, and insurance accepted. This helps patients find the right doctor." },
      { q: "Should each hospital location have its own SEO strategy?", a: "Yes. Each location needs unique content, its own Google Business Profile, location-specific keywords, and targeted local link building while maintaining brand consistency." },
      { q: "How do you measure hospital SEO success?", a: "We track patient appointment requests, phone calls, organic traffic by department, keyword rankings, and Google Business Profile metrics. We also measure cross-departmental patient flow." },
    ],
    ["technical-seo", "local-seo", "content-strategy"],
    defaultLocs
  ),

  ind("pharmacy-seo", "Pharmacy SEO", "Pharmacies", "SEO for Pharmacies - Online Pharmacy Marketing", "SEO services for pharmacies and drugstores. Increase foot traffic, online orders, and brand visibility for your pharmacy business.", Heart, "Healthcare & Medical", "Pharmacies", "Drive more customers to your pharmacy with SEO strategies that increase local visibility and online prescription and product sales.",
    [
      { title: "Regulatory Compliance", desc: "Pharmacy marketing must comply with pharmaceutical advertising regulations. SEO content needs careful handling of drug and treatment claims." },
      { title: "Local Competition", desc: "Chain pharmacies dominate online visibility. Independent pharmacies need smart local SEO to compete for neighborhood customers." },
      { title: "Online vs In-Store", desc: "Balancing online pharmacy services with local foot traffic requires a dual SEO strategy targeting both local and e-commerce keywords." },
      { title: "Trust & Authority", desc: "Healthcare trust signals are critical. Pharmacies need to establish expertise and reliability through content and reviews." },
    ],
    [
      { title: "Local Pharmacy SEO", desc: "Optimize for 'pharmacy near me' searches with GBP optimization, local citations, and review management." },
      { title: "Product Page Optimization", desc: "For online pharmacies, optimize product pages for OTC medications, health products, and prescription services." },
      { title: "Health Content Marketing", desc: "Create informative health content that drives traffic and establishes your pharmacy as a trusted health resource." },
      { title: "Service Highlight Pages", desc: "Optimize pages for vaccination services, health screenings, medication management, and other pharmacy services." },
    ],
    ["pharmacy near me", "24 hour pharmacy", "prescription delivery", "online pharmacy", "drugstore", "medication refill", "health supplements", "COVID vaccine pharmacy"],
    defaultCase,
    [
      { q: "Can SEO help my independent pharmacy compete with chains?", a: "Yes! Local SEO is your biggest advantage. We optimize your presence for neighborhood searches, build community relationships through content, and leverage your personalized service as a differentiator." },
      { q: "Is it legal to do SEO for pharmacy products?", a: "Yes, but with important restrictions. We ensure all content complies with pharmaceutical advertising regulations, avoiding unsubstantiated health claims while maximizing visibility for allowed terms." },
      { q: "How important is Google Business Profile for pharmacies?", a: "Extremely important. Most pharmacy searches are local. A fully optimized GBP with accurate hours, services, and reviews is essential for capturing nearby customers." },
      { q: "Can you help with online pharmacy SEO?", a: "Yes, we optimize online pharmacy websites for product searches, prescription services, and health content. We ensure compliance with all regulations while maximizing organic visibility." },
      { q: "What results can I expect from pharmacy SEO?", a: "Most pharmacies see 30-50% increases in foot traffic and online orders within 6 months. Local map pack visibility typically improves within 2-3 months." },
    ],
    ["local-seo", "ecommerce-seo", "google-business-profile"],
    defaultLocs
  ),

  ind("mental-health-seo", "Mental Health SEO", "Therapists", "SEO for Therapists & Counselors - Mental Health Marketing", "SEO services for therapists, counselors, and mental health professionals. Reach more clients seeking mental health support with compassionate digital marketing.", Heart, "Healthcare & Medical", "Therapists & Counselors", "Connect with clients who need your help. Our SEO strategies for mental health professionals are built with sensitivity and compliance in mind.",
    [
      { title: "Sensitive Content", desc: "Mental health content requires extreme sensitivity. Marketing must be compassionate, avoid triggering language, and maintain professional boundaries." },
      { title: "Privacy Concerns", desc: "Mental health clients value privacy highly. Marketing strategies must respect this while still building trust and visibility." },
      { title: "Diverse Specializations", desc: "Therapists specialize in different areas — anxiety, depression, couples therapy, PTSD. Each specialty needs targeted SEO content." },
      { title: "Telehealth Competition", desc: "Online therapy platforms have intensified competition. Private practitioners need strong SEO to compete with well-funded platforms." },
    ],
    [
      { title: "Compassionate Content", desc: "Create supportive, informative content about mental health topics that demonstrates expertise while being sensitive to readers." },
      { title: "Specialty Page Optimization", desc: "Build optimized pages for each specialization — anxiety therapy, couples counseling, PTSD treatment, child psychology." },
      { title: "Telehealth & Local SEO", desc: "Optimize for both in-person and telehealth searches to maximize your client reach across geographic boundaries." },
      { title: "Directory & Profile Optimization", desc: "Optimize Psychology Today, GoodTherapy, and other therapist directory profiles that drive significant referral traffic." },
    ],
    ["therapist near me", "anxiety counseling", "marriage counselor", "PTSD therapist", "depression treatment", "child psychologist", "online therapy", "couples therapy", "grief counseling"],
    defaultCase,
    [
      { q: "How can SEO help my therapy practice?", a: "SEO helps people find your practice when they're searching for help. By ranking for terms like 'anxiety therapist near me', you connect with clients at the moment they're seeking support." },
      { q: "How do you handle sensitive mental health content?", a: "We create content with extreme care, using compassionate language, avoiding triggering material, including appropriate resources, and following mental health content best practices." },
      { q: "Should I optimize for telehealth keywords?", a: "Yes! Telehealth demand has grown significantly. Optimizing for 'online therapy' and 'virtual counseling' expands your reach beyond your local area." },
      { q: "How important are therapist directories for SEO?", a: "Very important. Psychology Today and similar directories rank highly for therapist searches. Optimizing your directory profiles drives significant client inquiries and supports your overall SEO." },
      { q: "What privacy considerations exist in mental health SEO?", a: "We never use patient information in marketing, avoid testimonials that could identify clients, use privacy-compliant tracking, and ensure all forms are secure and confidential." },
    ],
    ["local-seo", "content-strategy", "on-page-seo"],
    defaultLocs
  ),

  ind("veterinary-seo", "Veterinary SEO", "Veterinarians", "SEO for Veterinarians - Vet Clinic Marketing", "SEO for veterinary clinics and animal hospitals. Attract pet owners, increase appointments, and grow your veterinary practice.", Heart, "Healthcare & Medical", "Veterinarians", "Help pet owners find your veterinary practice. Our SEO strategies drive more appointments and build trust with local pet owners.",
    [{ title: "Local Competition", desc: "Vet clinics compete intensely for local searches. Standing out requires strong local SEO and excellent reviews." }, { title: "Emergency Searches", desc: "Emergency vet searches are critical. Your practice needs to rank for urgent queries to capture time-sensitive appointments." }, { title: "Service Diversity", desc: "Vet practices offer varied services from routine checkups to surgery. Each needs optimization." }, { title: "Pet Owner Trust", desc: "Pet owners research extensively before choosing a vet. Reviews and content build the trust needed for conversion." }],
    [{ title: "Local Vet SEO", desc: "Dominate local searches for veterinary services with GBP optimization and local citations." }, { title: "Emergency Visibility", desc: "Ensure your practice appears for emergency vet searches with 24/7 availability content." }, { title: "Service Optimization", desc: "Optimize pages for each service — vaccinations, spay/neuter, dental, surgery, boarding." }, { title: "Review Management", desc: "Build and manage pet owner reviews to increase trust and local rankings." }],
    ["vet near me", "emergency vet", "animal hospital", "pet vaccination", "dog grooming", "cat clinic", "veterinary surgery", "pet dental care"],
    defaultCase,
    [{ q: "How can SEO help my veterinary clinic?", a: "SEO helps pet owners in your area find your clinic when searching for vet services. By ranking for 'vet near me' and specific services, you attract more pet owners ready to book." }, { q: "How important are reviews for vet clinics?", a: "Extremely important. Pet owners trust reviews heavily when choosing a vet. We implement review generation systems to build your online reputation." }, { q: "Should I have separate pages for each vet service?", a: "Yes! Dedicated pages for vaccinations, surgery, dental care, etc. help you rank for specific service searches and provide better information to pet owners." }, { q: "Can you help with emergency vet visibility?", a: "Absolutely. We optimize for emergency vet keywords and ensure your practice appears in urgent searches with accurate hours and emergency contact information." }, { q: "What's the typical ROI for veterinary SEO?", a: "Most vet clinics see 3-5x ROI within the first year. A single new client generates $500+ in annual revenue, making SEO a highly profitable investment." }],
    ["local-seo", "google-business-profile", "on-page-seo"],
    defaultLocs
  ),

  ind("chiropractic-seo", "Chiropractic SEO", "Chiropractors", "SEO for Chiropractors - Chiropractic Marketing", "SEO services for chiropractors. Attract new patients, build authority, and grow your chiropractic practice with targeted digital marketing.", Heart, "Healthcare & Medical", "Chiropractors", "Grow your chiropractic practice with SEO strategies that attract patients searching for pain relief and wellness care.",
    [{ title: "Credibility Challenges", desc: "Chiropractic care sometimes faces skepticism. Your online presence must demonstrate expertise and evidence-based practice." }, { title: "Insurance Questions", desc: "Patients frequently search for chiropractors who accept their insurance, requiring content around coverage and pricing." }, { title: "Local Competition", desc: "Multiple chiropractors in the same area create intense competition for local searches." }, { title: "Patient Education", desc: "Many patients don't fully understand chiropractic benefits. Educational content drives awareness and appointments." }],
    [{ title: "Condition-Based Content", desc: "Create optimized content for conditions you treat — back pain, sciatica, headaches, sports injuries." }, { title: "Local Authority Building", desc: "Establish your practice as the go-to chiropractor in your area through local SEO and community content." }, { title: "Patient Education Hub", desc: "Build a content hub explaining chiropractic care, benefits, what to expect, and treatment approaches." }, { title: "Review Generation", desc: "Implement systems to capture patient reviews that highlight pain relief results and experiences." }],
    ["chiropractor near me", "back pain treatment", "sciatica relief", "chiropractic adjustment", "neck pain chiropractor", "sports chiropractor", "prenatal chiropractor"],
    defaultCase,
    [{ q: "How does SEO help chiropractors get more patients?", a: "SEO puts your practice in front of people actively searching for pain relief. By ranking for condition-specific and location-specific keywords, you attract patients ready to book." }, { q: "What keywords should chiropractors target?", a: "Focus on condition-based keywords (back pain, sciatica), treatment keywords (chiropractic adjustment), and local keywords (chiropractor near me, chiropractor in [city])." }, { q: "How important is content marketing for chiropractors?", a: "Very important. Educational content about conditions, treatments, and wellness builds trust and drives organic traffic from patients researching their options." }, { q: "Can SEO help me compete with physical therapy clinics?", a: "Yes! Proper keyword targeting and content strategy helps differentiate chiropractic services from physical therapy, attracting patients specifically seeking chiropractic care." }, { q: "What results can I expect?", a: "Most chiropractic practices see 40-60% increases in new patient inquiries within 4-6 months. ROI typically reaches 4-5x within the first year." }],
    ["local-seo", "content-strategy", "google-business-profile"],
    defaultLocs
  ),

  ind("dermatology-seo", "Dermatology SEO", "Dermatologists", "SEO for Dermatologists - Skincare Clinic Marketing", "SEO for dermatology practices and skincare clinics. Attract patients for medical and cosmetic dermatology services.", Heart, "Healthcare & Medical", "Dermatologists", "Grow your dermatology practice with SEO strategies that capture patients searching for skin care, treatments, and cosmetic procedures.",
    [{ title: "Medical vs Cosmetic", desc: "Dermatology spans medical and cosmetic services. SEO must capture both insurance-covered treatments and elective procedures." }, { title: "Visual Content Needs", desc: "Before/after photos are crucial but must be optimized for search and handled with patient consent." }, { title: "Condition Research", desc: "Patients extensively research skin conditions before seeking treatment. Capturing this informational traffic is key." }, { title: "High-Value Procedures", desc: "Cosmetic procedures like Botox and laser treatments are high-value. Ranking for these terms directly impacts revenue." }],
    [{ title: "Service-Based SEO", desc: "Optimize for both medical (acne, eczema, skin cancer) and cosmetic (Botox, laser, chemical peel) services." }, { title: "Before/After Gallery SEO", desc: "Optimize visual content and galleries for image search and enhanced result appearances." }, { title: "Condition Content Hub", desc: "Build comprehensive guides on skin conditions that capture patients in the research phase." }, { title: "Cosmetic Procedure Marketing", desc: "Target high-value cosmetic procedure keywords with dedicated landing pages and compelling content." }],
    ["dermatologist near me", "acne treatment", "Botox provider", "laser skin treatment", "mole removal", "skin cancer screening", "chemical peel", "eczema treatment"],
    defaultCase,
    [{ q: "How can dermatology SEO attract more patients?", a: "By ranking for condition-specific searches (acne, eczema) and procedure searches (Botox, laser), you attract patients at every stage of their journey." }, { q: "Should I separate medical and cosmetic dermatology content?", a: "Yes. Medical and cosmetic dermatology attract different patients with different intents. Separate service pages and content strategies work best." }, { q: "How do before/after photos help with SEO?", a: "Optimized before/after galleries appear in image searches and significantly improve conversion rates on service pages. Always obtain patient consent." }, { q: "What's the most valuable keyword for dermatologists?", a: "Keywords like 'Botox near me' and 'laser skin treatment' have high commercial intent and direct revenue impact. We also target condition-based keywords for broader reach." }, { q: "How long until my dermatology practice sees SEO results?", a: "Most practices see ranking improvements within 2-3 months. High-value cosmetic keywords may take 4-6 months depending on competition." }],
    ["local-seo", "on-page-seo", "content-strategy"],
    defaultLocs
  ),

  ind("plastic-surgery-seo", "Plastic Surgery SEO", "Plastic Surgeons", "SEO for Plastic Surgeons - Cosmetic Surgery Marketing", "SEO services for plastic surgeons and cosmetic surgery practices. Attract qualified patients for elective procedures with premium digital marketing.", Heart, "Healthcare & Medical", "Plastic Surgeons", "Attract high-value cosmetic surgery patients with SEO strategies designed for the competitive plastic surgery market.",
    [{ title: "High Competition", desc: "Plastic surgery is one of the most competitive medical SEO niches with high CPC and established competitors." }, { title: "Trust & Credentials", desc: "Patients research extensively before choosing a surgeon. Demonstrating credentials and results is critical." }, { title: "High-Value Keywords", desc: "Plastic surgery keywords have high commercial value. Ranking for these terms directly drives significant revenue." }, { title: "Visual Portfolio", desc: "Before/after galleries are expected but must be carefully managed for compliance and SEO." }],
    [{ title: "Procedure Page Optimization", desc: "Create detailed, optimized pages for each procedure — rhinoplasty, breast augmentation, facelift, liposuction." }, { title: "Surgeon Authority Building", desc: "Build the surgeon's personal brand with credentials, publications, media appearances, and expert content." }, { title: "Visual Content Strategy", desc: "Optimize before/after galleries, video testimonials, and procedure videos for search visibility." }, { title: "Reputation Management", desc: "Manage patient reviews across platforms to build trust and improve local rankings." }],
    ["plastic surgeon near me", "rhinoplasty surgeon", "breast augmentation", "facelift specialist", "liposuction", "tummy tuck", "cosmetic surgeon", "BBL surgeon"],
    [{ metric: "500%", label: "Consultation Requests" }, { metric: "200+", label: "Keywords Ranked" }, { metric: "#1", label: "Google Maps Position" }, { metric: "8x", label: "ROI Achieved" }],
    [{ q: "How competitive is plastic surgery SEO?", a: "Extremely competitive. Plastic surgery keywords have some of the highest CPCs in healthcare. Our strategies focus on long-tail keywords and local dominance to compete effectively." }, { q: "How important are before/after photos for SEO?", a: "Critical. Optimized galleries drive image search traffic and dramatically improve conversion rates. We ensure proper consent, alt tags, and schema markup for all visual content." }, { q: "What's the typical cost of plastic surgery SEO?", a: "Given the high competition and high patient value, we recommend our Growth or Enterprise packages ($1,000-$2,000/month). The ROI is substantial given that a single procedure generates $5,000-$15,000+." }, { q: "Can SEO replace paid ads for my practice?", a: "SEO complements paid ads and provides better long-term ROI. Many practices reduce ad spend by 30-50% as organic traffic grows, while maintaining or increasing consultations." }, { q: "How do you build trust for a plastic surgeon online?", a: "Through credential highlighting, patient testimonials, before/after galleries, educational content, media mentions, and board certification promotion across all digital touchpoints." }],
    ["local-seo", "content-strategy", "link-building"],
    defaultLocs
  ),

  ind("optometry-seo", "Optometry SEO", "Eye Doctors", "SEO for Eye Doctors & Optometrists - Vision Care Marketing", "SEO for optometrists and eye care practices. Attract patients for eye exams, glasses, contacts, and vision correction services.", Heart, "Healthcare & Medical", "Eye Doctors", "Help patients find your eye care practice with SEO strategies optimized for optometry and vision care services.",
    [{ title: "Product + Service Mix", desc: "Eye care combines medical services with retail (glasses, contacts). SEO must target both service and product searches." }, { title: "Insurance-Driven Searches", desc: "Many patients search by insurance provider. Content about accepted insurance plans captures this intent." }, { title: "Online Retailers Competition", desc: "Online glasses and contact retailers compete for product searches. Local eye care practices need differentiated strategies." }, { title: "Seasonal Demand", desc: "Back-to-school and insurance year-end create seasonal spikes in eye care demand." }],
    [{ title: "Service + Product SEO", desc: "Optimize for eye exams, contact lens fittings, and eyewear alongside medical services like LASIK consultation." }, { title: "Insurance Content Strategy", desc: "Create pages for each accepted insurance plan to capture insurance-specific searches." }, { title: "Local Eye Care SEO", desc: "Dominate local searches for eye doctors and optometrists in your service area." }, { title: "E-commerce Integration", desc: "For online eyewear sales, implement product schema and optimize product pages for search." }],
    ["eye doctor near me", "optometrist", "eye exam", "glasses near me", "contact lens fitting", "LASIK consultation", "children eye doctor", "vision therapy"],
    defaultCase,
    [{ q: "How can optometry SEO help my practice?", a: "SEO helps patients find your practice for eye exams, glasses, contacts, and specialty services. Ranking for local eye care searches drives a steady stream of new patients." }, { q: "Should I sell glasses online?", a: "An online shop can complement your practice, but local SEO for in-store fittings and exams typically drives more revenue. We can optimize for both channels." }, { q: "How do I compete with online glasses retailers?", a: "Focus on your advantages: personalized fitting, immediate service, insurance acceptance, and medical eye care. SEO content should highlight these differentiators." }, { q: "What keywords should optometrists target?", a: "Focus on 'eye doctor near me', 'eye exam', specific insurance plans, and specialty services like pediatric eye care or vision therapy." }, { q: "How important are reviews for eye doctors?", a: "Very important. Patients read reviews before choosing an eye doctor. We help you generate and manage reviews to build trust and improve local rankings." }],
    ["local-seo", "google-business-profile", "ecommerce-seo"],
    defaultLocs
  ),

  // ============================================================
  // LEGAL & PROFESSIONAL SERVICES
  // ============================================================
  ind("law-firm-seo", "Law Firm SEO", "Law Firms", "SEO for Law Firms - Legal Marketing & Lead Generation", "Specialized SEO for law firms and attorneys. Rank higher for legal services, attract qualified clients, and grow your practice with expert legal marketing.", Scale, "Legal & Professional Services", "Law Firms", "Attract more qualified clients with SEO strategies built for the competitive legal market. We help law firms rank for high-value practice area keywords.",
    [{ title: "Extreme Competition", desc: "Legal SEO is among the most competitive niches. Law firm keywords have some of the highest CPCs, making organic rankings extremely valuable." }, { title: "Practice Area Diversity", desc: "Law firms cover multiple practice areas — personal injury, family law, criminal defense. Each needs dedicated optimization." }, { title: "YMYL Compliance", desc: "Legal content falls under Google's YMYL category, requiring demonstrated expertise and authority to rank." }, { title: "Ethical Considerations", desc: "Bar association rules govern legal advertising. SEO strategies must comply with legal marketing ethics." }],
    [{ title: "Practice Area Pages", desc: "Build comprehensive, optimized pages for each practice area with case results, FAQs, and compelling CTAs." }, { title: "Legal Content Authority", desc: "Create authoritative legal guides and blog posts that establish your firm as a trusted resource." }, { title: "Local Legal SEO", desc: "Dominate local searches for attorneys in your area with GBP, citations, and geo-targeted content." }, { title: "Competitive Link Building", desc: "Build high-authority legal backlinks through bar association listings, legal directories, and media mentions." }],
    ["lawyer near me", "personal injury attorney", "divorce lawyer", "criminal defense attorney", "immigration lawyer", "estate planning attorney", "DUI lawyer", "workers compensation lawyer"],
    [{ metric: "600%", label: "Case Inquiries Growth" }, { metric: "250+", label: "Keywords Ranked" }, { metric: "#1", label: "For Target Keywords" }, { metric: "10x", label: "ROI Achieved" }],
    [{ q: "How competitive is law firm SEO?", a: "Law firm SEO is among the most competitive niches. Keywords like 'personal injury lawyer' have CPCs of $100+. This makes organic rankings incredibly valuable — a top position can save thousands in monthly ad spend." }, { q: "Do you handle bar association compliance?", a: "Yes, we ensure all content and marketing strategies comply with your jurisdiction's bar association rules regarding legal advertising and attorney solicitation." }, { q: "How do you target different practice areas?", a: "Each practice area gets its own comprehensive page with dedicated keywords, content, and link building. We avoid keyword cannibalization and ensure clear topical relevance for each area." }, { q: "What's the ROI of law firm SEO?", a: "Legal SEO typically delivers 5-10x ROI. A single personal injury case can be worth $10,000-$100,000+ in fees, making even high investment in SEO extremely profitable." }, { q: "How long to rank for competitive legal keywords?", a: "Competitive legal keywords typically take 6-12 months to rank. We target easier wins early while building authority for high-value terms." }],
    ["local-seo", "content-strategy", "link-building"],
    defaultLocs
  ),

  ind("accounting-seo", "Accounting SEO", "Accountants", "SEO for Accountants & CPAs - Accounting Firm Marketing", "SEO for accounting firms and CPAs. Attract business and individual clients searching for tax, bookkeeping, and advisory services.", Scale, "Legal & Professional Services", "Accountants & CPAs", "Grow your accounting practice with SEO that attracts clients searching for tax preparation, bookkeeping, auditing, and financial advisory services.",
    [{ title: "Seasonal Demand", desc: "Tax season creates massive search spikes. Your SEO must be optimized to capture this seasonal demand." }, { title: "Service Differentiation", desc: "Accounting firms offer varied services. Clear differentiation between tax, audit, bookkeeping, and advisory is needed." }, { title: "Trust Requirements", desc: "Clients trust accountants with sensitive financial data. Your online presence must convey professionalism and reliability." }, { title: "B2B vs B2C", desc: "Business and individual clients search differently. SEO strategies must target both audiences effectively." }],
    [{ title: "Service-Specific SEO", desc: "Optimize for each service — tax preparation, bookkeeping, payroll, auditing, business advisory." }, { title: "Seasonal Content Strategy", desc: "Plan content around tax deadlines, regulatory changes, and seasonal financial planning needs." }, { title: "Local Business SEO", desc: "Target local business owners searching for nearby accounting services." }, { title: "Thought Leadership", desc: "Position your firm as a trusted financial advisor through expert content and guides." }],
    ["accountant near me", "CPA firm", "tax preparation services", "bookkeeping services", "small business accountant", "tax planning", "payroll services", "audit firm"],
    defaultCase,
    [{ q: "When should I start SEO for tax season?", a: "Start 3-4 months before tax season to build rankings. SEO results compound over time, so year-round optimization ensures peak visibility when demand spikes." }, { q: "Should I target business or individual clients?", a: "Both, but with separate content strategies. Business clients have higher lifetime value but different search patterns than individual tax clients." }, { q: "How does accounting SEO differ from other service SEO?", a: "Accounting SEO requires seasonal planning, compliance awareness, trust-building content, and dual B2B/B2C targeting. We tailor strategies for the unique accounting market." }, { q: "What content should accounting firms create?", a: "Tax tips, deadline reminders, regulatory updates, financial planning guides, and industry-specific accounting advice. Content should demonstrate expertise and build trust." }, { q: "How can I compete with big accounting firms?", a: "Focus on local SEO, personalized service messaging, industry specializations, and client testimonials. Small firms can outrank large ones for local searches." }],
    ["local-seo", "content-strategy", "on-page-seo"],
    defaultLocs
  ),

  ind("insurance-seo", "Insurance SEO", "Insurance Agents", "SEO for Insurance Agents - Insurance Company Marketing", "SEO services for insurance agents and agencies. Rank higher for insurance searches, generate leads, and grow your book of business.", Scale, "Legal & Professional Services", "Insurance Agents", "Generate more insurance leads with SEO strategies that put your agency in front of prospects actively searching for coverage.",
    [{ title: "Carrier Competition", desc: "Insurance agents compete with large carriers who have massive marketing budgets." }, { title: "Multiple Lines", desc: "Auto, home, life, health — each insurance line needs separate optimization." }, { title: "Comparison Shopping", desc: "Insurance shoppers compare multiple agents. Your SEO must capture them early in the process." }, { title: "Regulatory Content", desc: "Insurance content must be accurate and compliant with state regulations." }],
    [{ title: "Line-Specific Pages", desc: "Optimize pages for each insurance line — auto, home, life, health, business insurance." }, { title: "Local Agent SEO", desc: "Dominate local searches for insurance agents with GBP optimization and community presence." }, { title: "Comparison Content", desc: "Create content that helps prospects compare coverage options, positioning you as a trusted advisor." }, { title: "Lead Generation", desc: "Implement conversion-focused SEO with quote forms, calculators, and clear calls to action." }],
    ["insurance agent near me", "auto insurance quotes", "home insurance", "life insurance agent", "business insurance", "health insurance broker", "cheap car insurance", "renters insurance"],
    defaultCase,
    [{ q: "How can SEO help insurance agents?", a: "SEO puts your agency in front of people actively searching for insurance. Ranking for 'insurance agent near me' and specific product keywords drives qualified leads directly to your agency." }, { q: "How do I compete with big insurance companies?", a: "Focus on local SEO, personalized service, and specific insurance lines. Local agents can outrank national carriers for location-specific searches." }, { q: "What insurance keywords should I target?", a: "Start with 'insurance agent near me' and product-specific terms like 'auto insurance quotes in [city]'. Also target comparison and educational keywords." }, { q: "How important are reviews for insurance SEO?", a: "Very important. Insurance is a trust-based business. Positive reviews significantly impact both rankings and conversion rates for agents." }, { q: "Can SEO reduce my lead acquisition costs?", a: "Yes. SEO-generated leads typically cost 60-80% less than paid advertising leads, and they convert better because they come from people actively searching for your services." }],
    ["local-seo", "content-strategy", "google-business-profile"],
    defaultLocs
  ),

  ind("consulting-seo", "Consulting SEO", "Consultants", "SEO for Consultants - Consulting Business Marketing", "SEO for consulting firms and independent consultants. Build thought leadership, generate leads, and grow your consulting practice.", Scale, "Legal & Professional Services", "Consultants", "Establish your consulting practice as an industry authority and attract high-value clients through expert SEO strategies.",
    [{ title: "Thought Leadership", desc: "Consultants sell expertise. Your online presence must demonstrate deep industry knowledge to attract clients." }, { title: "Niche Targeting", desc: "Consulting spans many specializations. SEO must target your specific consulting niche effectively." }, { title: "Long Sales Cycle", desc: "Consulting engagements have long sales cycles. SEO must nurture prospects from awareness to decision." }, { title: "B2B Focus", desc: "Most consulting clients are businesses. B2B SEO requires different strategies than consumer-focused SEO." }],
    [{ title: "Thought Leadership Content", desc: "Create in-depth whitepapers, case studies, and insights that demonstrate consulting expertise." }, { title: "Niche Keyword Targeting", desc: "Target industry-specific consulting terms that attract qualified B2B prospects." }, { title: "LinkedIn Integration", desc: "Coordinate SEO with LinkedIn content strategy for maximum B2B visibility." }, { title: "Case Study SEO", desc: "Optimize case studies and client success stories for search to build credibility." }],
    ["management consultant", "strategy consulting firm", "IT consultant", "business consultant near me", "marketing consultant", "HR consultant", "operations consulting"],
    defaultCase,
    [{ q: "How does consulting SEO differ from other B2B SEO?", a: "Consulting SEO emphasizes thought leadership, expertise demonstration, and long-form content that nurtures relationships. It's about positioning you as the expert, not just ranking for keywords." }, { q: "What content should consultants create for SEO?", a: "Industry analyses, frameworks, case studies, whitepapers, and opinionated perspectives on industry trends. Content should demonstrate the thinking that clients pay for." }, { q: "How do I target my specific consulting niche?", a: "We research niche-specific keywords, create content addressing your ideal client's challenges, and build authority within your specific industry vertical." }, { q: "Can SEO help solo consultants?", a: "Absolutely. SEO is one of the most cost-effective marketing channels for solo consultants. It builds passive lead generation that works around the clock." }, { q: "What's the typical ROI for consulting SEO?", a: "With consulting engagements valued at $10,000-$500,000+, even a few SEO-generated clients per year deliver massive ROI. Most consultants see 5-15x returns." }],
    ["content-strategy", "link-building", "on-page-seo"],
    defaultLocs
  ),

  ind("financial-advisor-seo", "Financial Advisor SEO", "Financial Advisors", "SEO for Financial Advisors - Wealth Management Marketing", "SEO for financial advisors and wealth managers. Build trust, attract high-net-worth clients, and grow your advisory practice.", Scale, "Legal & Professional Services", "Financial Advisors", "Attract affluent clients seeking financial guidance with SEO strategies that build trust and demonstrate your wealth management expertise.",
    [{ title: "Regulatory Compliance", desc: "Financial advertising is heavily regulated. SEO content must comply with SEC, FINRA, and state regulations." }, { title: "Trust Building", desc: "Financial decisions are deeply personal. Your digital presence must convey trustworthiness and expertise." }, { title: "YMYL Standards", desc: "Financial content falls under Google's YMYL guidelines, requiring demonstrated authority and accuracy." }, { title: "High-Value Clients", desc: "Attracting high-net-worth clients requires premium positioning and sophisticated content." }],
    [{ title: "Compliant Content Strategy", desc: "Create financial content that provides value while maintaining regulatory compliance." }, { title: "Local Advisor SEO", desc: "Target local high-net-worth individuals searching for financial advisors in their area." }, { title: "Service Page Optimization", desc: "Optimize pages for retirement planning, investment management, estate planning, and tax strategy." }, { title: "Authority Building", desc: "Build financial authority through educational content, credentials highlighting, and industry publications." }],
    ["financial advisor near me", "wealth management", "retirement planning", "investment advisor", "estate planning", "tax planning advisor", "fiduciary financial planner"],
    defaultCase,
    [{ q: "Is financial advisor SEO compliant with regulations?", a: "We ensure all content follows SEC and FINRA advertising rules. We avoid performance guarantees, include required disclosures, and maintain compliance documentation." }, { q: "How do I attract high-net-worth clients through SEO?", a: "Target keywords used by affluent individuals, create premium content on wealth management topics, and optimize for searches related to complex financial needs." }, { q: "What content should financial advisors create?", a: "Retirement planning guides, market commentary, tax strategy tips, estate planning resources, and life-stage financial planning content. All within regulatory guidelines." }, { q: "How competitive is financial advisor SEO?", a: "Moderately to highly competitive depending on location. Local SEO offers the best opportunities for individual advisors to outrank larger firms." }, { q: "How do you measure financial advisor SEO success?", a: "We track qualified lead generation, consultation requests, organic traffic from target demographics, keyword rankings, and client acquisition costs." }],
    ["local-seo", "content-strategy", "link-building"],
    defaultLocs
  ),

  // ============================================================
  // HOME SERVICES & TRADES (13 Industries)
  // ============================================================
  ...createHomeServices(),

  // ============================================================
  // REAL ESTATE & PROPERTY (5 Industries)
  // ============================================================
  ...createRealEstate(),

  // ============================================================
  // FOOD & HOSPITALITY (5 Industries)
  // ============================================================
  ...createFoodHospitality(),

  // ============================================================
  // TECHNOLOGY & SAAS (5 Industries)
  // ============================================================
  ...createTechSaas(),

  // ============================================================
  // EDUCATION & TRAINING (3 Industries)
  // ============================================================
  ...createEducation(),

  // ============================================================
  // ECOMMERCE & RETAIL (5 Industries)
  // ============================================================
  ...createEcommerce(),

  // ============================================================
  // AUTOMOTIVE & TRANSPORTATION (3 Industries)
  // ============================================================
  ...createAutomotive(),

  // ============================================================
  // BEAUTY & WELLNESS (4 Industries)
  // ============================================================
  ...createBeautyWellness(),

  // ============================================================
  // EVENTS & CREATIVE (4 Industries)
  // ============================================================
  ...createEventsCreative(),

  // ============================================================
  // OTHER INDUSTRIES (8 Industries)
  // ============================================================
  ...createOtherIndustries(),
];

// ============ HOME SERVICES FACTORY ============
function createHomeServices(): IndustryData[] {
  const icon = Home;
  const cat = "Home Services & Trades";
  const svcs: [string, string, string, string, string[]][] = [
    ["plumbing-seo", "Plumbing SEO", "Plumbers", "SEO for Plumbers - Plumbing Company Lead Generation", ["plumber near me", "emergency plumber", "drain cleaning", "water heater repair", "pipe repair", "sewer line", "toilet repair", "leak detection"]],
    ["hvac-seo", "HVAC SEO", "HVAC Companies", "SEO for HVAC Companies - Heating Cooling Marketing", ["HVAC near me", "AC repair", "furnace repair", "heating installation", "air conditioning service", "duct cleaning", "HVAC maintenance", "heat pump"]],
    ["roofing-seo", "Roofing SEO", "Roofers", "SEO for Roofers - Roofing Company Marketing", ["roofer near me", "roof repair", "roof replacement", "roof leak repair", "storm damage roof", "commercial roofing", "metal roofing", "roof inspection"]],
    ["electrician-seo", "Electrician SEO", "Electricians", "SEO for Electricians - Electrical Contractor Marketing", ["electrician near me", "electrical repair", "panel upgrade", "wiring installation", "emergency electrician", "lighting installation", "electrical inspection", "EV charger installation"]],
    ["cleaning-seo", "Cleaning Company SEO", "Cleaning Companies", "SEO for Cleaning Companies - Janitorial Service Marketing", ["cleaning service near me", "house cleaning", "office cleaning", "deep cleaning", "move-out cleaning", "commercial cleaning", "carpet cleaning", "window cleaning"]],
    ["pest-control-seo", "Pest Control SEO", "Pest Control", "SEO for Pest Control - Exterminator Marketing Services", ["pest control near me", "exterminator", "termite treatment", "bed bug removal", "rodent control", "ant control", "mosquito treatment", "wildlife removal"]],
    ["landscaping-seo", "Landscaping SEO", "Landscapers", "SEO for Landscapers - Lawn Care & Garden Marketing", ["landscaper near me", "lawn care service", "landscape design", "tree trimming", "sprinkler installation", "garden maintenance", "hardscaping", "sod installation"]],
    ["painting-seo", "Painting Company SEO", "Painters", "SEO for Painters - Painting Company Lead Generation", ["painter near me", "house painting", "interior painting", "exterior painting", "commercial painting", "cabinet painting", "deck staining", "wallpaper removal"]],
    ["moving-company-seo", "Moving Company SEO", "Moving Companies", "SEO for Moving Companies - Mover Marketing Services", ["movers near me", "moving company", "local moving", "long distance movers", "commercial moving", "packing services", "storage solutions", "piano moving"]],
    ["towing-seo", "Towing Company SEO", "Towing Companies", "SEO for Towing Companies - Tow Truck Marketing", ["tow truck near me", "towing service", "emergency towing", "roadside assistance", "flatbed towing", "motorcycle towing", "junk car removal", "accident towing"]],
    ["garage-door-seo", "Garage Door SEO", "Garage Door Companies", "SEO for Garage Door Companies - Repair & Install Marketing", ["garage door repair near me", "garage door installation", "garage door opener", "spring replacement", "garage door maintenance", "commercial garage door", "emergency garage door"]],
    ["flooring-seo", "Flooring Company SEO", "Flooring Companies", "SEO for Flooring Companies - Flooring Installation Marketing", ["flooring company near me", "hardwood flooring", "tile installation", "carpet installation", "laminate flooring", "vinyl plank flooring", "floor refinishing", "commercial flooring"]],
    ["solar-seo", "Solar Company SEO", "Solar Companies", "SEO for Solar Companies - Solar Panel Installation Marketing", ["solar panel installation", "solar company near me", "solar energy", "residential solar", "commercial solar", "solar battery", "solar financing", "solar panel cost"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO services for ${shortTitle.toLowerCase()}. Rank higher, get more leads, and grow your business with targeted digital marketing strategies.`,
      icon, cat, shortTitle,
      `Get more leads and grow your ${shortTitle.toLowerCase()} business with SEO strategies that put you in front of customers actively searching for your services.`,
      [
        { title: "Local Competition", desc: `The ${shortTitle.toLowerCase()} market is competitive locally. Multiple businesses compete for the same service area searches.` },
        { title: "Emergency Searches", desc: `Many customers search for ${shortTitle.toLowerCase()} services urgently. Ranking for emergency terms captures high-intent leads.` },
        { title: "Seasonal Demand", desc: `${shortTitle} services often have seasonal patterns. Your SEO strategy must account for demand fluctuations.` },
        { title: "Trust & Reviews", desc: `Customers rely heavily on reviews when choosing ${shortTitle.toLowerCase()}. Online reputation directly impacts conversion.` },
      ],
      [
        { title: "Local Service SEO", desc: `Dominate local searches for ${shortTitle.toLowerCase()} with GBP optimization, local citations, and review generation.` },
        { title: "Service Page Optimization", desc: `Create optimized pages for each service you offer to capture specific search queries.` },
        { title: "Emergency Keyword Targeting", desc: `Rank for urgent and emergency service searches to capture high-intent leads.` },
        { title: "Review & Reputation", desc: `Build and manage reviews to improve trust, conversions, and local rankings.` },
      ],
      keywords, defaultCase,
      [
        { q: `How can SEO help my ${shortTitle.toLowerCase()} business?`, a: `SEO puts your business in front of customers actively searching for ${shortTitle.toLowerCase()} services. By ranking for "${keywords[0]}" and related terms, you attract leads ready to hire.` },
        { q: `How important are reviews for ${shortTitle.toLowerCase()}?`, a: `Reviews are critical. They're a top local ranking factor and significantly impact whether customers choose your business. We implement review generation systems to build your reputation.` },
        { q: `Should I have separate pages for each service?`, a: `Yes! Dedicated service pages help you rank for specific searches and provide better information to potential customers looking for specific ${shortTitle.toLowerCase()} services.` },
        { q: `How long until I see results from SEO?`, a: `Most ${shortTitle.toLowerCase()} businesses see improved local visibility within 2-3 months, with significant lead increases in 4-6 months.` },
        { q: `What's the ROI of SEO for ${shortTitle.toLowerCase()}?`, a: `Most businesses see 3-5x ROI within the first year. With average job values of hundreds to thousands of dollars, even a few extra leads per month deliver strong returns.` },
      ],
      ["local-seo", "google-business-profile", "on-page-seo"], defaultLocs
    )
  );
}

// ============ REAL ESTATE FACTORY ============
function createRealEstate(): IndustryData[] {
  const icon = Building2;
  const cat = "Real Estate & Property";
  const svcs: [string, string, string, string, string[]][] = [
    ["real-estate-seo", "Real Estate SEO", "Real Estate Agents", "SEO for Real Estate Agents - Property Marketing Services", ["real estate agent near me", "homes for sale", "realtor", "property listing", "buy house", "sell my home", "real estate market", "home value"]],
    ["property-management-seo", "Property Management SEO", "Property Managers", "SEO for Property Management - Rental Property Marketing", ["property management near me", "rental property manager", "apartment management", "HOA management", "tenant placement", "rental listings", "property maintenance"]],
    ["construction-seo", "Construction SEO", "Construction Companies", "SEO for Construction Companies - Builder Marketing", ["construction company near me", "general contractor", "home builder", "commercial construction", "remodeling contractor", "home renovation", "building contractor"]],
    ["architecture-seo", "Architecture Firm SEO", "Architects", "SEO for Architects - Architecture Firm Marketing", ["architect near me", "architecture firm", "residential architect", "commercial architect", "building design", "architectural services", "home design"]],
    ["interior-design-seo", "Interior Design SEO", "Interior Designers", "SEO for Interior Designers - Design Studio Marketing", ["interior designer near me", "interior design studio", "home decorator", "office design", "kitchen design", "bathroom remodel design", "commercial interior design"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO services for ${shortTitle.toLowerCase()}. Increase visibility, attract clients, and grow your ${shortTitle.toLowerCase()} business with specialized SEO.`,
      icon, cat, shortTitle,
      `Grow your ${shortTitle.toLowerCase()} business with SEO strategies that attract clients actively searching for your services in their area.`,
      [
        { title: "Market Competition", desc: `The ${shortTitle.toLowerCase()} market is highly competitive. Strong SEO differentiates your business from competitors.` },
        { title: "Visual Content", desc: `${shortTitle} heavily relies on visual content. Optimizing portfolios and galleries for search is essential.` },
        { title: "Local Targeting", desc: `Most clients search locally. Your SEO must capture neighborhood and city-level searches effectively.` },
        { title: "Trust Signals", desc: `${shortTitle} decisions involve significant investment. Building online trust is critical for conversion.` },
      ],
      [
        { title: "Local Market SEO", desc: `Dominate local searches for ${shortTitle.toLowerCase()} services with targeted geo-optimization.` },
        { title: "Portfolio Optimization", desc: `Optimize your project portfolio and visual content for search engines and image search.` },
        { title: "Authority Content", desc: `Create expert content that positions your firm as the trusted authority in your market.` },
        { title: "Lead Generation SEO", desc: `Implement conversion-focused optimization to turn organic traffic into qualified leads.` },
      ],
      keywords, defaultCase,
      [
        { q: `How can SEO help my ${shortTitle.toLowerCase()} business?`, a: `SEO attracts clients actively searching for ${shortTitle.toLowerCase()} services. By ranking for relevant keywords, you generate qualified leads without relying solely on referrals or paid advertising.` },
        { q: `How important is local SEO for ${shortTitle.toLowerCase()}?`, a: `Critical. Most clients search locally for ${shortTitle.toLowerCase()}. Local SEO ensures your business appears when nearby clients search for your services.` },
        { q: `What content should ${shortTitle.toLowerCase()} create for SEO?`, a: `Project portfolios, case studies, market insights, buyer/client guides, and expert advice content. Visual content should be optimized with proper alt tags and schema.` },
        { q: `How long until I see SEO results?`, a: `Most ${shortTitle.toLowerCase()} businesses see initial improvements in 2-3 months, with significant lead generation growth in 4-6 months.` },
        { q: `What's the typical ROI for ${shortTitle.toLowerCase()} SEO?`, a: `Given the high value of ${shortTitle.toLowerCase()} services, even a few additional clients per month can deliver 5-10x ROI on your SEO investment.` },
      ],
      ["local-seo", "content-strategy", "on-page-seo"], defaultLocs
    )
  );
}

// ============ FOOD & HOSPITALITY FACTORY ============
function createFoodHospitality(): IndustryData[] {
  const icon = UtensilsCrossed;
  const cat = "Food & Hospitality";
  const svcs: [string, string, string, string, string[]][] = [
    ["restaurant-seo", "Restaurant SEO", "Restaurants", "SEO for Restaurants - Food Business Local Marketing", ["restaurant near me", "best restaurant", "food delivery", "dinner reservations", "takeout near me", "brunch spot", "Italian restaurant", "fine dining"]],
    ["hotel-seo", "Hotel SEO", "Hotels", "SEO for Hotels - Hospitality Marketing & Booking", ["hotel near me", "best hotel in [city]", "luxury hotel", "boutique hotel", "hotel deals", "hotel booking", "resort", "accommodation"]],
    ["catering-seo", "Catering SEO", "Caterers", "SEO for Catering Companies - Event Catering Marketing", ["catering near me", "event catering", "wedding catering", "corporate catering", "party catering", "food truck catering", "BBQ catering"]],
    ["bakery-seo", "Bakery SEO", "Bakeries", "SEO for Bakeries & Cafes - Local Food Business Marketing", ["bakery near me", "custom cakes", "wedding cakes", "pastry shop", "cafe near me", "artisan bread", "dessert shop"]],
    ["food-delivery-seo", "Food Delivery SEO", "Food Delivery", "SEO for Food Delivery - Online Food Ordering Marketing", ["food delivery near me", "order food online", "meal delivery", "restaurant delivery", "healthy meal delivery", "lunch delivery"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO for ${shortTitle.toLowerCase()}. Increase online orders, reservations, and foot traffic with targeted local SEO strategies.`,
      icon, cat, shortTitle,
      `Drive more customers to your ${shortTitle.toLowerCase()} business with SEO strategies that increase visibility for food and dining searches.`,
      [
        { title: "Local Discovery", desc: `${shortTitle} searches are primarily local. Customers search for food options near them, making local SEO essential.` },
        { title: "Platform Competition", desc: `Third-party platforms like Yelp and Google compete for visibility. Direct SEO reduces platform dependency.` },
        { title: "Visual Appeal", desc: `Food businesses rely on visual appeal. Photo optimization and rich results drive clicks and foot traffic.` },
        { title: "Review Impact", desc: `Reviews dramatically impact ${shortTitle.toLowerCase()} choices. Managing your online reputation is critical for success.` },
      ],
      [
        { title: "Local Food SEO", desc: `Dominate local food searches with GBP optimization, food-specific citations, and review management.` },
        { title: "Menu & Service SEO", desc: `Optimize menus, service offerings, and ordering pages for search visibility.` },
        { title: "Visual Content Optimization", desc: `Optimize food photography and visual content for image search and rich results.` },
        { title: "Review Strategy", desc: `Generate and manage reviews across Google, Yelp, and food-specific platforms.` },
      ],
      keywords, defaultCase,
      [
        { q: `How can SEO help my ${shortTitle.toLowerCase()} business?`, a: `SEO helps customers find your ${shortTitle.toLowerCase()} business when searching for food and dining options. Ranking for "near me" and food-specific searches drives foot traffic and orders.` },
        { q: `How important is Google Business Profile for ${shortTitle.toLowerCase()}?`, a: `Extremely important. GBP is often the first thing customers see. Proper optimization with photos, menu, hours, and reviews is essential for ${shortTitle.toLowerCase()}.` },
        { q: `Should I focus on Google or third-party platforms?`, a: `Both matter, but building your own SEO reduces dependency on platforms that charge commissions. We optimize your direct presence while maintaining platform visibility.` },
        { q: `How do reviews affect ${shortTitle.toLowerCase()} SEO?`, a: `Reviews are a top ranking factor for food businesses and dramatically impact customer decisions. We implement review generation to build your reputation.` },
        { q: `What's the ROI of SEO for ${shortTitle.toLowerCase()}?`, a: `Food business SEO typically delivers 3-5x ROI through increased foot traffic, online orders, and reduced platform commission costs.` },
      ],
      ["local-seo", "google-business-profile", "on-page-seo"], defaultLocs
    )
  );
}

// ============ TECH & SAAS FACTORY ============
function createTechSaas(): IndustryData[] {
  const icon = Code;
  const cat = "Technology & SaaS";
  const svcs: [string, string, string, string, string[]][] = [
    ["saas-seo", "SaaS SEO", "SaaS Companies", "SEO for SaaS Companies - B2B Software Marketing", ["SaaS solution", "cloud software", "project management tool", "CRM software", "marketing automation", "accounting software", "HR software"]],
    ["tech-startup-seo", "Tech Startup SEO", "Tech Startups", "SEO for Tech Startups - Startup Growth Marketing", ["tech startup", "software company", "app development", "startup solution", "tech innovation", "digital platform"]],
    ["app-seo", "Mobile App SEO", "Mobile Apps", "SEO for Mobile Apps - App Store Optimization & Web SEO", ["mobile app", "app download", "best app for", "app review", "app comparison", "iOS app", "Android app"]],
    ["cybersecurity-seo", "Cybersecurity SEO", "Cybersecurity Companies", "SEO for Cybersecurity Companies - InfoSec Marketing", ["cybersecurity solutions", "IT security", "penetration testing", "SOC services", "data protection", "network security", "cloud security"]],
    ["it-services-seo", "IT Services SEO", "IT Companies", "SEO for IT Companies - Managed IT Services Marketing", ["IT support near me", "managed IT services", "IT consulting", "cloud migration", "IT outsourcing", "help desk services", "network management"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO services for ${shortTitle.toLowerCase()}. Drive product signups, demos, and growth with B2B-focused search engine optimization.`,
      icon, cat, shortTitle,
      `Scale your ${shortTitle.toLowerCase()} growth with SEO strategies that drive qualified traffic, product signups, and demo requests.`,
      [
        { title: "Long Sales Cycles", desc: `${shortTitle} often have long decision processes. SEO must nurture prospects from awareness to conversion.` },
        { title: "Technical Content", desc: `${shortTitle} audiences are sophisticated. Content must demonstrate deep technical understanding.` },
        { title: "Competitive Market", desc: `The tech market is highly competitive. Differentiated positioning and content are essential.` },
        { title: "Global Reach", desc: `${shortTitle} often serve global audiences. International SEO and multi-market targeting are important.` },
      ],
      [
        { title: "Product-Led SEO", desc: `Optimize for product-related searches and create content that demonstrates your solution's value.` },
        { title: "Technical Content Marketing", desc: `Build comprehensive content hubs with guides, comparisons, and technical documentation.` },
        { title: "Conversion Optimization", desc: `Implement SEO-driven conversion paths — from blog to signup/demo request.` },
        { title: "Competitive Positioning", desc: `Create comparison pages and alternative pages that capture competitor-aware searches.` },
      ],
      keywords, defaultCase,
      [
        { q: `How is ${shortTitle.toLowerCase()} SEO different?`, a: `${shortTitle} SEO focuses on B2B audiences, longer sales cycles, and technical content. It requires deep understanding of the buyer journey from awareness to purchase decision.` },
        { q: `What content drives ${shortTitle.toLowerCase()} growth?`, a: `Comparison pages, alternatives to competitors, use case content, technical guides, and thought leadership pieces. The content should address specific pain points your product solves.` },
        { q: `How long until SEO drives signups?`, a: `Most ${shortTitle.toLowerCase()} see initial traffic growth in 2-3 months, with significant signup/demo increases in 4-8 months as content authority builds.` },
        { q: `Should we invest in SEO or paid ads?`, a: `Both have value, but SEO provides compounding returns over time. Most successful ${shortTitle.toLowerCase()} invest in both, with SEO providing better long-term CAC reduction.` },
        { q: `How do you measure ${shortTitle.toLowerCase()} SEO success?`, a: `We track organic signups/demos, trial-to-paid conversion from organic traffic, content performance, keyword rankings, and organic contribution to pipeline.` },
      ],
      ["content-strategy", "technical-seo", "link-building"], defaultLocs
    )
  );
}

// ============ EDUCATION FACTORY ============
function createEducation(): IndustryData[] {
  const icon = GraduationCap;
  const cat = "Education & Training";
  const svcs: [string, string, string, string, string[]][] = [
    ["education-seo", "Education SEO", "Schools & Colleges", "SEO for Schools & Colleges - Education Marketing", ["school near me", "best college", "private school", "university programs", "online degree", "vocational training"]],
    ["online-course-seo", "Online Course SEO", "Online Courses", "SEO for Online Courses - E-Learning Platform Marketing", ["online course", "learn [skill]", "certification program", "online training", "e-learning platform", "professional development"]],
    ["tutoring-seo", "Tutoring SEO", "Tutoring Services", "SEO for Tutoring Services - Academic Tutoring Marketing", ["tutor near me", "math tutor", "online tutoring", "SAT prep", "reading tutor", "homework help", "test preparation"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO for ${shortTitle.toLowerCase()}. Attract students, increase enrollments, and grow your educational institution with targeted SEO.`,
      icon, cat, shortTitle,
      `Attract more students and increase enrollments with SEO strategies designed specifically for ${shortTitle.toLowerCase()}.`,
      [
        { title: "Enrollment Cycles", desc: `Education has specific enrollment periods. SEO must peak at the right times to capture prospective students.` },
        { title: "Decision Complexity", desc: `Education decisions are significant. Parents and students research extensively before choosing.` },
        { title: "Online Competition", desc: `Online learning has intensified competition. Standing out requires strong content and authority.` },
        { title: "Trust & Reputation", desc: `Educational institutions are judged by outcomes. Demonstrating results is critical for conversion.` },
      ],
      [
        { title: "Enrollment-Focused SEO", desc: `Align SEO efforts with enrollment cycles to maximize applications and registrations.` },
        { title: "Program Page Optimization", desc: `Optimize individual program and course pages for specific educational searches.` },
        { title: "Student Success Content", desc: `Showcase outcomes, alumni success, and educational quality through optimized content.` },
        { title: "Local & Online Targeting", desc: `Balance local SEO for physical campuses with online targeting for virtual programs.` },
      ],
      keywords, defaultCase,
      [
        { q: `How can SEO increase enrollments?`, a: `SEO puts your institution in front of prospective students actively searching for educational options. Ranking for program-specific and location-specific searches drives qualified applications.` },
        { q: `When should education SEO efforts begin?`, a: `Start 3-6 months before enrollment periods to build rankings. Year-round optimization ensures peak visibility during critical enrollment windows.` },
        { q: `What content should educational institutions create?`, a: `Program descriptions, student testimonials, career outcome data, campus information, and educational resources that demonstrate quality and value.` },
        { q: `How do you target online vs. in-person programs?`, a: `Different keyword strategies for each. Online programs target broader geographic terms, while in-person programs focus on local searches and campus-related queries.` },
        { q: `What's the value of SEO for education?`, a: `With tuition values of $1,000-$50,000+ per student, even a small increase in organic enrollments delivers significant ROI on SEO investment.` },
      ],
      ["content-strategy", "local-seo", "on-page-seo"], defaultLocs
    )
  );
}

// ============ ECOMMERCE FACTORY ============
function createEcommerce(): IndustryData[] {
  const icon = ShoppingBag;
  const cat = "Ecommerce & Retail";
  const svcs: [string, string, string, string, string[]][] = [
    ["ecommerce-seo", "Ecommerce Store SEO", "Ecommerce Stores", "SEO for Ecommerce Stores - Online Shop Optimization", ["buy [product]", "best [product]", "online shopping", "free shipping", "product reviews", "shop [category]"]],
    ["shopify-store-seo", "Shopify Store SEO", "Shopify Stores", "SEO for Shopify Stores - Shopify Marketing Services", ["Shopify store", "Shopify products", "buy from Shopify", "Shopify reviews", "online store"]],
    ["amazon-seo", "Amazon SEO", "Amazon Sellers", "SEO for Amazon Sellers - Amazon Listing Optimization", ["buy on Amazon", "Amazon best seller", "Amazon product", "Amazon reviews", "Amazon Prime"]],
    ["fashion-seo", "Fashion Brand SEO", "Fashion Brands", "SEO for Fashion Brands - Clothing Store Marketing", ["buy clothes online", "fashion brand", "designer clothing", "trendy outfits", "sustainable fashion", "plus size fashion"]],
    ["jewelry-seo", "Jewelry Store SEO", "Jewelry Stores", "SEO for Jewelry Stores - Jewelry Business Marketing", ["jewelry store near me", "engagement rings", "custom jewelry", "gold jewelry", "diamond rings", "fine jewelry"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO for ${shortTitle.toLowerCase()}. Drive organic sales, improve product visibility, and grow revenue with e-commerce focused optimization.`,
      icon, cat, shortTitle,
      `Drive more organic sales for your ${shortTitle.toLowerCase()} business with SEO strategies that optimize products, categories, and content for search.`,
      [
        { title: "Product Visibility", desc: `Thousands of products need individual optimization. Prioritizing high-value products is essential.` },
        { title: "Competitive Pricing Searches", desc: `Shoppers compare prices and products. Your content must capture comparison and review searches.` },
        { title: "Technical Complexity", desc: `E-commerce sites have unique technical challenges — duplicate content, faceted navigation, pagination.` },
        { title: "Seasonal Patterns", desc: `Shopping behavior varies by season. SEO strategy must align with peak shopping periods.` },
      ],
      [
        { title: "Product Page SEO", desc: `Optimize product titles, descriptions, images, and schema for better search visibility and click-through rates.` },
        { title: "Category Optimization", desc: `Build optimized category pages with unique content and strategic internal linking.` },
        { title: "Technical E-commerce SEO", desc: `Fix duplicate content, optimize site architecture, and improve page speed for better crawling.` },
        { title: "Content Commerce", desc: `Create buying guides, comparisons, and blog content that drives organic traffic to products.` },
      ],
      keywords, defaultCase,
      [
        { q: `How can SEO increase my online sales?`, a: `SEO drives qualified traffic to your products from people actively searching to buy. Optimized product pages, category pages, and content marketing create sustainable organic revenue growth.` },
        { q: `How many products can you optimize?`, a: `We prioritize high-value products first, then systematically optimize across your catalog. Strategy depends on your catalog size and revenue goals.` },
        { q: `How do you handle duplicate content in e-commerce?`, a: `We implement canonical tags, optimize faceted navigation, create unique product descriptions, and manage URL parameters to eliminate duplicate content issues.` },
        { q: `Should I invest in SEO or paid shopping ads?`, a: `Both work well together. SEO provides long-term organic traffic growth while shopping ads deliver immediate visibility. Many stores reduce ad spend as organic rankings improve.` },
        { q: `What's the ROI of e-commerce SEO?`, a: `E-commerce SEO typically delivers 4-8x ROI within the first year, with returns growing as organic traffic compounds and reduces dependency on paid advertising.` },
      ],
      ["ecommerce-seo", "technical-seo", "content-strategy"], defaultLocs
    )
  );
}

// ============ AUTOMOTIVE FACTORY ============
function createAutomotive(): IndustryData[] {
  const icon = Car;
  const cat = "Automotive & Transportation";
  const svcs: [string, string, string, string, string[]][] = [
    ["automotive-seo", "Car Dealership SEO", "Car Dealerships", "SEO for Car Dealerships - Auto Dealer Marketing", ["car dealership near me", "used cars", "new cars for sale", "auto dealer", "car prices", "test drive"]],
    ["auto-repair-seo", "Auto Repair SEO", "Auto Repair Shops", "SEO for Auto Repair Shops - Mechanic Marketing", ["auto repair near me", "mechanic", "oil change", "brake repair", "car service", "engine repair", "transmission repair"]],
    ["logistics-seo", "Logistics SEO", "Logistics Companies", "SEO for Logistics & Freight - Shipping Company Marketing", ["logistics company", "freight services", "shipping company", "supply chain", "warehousing", "trucking company", "courier service"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO for ${shortTitle.toLowerCase()}. Drive more customers and leads with automotive and transportation focused SEO strategies.`,
      icon, cat, shortTitle,
      `Accelerate your ${shortTitle.toLowerCase()} business growth with SEO strategies that drive qualified leads and customer traffic.`,
      [
        { title: "Local Competition", desc: `${shortTitle} face intense local competition. Strong local SEO is essential for capturing area customers.` },
        { title: "Trust & Reviews", desc: `Customers research ${shortTitle.toLowerCase()} extensively. Reviews and reputation are critical for conversion.` },
        { title: "Service Variety", desc: `Multiple services need optimization. Each service type requires targeted content and keywords.` },
        { title: "Price Sensitivity", desc: `Customers compare prices actively. Content addressing pricing and value is important.` },
      ],
      [
        { title: "Local Market Dominance", desc: `Optimize for local searches with GBP, citations, and geo-targeted content.` },
        { title: "Service Optimization", desc: `Create optimized pages for each service or vehicle type you offer.` },
        { title: "Review Management", desc: `Build and manage customer reviews to improve trust and local rankings.` },
        { title: "Competitive Analysis", desc: `Monitor and outperform local competitors in search results.` },
      ],
      keywords, defaultCase,
      [
        { q: `How can SEO help my ${shortTitle.toLowerCase()} business?`, a: `SEO drives qualified leads from people actively searching for ${shortTitle.toLowerCase()} services. Ranking for local and service-specific keywords brings customers ready to buy or book.` },
        { q: `How important are reviews?`, a: `Reviews are one of the most important factors for ${shortTitle.toLowerCase()}. They impact both rankings and customer trust. We implement review generation systems.` },
        { q: `What keywords should I target?`, a: `Focus on service-specific, location-specific, and urgency-based keywords. We research the highest-value keywords for your specific market.` },
        { q: `How long until I see results?`, a: `Most ${shortTitle.toLowerCase()} see improved local visibility within 2-3 months, with significant lead generation in 4-6 months.` },
        { q: `What's the expected ROI?`, a: `With ${shortTitle.toLowerCase()} service values, even a moderate increase in leads delivers strong ROI. Most businesses see 3-5x returns within the first year.` },
      ],
      ["local-seo", "google-business-profile", "on-page-seo"], defaultLocs
    )
  );
}

// ============ BEAUTY & WELLNESS FACTORY ============
function createBeautyWellness(): IndustryData[] {
  const icon = Sparkles;
  const cat = "Beauty & Wellness";
  const svcs: [string, string, string, string, string[]][] = [
    ["beauty-salon-seo", "Beauty Salon SEO", "Beauty Salons", "SEO for Beauty Salons - Hair & Nail Salon Marketing", ["hair salon near me", "nail salon", "hair coloring", "blowout bar", "manicure pedicure", "hair extensions"]],
    ["spa-seo", "Spa SEO", "Spas", "SEO for Spas & Wellness Centers - Spa Marketing", ["spa near me", "massage therapy", "facial treatment", "day spa", "couples massage", "wellness center"]],
    ["fitness-seo", "Fitness SEO", "Gyms & Trainers", "SEO for Gyms & Personal Trainers - Fitness Marketing", ["gym near me", "personal trainer", "fitness classes", "CrossFit gym", "yoga classes", "weight loss program"]],
    ["yoga-seo", "Yoga Studio SEO", "Yoga Studios", "SEO for Yoga Studios - Wellness Business Marketing", ["yoga studio near me", "yoga classes", "hot yoga", "yoga for beginners", "meditation classes", "yoga retreat"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO for ${shortTitle.toLowerCase()}. Attract more clients, increase bookings, and grow your beauty and wellness business.`,
      icon, cat, shortTitle,
      `Fill your appointment book with SEO strategies that attract clients searching for ${shortTitle.toLowerCase()} services in your area.`,
      [
        { title: "Local Discovery", desc: `${shortTitle} are discovered primarily through local search. Being visible for "near me" searches is essential.` },
        { title: "Visual Marketing", desc: `Beauty and wellness businesses need strong visual content. Before/after photos and ambiance shots drive conversions.` },
        { title: "Review Dependency", desc: `Clients choose ${shortTitle.toLowerCase()} based heavily on reviews and star ratings.` },
        { title: "Booking Integration", desc: `Online booking drives convenience. SEO must integrate with booking systems for seamless conversion.` },
      ],
      [
        { title: "Local Beauty SEO", desc: `Dominate local searches for ${shortTitle.toLowerCase()} with optimized GBP and local citations.` },
        { title: "Service Menu Optimization", desc: `Optimize your service menu and individual treatment pages for search.` },
        { title: "Visual Content SEO", desc: `Optimize photos, galleries, and visual content for image search and enhanced results.` },
        { title: "Booking Optimization", desc: `Integrate online booking with SEO-driven landing pages for seamless client acquisition.` },
      ],
      keywords, defaultCase,
      [
        { q: `How can SEO help my ${shortTitle.toLowerCase()} business?`, a: `SEO puts your ${shortTitle.toLowerCase()} in front of clients actively searching for your services. Local search optimization drives walk-ins, bookings, and calls.` },
        { q: `How important is visual content for ${shortTitle.toLowerCase()} SEO?`, a: `Very important. Before/after photos, ambiance shots, and service images drive clicks and conversions. We optimize all visual content for search visibility.` },
        { q: `How do I get more reviews?`, a: `We implement automated review request systems, make it easy for satisfied clients to leave reviews, and help you respond professionally to all feedback.` },
        { q: `Should I optimize for specific services?`, a: `Yes! Individual service pages help you rank for specific searches and allow you to highlight your specialties and pricing.` },
        { q: `What's the ROI for ${shortTitle.toLowerCase()} SEO?`, a: `With recurring client value of hundreds to thousands per year, even a few new clients per month from SEO delivers strong returns. Most see 3-5x ROI.` },
      ],
      ["local-seo", "google-business-profile", "on-page-seo"], defaultLocs
    )
  );
}

// ============ EVENTS & CREATIVE FACTORY ============
function createEventsCreative(): IndustryData[] {
  const icon = Camera;
  const cat = "Events & Creative";
  const svcs: [string, string, string, string, string[]][] = [
    ["photography-seo", "Photography SEO", "Photographers", "SEO for Photographers - Photography Business Marketing", ["photographer near me", "wedding photographer", "portrait photographer", "event photographer", "headshot photographer", "family photos"]],
    ["wedding-seo", "Wedding SEO", "Wedding Vendors", "SEO for Wedding Vendors - Wedding Planner Marketing", ["wedding planner near me", "wedding venue", "wedding florist", "wedding DJ", "wedding photographer", "bridal shop"]],
    ["event-planning-seo", "Event Planning SEO", "Event Planners", "SEO for Event Planners - Event Company Marketing", ["event planner near me", "corporate event planning", "party planner", "conference organizer", "event coordinator"]],
    ["music-seo", "Music Industry SEO", "Musicians", "SEO for Musicians & Bands - Music Marketing Services", ["band for hire", "live music", "DJ for events", "music lessons", "recording studio", "band website"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO for ${shortTitle.toLowerCase()}. Increase bookings, build your portfolio's visibility, and grow your creative business.`,
      icon, cat, shortTitle,
      `Book more clients with SEO strategies designed to showcase your ${shortTitle.toLowerCase()} work and attract people searching for your services.`,
      [
        { title: "Portfolio Visibility", desc: `Your work speaks for itself, but it needs to be found. Optimizing portfolios for search is critical.` },
        { title: "Seasonal Demand", desc: `${shortTitle} services often peak seasonally. SEO must be optimized for peak booking periods.` },
        { title: "Platform Competition", desc: `Marketplace platforms compete for visibility. Building your own SEO reduces platform dependency.` },
        { title: "Local + Destination", desc: `Some clients are local, others destination. SEO must target both geographic strategies.` },
      ],
      [
        { title: "Portfolio SEO", desc: `Optimize your portfolio, galleries, and sample work for search engines and image search.` },
        { title: "Seasonal Strategy", desc: `Plan content and optimization around peak booking seasons for maximum visibility.` },
        { title: "Service-Specific Pages", desc: `Create optimized pages for each service or package you offer.` },
        { title: "Review & Social Proof", desc: `Build and showcase client testimonials and reviews for trust and rankings.` },
      ],
      keywords, defaultCase,
      [
        { q: `How can SEO help ${shortTitle.toLowerCase()}?`, a: `SEO helps potential clients discover your work when searching for ${shortTitle.toLowerCase()} services. Ranking for relevant searches drives bookings without relying solely on referrals.` },
        { q: `Should I invest in SEO or marketplace listings?`, a: `Both help, but your own SEO provides long-term, commission-free leads. Marketplace listings can supplement while your organic presence grows.` },
        { q: `How do I optimize my portfolio for SEO?`, a: `Proper image alt tags, descriptive captions, project descriptions, and schema markup help search engines understand and index your portfolio work.` },
        { q: `When should I start SEO for peak season?`, a: `Start 3-6 months before your peak season to build rankings. Year-round optimization ensures you're ready when demand surges.` },
        { q: `What's the value of SEO for creative businesses?`, a: `With booking values of hundreds to thousands per client, even a few additional bookings per month from SEO deliver significant ROI.` },
      ],
      ["local-seo", "on-page-seo", "content-strategy"], defaultLocs
    )
  );
}

// ============ OTHER INDUSTRIES FACTORY ============
function createOtherIndustries(): IndustryData[] {
  const icon = Plane;
  const cat = "Other Industries";
  const svcs: [string, string, string, string, string[]][] = [
    ["travel-seo", "Travel Agency SEO", "Travel Agencies", "SEO for Travel Agencies - Tourism Marketing Services", ["travel agency near me", "vacation packages", "flight deals", "tour operator", "travel planning", "honeymoon packages"]],
    ["nonprofit-seo", "Nonprofit SEO", "Nonprofits", "SEO for Nonprofits - NGO & Charity Marketing", ["charity donation", "nonprofit [cause]", "volunteer opportunities", "fundraising", "donate to charity"]],
    ["church-seo", "Church SEO", "Churches", "SEO for Churches - Religious Organization Marketing", ["church near me", "Sunday service", "Bible study", "youth group", "community church", "worship service"]],
    ["gym-equipment-seo", "Gym Equipment SEO", "Gym Equipment Sellers", "SEO for Gym Equipment Sellers - Fitness Equipment Marketing", ["gym equipment", "home gym", "treadmill", "weight bench", "exercise bike", "fitness equipment"]],
    ["pet-services-seo", "Pet Services SEO", "Pet Services", "SEO for Pet Grooming & Pet Stores - Pet Business Marketing", ["pet grooming near me", "pet store", "dog grooming", "pet supplies", "pet boarding", "dog training"]],
    ["printing-seo", "Printing Company SEO", "Printing Companies", "SEO for Printing Companies - Print Shop Marketing", ["printing company near me", "business cards", "banner printing", "t-shirt printing", "flyer printing", "custom printing"]],
    ["recruitment-seo", "Recruitment SEO", "Recruitment Agencies", "SEO for Recruitment Agencies - Staffing Company Marketing", ["recruitment agency", "staffing company", "job placement", "temp agency", "headhunter", "executive search"]],
    ["manufacturing-seo", "Manufacturing SEO", "Manufacturers", "SEO for Manufacturers - Industrial B2B Marketing", ["manufacturer", "custom manufacturing", "OEM supplier", "industrial parts", "contract manufacturing", "CNC machining"]],
  ];

  return svcs.map(([slug, title, shortTitle, metaTitle, keywords]) =>
    ind(slug, title, shortTitle, metaTitle,
      `SEO for ${shortTitle.toLowerCase()}. Increase visibility, attract customers, and grow your business with specialized SEO strategies.`,
      icon, cat, shortTitle,
      `Grow your ${shortTitle.toLowerCase()} business with SEO strategies that attract the right audience and drive measurable results.`,
      [
        { title: "Market Competition", desc: `Standing out in the ${shortTitle.toLowerCase()} market requires strategic SEO that targets the right audience.` },
        { title: "Audience Targeting", desc: `Reaching the right audience for ${shortTitle.toLowerCase()} requires precise keyword targeting and content strategy.` },
        { title: "Trust Building", desc: `Building trust online is essential for ${shortTitle.toLowerCase()}. Content and reviews establish credibility.` },
        { title: "Digital Presence", desc: `Many ${shortTitle.toLowerCase()} still underinvest in digital. SEO provides a competitive advantage.` },
      ],
      [
        { title: "Targeted SEO Strategy", desc: `Develop a customized SEO strategy focused on the unique needs of ${shortTitle.toLowerCase()}.` },
        { title: "Content Marketing", desc: `Create valuable content that attracts and engages your target audience.` },
        { title: "Local & Online Optimization", desc: `Balance local and broader search optimization based on your service area.` },
        { title: "Authority Building", desc: `Establish your brand as a trusted authority in the ${shortTitle.toLowerCase()} space.` },
      ],
      keywords, defaultCase,
      [
        { q: `How can SEO help my ${shortTitle.toLowerCase()} business?`, a: `SEO attracts people actively searching for ${shortTitle.toLowerCase()} services or products. By ranking for relevant keywords, you generate qualified leads and grow sustainably.` },
        { q: `Is SEO worth the investment for ${shortTitle.toLowerCase()}?`, a: `Absolutely. SEO provides compounding returns over time. The long-term value of organic traffic far exceeds the cost of optimization.` },
        { q: `How long until I see results?`, a: `Most businesses see initial improvements within 2-3 months, with significant growth in 4-6 months. Results compound over time.` },
        { q: `What makes your approach different?`, a: `We specialize in understanding ${shortTitle.toLowerCase()} audiences and creating strategies that speak directly to their search behavior and decision-making process.` },
        { q: `Do you offer ongoing SEO management?`, a: `Yes. SEO requires ongoing optimization to maintain and improve rankings. Our monthly packages include continuous monitoring, content creation, and strategy refinement.` },
      ],
      ["on-page-seo", "content-strategy", "local-seo"], defaultLocs
    )
  );
}

// Lookup helpers
export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find(i => i.slug === slug);
}

export function getIndustriesByCategory(category: string): IndustryData[] {
  return industriesData.filter(i => i.category === category);
}

export const INDUSTRY_CATEGORIES = [
  "Healthcare & Medical",
  "Legal & Professional Services",
  "Home Services & Trades",
  "Real Estate & Property",
  "Food & Hospitality",
  "Technology & SaaS",
  "Education & Training",
  "Ecommerce & Retail",
  "Automotive & Transportation",
  "Beauty & Wellness",
  "Events & Creative",
  "Other Industries",
];
