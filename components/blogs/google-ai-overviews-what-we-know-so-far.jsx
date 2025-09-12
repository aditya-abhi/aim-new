"use client";
import Toc from "./Toc";
import RelatedBlogs from "../blog/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "./faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function BlogGoogleAI({ blogItem }) {
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
                  {blogItem.title}
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
                    src="/assets/images/blog/blog-5-thumbnail.jpg"
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
            <div className="row child-cols-12 g-2 lg:g-4 xl:g-8">
              <div className="md:col-8 order-0">
                <div className="uc-main panel" role="main">
                  <Gallery>
                    <div
                      className="post-content panel fs-6 md:fs-5"
                      data-uc-lightbox="animation: scale"
                    >
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Release of Google AI Overviews
                      </h2>
                      <p>
                        Google hosted its annual I/O developer conference last
                        Tuesday and introduced a series of artificial
                        intelligence products. These include new search and chat
                        features and AI hardware for cloud customers,
                        underlining Google’s insistence on AI even as rivals
                        like OpenAI emerge.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Transforming Search with AI Overviews
                      </h2>
                      <p className="mt-3">
                        The switch from traditional results based on links to
                        summaries generated by AI reveals a step towards a more
                        intuitive and integrated search experience. Many
                        industry experts have referred to this as the ‘day zero’
                        of Google search, the information retrieval technology
                        that makes it easy for users to get quick insights into
                        complex topics without having them move away from their
                        initial queries.
                      </p>
                      <p className="mt-3">
                        Generative AI significantly shifts from traditional
                        keyword-based searching towards more intuitive,
                        context-aware methods. It can generate and comprehend
                        text that sounds human-like, so users get a
                        comprehensive overview of their search queries
                        immediately.
                      </p>
                      <p className="mt-3">
                        With the help of Gemini, Google’s latest AI model, they
                        aim to revolutionize users’ interaction with search
                        results. To start, Google has introduced AI Overviews
                        (earlier Google SGE), which essentially provides a
                        summary of search results with links for further
                        details, transforming how users search for information
                        on Google.
                      </p>
                      <p className="mt-3">
                        Building on the capabilities introduced with SGE, Google
                        is pushing the boundaries of AI in search, making it
                        faster, more precise, and exceptionally user-friendly.
                        As AI Overviews roll out to users in the United States
                        with plans for global expansion, casual users and
                        professionals in fields like marketing should notice.
                      </p>
                      {/* <div className="panel mt-3">
                        <figure className="float-end ms-3 mb-1">
                          <Item
                            original="/assets/images/blog/post-1.jpg"
                            thumbnail="/assets/images/blog/post-1.jpg"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Holding flower, by Anthony Tran"
                                  src="/assets/images/blog/post-1.jpg"
                                  width="1280"
                                  height="853"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Holding flower, by Anthony Tran"
                                ></a>
                              </figure>
                            )}
                          </Item>
                          <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                            Holding flower, by Anthony Tran
                          </figcaption>
                        </figure>
                        <p>
                          Bike paths and sidewalks make getting to and from the
                          city’s many festivals, museums, restaurants and music
                          venues easy. A range of amenities provides many things
                          to do in Bellevue. About 40 percent of the city’s
                          population are minorities, which contributes to an
                          overall diverse range of lifestyles and ideas.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained. Olympic
                          mountain bikers, musicians, and award-winning chefs
                          about what exactly makes their hometowns so special
                          and fun.
                        </p>
                        <p className="mt-3">
                          In fact, not being able to rely on spoken word made
                          them better storytellers. They fully understood and
                          used the power of showing without words. They fully
                          understood and used the power of showing without
                          words. They fully understood and used the power of
                          showing without words.
                        </p>
                      </div> */}
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        What Are Google’s AI Overviews?
                      </h2>
                      <p>
                        AI Overviews is a new Google search feature that uses
                        generative AI to create quick answers to search queries
                        through a topic preview with links to learn more.
                        Powered by Google Gemini, it combines information from
                        multiple online sources to save the searcher time and
                        provide a general overview – hence the name.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Example and Rollout
                      </h2>
                      <p className="mt-3">
                        As announced on May 14th, Google began rolling out AI
                        Overviews to US-based searchers, with plans to expand to
                        other countries. Originally introduced as part of the
                        Google Search Labs experiment, Search Generative
                        Experience (SGE), users had to opt into this feature. By
                        the end of 2024, AI Overviews will be available to over
                        a billion searchers.
                      </p>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/internal/google-webpage.webp"
                          thumbnail="/assets/images/blog/internal/google-webpage.webp"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/internal/google-webpage.webp"
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
                        {/* <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                          Pink Marketing, by Mak
                        </figcaption> */}
                      </figure>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        How Do AI Overviews Work?
                      </h2>
                      <p>
                        Here’s a general model of how AI Overviews generate
                        responses:
                      </p>
                      <ul>
                        <li>
                          <b>Query Processing:</b>Once you type in a query, the
                          AI transforms your words into a vector, just as
                          ChatGPT works.
                        </li>
                        <li>
                          <b>Document Selection: </b>Google’s algorithm selects
                          a few relevant web pages containing information
                          related to the generated response.
                        </li>
                        <li>
                          <b>Fact-Checking: </b>These chosen documents act as
                          fact-checkers. If there is any contradiction between
                          the AI-generated text and the information provided in
                          these documents, then the AI modifies its response
                          accordingly. Hence, you can see the “sources”
                          mentioned each time.
                        </li>
                        <li>
                          <b>Evaluation:</b>An extra evaluation step might be
                          required to determine the response’s accuracy and
                          relevance before presenting it.
                        </li>
                      </ul>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        The Impact of AI Overviews on SEO So Far
                      </h2>
                      <p className="mt-3">
                        At one point, an AI summary was produced by about 85% of
                        search queries. However, this trend has undoubtedly
                        reversed, and at present, approximately 14% of searches
                        produce an AI Summary. The likelihood of triggering an
                        AI summary varies considerably across domains,
                        fluctuating between 1% and 25%.
                      </p>
                      {/* <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/post-2.jpg"
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
                      </figure> */}
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        User Concerns
                      </h2>
                      <p>
                        Currently, users cannot opt out of AI Overviews, leading
                        to frustration among some who have flooded Google’s help
                        forums for advice on disabling them. The Google trends
                        chart for “turn off Google AI” spiked over the week that
                        AI Overviews were launched, highlighting widespread
                        discontent.
                      </p>
                      <p className="mt-3">
                        Given the scale of its release and the extensive amount
                        of Search Engine Results Page (“SERP”) real estate it
                        takes up, SEO professionals are concerned about how it
                        will impact their organic rankings and overall SEO
                        performance.
                      </p>
                      {/* <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/post-2.jpg"
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
                      </figure> */}
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Concerns for Publishers
                      </h2>
                      <p>
                        Traditional page views may be adversely affected when AI
                        Overviews consolidate content, leading to decreased ad
                        revenue and lower content engagement. Based on habits
                        that emerged during the past year’s testing phase of
                        Google’s AI overviews, about 25% of the traffic could be
                        negatively affected by the de-emphasis on website links,
                        said Marc McCollum, chief innovation officer at Raptive.
                        <Link
                          className="text-blue"
                          href="https://apnews.com/article/google-search-ai-overviews-internet-traffic-ebb6bbbde17ed29a5f7b630d9e5e285b"
                          target="_blank"
                        >
                          (Source)
                        </Link>
                        {/* <a
                          className="text-blue"
                          href="https://apnews.com/article/google-search-ai-overviews-internet-traffic-ebb6bbbde17ed29a5f7b630d9e5e285b"
                          target="_blank"
                        >
                          (Source)
                        </a> */}
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Transactional Keywords and Local Intent
                      </h2>
                      <p className="mt-3">
                        In some cases, AI Overviews may be seen for longer-tail
                        queries with transactional intent but only sometimes for
                        short-tail ones. AI Overviews no longer show for local
                        queries based on our sample. However, this might change
                        in the future.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Informational Keywords are Most Affected
                      </h2>
                      <p>
                        AI overviews are mainly triggered by informational
                        searches, especially those related to procedures or
                        tasks.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Authoritative Domains
                      </h2>
                      <p className="mt-3">
                        AI Overviews are available for authoritative domains
                        such as health, legal, and finance. However, they often
                        come with the recommendation to consult experts in the
                        field and to use the advice at the user’s own risk.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Why Are AI Overviews So Limited?
                      </h2>
                      <p>
                        The limited appearance of AI overviews suggests some
                        hesitation from Google in launching a full-scale
                        implementation. Potential reasons include:
                      </p>
                      <ul className="mt-2">
                        <li>
                          Intent mismatch between search queries and AI
                          Overviews.
                        </li>
                        <li>
                          Intent mismatch between search queries and AI
                          Overviews.
                        </li>
                        <li>
                          Fewer filters and features compared to traditional
                          search results.
                        </li>
                      </ul>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Embracing LLM SEO or Generative Engine Optimization
                      </h2>
                      <p>
                        LLM SEO / GEO revolves around content optimization for
                        generative engines, which makes it vital for any content
                        creator who desires to succeed in an AI-dominated search
                        scene. Content creators can significantly increase the
                        visibility of their content in artificial
                        intelligence-based searches by employing LLM SEO/GEO
                        strategies.
                      </p>
                      <p className="mt-3">
                        If you want to learn more about this topic, check out
                        the LLM SEO LeaderBoard. It covers almost all the
                        techniques and hacks that are currently available.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        AI Monitor Tracker
                      </h2>
                      <p>
                        With AI Monitor, you can track how frequently your
                        content appears not only in AI overviews but also on
                        other platforms such as ChatGPT, Perplexity, and others.
                        After adding your website and setting up tracking for
                        your selected prompts, the tool will begin monitoring
                        your site’s visibility across nearly every LLM-powered
                        search engine.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Brand Mentions
                      </h2>
                      <p>
                        AI Monitor Brand Mentions is a fantastic tool for
                        tracking brand mentions in AI summaries across various
                        platforms. It’s like having a spotlight on your content,
                        even if it’s not ranking high traditionally.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        AI Semantic Rating
                      </h2>
                      <p>
                        In addition to the above, we help marketers track
                        whether AI summaries portray your company as a hero or a
                        villain in a fairytale. AI Monitor analyzes sentiment in
                        AI summaries to ensure that your content is accurately
                        portrayed.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        LLM Click Rate
                      </h2>
                      <p>
                        We have also invented a novel framework for analyzing
                        website prominence in AI summaries. Here, we present the
                        “LLM Click Rate (LCR)” score, which is based on several
                        significant metrics weighed by their importance in
                        showing the true exposure of the website within LSE
                        responses. You can learn more about this framework here.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">Conclusion</h2>
                      <p>
                        The key point is: don’t panic. Most AI responses are
                        aimed at less common, less searched-for queries, which
                        are generally unlikely to have a significant impact on
                        most sites.
                      </p>
                      <p className="mt-3"></p>
                      Why stress about your website’s SEO when you could
                      prioritize these vital queries for your site instead? If
                      you notice AI Overviews appearing for specific queries,
                      aim to become one of the featured sources.
                      <p className="mt-3">
                        If you want to learn more about how to feature your
                        content or brand on LLM-powered search engines, check
                        out the LLM SEO LeaderBoard, which covers almost all the
                        techniques and hacks known to mankind.
                      </p>
                      {/* <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/post-2.jpg"
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
                      <p>
                        get to the Rockies for snowboarding and ski activities,
                        a local expert explained.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Capital of Texas5
                      </h2>
                      <p>
                        Visual storytelling is simply the way most brands will
                        decide to go in 2016 &amp; beyond, as they try to tell
                        their story to their customers the oldest and most
                        important unwritten rule in film industry says that you
                        shouldn’t rely much on words to tell your story. In
                        fact, you should rely on them as less as possible. It’s
                        no coincidence that Buster Keaton and Charlot’s movies
                        remain among the biggest classic movies of all time. In
                        fact, not being able to rely on spoken word made them
                        better storytellers. They fully understood and used the
                        power of showing without words.
                      </p>
                      <p className="mt-3">
                        While Denver sits at the base of the Rocky Mountains,
                        it’s not considered a mountain town since it takes at
                        least an hour to get to the Rockies for snowboarding and
                        ski activities, a local expert explained sits at the
                        base of the Rocky Mountains, it’s not considered a
                        mountain town since it takes at least an hour to get to
                        the Rockies for snowboarding and ski activities, a local
                        expert explained.
                      </p>
                      <figure className="my-3 sm:my-4">
                        <Item
                          original="/assets/images/blog/post-2.jpg"
                          thumbnail="/assets/images/blog/post-2.jpg"
                          width="1280"
                          height="853"
                        >
                          {({ ref, open }) => (
                            <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                              <Image
                                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                alt="Pink Marketing, by Mak"
                                src="/assets/images/blog/post-2.jpg"
                                width="1280"
                                height="853"
                                ref={ref}
                              />
                              <a
                                onClick={open}
                                className="position-cover"
                                data-caption="Pink Marketing, by Mak"
                              ></a>
                              <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                                Pink Marketing, by Mak
                              </figcaption>
                            </figure>
                          )}
                        </Item>
                      </figure>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Great Schools and Entertainment 2
                      </h2>
                      <p>
                        Education is a high point when it comes to analyzing the
                        quality of life factors that make Ann Arbor one of the
                        best places to live. The University of Michigan, which
                        has 43,000 students, makes Ann Arbor a perennial
                        candidate for our annual ranking of the best college
                        towns and plays a big role in the city’s economy and
                        culture.
                      </p>
                      <p className="mt-3">
                        While Denver sits at the base of the Rocky Mountains,
                        it’s not considered a mountain town since it takes
                        considered at least an hour to get to the Rockies for
                        snowboarding and ski activities, a local expert
                        explained sits at the base of the Rocky Mountains, it’s
                        not considered a mountain town since it takes at least
                        an hour to get to the Rockies for snowboarding and ski
                        activities, a local expert explained.
                      </p>
                      <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Great Schools and Entertainment
                      </h4>
                      <p>
                        Education is a high point when it comes to analyzing the
                        quality of life factors that make Ann Arbor one of the
                        best places to live. The University of Michigan, which
                        has 43,000 students, makes Ann Arbor a perennial
                        candidate for our annual ranking of the best college
                        towns and plays a big role in the city’s economy and
                        culture.
                      </p>
                      <p className="mt-3">
                        While Denver sits at the base of the Rocky Mountains,
                        it’s not considered a mountain town since it takes
                        considered at least an hour to get to the Rockies for
                        snowboarding and ski activities, a local expert
                        explained sits at the base of the Rocky Mountains, it’s
                        not considered a mountain town since it takes at least
                        an hour to get to the Rockies for snowboarding and ski
                        activities, a local expert explained.
                      </p>
                      <div className="panel my-3">
                        <figure className="float-start me-3 mb-0">
                          <Item
                            original="/assets/images/blog/post-3.jpg"
                            thumbnail="/assets/images/blog/post-3.jpg"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Great Schools and Entertainment"
                                  src="/assets/images/blog/post-3.jpg"
                                  width="1280"
                                  height="854"
                                  ref={ref}
                                />
                                <a
                                  onClick={open}
                                  className="position-cover"
                                  data-caption="Great Schools and Entertainment"
                                ></a>
                              </figure>
                            )}
                          </Item>
                          <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                            Great Schools and Entertainment
                          </figcaption>
                        </figure>
                        <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Great Schools and Entertainment
                        </h4>
                        <p>
                          Education is a high point when it comes to analyzing
                          the quality of life factors that make Ann Arbor one of
                          the best places to live. The University of Michigan,
                          which has 43,000 students, makes Ann Arbor a perennial
                          candidate for our annual ranking of the best college
                          towns and plays a big role in the city’s economy and
                          culture.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes
                          considered at least an hour to get to the Rockies for
                          snowboarding and ski activities, a local expert
                          explained sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Great Schools and Entertainment 5
                        </h2>
                        <p>
                          Education is a high point when it comes to analyzing
                          the quality of life factors that make Ann Arbor one of
                          the best places to live. The University of Michigan,
                          which has 43,000 students, makes Ann Arbor a perennial
                          candidate for our annual ranking of the best college
                          towns and plays a big role in the city’s economy and
                          culture.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes
                          considered at least an hour to get to the Rockies for
                          snowboarding and ski activities, a local expert
                          explained sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained.
                        </p>
                        <p>
                          Bike paths and sidewalks make getting to and from the
                          city's many festivals, museums, restaurants and music
                          venues easy. A range of amenities provides many things
                          to do in Bellevue. About 40 percent of the city's
                          population are minorities, which contributes to an
                          overall diverse range of lifestyles and ideas.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it's not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained. Olympic
                          mountain bikers, musicians, and award-winning chefs
                          about what exactly makes their hometowns so special
                          and fun. In fact, not being able to rely on spoken
                          word made them better storytellers. They fully
                          understood and used the power of showing without
                          words. They fully understood and used the power of
                          showing without words.
                        </p>
                      </div>
                      <p>
                        Probably the oldest and most important unwritten rule in
                        film industry says that you shouldn’t rely much on words
                        to tell your story. In fact, you should rely on them as
                        less as possible is simply the way most brands will
                        decide to go in 2016 &amp; beyond, as they try to tell
                        their story to their customers.
                      </p>
                      <p className="mt-3">
                        I talked to climbers, Olympic mountain bikers,
                        musicians, and award-winning chefs about what exactly
                        makes their hometowns so special and fun.
                      </p> */}
                    </div>
                  </Gallery>
                </div>
              </div>
              <div className="md:col-4 order-2 lg:order-1">
                <div>
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
