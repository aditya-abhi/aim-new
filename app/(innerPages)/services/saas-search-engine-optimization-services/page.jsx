import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/saasSeo/Hero2";
import Problem from "@/components/servicePages/saasSeo/Problem";
import Features from "@/components/servicePages/saasSeo/Features";
import Process from "@/components/servicePages/saasSeo/Process";
import Services from "@/components/servicePages/saasSeo/Services";
import Faqs from "@/components/servicePages/saasSeo/Faqs";
import Cta from "@/components/servicePages/saasSeo/Cta";
import ServiceTimeline from "@/components/servicePages/saasSeo/ServiceTimeline";

export const metadata = {
  title: "SaaS Search Engine Optimization Service || AI Monitor",
  description:
    "Boost SaaS visibility with SaaS Seo Services. Rank higher on Google, ChatGPT, Perplexity & more to drive qualified leads & conversions.",
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SaaS SEO Service",
  url: "https://getaimonitor.com/services/saas-search-engine-optimization-services",
  description:
    "Explore AI Monitor’s SaaS SEO Service, designed to increase organic visibility, improve search rankings, and maximize growth for SaaS businesses in AI-driven search ecosystems.",
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
  isPartOf: {
    "@type": "WebSite",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
  },
};
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SaaS Search Engine Optimization (SEO)",
  name: "SaaS SEO Service",
  url: "https://getaimonitor.com/services/saas-search-engine-optimization-services",
  description:
    "AI Monitor’s SaaS SEO Service helps software companies improve search rankings, boost visibility, and drive conversions with AI-driven optimization strategies tailored to SaaS businesses.",
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
      name: "What is Advanced SaaS SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Advanced SaaS SEO goes beyond traditional optimization. It combines technical SEO, content strategy, and keyword intent research to improve rankings, drive qualified traffic, and convert visitors into trial users or customers.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most SaaS brands notice early improvements within 6–8 weeks, with significant traffic and conversion gains over 4–7 months. Timelines depend on site size, competition, and current SEO health.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a new website or tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Most improvements involve content optimization, structured schema, and technical SEO enhancements. Any major tech changes are recommended only if they significantly impact rankings or crawlability.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure SEO success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Success is measured by search rankings, organic traffic quality, trial sign-ups, and conversions. Ongoing reports provide clear insights into what’s working and areas for improvement.",
      },
    },
    {
      "@type": "Question",
      name: "How do you identify the right keywords for SaaS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use intent-driven research to discover what SaaS buyers actually search for, including high-value phrases, competitor gaps, and conversion-focused topics that attract qualified leads.",
      },
    },
    {
      "@type": "Question",
      name: "Can SEO alone drive SaaS growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a critical foundation, but the best results come from integrating it with AI optimization, content strategy, and continuous monitoring to capture high-intent traffic.",
      },
    },
    {
      "@type": "Question",
      name: "How often should SEO be updated for SaaS brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is ongoing. SaaS markets evolve rapidly, so continuous optimization, trend monitoring, and competitor analysis are necessary to maintain rankings and growth.",
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
