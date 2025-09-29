import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/geoService/Hero2";
import Problem from "@/components/servicePages/geoService/Problem";
import Features from "@/components/servicePages/geoService/Features";
import Process from "@/components/servicePages/geoService/Process";
import Services from "@/components/servicePages/geoService/Services";
import Faqs from "@/components/servicePages/geoService/Faqs";
import Cta from "@/components/servicePages/geoService/Cta";
import ServiceTimeline from "@/components/servicePages/geoService/ServiceTimeline";

export const metadata = {
  title: "Generative Engine Optimization Service || AI Monitor",
  description:
    "Optimize your content for AI-driven platforms like ChatGPT, Google AI, and Perplexity. Our GEO services ensure your brand is prominently featured in AI-generated responses, driving higher engagement and visibility.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "GEO Services",
  url: "https://getaimonitor.com/services/generative-engine-optimization-geo-services",
  description:
    "The world’s best & largest Generative Engine Optimization Agency for Enterprises, specializing in GEO in Mumbai",
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
  },
  publisher: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
  },
  about: {
    "@type": "Service",
    serviceType: "Generative Engine Optimization (GEO)",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
  },
};
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Generative Engine Optimization (GEO)",
  name: "GEO Services",
  url: "https://getaimonitor.com/services/generative-engine-optimization-geo-services",
  description:
    "AI Monitor’s GEO Services help SaaS and enterprise brands rank higher in AI-driven search results, including ChatGPT, Perplexity, Gemini, and Google AI Overviews. Our strategies optimize your content for generative engines, ensuring visibility, credibility, and conversions.",
  provider: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  audience: {
    "@type": "Audience",
    audienceType: "SaaS Companies, Enterprises, and Global Brands",
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Generative Engine Optimization (GEO) ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generative Engine Optimization (GEO) is the process of optimizing your content to get featured in AI-generated answers on platforms like ChatGPT, Google AI Overviews, Perplexity, Gemini, and Bing AI. As search evolves, users are increasingly relying on AI systems instead of traditional search engines. GEO ensures your brand, products, and services are visible when users ask AI-driven questions, helping you capture organic traffic, brand mentions, and leads before competitors do.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results with GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most brands start seeing improved AI visibility, higher brand mentions, and increased traffic within 3 to 6 months. However, results depend on your current content quality, competition level, and the number of AI-driven queries in your niche. Our strategy focuses on faster indexing, AI-friendly content structuring, and targeted optimization to accelerate visibility.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use AI tools to implement GEO strategies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We leverage advanced AI-powered tools to enhance your brand’s visibility and performance across generative platforms. Through AI query analysis, we decode what users are asking on systems like ChatGPT and Gemini, uncovering intent and opportunity. Our content gap detection identifies missing or underserved answers—pinpointing where your brand can meaningfully rank. And with optimization and monitoring, we ensure your pages are AI-readable, citation-ready, and primed for inclusion in answer-based results. This data-driven approach empowers your content to perform more effectively across AI search, generative engines, and emerging discovery platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What if AI algorithms change? Will my GEO strategy still work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. GEO is a continuous optimization process. Our team monitors algorithm updates in real-time across ChatGPT, Perplexity, Google AI Overviews, and other engines. Whenever AI ranking factors shift, we adapt your strategy instantly, keeping your brand visible, competitive, and future-proof.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure the success of GEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track AI-specific performance metrics to help you measure the true impact of Generative Engine Optimization (GEO). This includes AI-generated traffic, which captures visitors arriving from platforms like ChatGPT, Google AI, and Perplexity. We also monitor query visibility: how frequently your brand appears in AI-generated responses across these engines. To assess business outcomes, we analyze engagement and conversions, tracking leads, sales, and user interactions driven by AI referrals. Finally, our competitive benchmarks reveal how your brand stacks up against competitors in AI-driven results, offering clear insights to guide strategic decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to change my website’s tech stack for AEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most cases, no major changes are needed. GEO strategies integrate smoothly with your existing CMS, website architecture, and SEO setup. However, we may recommend a few AI-friendly enhancements to boost performance across generative platforms. These include structured data and schema updates to improve machine readability, refined content formatting to aid AI parsing, and faster page load optimizations to enhance accessibility. Together, these adjustments make your content easier for AI engines to interpret, cite, and surface in response-driven environments.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Generative Engine Optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started is simple. Begin by booking a free GEO strategy call. We’ll assess your current visibility across AI platforms and analyze how your brand appears in tools like ChatGPT, Google AI, and Perplexity. Based on this, you’ll receive a personalized roadmap designed to improve your ranking and discoverability across generative engines. It’s the first step toward AI-driven growth, ensuring your brand is found where today’s users are actively searching for answers.",
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
