import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import EntityOptimization from "@/components/podcasts/EntityOptimization";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "Entity Optimization: The 2025 SEO Power Move Every Brand Can’t Afford to Miss",
  description:
    "Discover the power of Entity Seo in 2025. Learn how this advanced SEO strategy can elevate your brand&#039;s visibility, improve search rankings, and drive targeted traffic.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://getaimonitor.com/entity-optimization-the-2025-seo-power-move-every-brand-cant-afford-to-miss/",
    name: "Entity Optimization: The 2025 SEO Power Move Every Brand Can't Afford to Miss | AI Monitor Podcast",
    description:
      "Listen to AI Monitor's latest podcast episode on Entity Optimization and discover key strategies to boost your SEO in 2025. Stay ahead with AI-driven insights.",
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
      "@type": "PodcastEpisode",
      name: "Entity Optimization: The 2025 SEO Power Move Every Brand Can't Afford to Miss",
      url: "https://getaimonitor.com/entity-optimization-the-2025-seo-power-move-every-brand-cant-afford-to-miss/",
      description:
        "AI Monitor podcast episode on Entity Optimization for 2025 SEO strategies. Learn actionable tips for enhancing your brand's online presence using AI-driven SEO techniques.",
      datePublished: "2025-08-02",
      partOfSeries: {
        "@type": "PodcastSeries",
        name: "AI Monitor Podcast",
        url: "https://getaimonitor.com/podcasts",
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
          <EntityOptimization blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/entity-optimization-the-2025-seo-power-move-every-brand-cant-afford-to-miss/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
