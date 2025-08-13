import Footer8 from "@/components/footers/Footer8";
import HeaderNew from "@/components/headers/Header-new";
import Brands from "@/components/homes/home-9/Brands";
import Faqs from "@/components/homes/home-9/Faqs";
import Features from "@/components/homes/home-9/Features";
import Hero from "@/components/homes/home-9/Hero";
import Pricing from "@/components/homes/home-9/Pricing";
import Process from "@/components/homes/home-9/Process";
import Solutions from "@/components/homes/home-9/Solutions";
import Testimonials from "@/components/homes/home-9/Testimonials";
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
      {" "}
      <div className="theme-5">
        <div className="bp-xs bp-sm bp-md bp-lg bp-xl dom-ready bp-xxl-max uni-body panel uni-body panel bg-tertiary-800 text-tertiary-200 overflow-x-hidden disable-cursor uc-dark">
          <HeaderNew />
          <div id="wrapper" className="wrap">
            <Hero />
            <Process />
            <Brands />
            <Features />
            <Solutions />
            <Pricing />
            <Testimonials />
            <Faqs />
          </div>
          <Footer8 />
        </div>
      </div>
    </>
  );
}
