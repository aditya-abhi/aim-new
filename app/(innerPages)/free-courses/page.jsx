import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Hero from "@/components/courses/Hero";
import Need from "@/components/courses/Need";
import Courses from "@/components/courses/Courses";
import DesignedFor from "@/components/courses/DesignedFor";
import Testtimonials from "@/components/courses/Testimonials";
import Blogs from "@/components/courses/Blogs";
import Cta from "@/components/courses/Cta";
import Faqs from "@/components/courses/Faqs";
import React from "react";
import Features from "@/components/courses/Features";
export const metadata = {
  title: "Free GEO & AEO Courses with Certification || AI Monitor",
  description:
    "Enroll in free GEO and AEO courses with certification. Learn Answer Engine Optimization and Generative Engine Optimization to boost your AI and digital marketing skills",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://getaimonitor.com/free-courses",
  name: "Free Courses — AI Monitor",
  description:
    "Learn for free with AI Monitor. Take Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) courses to boost your AI and digital marketing skills.",
  publisher: {
    "@type": "Organization",
    name: "AI Monitor",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
    sameAs: "https://getaimonitor.com",
  },
  hasPart: [
    {
      "@type": "Course",
      name: "Answer Engine Optimization (AEO) Course",
      description:
        "Free course on Answer Engine Optimization, teaching strategies to optimize content for AI-driven platforms.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        sameAs: "https://getaimonitor.com",
      },
    },
    {
      "@type": "Course",
      name: "Generative Engine Optimization (GEO) Course",
      description:
        "Free course on Generative Engine Optimization, covering AI content generation and optimization strategies.",
      provider: {
        "@type": "Organization",
        name: "AI Monitor",
        sameAs: "https://getaimonitor.com",
      },
    },
  ],
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Answer Engine Optimization (AEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Answer Engine Optimization (AEO) is the process of optimizing your content so AI-powered answer engines like ChatGPT, Bing AI, or Google AI can directly use it to answer user questions. Unlike traditional SEO, which focuses on ranking web pages, AEO focuses on making your content readable, structured, and trustworthy so it can become the source of the actual answer.",
      },
    },
    {
      "@type": "Question",
      name: "What is Generative Engine Optimization (GEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generative Engine Optimization (GEO) is the practice of optimizing content specifically for AI-powered generative engines, like ChatGPT, Bard, or Bing AI, so that these engines can create high-quality responses using your content. Unlike traditional SEO or even AEO, which focus on visibility or direct answers, GEO focuses on influencing AI-generated content by providing clear, structured, and authoritative source material.",
      },
    },
    {
      "@type": "Question",
      name: "Who should take these courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These courses are designed for digital marketers, SEO professionals, brand managers, content strategists, and anyone aiming to stay visible in AI-driven search platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Are the AEO & GEO courses free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Both courses are completely free, with full access to practical frameworks, exercises, and step-by-step strategies.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need prior AI or SEO experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior experience is required. Courses are suitable for beginners as well as experienced professionals, covering foundational concepts and advanced strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What will I gain from completing these courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You’ll learn how to optimize for Answer Engines and Generative Engines, understand AIO and LLM SEO, boost your brand visibility, and track your presence across AI-driven platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Can I access the courses on mobile or tablet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Both AEO and GEO courses are fully responsive and accessible on all devices.",
      },
    },
    {
      "@type": "Question",
      name: "Will I receive a certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! After completing each course, you’ll get a free certificate of completion to showcase your AI visibility expertise.",
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
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <Hero />
              <Need />
              <Features />
              <Courses />
              <DesignedFor />
              <Testtimonials />
              <Faqs />
              <Blogs />
              <Cta />
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
