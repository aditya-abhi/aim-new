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

export default function ChatGPTSEO() {
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
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        1 Simplify the AI Maze with Answer Engine Optimization
                        Tools
                      </h2>
                      <p>Raise your hand if you’ve ever:</p>
                      <ul>
                        <li className="mt-2">
                          Wasted hours tweaking SEO, only to watch Google’s AI
                          Overviews bury your content.
                        </li>
                        <li className="mt-2">
                          Panicked as competitors hijacked ChatGPT answers while
                          your brand vanished.
                        </li>
                        <li className="mt-2">
                          Wondered if “AEO tools” are just SEO tools with a
                          ChatGPT sticker slapped on.
                        </li>
                      </ul>
                      <p>
                        If any of that feels familiar, you’re not alone. Welcome
                        to the era of,
                        <b>Answer Engine Optimization (AEO)</b> where “ranking”
                        isn’t enough. Today, the real fight is for{" "}
                        <b>ownership of AI-generated answers</b> across
                        platforms like ChatGPT, Claude, and Google AI Overviews.
                      </p>
                      <p className="mt-3">
                        Think of AEO tools as your compass through the AI maze.
                        They don’t just track keywords; they track how your
                        brand appears in AI answers, recommendations, and
                        summaries, helping you reclaim visibility before your
                        competitors do.
                      </p>
                      <p className="mt-3">
                        In this guide, we’ll explore the top AEO tools of 2025,
                        how they work, and why they’ve become essential for
                        brands navigating the AI-driven search revolution.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        2. What Are Answer Engine Optimization (AEO) Tools?
                      </h2>
                      <p>
                        Answer Engine Optimization (AEO) tools are your brand’s
                        AI whisperers specialized software designed to optimize
                        content visibility across AI-driven platforms like
                        ChatGPT, Google AI Overviews, Perplexity, Claude, and
                        Microsoft Copilot. Unlike traditional SEO tools that
                        focus on ranking for keywords, AEO tools focus on
                        teaching AI engines how to talk about your brand.
                      </p>
                      <p className="mt-3">Here’s what makes them different:</p>
                      <ul>
                        <li className="mt-2">
                          <b>Decode AI Preferences →</b> Understand why Gemini,
                          ChatGPT, or Perplexity prefer citing your competitors
                          instead of you.
                        </li>
                        <li className="mt-2">
                          <b>Track Sentiment → </b>Spot when Claude calls your
                          software “buggy” instead of “best-in-class.{" "}
                        </li>
                        <li className="mt-2">
                          <b>Dominate Zero-Click Answers → </b>With 77% of
                          queries ending with AI-generated responses
                          (BrightEdge, 2024), AEO tools help ensure your brand
                          is included in those final answers.
                        </li>
                      </ul>
                      <p className="mt-3">
                        Think of AEO tools as your brand’s AI publicist; they
                        make sure when robots speak, they speak your story.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        3. How to Evaluate AEO Tools: 3 Non-Negotiables
                      </h2>
                      <p>
                        Not all AEO tools are built the same. While many promise
                        to boost your AI visibility, only a handful are truly
                        equipped to handle the complexity of modern AI-driven
                        search. Before investing, make sure your tool checks
                        these three non-negotiable boxes:
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        3.1. AI Platform Coverage (Beyond Google)
                      </h3>
                      <p>
                        If your AEO tool only optimizes for Google AI Overviews,
                        you’re already behind. In 2025, AI-driven discovery
                        happens everywhere on ChatGPT, Perplexity, Claude,
                        Microsoft Copilot, and more.
                      </p>
                      <p className="mt-3">A strong AEO tool should:</p>
                      <ul>
                        <li className="mt-2">
                          Monitor brand mentions across multiple AI platforms
                        </li>
                        <li className="mt-2">
                          Track how your competitors are being cited
                        </li>
                        <li className="mt-2">
                          Surface visibility gaps in real time
                        </li>
                      </ul>
                      <p>
                        <b>Example: </b> AI Monitor instantly alerts you when
                        Perplexity.ai misquotes your pricing so you can fix it
                        before it spreads.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        3.2. Sentiment & Context Intelligence
                      </h3>
                      <p>
                        Being mentioned isn’t enough; the tone matters. If
                        Perplexity lists your product but calls it “outdated”,
                        that’s a missed opportunity. Similarly, if users are
                        asking Gemini why your delivery times “suck”, you need
                        to catch and address that before AI engines shape your
                        brand narrative. The best AEO tools don’t just track
                        what’s said; they analyze how it’s said. Look for:
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>AI sentiment tracking →</b> Positive vs. negative
                          mentions
                        </li>
                        <li className="mt-2">
                          <b>Narrative control →</b> Which key phrases,
                          features, or reviews are AI engines highlighting
                        </li>
                        <li className="mt-2">
                          <b>Competitive positioning →</b> Whether you’re
                          labeled “market leader” or “budget alternative”
                        </li>
                      </ul>
                      <p className="mt-2">
                        <b>Pro Tip: </b> Prioritise tools that provide
                        context-rich sentiment dashboards so you know when to
                        celebrate or intervene.
                      </p>
                      <h3 className="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        3.3. AI Training Integrations (The Next Frontier)
                      </h3>
                      <p>
                        Most AEO tools track what AI engines say about you, but
                        the real game-changers influence what they say. This is
                        where AI training integrations come in.
                      </p>
                      <p className="mt-3 fw-bold">
                        Instead of static reports like:
                      </p>
                      <p className="mx-4">
                        “Your FAQ ranked #8 in ChatGPT last month.”
                      </p>
                      <p className="mx-4">
                        …the next generation of AEO tools goes further. They
                        feed structured, AI-friendly content directly into the
                        ecosystem, helping engines learn your preferred
                        narrative and cite your brand more often.
                      </p>
                      <p className="mt-2">
                        <b>What elite tools do:</b>{" "}
                      </p>
                      <ul>
                        <li className="mt-2">
                          <b>Leverage live prompt trends →</b> Analyze real-time
                          user queries and generate content briefs optimized for
                          AI engines.
                        </li>
                        <li className="mt-2">
                          <b>Push structured data to AI systems →</b> Ensuring
                          your product specs, FAQs, and pricing are easily
                          digestible for LLMs.
                        </li>
                        <li className="mt-2">
                          <b>Shape AI outputs at the source →</b> Aligning your
                          messaging with what AI engines highlight in their
                          summaries.
                        </li>
                      </ul>
                      <p className="mt-3">
                        <b>Example:</b> Tools like Profound automatically create
                        AI-ready content briefs based on emerging prompt trends,
                        giving your content the best chance of being cited in
                        ChatGPT, Perplexity, and Gemini responses.
                      </p>
                      <p className="mt-3">
                        <b>Pro Tip:</b>
                        Look for AEO tools that don’t just report rankings but
                        actively help you train AI engines to favor your
                        content.
                      </p>
                      <p className="mt-3">
                        <b>Bottom Line</b>
                        <br />
                        If an AEO tool can’t track, analyze, and influence your
                        brand’s visibility across multi-platform AI ecosystems,
                        it’s not built for 2025. These three non-negotiables
                        separate tools that generate insights from those that
                        actually deliver AI dominance.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        4. List of Top 10 Answer Engine Optimization Tools
                      </h2>
                      <div className="panel mt-2 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-tertiary-700 overflowx-auto">
                        <table className="uc-table uc-table-divider">
                          <thead className="table-head sticky-top z-1 ">
                            <tr className="table-row dark:border-white border-gray-900">
                              <th className="table-header-cell" scope="row">
                                <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                  Tool
                                </span>
                              </th>
                              <th className="table-header-cell" scope="row">
                                <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                  Primary Use Case
                                </span>
                              </th>
                              <th className="table-header-cell" scope="row">
                                <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                  AI Platform Coverage
                                </span>
                              </th>
                              <th className="table-header-cell" scope="row">
                                <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                  Sentiment Intelligence
                                </span>
                              </th>
                              <th className="table-header-cell" scope="row">
                                <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                  AI Training / Content Briefs
                                </span>
                              </th>
                              <th className="table-header-cell" scope="row">
                                <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                  Zero-Click Optimization
                                </span>
                              </th>
                              <th className="table-header-cell" scope="row">
                                <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                  Ideal For
                                </span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="table-body">
                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    AI Monitor
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  Real-time brand visibility tracking,
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ChatGPT, Google AI Overviews, Perplexity,
                                  Claude, Copilot
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Deep sentiment analytics
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Uses structured data feeds
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  C✅ High AI citation control
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  B2B SaaS companies, digital marketing
                                  agencies, and startups.
                                </span>
                              </td>
                            </tr>
                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    Profound
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  AI prompt trend analysis + content briefs
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ChatGPT, Gemini, Claude, Perplexity
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Emotional tone mapping
                                </span>
                              </td>

                              <td>
                                <span className="dark:text-white">
                                  ✅ Auto-generates AI-friendly briefs
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Optimizes for AI summaries
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  Content Teams, GEO Strategists
                                </span>
                              </td>
                            </tr>
                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    Semrush
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  Hybrid SEO + early-stage AEO
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  Google AI Overviews, Bing Copilot
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ⚠️ Basic keyword sentiment only
                                </span>
                              </td>

                              <td>
                                <span className="dark:text-white">
                                  ❌ Manual content setup
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Schema-based SERP & AI prep
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  SEO Professionals
                                </span>
                              </td>
                            </tr>
                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    WriteSonic
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  AI-driven content creation
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ChatGPT, Gemini, Claude
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  ⚠️ Limited sentiment
                                </span>
                              </td>

                              <td>
                                <span className="dark:text-white">
                                  ❌ No live AI training
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Generates AI-optimised copy
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  Marketing Teams, Bloggers
                                </span>
                              </td>
                            </tr>
                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    Otterly.AI
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  Optimizes transcripts & meetings for AI
                                  visibility
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ChatGPT, Copilot, Gemini
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  ✅ Context-aware sentiment tagging
                                </span>
                              </td>

                              <td>
                                <span className="dark:text-white">
                                  ❌ No AI briefs
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ⚠️ Limited zero-click readiness
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  SaaS Teams, Product Marketers
                                </span>
                              </td>
                            </tr>

                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    SERanking
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  SEO + AEO tracking hybrid
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  Google AI Overviews, basic ChatGPT integration
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  ⚠️ Partial
                                </span>
                              </td>

                              <td>
                                <span className="dark:text-white">❌</span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Structured schema optimization
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  SMBs, Growth Teams
                                </span>
                              </td>
                            </tr>

                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    RankScale
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  Brand positioning inside AI ecosystems
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ChatGPT, Perplexity, Gemini, Claude
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  ✅ Deep narrative analysis
                                </span>
                              </td>

                              <td>
                                <span className="dark:text-white">
                                  ✅ AI-targeted content modelling
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Ensures brand dominance in AI
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  Startups, Product-Led Growth Brands
                                </span>
                              </td>
                            </tr>

                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    BrandRank.ai
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  AI sentiment & brand positioning
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ChatGPT, Gemini, Copilot
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  ✅ Market sentiment intelligence
                                </span>
                              </td>

                              <td>
                                <span className="dark:text-white">
                                  ⚠️ Limited AI briefing
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ AI-friendly structured positioning
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  PR Teams, Brand Managers
                                </span>
                              </td>
                            </tr>

                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    Nightwatch
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  GEO-focused SEO tracking
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  Google AI Overviews, ChatGPT, You.com
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  ⚠️ Limited sentiment
                                </span>
                              </td>

                              <td>
                                <span className="dark:text-white">❌</span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Schema + AI visibility enhancement
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  Mid-Market SEO Teams
                                </span>
                              </td>
                            </tr>

                            <tr className="table-row border-gray-900 dark:border-white">
                              <th className="" scope="row">
                                <div className="hstack gap-1 justify-start">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    Ziptie.dev
                                  </span>
                                </div>
                              </th>
                              <td>
                                <span className="dark:text-white">
                                  AI schema + structured data feeds
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  Google AI Overviews, AI scrapers, ChatGPT
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  ❌ None
                                </span>
                              </td>

                              <td>
                                <span className="dark:text-white">
                                  ✅ Pushes structured LLM-friendly data
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white">
                                  ✅ Designed for zero-click inclusion
                                </span>
                              </td>
                              <td>
                                <span className="dark:text-white justify-center">
                                  Developers, Tech-First Brands
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h4 className="h6 lg:h5 mt-2 mb-2">Legend:</h4>
                      <ul className="list-style-none">
                        <li>✅ = Strong capability</li>
                        <li>⚠️ = Limited or partial capability</li>
                        <li>❌ = Minimal or missing capability</li>
                      </ul>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        5. Top 10 Answer Engine Optimization Tools to Dominate
                        AI Search: A Comprehensive Guide
                      </h2>
                      <h4 classname="h6 xl:h5 mb-2">
                        Spoiler: #1 Takes the Crown, But Everyone Deserves a
                        Spotlight
                      </h4>
                      <p>
                        The rise of Answer Engine Optimization (AEO) is
                        transforming how brands compete in AI-driven search. To
                        help you stay ahead, we’ve analyzed the top 10 AEO
                        tools, evaluating their features, pricing, and ROI.
                        Let’s explore the contenders.
                      </p>
                      <h3 classname="h5 xl:h4 mt-4 mb-2 xl:mb-3">
                        5.1. AI Monitor — # 1 AEO Tool
                      </h3>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/internal/AIM-webpage.webp"
                          thumbnail="/assets/images/blog/internal/AIM-webpage.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="AI Monitor Home page"
                                src="/assets/images/blog/internal/AIM-webpage.webp"
                                width="1280"
                                height="853"
                                ref={ref}
                              />
                              <a onClick={open} className="position-cover"></a>
                            </figure>
                          )}
                        </Item>
                      </figure>
                      {/*  */}
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
