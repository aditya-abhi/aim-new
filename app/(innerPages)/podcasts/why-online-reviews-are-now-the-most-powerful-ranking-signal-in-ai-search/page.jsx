import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import OnlineReviews from "@/components/podcasts/OnlineReviews";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title: "Why Online Reviews are Ranking Singnal in AI Search || AI Monitor",
  description:
    "Learn Why online reviews become the most powerful ranking signal in AI search and how they influence brand visibility and trust in 2025.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://getaimonitor.com/why-online-reviews-are-now-the-most-powerful-ranking-signal-in-ai-search/",
    name: "Why Online Reviews Are the Most Powerful Ranking Signal in AI Search | AI Monitor",
    description:
      "Explore how online reviews have become a dominant ranking factor in AI-driven search engines. Learn strategies to leverage reviews for enhanced visibility and trust.",
    publisher: {
      "@type": "Organization",
      name: "AI Monitor",
      logo: {
        "@type": "ImageObject",
        url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
      },
      sameAs: "https://getaimonitor.com",
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
          <OnlineReviews blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/why-online-reviews-are-now-the-most-powerful-ranking-signal-in-ai-search/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
