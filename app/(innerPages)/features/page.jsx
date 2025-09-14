import Header from "@/components/headers/Header7";
import Footer from "@/components/footers/Footer7";
import Hero from "@/components/features/Hero";
import Faq from "@/components/features/Faqs";
import Testimonials from "@/components/features/Testimonials";
import Cta from "@/components/features/Cta";
import Problem from "@/components/features/Problem";
import Target from "@/components/features/Target";
import Features from "@/components/features/Features";
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
            <Problem />
            <Target />
            <Features />
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
