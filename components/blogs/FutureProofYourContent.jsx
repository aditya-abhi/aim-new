"use client";
import Toc from "./Toc";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function FutureProofYourContent({ blogItem }) {
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
                  Future Proof Your Content: Top 4 Strategies to Outsmart AI and
                  Dominate Search
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
                    src="/assets/images/blog/FutureProofYourContent.webp"
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
                        <p className="">
                          Imagine this: you’ve poured weeks into crafting the
                          perfect blog post, packed with keywords, SEO
                          brilliance, and polished to perfection. Then, like a
                          scene straight out of The Terminator, ChatGPT storms
                          in, rewrites it in mere seconds, and just like that,
                          your masterpiece becomes another ripple in the AI
                          ocean. Sound familiar?
                        </p>
                        <p>
                          The demand for future-proof, original content has
                          never been more urgent. In this AI-driven era, if
                          content creation is at the core of your work or if
                          your platform relies on content for visibility, then
                          securing your content’s relevance is not just
                          important, but essential. Now is the time to ensure
                          your content stands out and remains valuable in an
                          evolving digital landscape.
                        </p>
                        <p>
                          The sheer volume of AI-generated content is predicted
                          to reach 60% of everything published online by the end
                          of 2025. And this is when the online world becomes
                          massively cluttered. In this article, we explore key
                          strategies for crafting evergreen content that remains
                          relevant over time, helping you stand out in the
                          evolving landscape of AI-driven search.
                        </p>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/post-2.jpg"
                            thumbnail="/assets/images/blog/post-2.jpg"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FutureProofYourContent1.webp"
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
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          The Urgency of Future-Proofing in the AI Era
                        </h2>
                        <p>
                          With so much content being produced, standing out and
                          ensuring that your material remains valuable,
                          recognized, and referenced by AI engines, not just
                          today, but in the future, is essential. Creating
                          content that not only meets the current demands but
                          also anticipates the needs of evolving AI systems and
                          the preferences of the people will help ensure its
                          longevity in an AI-driven world.
                        </p>
                        <p className="mt-3">
                          The question isn’t whether AI will reshape content
                          discovery—it already has. The real challenge is
                          ensuring that your content is built to last.
                          Short-term engagement can be achieved with regular
                          content. That said, such content is devoid of
                          substance and depth, making it unimportant in no time.
                        </p>
                        <p>
                          This blog explores why future-proofing your content is
                          going to be important and what businesses can do to
                          adapt to these changes to remain in front. We will
                          examine the value of crafting evergreen content and
                          how adopting the principles of Generative Engine
                          Optimization (GEO) can set brands for long-term
                          visibility.
                        </p>
                        <h2 class="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Why Future-Proofing Matters for Generative Engine
                          Optimization (GEO)
                        </h2>
                        <p>
                          Before proceeding further, we must understand what is
                          Generative Engine Optimization (GEO). It is more than
                          just an upgraded version of SEO, despite common
                          misconceptions. In the era of AI Engines and LLMs, the
                          way content is discovered, ranked, and consumed has
                          undergone a major shift.
                        </p>
                        <p>
                          Gone are the days when users relied solely on Google’s
                          top 10 search results. Today, they turn to AI chatbots
                          like ChatGPT, Perplexity, and Gemini for direct
                          answers. Even on Google, the introduction of AI
                          Overviews means users receive AI-generated summaries
                          instead of just a list of links.
                        </p>
                        <p>
                          As a result, brands that once thrived on high search
                          rankings are seeing a steady decline in organic
                          traffic. This is where GEO comes in. It optimizes
                          content for AI-driven Answer Engines, ensuring that
                          chatbots and LLMs better understand, interpret, and
                          cite your content when responding to user queries.
                        </p>
                        <p>
                          Unlike traditional SEO, which focuses on keywords and
                          backlinks to rank web pages, GEO goes beyond, helping
                          content adapt to how AI engines process vast amounts
                          of data and generate relevant, summarized responses
                          rather than just displaying raw search results.
                        </p>
                        <p>
                          The future of search is conversational, and GEO
                          ensures your brand stays ahead in this new era.
                        </p>
                        <h2 class="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Why This Matters for Your Brand
                        </h2>
                        <p>
                          The reality is clear: AI-based content discovery has
                          arrived, and it is dramatically altering the
                          traditional way people search and find content online.
                          Businesses must now rethink their content schemes in
                          order to shift focus from conventional{" "}
                          <b>SEO to Generative Engine Optimization (GEO).</b>
                        </p>
                        <p>
                          By future-proofing your content with these new AI
                          principles in mind, you position your brand as a
                          trusted source of information. This long-term approach
                          helps ensure that your content will continue to be
                          cited in the AI-generated answers long after its
                          initial publication, maintaining its visibility and
                          relevance, and in turn helping your brand grab
                          eyeballs.
                        </p>
                        <p>
                          To stay ahead in AI-driven search, businesses need to
                          adopt GEO principles that emphasize:
                        </p>
                        <ul>
                          <li className="mt-1">
                            <b>Timeless insights</b>over fleeting trends
                          </li>
                          <li>
                            <b>Use of credible information</b> that AI models
                            acknowledge.
                          </li>
                          <li>
                            <b> Human-centric narratives</b> that resonate
                            beyond algorithms.
                          </li>
                          <li>
                            <b>Strategic optimization</b>so AI search engines
                            can continuously fetch your content.
                          </li>
                        </ul>
                        <p>
                          By implementing GEO methods, businesses can ensure
                          their content doesn’t merely survive in the AI era—it
                          thrives. While traditional SEO fights for visibility,
                          GEO enhances authoritative relevance and adaptability,
                          ensuring that your content is recognized, cited, and
                          amplified by AI systems like ChatGPT, Gemini, and
                          Google’s AI Overviews.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3 d-none">
                          4 Ways to Make Your Content Future-Proof (Without
                          Sounding Like a Robot)
                        </h2>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/FutureProofYourContent2.webp"
                            thumbnail="/assets/images/blog/post-2.jpg"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FutureProofYourContent2.webp"
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
                          Let’s be real: AI is everywhere these days. From
                          summarizing articles, writing social posts, and even
                          composing whimsical poems about your feline companion.
                          On the bright side, when crafting content, you should
                          prioritize what humans find important, hint: stories,
                          trust, and other non-perishables. Here’s how:
                        </p>
                        <h3 className="h4 xl:h4 mt-4 mb-2 xl:m-3">
                          1. Get Real with Collaboration: “Hey, We’re Humans
                          Too!”
                        </h3>
                        <p className="mt-3">
                          AI can’t high-five your team or ugly-cry during a
                          customer success story. That’s your superpower.
                        </p>
                        <p>
                          <b>Why it works:</b> People crave connection, not just
                          information. When you share the messy, human side of
                          your brand—like how your team pulled an all-nighter to
                          launch a product or how a customer used your service
                          to quit their 9-to-5—you’re giving audiences a reason
                          to care.
                        </p>
                        <p>
                          <b>Example:</b> Patagonia’s Worn Wear campaign didn’t
                          just sell jackets; they celebrated beat-up,
                          decades-old gear with stories from real customers.
                          Result? 40% more engagement and free press from
                          outlets like The New York Times.
                        </p>
                        <p className="mt-3 fw-bold">How to steal this:</p>
                        <ol>
                          <li className="mt-3">
                            Post “day in the life” reels of your team.
                          </li>
                          <li>
                            Share customer testimonials that feel like
                            mini-documentaries (“How Sarah Built Her Side
                            Hustle”).
                          </li>
                          <li>
                            Use phrases like “Here’s how we messed up…” or “Why
                            our interns run the show.”
                          </li>
                        </ol>
                        <h3 className="h4 xl:h4 mt-4 mb-2 xl:m-3">
                          2. Founder Videos: Ditch the Script, Keep the Awkward
                          Pauses
                        </h3>
                        <p>
                          AI doesn’t have a face (yet—give it time). So ditch
                          the polished corporate ads. A shaky iPhone video of
                          your founder passionately rambling about their
                          mission? Way more compelling than AI-generated fluff.
                        </p>
                        <p>
                          <b>Why it works:</b> Raw = relatable. HubSpot says 54%
                          of people prefer video to connect with brands. No one
                          trusts a perfectly filtered spokesperson, but a
                          founder with bedhead? That’s gold.
                        </p>
                        <p>
                          <b>Example:</b> Shopify’s Founder’s Journey series
                          showed Tobias Lütke’s early struggles. People stuck
                          around 25% longer on their site, and Google’s
                          algorithm noticed, boosting their reach and
                          visibility.
                        </p>
                        <p className="mt-3 fw-bold">How to steal this:</p>
                        <ol>
                          <li className="mt-3">
                            Record a 60-second clip of the founder explaining
                            why they started the company—bonus points for
                            animated background noise.
                          </li>
                          <li>
                            Post “unpopular opinions” around your sector (for
                            example: “I hate ‘disrupt’ as a term of
                            description”)
                          </li>
                          <li>
                            Slap a spicy headline on it: “2024’s Dirty Secrets
                            of [Your Industry]” or “No One’s Talking About
                            [Trend]—Here’s the Proof.”
                          </li>
                        </ol>{" "}
                        <h3 className="h4 xl:h4 mt-4 mb-2 xl:m-3">
                          3. Publish Research: Be the Sherlock Holmes of Your
                          Industry
                        </h3>
                        <p>
                          AI repackages existing knowledge—you bring the fresh
                          insights. Your mission? Deliver groundbreaking data.
                          Since AI can’t conduct original research, it depends
                          on human discoveries. And when AI finds your research
                          valuable, congratulations—you’ve just earned a free
                          feature in AI-generated answers.
                        </p>
                        <p>
                          <b>Why it works:</b> Original research = backlink
                          goldmine. Publishing original research is one of the
                          most powerful ways to earn high-quality backlinks.
                          When your findings are insightful and data-driven,
                          bloggers, journalists, and industry publications will
                          naturally cite your work—linking back to your domain
                          as a trusted source.
                        </p>
                        <h3 className="h4 xl:h4 mt-4 mb-2 xl:m-3">
                          4. Evergreen Content: The Strategy That Keeps Giving
                        </h3>
                        <p>
                          While many like to chase trends, you build authority
                          with timeless content. Evergreen material—guides,
                          tutorials, foundational explainers—remains relevant
                          for years, driving consistent traffic and lasting
                          relevance.
                        </p>
                        <p className="mt-3 mb-3">
                          <b>Why it works:</b>
                        </p>
                        <ol>
                          <li>
                            Higher ROI: Unlike trend-based content, it keeps
                            “paying rent” long after publication.
                          </li>
                          <li>
                            Trust & Authority: Becoming the go-to resource (like
                            Wikipedia for your niche) boosts domain credibility.
                          </li>
                        </ol>
                        <p className="mt-3 fw-bold">How to steal this:</p>
                        <ol>
                          <li className="mt-3">
                            Survey your customers: “82% of our users hate
                            [industry pain point]—here’s why.”
                          </li>
                          <li>
                            Crunch your own data: “We analyzed 10,000 orders and
                            found the weirdest trend…”
                          </li>
                          <li>
                            Slap a spicy headline on it: “2024’s Dirty Secrets
                            of [Your Industry]” or “No One’s Talking About
                            [Trend]—Here’s the Proof.”
                          </li>
                        </ol>
                        {/* ccs cta */}
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Conclusion: Rise Above the Algorithmic Tide
                        </h2>
                        <p>
                          Let’s cut to the chase: AI isn’t the enemy—it’s just
                          your new (very chatty) coworker. The real trick? Being
                          the human they can’t replace.
                        </p>
                        <p>
                          When done right, future-proof content acts like a
                          savings account for you, increasing in value and
                          delivering steady returns. So, while many may chase
                          trends, you’ll be playing the long game.
                        </p>
                        <p>
                          Forget gaming the algorithm—real connections are what
                          matter. Stuffing keywords like a robot piñata won’t
                          get you anywhere. Instead, the brands that stand out
                          are the ones that embrace authenticity. The future
                          belongs to those who follow these golden rules:
                        </p>
                        <ol className="mt-3">
                          <li>
                            <b>Storytelling with Personality</b> – Make people
                            laugh, nod, or appreciate their coffee mug that says
                            “FINALLY” after a long day.
                          </li>
                          <li>
                            <b>Founder Rants & Raw Moments</b> – Share
                            unscripted garage monologues, passionate mission
                            rambles—because realness beats perfection every
                            time.
                          </li>
                          <li>
                            <b>Groundbreaking Research </b>– Publish insights so
                            sharp that journalists hit “cite” faster than they
                            can say “viral.”
                          </li>
                          <li>
                            <b>Future-Proof Content</b> – Create material that
                            keeps delivering value long after it’s been released
                            to the world.
                          </li>
                        </ol>
                        <h3 class="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Why this approach works:
                        </h3>
                        <ul>
                          <li>
                            Google rewards E-E-A-T (Experience, Expertise,
                            Authority, Trust).
                          </li>
                          <li>Backlinks flow naturally from stories + data.</li>
                          <li>Audiences remember you—not just your product.</li>
                        </ul>
                        <p>
                          So roll up your sleeves, crack open that data
                          spreadsheet, and start creating stuff that matters—not
                          just today, but five years from now.
                        </p>
                        <p>Your move</p>
                        <p>
                          <b> P.S.</b> If all else fails, just ask yourself:
                          “Would I read this if it wasn’t my job?” If the
                          answer’s “meh,” toss it.
                        </p>
                        <p>
                          <b>Mic drop..</b>
                        </p>
                        <h3 className="text-center">FAQs</h3>
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
