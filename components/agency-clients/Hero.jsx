import { features12 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div className="position-absolute top-0 start-0 end-0 h-screen bg-secondary dark:bg-tertiary-700 rounded-bottom-2 lg:mx-2" />
      <div className="section-outer panel py-8 lg:py-9 xl:py-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="d-none xl:d-block"
              data-anime="targets: >*; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
            >
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "5%", left: "5%" }}
                data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/03.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "20%", left: "10%" }}
                data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/08.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "35%", left: "0%" }}
                data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/02.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "5%", right: "5%" }}
                data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/01.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "20%", right: "10%" }}
                data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/06.png"
                  width={150}
                  height={150}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dashed border-primary-300 dark:border-white dark:border-opacity-15 cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "35%", right: "0%" }}
                data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-narrow rounded-circle"
                  alt="brand"
                  src="/assets/images/avatars/09.png"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="row child-cols-12 justify-center items-center g-8">
              <div className="lg:col-10">
                <div className="panel vstack gap-4 lg:gap-8">
                  <div className="panel vstack justify-center items-center gap-2 px-2 pt-4 text-center">
                    <h1
                      className="h2 md:h1 lg:display-5 m-0"
                      data-anime="translateY: [10, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: 250;"
                    >
                      The Future of Agency Growth is{" "}
                      <br className="d-none lg:d-block" />
                      <span className="text-primary dark:text-tertiary">
                        AI Search Optimization
                      </span>
                    </h1>
                    <p
                      className="fs-6 xl:fs-4 xl:px-10 dark:text-white text-opacity-70"
                      data-uc-splitext="types: 'words'"
                      // data-anime="targets: > *; translateX: [5, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 450; delay: anime.stagger(50, {start:650});"
                    >
                      AI Monitor is the single platform that helps your agency
                      master the new era of AI search, acquire a steady pipeline
                      of new clients, and unlock new revenue streams.
                    </p>
                    <div className="panel vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-2 xl:mt-4">
                      <div className="mb-2 lg:mb-3">
                        <a
                          href="https://v8dash.getaimonitor.com/signup"
                          className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                        >
                          <span>Generate AI Visibility Report</span>
                        </a>
                      </div>
                      <div className="vstack sm:hstack justify-center gap-1 fs-6 text-gray-900 dark:text-white flex-row md-flex-column">
                        <div className="hstack justify-center gap-2">
                          <b>Super</b>
                          <div className="rating panel">
                            <div className="hstack justify-center gap-narrow">
                              <i
                                className="icon unicon-star-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                              <i
                                className="icon unicon-star-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                              <i
                                className="icon unicon-star-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                              <i
                                className="icon unicon-star-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                              <i
                                className="icon unicon-star-half-filled text-white p-narrow"
                                style={{ backgroundColor: "#00b67a" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="hstack justify-center gap-narrow">
                          <span className="desc rtl:order-first">
                            with reviews on <strong>Trustpilot and G2</strong>
                          </span>
                          {/* <div>
                              <Image
                                alt="Trustpilot"
                                className="w-96px dark:d-none"
                                src="/assets/images/review-logo/05.svg"
                                width={138}
                                height={42}
                              />
                              <Image
                                alt="Trustpilot"
                                className="w-96px d-none dark:d-inline-flex"
                                src="/assets/images/review-logo/dark-05.svg"
                                width={138}
                                height={42}
                              />
                            </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-scroll-scene panel max-w-850px mx-auto">
                    <div
                      className="panel  rounded-1-5  overflow-hidden"
                      data-anime="translateY: [80, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 450; delay: 950;"
                    >
                      <Image
                        className="rounded-default"
                        alt="Hero image"
                        src="/assets/images/landing/agency-main.webp"
                        width={1500}
                        height={1020}
                      />
                    </div>
                    <div
                      className="hero-ten-01 position-absolute w-150px xl:w-250px d-none lg:d-block"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                      style={{ top: "20%" }}
                    >
                      <Image
                        className="rounded-2 "
                        alt="hero-image"
                        data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -300; onscroll-trigger: 0; onscroll-duration: 700%; translateY: [-24, 180];"
                        src="/assets/images/landing/agency-2.webp"
                        width={845}
                        height={963}
                      />
                    </div>
                    <div
                      className="hero-ten-02 position-absolute w-200px xl:w-300px d-none lg:d-block"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                      style={{ bottom: "20%" }}
                    >
                      <Image
                        className="rounded-2 shadow-lg border"
                        alt="hero-image"
                        data-anime="onscroll: .hero-scroll-scene; onscroll-offset: -300; onscroll-trigger: 0; onscroll-duration: 700%; translateY: [100, 0];"
                        src="/assets/images/template/home-10-hero-01.png"
                        width={574}
                        height={142}
                      />
                    </div>
                    <div
                      className="hero-ten-03 position-absolute w-150px d-none lg:d-block"
                      data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 750;"
                      style={{ top: "10%" }}
                    ></div>
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
