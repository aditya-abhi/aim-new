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
                Search Has Changed -{" "}
                <span className="text-primary">FOREVER</span>{" "}
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                In today’s digital landscape, users no longer rely solely on
                traditional search engines like Google to find information.
                Instead, platforms like{" "}
                <strong>ChatGPT, Google AI Overview,</strong> and{" "}
                <strong>Perplexity AI</strong> are becoming the first place
                people turn to for answers. These platforms don’t show a list of
                links. They generate direct responses. And that shift changes
                everything.
              </p>
              <h3 className="h5 lg:h4 m-0">
                Welcome to the era of{" "}
                <span className="text-primary">
                  Generative Engine Optimization (GEO).
                </span>
              </h3>
              <h3 className="h4 lg:h3 m-0 mt-4">
                Why Traditional SEO Falls Short in 2025
              </h3>
              <p className="fs-6 xl:fs-5 xl:px-8 m-0">
                SEO was built for a clickable web—rank high on Google, earn
                traffic. But generative engines like ChatGPT, Gemini, and
                Google’s AI Overviews don’t link out, they answer directly. That
                shift means visibility no longer depends on ranking alone.
              </p>
              <p className="fs-6 xl:fs-5 xl:px-8 m-0">
                You could be #1 on Google and still invisible in AI responses.
                Backlinks and meta tags don’t sway generative citations.
                Instead, these engines favor structured, context-rich content
                they can interpret and reuse—making Generative Engine
                Optimization the new frontier.
              </p>

              <h2 className="h3 lg:h2 mt-4">
                What is{" "}
                <span className="text-primary">
                  Generative Engine Optimization (GEO)
                </span>{" "}
              </h2>
              <div className="panel overflow-hidden ratio ratio-16x9 rounded-2 lg:rounded-3 border border-2 border-white dark:border-gray-700">
                <video
                  src="/assets/images/media/lexend_vid_home-6.webm"
                  preload="none"
                  loop
                  autoPlay
                  poster="/assets/images/media/lexend_vid_home-6.jpg"
                  muted
                  playsInline
                  data-uc-cover
                  data-uc-video="autoplay: true;"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
