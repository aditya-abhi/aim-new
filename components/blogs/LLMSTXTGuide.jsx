"use client";
import Toc from "./Toc";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "./faqs/Blog1Faqs";

export default function LLMSTXTGuide({ blogItem }) {
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
                  Step by Step Guide: How to Create and Implement an llms.txt
                  File
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
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/blog/ImplementllmsFile.webp"
                    thumbnail="/assets/images/blog/ImplementllmsFile.webp"
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
                        <h1 className="mt-4 mb-2 xl:mb-3">
                          {/* Content inside the Box */}
                          <strong>
                            Step by Step Guide: How to Create and Implement an
                            llms.txt File
                          </strong>
                        </h1>
                        <p className="mt-3">
                          Did you know that{" "}
                          <strong>73% of websites are ignored by AI</strong>{" "}
                          like ChatGPT and Claude? NOT having a llms.txt file
                          could result in your content being ghosted by Large
                          Language Models (LLMs).
                        </p>
                        <p className="mt-3">
                          Today, we’re diving into something that’s really
                          making waves in the tech world and changing the way AI
                          interacts with the internet.
                        </p>
                        {/* internal Image1 */}
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/Implement an llms.txt File1.webp"
                            thumbnail="/assets/images/blog/internal/Implement an llms.txt File1.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/Implement an llms.txt File1.webp"
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
                          <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                            Pink Marketing, by Mak
                          </figcaption>
                        </figure>
                        <p className="mt-3">
                          We’ve looked into a bunch of articles about llms.txt,
                          and our mission today is to clear things up: what they
                          are, why everyone’s talking about them, and – most
                          importantly – what impact they can have on you. We’re
                          also getting into how to actually implement llms.txt,
                          along with some interesting comparisons to familiar
                          web standards like robots.txt. It really gives you a
                          solid snapshot of something fresh and new.
                        </p>
                        <p className="mt-3">
                          This article is valuable because it’s like getting a
                          head start on understanding something that might
                          become a basic part of the web as AI models get more
                          intertwined with how we search for and use
                          information. And yeah, it’s all happening pretty
                          quickly. Grasping llms.txt could give you a real
                          advantage.
                        </p>
                        <h2 className="mt-3" strong>
                          What the H**k is llms.txt?
                        </h2>
                        <p className="mt-3">
                          Think of llms.txt as the younger cousin of robots.txt.
                          It is a simple{" "}
                          <strong>
                            Markdown-formatted text file you stash in your
                            website’s root directory (yep, right next to
                            robots.txt)
                          </strong>
                          . But instead of bossing around search engine
                          crawlers, it’s designed to guide large language models
                          (LLMs) (like ChatGPT, Claude, or Gemini) on how to
                          process your content.
                        </p>
                        <p className="mt3">
                          Proposed in <strong>2024 by Jeremy Howard</strong>{" "}
                          from Answer.ai, llms.txt acts like a CliffsNotes
                          version of your site for AI. It serves 3 primary
                          functions:
                        </p>
                        <ol className="mt-3">
                          <li>
                            <strong>Content Prioritization:</strong> Highlights
                            your most important pages and resources
                          </li>
                          <li>
                            <strong>Context Provision:</strong> Explains your
                            site’s purpose and content relationships
                          </li>
                          <li>
                            <strong>Access Control:</strong> Specifies which
                            content should be ignored or treated carefully
                          </li>
                        </ol>

                        <p className="mt-3">
                          In simple words, llms.txt is a handy guide for LLMs
                          during a stage called the inference phase when they’re
                          actually doing their thinking. So, when the AI is
                          coming up with an answer or using what it knows to
                          respond to your question, that llm.txt file gives it
                          detailed instructions.{" "}
                        </p>
                        <p className="mt-3">
                          It shows the AI which info on the website to focus on
                          and what to pay attention to. The whole point is to
                          provide LLMs with content that’s formatted and
                          organized just for them. It’s all about concise,
                          expert-level info that’s super easy to find.
                        </p>
                        <h3 className="mt-3">Why Markdown Format?</h3>
                        <p className="mt-3">
                          You’ve probably noticed preferred format of the
                          llms.txt file is Markdown. So, why is that? Well, it’s
                          pretty simple—Markdown is just super easy to read for
                          both people and machines. It lays out information in a
                          clear and structured way without all the fuss of
                          full-on HTML coding. LLMs don’t have to deal with all
                          those tags and scripts, which is a relief. That
                          simplicity means LLMs can quickly parse it and
                          understand the content with way less confusion, making
                          everything process more efficiently.
                        </p>

                        <h2 className="mt-2">
                          <strong>Why Does This Matter for You?</strong>
                        </h2>
                        <p className="mt-2">
                          You might be thinking, “Sure, this llms.txt file could
                          benefit the folks behind the Large Language Models,
                          but they’re already rolling in dough. So why should I,
                          as a website owner or content creator, even care about
                          it?
                        </p>
                        {/* CSS Container Text */}
                        <h2 className="mt-4 text-center">
                          <strong>Story Time!</strong>
                        </h2>
                        <p className="mt-3 text-center">
                          {" "}
                          <strong>
                            In the early days of search engines, lots of media
                            companies tried to shut out Google’s indexing bots.
                            But eventually, they realized they had to be a part
                            of the search engine game.
                          </strong>
                        </p>
                        <p className="mt-3 text-center">
                          <strong>
                            Now we’re seeing a similar situation again. There’s
                            a concern that proprietary data could be misused to
                            train LLMs. But can you really afford to miss out on
                            the opportunity? LLM indexing bots might show up on
                            your site.
                          </strong>
                        </p>

                        <p className="mt-3">
                          My take on this whole thing is, if you can’t beat
                          LLMs, why not team up with them? That’s where llms.txt
                          comes in, and it’s pretty important for businesses,
                          brands, content creators—basically anyone with a
                          website. It gives a bit of control over how AI models
                          can access and use their content, which hasn’t really
                          been a thing until now.
                        </p>
                        <p className="mt-3">
                          Some experiments show that using llms.txt could help
                          models cite your content more accurately, completely,
                          and in a way that makes more sense. That’s a total
                          game-changer for keeping your online reputation in
                          check.{" "}
                        </p>
                        <p className="mt-3">
                          It’s like getting a say in how your info pops up in AI
                          responses, which is a big deal! While it’s not
                          guaranteed to boost SEO like traditional methods, but
                          backed by a decent amount of evidence so far.{" "}
                        </p>
                        {/* Css container text */}

                        <h2 className="mt-4 text-center">
                          <strong>Pro Tip</strong>
                        </h2>
                        <p className="mt-3 text-center">
                          {" "}
                          <strong>
                            Imagine an AI summarizing a product review page.
                            With a well-structured llms.txt, it could be
                            instructed to prioritize verified customer
                            testimonials and downplay any potentially biased
                            comments from forums.{" "}
                          </strong>
                        </p>
                        <p className="mt-3 text-center">
                          <strong>
                            This way, the AI directly shapes its output, helping
                            to protect your brand image when someone’s
                            researching your product.
                          </strong>
                        </p>
                        <h3 className="mt-3">
                          Guiding the AI to the Right Pages
                        </h3>
                        <p className="mt-3">
                          Site owners can also guide AI in prioritizing content,
                          telling it what bits to highlight. For instance, you
                          could even indicate that an article is outdated so the
                          AI understands not to treat it as the latest info.
                        </p>
                        <p className="mt-3">
                          Plus, if there’s proprietary content or behind a
                          paywall, llms.txt can signal to AI models that it
                          should stay private unless the proper permissions are
                          in place.
                        </p>
                        <h3 className="mt-3">Performance Perks</h3>
                        <p className="nt-3">
                          There’s also a perk in terms of server load. If LLMs
                          can get what they need from llms.txt efficiently, they
                          won’t need to crawl the entire site, which is a win
                          for website performance!
                        </p>
                        <h2 className="mt-3">
                          Understanding llms.txt vs. llms-full.txt: What’s the
                          Difference?
                        </h2>
                        <p className="mt-3">
                          I promise this is the last curveball I’m throwing in
                          this article. Before continuing, you should know that
                          llms.txt comes in two flavors. The first one you
                          probably already know is llms.txt, and the second one
                          is llms-full.txt.
                        </p>
                        <p className="mt-3">
                          The difference between them is pretty interesting. Let
                          me break it down for you!
                        </p>

                        <h3 className="mt-3">
                          <strong>Quick vs. Comprehensive</strong>
                        </h3>
                        <p className="mt-3">
                          A helpful analogy for understanding the difference
                          between llms-full.txt and llms.txt is comparing it to
                          a book and your study notes.{" "}
                        </p>
                        <p className="mt-3">
                          llms.txt is a concise version that highlights the most
                          essential parts of your site. Even though there’s no
                          strict rule on how long it should be, keeping it
                          around 5-10 links is suggested. It’s like getting a
                          quick overview of everything your site offers in just
                          one file!{" "}
                        </p>
                        <p className="mt-3">
                          On the flip side, llms-full.txt is the whole
                          shebang—it’s like trying to pack every tiny detail of
                          your website into one text file. That level of
                          granular detail can be super helpful for website
                          owners in influencing how LLMs perceive their website.
                        </p>
                        <h2 className="mt-3">
                          How Large Language Models Actually Use llms.txt
                        </h2>
                        <p className="mt-2">
                          When a Large Language Model such as OpenAI 4o or
                          Gemini encounters your website, here’s what happens:
                        </p>
                        <ol className="mt-3">
                          <li>
                            {" "}
                            The LLM first checks for a large language model text
                            file{" "}
                          </li>
                          <li className="mt-3">
                            If found, it uses this as a guide to understand:
                            <ul>
                              <li>Your site’s primary topics and themes</li>
                              <li>Which content is most authoritative</li>
                              <li>How different pages relate to each other</li>
                            </ul>
                          </li>
                          <li className="mt-3">
                            The AI then uses this understanding when:
                            <ul>
                              <li>
                                Answering questions that might reference your
                                content
                              </li>
                              <li>Generating recommendations or summaries</li>
                              <li>
                                Deciding whether to include your pages in its
                                knowledge base
                              </li>
                            </ul>
                          </li>
                        </ol>
                        <h2 className="mt-3">
                          <strong>
                            Key Differences Between llms.txt and Traditional SEO
                            Files
                          </strong>
                        </h2>
                        <div className="panel mt-2 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflow-x-auto">
                          <table className="uc-table uc-table-divider w-full">
                            <thead className="table-head sticky-top z-1">
                              <tr className="table-row dark:border-white border-gray-900">
                                <th className="table-header-cell">
                                  <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                    Factor
                                  </span>
                                </th>
                                <th className="table-header-cell">
                                  <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                    llms.txt
                                  </span>
                                </th>
                                <th className="table-header-cell">
                                  <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                    robots.txt
                                  </span>
                                </th>
                                <th className="table-header-cell">
                                  <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                                    sitemap.xml
                                  </span>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="table-body">
                              {/* Row 1 */}
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      Primary Purpose
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    Guides AI understanding
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Blocks or allows crawlers
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Lists crawlable pages
                                  </span>
                                </td>
                              </tr>

                              {/* Row 2 */}
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      Format
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    Markdown
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Plain text
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">XML</span>
                                </td>
                              </tr>

                              {/* Row 3 */}
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      Audience
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    LLMs (ChatGPT, Claude)
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Search engine bots
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Search engines (Google, Bing)
                                  </span>
                                </td>
                              </tr>

                              {/* Row 4 */}
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      Content
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    Priorities + context
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Access restrictions
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    URL inventory
                                  </span>
                                </td>
                              </tr>

                              {/* Row 5 */}
                              <tr className="table-row border-gray-900 dark:border-white">
                                <th scope="row">
                                  <div className="hstack gap-1 justify-start">
                                    <span className="fs-5 fw-bold text-dark dark:text-white">
                                      Impact
                                    </span>
                                  </div>
                                </th>
                                <td>
                                  <span className="dark:text-white">
                                    AI recommendations
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Search visibility
                                  </span>
                                </td>
                                <td>
                                  <span className="dark:text-white">
                                    Indexing
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <p className="mt-3">In short:</p>
                        <ul>
                          <li>
                            robots.txt tells search engines what pages to crawl.
                          </li>
                          <li>
                            sitemap.xml provides a full index for search engine
                            bots.
                          </li>
                          <li>
                            LLMs.txt is specifically designed for AI
                            consumption, so models like ChatGPT or Claude can
                            quickly summarise or generate content based on your
                            site.
                          </li>
                        </ul>
                        <h2 className="mt-3">
                          <strong>
                            Creating Your llms.txt File: 5 Easy Steps
                          </strong>
                        </h2>
                        <h3 className="mt-2">
                          Step 1: Planning Your llms.txt Structure
                        </h3>
                        <p className="mt-2">
                          ✅ Before writing your file, conduct a content audit
                          to identify:
                        </p>
                        <ol className="mt-3">
                          <li className="mt-3">
                            🔄<strong> Priority Content</strong>: Your 5-10 most
                            valuable pages/resources
                          </li>
                          <li className="mt-1">
                            <strong>🔄 Secondary Content: </strong>Supporting
                            material that adds depth
                          </li>
                          <li className="mt-1">
                            <strong>🔄Content to Exclude: </strong>Outdated or
                            low-quality pages
                          </li>
                          <li className="mt-1">
                            <strong>🔄Content Relationships: </strong>How pieces
                            connect (tutorial series, etc.)
                          </li>
                        </ol>
                        <h3 className="mt-3">
                          Step 2: Writing the File in Proper Markdown Format
                        </h3>
                        <p className="mt-3">
                          ✅ Your large language model text should follow this
                          exact structure
                        </p>
                        {/* markdown content  */}
                        <h3 className="mt-3">
                          Step 3: Refer to our llms.txt Sample Template
                        </h3>
                        <p className="mt-3">
                          Here’s how a cooking blog might structure theirs:
                        </p>
                        {/* markdown content */}
                        <h3 className="mt-3">
                          Step 4: Technical Implementation
                        </h3>
                        <p className="mt-2">✅ Uploading Your File:</p>

                        <ol className="mt-3">
                          <li>
                            <strong>🔄 File Creation:</strong>
                            <ul>
                              <li className="mt-1">
                                Use a plain text editor (VS Code, Notepad++)
                              </li>
                              <li>Save as llms.txt with UTF-8 encoding</li>
                            </ul>
                          </li>
                          <li className="mt-1">
                            <strong>🔄 Upload Methods:</strong>

                            <ul>
                              <li className="mt-1">
                                <strong>FTP:</strong>Upload to root directory
                                (same level as robots.txt)
                              </li>{" "}
                              <li className="mt-1">
                                <strong>cPanel:</strong>Upload to root directory
                                (same level as robots.txt)
                              </li>{" "}
                              <li className="mt-1">
                                <strong>WordPress:</strong>Via SFTP or plugins
                                like “File Manager”
                              </li>{" "}
                              <li className="mt-1">
                                <strong>Static Sites:</strong>Commit to
                                repository root
                              </li>
                            </ul>
                          </li>
                          <li className="mt-1">
                            <strong>🔄 Verification:</strong>

                            <ul>
                              <li className="mt-1">
                                Visit yourdomain.com/llms.txt
                              </li>{" "}
                              <li className="mt-1">
                                Check for proper Markdown rendering
                              </li>{" "}
                              <li className="mt-1">
                                Validate with tools like MarkdownLint
                              </li>{" "}
                            </ul>
                          </li>
                        </ol>
                        <h3 className="mt-3">
                          Step 5: Keep Your llms.txt File Updated
                        </h3>

                        <p className="mt-3">
                          Your website will change over time, so you need to
                          update your llms.txt file regularly to keep your
                          content accurate for chatbots.
                        </p>

                        <p className="mt-3">✅ When to update?</p>

                        <ul className="mt-3">
                          <li>
                            When you add new product pages, blog posts, FAQs or
                            documentation.
                          </li>
                          <li>When you change your website structure.</li>
                          <li>
                            When your chatbot is providing outdated information.
                          </li>
                        </ul>
                        <p className="mt-3">🔄 How to update?</p>

                        <p className="mt-1">
                          Follow steps 1 to 4 again and replace the old llms.txt
                          file with the new one. Don’t change the name of the
                          new file, it should always be called llms.txt with no
                          prefix or suffix
                        </p>

                        <h2 className="mt-3">Advanced llms.txt Strategies</h2>
                        <h3 className="mt-3">
                          1. Content Prioritization Techniques
                        </h3>
                        <p className="mt-1">
                          Use these methods to signal importance:
                        </p>
                        <ul className="mt-3">
                          <li>
                            <strong>Order Matters:</strong>List the most
                            important content first
                          </li>
                          <li>
                            <strong>Section Hierarchy:</strong>Use H2 for
                            primary categories, H3 for subcategories
                          </li>
                          <li>
                            <strong>Strategic Linking:</strong>Include both deep
                            links and category pages
                          </li>
                          <li>
                            <strong>Temporal Signals:</strong>Add “(Updated
                            2025)” for fresh content
                          </li>
                        </ul>
                        <h3 className="mt-3">2. Context Enhancement Methods</h3>
                        <p className="mt-2">
                          Help LLMs understand your content better by:
                        </p>
                        <ul>
                          <li className="mt-3">
                            <strong>Defining Relationships:</strong>“This
                            advanced guide builds on [Beginner’s Tutorial]”
                          </li>
                          <li>
                            <strong>Explaining Gaps:</strong>“Our 2021 study
                            conclusions were updated in [2024 Research]”
                          </li>
                          <li>
                            <strong>Clarifying Intent:</strong> “Opinion piece
                            representing author’s view”
                          </li>
                          <li>
                            <strong>Linking Related: </strong> “Companion video:
                            [YouTube Tutorial]”
                          </li>
                        </ul>

                        <h3 className="mt-3">
                          3. llms-full.txt for Comprehensive Documentation
                        </h3>
                        <p className="mt-2">
                          For technical sites or documentation, consider adding
                          an llms-full.txt that:
                        </p>
                        <ul className="mt-3">
                          <li>Includes complete API documentation</li>
                          <li>Provides detailed technical specifications</li>
                          <li>Offers comprehensive FAQ sections</li>
                          <li>Contains full glossary terms</li>
                        </ul>
                        <p className="mt-3">
                          <strong>Example Use Case:</strong>
                        </p>
                        <p className="mt-1">A software company might use:</p>
                        <ul className="mt-3">
                          <li>llms.txt for general navigation</li>
                          <li>llms-full.txt for complete API reference</li>
                        </ul>
                        <h2 className="mt-3">
                          Measuring the Impact of llms.txt
                        </h2>
                        <h3>Key Performance Indicators</h3>
                        <p className="mt-1">
                          Track these metrics to assess effectiveness:
                        </p>
                        <h4 className="mt-3">
                          <strong>1. AI Referral Traffic</strong>
                        </h4>
                        <ul className="mt-3">
                          <li>Monitor server logs for LLM user agents</li>
                          <li>Set up analytics segments for AI traffic</li>
                        </ul>
                        <h4 className="mt-3">
                          <strong>2. Content Visibility in AI Outputs</strong>
                        </h4>
                        <ul className="mt-3">
                          <li>Test queries in ChatGPT/Claude</li>
                          <li>Track how often your content is cited</li>
                        </ul>
                        <h4 className="mt-3">
                          <strong>3. Engagement Metrics</strong>
                        </h4>
                        <ul className="mt-3">
                          <li>Time on page from AI referrals</li>
                          <li>Conversion rates of AI-driven visitors</li>
                        </ul>
                        <h4 className="mt-3">
                          <strong>4. Search Performance</strong>
                        </h4>
                        <ul className="mt-3">
                          <li>Changes in branded search volume</li>
                          <li>Featured snippet acquisition</li>
                        </ul>
                        <h3 className="mt-3">Tools for Tracking</h3>
                        <ul className="mt-3">
                          <li>
                            <strong>Google Analytics 4:</strong> Custom segments
                            for AI traffic
                          </li>
                          <li>
                            <strong>Log File Analysis:</strong>Identify LLM
                            crawlers
                          </li>
                          <li>
                            <strong>SEO Platforms:</strong>Monitor visibility
                            changes
                          </li>
                          <li>
                            <strong>Custom Scripts:</strong>Track content
                            citations in AI outputs
                          </li>
                        </ul>
                        <h2 className="mt-3">
                          Real-World Examples of Websites That Use llms.txt
                        </h2>

                        <ol>
                          <li>
                            <p>
                              <a
                                href="https://cohere.com/"
                                className="fw-bold text-blue"
                                target="_blank"
                              >
                                Cohere:{" "}
                              </a>
                              Natural Language Processing (NLP) APIs
                            </p>
                            <p className="mt-1 mb-3">
                              Cohere provides state-of-the-art NLP tools and
                              APIs that allow developers to integrate text
                              generation, classification, and semantic search
                              capabilities into their applications. It is widely
                              used for building AI-driven solutions like
                              chatbots and content generation systems.
                            </p>{" "}
                            <a
                              href="https://docs.cohere.com/llms.txt"
                              target="_blank"
                              className="fw-bold mt-3 text-blue"
                            >
                              ✅ Cohere llms.txt
                            </a>
                          </li>
                          <li className="mt-3">
                            <a
                              href="https://docs.cohere.com/llms.txt"
                              className="fw-bold text-blue"
                              target="_blank"
                            >
                              HubSpot Developers:{" "}
                            </a>
                            CRM and Marketing Automation
                            <p>
                              HubSpot uses LLMs to enhance customer relationship
                              management and marketing automation. Their
                              platform includes AI-powered chatbots, email
                              personalization, and content recommendations to
                              improve customer engagement and streamline
                              marketing efforts.
                            </p>
                            <a
                              href="https://developers.hubspot.com/docs/llms-full.txt"
                              target="_blank"
                              className="fw-bold text-blue mb-3"
                            >
                              ✅ Hubspot Developers llms.txt
                            </a>
                            <br></br>
                            <a
                              href="https://developers.hubspot.com/docs/llms-full.txt"
                              target="_blank"
                              className="fw-bold text-blue "
                            >
                              ✅Hubspot Developers llms-full.txt
                            </a>
                          </li>
                          <li className="mt-3">
                            <a
                              href="https://huggingface.co/"
                              target="-blank"
                              className="fw-bold mt-3 text-blue"
                            >
                              {" "}
                              Hugging Face:
                            </a>
                            Open-Source AI and Machine Learning Models
                            <p>
                              {" "}
                              Hugging Face is a leader in the AI community,
                              offering pre-trained LLMs and tools for developers
                              to build and fine-tune models for tasks like text
                              generation, translation, and sentiment analysis.
                              It is a hub for open-source AI innovation.
                            </p>
                            <a
                              href="https://huggingface-projects-docs-llms-txt.hf.space/hub/llms.txt"
                              className="fw-bold mt-3 text-blue"
                              target="_blank"
                            >
                              ✅ Hugging Face llms.txt
                            </a>
                          </li>
                          <li className="mt-3">
                            <a
                              href="https://zapier.com/"
                              className="fw-bold text-blue"
                            >
                              Zapier:
                            </a>
                            Workflow Automation
                          </li>
                          <p>
                            Zapier integrates LLMs to automate workflows and
                            connect apps. For example, LLMs can be used to
                            summarize emails, generate responses, or extract key
                            information from text as part of automated
                            processes, making workflows more efficient.
                          </p>
                          <a
                            href="https://docs.zapier.com/llms.txt"
                            target="_blank"
                            className="mt-3 text-blue fw-bold"
                          >
                            ✅ Zapier llms.txt{" "}
                          </a>
                          <br></br>
                          <a
                            href="https://docs.zapier.com/llms-full.txt"
                            target="_blank"
                            className="mt-3 text-blue fw-bold"
                          >
                            ✅ Zapier llms-full.txt{" "}
                          </a>
                          <li className="mt-3">
                            <a
                              href="https://www.flowx.ai/"
                              className="text-blue fw-bold"
                              target="_blank"
                            >
                              FlowX.AI:
                            </a>
                            Enterprise Workflow Automation
                            <p>
                              FlowX plays a critical role in AI and is used to
                              optimize enterprise workflows by automating
                              labor-intensive tasks, facilitating intelligent
                              document processing, and improving communications
                              between customers and businesses through
                              large-organizational AI solutions.
                            </p>
                          </li>
                          <a
                            href="https://docs.flowx.ai/llms.txt"
                            className="mt-3 text-blue fw-bold"
                            target="_blank"
                          >
                            ✅ FlowX AI llms.txt
                          </a>
                          <br></br>
                          <a
                            href="https://docs.flowx.ai/llms-full.txt"
                            className="mt-3 text-blue fw-bold"
                            target="_blank"
                          >
                            ✅ FlowX AI llms-full.txt
                          </a>

                          <li className="mt-3">
                            <a
                              href="https://cleartax.in/"
                              className="mt-3 text-blue fw-bold"
                              target="_blank"
                            >
                              ClearTax:
                            </a>
                            Tax Filing and Financial Services
                          </li>
                          <p>
                            ClearTax uses AI and LLMs to make tax filing,
                            financial planning, and tax compliance easy for
                            individuals and businesses. Their solution automates
                            everything from complex calculations to
                            personalized recommendations and accurate
                            submissions of taxes.
                          </p>
                          <a
                            href="https://docs.cleartax.in/cleartax-docs/llms.txt"
                            className="mt-3 text-blue fw-bold"
                            target="_blank"
                          >
                            ✅ Cleartax llms.txt
                          </a>
                          <li className="mt-3">
                            <a
                              href="https://www.cloudflare.com/"
                              className="mt-3 text-blue fw-bold"
                              target="_blank"
                            >
                              Cloudflare:
                            </a>
                            Web Security and Performance
                          </li>
                          <p>
                            LLMs used by Cloudflare to improve web security and
                            performance. Their tools powered by AI, assist in
                            detecting and mitigating cyber threats, optimizing
                            website performance, and providing intelligent
                            insights for managing web traffic.
                          </p>
                          <a
                            href="https://developers.cloudflare.com/llms.txt"
                            className="mt-3 text-blue fw-bold"
                            target="_blank"
                          >
                            ✅ Cloudflare llms.txt
                          </a>
                          <br></br>
                          <a
                            href="https://developers.cloudflare.com/llms-full.txt"
                            className="mt-3 text-blue fw-bold"
                            target="_blank"
                          >
                            ✅ Cloudflare llms-full.txt
                          </a>
                        </ol>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                        <h2 className="mt-3">
                          <strong>
                            {" "}
                            Future-Proofing Your llms.txt Strategy
                          </strong>
                        </h2>
                        <h3 className="mt-2">Emerging Best Practices</h3>
                        <h4 className="mt-2">
                          1. Multimodal Content Signaling
                        </h4>
                        <ul className="mt-3">
                          <li>Adding references to videos, infographics</li>
                          <li>
                            Describing visual content for AI understanding
                          </li>
                        </ul>
                        <h4 className="mt-2">2. Temporal Context</h4>
                        <ul className="mt-3">
                          <li>Clear dating of content</li>
                          <li>Version history for evolving topics</li>
                        </ul>
                        <h4 className="mt-2">3. Knowledge Graph Integration</h4>

                        <ul className="mt-3">
                          <li>Aligning with schema.org markup</li>
                          <li>Connecting to external authority sources</li>
                        </ul>
                        <h4 className="mt-2">4. Personalization Hints</h4>
                        <ul className="mt-3">
                          <li>Audience segmentation cues</li>
                          <li>Connecting to external authority sources</li>
                        </ul>
                        <h3 className="mt-3">The Road Ahead</h3>
                        <p className="mt-3">As AI search evolves, expect:</p>
                        <ul className="mt-3">
                          <li>More sophisticated file formats</li>
                          <li>Two-way communication protocols</li>
                          <li>Standardized evaluation metrics</li>
                          <li>Automated optimization tools</li>
                        </ul>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                        <h2 className="mt-3">
                          Conclusion: Your AI Visibility Blueprint
                        </h2>
                        <p className="mt-3">
                          Implementing llms.txt represents one of the most
                          impactful yet overlooked opportunities in modern web
                          strategy. By taking the time to:
                        </p>
                        <ol className="mt-3">
                          <li>Properly structure your file</li>
                          <li>Thoughtfully prioritize content</li>
                          <li>Provide meaningful context</li>
                          <li>Maintain and update regularly</li>
                        </ol>
                        <p className="mt-3">
                          You position your website to thrive in an increasingly
                          AI-dominated information landscape. The simple act of
                          adding this file can mean the difference between being
                          invisible to LLMs and becoming a go-to resource for
                          AI-generated answers.
                        </p>
                        <h3 className="mt-3">Next Steps:</h3>
                        <ol className="mt-3">
                          <li>
                            Conduct a content audit to identify priority
                            material
                          </li>
                          <li>Draft your llms.txt using our template</li>
                          <li>Upload and verify proper implementation</li>
                          <li>Monitor results and refine quarterly</li>
                        </ol>
                        <p className="mt-3">
                          Remember – in the age of AI search, visibility isn’t
                          just about being found; it’s about being understood.
                          Your large language model text file ensures AI systems
                          comprehend and properly represent your content to the
                          world.
                        </p>
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
