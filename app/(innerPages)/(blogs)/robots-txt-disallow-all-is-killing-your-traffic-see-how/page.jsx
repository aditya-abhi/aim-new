import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import Blog1Faqs from "@/components/blogs/faqs/Blog1Faqs";
import NextPrevBlogs from "@/components/blogs/components/NextPrevBlogs";
import RelatedBlogs from "@/components/blogs/components/RelatedBlogs";
import AuthorBioShort from "@/components/blogs/components/AuthorBioShort";
import Experiment1 from "@/components/blogs/components/Experiment1";
import Experiment2 from "@/components/blogs/components/Experiment2";
import RobotsTXTDisallowAll from "@/components/blogs/RobotsTXTDisallowAll";
import RobotsTXTDisallowAllFaq from "@/components/blogs/faqs/RobotsTXTDisallowAllFaq";
export const metadata = {
  title:
    "Robots.txt Disallow all is killing your AI Search Traffic || AI Monitor",
  description:
    "Blocking AI bots with robots.txt disallow all can cripple site visibility—just like blocking Google did in the 90s. Optimize for AI crawlers &amp; boost SEO now",
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
      "@id": "/robots-txt-disallow-all-is-killing-your-traffic-see-how",
    },
    headline:
      "Robots.txt Disallow All: Blocking AI Bots is as misguided as blocking Google in the 90s!",
    description:
      "Discover how improperly configuring your robots.txt file can hinder your site's visibility in AI-driven search results. This guide explains the risks of using 'Disallow: /' on live sites and offers best practices to ensure your content remains accessible to AI crawlers while protecting sensitive data.",
    image: "/assets/images/blog/Robots-txtDisallowAll.webp",
    author: {
      "@type": "Person",
      name: "AI Monitor",
      url: "https://getaimonitor.com/avinash-tripathi",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Monitor",
      logo: {
        "@type": "ImageObject",
        url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
      },
    },
    datePublished: "2025-04-23",
  };
  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is blocking all AI bots like GPTBot a bad idea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The act of blocking all AI bots resembles the historic practice of banning Google search engines because it removes your business from AI search capabilities. The action of blocking content from training LLMs results in your brand becoming invisible in generated AI answers which leads to reduced engagement opportunities and visitor traffic.",
        },
      },
      {
        "@type": "Question",
        name: "Is robots.txt a foolproof way to stop AI bots from scraping my site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Robots.txt is a suggestion, not a security measure. Ethical bots (like Googlebot or GPTBot) respect it, but malicious scrapers may ignore it. For sensitive data, use stronger protections like authentication, paywalls, or legal measures (e.g., terms of service).",
        },
      },
      {
        "@type": "Question",
        name: "How do I check if my site is blocking AI crawlers??",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To check if your site is blocked, you need to visit yoursite.com/robots.txt and verify the presence of either User-agent: GPTBot or Disallow: / entries. The use of Disallow: / for all bots will completely conceal your site from every type of interstellar and artificial intelligence tool.",
        },
      },
      {
        "@type": "Question",
        name: "What’s the ideal crawl delay to prevent server overload?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 10-second delay (Crawl-delay: 10) is a good balance—it reduces server strain while letting bots index your content efficiently. Adjust based on your site’s traffic and hosting capacity.",
        },
      },
      {
        "@type": "Question",
        name: "Will AI bots index my site even if I don’t mention them in robots.txt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Most artificial intelligence crawlers, including GPTBot, execute the User-agent: * command. Crawlers will access your site as regular bots do if you do not precisely block them from your robots.txt file. You should block GPTBot by deploying User-agent: GPTBot Disallow: /.",
        },
      },
      {
        "@type": "Question",
        name: "How can I future-proof my robots.txt for AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use User-agent: * in your robots.txt file to allow broad bot access. Make sure public content like /blog/ is accessible to AI crawlers, while sensitive directories such as /private/ are blocked. Include a sitemap to help bots navigate your site efficiently. To stay informed, monitor bot activity using tools like AI Bot Monitor—this helps you track engagement, spot anomalies, and optimize your crawl strategy over time.",
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
            pageName="Robots.txt Disallow All: Blocking AI Bots is as misguided as blocking Google in the 90s!"
            src="/assets/images/blog/Robots-txtDisallowAll.webp"
            publishedOn="Apr 23, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <RobotsTXTDisallowAll />
          <Author />
          <RobotsTXTDisallowAllFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/robots-txt-disallow-all-is-killing-your-traffic-see-how/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
