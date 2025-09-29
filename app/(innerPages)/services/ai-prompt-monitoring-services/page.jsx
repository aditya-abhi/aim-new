import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/servicePages/promptMonitoring/Hero";
import Hero2 from "@/components/servicePages/promptMonitoring/Hero2";
import Problem from "@/components/servicePages/promptMonitoring/Problem";
import Features from "@/components/servicePages/promptMonitoring/Features";
import Process from "@/components/servicePages/promptMonitoring/Process";
import Services from "@/components/servicePages/promptMonitoring/Services";
import Faqs from "@/components/servicePages/promptMonitoring/Faqs";
import Cta from "@/components/servicePages/promptMonitoring/Cta";
import ServiceTimeline from "@/components/servicePages/promptMonitoring/ServiceTimeline";

export const metadata = {
  title: "AI Prompt Monitoring & Optimization || AI Monitor",
  description:
    "AI Prompt Monitoring & Optimization with AI Monitor. Track performance, optimize prompts, and deliver accurate, consistent AI interactions.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://getaimonitor.com/services/ai-prompt-monitoring-services",
  url: "https://getaimonitor.com/services/ai-prompt-monitoring-services",
  name: "AI Prompt Monitoring | AI Monitor",
  description:
    "AI Monitor’s AI Prompt Monitoring service provides real-time intelligence on how your brand and competitors appear in thousands of AI prompts, helping SaaS and enterprise brands improve visibility and market share.",
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
    "https://getaimonitor.com/services/ai-prompt-monitoring-services#service",
  serviceType: "AI Prompt Monitoring",
  name: "AI Prompt Monitoring",
  url: "https://getaimonitor.com/services/ai-prompt-monitoring-services",
  description:
    "AI Prompt Monitoring helps brands track how they appear in AI-generated prompts, monitor competitor visibility, and optimize for AI-driven discovery and citations.",
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
      name: "What is Prompt Monitoring and why do I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prompt Monitoring tracks how users interact with your AI prompts, enabling behavior-based optimization, not just output inspection. It ensures the prompts you craft remain effective across evolving user needs and models.",
      },
    },
    {
      "@type": "Question",
      name: "How soon do we see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You’ll start seeing insights within 4–6 weeks after monitoring setup; prompt optimization and conversion improvements typically follow in 2–3 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use AI tools in your monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We leverage AI to analyze large prompt datasets, detect anomalies, cluster prompt intents, and provide actionable recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "What if my AI model evolves mid-monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We monitor performance drift and update prompt strategies proactively—so your system adapts before your metrics slip.",
      },
    },
    {
      "@type": "Question",
      name: "How do we measure success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track prompt usage growth, completion accuracy, engagement lift, failure reduction, and ROI on refined prompt flows.",
      },
    },
    {
      "@type": "Question",
      name: "Need to change my tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Our monitoring overlays your existing infrastructure. If needed, we guide you through simple instrumentation—no full stack rebuild required.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It’s simple: book an intro call. We’ll audit your current prompt environment and co-design a prompt monitoring roadmap for clarity and control.",
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
