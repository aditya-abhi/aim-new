import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/brand-scope/Hero";
import Faq from "@/components/brand-scope/Faqs";
import Testimonials from "@/components/brand-scope/Testimonials";
import Cta from "@/components/brand-scope/Cta";
import Problem from "@/components/brand-scope/Problem";
import Target from "@/components/brand-scope/Target";
import Report from "@/components/brand-scope/Report";
import Features from "@/components/brand-scope/Features";
import Features2 from "@/components/brand-scope/Features2";
import Steps from "@/components/brand-scope/Steps";

export const metadata = {
  title:
    "Features || Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup nextjs template.",
};
export default function page() {
  return (
    <div className="theme-4">
      <div className="page-wrapper">
        <div className="page-wrapper uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
          <Header />
          <div id="wrapper" className="wrap">
            <Hero />
            <Report />
            <Features />
            {/* <Features2 /> */}
            <Steps />
            {/* <Problem />
            <Target /> */}
            <Faq />
            <Testimonials />
            <Cta />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
