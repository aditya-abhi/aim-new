import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import StrategicCitationsTechnique from "@/components/podcasts/StrategicCitationsTechnique";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "Strategic Citations: GEO Technique #3 | Conquer AI Search Ep 11 | AI Monitor",
  description:
    "Master Strategic Citations in GEO with Episode 11 of our podcast series. Learn how this technique boosts your generative engine optimization success.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "Strategic Citations Technique 3 for Generative Engine Optimization (GEO) — Mastery Series Episode 11",
    url: "https://getaimonitor.com/strategic-citations-technique-3-for-generative-engine-optimization-geo-mastery-series-episode-11/",
    description:
      "In this episode of the GEO Mastery Series, we discuss Strategic Citations Technique 3 and how it can influence generative engine optimization and search authority.",
    datePublished: "2025-06-14",
    episodeNumber: 11,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Get AI Monitor Podcast – GEO Mastery Series",
      description:
        "A podcast series focused on Generative Engine Optimization strategies and mastery.",
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
          <StrategicCitationsTechnique blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/strategic-citations-technique-3-for-generative-engine-optimization-geo-mastery-series-episode-11/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
