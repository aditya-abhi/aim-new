import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Blogs from "@/components/geo-guide/Blogs";
import Cta from "@/components/geo-guide/Cta";
import Faqs from "@/components/geo-guide/Faqs";
import Hero from "@/components/geo-guide/Hero";
import About from "@/components/geo-guide/About";
import Achievements from "@/components/geo-guide/Achievements";
import Content from "@/components/geo-guide/Content";
import Facts from "@/components/geo-guide/Facts";
import BestFor from "@/components/geo-guide/BestFor";
import Instructor from "@/components/geo-guide/Instructor";
import Testimonials from "@/components/geo-guide/Testimonials";
import DownloadForm from "@/components/geo-guide/DownloadForm";
import Stats from "@/components/geo-guide/Stats";
import React from "react";
import Process from "@/components/geo-guide/Process";
import Sections from "@/components/geo-guide/Sections";
import Techniques from "@/components/geo-guide/Techniques";
import Focus from "@/components/geo-guide/Focus";
export const metadata = {
  title: "Most Comprehensive Generative Engine Optimization (GEO) Guide",
  description:
    "The Most Comprehensive Generative Engine Optimization (GEO) Guide ChatGPT, Google-AI Overview Are Changing Search Are You Ready?",
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
              <DownloadForm />
              <Stats />
              <Process />
              <Sections />
              <Techniques />
              <Focus />
              <Instructor />
              <Faqs />
              <Cta />
              {/* <Facts />
              <About />
              <Content />
              <Achievements />
              <BestFor />
              <Testimonials />
              <Blogs /> */}
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
