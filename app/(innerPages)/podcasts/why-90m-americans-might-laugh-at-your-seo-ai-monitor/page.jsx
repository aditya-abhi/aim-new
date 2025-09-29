import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import WhyAmericansMightLaugh from "@/components/podcasts/WhyAmericansMightLaugh";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title: "Why 90M Americans Might Laugh at Your SEO by 2027 || AI Monitor",
  description:
    "Discover why traditional SEO tactics may become a punchline for 90 million Americans by 2027. Explore emerging trends in AI search optimization and Answer Engine Optimization (AEO).",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "Why 90M Americans Might Laugh at Your SEO by 2027",
    url: "https://getaimonitor.com/why-90m-americans-might-laugh-at-your-seo-ai-monitor/",
    description:
      "In this episode, Avinash Tripathi discusses the impending shift from traditional search engines to AI-powered tools like ChatGPT, Claude, and Gemini, and how marketers can adapt to this change.",
    datePublished: "2025-04-26",
    episodeNumber: 4,
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
          <WhyAmericansMightLaugh blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/why-90m-americans-might-laugh-at-your-seo-ai-monitor/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
