import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import Cta from "@/components/homes/home-new/Cta";
import PodcastList from "@/components/common/PodcastList";
export const metadata = {
  title:
    "GEO & AEO Podcasts Expert Conversations on AI Search, Tools & Strategy || AI Monitor",
  description:
    "Tune into thought-provoking podcasts on Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and AI-driven search strategies. Explore expert insights, emerging tools, and actionable techniques to elevate your brand’s visibility in the age of generative platforms.",
};
export default function Podcasts() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: "https://getaimonitor.com/podcasts",
    name: "AI Monitor Podcast | Latest Episodes on AI, SEO, and Generative Engine Optimization",
    description:
      "Explore the AI Monitor Podcast. Stay updated with the latest episodes on AI, SEO, GEO, and digital marketing trends to grow your knowledge in the age of AI.",
    publisher: {
      "@type": "Organization",
      name: "AI Monitor",
      logo: {
        "@type": "ImageObject",
        url: "https://getaimonitor.com/assets/images/common/ai-monitor-logo-dark.webp",
      },
      sameAs: "https://getaimonitor.com",
    },
    mainEntity: {
      "@type": "PodcastSeries",
      name: "AI Monitor Podcast",
      description:
        "A podcast exploring AI, AEO, GEO, and digital marketing trends with insights from industry experts.",
      url: "https://getaimonitor.com/podcasts",
      inLanguage: "en",
      publisher: {
        "@type": "Organization",
        name: "AI Monitor",
        sameAs: "https://getaimonitor.com",
      },
      image: "https://getaimonitor.com/assets/images/podcast-cover.webp",
      sameAs: [
        "https://podcasts.apple.com/",
        "https://open.spotify.com/",
        "https://www.youtube.com/",
      ],
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
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <PodcastList />
          <Cta />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
