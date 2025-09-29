import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import LongTailKeywords from "@/components/podcasts/LongTailKeywords";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title: "Crack AI Search with Long-Tail Keywords || AI Monitor",
  description:
    "Discover how long-tail keywords can boost your visibility in AI-powered search engines. Learn why they’re essential for smarter GEO in 2025.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://getaimonitor.com/target-long-tail-keywords-for-ai-optimization/",
    name: "Target Long-Tail Keywords for AI Optimization | AI Monitor",
    description:
      "Learn how to target long-tail keywords effectively for AI-driven search optimization. Boost your content visibility and ranking with actionable strategies.",
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
      "@type": "Article",
      name: "Target Long-Tail Keywords for AI Optimization",
      url: "https://getaimonitor.com/target-long-tail-keywords-for-ai-optimization/",
      description:
        "This article explains how to identify and target long-tail keywords for AI-driven SEO strategies, helping your content rank higher and attract relevant traffic.",
      datePublished: "2025-09-27",
      author: {
        "@type": "Organization",
        name: "AI Monitor",
      },
    },
  };

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebPage).replace(/</g, "\\u003c"),
        }}
      />
      {/* ... */}
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-tertiary-800 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <LongTailKeywords blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/target-long-tail-keywords-for-ai-optimization/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
