"use client";
import Toc from "./Toc";
import RelatedBlogs from "../blog-old/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "./faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function GoogleSEGRansRAG({ blogItem }) {
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
                    src="/assets/images/blog/Blog-sge-&-rag.webp"
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
                        Introduction
                      </h2>
                      <p>
                        Google SGE and RAG, are two buzzwords disrupting the
                        tech and SEO community these days. These innovations are
                        reshaping how users interact with search engines and how
                        businesses optimize their content for visibility. This
                        article explores what they are, how they work, and why
                        they matter for SEO.
                      </p>
                      <p className="mt-3">
                        So grab your coffee (maybe tea—whatever you fancy—I
                        won’t judge), sit down, and let’s analyze it in a easy
                        to understand way, I promise.
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
                        What the Heck is Google SGE?
                      </h2>
                      <p>
                        The best way for me to explain this is by giving you
                        this example. Picture this: you Google “best pizza in
                        NYC.” Traditionally, you’d get a list of links to blogs
                        and Yelp reviews, right? Now, with Google SGE (Search
                        Generative Experience), the search engine takes a leap
                        forward. It doesn’t just hand you links—it serves you a
                        personalized, AI-generated summary that practically
                        screams, “Here’s the pizza you didn’t know you were
                        craving!”
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Why It’s a Game-Changer
                      </h2>
                      <ul>
                        <li>
                          <b>Fast Answers:</b> No more endless scrolling to get
                          your answer. Boom—your answer is right there.
                        </li>
                        <li>
                          <b>Contextual Relevance:</b> Adapts to the user’s
                          intent with personalized results.Google’s AI reads
                          between the lines of your search intent (spooky but
                          cool).
                        </li>
                        <li>
                          <b>Interactive Visuals:</b> Displays information
                          interactively. Think of it as Instagram meets
                          Wikipedia.
                        </li>
                        <li>
                          <b>Integrated Search:</b> Combines traditional search
                          with AI-generated insights
                        </li>
                      </ul>
                      <p className="mt-3">
                        But here’s the kicker: while this is fantastic for
                        users, it’s a potential nightmare for website owners.
                        Why? Because fewer clicks on links = less traffic to
                        your site. Ouch.
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
                        What the Heck is RAG in AI?
                      </h2>
                      <p className="mt-3">
                        So, let’s go ahead and learn about RAG aka
                        Retrieval-Augmented Generation. Imagine this: you are
                        writing an essay, and you want your memory to work as
                        well as if you got a library book for each of the facts
                        to help you out. RAG is doing just that.
                      </p>
                      <p className="mt-3">
                        It puts together the radio of AI’s creativity with the
                        irrevocability of an external source.{" "}
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
                        How RAG Works (In Simple Plain English)
                      </h2>
                      <ol>
                        <li>
                          <b>Retrieves Information:</b>The system is able to
                          make use of data that has been retrieved, which is
                          like Googling someone in the middle of a
                          conversation—very quick and accurate.
                        </li>
                        <li>
                          <b>Generates Text:</b>Combines that info into a
                          response so smooth you’d think it was written by
                          Hemingway. (Okay, maybe not exactly Hemingway.)
                        </li>
                        <li>
                          <b>Real-time updates:</b>In contrast to basic AI
                          models, RAG is constantly updated. It is like an AI
                          with a pulse.
                        </li>
                      </ol>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Why RAG Rocks
                      </h2>
                      <p>
                        It’s not just for nerdy developers. Businesses are
                        already using it for:
                      </p>
                      <ul>
                        <li>
                          Customer support chatbots (finally, ones that don’t
                          give robotic vibes).
                        </li>
                        <li>
                          Content creation (hello, SEO-friendly blogs like this
                          one).
                        </li>
                        <li>
                          Complex problem-solving (because math still haunts
                          me).
                        </li>
                      </ul>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-2">
                        Why It’s a Game-Changer
                      </h2>
                      <ul>
                        <li>
                          <b>Fast Answers:</b>No need to scroll endlessly.
                          Boom—your answer is right there.
                        </li>
                        <li>
                          <b>Tailored Results:</b>Google’s AI reads between the
                          lines of your search intent (spooky but cool).
                        </li>
                        <li>
                          <b>Interactive Visuals:</b>Think of it as Instagram
                          meets Wikipedia.
                        </li>
                      </ul>

                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-2">
                        Why RAG Rocks
                      </h2>
                      <p>
                        It’s not just for nerdy developers. Businesses are
                        already using it for:
                      </p>
                      <ul>
                        <li>
                          Customer support chatbots (finally, ones that don’t
                          give robotic vibes).
                        </li>
                        <li>
                          Content creation (hello, SEO-friendly blogs like this
                          one).
                        </li>
                        <li>
                          Complex problem-solving (because math still haunts
                          me).
                        </li>
                      </ul>

                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-2">
                        SGE vs. Google Search: The Face-Off
                      </h2>

                      <p className="mt-3">
                        Okay, here’s an analogy for you: Consider the
                        traditional search as a treasure hunt—you dig through a
                        pile of sources in hopes of finding the right
                        information. In contrast with SGE: you receive both the
                        map and the treasure chest all at once.
                      </p>
                      <p className="mt-3">
                        While SGE simplifies life for searchers, it’s throwing
                        SEO pros into a frenzy. Think of it as a chef losing
                        diners because they now get pre-packed meals at their
                        doorstep.
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
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-2">
                        How to Prepare Your Website for Google SGE
                      </h2>
                      <p>
                        Since you can’t beat SGE, why not adapt to it? Here’s
                        your game plan:
                      </p>
                      <ul>
                        <li>
                          <b>Master Snippet Optimization:</b>Write content so
                          good it gets featured in SGE’s AI summaries. Think
                          bite-sized but juicy.
                        </li>
                        <li>
                          <b>Leverage Schema Markup:</b>Help Google understand
                          your content’s context. It’s like giving the AI a GPS
                          to your data.
                        </li>
                        <li>
                          <b>Focus on E-E-A-T:</b>Prove your content’s
                          Expertise, Experience, Authority, and Trustworthiness.
                          (I call it the “credibility cocktail.”)
                        </li>
                        <li>
                          <b>Diversify Your Traffic Sources:</b>Don’t put all
                          your eggs in Google’s basket. Think email lists,
                          social media, and—gasp—direct traffic.
                        </li>
                      </ul>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        RAG vs. Traditional AI Models: Why It’s a Big Deal
                      </h2>
                      <p>
                        Here’s where RAG pulls ahead. Unlike traditional AI
                        models that only rely on pre-trained knowledge (like me
                        only remembering facts from the 90s), RAG pulls in fresh
                        data. It’s like having a friend who not only remembers
                        trivia but also keeps up with TikTok trends.
                      </p>

                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Cool RAG Applications
                      </h2>
                      <ul>
                        <li>
                          <b>Chatbots:</b>Forget those useless “Sorry, I didn’t
                          get that” responses.
                        </li>
                        <li>
                          <b>Content Creation:</b>Need SEO content? RAG’s got
                          your back (but I still think I’m better 😉).
                        </li>
                        <li>
                          <b>Dynamic Research:</b> Perfect for industries where
                          data changes faster than fashion trends.
                        </li>
                      </ul>

                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        My Two Cents: The Future of SEO with SGE and RAG
                      </h2>

                      <p>
                        Honestly, the rise of SGE and RAG feels like watching a
                        plot twist in your favorite series. It’s exciting but
                        nerve-wracking. For businesses, the key is to adapt and
                        innovate. AI won’t replace humans (not yet), but it will
                        reward those who embrace it.
                      </p>
                      <p className="mt-3">
                        Also, don’t forget: even the best AI needs your
                        expertise to thrive. After all, AI doesn’t sip coffee,
                        stress about traffic numbers, or laugh at bad puns.
                        That’s where we come in—adding the human touch AI can’t
                        replicate.
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
                        Feeling Overwhelmed?
                      </h2>
                      <p>
                        Are you ready to embrace the AI revolution, or will you
                        be left behind? You don’t have to navigate this journey
                        alone; we can be your Robin while you take on the role
                        of Batman. Schedule a meeting directly with the founder
                        of AI Monitor here:
                        https://appt.link/ai-monitor/30-minutes-discovery-call
                      </p>
                      {/* <p className="mt-3">
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
