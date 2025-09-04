import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/servicePages/saasSeo/Hero";
import Problem from "@/components/servicePages/saasSeo/Problem";
import Features from "@/components/servicePages/saasSeo/Features";
import Process from "@/components/servicePages/saasSeo/Process";
import Services from "@/components/servicePages/saasSeo/Services";
import Faqs from "@/components/servicePages/saasSeo/Faqs";
import Cta from "@/components/servicePages/saasSeo/Cta";

export const metadata = {
  title: "SaaS Search Engine Optimization Service || AI Monitor",
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
            <Problem />
            <Features />
            <Process />
            <Services />
            <Faqs />
            <Cta />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
