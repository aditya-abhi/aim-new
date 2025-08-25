import { featuresHome } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features2() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark"
    >
      <div className="section-outer panel py-6 md:py-8 lg:pt-10 lg:pb-9 lg:mx-2 lg:rounded-2 bg-tertiary-700 text-white text-opacity-70">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 lg:h2 m-0">
                What is{" "}
                <span className="text-tertiary dark:text-primary">
                  First Command Center
                </span>{" "}
                Generative Engine Optimization?
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                Most consumers now get answers from AI chatbots, bypassing
                Google altogether. Even those still using Google see AI
                Overviews, instant AI-generated answers that eliminate the need
                to click links. To stay visible in this AI-driven search era,
                you need Generative Engine Optimization (GEO), the latest
                digital marketing strategy for ranking in AI-powered results.
              </p>
              <p className="fs-6 xl:fs-5 xl:px-8">
                While SEO targets Google’s algorithm, GEO ensures your content
                appears in AI-generated responses. Want to master this skill?
                Take the Best Generative Engine Optimization course completely
                free!
              </p>
              <p className="fs-6 xl:fs-5 xl:px-8">
                Learn how to optimize your content for ChatGPT, Gemini, and
                other AI platforms to boost visibility and traffic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
