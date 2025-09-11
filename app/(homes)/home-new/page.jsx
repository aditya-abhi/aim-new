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
import Pricing from "@/components/homes/home-new/Pricing";
import Pricing2 from "@/components/homes/home-new/Pricing2";
// import Testimonials from "@/components/homes/home-new/Testimonials";
import Testimonials2 from "@/components/homes/home-new/Testimonials2";
// import Tools from "@/components/homes/home-new/Tools";
import FeaturesVideo from "@/components/homes/home-new/FeaturesVideo";
import Countries from "@/components/homes/home-new/Countries";
import Purpose from "@/components/homes/home-new/Purpose";
// import "https://js.appointlet.com/styles.css";
import Timeline from "@/components/homes/home-new/Timeline";
import Awards from "@/components/homes/home-new/Awards";
import Resources from "@/components/homes/home-new/Resources";
import CaseStudies from "@/components/homes/home-new/CaseStudies";
import Services from "@/components/homes/home-new/Services";
import BrandSlider from "@/components/homes/home-new/BrandSlider";
// import Service from "@/components/homes/home-new/Service";

import React from "react";
import Service2 from "@/components/homes/home-new/service";
export const metadata = {
  title: "AI Monitor | Boost Your Brand Visibility in AI Search",
  description:
    "AI Monitor, the world’s first open-source tool for GEO, AEO, and AIO, helps brands optimize for AI search to enhance AI Visibility to stay ahead in the AI-driven search era.",
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
              {/* <Brands /> */}
              <BrandSlider />
              {/* <Tools /> */}
              <Features2 />
              <Service2 />
              {/* <Features /> */}
              <FeaturesVideo />
              <Purpose />
              <Services />
              <Resources />
              <CaseStudies />
              {/* <Blogs /> */}
              <Articles />
              {/* <Brands2 /> */}
              {/* <Pricing2 /> */}
              {/* <Pricing /> */}
              <Pricing2 />
              <Timeline />
              <Testimonials2 />
              <Awards />
              {/* <Blog /> */}
              <Faqs />
              <Countries />
              <Cta />
            </div>
            <Footer7 />
          </div>{" "}
          {/* <Script
            src="https://js.appointlet.com/"
            strategy="afterInteractive"
          /> */}
        </div>
      </div>
    </>
  );
}
