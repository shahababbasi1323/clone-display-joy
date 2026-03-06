import { useParams, Navigate } from "react-router-dom";
import ToolPageWrapper from "@/components/ToolPageWrapper";
import { toolsDataMap } from "@/data/toolsData";

import WordCounter from "./tools/WordCounter";
import MetaTagGenerator from "./tools/MetaTagGenerator";
import SerpPreview from "./tools/SerpPreview";
import { CharacterCounter, KeywordDensityChecker, ReadabilityChecker, DuplicateSentenceFinder, LoremIpsumGenerator, TextCaseConverter, ArticleRewriterHelper, HeadlineAnalyzer, GrammarChecker } from "./tools/ContentTools";
import { BulkTitleChecker, MetaDescriptionChecker, HeadingAnalyzer, ImageAltTextGenerator, CanonicalTagGenerator, OpenGraphPreview, GoogleIndexChecker, BulkIndexChecker, SerpChecker } from "./tools/MetaTools";
import { RobotsTxtGenerator, SitemapGenerator, HtaccessRedirectGenerator, SchemaGenerator, JsonLdValidator, HreflangTagGenerator, SlugGenerator, UrlEncoderDecoder, HttpStatusChecker, PageSizeCalculator, CoreWebVitalsGuide, PageSpeedAnalyzer, XmlToUrlConverter } from "./tools/TechnicalTools";
import { KeywordSuggestionTool, LsiKeywordGenerator, QuestionGenerator, KeywordGapPlanner, SearchIntentClassifier, KeywordGrouper, BulkKeywordChecker } from "./tools/KeywordTools";
import { LinkedInPostFormatter, LinkedInHeadlineGenerator, LinkedInSummaryGenerator, TwitterThreadFormatter, SocialMediaImageSizeGuide, HashtagGenerator, InstagramBioGenerator, SocialPostCalendar } from "./tools/SocialTools";
import { GmbAuditChecklist, CitationSourceFinder, NapConsistencyChecker, ReviewResponseGenerator, LocalKeywordGenerator, GbpKeywordChecker } from "./tools/LocalSeoTools";
import { AiSearchPromptGenerator, AiContentOptimizer, BrandMentionGuide } from "./tools/AiSeoTools";
import { AnchorTextAnalyzer, GuestPostPitchGenerator, BrokenLinkEmailGenerator, BacklinkQualityChecklist, DisavowFileGenerator } from "./tools/BacklinkTools";
import { ProductDescriptionOptimizer, EcommerceSchemaGenerator, CategoryPageOptimizer } from "./tools/EcommerceTools";
import { SeoRoiCalculator, CpcSavingsCalculator, DomainAgeChecker, WebsiteCostEstimator } from "./tools/ReportingTools";
import { CtaGenerator, AbTestDurationCalculator, ColorContrastChecker, PageSpeedChecklist } from "./tools/ConversionTools";
import { EmailSubjectLineTester, ColdEmailGenerator } from "./tools/EmailTools";
import { GoogleAdsBudgetCalculator, RoasCalculator, AdCopyGenerator, QualityScoreEstimator, PpcCampaignAuditChecklist } from "./tools/PpcTools";
import { BulkExpiredDomainChecker, DomainAuthorityChecker, RedirectChainChecker } from "./tools/DomainTools";

const registry: Record<string, React.FC> = {
  "word-counter": WordCounter,
  "character-counter": CharacterCounter,
  "keyword-density-checker": KeywordDensityChecker,
  "readability-checker": ReadabilityChecker,
  "plagiarism-sentence-checker": DuplicateSentenceFinder,
  "lorem-ipsum-generator": LoremIpsumGenerator,
  "text-case-converter": TextCaseConverter,
  "article-rewriter-helper": ArticleRewriterHelper,
  "headline-analyzer": HeadlineAnalyzer,
  "grammar-checker": GrammarChecker,
  "meta-tag-generator": MetaTagGenerator,
  "google-serp-preview": SerpPreview,
  "bulk-title-checker": BulkTitleChecker,
  "meta-description-checker": MetaDescriptionChecker,
  "heading-analyzer": HeadingAnalyzer,
  "image-alt-text-generator": ImageAltTextGenerator,
  "canonical-tag-generator": CanonicalTagGenerator,
  "open-graph-preview": OpenGraphPreview,
  "google-index-checker": GoogleIndexChecker,
  "bulk-index-checker": BulkIndexChecker,
  "serp-checker": SerpChecker,
  "robots-txt-generator": RobotsTxtGenerator,
  "sitemap-generator": SitemapGenerator,
  "htaccess-redirect-generator": HtaccessRedirectGenerator,
  "schema-generator": SchemaGenerator,
  "json-ld-validator": JsonLdValidator,
  "hreflang-tag-generator": HreflangTagGenerator,
  "slug-generator": SlugGenerator,
  "url-encoder-decoder": UrlEncoderDecoder,
  "http-status-checker": HttpStatusChecker,
  "page-size-checker": PageSizeCalculator,
  "core-web-vitals-guide": CoreWebVitalsGuide,
  "page-speed-analyzer": PageSpeedAnalyzer,
  "xml-to-url-converter": XmlToUrlConverter,
  "keyword-suggestion-tool": KeywordSuggestionTool,
  "lsi-keyword-generator": LsiKeywordGenerator,
  "question-generator": QuestionGenerator,
  "competitor-keyword-gap-planner": KeywordGapPlanner,
  "search-intent-classifier": SearchIntentClassifier,
  "keyword-grouper": KeywordGrouper,
  "bulk-keyword-checker": BulkKeywordChecker,
  "linkedin-post-formatter": LinkedInPostFormatter,
  "linkedin-headline-generator": LinkedInHeadlineGenerator,
  "linkedin-summary-generator": LinkedInSummaryGenerator,
  "twitter-thread-formatter": TwitterThreadFormatter,
  "social-media-image-size-guide": SocialMediaImageSizeGuide,
  "hashtag-generator": HashtagGenerator,
  "instagram-bio-generator": InstagramBioGenerator,
  "social-post-scheduler-planner": SocialPostCalendar,
  "google-business-profile-audit": GmbAuditChecklist,
  "local-citation-finder": CitationSourceFinder,
  "nap-consistency-checker": NapConsistencyChecker,
  "review-response-generator": ReviewResponseGenerator,
  "local-keyword-generator": LocalKeywordGenerator,
  "gbp-keyword-checker": GbpKeywordChecker,
  "ai-search-prompt-tester": AiSearchPromptGenerator,
  "ai-content-optimizer": AiContentOptimizer,
  "brand-mention-tracker-guide": BrandMentionGuide,
  "anchor-text-analyzer": AnchorTextAnalyzer,
  "guest-post-pitch-generator": GuestPostPitchGenerator,
  "broken-link-outreach-template": BrokenLinkEmailGenerator,
  "backlink-quality-checklist": BacklinkQualityChecklist,
  "disavow-file-generator": DisavowFileGenerator,
  "product-description-optimizer": ProductDescriptionOptimizer,
  "ecommerce-schema-generator": EcommerceSchemaGenerator,
  "category-page-optimizer": CategoryPageOptimizer,
  "seo-roi-calculator": SeoRoiCalculator,
  "cpc-savings-calculator": CpcSavingsCalculator,
  "domain-age-checker": DomainAgeChecker,
  "website-cost-estimator": WebsiteCostEstimator,
  "cta-generator": CtaGenerator,
  "ab-test-duration-calculator": AbTestDurationCalculator,
  "color-contrast-checker": ColorContrastChecker,
  "page-speed-checklist": PageSpeedChecklist,
  "email-subject-line-tester": EmailSubjectLineTester,
  "cold-email-generator": ColdEmailGenerator,
  "google-ads-budget-calculator": GoogleAdsBudgetCalculator,
  "roas-calculator": RoasCalculator,
  "ad-copy-generator": AdCopyGenerator,
  "quality-score-estimator": QualityScoreEstimator,
  "ppc-campaign-audit-checklist": PpcCampaignAuditChecklist,
  "bulk-expired-domain-checker": BulkExpiredDomainChecker,
  "domain-authority-checker": DomainAuthorityChecker,
  "redirect-chain-checker": RedirectChainChecker,
};

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const tool = slug ? toolsDataMap[slug] : null;
  const ToolComponent = slug ? registry[slug] : null;

  if (!tool || !ToolComponent) return <Navigate to="/tools" replace />;

  return (
    <ToolPageWrapper tool={tool}>
      <ToolComponent />
    </ToolPageWrapper>
  );
};

export default ToolPage;
