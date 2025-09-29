import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import KillingYourBrandVisibility from "@/components/podcasts/KillingYourBrandVisibility";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "AI Search optimization - AI Search is Killing Your Brand's Visibility: The SEO Extinction Event is Here",
  description:
    "AI search is replacing traditional SEO. Learn how answer engine optimization can save your brand from disappearing in AI search optimization.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "AI Search is Killing Your Brand’s Visibility: The SEO Extinction Event is Here",
    url: "https://getaimonitor.com/ai-search-is-killing-your-brands-visibility-the-seo-extinction-event-is-here/",
    description:
      "In this episode, Avinash Tripathi discusses the decline of traditional SEO in the age of AI-powered search and introduces strategies like Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) to maintain brand visibility.",
    datePublished: "2025-04-19",
    episodeNumber: 3,
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
          <KillingYourBrandVisibility blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/ai-search-is-killing-your-brands-visibility-the-seo-extinction-event-is-here/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
