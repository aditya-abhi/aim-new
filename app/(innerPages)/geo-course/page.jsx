import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Blogs from "@/components/geo-course/Blogs";
import Cta from "@/components/geo-course/Cta";
import Faqs from "@/components/geo-course/Faqs";
import Hero from "@/components/geo-course/Hero";
import EnrollmentForm from "@/components/geo-course/EnrollmentForm";
import About from "@/components/geo-course/About";
import Achievements from "@/components/geo-course/Achievements";
import Content from "@/components/geo-course/Content";
import Facts from "@/components/geo-course/Facts";
import BestFor from "@/components/geo-course/BestFor";
import Instructor from "@/components/geo-course/Instructor";
import Testimonials from "@/components/geo-course/Testimonials";
import React from "react";
export const metadata = {
  title: "AI Monitor || Generative Engine Optimization Course",
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
              <EnrollmentForm />
              <Facts />
              <About />
              <Content />
              <Achievements />
              <Instructor />
              <BestFor />
              <Faqs />
              <Testimonials />
              <Blogs />
              <Cta />
            </div>
            <Footer7 />
          </div>{" "}
        </div>
      </div>
    </>
  );
}
