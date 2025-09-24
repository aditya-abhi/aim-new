import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import Head from "@/components/blogs/components/Head";
import Author from "@/components/blogs/components/Author";
import Blog1Faqs from "@/components/blogs/faqs/Blog1Faqs";
import NextPrevBlogs from "@/components/blogs/components/NextPrevBlogs";
import RelatedBlogs from "@/components/blogs/components/RelatedBlogs";
import AuthorBioShort from "@/components/blogs/components/AuthorBioShort";
import Experiment1 from "@/components/blogs/components/Experiment1";
import Experiment2 from "@/components/blogs/components/Experiment2";
import FixaiCrawlability from "@/components/blogs/FixaiCrawlability";
import FixaiCrawlabilityFaq from "@/components/blogs/faqs/FixaiCrawlabilityFaq";
export const metadata = {
  title:
    "How to Fix AI Crawlability and Boost Your Site's Performance || AI Monitor",
  description:
    "Can AI bots understand your site? Fix AI Crawlability now! Stop losing traffic. Learn robots.txt fixes, llms.txt &amp; schema markup to win in this AI era.",
};
export default async function Blog2Page(props) {
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="theme-3 ">
        <div
          className="bp-xs page-wrapper bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-white text-gray-900 dark:bg-tertiary-800 dark:text-gray-200 disable-cursor"
          style={{ overflowX: "clip" }}
        >
          <Header7 />
          <Head
            pageName="How to Fix AI Crawlability and Boost Your Site’s Performance in Search Engines"
            src="/assets/images/blog/FixaiCrawlability.webp"
            publishedOn="June 05, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <FixaiCrawlability />
          <Author />
          <FixaiCrawlabilityFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/fix-ai-crawlability-and-boost-your-sites-performance-in-search-engines/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
