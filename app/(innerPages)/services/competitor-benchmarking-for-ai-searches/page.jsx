import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/competitorBenchmarking/Hero2";
import Problem from "@/components/servicePages/competitorBenchmarking/Problem";
import Features from "@/components/servicePages/competitorBenchmarking/Features";
import Process from "@/components/servicePages/competitorBenchmarking/Process";
import Services from "@/components/servicePages/competitorBenchmarking/Services";
import Faqs from "@/components/servicePages/competitorBenchmarking/Faqs";
import Cta from "@/components/servicePages/competitorBenchmarking/Cta";
import ServiceTimeline from "@/components/servicePages/competitorBenchmarking/ServiceTimeline";

export const metadata = {
  title: "AI Competitor Benchmarking Service || AI Monitor",
  description:
    "Outperform rivals with AI-driven competitor benchmarking. Uncover gaps, track performance, and gain the clarity to drive smarter growth.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id":
    "https://getaimonitor.com/services/competitor-benchmarking-for-ai-searches",
  url: "https://getaimonitor.com/services/competitor-benchmarking-for-ai-searches",
  name: "Competitor Benchmarking for AI Search | AI Monitor",
  description:
    "AI Monitor’s Competitor Benchmarking for AI Search analyzes your competition across AI-driven and traditional platforms to help SAAS and enterprise brands capture market share and improve visibility.",
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
    "https://getaimonitor.com/services/competitor-benchmarking-for-ai-searches#service",
  serviceType: "Competitor Benchmarking for AI Search",
  name: "Competitor Benchmarking for AI Search",
  url: "https://getaimonitor.com/services/competitor-benchmarking-for-ai-searches",
  description:
    "Our Competitor Benchmarking service assesses how your brand performs in AI search platforms like ChatGPT, Perplexity, and Google AI relative to competitors, and helps you identify performance gaps and opportunities.",
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
      name: "What is competitor benchmarking, and why do I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Competitor benchmarking compares your performance including traffic, conversions, pricing, and engagement directly against rivals. It gives you context, not just metrics, and helps you set realistic, goal-winning targets.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients begin tracking competitor movement within 5-6 weeks and see strategic gains over 3–4 months, depending on how sophisticated your competitive landscape is.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use AI tools to implement the strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We use human strategy with AI models to surface competitor intelligence, performance gaps, and untapped opportunities faster and more accurately.",
      },
    },
    {
      "@type": "Question",
      name: "What if competitor dynamics shift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our platform continuously monitors competitor metrics and alerts you in real time keeping you ahead of changes, rather than scrambling to catch up.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track your competitive ranking across KPIs like visibility, speed, engagement, and conversions, plus your delta versus rivals. Monthly benchmarking reports show you exactly how you stack up.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to overhaul my tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Most brands can start benchmarking with existing analytics and AI tools. We integrate seamlessly and guide you through minimal adjustments, if needed.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply book your complimentary Competitive Insight Call. We’ll audit your benchmarking readiness and co-design a roadmap to outshine your competition.",
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
