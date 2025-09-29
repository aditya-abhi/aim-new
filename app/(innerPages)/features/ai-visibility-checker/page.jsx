import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/feature-pages/ai-visibility-checker/Hero";
import Faq from "@/components/feature-pages/ai-visibility-checker/Faqs";
import Testimonials from "@/components/feature-pages/ai-visibility-checker/Testimonials";
import Cta from "@/components/feature-pages/ai-visibility-checker/Cta";
import Problem from "@/components/feature-pages/ai-visibility-checker/Problem";
import Target from "@/components/feature-pages/ai-visibility-checker/Target";
import Report from "@/components/feature-pages/ai-visibility-checker/Report";
import Features from "@/components/feature-pages/ai-visibility-checker/Features";
import Features2 from "@/components/feature-pages/ai-visibility-checker/Features2";
import Steps from "@/components/feature-pages/ai-visibility-checker/Steps";

export const metadata = {
  title: "Open-Source AI Visibility & Competitor Tracking || AI Monitor",
  description:
    "Track your brand’s AI reputation, updated hourly, with the metrics that actually matter with the help of AI Monitor.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Visibility Checker | AI  Monitor",
  url: "https://getaimonitor.com/features/ai-visibility-checker",
  description:
    "AI Visibility Checker by AI Monitor helps brands track their presence in AI platforms like ChatGPT, Gemini, and Perplexity. Get insights into how AI algorithms perceive your brand and boost visibility.",
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
      url: "https://getaimonitor.com/logo.png",
    },
  },
  image: {
    "@type": "ImageObject",
    url: "https://getaimonitor.com/feature-image.jpg",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://getaimonitor.com/features/ai-visibility-checker",
  },
  potentialAction: {
    "@type": "ReadAction",
    target: ["https://getaimonitor.com/features/ai-visibility-checker"],
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does the AI Brand Report Card measure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI Brand Report Card measures how your brand is represented across leading generative engines like ChatGPT, Gemini, Perplexity, and more. It tracks citations, mentions, domain references, and competitive positioning, giving you a clear, data-backed view of how AI platforms interpret and surface your brand in real-world responses.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from SEO or Google Analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO tools or Google Analytics track search engine performance and how many clicks you get. They do not monitor AI engines. Google Analytics can’t show how often ChatGPT or Perplexity mentions your brand. This tool fills the blind spot by giving you AI-first visibility.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of insights will I see in my dashboard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You’ll see brand citations, domain references, sentiment analysis, competitor benchmarking, AI-driven queries, even personalized recommendations to improve your AI presence and much more.",
      },
    },
    {
      "@type": "Question",
      name: "How often is the data updated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your AI Brand Dashboard refreshes daily, giving you near real-time insight into how generative platforms like ChatGPT, Gemini, and Perplexity are referencing your brand. That means you're never in the dark about how AI engines are shaping your public narrative.",
      },
    },
    {
      "@type": "Question",
      name: "Can I compare my brand with competitors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Competitor Benchmarking feature reveals how often rival brands are mentioned, the sentiment behind those mentions, and where they’re gaining more visibility across AI-generated answers. It’s your edge for spotting gaps, tracking momentum, and staying one step ahead in the AI narrative.",
      },
    },
    {
      "@type": "Question",
      name: "Is this tool open-source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You own your data, can customize your dashboard, and avoid vendor lock-in. Everything is transparent and adaptable to your needs.",
      },
    },
    {
      "@type": "Question",
      name: "What’s the biggest benefit for my brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clarity! No more guesswork about how AI platforms perceive or present your brand. The AI Brand Report delivers the metrics that matter: citations, visibility, sentiment, and competitive benchmarks, all in one unified dashboard. It’s your lens into the AI narrative shaping public perception.",
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
      {/* ... */}
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="page-wrapper uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
            <Header />
            <div id="wrapper" className="wrap">
              <Hero />
              <Report />
              <Features />
              {/* <Features2 /> */}
              <Steps />
              {/* <Problem />
            <Target /> */}
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
