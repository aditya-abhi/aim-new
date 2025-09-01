import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/brand-track/Hero";
import Faq from "@/components/brand-track/Faqs";
import Testimonials from "@/components/brand-track/Testimonials";
import Cta from "@/components/brand-track/Cta";
import Report from "@/components/brand-track/Report";
import Features from "@/components/brand-track/Features";
import Steps from "@/components/brand-track/Steps";

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
            <Steps />
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
