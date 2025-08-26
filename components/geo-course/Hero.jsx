import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header section panel overflow-hidden uc-dark"
    >
      <div className="section-outer panel py-8 lg:py-9 xl:py-10 dark:bg-tertiary-700 rounded-2 mx-2">
        <div className="container">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="">
                <div className="panel vstack gap-2 lg:gap-6">
                  <div className="sticky-scene panel">
                    <div
                      className="px-4 lg:px-6 py-4 lg:py-6 bg-white rounded-2"
                      data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                    >
                      <div className="row child-cols col-match justify-between g-4 lg:g-6 xl:g-6">
                        <div className="order-0 lg:order-1">
                          <div className="panel w-100 rounded lg:rounded-2 overflow-hidden">
                            <img
                              src="../../../assets/images/portrait/course-1.png"
                              alt="Hero Image"
                            />
                          </div>
                        </div>
                        <div className="order-1 lg:order-0 col-12 sm:col-6">
                          <div className="panel vstack justify-center gap-4 h-100">
                            <div>
                              <div className="panel vstack gap-2">
                                <h1 className="h2 lg:h1 m-0 text-tertiary">
                                  Generative Engine Optimization Course
                                </h1>
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80 dark:text-gray-800 mb-0">
                                  Master the skills to get your brand discovered
                                  in ChatGPT, Google AI Overview, Perplexity AI,
                                  and more.
                                </p>
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80 dark:text-gray-800 mt-0">
                                  Generative Engine Optimization (GEO) is the
                                  practice of making your content visible and
                                  cite-worthy in AI-generated answers, not just
                                  in traditional search results. In this
                                  intensive 7-day course, you’ll learn how to
                                  optimize for AI platforms, structure your
                                  content for citation, and future-proof your
                                  brand visibility in an era where users get
                                  answers from AI, not links.
                                </p>
                                <div className="panel mt-3 lg:mt-4">
                                  <div className="row child-cols-12 lg:child-cols-4 justify-center gx-0">
                                    <div className="vstack">
                                      <div className="hstack justify-center gap-1">
                                        <span className="icon mb-narrow">
                                          <i
                                            className="icon unicon-star-filled text-white p-narrow"
                                            style={{
                                              backgroundColor: "#00b67a",
                                            }}
                                          />
                                        </span>
                                        <div className="vstack">
                                          <span className="fs-2 fw-bold mb-narrow text-inherit">
                                            4.5
                                          </span>
                                        </div>
                                      </div>
                                      <span className="fs-7 fw-medium mb-narrow text-inherit">
                                        Average Rating
                                      </span>
                                    </div>
                                    <div className="vstack">
                                      <div className="hstack justify-center gap-1">
                                        <span className="icon mb-narrow">
                                          <i
                                            className="icon unicon-calendar text-white p-narrow"
                                            style={{
                                              backgroundColor: "#00b67a",
                                            }}
                                          />
                                        </span>
                                        <div className="vstack">
                                          <span className="fs-2 fw-bold mb-narrow text-inherit">
                                            7 Days
                                          </span>
                                        </div>
                                      </div>
                                      <span className="fs-7 fw-medium mb-narrow text-inherit">
                                        Course Duration
                                      </span>
                                    </div>
                                    <div className="vstack">
                                      <div className="hstack justify-center gap-1">
                                        <span className="icon mb-narrow">
                                          <i
                                            className="icon unicon-star-filled text-white p-narrow"
                                            style={{
                                              backgroundColor: "#00b67a",
                                            }}
                                          />
                                        </span>
                                        <div className="vstack">
                                          <span className="fs-2 fw-bold mb-narrow text-inherit">
                                            4.5
                                          </span>
                                        </div>
                                      </div>
                                      <span className="fs-7 fw-medium mb-narrow text-inherit">
                                        Average Rating
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="panel mt-3 lg:mt-2">
                                  <Link
                                    href={`/page-integrations`}
                                    className="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto"
                                  >
                                    Enroll Now
                                  </Link>
                                  <span className="fs-7 text-dark text-opacity-70 ms-3 text-line-through text-center">
                                    $249
                                  </span>
                                  <span className="fs-2 text-primary ms-1">
                                    Free
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
