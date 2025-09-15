import BlogDetails3 from "@/components/blog/BlogDetails3";
import Blog2 from "@/components/blogs/blog-2";
import Newsletter from "@/components/blog/Newsletter";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { allBlogs } from "@/data/blogs";
import GEOLeaderboard from "@/components/blogs/GEOLeaderboard";
export const metadata = {
  title:
    "Blog 2 || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default async function Blog2Page(props) { 
  const params = await props.params;
  const id = params.id;
  const blogItem = allBlogs.filter((elm) => elm.id == id)[0] || allBlogs[0];
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-tertiary-800 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <GEOLeaderboard blogItem={blogItem} />
          <Newsletter />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
