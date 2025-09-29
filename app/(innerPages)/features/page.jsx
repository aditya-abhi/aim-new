import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/features/Hero";
import Faq from "@/components/features/Faqs";
import Testimonials from "@/components/features/Testimonials";
import Cta from "@/components/features/Cta";
import Problem from "@/components/features/Problem";
import Target from "@/components/features/Target";
import Features from "@/components/features/Features";
export const metadata = {
  title:
    "Best AI Visibility Tool for Getting Cited in AI Responses || AI Monitor",
  description:
    "Helping brands to get cited in AI responses with the help of modern suit of features from AI Monitor.",
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
  "@type": "Service",
  serviceType: "AI Brand Monitoring",
  provider: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com",
    logo: "https://getaimonitor.com/assets/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-96505-10773",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: "English",
    },
  },
  description:
    "AI Monitor platform offers real-time AI brand visibility tracking, sentiment analysis, and competitor benchmarking.",
  offers: {
    "@type": "Offer",
    url: "https://getaimonitor.com/features",
    priceCurrency: "INR",
    price: "₹1999/month",
    eligibleRegion: "IN",
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI Monitor and why do I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Monitor is an AI-driven platform that helps businesses track their brand's visibility across AI-powered search engines like ChatGPT and Google AI. It enables you to monitor mentions, sentiment, and competitor positioning in real-time, ensuring your brand maintains a strong presence in the evolving digital landscape.",
      },
    },
    {
      "@type": "Question",
      name: "How is AI Monitor different from traditional SEO tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike traditional SEO tools that focus on keyword rankings and backlinks, AI Monitor emphasizes AI-generated content visibility. It tracks how your brand is represented in AI-driven answers, helping you optimize your presence in AI search results.",
      },
    },
    {
      "@type": "Question",
      name: "What features does AI Monitor provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Monitor offers features like real-time AI brand visibility tracking, sentiment analysis, competitor benchmarking, and insights into AI-generated content representation. It helps businesses understand and improve their positioning in AI-powered search engines.",
      },
    },
    {
      "@type": "Question",
      name: "Who can benefit from AI Monitor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B2B SaaS companies, digital marketing agencies, startups, and small businesses can benefit from AI Monitor. It assists them in ensuring their brand is visible and accurately represented in AI-driven search results, leading to better customer engagement and lead generation.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI Monitor open-source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AI Monitor is an open-source platform, allowing businesses to customize and integrate it according to their specific needs and workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I start seeing insights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Monitor provides real-time insights, allowing businesses to start tracking their brand's visibility and performance across AI-powered search engines immediately after setup.",
      },
    },
    {
      "@type": "Question",
      name: "Can I compare my brand with competitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AI Monitor offers competitor benchmarking features, enabling businesses to compare their brand's visibility and sentiment with that of their competitors in AI-generated content.",
      },
    },
    {
      "@type": "Question",
      name: "Will this improve my business outcomes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By providing insights into how your brand is represented in AI-driven search results, AI Monitor helps businesses optimize their digital presence, leading to improved customer engagement, lead generation, and overall business outcomes.",
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
              <Hero />
              <Problem />
              <Target />
              <Features />
              <Faq />
              <Testimonials />
              <Cta />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
