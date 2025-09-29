import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import AISearchRevolution from "@/components/podcasts/AISearchRevolution";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title: "Why Your Website Needs an llms.txt File for AI Search || AI Monitor.",
  description:
    "llms.txt is the new robots.txt for AI search. Learn why adding this file to your site is critical to control how large language models see your content.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: "Welcome to the AI Search Revolution: Why Your Website Needs an llms.txt File",
    url: "https://getaimonitor.com/welcome-to-the-ai-search-revolution-why-your-website-needs-an-llms.txt-file/",
    description:
      "This episode (Ep #9) discusses why adding an llms.txt file to your website is critical in the AI search era and how it can help control how large language models interpret your site.",
    datePublished: "2025-05-31",
    episodeNumber: 9,
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
          <AISearchRevolution blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/welcome-to-the-ai-search-revolution-why-your-website-needs-an-llms-txt-file/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
