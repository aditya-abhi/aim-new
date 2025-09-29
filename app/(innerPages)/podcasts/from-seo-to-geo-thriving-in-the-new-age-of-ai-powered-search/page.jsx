import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import FromSEOtoGEO from "@/components/podcasts/FromSEOtoGEO";
import RelatedPodcasts from "@/components/podcasts/RelatedPodcasts";
export const metadata = {
  title:
    "From SEO to GEO: Thriving in the AI-Powered Search Era | Conquer AI Search Podcast",
  description:
    "The shift from SEO to GEO transforms AI-driven search. This episode dives into strategies, use cases, and insights to help brands stay visible in the AI era.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://getaimonitor.com/podcasts/from-seo-to-geo-thriving-in-the-new-age-of-ai-powered-search",
    name: "From SEO to GEO: Thriving in the New Age of AI-Powered Search | AI Monitor Podcast",
    description:
      "Tune into this AI Monitor Podcast episode to learn how the shift from SEO to GEO (Generative Engine Optimization) is transforming AI-driven search and what strategies brands need to thrive in the answer-first era.",
    publisher: {
      "@type": "Organization",
      name: "AI Monitor",
      logo: {
        "@type": "ImageObject",
        url: "https://getaimonitor.com/assets/images/logo.png",
      },
      sameAs: "https://getaimonitor.com",
    },
    mainEntity: {
      "@type": "PodcastEpisode",
      name: "From SEO to GEO: Thriving in the New Age of AI-Powered Search",
      url: "https://getaimonitor.com/podcasts/from-seo-to-geo-thriving-in-the-new-age-of-ai-powered-search",
      description:
        "This episode of the AI Monitor Podcast explores the evolution from SEO to GEO, highlighting strategies, insights, and real-world use cases to help brands succeed in the AI-powered search landscape.",
      datePublished: "2025-04-05",
      partOfSeries: {
        "@type": "PodcastSeries",
        name: "AI Monitor Podcast",
        url: "https://getaimonitor.com/podcasts",
      },
      associatedMedia: {
        "@type": "MediaObject",
        contentUrl: "https://getaimonitor.com/assets/audio/from-seo-to-geo.mp3",
      },
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
          <FromSEOtoGEO blogItem={blogItem} />
          <RelatedPodcasts
            currentPodcastLink={
              "/podcasts/from-seo-to-geo-thriving-in-the-new-age-of-ai-powered-search/"
            }
          />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
