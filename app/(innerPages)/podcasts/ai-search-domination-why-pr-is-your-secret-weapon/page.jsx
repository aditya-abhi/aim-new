import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import AISearchDomination from "@/components/podcasts/AISearchDomination";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "AI Search Optimization - AI Search Domination: How Strategic PR Boosts Generative Visibility",
  description:
    "AI search optimization is changing visibility rules. Learn how public relations can fuel AI search domination through authority, mentions, and earned backlinks.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "AI Search Domination: Why PR is Your Secret Weapon",
    url: "https://getaimonitor.com/ai-search-domination-why-pr-is-your-secret-weapon/",
    description:
      "In this episode, Avinash Tripathi discusses how public relations (PR) is now a key strategic weapon to boost visibility in AI search and generative engine optimization.",
    datePublished: "2025-06-28",
    episodeNumber: 13,
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
          <AISearchDomination blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/ai-search-domination-why-pr-is-your-secret-weapon/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
