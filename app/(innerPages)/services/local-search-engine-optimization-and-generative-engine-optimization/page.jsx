import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/localSEO/Hero2";
import Problem from "@/components/servicePages/localSEO/Problem";
import Features from "@/components/servicePages/localSEO//Features";
import Process from "@/components/servicePages/localSEO/Process";
import Services from "@/components/servicePages/localSEO/Services";
import Faqs from "@/components/servicePages/localSEO/Faqs";
import Cta from "@/components/servicePages/localSEO/Cta";
import ServiceTimeline from "@/components/servicePages/localSEO/ServiceTimeline";

export const metadata = {
  title: "Local SEO & Geo Optimization Services || AI Monitor",
  description:
    "Best Local SEO & Geo services to boost visibility in target regions. Drive foot traffic, local leads, and AI-powered discovery for your brand.",
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id":
    "https://getaimonitor.com/services/local-search-engine-optimization-and-generative-engine-optimization",
  url: "https://getaimonitor.com/services/local-search-engine-optimization-and-generative-engine-optimization",
  name: "Local SEO and GEO Services | AI Monitor",
  description:
    "AI Monitor’s Local SEO and GEO Services combine local search optimization with generative engine strategies, helping SaaS and enterprise brands rank better in map packs, local listings, and AI-driven search engines.",
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
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
};
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://getaimonitor.com/services/local-search-engine-optimization-and-generative-engine-optimization#service",
  serviceType: "Local SEO and Generative Engine Optimization (GEO)",
  name: "Local SEO and GEO",
  url: "https://getaimonitor.com/services/local-search-engine-optimization-and-generative-engine-optimization",
  description:
    "Our Local SEO and GEO service optimizes SaaS and enterprise brand visibility in local search results, map packs, and AI-generated search summaries across platforms like Google AI Overviews and ChatGPT.",
  provider: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
  },
  areaServed: "Worldwide",
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Local SEO, and why does my business need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO ensures your business appears in Google Map Packs, “near me” searches, and AI-powered local results. It drives more calls, visits, and conversions from nearby customers ready to buy.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients start seeing improvements in 6–8 weeks, such as higher map-pack rankings and more Google Business Profile (GBP) actions. Significant growth typically happens within 3–6 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use AI tools for Local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We combine expert-driven strategy with AI-powered tools for prompt analysis, competitor tracking, local keyword discovery, and optimizing Google Business Profiles for better visibility.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if Google changes its local search algorithms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We monitor every major update to Google Maps, Map Packs, and local ranking signals. If algorithms change, we adapt your strategy instantly, keeping you ahead of competitors, not playing catch-up.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track map-pack rankings, GBP insights, calls, clicks, directions, foot traffic, and leads. Our monthly reports show exactly how local visibility drives real revenue growth.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to rebuild my website for Local SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Most improvements come from optimizing your Google Business Profile, fixing citations, enhancing on-page content, and adding local schema. If deeper changes are needed, we guide you step by step.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It’s simple. Book a free discovery call, and we’ll audit your local visibility, analyze competitors, and deliver a custom Local SEO roadmap designed to put your business on top in map packs and local searches.",
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
