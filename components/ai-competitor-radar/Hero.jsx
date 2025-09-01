import React from "react";
import Link from "next/link";
import Image from "next/image";
import { target } from "@/data/features";

export default function Hero() {
  return (
    <div
      id="overview"
      className="overview section panel overflow-hidden uc-dark lg:mx-2 lg:rounded-2 lg:rounded-top-0 scrollSpysection"
    >
      <div className="position-cover bg-white dark:bg-gray-900" />
      <div
        className="position-cover opacity-70 bg-contain"
        style={{ backgroundPosition: "50% 85%" }}
        data-src="/assets/images/template/pricing-06-bg-masked.png"
        data-uc-img=""
      />
      <div className="position-cover bg-gradient-to-t from-gray-800 via-transparent to-gray-900" />
      <div
        className="position-absolute d-inline-block w-500px h-500px rounded-circle bg-gradient-45 from-primary to-white start-50 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-0 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div
        className="position-absolute d-inline-block w-250px h-250px rounded-circle bg-gradient-45 from-primary to-white start-100 blur-10 translate-middle blend-color-dodge"
        style={{ top: "0%" }}
      />
      <div className="section-outer panel pt-9 xl:pt-10">
        <div className="container xl:max-w-xl">
          <div className="section-inner panel pt-0 lg:pt-4 xl:pt-0">
            <div className="row child-cols-12 justify-center items-center g-6 xl:g-8">
              <div>
                <div
                  className="panel vstack justify-center items-center gap-3 max-w-600px lg:max-w-900px mx-auto px-2 lg:px-0 text-center"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <h1 className="h1 sm:display-6 md:display-5 lg:display-4 xl:display-3 m-0 text-white mt-4 lg:mt-6">
                    Your Traffic.{" "}
                    <span className="d-inline-flex px-1 bg-secondary text-primary -rotate-1 lg:-rotate-2 rounded-1 lg:rounded-1-5">
                      Their Engines.
                    </span>
                    <br />
                    One Transparent Report
                  </h1>
                  <p className="fs-5 xl:fs-4 text-black dark:text-white d-none md:d-block">
                    Who really sends you traffic - ChatGPT, Gemini, or
                    Perplexity? For the first time, measure AI-driven referrals
                    with an open-source monitoring tool designed for
                    transparency.
                  </p>
                  <Link
                    href={`https://v8dash.getaimonitor.com/signup?_gl=1*cra4gg*_ga*OTUyMjU3MzE4LjE3MzYzMjY0NTU.*_ga_LYQ3T882C2*czE3NTYyODkzMzUkbzMzNCRnMSR0MTc1NjI4OTMzNyRqNTgkbDAkaDA.`}
                    target="_blank"
                    className="btn btn-md lg:btn-lg btn-primary min-w-150px mt-2"
                  >
                    <span>Get started</span>
                    <i className="icon icon-narrow unicon-arrow-right fw-bold ltr:ms-narrow rtl:rotate-180 rtl:me-narrow" />
                  </Link>
                </div>
              </div>
              <div>
                <div
                  className="panel"
                  data-anime="targets: >*:not(.dashboard-image); scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                >
                  <div
                    className="dashboard-image max-w-lg mx-auto max-h-250px lg:max-h-550px overflow-hidden rounded-3 lg:rounded-bottom-0"
                    data-anime="translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                  >
                    <Image
                      className="shadow-md lg:shadow-lg"
                      alt="app-dashboard"
                      src="/assets/images/template/ai-competitor-radar.webp"
                      width="1280"
                      height="853"
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
