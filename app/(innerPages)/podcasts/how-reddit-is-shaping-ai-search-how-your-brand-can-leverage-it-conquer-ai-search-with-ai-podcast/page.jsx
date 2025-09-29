import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import RedditShapingAISearch from "@/components/podcasts/RedditShapingAISearch";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title: "How Can Reddit AI Search Help for Your Brand || AI Monitor",
  description:
    "Learn how Reddit influences AI search and how your brand can leverage this platform to boost visibility and engagement with AI-powered search.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "How Reddit is Shaping AI Search & How Your Brand Can Leverage It",
    url: "https://getaimonitor.com/how-reddit-is-shaping-ai-search-how-your-brand-can-leverage-it-conquer-ai-search-with-ai-podcast/",
    description:
      "In this episode, Avinash Tripathi discusses how Reddit is influencing AI-search, and how brands can use Reddit strategically under Generative Engine Optimization (GEO) / Answer Engine Optimization (AEO).",
    datePublished: "2025-06-07",
    episodeNumber: 10,
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
          <RedditShapingAISearch blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/how-reddit-is-shaping-ai-search-how-your-brand-can-leverage-it-conquer-ai-search-with-ai-podcast/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
