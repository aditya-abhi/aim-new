import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero2 from "@/components/servicePages/backlinks/Hero2";
import Problem from "@/components/servicePages/backlinks/Problem";
import Features from "@/components/servicePages/backlinks/Features";
import Process from "@/components/servicePages/saasSeo/Process";
import Services from "@/components/servicePages/backlinks/Services";
import Faqs from "@/components/servicePages/backlinks/Faqs";
import Cta from "@/components/servicePages/backlinks/Cta";
import ServiceTimeline from "@/components/servicePages/backlinks/ServiceTimeline";

export const metadata = {
  title: "High-Quality Backlinks & Authority SEO || AI Monitor",
  description:
    "Boost rankings and Domain Authority. We build high-quality backlinks and brand mentions that grow authority, visibility, and measurable ROI.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id":
    "https://getaimonitor.com/services/backlinks-and-brand-mentions-buying-service",
  url: "https://getaimonitor.com/services/backlinks-and-brand-mentions-buying-service",
  name: "Backlinks & Brand Mentions Service | AI Monitor",
  description:
    "AI Monitor’s Backlinks & Brand Mentions service helps SaaS and enterprise brands build credible authority via high-quality backlinks and strategic brand mentions on trusted publications and AI-citing domains.",
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
    "https://getaimonitor.com/services/backlinks-and-brand-mentions-buying-service#service",
  serviceType: "Backlinks & Brand Mentions",
  name: "Backlinks & Brand Mentions Buying Service",
  url: "https://getaimonitor.com/services/backlinks-and-brand-mentions-buying-service",
  description:
    "Our Backlinks & Brand Mentions buying service secures placements and citations on high-authority sites and AI-visible publications to improve your brand’s credibility and discoverability.",
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
      name: "Are your backlinks safe and Google-compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. We only build white-hat backlinks that fully comply with Google’s latest guidelines. Every placement is on trusted, relevant, and high-quality websites, ensuring your site’s safety and long-term ranking stability.",
      },
    },
    {
      "@type": "Question",
      name: "How do you select websites for backlinks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We focus on niche-relevant, high-authority domains with genuine organic traffic and a strong reputation. Each site is manually vetted based on relevance, trustworthiness, and domain authority to maximize your visibility and results.",
      },
    },
    {
      "@type": "Question",
      name: "How soon will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients start seeing improvements in rankings, organic traffic, and brand visibility within 2–3 months. However, timelines can vary depending on your industry, competition, and existing authority.",
      },
    },
    {
      "@type": "Question",
      name: "Do backlinks and mentions really improve visibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Backlinks send strong authority signals to search engines, improving rankings and traffic. Brand mentions, even without a direct link, enhance your reputation, credibility, and visibility within your industry, helping you appear in more relevant searches.",
      },
    },
    {
      "@type": "Question",
      name: "Can you guarantee #1 rankings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No ethical SEO provider can guarantee #1 rankings. However, our proven strategies focus on securing authoritative placements and building a strong backlink profile, which significantly boosts your chances of dominating search results over time.",
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
