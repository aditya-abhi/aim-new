import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/servicePages/marketingAnalytics/Hero";
import Hero2 from "@/components/servicePages/marketingAnalytics/Hero2";
import Problem from "@/components/servicePages/marketingAnalytics/Problem";
import Features from "@/components/servicePages/marketingAnalytics/Features";
import Process from "@/components/servicePages/marketingAnalytics/Process";
import Services from "@/components/servicePages/marketingAnalytics/Services";
import Faqs from "@/components/servicePages/marketingAnalytics/Faqs";
import Cta from "@/components/servicePages/marketingAnalytics/Cta";
import ServiceTimeline from "@/components/servicePages/aiSearchAnalytics/ServiceTimeline";

export const metadata = {
  title: "AI Marketing Analytics Service || AI Monitor",
  description:
    "AI Monitor helps brands transform data into action. Our AI Marketing Analytics delivers insights, predictions, and measurable marketing results.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://getaimonitor.com/services/ai-marketing-analytics-services",
  url: "https://getaimonitor.com/services/ai-marketing-analytics-services",
  name: "Marketing Analytics | AI Monitor",
  isPartOf: {
    "@id": "https://getaimonitor.com/services/ai-marketing-analytics-services",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
  },
  thumbnailUrl:
    "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
  datePublished: "2025-01-01",
  dateModified: "2025-09-11",
  description:
    "AI Monitor's Marketing Analytics service delivers real-time insights into AI-driven search visibility, traffic patterns, and customer journeys with actionable dashboards.",
  inLanguage: "en",
};
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://getaimonitor.com/services/ai-marketing-analytics-services",
  serviceType: "AI Marketing Analytics",
  name: "Marketing Analytics",
  provider: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
  },
  url: "https://getaimonitor.com/services/ai-marketing-analytics-services",
  description:
    "Our AI Marketing Analytics service provides SaaS and enterprise brands with real-time dashboards for AI search visibility, traffic attribution, customer journeys, and growth opportunities.",
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    url: "https://getaimonitor.com/services/ai-marketing-analytics-services",
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
      name: "How does AI improve marketing analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI enhances marketing analytics by processing vast amounts of data to uncover patterns and insights that human analysts might miss. This leads to more accurate predictions and personalized marketing strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What industries can benefit from AI marketing analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtually every industry can benefit, including retail, B2B SaaS, healthcare, finance, and technology, by gaining a deeper understanding of customer behavior and optimizing marketing efforts accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI marketing analytics suitable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AI marketing analytics can be scaled to fit businesses of all sizes, providing valuable insights that can drive growth and efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I see results from AI marketing analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While initial insights can be gathered within weeks, significant improvements in marketing performance typically become evident within 2 to 3 months, depending on the complexity of the strategies implemented.",
      },
    },
    {
      "@type": "Question",
      name: "Will AI replace marketing teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. AI enhances human expertise by automating data analysis, trend detection, and reporting, allowing teams to focus on strategy and creative execution.",
      },
    },
    {
      "@type": "Question",
      name: "How secure is my marketing data with AI tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leading AI analytics platforms follow strict security standards, including encryption, access controls, and compliance with global data protection regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI analytics improve personalization in marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. AI identifies individual user preferences and behavior patterns, enabling hyper-personalized messaging, recommendations, and campaigns.",
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
