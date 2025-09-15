import React from "react";
import FAQGEOCourse from "../common/FAQGEOCourse";

export default function Faqs() {
  return (
    <div id="faq" className="faq section panel">
      <div className="section-outer panel">
        <div className="container lg:max-w-lg py-6 lg:py-8 xl:py-10">
          <div
            className="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 col-match g-4">
              <div>
                <div className="vstack items-center text-center gap-2">
                  <h2 className="h3 lg:h2 m-0">
                    Frequently Asked{" "}
                    <span className="text-tertiary dark:text-primary">
                      Questions!
                    </span>
                  </h2>
                </div>
              </div>
              <div>
                <div className="panel">
                  <ul
                    className="uc-accordion gap-1 max-w-md mx-auto"
                    data-uc-accordion="targets: > li; multiple: false;"
                  >
                    <FAQGEOCourse parentClass="panel p-2 md:p-3 lg:p-4 bg-secondary dark:bg-tertiary-700 rounded-1-5" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
