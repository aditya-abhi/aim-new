import Header7 from "@/components/headers/Header7";
import Footer7 from "@/components/footers/Footer7";
import ContactForm from "@/components/contact-us/ContactForm";
import ContactLinks from "@/components/contact-us/ContactLinks";
import BrandSlider from "@/components/contact-us/BrandSlider";
import Faqs from "@/components/contact-us/Faqs";
import Script from "next/script";
export const metadata = {
  title: "Contact Us | Get in Touch with Our Team || AI Monitor",
  description:
    "Have questions or need support? Contact us today to connect with our team. We’re here to help with all your enquiries, feedback, or collaboration requests.",
};
export default function ContactUs() {
  return (
    <>
      <div className="theme-4">
        <div className="page-wrapper">
          <div className="bp-xs bp-sm bp-md bp-lg dom-ready bp-xxl-max bp-xl uni-body panel uni-body panel bg-white text-tertiary-900 dark:bg-tertiary-800 dark:text-tertiary-200 overflow-x-hidden disable-cursor">
            <Header7 />
            <div id="wrapper" className="wrap">
              <ContactForm />
              <ContactLinks />
              <BrandSlider />
              <Faqs />
            </div>
            <Footer7 />
          </div>
        </div>
      </div>
      <Script id="mailerlite-universal">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '1771466');
        `}
      </Script>
    </>
  );
}
