import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/feature-pages/ai-crawlability-clinic/Hero";
import Faq from "@/components/feature-pages/ai-crawlability-clinic/Faqs";
import Testimonials from "@/components/feature-pages/ai-crawlability-clinic/Testimonials";
import Cta from "@/components/feature-pages/ai-crawlability-clinic/Cta";
import Report from "@/components/feature-pages/ai-crawlability-clinic/Report";
import Features from "@/components/feature-pages/ai-crawlability-clinic/Features";
import Steps from "@/components/feature-pages/ai-crawlability-clinic/Steps";

export const metadata = {
  title:
    "Features || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Crawlability Clinic | AI Monitor",
  url: "https://getaimonitor.com/features/ai-crawlability-clinic",
  description:
    "AI Crawlability Clinic by AI Monitor helps brands ensure their content is discoverable, indexable, and optimized for AI platforms like ChatGPT, Gemini, and Perplexity. Identify crawlability issues and fix them to boost AI-driven visibility.",
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
      width: 150,
      height: 45,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://getaimonitor.com/features/ai-crawlability-clinic",
  },
  potentialAction: {
    "@type": "ReadAction",
    target: "https://getaimonitor.com/features/ai-crawlability-clinic",
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly does the AI Bot Report Card do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It gives you a clear view of which AI bots are crawling your site, like those from ChatGPT, Gemini, or Perplexity. How often they return, and which content they prioritize. You’ll also see whether those crawls lead to actual citations or mentions across AI-generated answers. In short, it reveals how frequently and meaningfully your brand is being indexed by AI engines.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track bots from major AI search engines like ChatGPT or Perplexity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The tool tracks which AI crawlers are visiting your site, including those from ChatGPT, Perplexity, and others—how often they return, and which pages they focus on most. This gives you a clear view of what content is being prioritized and how frequently your brand’s indexed presence is being refreshed across AI engines.",
      },
    },
    {
      "@type": "Question",
      name: "Is this tool really open-source?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! It’s fully open-source. You get complete transparency, total control, and zero vendor lock-in. Customize integrations, extend functionality, and keep your data entirely in your hands. It’s built for flexibility, not dependency.",
      },
    },
    {
      "@type": "Question",
      name: "Will this slow down my site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. The tracker is ultra-lightweight and engineered to run silently in the background, ensuring zero impact on page load times or user experience. Your site’s performance stays fast and seamless.",
      },
    },
    {
      "@type": "Question",
      name: "Can it help me block harmful bots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. With advanced bot fingerprinting, you can allow trusted AI crawlers like Google’s AI Overview, while blocking malicious scrapers, fake traffic, and unauthorized bots. You stay in control of who gets access to your content.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical skills to use it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. The setup is designed to be simple and beginner-friendly. You can complete the initial steps, signing up and entering your domain, without any technical knowledge. For the final step, you’ll just need access to your website’s hosting or CMS to paste a small Pixel code into the section. Once that’s done, your AI Traffic Dashboard goes live, and you’re ready to start tracking AI referrals and web traffic, no coding required.",
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
