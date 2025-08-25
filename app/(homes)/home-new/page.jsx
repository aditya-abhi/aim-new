import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
// import Blogs from "@/components/homes/home-new/Blogs";
import Blog from "@/components/homes/home-new/Blog";
import Brands from "@/components/homes/home-new/Brands";
import Cta from "@/components/homes/home-new/Cta";
import Faqs from "@/components/homes/home-new/Faqs";
import Features from "@/components/homes/home-new/Features";
import Features2 from "@/components/homes/home-new/Features2";
import Articles from "@/components/homes/home-new/Articles";
// import Hero from "@/components/homes/home-new/Hero";
// import Hero from "@/components/homes/home-new/Hero-2";
import Hero from "@/components/homes/home-new/Hero3";
import Pricing2 from "@/components/homes/home-new/Pricing2";
// import Testimonials from "@/components/homes/home-new/Testimonials";
import Testimonials2 from "@/components/homes/home-new/Testimonials2";
// import Tools from "@/components/homes/home-new/Tools";
import FeaturesVideo from "@/components/homes/home-new/FeaturesVideo";
import Countries from "@/components/homes/home-new/Countries";
import Purpose from "@/components/homes/home-new/Purpose";
import Brands2 from "@/components/homes/home-new/Brands2";
import React from "react";
export const metadata = {
  title:
    "Home New || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <Hero />
              <Brands />
              {/* <Tools /> */}
              <Features2 />
              {/* <Features /> */}
              <FeaturesVideo />
              <Purpose />
              {/* <Blogs /> */}
              <Articles />
              {/* <Brands2 /> */}
              <Pricing2 />
              <Testimonials2 />
              <Blog />
              <Faqs />
              <Countries />
              <Cta />
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
