"use client";
import Toc from "./Toc";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function AEOvsSEO({ blogItem }) {
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
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/blog/AEO vs SEO.webp"
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
                        <h1 className="mt-3">
                          AEO vs SEO: Answer Engine Optimization vs Search
                          Engine Optimization Explained{" "}
                        </h1>
                        <div className="panel mt-3">
                          <figure className="float-end ms-3 mb-1">
                            <Item
                              original="/assets/images/blog/AEO vs SEO.webp"
                              thumbnail="/assets/images/blog/post-1.jpg"
                              width="1280"
                              height="853"
                            >
                              {({ ref, open }) => (
                                <figure className="featured-image m-0 rounded ratio ratio-16x9 sm:w-300px uc-transition-toggle overflow-hidden">
                                  <Image
                                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                    alt="image illustarate aeo vs geo"
                                    src="/assets/images/blog/AEO vs SEO.webp"
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
                        </div>
                        <h2 className="mt-3">
                          Introduction: AEO vs SEO in the Age of AI-Driven
                          Search
                        </h2>
                        <p className="mt-3">
                          Imagine this: You’re Googling “
                          <strong>best hiking boots for rocky terrain.</strong>”
                          In 2015, you’d scroll through 10 blue links. In 2025?
                          Google’s AI Overview instantly compares top brands,
                          prices, and durability specs—citing sources like REI
                          and OutdoorGearLab—while ChatGPT drafts you a packing
                          list. No clicks, no ads, just answers.
                        </p>
                        <p className="mt-3">
                          This shift underscores the critical debate of AEO vs
                          SEO, let me tell you:
                          <strong>the game’s changed</strong>. This is the
                          reality of AI-driven search. Answer Engine
                          Optimization (AEO) isn’t just “SEO’s cool younger
                          sibling”—it’s a survival skill. In this blog, we are
                          going to cover the difference between AEO and SEO.
                        </p>

                        <h2 className="mt-3">
                          What is AEO? Answer Engine Optimization for AI Search
                        </h2>
                        <p className="mt-3">
                          If SEO is the librarian who helps you find the right
                          book, AEO is the friend who just hands you the exact
                          page you need.{" "}
                          <strong>
                            The key difference between AEO and SEO
                          </strong>{" "}
                          lies in intent: SEO targets rankings, while AEO
                          targets direct answers in AI-generated summaries,
                          voice search, and zero-click results.
                        </p>
                        <h3 className="mt-3">Example of AEO:</h3>
                        <ul className="mt-3">
                          <li>
                            <strong> AI Overviews:</strong> These are the
                            summaries you see at the top of Google’s search
                            results. Want a deep on on What Google AI Overview
                            is?, visit this post.
                          </li>
                          <li>
                            <strong>Voice Search Responses</strong>: Think
                            Alexa, Siri, or Google Assistant answering your
                            questions.
                          </li>
                          <li>
                            <strong>Zero-Click Results:</strong> Featured
                            snippets that give users the info they need without
                            clicking through.
                          </li>
                        </ul>
                        {/* css image */}

                        <p className="mt-3">
                          If the examples above sound bland to you, let me give
                          you a culinary analogy to explain the concept of
                          Answer Engines. Let’s say you in the good old days,
                          you Google “how to cook medium rare steak” (because
                          we’ve all ruined at least one $20 cut of meat,
                          right?). Search Engine is that friend who sends you 17
                          recipe links, three YouTube tutorials from bearded
                          grill masters, and a Reddit thread debating the merits
                          of butter-basting vs. dry rubs. You’ll click, scroll
                          past ads for “revolutionary meat thermometers,” and
                          maybe—maybe—find a usable tip buried under someone’s
                          life story about their first BBQ.
                        </p>
                        <p className="mt-3">
                          Answer Engines on the other hand? That’s Gordon Ramsay
                          materializing in your kitchen, slapping the tongs out
                          of your hand, and barking, “IT’S NOT A SHOEWE, YOU
                          DONKEY!” while showing you the exact sear time,
                          internal temp, and a GIF of how the steak should bleed
                          (politely, like a British aristocrat). No ads, no
                          blogs about “my journey to carnivore
                          enlightenment”—just answers faster than you can say,
                          “But the recipe said 450 degrees?!”
                        </p>
                        <p className="mt-3">
                          It’s the difference between reading War and Peace and
                          getting a TikTok hack that actually works. AI doesn’t
                          care about your SEO-optimized journey—it’s here to
                          save dinner before your smoke alarm does.
                        </p>
                        {/* CSS Image */}

                        <h2 className="mt-3">SEO: The O.G. Hustler </h2>
                        <p className="mt-3">
                          Remember, the days when you could boost rankings
                          simply by jamming keywords into every possible nook
                          and cranny? That was the era of keyword stuffing, a
                          strategy that feels almost laughable now. Back then,
                          throwing in “best coffee maker” fifty times was
                          considered savvy. Can you imagine?
                        </p>

                        <p className="mt-3">
                          But those days are over. Google has outsmarted such
                          tactics. Today’s SEO landscape demands finesse. It’s
                          no longer about being a loud carnival barker; it’s
                          about being an organized librarian. Precision matters.
                          Modern techniques focus on providing genuine value.
                          Engaging content that meets user needs is the name of
                          the game.{" "}
                        </p>
                        <p className="mt-3">
                          So, bid farewell to the cluttered, repetitive articles
                          of the past. Embrace clarity and relevance instead.
                          The evolution of SEO is a testament to the internet’s
                          growth, pushing for quality over quantity and
                          rewarding those who adapt.
                        </p>
                        <p className="mt-3">
                          <strong>
                            Pro Tip: Even in the Age of AEO, You Can’t
                            Completely Ignore SEO
                          </strong>
                        </p>
                        <p className="mt-1">
                          SEO is like a long-term relationship. You’ve got to
                          nurture it, put in the effort, and keep things fresh.
                          Neglect it, and you’ll find yourself ghosted by Google
                          faster than a bad Tinder date.
                        </p>

                        {/*Css Image  */}

                        <h2 className="mt-3">
                          How to Marry AEO & SEO (My Hacks That Actually Work)
                        </h2>
                        <h3 className="mt-3">
                          AEO Hack #1: Layer Structured Data on SEO-Optimized
                          Pages
                        </h3>
                        <p className="mt-3">
                          Example: SaaS company FlowPath added HowTo schema to
                          its “Project Management Guide,” earning a 40% CTR
                          boost from position-zero snippets.
                        </p>
                        <h3 className="mt-3">
                          AEO Hack #2 Repurpose Top Content for Voice Search
                        </h3>
                        <p className="mt-3">
                          Tactic: Turn “How to Start a Podcast” into a Q&A
                          format targeting Alexa/Google Assistant queries.
                        </p>
                        <h3 className="mt-3">
                          AEO Hack #3 Answer Questions Upfront, Then Dive Deep
                        </h3>
                        <p className="mt-3">
                          Use headers like “What is [Topic]?” to capture AEO
                          snippets, followed by detailed SEO-optimized sections.
                        </p>
                        <h3 className="mt-3">
                          AEO Hack #4 Build Authority with E-E-AOT (Experience,
                          Expertise, Authoritativeness, Trustworthiness)
                        </h3>
                        <p className="mt-3">
                          Case Study: FinTech startup MoneySphere increased demo
                          requests by 70% by adding “As seen in TechCrunch”
                          badges and founder video explainers.
                        </p>
                        <h3 className="mt-3">
                          Hack #5 Optimize for Both Keyword AI Prompts{" "}
                        </h3>
                        <p className="mt-3">
                          Target short-tail keywords (SEO) and long-tail
                          questions (AEO) like “How does AEO work?”.
                        </p>
                        <h3 className="mt-3">Hack #6 Repurpose Top Content</h3>
                        <p className="mt-3">
                          Turn blog posts into voice-search-friendly Q&A guides
                          or video summaries.
                        </p>
                        <h3 className="mt-3">
                          Hack #7 Leverage Structured Data
                        </h3>
                        <p className="mt-3">
                          Implement FAQ, How-To, and Q&A schema markup to boost
                          AEO visibility.
                          <strong>
                            For instance, pages with FAQ schema markup are 50%
                            more likely to appear in Google AI Overview and 30%
                            more likely to appear in ChatGPT and Perplexity AI.
                          </strong>
                        </p>
                        <h3 className="mt-3">
                          Hack #8 Collaborate With Third Party Review Sites
                        </h3>
                        <p className="mt-3">
                          Third-party reviews and comparison sites such as
                          TrustPilot and ReveiwRecap.io highly influence results
                          generated by Answer Engines. As per our latest study,
                          43% of consumers use Answer Engines to ask for reviews
                          before purchasing or visiting local shops.
                        </p>
                        {/* CSS Image */}

                        <h2 className="mt-3">
                          <strong>
                            Conclusion: Future-Proof Your Strategy with AEO and
                            SEO
                          </strong>
                        </h2>
                        <p className="mt-3">
                          <strong>AEO vs SEO</strong> isn’t a battle—it’s a
                          partnership. To survive AI search, you need both: SEO
                          for the deep divers, AEO for the “I-need-this-now”
                          crowd.
                        </p>
                        <p className="mt-3">
                          While <strong>SEO</strong> remains vital for organic
                          rankings, <strong>AEO</strong> is essential for
                          dominating AI-driven search. By blending keyword-rich
                          long-form content (SEO) with concise, schema-optimized
                          answers (AEO), brands can thrive in both traditional
                          and AI-powered Answer Engines.
                        </p>
                        <p className="mt-3">
                          <strong>Ready to optimize for both?</strong> Start by
                          auditing your content for AEO opportunities and
                          partnering with an SEO agency versed in AI search
                          tactics.
                        </p>
                        <h2 className="mt-3">
                          <strong>FAQs: AEO vs SEO</strong>
                        </h2>

                        <p className="mt-6">
                          <strong>
                            What is Answer Engine Optimization (AEO)?
                          </strong>
                          <br></br>
                          AEO is the practice of optimizing content to appear in
                          AI-generated answers, featured snippets, and voice
                          search results. It focuses on providing direct,
                          concise responses to user queries in platforms like
                          Google’s AI Overviews, ChatGPT, and voice assistants.
                          <br></br>
                          <strong>Difference between AEO and SEO?</strong>
                          <br></br>
                          While SEO aims to rank websites in traditional search
                          results, AEO targets zero-click visibility in AI
                          answers. SEO uses keywords, backlinks, and long-form
                          content, while AEO prioritizes structured data,
                          conversational queries, and succinct answers.
                          <br></br>
                          <strong>Why is AEO becoming critical in 2025?</strong>
                          <br></br>
                          With 84% of Google searches triggering AI Overviews
                          (March 2025 data) and 50% of U.S. adults using voice
                          search daily, users increasingly rely on instant
                          answers rather than clicking links.<br></br>
                          Can I use AEO and SEO together? Yes! For example,
                          optimize long-form blog content (SEO) while adding FAQ
                          schema and concise Q&A sections (AEO). Brands like
                          MedAnswers saw 65% of traffic from AI Overviews by
                          combining both strategies. What technical steps are
                          needed for AEO? Implement structured data (FAQ,
                          How-To, or Q&A schema), optimize for natural language
                          keywords, and ensure mobile-friendliness. Pages with
                          schema markup are 50% more likely to appear in
                          featured snippets. How do I measure AEO success? The
                          track featured snippet rankings, Google Search
                          Console’s “AI Overview impressions,” and voice search
                          traffic. Tools like SEMrush and Ahrefs now include
                          AEO-specific metrics. Which industries benefit most
                          from AEO? Healthcare, finance, and tech—industries
                          with high informational queries. For instance,
                          MedAnswers grew featured snippet appearances by 50%
                          using medical schema markup. Does voice search
                          optimization require AEO? Yes. Voice searches are
                          conversational (e.g., “How do I lower cholesterol?”),
                          so AEO tactics like natural language answers and local
                          intent targeting (e.g., “near me”) are essential. How
                          does E-E-A-T impact AEO? Google prioritizes content
                          with Experience, Expertise, Authoritativeness, and
                          Trustworthiness. Expert-reviewed content (e.g.,
                          physician-cited articles) earns 3x more AI Overview
                          inclusions. Will AEO replace SEO in the future? No—SEO
                          remains vital for long-term authority, while AEO
                          captures immediate AI-driven visibility. Brands like
                          EcoGear combined both to drive 300% organic traffic
                          and dominate AI Overviews.
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
