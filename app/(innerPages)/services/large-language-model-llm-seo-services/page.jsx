import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/llmSeo/Hero2";
import Problem from "@/components/servicePages/llmSeo/Problem";
import Features from "@/components/servicePages/llmSeo/Features";
import Process from "@/components/servicePages/llmSeo/Process";
import Services from "@/components/servicePages/llmSeo/Services";
import Faqs from "@/components/servicePages/llmSeo/Faqs";
import Cta from "@/components/servicePages/llmSeo/Cta";
import ServiceTimeline from "@/components/servicePages/llmSeo/ServiceTimeline";

export const metadata = {
  title: "LLM Search Engine Optimization Service || AI Monitor",
  description:
    "Boost visibility with LLM SEO services. AI Monitor structures your content for AI engines to trust, cite, and display in generative answers.",
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id":
    "https://getaimonitor.com/services/large-language-model-llm-seo-services",
  url: "https://getaimonitor.com/services/large-language-model-llm-seo-services",
  name: "LLM SEO Services | AI Monitor",
  description:
    "AI Monitor's LLM SEO Services optimize your brand for large language models like ChatGPT, Gemini, and Claude, ensuring visibility in AI-driven search results.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://getaimonitor.com/",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
  },
  thumbnailUrl:
    "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
  datePublished: "2025-01-01",
  dateModified: "2025-09-11",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
  },
};
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://getaimonitor.com/services/large-language-model-llm-seo-services#service",
  serviceType: "Large Language Model SEO (LLM SEO)",
  name: "LLM SEO Services",
  provider: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
  },
  url: "https://getaimonitor.com/services/large-language-model-llm-seo-services",
  description:
    "Our LLM SEO Services help SaaS and enterprise brands secure visibility across large language models like ChatGPT, Google Gemini, Claude, and Bing Copilot by optimizing prompts, content structuring, and AI-driven search presence.",
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    url: "https://getaimonitor.com/services/large-language-model-llm-seo-services",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is LLM SEO, and why does my brand need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LLM SEO optimizes your content for large language models like ChatGPT, Perplexity, and Google AI Overviews. Unlike traditional SEO, it focuses on structured data, AI prompt optimization, and citation strategies to make your brand AI-visible by default.",
      },
    },
    {
      "@type": "Question",
      name: "What are LLM SEO Files, and why are they important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These are custom machine-readable files designed to make AI models understand, index, and cite your brand. They’re the backbone of modern AI-driven discoverability.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early AI visibility improvements typically appear within 5–8 weeks, with major citation growth achieved in 3–6 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do you integrate structured data and schema?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We implement advanced schema.org markup, structured metadata, and our 5 LLM SEO Files to maximize AI crawler accessibility.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track AI citations, rankings, prompt-based visibility, and generative traffic performance using real-time dashboards and monthly reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a full website rebuild?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not usually. Most websites can be optimized using our LLM SEO Files and improved structured content layers—no complete overhaul required.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply book a discovery call. We’ll audit your AI readiness and deliver a tailored plan to make your brand AI-visible.",
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
              <Hero2 />
              <Problem />
              <Features />
              <ServiceTimeline />
              {/* <Process /> */}
              <Services />
              <Faqs />
              <Cta />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
