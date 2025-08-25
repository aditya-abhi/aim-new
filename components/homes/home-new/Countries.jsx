"use client";

import { pricingNew } from "@/data/pricing";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Pricing() {
  const parallax = useParallax({
    scale: [0.85, 1.1],
  });

  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-tertiary-700">
        <div className="container ">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-550px mx-auto text-center  items-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-white max-w-fc">
                  WORD WIDE PRESENCE
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0 text-white">
                  Find Your Perfect AI Monitoring Plan
                </h2>
                <p className="fs-6 text-secondary xl:fs-5">
                  Our #1 rated GEO expertise translates into real results for
                  our clients, helping them navigate the complexities of AI
                  search and achieve their business goals.
                </p>
              </div>
              <div className="content panel w-100"></div>
              <div
                className="uc-video-scene"
                ref={parallax.ref}
                data-anime="scale: [1.2, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 750; delay: 500;"
              >
                <div
                  className="panel max-w-100 mt-2 rounded lg:rounded-1-5 xl:rounded-2 overflow-hidden"
                  data-anime="onscroll: .hero-header; onscroll-trigger: 0.5; translateY: [-80, 0]; scale: [0.8, 1]; easing: linear;"
                >
                  <img
                    src="/assets/images/template/world-map.webp"
                    alt="World map"
                  />
                </div>

                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px d-none lg:d-block"
                  style={{ top: "42%", right: "12%" }}
                  data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
                >
                  <Image
                    className=""
                    alt="Japan Flag"
                    src="/assets/images/flags/japan.webp"
                    width={333}
                    height={300}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px d-none lg:d-block"
                  style={{ top: "70%", left: "30%" }}
                  data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
                >
                  <Image
                    className=""
                    alt="Brazil Flag"
                    src="/assets/images/flags/brazil.webp"
                    width={333}
                    height={300}
                  />
                </div>
                <div
                  className="position-absolute rounded-circle shadow-lg cstack w-40px d-none lg:d-block"
                  style={{ top: "42%", right: "42.5%" }}
                  data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
                >
                  <Image
                    className=""
                    alt="Turkey Flag"
                    src="/assets/images/flags/turkey.webp"
                    width={333}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
