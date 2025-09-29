import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import NextPrevBlogs from "@/components/blogs/components/NextPrevBlogs";
import RelatedBlogs from "@/components/blogs/components/RelatedBlogs";
import AuthorBioShort from "@/components/blogs/components/AuthorBioShort";
import Experiment1 from "@/components/blogs/components/Experiment1";
import Experiment2 from "@/components/blogs/components/Experiment2";
import ZeroClickSearches from "@/components/blogs/ZeroClickSearches";
import ZeroClickSearchesFaq from "@/components/blogs/faqs/ZeroClickSearchesFaq";
export const metadata = {
  title:
    "How Zero Click Searches are Revolutionising SEO and GEO || AI Monitor",
  description:
    "Master zero click searches in the AI era! Learn how GEO replaces traditional SEO as 65% of searches now end without clicks. Adapt your strategy today.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdTechArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://getaimonitor.com/how-zero-click-searches-are-revolutionising-seo-and-geo",
    },
    headline: "How Zero-Click Searches are Revolutionising SEO and GEO",
    description:
      "Explore how zero-click searches are reshaping SEO and geo strategy , why users get answers without leaving SERPs, and what that means for visibility and local search optimization.",
    image:
      "https://getaimonitor.com/assets/images/blog/zero-click-search-main-image.webp",
    author: {
      "@type": "Person",
      name: "AI Monitor",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Monitor",
      logo: {
        "@type": "ImageObject",
        url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
      },
    },
    datePublished: "2025-05-28",
  };
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are zero-click searches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zero-click searches happen when users get answers directly from a search engine or AI tool without clicking any results.",
        },
      },
      {
        "@type": "Question",
        name: "How does feedback impact seo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI tools like ChatGPT provide answers without linking to your site, which can affect referral traffic. But they also offer new opportunities for brand recognition.",
        },
      },
      {
        "@type": "Question",
        name: "How can I optimize for both SEO and GEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Focus on creating high-quality, authoritative content. Use structured data, target question-based keywords, and ensure your content is clear and well-structured for both search engines and AI tools.",
        },
      },
      {
        "@type": "Question",
        name: "Does zero-click increase website traffic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zero-click searches may decrease immediate traffic, but they can boost brand authority and lead to more branded searches later on.",
        },
      },
    ],
  };
  const jsonLdPerson = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Avinash Tripathi",
    url: "https://getaimonitor.com/avinash-tripathi",
    image:
      "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
    sameAs: [
      "https://www.linkedin.com/in/avinash-tripathi-aio-guru/",
      "https://x.com/AI_Search_Guru",
    ],
    jobTitle: "Co - Founder",
    worksFor: {
      "@type": "Organization",
      name: "AI Monitor",
    },
  };
  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdTechArticle).replace(/</g, "\\u003c"),
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
          __html: JSON.stringify(jsonLdPerson).replace(/</g, "\\u003c"),
        }}
      />
      {/* ... */}
      <div className="theme-3 ">
        <div
          className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-tertiary-800 dark:text-gray-200 disable-cursor"
          style={{ overflowX: "clip" }}
        >
          <Header7 />
          <Head
            pageName="How Zero-Click Searches are Revolutionising SEO and GEO"
            src="/assets/images/blog/zero-click-search-main-image.webp"
            publishedOn="May 28, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <ZeroClickSearches />
          <Author />
          <ZeroClickSearchesFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/how-zero-click-searches-are-revolutionising-seo-and-geo/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
