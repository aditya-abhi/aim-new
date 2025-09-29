import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import SEOHelpsGEO from "@/components/podcasts/SEOHelpsGEO";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "SEO Helps GEO: Old-School Tactics Fuel AI Search Optimizationb || AI Monitor",
  description:
    "Learn how traditional SEO methods empower GEO strategies to dominate AI search in 2025. Stay ahead with proven techniques for modern AI rankings.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "SEO Helps GEO: How Old School Tactics Are Fueling AI Search Dominance",
    url: "https://getaimonitor.com/seo-helps-geo-how-old-school-tactics-are-fueling-ai-search-dominance/",
    description: "DESCRIPTION_GOES_HERE",
    datePublished: "2025-06-21",
    episodeNumber: "12",
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Get AI Monitor Podcast",
      description:
        "A podcast about AI, content strategy, and marketing in the AI era.",
      url: "https://getaimonitor.com/podcast",
      webFeed: "https://getaimonitor.com/podcast/rss.xml",
      image: "https://getaimonitor.com/path/to/podcast-logo.jpg",
      author: {
        "@type": "Person",
        name: "Avinash Tripathi",
      },
    },
    image: "https://getaimonitor.com/path/to/episode-image.jpg",
    author: {
      "@type": "Person",
      name: "Avinash Tripathi",
    },
    publisher: {
      "@type": "Organization",
      name: "Get AI Monitor",
      logo: {
        "@type": "ImageObject",
        url: "https://getaimonitor.com/path/to/logo.png",
      },
    },
    audio: {
      "@type": "AudioObject",
      encodingFormat: "audio/mpeg",
    },
    inLanguage: "en-US",
    explicit: false,
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: {
        "@type": "ListenAction",
      },
      userInteractionCount: 0,
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
          <SEOHelpsGEO blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/seo-helps-geo-how-old-school-tactics-are-fueling-ai-search-dominance/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
