import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Blogs from "@/components/geo-course/Blogs";
import Cta from "@/components/geo-course/Cta";
import Faqs from "@/components/geo-course/Faqs";
import Hero from "@/components/geo-course/Hero";
import EnrollmentForm from "@/components/geo-course/EnrollmentForm";
import About from "@/components/geo-course/About";
// import Achievements from "@/components/geo-course/AchievementsOld";
import Content from "@/components/geo-course/Content";
import Facts from "@/components/geo-course/Facts";
import BestFor from "@/components/geo-course/BestFor";
import Instructor from "@/components/geo-course/Instructor";
import Testimonials from "@/components/geo-course/Testimonials";
import React from "react";
import WhatWillYouLearn from "@/components/geo-course/WhatWillYouLearn";
import Learnings from "@/components/geo-course/Learnings";
import Certificate from "@/components/geo-course/Certificate";
import Achievements from "@/components/geo-course/Achievements";
import Script from "next/script";
export const metadata = {
  title: "AI Monitor || Generative Engine Optimization Course",
  description:
    "Discover the best free Answer Engine Optimization (AEO) course in 2025! Learn how to optimize for AI-driven search and boost visibility.",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://getaimonitor.com/free-courses/best-generative-engine-optimization-geo-course-for-free/",
  name: "Free Generative Engine Optimization (GEO) Course | AI Monitor",
  description:
    "Free Generative Engine Optimization (GEO) course. Learn to optimize content for Generative AI and earn a free certificate from AI Monitor.",
  publisher: {
    "@type": "Organization",
    name: "AI Monitor",
    logo: {
      "@type": "ImageObject",
      url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    },
    sameAs: "https://getaimonitor.com",
  },
  mainEntity: {
    "@type": "Course",
    name: "Generative Engine Optimization (GEO) Course",
    description:
      "Learn Generative Engine Optimization (GEO) strategies to improve AI-driven content visibility. Free course with certificate from AI Monitor.",
    provider: {
      "@type": "Organization",
      name: "AI Monitor",
      sameAs: "https://getaimonitor.com",
    },
  },
};
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Generative Engine Optimization (GEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO is the process of optimizing content to get cited in AI-generated answers on platforms like ChatGPT, Google AI Overviews, Perplexity, and Gemini.",
      },
    },
    {
      "@type": "Question",
      name: "Who should join this course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marketers, SEO professionals, content creators, founders, and anyone wanting to boost brand visibility in AI-driven search results.",
      },
    },
    {
      "@type": "Question",
      name: "Is this GEO course free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It’s a 100% free 7-day training with lessons, tools, templates, and a certificate of completion.",
      },
    },
    {
      "@type": "Question",
      name: "How is GEO different from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO focuses on Google rankings, while GEO focuses on AI citations in platforms like ChatGPT, Gemini, and Perplexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical or SEO experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This course is beginner-friendly and requires no coding or advanced SEO knowledge.",
      },
    },
    {
      "@type": "Question",
      name: "Will I learn how to get cited in ChatGPT and Perplexity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You’ll learn proven strategies to make your content AI-friendly and increase citations across generative engines.",
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
    {
      "@type": "Question",
      name: "How much time do I need daily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Just 30–45 minutes per day to watch lessons, apply strategies, and practice GEO techniques.",
      },
    },
    {
      "@type": "Question",
      name: "Is GEO the future of SEO in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI-driven search is replacing traditional SEO rankings. GEO ensures your content stays visible and cited in AI-generated answers.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enroll in the GEO course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click the “Enroll Now” button on this page, sign up for free, and start learning instantly. You’ll get lifetime access to all lessons, tools, and updates.",
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
              <Learnings />
              {/* <WhatWillYouLearn /> */}
              {/* <EnrollmentForm /> */}
              {/* <Facts /> */}
              <About />
              <Content />
              <Achievements />
              {/* <Achievements /> */}
              <Certificate />
              <Instructor />
              <BestFor />
              <Faqs />
              <Testimonials />
              <Blogs />
              <Cta />
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
      <Script id="mailerlite-universal">
        {`
                (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
                .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
                n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
                (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                ml('account', '1771466');
              `}
      </Script>
    </>
  );
}
