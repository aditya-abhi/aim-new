import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/traffic-iq/Hero";
import Faq from "@/components/traffic-iq/Faqs";
import Testimonials from "@/components/traffic-iq/Testimonials";
import Cta from "@/components/traffic-iq/Cta";
import Report from "@/components/traffic-iq/Report";
import Features from "@/components/traffic-iq/Features";
import Steps from "@/components/traffic-iq/Steps";

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
