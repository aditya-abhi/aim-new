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
import SaasLandingPages from "@/components/blogs/SaasLandingPages";
import SaasLandingPagesFaq from "@/components/blogs/faqs/SaasLandingPagesFaq";
export const metadata = {
  title:
    "The Landing Pages that are a Must Have for SaaS Website for AI Visibility || AI Monitor",
  description:
    "Discover key SaaS landing pages to boost AI visibility, drive conversions, and enhance your site’s performance in AI-powered search results.",
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
            pageName="Must Have SaaS Landing Pages for Better AI Visibility"
            src="/assets/images/blog/SaasLandingPages.webp"
            publishedOn="July 02, 2025"
            updatedOn=""
          />
          <Experiment1 />
          <AuthorBioShort />
          <SaasLandingPages />
          <Author />
          <SaasLandingPagesFaq />
          <Experiment2 />
          {/* <NextPrevBlogs /> */}
          <RelatedBlogs
            currentBlogLink={
              "/must-have-saas-landing-pages-for-better-ai-visibility/"
            }
          />
          <Footer7 />
        </div>
      </div>
    </>
  );
}
