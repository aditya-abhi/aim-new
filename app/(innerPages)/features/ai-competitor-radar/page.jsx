import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/feature-pages/ai-competitor-radar/Hero";
import Faq from "@/components/feature-pages/ai-competitor-radar/Faqs";
import Testimonials from "@/components/feature-pages/ai-competitor-radar/Testimonials";
import Cta from "@/components/feature-pages/ai-competitor-radar/Cta";
import Report from "@/components/feature-pages/ai-competitor-radar/Report";
import Features from "@/components/feature-pages/ai-competitor-radar/Features";
import Steps from "@/components/feature-pages/ai-competitor-radar/Steps";

export const metadata = {
  title:
    "AI Competitor Radar – Track Brand Visibility & Stay Ahead of Competition",
  description:
    "Discover AI Monitor’s AI Competitor Radar to analyze competitors, track brand visibility, and uncover AI-driven insights. Stay ahead in the era of ChatGPT, Perplexity & Google AI Overviews.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Competitor Radar",
  url: "https://getaimonitor.com/features/ai-competitor-radar",
  description:
    "AI Competitor Radar helps analyze your competitors' online performance, uncover opportunities, and improve your SEO and marketing strategies.",
  mainEntity: {
    "@type": "Service",
    serviceType: "AI Competitor Analysis",
    provider: {
      "@type": "Organization",
      name: "AI Monitor",
      url: "https://getaimonitor.com/",
      logo: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
    description:
      "The AI Competitor Radar gives businesses actionable insights into competitor strategies, helping improve search visibility and marketing performance.",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does the AI Traffic Report actually measure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The AI Traffic Report measures traffic and engagement coming from AI-driven platforms, such as ChatGPT, Copilot, and other AI search engines. It tracks user interactions, page visits, and visibility of your content in AI-generated search results.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from Google Analytics or Search Console?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike Google Analytics or Search Console, which focus on traditional web traffic, the AI Traffic Report focuses specifically on traffic generated via AI-powered search engines and AI assistants, helping businesses understand their brand presence in AI-driven results.",
      },
    },
    {
      "@type": "Question",
      name: "How often is the data updated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The data is updated in real-time or near real-time, allowing you to monitor changes in AI-driven traffic trends and respond quickly to new opportunities or challenges.",
      },
    },
    {
      "@type": "Question",
      name: "Is this tool really open-source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the AI Traffic Report tool is open-source, which means businesses and developers can customize it, integrate it into their workflows, and even contribute to its development.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical skills to use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the tool is designed to be user-friendly. Even non-technical users can set it up and start tracking AI-driven traffic, though technical skills can help with deeper customization and integrations.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track conversions from AI-driven traffic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the AI Traffic Report allows you to track conversions, user actions, and other key metrics from AI-driven traffic sources, helping you measure ROI and business outcomes effectively.",
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
              <Steps />
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
