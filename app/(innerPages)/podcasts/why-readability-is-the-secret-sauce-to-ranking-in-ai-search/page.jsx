import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import ReadabilitySecretSauce from "@/components/podcasts/ReadabilitySecretSauce";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "Why Readability Is the Secret Sauce to AI Search Optimization | AI Monitor",
  description:
    "Control the user's mind before they finish typing? 🚀 Hack auto complete prompts, own AI search, and be the internet’s first thought.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "Why Readability is the Secret Sauce to Ranking in AI Search",
    url: "https://getaimonitor.com/why-readability-is-the-secret-sauce-to-ranking-in-ai-search/",
    description:
      "In this episode, we explore how readability plays a key role in improving rankings in AI-driven search environments, and how content creators can optimize for clarity, flow, and user experience.",
    datePublished: "2025-09-27",
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
          <ReadabilitySecretSauce blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/why-readability-is-the-secret-sauce-to-ranking-in-ai-search/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
