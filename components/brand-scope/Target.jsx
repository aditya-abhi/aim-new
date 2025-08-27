import { target } from "@/data/features";
import Link from "next/link";
import React from "react";

export default function Target() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden bg-secondary dark:bg-tertiary-700 lg:rounded-2 mx-2 my-4 lg:my-6 xl:my-8"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto">
                Built for Leaders in the AI Search Era
              </h2>
              <p>
                Single platform to monitor, optimize, and lead in the age of AI
                engines.
              </p>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-4 items-center justify-center col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {target.map((feature, index) => (
                    <div key={index}>
                      <div
                        className={`feature-item panel p-4 rounded-2 hover:bg-primary dark:text-white hover:text-white hover:scale-105 duration-150 transition-all ${feature.backgroundColor}`}
                      >
                        <div className="vstack panel min-h-250px">
                          <div className="vstack items-center text-center justify-between gap-2 h-100">
                            <div className="cstack w-96px h-96px rounded-circle mt-2 bg-gray-900 dark:bg-white bg-opacity-5 dark:bg-opacity-15">
                              <i className={`icon icon-4 ${feature.icon}`} />
                            </div>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  {feature.title}
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
