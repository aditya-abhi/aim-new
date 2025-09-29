import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/aeoService/Hero2";
import Problem from "@/components/servicePages/aeoService/Problem";
import Features from "@/components/servicePages/aeoService/Features";
import Process from "@/components/servicePages/aeoService/Process";
import Services from "@/components/servicePages/aeoService/Services";
import Faqs from "@/components/servicePages/aeoService/Faqs";
import Cta from "@/components/servicePages/aeoService/Cta";
import ServiceTimeline from "@/components/servicePages/aeoService/ServiceTimeline";

export const metadata = {
  title: "Answer Engine Optimization (AEO) & AI SEO Services || AI Monitor",
  description:
    "Boost visibility in AI-driven search. Answer Engine Optimization (AEO) Services - optimize your content for Generative AI",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AEO Services",
  url: "https://getaimonitor.com/services/answer-engine-optimization-aeo-service",
  description:
    "Discover AI Monitor’s Answer Engine Optimization (AEO) Services, designed to help SaaS and enterprise brands gain visibility in AI-driven answer engines like ChatGPT, Perplexity, Bing Copilot, and Google AI Overviews.",
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
    "@type": "Service",
    serviceType: "Answer Engine Optimization (AEO)",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
  },
};
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Answer Engine Optimization (AEO)",
  name: "AEO Services",
  url: "https://getaimonitor.com/services/answer-engine-optimization-aeo-service",
  description:
    "AI Monitor’s AEO Services optimize your brand for AI-driven answer engines. We ensure your business is cited and recommended directly in AI-generated responses, boosting authority and conversions.",
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
      name: "What is Answer Engine Optimization (AEO), and why is it important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Answer Engine Optimization (AEO) is the process of optimizing your content so AI engines select your brand as the source of answers on platforms like Google AI Overviews, Perplexity, ChatGPT, Gemini, and Bing Copilot. With AI-generated summaries powering 25%+ of searches, brands must adapt or risk becoming invisible.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results with AEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brands typically see improved AI citation rates and direct answer inclusion within 3–6 months. We use AI-first structuring, entity optimization, and schema-driven enhancements to accelerate results.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use AI tools to implement AEO strategies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our AEO framework is designed to help brands thrive in AI-driven environments by combining deep insight with actionable strategy. We begin with AI query intelligence, analyzing real user questions to uncover intent and identify high-impact opportunities. Next, our generative engine coverage mapping reveals visibility gaps across platforms like ChatGPT, Perplexity, and Google AI—pinpointing where your brand is missing from key conversations. Finally, our monitoring dashboards track citations, mentions, and brand presence across AI platforms, giving you a clear view of performance and progress over time.",
      },
    },
    {
      "@type": "Question",
      name: "What if AI algorithms change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Answer Engine Optimization (AEO) is an adaptive strategy. We monitor algorithm updates in real-time across Google, Perplexity, Gemini, and ChatGPT — updating your AEO roadmap instantly.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure AEO success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We track AI-specific KPIs that go beyond traditional analytics, giving you a clear view of how your brand performs in generative environments. Our answer inclusion rate reveals how often your content is selected by AI engines to answer real user queries. We monitor brand citation growth to measure how frequently your brand is mentioned across platforms like ChatGPT, Perplexity, and Google AI. With AI-driven traffic, we identify visitors sourced directly from AI-generated responses—an emerging signal of influence. And our competitive benchmarks show how your visibility stacks up against key competitors, helping you stay ahead in the AI-first landscape.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to change my website’s tech stack for AEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. In most cases, there’s no need to overhaul your CMS or tech stack—we integrate seamlessly with what you already use. Our enhancements focus on structured data and schema, ensuring your content is machine-readable and primed for AI indexing. We apply entity-based optimizations to strengthen your brand’s semantic relevance across generative platforms. And with AI-friendly formatting, we make it easier for engines to parse and surface your content quickly and accurately. It’s all about making your existing setup smarter, not heavier.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with AEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course. When you book a free AEO strategy call, we dive straight into your brand’s current AI visibility—auditing how and where you're showing up across platforms like ChatGPT, Perplexity, and Google AI. From there, we craft a personalized roadmap tailored to your goals, designed to elevate your presence in AI-generated answers and position your brand for long-term dominance in the generative search landscape. It’s not just a consultation—it’s your launchpad into the future of discoverability.",
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
