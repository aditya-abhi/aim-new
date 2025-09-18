"use client";
import Toc from "./Toc";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function FeaturedinGoogleAI({ blogItem }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAuthorDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className={
          isExpanded
            ? "position-absolute top-0 start-0 end-0 min-h-1000px xl:min-h-1100px bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 z-0"
            : "position-absolute top-0 start-0 end-0 min-h-700px xl:min-h-900px bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 z-0"
        }
      />{" "}
      <div className="breadcrumbs panel z-1 py-2 dark:bg-opacity-5 text-white mt-8 lg:mt-10">
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li className="text-white">
              <i className="unicon-home icon-1" />
            </li>
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link href={`/blog`}>Blog</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">{blogItem.title}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container max-w-fc">
        <div className="post-author panel px-3 p-3 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2 max-w-100 lg:max-w-900px xl:max-w-xl">
          {!isExpanded && (
            <div
              className="flex items-center gap-3 md:gap-4 pb-2 px-2 cursor-pointer"
              onClick={toggleAuthorDetails}
            >
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3 mx-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden w-48px">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque rounded-full"
                      src="/assets/images/avatars/avinash.webp"
                      alt="Author Image"
                      width="48"
                      height="48"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">Avinash Tripathi</h4>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expanded Author View */}
          {isExpanded && (
            <div
              className="py-4 px-3 sm:px-4 uc-prose cursor-pointer"
              onClick={toggleAuthorDetails}
            >
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Avinash Tripathi Image"
                      src="/assets/images/avatars/avinash.webp"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h3 className="mb-0">Author:</h3>
                    <h4 className="h5 m-0">Avinash Tripathi</h4>
                    <p className="fs-6">
                      My journey into Generative Engine Optimization (GEO) began
                      with a fortunate accident. I was happily working as an
                      entrepreneur when one day, while researching, I noticed
                      that Microsoft Copilot made a negative comment about my
                      startup. Instead of ignoring what Copilot said, I chose to
                      understand, learn, and understand how AI-driven search
                      works, even though a lot of people around me felt that it
                      was beyond my competence. My persistence paid off as my
                      work has been featured by leading media companies such as
                      The Hindu, Yahoo, and Scroll. Most recently, I was awarded
                      the #1 GEO Consultant by YesUsers
                    </p>
                    <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                      <li>
                        <a href="#medium">
                          <i className="icon-2 unicon-logo-medium" />
                        </a>
                      </li>
                      <li>
                        <a href="#x">
                          <i className="icon-2 unicon-logo-x-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#instagram">
                          <i className="icon-2 unicon-logo-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <article className="post type-post single-post pb-4 lg:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="post-header uc-dark">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-9 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h3 xl:h1 mt-4 lg:mt-6">
                  How to Get Featured in Google’s AI Overview? Tools and
                  Strategies for 2025
                </h1>
                <ul className="post-share-icons nav-x mt-2 gap-1 dark:text-white">
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-pinterest icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px bg-lime text-gray-900 dark:text-gray-900 dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-link icon-1" />
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/blog/FeaturedinGoogleAI.webp"
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container">
            <div className="row child-cols-12 g-6 md:g-8 xl:g-6">
              <div
                className="row child-cols col-match justify-center g-2 lg:g-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div className="col-12 md:col-7 lg:col-7">
                  <div className="uc-main panel" role="main">
                    <Gallery>
                      <div
                        className="post-content panel fs-6 md:fs-5 ml-2"
                        data-uc-lightbox="animation: scale"
                      >
                        <p className=""></p>
                        <p className="mt-3">
                          Google’s AI Overview is now the new king of the SERP,
                          and AI is changing the rules of SEO. Blue links and
                          metadata are no longer the exclusive components of
                          search. Google AI Overview will be the new gatekeeper
                          of visibility in 2025, changing the way people
                          discover and trust brands. That AI-generated summary
                          block at the top of search results, which provides an
                          answer to the query before anyone even scrolls, is
                          likely something you’ve seen. This is Google’s AI
                          Overview, which stealthily diverts traffic from
                          sponsored advertisements, snippets, and organic
                          rankings.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Quick Stat:
                        </h3>
                        <p>
                          As of March 2025,{" "}
                          <b>13.14% of all U.S. desktop searches </b>
                          trigger Google AI Overviews, doubling since January.
                          (Source:{" "}
                          <a
                            href="https://www.semrush.com/blog/semrush-ai-overviews-study/"
                            className="text-blue fw-bold hover:text-purple-600"
                            target="_blank"
                          >
                            Semrush AI Overviews Study
                          </a>
                          )
                        </p>
                        <p className="mt-3">
                          At the same time, total Google search impressions have
                          surged <b>49% year-over-year</b>, while
                          <b>click‑through rates dropped nearly 30%, </b>thanks
                          to AI-generated summaries at the top. (Source:
                          BrightEdge Press Release)
                        </p>
                        <p className="mt-3">
                          If you’re <b>not</b> being cited or mentioned in AI
                          Overviews, you’re losing out even if you’re ranking #1
                          in traditional search results. But here’s the good
                          news: Getting featured isn’t just for the big guys.
                          With the right strategy, tools, and formatting, any
                          brand can become the source AI trusts.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          What this blog addresses:
                        </h3>
                        <li className="mt-2">
                          What is the Google AI Overview?
                        </li>
                        <li className="mt-2">
                          How it chooses what to summarize
                        </li>
                        <li className="mt-2">
                          What Generative Engine Optimization (GEO) means in
                          2025
                        </li>
                        <li className="mt-2">
                          The best tools to track your mentions
                        </li>
                        <p className="mt-3">
                          Let’s dive into the future of search and learn how to
                          turn AI’s spotlight onto your content.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          What’s the Big Deal with Google AI Overview?
                        </h2>
                        <p>
                          In a word? Your clicks are being stolen, and SEO is
                          being redefined. Google AI Overview is an AI-driven
                          feature that appears at the top of many search
                          results, summarizing information from multiple sources
                          into a single, clear, and concise response. Users are
                          not required to click, scroll, or search. They get the
                          answer they were looking for immediately, and your
                          content may be cited or disregarded. You do not have
                          any control over this. While traditional rankings are
                          still important, users no longer view them first.
                        </p>
                        <p className="mt-3">
                          Here’s what makes AI Overview such a big deal:
                        </p>
                        <ul>
                          <li className="mt-2">
                            <b>It hijacks visibility:</b> AI Overviews show up
                            above some advertisements, featured snippets, and
                            even organic results.
                          </li>
                          <li className="mt-2">
                            <b>It reduces clicks:</b> users can usually find
                            what they’re seeking in the summary, rendering your
                            product page or blog post outdated unless you’re
                            included in the answer generated by AI.
                          </li>
                          <li className="mt-2">
                            <b> It levels the playing field:</b> The top 10
                            Google results are not where 85% of the sources
                            listed in AI Overviews originate.
                          </li>
                        </ul>
                        <p>
                          Translation: You don’t have to be #1 anymore, but you
                          do have to be AI-friendly. And that’s exactly why
                          Generative Engine Optimization (GEO) is emerging as
                          the new playbook for content strategy in 2025. It’s
                          not about just ranking high, it’s about being trusted
                          enough by AI so that it quotes you. So, yes, the big
                          deal is this:
                        </p>
                        <p className="mt-3">
                          <b>
                            If you’re not featured in Google AI Overview, your
                            content may lose its visibility and in turn,
                            relevance.
                          </b>
                        </p>
                        <p className="mt-3">Let’s fix that.</p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          What Is Google AI Overview?
                        </h2>
                        <p>Think of it like this:</p>
                        <p className="mt-3">
                          Google AI Overview = Google Gemini + Google Search +
                          TL;DR mode
                        </p>
                        <p>
                          Many search results have Google’s AI-generated summary
                          box at the top. It provides consumers with a succinct,
                          AI-written response that pulls data from several
                          websites, including (ideally) yours, rather than a
                          list of ten blue links.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          How It Works:
                        </h3>
                        <ul>
                          <li className="mt-2">
                            <b>Understands the query</b> – Large language
                            models, such as Gemini 2.0, are used by Google to
                            understand the intent behind the question.
                          </li>
                          <li className="mt-2">
                            <b>Scans its LLM dataset</b> – Google taps into its
                            LLM dataset to surface the most contextually
                            relevant answers to the query.
                          </li>
                          <li className="mt-2">
                            <b>Scans the web</b> – It extracts relevant data
                            from several reliable sources.
                          </li>
                          <li className="mt-2">
                            <b>Summarizes intelligently</b>– The AI then
                            provides a thorough response directly on the search
                            page.
                          </li>
                        </ul>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Why It Matters:
                        </h3>
                        <ul>
                          <li className="mt-1">
                            <b>It bypasses traditional SEO logic</b> – your page
                            doesn’t need to rank #1 to be included.
                          </li>
                          <li className="mt-1">
                            <b> It remixes content</b> – Google might summarize
                            your blog post without sending you traffic.
                          </li>
                          <li className="mt-1">
                            <b> It changes how users search</b> – people are
                            relying on AI-generated answers more than ever.
                          </li>
                        </ul>
                        <p>
                          AI Overview is essentially Google’s answer to programs
                          like Perplexity and ChatGPT. “We’ll answer your
                          question before you even leave the page,” is how
                          Google puts it. The goal of the new SEO strategy is to
                          become the reliable source that AI uses, whereas the
                          previous one may have been centered on keyword
                          ranking. And that’s where Generative Engine
                          Optimization (GEO) comes in. More on that soon.
                        </p>
                        {/* BOx*/}
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          From Google SGE to AI Overview: A Drama-Filled
                          Timeline
                        </h2>
                        <div className="panel mt-2 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflowx-auto">
                          <table className="uc-table uc-table-divider">
                            <thead className="table-head sticky-top z-1 ">
                              <tr className="table-row dark:border-white border-gray-900">
                                <th className="table-header-cell" scope="row">
                                  <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary ">
                                    Date
                                  </span>
                                </th>
                                <th className="table-header-cell" scope="row">
                                  <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                    Milestone{" "}
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="table-body">
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      May 2023{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    Google announces Search Generative
                                    Experience (SGE)
                                  </span>
                                </td>
                              </tr>
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      March 2024{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    AI Overviews tested in the main search
                                    results
                                  </span>
                                </td>
                              </tr>
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      May 2024{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    Official launch of Google AI Overview in the
                                    US
                                  </span>
                                </td>
                              </tr>
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      August 2024{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    Rollout to the UK, India, Japan, Indonesia,
                                    Mexico, and Brazil
                                  </span>
                                </td>
                              </tr>
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      April 2025{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    - Google confirms the AI Overviews link to
                                    their search results. - AI Overviews begin
                                    testing on YouTube.
                                  </span>
                                </td>
                              </tr>
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <span className="fs-5 fw-bold text-dark dark:text-white">
                                    May 2025{" "}
                                  </span>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    AI Mode rolled out to all users in the U.S
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-n2">
                          Source:{" "}
                          <a
                            href="https://ahrefs.com/blog/google-ai-overviews/"
                            className="text-blue fw-bold hover:text-purple-600"
                            target="_blank"
                          >
                            {" "}
                            Ahrefs
                          </a>
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Google AI Overview vs. SERP Rankings: What’s the
                          Difference?
                        </h2>
                        <p>
                          Google’s AI Overview may appear to be simply another
                          search function, but it operates according to entirely
                          different guidelines. The highest-ranking pages are
                          not always given preference; relevance to the query is
                          of utmost importance.
                        </p>
                        <ul>
                          <li className="mt-1">
                            AI Overviews appear at the top of the page, above
                            traditional search results, often before featured
                            snippets.
                          </li>
                          <li className="mt-1">
                            SERP Rankings are based on Google’s classic
                            algorithm, ranking pages by relevance and authority.
                          </li>
                          <li className="mt-1">
                            Overlap: Only 15% of AI Overview responses now come
                            from the top 10 organic search results.
                          </li>
                        </ul>
                        <p className="mt-3">
                          This means that 85% of the sources featured in AI
                          Overviews are from beyond the top 10, giving websites
                          that don’t traditionally rank at the top of Google’s
                          SERP a real opportunity to appear in AI-generated
                          summaries!{" "}
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Table: AI Overview vs. SERP Ranking
                        </h3>
                        <div className="panel mt-2 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflowx-auto">
                          <table className="uc-table uc-table-divider">
                            <thead className="table-head sticky-top z-1 ">
                              <tr className="table-row dark:border-white border-gray-900">
                                <th className="table-header-cell" scope="row">
                                  <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                    Feature
                                  </span>
                                </th>
                                <th className="table-header-cell" scope="row">
                                  <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                    Google AI Overview
                                  </span>
                                </th>
                                <th className="table-header-cell" scope="row">
                                  <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                    Traditional SERP Rankings
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="table-body">
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      Position{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    Above all, organic results{" "}
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Below AI Overview
                                  </span>
                                </td>
                              </tr>
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      Source Diversity{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    Multiple, diverse sources{" "}
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Top-ranking pages
                                  </span>
                                </td>
                              </tr>
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      Content Type{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    ~Summaries, lists, media{" "}
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    ~Webpage links
                                  </span>
                                </td>
                              </tr>
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      User Clicks{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    May reduce organic clicks{" "}
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Main source of organic traffic
                                  </span>
                                </td>
                              </tr>
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th className="" scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      Interactivity{" "}
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    Follow-ups & multi-part queries via AI Mode{" "}
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Static, no interactive follow-up
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          How Google Picks Content for AI Overview (Hint: It’s
                          Not Just Rankings)
                        </h2>
                        <p>
                          Do you think being in the AI Overview is guaranteed if
                          you rank #1 on Google? Rethink that idea. According to
                          the Semrush AI Overviews Study (2025), 85% of the
                          sources listed in Google’s AI Overviews don’t even
                          show up in the top 10 organic search results.
                        </p>
                        <p className="mt-30">
                          Google isn’t just picking and choosing based on the
                          keyword match. It’s AI filters content based on value,
                          clarity, and relevance to the user’s query, not just
                          SERP position.
                        </p>
                        <p>
                          What does Google’s AI look for when deciding which
                          content to feature:
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          1. Query Intent Match
                        </h3>
                        <p>
                          Does your material give a clear and direct answer to
                          the user’s question? AI Overview chooses content that
                          provides value quickly instead of just summarizing.
                          The intent of the query is very important in AI
                          Overview. Your response may be overlooked if it
                          contains unnecessary details or distractions.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          2. Clarity & Structure
                        </h3>
                        <p>
                          AI prefers content that is easy to skim and rephrase.
                          Well-structured formatting can make all the
                          difference.
                        </p>
                        <p className="mt-3">Use</p>
                        <ul>
                          <li className="mt-1">Descriptive H2s and H3s</li>
                          <li className="mt-1">
                            Bullet points and numbered lists
                          </li>
                          <li className="mt-1">
                            FAQs, summary boxes, and takeaways
                          </li>
                        </ul>
                        <p>
                          The goal is to make it simple for AI and humans to
                          scan, understand, and use your content.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          3. Authoritativeness
                        </h3>
                        <p>
                          Google’s AI looks for trusted voices. If your content
                          shows <b>expertise and credibility,</b> you’re in a
                          better position to be cited.
                        </p>
                        <p>Make sure you include:</p>
                        <ul>
                          <li className="mt-1">Author bios and credentials</li>
                          <li className="mt-1">
                            Original research or insights
                          </li>
                          <li className="mt-1">
                            Cited statistics with reputable links
                          </li>
                          <li className="mt-1">
                            Signals of E-E-A-T (Experience, Expertise,
                            Authoritativeness, Trustworthiness)
                          </li>
                        </ul>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          4. Freshness
                        </h3>
                        <p>
                          Outdated content is ignored. Keep your articles and
                          data up to date. AI Overviews focus on content that
                          has been updated within the last 6 to 12 months. It
                          helps AI to ensure that the information it is giving
                          out is up to date and accurate.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          5. Unique Value
                        </h3>
                        <p>
                          Are you just repeating what everyone else says, or
                          offering something new?
                        </p>
                        <ul>
                          <li className="mt-1">Contrarian takes</li>
                          <li className="mt-1">Case studies</li>
                          <li className="mt-1">Expert quotes</li>
                          <li className="mt-1">
                            Visual explainers (charts, graphs, infographics)
                          </li>
                        </ul>
                        <p className="mt-3">
                          Treat each post as a resource for humans and machines.
                          Explain things clearly, but provide enough depth so
                          that AI finds your perspective valuable. Ranking high
                          in traditional search helps, but it is not a
                          requirement for appearing in the Google AI Overview.
                          The real question is whether AI would trust your
                          content enough to teach someone else with it.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          How to Check If You’re Already in Google AI Overview
                        </h2>
                        <p>
                          So, are you in or out? Google doesn’t provide a
                          dashboard to tell you if your site is featured in AI
                          Overviews. But that doesn’t mean you’re flying blind.
                          Here’s how to check if your content is appearing in
                          AI-generated summaries, both manually and
                          automatically:
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Step-by-Step: Manual Check s{" "}
                        </h3>
                        <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          1. Search Like Your Audience
                        </h4>
                        <p> Go to Google and type in prompts such as:</p>
                        <ul>
                          <li className="mt-1">
                            “Best [your product type] for [use case]”
                          </li>
                        </ul>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/FeaturedinGoogleAI1.webp"
                            thumbnail="/assets/images/blog/internal/FeaturedinGoogleAI1.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FeaturedinGoogleAI1.webp"
                                  width="1280"
                                  height="853"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Pink Marketing, by Mak"
                                ></a>
                              </figure>
                            )}
                          </Item>
                        </figure>
                        <p>
                          AI Overview pulls from multiple sources, not just
                          top-ranking articles, to recommend tools like
                          Microsoft Teams and Trello. It’s a perfect example of
                          how Generative Engine Optimization (GEO) can help your
                          product or guide get featured based on usefulness, not
                          just rankings.
                        </p>
                        <ul>
                          <li className="mt-1">
                            “How to [solve a problem your content addresses]”
                          </li>
                        </ul>
                        <p className="mt-3">
                          WAsana’s blog page on organizing tasks and projects at
                          work is currently featured in the AI Overview for the
                          query “How to organize tasks and projects at work.”
                          This shows how Google’s AI highlights brand content
                          that provides clear, actionable answers, even if it’s
                          not a blog post. Educational pages, resource hubs, and
                          customer programs can all gain AI Overview visibility
                          when they are optimized properly.
                        </p>
                        <ul>
                          <li className="mt-1">
                            “[Your brand or competitor name] vs [alternative]”
                          </li>
                        </ul>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/FeaturedinGoogleAI3.webp"
                            thumbnail="/assets/images/blog/internal/FeaturedinGoogleAI3.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FeaturedinGoogleAI3.webp"
                                  width="1280"
                                  height="853"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Pink Marketing, by Mak"
                                ></a>
                              </figure>
                            )}
                          </Item>
                        </figure>
                        <p className="mt-3">
                          Monday.com’s official website is featured directly in
                          Google’s AI Overview for the query “Monday vs
                          Notion.”This shows that branded, well-structured
                          content, when aligned with user intent, can earn a
                          spot in AI-generated summaries, even in competitive
                          comparisons.
                        </p>
                        <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          2. Look for the AI Overview card.
                        </h4>
                        <p>
                          If Google triggers an AI Overview, it will appear
                          above the search results, often before featured
                          snippets or ads.
                        </p>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/FeaturedinGoogleAI4.webp"
                            thumbnail="/assets/images/blog/internal/FeaturedinGoogleAI4.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FeaturedinGoogleAI4.webp"
                                  width="1280"
                                  height="853"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Pink Marketing, by Mak"
                                ></a>
                              </figure>
                            )}
                          </Item>
                        </figure>
                        <p className="mt-3">
                          <b>
                            This AI Overview appears above all traditional
                            results for the search “Notion vs Trello.”
                          </b>
                        </p>
                        <p className="mt-3">
                          It highlights product comparisons pulled from multiple
                          sources, showing how AI summarizes relevant,
                          structured content instead of just relying on
                          top-ranked links.
                        </p>
                        <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          3. Inspect the summary content.
                        </h4>
                        <p>Ask yourself:</p>
                        <ul>
                          <li className="mt-1">
                            Is any of it paraphrased from your article?
                          </li>
                          <li className="mt-1">
                            Is your brand or product mentioned directly?
                          </li>
                          <li className="mt-1">
                            Are any links to your site cited as sources?
                            (Sometimes it’s visible; sometimes not.)
                          </li>
                        </ul>
                        <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          4. Try follow-up prompts.
                        </h4>
                        <p>
                          “Ask a follow-up” is a new user behavior triggered by
                          AI search tools such as Google’s AI Overviews,
                          ChatGPT, and Perplexity. Users no longer settle for
                          just one answer; they click prompts like:
                        </p>
                        <ul>
                          <li className="mt-3">
                            Is any of it paraphrased from your article?
                          </li>
                          <li className="mt-1">
                            Is your brand or product mentioned directly?
                          </li>
                          <li className="mt-1">
                            Are any links to your site cited as sources?
                            (Sometimes it’s visible; sometimes not.)
                          </li>
                        </ul>
                        <p>
                          This creates new chances for your brand to appear,
                          even if you weren’t the first answer.
                        </p>
                        <h5 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          How to Optimize for Follow-Up Prompts
                        </h5>
                        <p>
                          Let’s say your SaaS product is a CRM alternative to
                          HubSpot.
                        </p>
                        <p>When a user searches:</p>
                        <p>“Best CRM for small businesses.”</p>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/FeaturedinGoogleAI5.webp"
                            thumbnail="/assets/images/blog/internal/FeaturedinGoogleAI5.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FeaturedinGoogleAI5.webp"
                                  width="1280"
                                  height="853"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Pink Marketing, by Mak"
                                ></a>
                              </figure>
                            )}
                          </Item>
                        </figure>
                        <p className="mt-3">
                          The AI result may first show HubSpot or Salesforce.
                        </p>
                        <p>But AI also suggests:</p>
                        <ul>
                          <li className="mt-1">
                            “What are the top HubSpot alternatives?”
                          </li>
                          <li className="mt-1">
                            “Which CRM is easiest to migrate to?”
                          </li>
                          <li className="mt-1">
                            “How do these compare on pricing?”
                          </li>
                        </ul>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          AI Monitor in Action: Track Mentions, Benchmark
                          Competitors, Optimize Smarter
                        </h2>
                        <p>
                          Most marketers believe that once content is published,
                          it begins to work. But with generative AI engines
                          changing how users find products, you are now dealing
                          with three unseen questions:
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          1. Is your brand being cited in AI answers?
                        </h3>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/FeaturedinGoogleAI6.webp"
                            thumbnail="/assets/images/blog/internal/FeaturedinGoogleAI6.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FeaturedinGoogleAI6.webp"
                                  width="1280"
                                  height="853"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Pink Marketing, by Mak"
                                ></a>
                              </figure>
                            )}
                          </Item>
                        </figure>
                        <p>
                          Tools like ChatGPT and Google AI Overviews summarize
                          sources, but do they include you?{" "}
                          <a
                            href=""
                            className="text-blue hover:text-purple-600 fw-bold"
                            target="_blank"
                          >
                            AI Brand Monitor
                          </a>
                          tracks how often and where your brand appears. This
                          way, you can close citation gaps before your
                          competitors win the click.+
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          2. Are AI bots reading your content?
                        </h3>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/FeaturedinGoogleAI6.webp"
                            thumbnail="/assets/images/blog/internal/FeaturedinGoogleAI6.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FeaturedinGoogleAI7.webp"
                                  width="1280"
                                  height="853"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Pink Marketing, by Mak"
                                ></a>
                              </figure>
                            )}
                          </Item>
                        </figure>
                        <p>
                          {" "}
                          Even if your blog ranks, AI crawlers, which don’t act
                          like traditional bots, might be skipping your site.{" "}
                          <a
                            href="https://getaimonitor.com/products/ai-bot-monitor/"
                            className="text-blue hover:text-purple-600 fw-bold"
                            target="_blank"
                          >
                            AI Bot Monitor
                          </a>{" "}
                          detects which generative engines are crawling your
                          pages and which aren’t.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          3 What traffic is coming from AI tools, and what’s
                          converting?
                        </h3>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/FeaturedinGoogleAI7.webp"
                            thumbnail="/assets/images/blog/internal/FeaturedinGoogleAI7.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FeaturedinGoogleAI7.webp"
                                  width="1280"
                                  height="853"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Pink Marketing, by Mak"
                                ></a>
                              </figure>
                            )}
                          </Item>
                        </figure>
                        <p>
                          Traditional analytics often miss this. AI referral
                          traffic usually shows up as “direct” or gets lost in
                          the noise.{" "}
                          <a
                            href="https://getaimonitor.com/products/ai-traffic-monitor/"
                            className="text-blue fw-bold hover:text-purple-600"
                            target="_blank"
                          >
                            AI Traffic Monitors
                          </a>{" "}
                          separates human visits from AI-influenced clicks. This
                          helps reveal the true impact.
                        </p>
                        <p className="mt-3">
                          While Generative Engine Optimization (GEO) is a strong
                          use case, AI Monitor offers much more. It tracks how
                          often AI models mention your brand. It identifies
                          which bots visit your site. It also finds out if
                          you’re missing traffic influenced by ChatGPT,
                          Perplexity, or Google’s AI Overview. AI Monitor gives
                          you a full picture of your performance on the
                          AI-driven web. Whether you’re a fast-moving startup or
                          a global brand, you need to see AI as more than just a
                          trend; it’s a new distribution channel.
                        </p>
                        <p>
                          Want to see what else{" "}
                          <a
                            href="https://getaimonitor.com/"
                            className="text-blue hover:text-purple-600 fw-bold"
                            target="_blank"
                          >
                            AI Monitor
                          </a>{" "}
                          {""}
                          can do?
                        </p>
                        <p>
                          These aren’t future problems. They’re happening now.
                        </p>
                        <p>
                          The brands that adapt early will dominate zero-click
                          and AI-powered search visibility
                        </p>
                        <h2 className=" mt-3 mb-3 text-red text-center">
                          Frequently Asked Questions:
                        </h2>
                      </div>
                    </Gallery>
                  </div>
                </div>
                <div className="col-12 md:col-5 lg:col-3">
                  <Toc />
                </div>
              </div>
            </div>
            <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
            <Blog1Faqs />
            <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
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
            <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-5 rounded lg:rounded-2">
              <div className="row g-4 items-center">
                <div className="col-12 sm:col-5 xl:col-3">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Avinash Tripathi Image"
                      src="/assets/images/avatars/avinash.webp"
                      width="1000"
                      height="667"
                    />
                  </figure>
                </div>
                <div className="col">
                  <div className="panel vstack items-start gap-2 md:gap-3">
                    <h4 className="h5 m-0">Avinash Tripathi</h4>
                    <p className="fs-6">
                      My journey into Generative Engine Optimization (GEO) began
                      with a fortunate accident. I was happily working as an
                      entrepreneur when one day, while researching, I noticed
                      that Microsoft Copilot made a negative comment about my
                      startup. Instead of ignoring what Copilot said, I chose to
                      understand, learn, and understand how AI-driven search
                      works, even though a lot of people around me felt that it
                      was beyond my competence. My persistence paid off as my
                      work has been featured by leading media companies such as
                      The Hindu, Yahoo, and Scroll. Most recently, I was awarded
                      the #1 GEO Consultant by YesUsers
                    </p>
                    <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                      <li>
                        <a href="#medium">
                          <i className="icon-2 unicon-logo-medium" />
                        </a>
                      </li>
                      <li>
                        <a href="#x">
                          <i className="icon-2 unicon-logo-x-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="#instagram">
                          <i className="icon-2 unicon-logo-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9 fdr-min-600">
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="How can marketing help your business?"
                      src="/assets/images/blog/img-02.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/1`}
                      className="position-cover"
                      data-caption="How can marketing help your business?"
                    ></Link>
                  </figure>
                </div>
                <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                  <span className="fs-7 opacity-60">Prev Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    How can marketing help your business?
                  </h6>
                </div>
                <Link
                  href={`/blog-details/1`}
                  className="position-cover"
                ></Link>
              </div>
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                  <span className="fs-7 opacity-60">Next Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    Top 5 reasons to invest in marketing
                  </h6>
                </div>
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <Image
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Top 5 reasons to invest in marketing"
                      src="/assets/images/blog/img-01.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      href={`/blog-details/1`}
                      className="position-cover"
                      data-caption="Top 5 reasons to invest in marketing"
                    ></Link>
                  </figure>
                </div>
                <Link
                  href={`/blog-details/1`}
                  className="position-cover"
                ></Link>
              </div>
            </div>
            {/* <GEOCourseCTA /> */}
            <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
              <h2 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h2>
              <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                <RelatedBlogs />
              </div>
            </div>
            <a
              href="#commont"
              className="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white border border-gray-200 dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span>Be the first to write a comment.</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
