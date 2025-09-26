import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Cta from "@/components/homes/home-new/Cta";
import Faqs from "@/components/homes/home-new/Faqs";
import Features2 from "@/components/homes/home-new/Features2";
import Articles from "@/components/homes/home-new/Articles";
import Hero from "@/components/homes/home-new/Hero3";
import Pricing2 from "@/components/homes/home-new/Pricing2";
import Testimonials2 from "@/components/homes/home-new/Testimonials2";
import FeaturesVideo from "@/components/homes/home-new/FeaturesVideo";
import Countries from "@/components/homes/home-new/Countries";
import Purpose from "@/components/homes/home-new/Purpose";
import Timeline from "@/components/homes/home-new/Timeline";
import Awards from "@/components/homes/home-new/Awards";
import Resources from "@/components/homes/home-new/Resources";
import CaseStudies from "@/components/homes/home-new/CaseStudies";
import Services from "@/components/homes/home-new/Services";
import BrandSlider from "@/components/homes/home-new/BrandSlider";

import React from "react";
import Impact from "@/components/homes/home-new/Impact";
export const metadata = {
  title: "AI Monitor | Boost Your Brand Visibility in AI Search",
  description:
    "AI Monitor, the world’s first open-source tool for GEO, AEO, and AIO, helps brands optimize for AI search to enhance AI Visibility to stay ahead in the AI-driven search era.",
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "AI Monitor",
  url: "https://getaimonitor.com/",
  logo: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
  sameAs: [
    "https://www.facebook.com/people/AI-Monitor/61572471364497/",
    "https://x.com/getAiMonitor",
    "https://www.instagram.com/aimonitorofficial/",
    "https://www.youtube.com/@AI_MonitorOffiial",
    "https://www.linkedin.com/company/get-ai-monitor/",
    "https://getaimonitor.com/",
  ],
};
const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": ["WebSite", "Organization"],
  name: "AI Monitor",
  url: "https://getaimonitor.com/",
  description:
    "AI Monitor is a powerful tool that helps track, analyze, and optimize AI search results across ChatGPT, Google Gemini, and other AI-powered platforms.",
  logo: "https://aim-new.vercel.app/assets/images/common/ai-monitor-logo-dark.webp",
  sameAs: [
    "https://x.com/getAiMonitor",
    "https://www.youtube.com/@AI_MonitorOffiial",
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://getaimonitor.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
const jsonLdSoftwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Monitor",
  url: "https://getaimonitor.com/",
  applicationCategory: "MarketingSoftwareApplication",
  applicationSubCategory: "Generative Engine Optimization (GEO) Tool",
  operatingSystem: "Web Browser",
  description:
    "AI Monitor is an AI-powered platform for optimizing brand presence in generative search engines like ChatGPT, Google AI Overviews, and Perplexity.",
  featureList: [
    "AI Search Optimization",
    "Brand Mention Tracking",
    "Performance Analytics",
    "Multi-platform Support",
    "Real-time Monitoring",
  ],
  publisher: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
      width: 150,
      height: 45,
    },
    sameAs: [
      "https://www.instagram.com/aimonitorofficial/",
      "https://x.com/getAiMonitor",
      "https://www.facebook.com/people/AI-Monitor/61572471364497/",
      "https://www.youtube.com/@AI_MonitorOffiial",
    ],
  },
  offers: {
    "@type": "Offer",
    url: "https://getaimonitor.com/pricing",
    priceCurrency: "USD",
    price: "19",
    availability: "https://schema.org/InStock",
    eligibleRegion: {
      "@type": "Place",
      name: "Global",
    },
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI Monitor, and why should my brand care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Monitor is a platform that tracks how your brand is mentioned, ranked, and displayed across AI-powered search engines like ChatGPT, Google AI Overviews, Perplexity, and more. With millions of people relying on AI for answers, we help you stay visible, stay relevant, and stay competitive.",
      },
    },
    {
      "@type": "Question",
      name: "How does AI Monitor track brand mentions in AI search results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We analyze AI-generated responses across multiple platforms using real-time monitoring and visibility scoring. Our platform shows where your brand appears, how competitors are ranked, and what AI engines are saying about you so you can own the conversation.",
      },
    },
    {
      "@type": "Question",
      name: "Why is AI visibility important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI-driven platforms are replacing traditional search. More than 60% of users now get answers directly from AI Overviews, ChatGPT, and Perplexity, bypassing Google’s blue links. If your brand isn’t visible there, you’re invisible to your customers.",
      },
    },
    {
      "@type": "Question",
      name: "What makes AI Monitor different from SEO tools like Ahrefs or Semrush?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO tools measure website rankings on Google. AI Monitor focuses on AI-driven discovery where answers come from chatbots, summaries, and AI Overviews, not just links. We track Generative Engines or Answer Engines like ChatGPT, Perplexity and much more, which is the next frontier of SEO.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI Monitor help us outrank competitors in ChatGPT or Google AI Overviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We don’t just track your visibility; we identify content gaps, recommend AI-friendly optimization strategies, and provide actionable insights to boost your brand’s inclusion rate across major AI engines.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI Monitor suitable for all industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Whether you’re in B2B SaaS, eCommerce, finance, healthcare, or media, our platform is designed to help brands of all sizes monitor AI mentions and optimize for AI-first search experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical expertise to use AI Monitor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. We designed AI Monitor to be marketer-friendly. No code, no complex setups—just clear insights, visual dashboards, and actionable recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "How secure is my data on AI Monitor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We take privacy and security seriously. Our open-source foundation ensures transparency, and we comply with enterprise-grade data security standards to keep your information safe.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with AI Monitor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start by requesting a free AI Brand Report or booking a personalized demo. Getting started is simple: just sign up for a free account, add your brand or domain, and instantly access your AI visibility dashboard. No setup hassle, no technical expertise required—just immediate insights into how AI platforms are interpreting and surfacing your brand.",
      },
    },
  ],
};
const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Monitor",
  url: "https://getaimonitor.com/",
  logo: "https://aim-new.vercel.app/assets/images/common/ai-monitor-logo-dark.webp",
  serviceType:
    "Generative Engine Optimization (GEO) & Answer Engine Optimization (AEO)",
  description:
    "AI Monitor is an open-source tool for Artificial Intelligence Optimization (AIO), providing GEO, AEO, AI brand monitoring, and visibility tracking across generative AI platforms.",
  provider: {
    "@type": "Organization",
    name: "AI Monitor",
    url: "https://getaimonitor.com/",
    logo: "https://aim-new.vercel.app/assets/images/common/ai-monitor-logo-dark.webp",
    sameAs: [
      "https://www.linkedin.com/company/get-ai-monitor/",
      "https://www.instagram.com/aimonitorofficial/",
      "https://x.com/getAiMonitor",
      "https://www.facebook.com/people/AI-Monitor/61572471364497/",
      "https://www.youtube.com/@AI_MonitorOffiial",
    ],
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  offers: [
    {
      "@type": "Offer",
      name: "DIY Plan",
      url: "https://getaimonitor.com/pricing",
      priceCurrency: "USD",
      price: "19",
      description: "Monitor 10 AI prompts; self-manage your GEO strategy",
    },
    {
      "@type": "Offer",
      name: "Fully Managed Plan",
      url: "https://getaimonitor.com/pricing",
      priceCurrency: "USD",
      price: "XX",
      description: "End-to-end GEO service managed by AI Monitor experts",
    },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "B2B enterprises, marketing agencies, brands",
  },
};

export default function page() {
  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdOrg).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebSite).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdSoftwareApp).replace(/</g, "\\u003c"),
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
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <Hero />
              {/* <Brands /> */}
              <BrandSlider />
              {/* <Tools /> */}
              <Features2 />
              <Impact />
              {/* <Features /> */}
              <FeaturesVideo />
              <Purpose />
              <Services />
              <Resources />
              <CaseStudies />
              {/* <Blogs /> */}
              <Articles />
              {/* <Brands2 /> */}
              {/* <Pricing2 /> */}
              {/* <Pricing /> */}
              <Pricing2 />
              <Timeline />
              <Testimonials2 />
              <Awards />
              {/* <Blog /> */}
              <Faqs />
              <Countries />
              <Cta />
            </div>
            <Footer7 />
          </div>{" "}
          {/* <Script
            src="https://js.appointlet.com/"
            strategy="afterInteractive"
          /> */}
        </div>
      </div>
    </>
  );
}
