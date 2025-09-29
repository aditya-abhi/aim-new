import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/aiSearchAnalytics/Hero2";
import Problem from "@/components/servicePages/aiSearchAnalytics/Problem";
import Features from "@/components/servicePages/aiSearchAnalytics/Features";
import Process from "@/components/servicePages/aiSearchAnalytics/Process";
import Services from "@/components/servicePages/aiSearchAnalytics/Services";
import Faqs from "@/components/servicePages/aiSearchAnalytics/Faqs";
import Cta from "@/components/servicePages/aiSearchAnalytics/Cta";
import ServiceTimelinev4 from "@/components/common/ServiceTimelinev4";
import ServiceTimeline from "@/components/servicePages/aiSearchAnalytics/ServiceTimeline";

export const metadata = {
  title:
    "AI Search Analytics for Smarter SEO & Customer Insights || AI Monitor",
  description:
    "Unlock growth with AI Search Analytics. Decode user intent, predict trends, and optimize SEO to drive traffic, leads, and conversions | AI Monitor.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Search Analytics",
  url: "https:/getaimonitor.com/services/ai-search-analytics",
  description:
    "AI Monitor's AI Search Analytics service provides real-time insights into search visibility, traffic patterns, and customer journeys, helping businesses uncover growth opportunities and measure strategic impact.",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://aim-new.vercel.app",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
  },
  mainEntity: {
    "@type": "Service",
    serviceType: "AI Search Analytics",
    name: "AI Search Analytics",
    url: "https:/getaimonitor.com/services/ai-search-analytics",
    provider: {
      "@type": "Organization",
      name: "AI Monitor",
      url: "https://aim-new.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
      },
    },
    description:
      "Get real-time, actionable insights into your AI search visibility, traffic behavior, and customer journeys. AI Search Analytics empowers brands to identify growth opportunities and measure the true impact of their strategies.",
  },
};
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Search Analytics",
  name: "AI Search Analytics",
  url: "https:/getaimonitor.com/services/ai-search-analytics",
  description:
    "AI Monitor's AI Search Analytics provides real-time, actionable insights into search visibility, traffic behavior, and customer journeys. This service helps businesses uncover growth opportunities and measure the impact of their AI-driven strategies.",
  provider: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://aim-new.vercel.app",
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
    audienceType: "B2B SaaS Companies, Enterprises, and Global Brands",
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients start seeing early traction in 6–8 weeks, with significant visibility gains over 3–6 months. The exact timeline depends on your current digital footprint and competition.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use AI tools to implement the strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We combine human expertise with advanced AI tools for prompt monitoring, competitor benchmarking, and content optimization. This hybrid approach delivers faster insights and more effective execution.",
      },
    },
    {
      "@type": "Question",
      name: "What if AI search algorithms change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We continuously monitor shifts in AI algorithms and adapt your strategy proactively. Think of us as your “early warning system”, making sure you stay ahead of changes instead of reacting after competitors.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track AI visibility, keyword placements, traffic quality, and conversion metrics. Monthly reports make it easy to see how your AI presence translates into real business impact.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to change my website’s tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Most brands can optimize their AI visibility with improvements in content, structure, and schema without a full tech overhaul. If changes are needed, we guide you step-by-step.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It’s simple: book a discovery call with our team. We’ll audit your current AI search readiness and design a tailored roadmap to secure your brand’s visibility.",
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
