"use client";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div
      id="hero_header"
      className="hero-header hero-five-scene section panel overflow-hidden"
    >
      <div className="position-cover bg-gradient-to-t from-secondary to-white dark:from-tertiary-700 dark:to-gray-900 lg:rounded-2 lg:rounded-top-0 mx-2" />
      <div className="section-outer panel pb-6 sm:pb-8 pt-9 xl:pt-10 xl:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="row child-cols-12 justify-center lg:justify-between items-center g-6 lg:g-0">
              <div className="sm:col-8 lg:col-5">
                <div
                  className="panel vstack gap-2 text-center lg:text-start rtl:lg:text-end xl:me-4"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h2 sm:display-6 xl:display-4 fw-light mb-1 xl:mb-2">
                    AI Monitor Is Redefining{" "}
                    <span className="text-primary">Visibility</span>
                  </h1>
                  <h2 className="h4 sm:h3 lg:h3 m-0">
                    Built for the Era of ChatGPT, Google AI Overviews, and
                    Perplexity.
                  </h2>
                  <p className="fs-6 xl:fs-4 text-gray-800 dark:text-white">
                    The First Open-Source Platform Built to Master Answer Engine
                    Optimization, AI Optimization, and Generative Engine
                    Optimization.
                  </p>
                  <Link
                    href={`/page-integrations`}
                    className="btn btn-md xl:btn-lg btn-primary border px-3 lg:px-5 w-auto"
                  >
                    Get Started
                  </Link>

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
                            <span className="fs-2 fw-bold mb-narrow text-inherit dark:text-white">
                              5K+
                            </span>
                          </div>
                        </div>
                        <span className="fs-7 fw-medium mb-narrow text-inherit dark:text-white">
                          Brands Monitored
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
                            <span className="fs-2 fw-bold mb-narrow text-inherit dark:text-white">
                              50+
                            </span>
                          </div>
                        </div>
                        <span className="fs-7 fw-medium mb-narrow text-inherit dark:text-white">
                          AI Platforms Covered
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
                            <span className="fs-2 fw-bold mb-narrow text-inherit dark:text-white">
                              Real-Time
                            </span>
                          </div>
                        </div>
                        <span className="fs-7 fw-medium mb-narrow text-inherit dark:text-white">
                          Visibility Tracking
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-auto">
                <div
                  className="hero-scroll-scene panel sm:w-550px sm:h-600px lg:w-450px lg:h-500px xl:w-600px xl:h-650px"
                  data-anime="translateX: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-3 h-100 overflow-hidden">
                    <Image
                      className="media-cover image"
                      alt="image"
                      src="/assets/images/features/features-test.jpg"
                      width="1184"
                      height="1280"
                    />
                  </figure>
                  <div
                    className="hero-five-contries position-absolute sm:w-300px lg:w-250px xl:w-350px d-none sm:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ top: "20%" }}
                  >
                    <Image
                      alt="Countries"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [-100, 0];"
                      src="/assets/images/template/hero-05-countries.png"
                      width="710"
                      height="854"
                    />
                  </div>
                  <div
                    className="hero-five-account position-absolute sm:w-250px lg:w-200px xl:w-300px d-none sm:d-block"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                    style={{ bottom: "20%" }}
                  >
                    <Image
                      alt="Account"
                      data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -200; onscroll-trigger: 0; onscroll-duration: 400%; translateY: [100, 0];"
                      src="/assets/images/template/hero-05-account.png"
                      width="605"
                      height="274"
                    />
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
