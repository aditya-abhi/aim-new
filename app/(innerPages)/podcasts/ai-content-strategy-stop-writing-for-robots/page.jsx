import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import StopWritingforRobots from "@/components/podcasts/StopWritingforRobots";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "AI Search Optimization Strategies: Creating Quality Content for GEO &amp; AEO Success | AI Monitor",
  description:
    "Discover how to create high-value content that ranks in AI search results. Learn HubSpot-inspired strategies for Generative Engine Optimization (GEO), EEAT, topic clusters, LLM search, and technical AI SEO.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "AI Content Strategy: Stop Writing for Robots",
    url: "https://getaimonitor.com/ai-content-strategy-stop-writing-for-robots/",
    description:
      "In this episode we discuss why content writers should stop writing purely for search engines and focus on human readers …",
    datePublished: "2025-09-27",
    episodeNumber: 12,
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
      interactionType: { "@type": "ListenAction" },
      userInteractionCount: 1234,
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
          <StopWritingforRobots blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/ai-content-strategy-stop-writing-for-robots/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
