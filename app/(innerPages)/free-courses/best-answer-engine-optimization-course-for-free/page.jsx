import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Blogs from "@/components/aeo-course/Blogs";
import Cta from "@/components/aeo-course/Cta";
import Faqs from "@/components/aeo-course/Faqs";
import Hero from "@/components/aeo-course/Hero";
import EnrollmentForm from "@/components/aeo-course/EnrollmentForm";
import About from "@/components/aeo-course/About";
// import Achievements from "@/components/aeo-course/Achievements";
import Content from "@/components/aeo-course/Content";
import Facts from "@/components/aeo-course/Facts";
import BestFor from "@/components/aeo-course/BestFor";
import Instructor from "@/components/aeo-course/Instructor";
import Testimonials from "@/components/aeo-course/Testimonials";
import React from "react";
import Learnings from "@/components/aeo-course/Learnings";
import Certificate from "@/components/aeo-course/Certificate";
import Achievements from "@/components/aeo-course/Achievements";
export const metadata = {
  title: "AI Monitor || Answer Engine Optimization Course",
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
              <Learnings />
              {/* <EnrollmentForm /> */}
              {/* <Facts /> */}
              <About />
              <Content />
              <Achievements />
              {/* <Achievements /> */}
              <Certificate />
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
