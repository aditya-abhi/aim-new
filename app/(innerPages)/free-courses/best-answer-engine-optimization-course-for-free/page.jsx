import Script from "next/script";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Blogs from "@/components/aeo-course/Blogs";
import Cta from "@/components/aeo-course/Cta";
import Faqs from "@/components/aeo-course/Faqs";
import Hero from "@/components/aeo-course/Hero";
import EnrollmentForm from "@/components/aeo-course/EnrollmentForm";
import About from "@/components/aeo-course/About";
// import Achievements from "@/components/aeo-course/Achievements";
import Content from "@/components/aeo-course/Content";
import Facts from "@/components/aeo-course/Facts";
import BestFor from "@/components/aeo-course/BestFor";
import Instructor from "@/components/aeo-course/Instructor";
import Testimonials from "@/components/aeo-course/Testimonials";
import React from "react";
import Learnings from "@/components/aeo-course/Learnings";
import Certificate from "@/components/aeo-course/Certificate";
import Achievements from "@/components/aeo-course/Achievements";
import MailerLiteFormButton from "@/components/common/MailerButton";
export const metadata = {
  title: "AI Monitor || Answer Engine Optimization Course",
  description:
    "Explore the best Generative Engine Optimization (GEO) course to master AI-driven SEO, content automation, and ranking strategies. Enroll now",
};
const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://getaimonitor.com/free-courses/best-answer-engine-optimization-course-for-free",
  name: "Free Answer Engine Optimization (AEO) Course | AI Monitor",
  description:
    "Free Answer Engine Optimization (AEO) course. Learn to optimize content for Answer Engine platforms and earn a free certificate from AI Monitor.",
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
    name: "Answer Engine Optimization (AEO) Course",
    description:
      "Learn strategies to optimize content for answer engines. This free course from AI Monitor teaches you how to improve visibility on AI-driven answer platforms.",
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
      name: "What is Answer Engine Optimization (AEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AEO is the process of optimizing content to get cited and surfaced in AI-generated answers on platforms like ChatGPT, Google AI Overviews, Perplexity, and Gemini.",
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
      name: "Is this AEO course free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It’s a 100% free 7-day training with lessons, tools, templates, and a certificate of completion.",
      },
    },
    {
      "@type": "Question",
      name: "How is AEO different from SEO?",
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
      name: "Is AEO the future of search in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI-powered answer engines are redefining search visibility, and AEO ensures your content stays discoverable and cited.",
      },
    },
    {
      "@type": "Question",
      name: "How do I enroll in the AEO course?",
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
              {/* <EnrollmentForm /> */}
              {/* <Facts /> */}
              <About />
              <Content />
              <Achievements />
              {/* <Achievements /> */}
              <Certificate />
              <Instructor />
              <BestFor />
              {/* <MailerLiteFormButton /> */}
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
