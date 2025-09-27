"use client";
import React from "react";
import Sidebar from "./sidebars/Sidebar";
import Image from "next/image";
import AudioPlayer from "./sidebars/AudioPlayer";
import TableOfContentsServer from "./sidebars/TableOfContentsServer";
import RightSideBottom from "./sidebars/RightSideBottom";
import RightSideTop from "./sidebars/RightSideTop";
import Toc from "./Toc";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function WhatisGEO2() {
  return (
    <div className="section panel mr-5">
      <div className="container container-full mx-3">
        <div className="panel py-4 lg:py-6 xl:py-8">
          <div className="row child-cols-12 ">
            <div className="sm:col-12 md:col-12 lg:col-6 order-1">
              <div
                className="uc-main panel"
                role="main"
                style={{ minHeight: "120vh" }}
              >
                <div className="panel vstack gap-3 lg:gap-4 xl:gap-5 mr-3">
                  <Gallery>
                    <div
                      className="post-content panel fs-6 md:fs-5 ml-2"
                      data-uc-lightbox="animation: scale"
                    >
                      <div className="panel mt-6 mb-3 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 overflowx-auto bg-gray-25 dark:bg-tertiary-700 scroll-margin">
                        <h2 className="text-center scroll-margin">
                          Works Cited
                        </h2>
                        <ol>
                          <li id="link1" className="mt-2">
                            What Is Generative Engine Optimization (GEO)?,
                            accessed August 12, 2025,
                            <br />
                            <a
                              href="https://searchengineland.com/what-is-generative-engine-optimization-geo-444418"
                              className="text-blue"
                              target="_blank"
                            >
                              https://searchengineland.com/what-is-generative-engine-optimization-geo-444418
                            </a>
                          </li>
                          <li id="link2" className="mt-2">
                            Similarweb: No Clicks From Google Grew From 56% to
                            69% Since AI Overviews, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://www.seroundtable.com/similarweb-google-zero-click-search-growth-39706.html"
                              className="text-blue"
                              target="_blank"
                            >
                              https://www.seroundtable.com/similarweb-google-zero-click-search-growth-39706.html
                            </a>
                          </li>
                          <li id="link3" className="mt-2">
                            AI Overviews Reduce Clicks: What It Means for SEO,
                            accessed August 12, 2025,
                            <br />
                            <a
                              href="https://ahrefs.com/blog/ai-overviews-reduce-clicks"
                              className="text-blue"
                              target="_blank"
                            >
                              https://ahrefs.com/blog/ai-overviews-reduce-clicks
                            </a>
                          </li>
                          <li id="link4" className="mt-2">
                            What Is Generative Engine Optimization (GEO)?,
                            accessed August 12, 2025,
                            <br />
                            <a
                              href="https://writesonic.com/blog/what-is-generative-engine-optimization-geo"
                              className="text-blue"
                              target="_blank"
                            >
                              https://writesonic.com/blog/what-is-generative-engine-optimization-geo
                            </a>
                          </li>
                          <li id="link5" className="mt-2">
                            Generative Engine Optimization (GEO): The Future of
                            Search Is Here, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://www.forbes.com/councils/forbesagencycouncil/2025/01/02/generative-engine-optimization-geo-the-future-of-search-is-here/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://www.forbes.com/councils/forbesagencycouncil/2025/01/02/generative-engine-optimization-geo-the-future-of-search-is-here/
                            </a>
                          </li>
                          <li id="link6" className="mt-2">
                            What’s Generative Engine Optimization (GEO) & How To
                            Do It, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://foundationinc.co/lab/generative-engine-optimization"
                              className="text-blue"
                              target="_blank"
                            >
                              https://foundationinc.co/lab/generative-engine-optimization
                            </a>
                          </li>
                          <li id="link7" className="mt-2">
                            How Generative Engine Optimization (GEO) Rewrites
                            the Rules of Search, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://a16z.com/geo-over-seo/#:~:text=In%20the%20SEO%20era%2C%20visibility,user%20experience%20engagement%2C%20and%20more."
                              className="text-blue"
                              target="_blank"
                            >
                              https://a16z.com/geo-over-seo/#:~:text=In%20the%20SEO%20era%2C%20visibility,user%20experience%20engagement%2C%20and%20more.
                            </a>
                          </li>
                          <li id="link8" className="mt-2">
                            The History of SEO: From 1990 to Today - Reboot
                            Online, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://www.rebootonline.com/blog/seo-history/#:~:text=This%20update%20saw%20the%20first,quality%20content%2C%20over%20the%20sheer"
                              className="text-blue"
                              target="_blank"
                            >
                              https://www.rebootonline.com/blog/seo-history/#:~:text=This%20update%20saw%20the%20first,quality%20content%2C%20over%20the%20sheer
                            </a>
                          </li>
                          <li id="link9" className="mt-2">
                            The Emergence of Generative Engine Optimization
                            (GEO) - GrowthRocks, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://growthrocks.com/blog/the-emergence-of-generative-engine-optimization-geo/#:~:text=SEO%20(and%20similarly%20ASO%20or,via%20professionally%20made%20link%20building)"
                              className="text-blue"
                              target="_blank"
                            >
                              https://growthrocks.com/blog/the-emergence-of-generative-engine-optimization-geo/#:~:text=SEO%20(and%20similarly%20ASO%20or,via%20professionally%20made%20link%20building)
                            </a>
                          </li>
                          <li id="link10" className="mt-2">
                            From SEO to GEO: how AI is changing search in 2025 -
                            ClickForest, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://www.clickforest.com/en/blog/geo-seo-evolution#:~:text=GEO%3A%20the%20new%20reality%20of,answers%20based%20on%20multiple%20sources"
                              className="text-blue"
                              target="_blank"
                            >
                              https://www.clickforest.com/en/blog/geo-seo-evolution#:~:text=GEO%3A%20the%20new%20reality%20of,answers%20based%20on%20multiple%20sources
                            </a>
                          </li>
                          <li id="link11" className="mt-2">
                            Will GEO replace SEO – or become part of it? -
                            Search Engine Land, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://searchengineland.com/geo-replace-seo-460397#:~:text=The%20move%20to%20all%2Din,thing%20as%20traditional%20search%20vs."
                              className="text-blue"
                              target="_blank"
                            >
                              https://searchengineland.com/geo-replace-seo-460397#:~:text=The%20move%20to%20all%2Din,thing%20as%20traditional%20search%20vs.
                            </a>
                          </li>
                          <li id="link12" className="mt-2">
                            How Generative Engine Optimization (GEO) Rewrites
                            the Rules of Search, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://a16z.com/geo-over-seo/#:~:text=Semrush%20also%20has%20a%20dedicated,adapting%20to%20the%20GEO%20era"
                              className="text-blue"
                              target="_blank"
                            >
                              https://a16z.com/geo-over-seo/#:~:text=Semrush%20also%20has%20a%20dedicated,adapting%20to%20the%20GEO%20era
                            </a>
                          </li>
                          <li id="link13" className="mt-2">
                            From SEO to GEO: How AI is redefining positioning -
                            Telefónica, accessed August 12, 2025,
                            <br />
                            <a
                              href="https://www.telefonica.com/en/communication-room/blog/from-seo-to-geo-how-ai-is-redefining-positioning/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://www.telefonica.com/en/communication-room/blog/from-seo-to-geo-how-ai-is-redefining-positioning/
                            </a>
                          </li>
                          <li id="link14" className="mt-2">
                            SEO Is Dead. Say Hello to GEO. - New York Magazine,
                            accessed August 12, 2025,
                            <br />
                            <a
                              href="https://nymag.com/intelligencer/article/seo-is-dead-say-hello-to-geo.html#:~:text=Generative%2Dengine%20optimization%20%E2%80%94%20also%20known,developing%20AI%20chatbots%20that%20have"
                              className="text-blue"
                              target="_blank"
                            >
                              https://nymag.com/intelligencer/article/seo-is-dead-say-hello-to-geo.html#:~:text=Generative%2Dengine%20optimization%20%E2%80%94%20also%20known,developing%20AI%20chatbots%20that%20have
                            </a>
                          </li>
                          <li id="link15" className="mt-2">
                            Generative Engine Optimization “GEO”,accessed August
                            12, 2025,
                            <br />
                            <a
                              href="https://arxiv.org/abs/2311.09735"
                              className="text-blue"
                              target="_blank"
                            >
                              https://arxiv.org/abs/2311.09735
                            </a>
                          </li>
                          <li id="link16" className="mt-2">
                            GEO vs SEO: Key Differences, Optimization
                            Strategies, and Future Trends
                            <br />
                            <a
                              href="https://getaimonitor.com/geo-vs-seo-key-differences/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/geo-vs-seo-key-differences/
                            </a>
                          </li>
                          <li id="link17" className="mt-2">
                            How Good SEO Impact GEO | A Comprehensive Guide for
                            2025
                            <br />
                            <a
                              href="https://getaimonitor.com/how-good-seo-impact-geo-a-comprehensive-guide/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/how-good-seo-impact-geo-a-comprehensive-guide/
                            </a>
                          </li>
                          <li id="link18" className="mt-2">
                            Top 10 generative engine optimization tool
                            <br />
                            <a
                              href="https://getaimonitor.com/top-10-generative-engine-optimization-tools/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/top-10-generative-engine-optimization-tools/
                            </a>
                          </li>
                          <li id="link19" className="mt-2">
                            The Future of Search: Understanding Entities and the
                            Shift from Keywords to Concepts
                            <br />
                            <a
                              href="https://getaimonitor.com/the-future-of-search-understanding-entities-and-the-shift-from-keywords-to-concepts/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/the-future-of-search-understanding-entities-and-the-shift-from-keywords-to-concepts/
                            </a>
                          </li>
                          <li id="link20" className="mt-2">
                            Future Proof Your Content: Top 4 Strategies to
                            Outsmart AI and Dominate Search
                            <br />
                            <a
                              href="https://getaimonitor.com/future-proof-your-content-with-these-strategies-to-dominate-ai/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/future-proof-your-content-with-these-strategies-to-dominate-ai/
                            </a>
                          </li>
                          <li id="link21" className="mt-2">
                            News & Media Partnership: A Strategic Boost for
                            Generative Engine Optimization (GEO) in 2025
                            <br />
                            <a
                              href="https://getaimonitor.com/media-partnership-a-strategic-boost-for-generative-engine-optimization-geo/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/media-partnership-a-strategic-boost-for-generative-engine-optimization-geo/
                            </a>
                          </li>
                          <li id="link22" className="mt-2">
                            11 Secret Generative Engine Optimization Techniques
                            | Only We Know
                            <br />
                            <a
                              href="https://getaimonitor.com/top-11-generative-engine-optimization-techniques/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/top-11-generative-engine-optimization-techniques/
                            </a>
                          </li>
                          <li id="link23" className="mt-2">
                            How to Fix AI Crawlability and Boost Your Site’s
                            Performance in Search Engines
                            <br />
                            <a
                              href="https://getaimonitor.com/fix-ai-crawlability-and-boost-your-sites-performance-in-search-engines/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/fix-ai-crawlability-and-boost-your-sites-performance-in-search-engines/
                            </a>
                          </li>
                          <li id="link24" className="mt-2">
                            Leverage Reddit for Generative Engine Optimization:
                            Boost Your Brand with Strategic Reddit Geo Marketing
                            <br />
                            <a
                              href="https://getaimonitor.com/leverage-reddit-for-generative-engine-optimization/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/leverage-reddit-for-generative-engine-optimization/
                            </a>
                          </li>
                          <li id="link25" className="mt-2">
                            Auto Complete Prompts Hack: Predict The User’s Query
                            Before They Think
                            <br />
                            <a
                              href="https://getaimonitor.com/auto-complete-prompts-hack/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/auto-complete-prompts-hack/
                            </a>
                          </li>
                          <li id="link26" className="mt-2">
                            Use Quotes Like a Pro | Best Hack for GEO in 2025
                            <br />
                            <a
                              href="https://getaimonitor.com/use-quotes-like-a-pro-best-hack-for-geo/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/use-quotes-like-a-pro-best-hack-for-geo/
                            </a>
                          </li>
                          <li id="link27" className="mt-2">
                            Step by Step Guide: How to Create and Implement an
                            llms.txt File
                            <br />
                            <a
                              href="https://getaimonitor.com/step-by-step-to-create-and-implement-llms-txt-file/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/step-by-step-to-create-and-implement-llms-txt-file/
                            </a>
                          </li>
                          <li id="link28" className="mt-2">
                            Importance of Statistics in GEO to Dominate AI
                            Search Results (and Captivate Readers)
                            <br />
                            <a
                              href="https://getaimonitor.com/importance-of-statistics-in-geo-to-dominate-ai-search/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/importance-of-statistics-in-geo-to-dominate-ai-search/
                            </a>
                          </li>
                          <li id="link29" className="mt-2">
                            How Zero-Click Searches are Revolutionising SEO and
                            GEO
                            <br />
                            <a
                              href="https://getaimonitor.com/how-zero-click-searches-are-revolutionising-seo-and-geo/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/how-zero-click-searches-are-revolutionising-seo-and-geo/
                            </a>
                          </li>
                          <li id="link30" className="mt-2">
                            How to Get Featured by Perplexity AI in 2025: The
                            Complete Interactive Guide
                            <br />
                            <a
                              href="https://getaimonitor.com/how-to-get-featured-by-perplexity-ai-in-2025-the-complete-interactive-guide/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/how-to-get-featured-by-perplexity-ai-in-2025-the-complete-interactive-guide/
                            </a>
                          </li>
                          <li id="link31" className="mt-2">
                            ChatGPT SEO: How to Rank in ChatGPT Responses in
                            2025 12, 2025,
                            <br />
                            <a
                              href="https://getaimonitor.com/chatgpt-seo-how-to-rank-in-chatgpt-responses-in-2025/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/chatgpt-seo-how-to-rank-in-chatgpt-responses-in-2025/
                            </a>
                          </li>
                          <li id="link32" className="mt-2">
                            How to Get Featured in Google’s AI Overview? Tools
                            and Strategies for 2025
                            <br />
                            <a
                              href="https://getaimonitor.com/how-to-get-featured-in-googles-ai-overview-tools-and-strategies-for-2025/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/how-to-get-featured-in-googles-ai-overview-tools-and-strategies-for-2025/
                            </a>
                          </li>
                          <li id="link33" className="mt-2">
                            Generative engine optimization tool
                            <br />
                            <a
                              href="https://getaimonitor.com/top-10-generative-engine-optimization-tools/"
                              className="text-blue"
                              target="_blank"
                            >
                              https://getaimonitor.com/top-10-generative-engine-optimization-tools/
                            </a>
                          </li>
                          <li id="link34" className="mt-2">
                            Case Study: How a YC-Backed Fintech Flipped 200+
                            ChatGPT Queries to #1 in 30 Days with Relixir
                            <br />
                            <a
                              href="https://relixir.ai/blog/blog-yc-fintech-chatgpt-queries-relixir-case-study?"
                              className="text-blue"
                              target="_blank"
                            >
                              https://relixir.ai/blog/blog-yc-fintech-chatgpt-queries-relixir-case-study?
                            </a>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Gallery>
                </div>
              </div>
            </div>
            <div className="d-none lg:d-block lg:col-3 order-2 lg:order-0 sticky-element3">
              <AudioPlayer />
              <TableOfContentsServer />
            </div>
            <div className="d-none lg:d-block lg:col-3 order-2 lg:order-2 sticky-element3">
              <RightSideTop />
              <RightSideBottom />
            </div>
            <div className="d-block lg:d-none">
              <Toc />
            </div>
          </div>
          {/* <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" /> */}
          <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4">
            <ul className="nav-x gap-narrow text-primary">
              <li>
                <span className="text-black dark:text-white me-narrow">
                  Tags:
                </span>
              </li>
              <li>
                <a href="#" className="gap-0">
                  Marketing
                  <span className="text-black dark:text-white">,</span>
                </a>
              </li>
              <li>
                <a href="#" className="gap-0">
                  Strategies
                  <span className="text-black dark:text-white">,</span>
                </a>
              </li>
              <li>
                <a href="#" className="gap-0">
                  Boost <span className="text-black dark:text-white">,</span>
                </a>
              </li>
              <li>
                <a href="#" className="gap-0">
                  Business
                </a>
              </li>
            </ul>
            <ul className="post-share-icons nav-x gap-narrow">
              <li className="me-1">
                <span className="text-black dark:text-white">Share:</span>
              </li>
              <li>
                <a
                  className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"
                >
                  <i className="unicon-logo-facebook icon-1" />
                </a>
              </li>
              <li>
                <a
                  className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"
                >
                  <i className="unicon-logo-x-filled icon-1" />
                </a>
              </li>
              <li>
                <a
                  className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"
                >
                  <i className="unicon-email icon-1" />
                </a>
              </li>
              <li>
                <a
                  className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                  href="#"
                >
                  <i className="unicon-link icon-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
