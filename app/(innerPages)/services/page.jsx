import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/services/Hero";
import Hero2 from "@/components/services/Hero2";
import Features from "@/components/services/Features";
import Services from "@/components/services/Services";
import Faq from "@/components/services/Faqs";
import Testimonials from "@/components/services/Testimonials";
import Cta from "@/components/services/Cta";
import WhySection from "@/components/services/WhySection";
import ChooseUs from "@/components/services/ChooseUs";
import ServiceTimeline from "@/components/servicePages/saasSeo/ServiceTimeline";
import CaseStudies from "@/components/services/CaseStudies";

export const metadata = {
  title: "Artificial Intellegence OptimizationServices || AI Monitor",
  description:
    "Dominate AI search. We optimize brands for ChatGPT, Perplexity & Google AI Overviews using GEO, AEO, LLM SEO & AI visibility monitoring.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Monitor",
  url: "https://getaimonitor.com/services",
  description:
    "Discover AI Monitor’s suite of services, including AI Search Analytics, SaaS SEO, GEO, AEO, LLM SEO, Marketing Analytics, Competitor Benchmarking, Reddit Marketing, AI Prompt Monitoring, SaaS Content Marketing, Local SEO, and Backlinks & Brand Mentions.",
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
  },
  publisher: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
  },
  about: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
  },
};
const jsonLdService = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "AI Search Analytics",
      name: "AI Search Analytics",
      url: "https://getaimonitor.com/services/ai-search-analytics",
      description:
        "AI Search Analytics provides real-time insights into AI-driven visibility, traffic patterns, and customer journeys to uncover growth opportunities.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "SaaS Search Engine Optimization (SEO)",
      name: "SaaS SEO Service",
      url: "https://getaimonitor.com/services/saas-search-engine-optimization-services",
      description:
        "Specialized SaaS SEO service that improves search rankings, visibility, and conversions for SaaS businesses using AI-driven optimization strategies.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "Generative Engine Optimization (GEO)",
      name: "GEO Service",
      url: "https://getaimonitor.com/services/generative-engine-optimization-geo-services",
      description:
        "Optimize brand presence across generative AI engines with advanced GEO strategies that enhance discovery and recommendation performance.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "Answer Engine Optimization (AEO)",
      name: "Answer Engine Optimization Service",
      url: "https://getaimonitor.com/services/answer-engine-optimization-aeo-service",
      description:
        "Ensure your brand becomes the trusted source of direct answers in AI-driven answer engines with our tailored AEO strategies.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "LLM SEO",
      name: "Large Language Model (LLM) SEO Service",
      url: "https://getaimonitor.com/services/large-language-model-llm-seo-services",
      description:
        "Optimize your brand’s visibility across large language models like ChatGPT, Claude, and Gemini with LLM-focused SEO strategies.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "AI Marketing Analytics",
      name: "AI Marketing Analytics Service",
      url: "https://getaimonitor.com/services/ai-marketing-analytics-service",
      description:
        "Get actionable AI marketing insights with real-time dashboards that track search visibility, traffic flows, and campaign performance.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "Competitor Benchmarking",
      name: "Competitor Benchmarking for AI Search",
      url: "https://getaimonitor.com/services/competitor-benchmarking-for-ai-searches",
      description:
        "Benchmark your competitors’ performance across AI search platforms, content strategies, and visibility metrics to gain a competitive advantage.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "Reddit Marketing",
      name: "SaaS Reddit Marketing for AI Search",
      url: "https://getaimonitor.com/services/saas-reddit-marketing-for-ai-search",
      description:
        "Harness the power of Reddit communities to expand SaaS brand reach with authentic engagement-driven campaigns in niche audiences.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "AI Prompt Monitoring",
      name: "AI Prompt Monitoring Service",
      url: "https://getaimonitor.com/services/ai-prompt-monitoring-services",
      description:
        "Track how your brand and competitors appear across thousands of AI prompts, gaining a clear view of your market share and presence.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "SaaS Content Marketing",
      name: "SaaS Content Marketing for AI Search",
      url: "https://getaimonitor.com/services/saas-content-marketing-for-ai-search",
      description:
        "AI-powered SaaS content marketing to boost visibility, engagement, and growth across AI-driven search and content ecosystems.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "Local SEO & GEO",
      name: "Local SEO and Generative Engine Optimization",
      url: "https://getaimonitor.com/services/local-search-engine-optimization-and-generative-engine-optimization",
      description:
        "Improve local visibility and AI-driven map rankings with combined Local SEO + GEO optimization strategies to capture nearby customers.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
    {
      "@type": "Service",
      serviceType: "Backlinks & Brand Mentions",
      name: "Backlinks and Brand Mentions Buying Service",
      url: "https://getaimonitor.com/services/backlinks-and-brand-mentions-buying-service",
      description:
        "Build authority through high-quality backlinks and brand mentions from trusted sites, boosting visibility, credibility, and SEO performance.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        url: "https://getaimonitor.com",
        logo: {
          "@type": "ImageObject",
          url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
        },
      },
    },
  ],
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between what you do and traditional SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO focuses on ranking a list of links. We focus on making your brand the source of the answer itself. We optimize your entire digital presence to be cited and recommended by AI, a specialized discipline beyond keywords and backlinks.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI platforms do you optimize for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover the entire AI search ecosystem, including ChatGPT, Google AI Overviews, Perplexity, Claude, Microsoft Copilot, and Gemini.",
      },
    },
    {
      "@type": "Question",
      name: "Who is this service for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our services are best suited for B2B SaaS companies, established enterprises, and global brands that understand the importance of being a first-mover in the new landscape of AI-driven search.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we expect to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'While building foundational authority takes time, clients often see initial improvements in AI mentions and visibility within the first 60-90 days as we implement "quick win" optimizations.',
      },
    },
    {
      "@type": "Question",
      name: "What kind of metrics do you report on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide a comprehensive dashboard tracking Total AI Mentions & Citations, Share of Voice vs. Competitors, Traffic from AI Referrals, and Sentiment Analysis of how AI portrays your brand.",
      },
    },
    {
      "@type": "Question",
      name: "Is your technology built on an open-source tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our proprietary monitoring and analytics platform, AI Monitor, is built on open-source principles. This gives us and you unmatched flexibility and transparency in data analysis.",
      },
    },
  ],
};

export default function page() {
  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebPage).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFAQ).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdService).replace(/</g, "\\u003c"),
        }}
      />
      {/* ... */}
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="page-wrapper uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
            <Header />
            <div id="wrapper" className="wrap">
              {/* <Hero /> */}
              <Hero2 />
              <Features />
              <WhySection />
              {/* <ServiceTimeline /> */}
              <Services />
              <CaseStudies />
              <Testimonials />
              <ChooseUs />
              <Faq />
              <Cta />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
