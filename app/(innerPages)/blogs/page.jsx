import Newsletter from "@/components/blog-old/Newsletter";
import BlogList from "@/components/common/BlogList";
import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import Cta from "@/components/homes/home-new/Cta";
export const metadata = {
  title:
    "Blog 3 Cols || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function Blog3ColsPage() {
  return (
    <>
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header7 />
        <div id="wrapper" className="wrap">
          <BlogList />
          {/* <Newsletter /> */}
          <Cta />
        </div>
        <Footer7 />
      </div>
    </>
  );
}
