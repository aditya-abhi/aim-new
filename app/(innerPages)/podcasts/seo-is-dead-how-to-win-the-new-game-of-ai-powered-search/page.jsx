import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import SEOisDeadPodcast from "@/components/podcasts/SEOisDeadPodcast";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "Win the Game of AI Powered Search With AI Engine Optimization || AI Monitor",
  description:
    "Discover why old SEO tactics do not work for you and how to dominate AI-powered search (GEO). Learn cutting-edge strategies to conquer AI search",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "SEO is Dead: How to Win the New Game of AI-Powered Search",
    url: "https://getaimonitor.com/seo-is-dead-how-to-win-the-new-game-of-ai-powered-search/",
    description:
      "In this episode, Avinash Tripathi discusses the evolving landscape of AI-powered search and provides strategies to stay ahead in the game.",
    datePublished: "2025-05-10",
    episodeNumber: 5,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Conquer AI Search With AI",
      description:
        "A podcast series exploring the evolving landscape of AI-powered search.",
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
          <SEOisDeadPodcast blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/seo-is-dead-how-to-win-the-new-game-of-ai-powered-search/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
