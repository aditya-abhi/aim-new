"use client";
import Toc from "./Toc";
import RelatedBlogs from "../blog/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "./faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function RobotsTXTDisallowAll({ blogItem }) {
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
                  Robots.txt Disallow All: Blocking AI Bots is as misguided as
                  blocking Google in the 90s!
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
                    src="/assets/images/blog/Robots.txt Disallow All.webp"
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
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Introduction: Lessons from the Past
                        </h2>
                        <p className="">
                          In the late 90s, many media companies decided to block
                          search engine bots, including Google, from crawling
                          their websites by using robots.txt disallow all
                          feature in their robots.txt file. They felt that
                          search engines were unfairly exploiting their content.
                          But boy, oh boy! It was a big mistake when it came to
                          their web traffic. Over time, they came to realize
                          that collaboration, not exclusion, drove visibility,
                          traffic, and revenue.
                        </p>
                        <p className="mt-3">
                          Mark Twain once said, “History Doesn’t Repeat Itself,
                          but It Often Rhymes.” In line with this statement,
                          businesses today grapple with a similar dilemma about
                          AI and LLM crawlers such as GPTBot and PerplexityBot.
                        </p>
                        <h2 className="mt-3">
                          The AI Crawler Dilemma: Visibility vs. Protection
                        </h2>
                        <p>
                          There is growing anxiety among content creators and
                          businesses about how proprietary data might be
                          utilized to train these models.
                        </p>
                        <p className="mt-3">
                          The concerns revolve around misuse and the potential
                          for distorting their intellectual property. Despite
                          these valid worries, it’s essential to consider the
                          implications of shutting out AI crawlers entirely.
                        </p>
                        <p className="mt-3">
                          In today’s AI-driven world, a wholesale ban on all AI
                          bots, such as GPTBot and PerplexityBot, could no doubt
                          prevent your content from being used to train large
                          language models (LLMs), but it will also make your
                          brand, company, and offerings invisible to these LLMs.
                        </p>{" "}
                        <p className="mt-3">
                          My perspective on this issue is to strike a balance. I
                          advise allowing access to these bots while denying
                          access to your copyrighted and subscription-based
                          content. This approach, if implemented effectively,
                          will enable you to safeguard your interests while
                          boosting your brand’s online presence and user
                          engagement, offering a promising outlook for your
                          brand’s future.
                        </p>
                        <h3 className="mt-3">
                          What is Robots.txt? A Modern Guide
                        </h3>
                        <p>
                          A <strong>robots.txt</strong> file is kind of like a
                          concert pass, telling web crawlers who can get in and
                          where they’re allowed to go. Just as only those with a
                          backstage pass can access restricted areas at a
                          concert, <strong>robots.txt</strong> lets you specify
                          which parts of your website search engine bots can
                          visit and which areas are off-limits.
                        </p>
                        <p className="mt-3">
                          This file helps manage how search engines crawl and
                          index your site, preventing them from accessing
                          sensitive or unnecessary pages and helping to reduce
                          server load. However, it’s important to remember that
                          not all bots respect these rules—How it Works:
                        </p>{" "}
                        <p className="mt-3">
                          It uses simple rules to instruct crawlers, such as
                          Disallow (to prevent crawling specific URLs) and Allow
                          (to allow crawling specific URLs).
                        </p>
                        <h4 className="mt-3">Not a guarantee:</h4>
                        <p className="mt-2">
                          It’s important to remember that a robots.txt file
                          doesn’t guarantee that a page won’t be indexed. It’s a
                          suggestion to crawlers, and some may ignore your
                          robots.txt entirely. For this reason, robots.txt
                          shouldn’t be relied on as a security measure since
                          determined or malicious crawlers can easily bypass it.
                        </p>
                        <h4 className="mt-3">Purpose of Robots.txt:</h4>
                        <p className="mt-2">
                          Website owners use robots.txt to:
                        </p>
                        <ul className="mt-3">
                          <li>
                            Manage crawler traffic and prevent server overload.{" "}
                          </li>
                          <li>
                            Block specific directories or files from being
                            crawled.{" "}
                          </li>
                          <li>
                            Guide crawlers to important pages for indexing.
                          </li>
                        </ul>
                        <h4 className="mt-3">
                          How to Find or Upload Your Robots.txt file
                        </h4>
                        <p className="mt-2">
                          You can usually find a website’s robots.txt file by
                          adding /robots.txt to the end of the website’s URL
                          (e.g., example.com/robots.txt). If there is none, your
                          robots.txt file should be placed in the root directory
                          of the website.
                        </p>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                        {/* Css text */}
                        <h2 className="mt-4 fw-bold text-center">
                          Pro Tip: If You're Using CMS
                        </h2>
                        <p className="mt-4 text-center">
                          If you’re using a Content Management System (CMS) such
                          as WordPress, Wix, or Blogger, you don’t need to
                          create or edit your robots.txt file. Moreover, you
                          might also be using a plugin like Yoast or AI Monitor
                          WP on top of your CMS.{" "}
                        </p>{" "}
                        <p className="mt-4 text-center">
                          In such a case, a search settings page or something
                          similar helps you manage whether search engines can
                          crawl your page.{" "}
                        </p>{" "}
                        <p className="mt-4 text-center">
                          If you want to keep a page hidden from search engines
                          or make it visible again, check out how to adjust your
                          page’s visibility in your CMS. For example, search
                          “Yoast hide page from search engines” to find what you
                          need.{" "}
                        </p>
                        <h2 className="mt-3">
                          The Ideal Robots.txt File in 2025
                        </h2>
                        <p>
                          Here’s what makes a robots.txt file ideal in today’s
                          AI-dominated information discovery process:
                        </p>
                        <h3 className="mt-3">1. User-agent Directive</h3>
                        <p>
                          The User-agent directive is crucial—it specifies which
                          crawlers (also known as bots) the rules apply to.
                        </p>{" "}
                        <p>
                          A common mistake is mentioning only Googlebot.
                          Instead, it’s ideal to use User-agent: *, which
                          applies the rules universally to all crawlers. This
                          ensures your directives aren’t limited to just one
                          search engine but are inclusive and applicable to the
                          broader bot community.ich crawlers (also known as
                          bots) the rules apply to.
                        </p>
                        <h4 className="mt-3">Example:</h4>
                        {/* image */}
                        <h4 className="mt-1">Why does this matter?</h4>
                        <p className="mt-2">
                          Not all web traffic comes from Google—so universal bot
                          coverage maximizes your site’s reach while managing
                          crawler activity effectively.{" "}
                        </p>
                        <h3 className="mt-3">
                          2. Allow and Disallow Directive
                        </h3>
                        <p className="mt-3">
                          The Allow and Disallow directives are the backbone of
                          your robots.txt file, dictating which parts of your
                          site are accessible to crawlers and which are
                          restricted. Used strategically, they balance
                          visibility with protection. Here’s how to wield them
                          effectively:
                        </p>
                        {/* Image */}
                        <p>
                          <strong>
                            Translation: “All bots: Stay out of my private
                            folder!”
                          </strong>
                        </p>
                        {/* image */}
                        <p className="mt-3">
                          Translation: “All bots: stay out of my secret lab (no
                          one needs to see my failed robot uprising blueprints),
                          but feel free to binge my cat videos!”
                        </p>
                        {/* Image */}
                        <p className="mt-3">
                          Translation: “All bots: Block my entire site except
                          the /blog/ directory.”
                        </p>
                        <h4 className="mt-4">
                          Granular Control for AI Crawlers
                        </h4>
                        <p className="mt-1">
                          To future-proof for AI, apply rules specifically for
                          LLM bots like GPTBot or PerplexityBot:
                        </p>
                        <h4 className="mt-3">Example:</h4>
                        {/* image */}
                        <p>
                          Translation: Blocks AI crawlers from the ChatGPT clone
                          you are working on in your free time. However, this
                          allows them to index public content (e.g., blogs) for
                          visibility in AI tools.
                        </p>
                        <h4 className="mt-3">Things to Avoid in Robots.txt</h4>
                        <p className="mt-1">Conflicting Rules:</p>
                        {/* image */}
                        <p>
                          Outcome: Some crawlers (like Google) will allow
                          /blog/latest-news/, while others may ignore the Allow
                          directive.
                        </p>
                        <p className="mt-3">Overly Broad Blocks:</p>
                        <p className="mt-3">
                          Outcome: This blocks your entire site—use only if you
                          want zero visibility.
                        </p>{" "}
                        <p className="mt-3">
                          As mentioned earlier, this is not a watertight method
                          to ensure compliance. You must p
                        </p>
                        <h3 className="mt-3">3. Crawl Delay</h3>
                        <p className="mt-1">
                          An ideal crawl delay in robots.txt generally ranges
                          from 1 to 10 seconds, with 10 seconds being the most
                          common suggestion. This delay, which is specified
                          using the Crawl-delay: directive, tells search engine
                          crawlers how long to wait between requesting pages
                          from your website.
                        </p>
                        <p className="mt-3 fw-bold">
                          Translation: Don’t come back knocking before the 10
                          seconds have passed.
                        </p>
                        <h3 className="mt-3">4. Sitemap Directive</h3>
                        <p>
                          The Sitemap directive is a guiding star for crawlers.
                          It tells them where to find the sitemap file—a
                          comprehensive list of your site’s URLs. This makes it
                          easier for bots to understand your site’s structure
                          and index it efficiently.
                        </p>
                        <p className="mt-3 fw-bold">Example:</p>
                        {/* Image */}
                        <h3 className="mt-3">Why does this matter?</h3>
                        <p>
                          A well-placed Sitemap directive ensures search engines
                          have all the vital info they need to index your site
                          properly, boosting your visibility.
                        </p>{" "}
                        <p>
                          Update this file and add new rules as your site
                          evolves. That ”/ai-pet-rock-store/” directory? Yeah,
                          block it now.
                        </p>
                        <h2 className="mt-3">
                          Robots.txt Example for 2025: Future-proofed courtesy
                          AI Monitor
                        </h2>
                        {/* imager */}
                        <h2>Why Blocking AI Crawlers Is a Strategic Mistake</h2>
                        <h3>The Precedent of Search Engines:</h3>
                        <p>
                          Brands that embraced SEO thrived; those that resisted
                          faded into obscurity. Similarly, LLMs will shape
                          future discovery.
                        </p>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                        <h2 className="mt-3 text-center">Case Study:</h2>
                        <p className="mt-3 fw-bold">
                          One of our clients saw a 46% traffic drop after
                          blocking AI bots, while a competitor that allowed them
                          gained featured snippets in AI tools.
                        </p>
                        <h2 className="mt-3">
                          Checklist for Website Owners and Content Creators
                        </h2>
                        <p>
                          <span className="fw-bold">
                            {" "}
                            ☑️ Audit Your robots.txt:
                          </span>
                          Ensure it’s not disallowing AI crawlers (e.g.,
                          GPTBot).
                        </p>{" "}
                        <p>
                          <span className="fw-bold"> ☑️ Segment Access:</span>
                          Use granular rules to protect paid content or
                          confidential data.
                        </p>{" "}
                        <p>
                          <span className="fw-bold">
                            {" "}
                            ☑️ Monitor Compliance:
                          </span>
                          We have a free tool called AI Bot Monitor that you can
                          use to track bot activity.
                        </p>
                        <h2 className="mt-3">
                          Conclusion: Adapt or Be Invisible
                        </h2>
                        <p>
                          In my personal opinion, blocking AI crawlers today is
                          as myopic as blocking Google in the 90s. The key lies
                          in strategic access—shielding critical data while
                          ensuring your brand remains part of the AI-driven
                          conversation. Update your robots.txt, embrace
                          transparency, and position your content for the
                          future.
                        </p>
                        <p className="mt-3">
                          <b>Your next step?</b>Review your robots.txt at
                          yoursite.com/robots.txt—before AI overlooks your
                          business entirely.
                        </p>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                        <figure className="my-3 sm:my-4 ">
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
                          While Denver sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained. Olympic
                          mountain bikers, musicians, and award-winning chefs
                          about what exactly makes their hometowns so special
                          and fun. <br />
                          In fact, not being able to rely on spoken word made
                          them better storytellers. They fully understood and
                          used the power of showing without words.
                        </p>
                        <p className="mt-3">
                          Probably the oldest and most important unwritten rule
                          in film industry says that you shouldn’t rely much on
                          words to tell your story. In fact, you should rely on
                          them as less as possible is simply the way most brands
                          will decide to go in 2016 &amp; beyond, as they try to
                          tell their story to their customers.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Great Schools and Entertainment1
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
                          it's not considered a mountain town since it takes
                          considered at least an hour to get to the Rockies for
                          snowboarding and ski activities, a local expert
                          explained sits at the base of the Rocky Mountains,
                          it's not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Capital of Texas4
                        </h2>
                        <p>
                          Visual storytelling is simply the way most brands will
                          decide to go in 2016 &amp; beyond, as they try to tell
                          their story to their customers the oldest and most
                          important unwritten rule in film industry says that
                          you shouldn’t rely much on words to tell your story.
                          In fact, you should rely on them as less as possible.
                          It’s no coincidence that Buster Keaton and Charlot’s
                          movies remain among the biggest classic movies of all
                          time. In fact, not being able to rely on spoken word
                          made them better storytellers. They fully understood
                          and used the power of showing without words.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained sits at
                          the base of the Rocky Mountains, it’s not considered a
                          mountain town since it takes at least an hour to get
                          to the Rockies for snowboarding and ski activities, a
                          local expert explained.
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
                              </figure>
                            )}
                          </Item>
                          <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                            Pink Marketing, by Mak
                          </figcaption>
                        </figure>
                        <p>
                          get to the Rockies for snowboarding and ski
                          activities, a local expert explained.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Capital of Texas5
                        </h2>
                        <p>
                          Visual storytelling is simply the way most brands will
                          decide to go in 2016 &amp; beyond, as they try to tell
                          their story to their customers the oldest and most
                          important unwritten rule in film industry says that
                          you shouldn’t rely much on words to tell your story.
                          In fact, you should rely on them as less as possible.
                          It’s no coincidence that Buster Keaton and Charlot’s
                          movies remain among the biggest classic movies of all
                          time. In fact, not being able to rely on spoken word
                          made them better storytellers. They fully understood
                          and used the power of showing without words.
                        </p>
                        <p className="mt-3">
                          While Denver sits at the base of the Rocky Mountains,
                          it’s not considered a mountain town since it takes at
                          least an hour to get to the Rockies for snowboarding
                          and ski activities, a local expert explained sits at
                          the base of the Rocky Mountains, it’s not considered a
                          mountain town since it takes at least an hour to get
                          to the Rockies for snowboarding and ski activities, a
                          local expert explained.
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
                            the quality of life factors that make Ann Arbor one
                            of the best places to live. The University of
                            Michigan, which has 43,000 students, makes Ann Arbor
                            a perennial candidate for our annual ranking of the
                            best college towns and plays a big role in the
                            city’s economy and culture.
                          </p>
                          <p className="mt-3">
                            While Denver sits at the base of the Rocky
                            Mountains, it’s not considered a mountain town since
                            it takes considered at least an hour to get to the
                            Rockies for snowboarding and ski activities, a local
                            expert explained sits at the base of the Rocky
                            Mountains, it’s not considered a mountain town since
                            it takes at least an hour to get to the Rockies for
                            snowboarding and ski activities, a local expert
                            explained.
                          </p>
                          <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                            Great Schools and Entertainment 5
                          </h2>
                          <p>
                            Education is a high point when it comes to analyzing
                            the quality of life factors that make Ann Arbor one
                            of the best places to live. The University of
                            Michigan, which has 43,000 students, makes Ann Arbor
                            a perennial candidate for our annual ranking of the
                            best college towns and plays a big role in the
                            city’s economy and culture.
                          </p>
                          <p className="mt-3">
                            While Denver sits at the base of the Rocky
                            Mountains, it’s not considered a mountain town since
                            it takes considered at least an hour to get to the
                            Rockies for snowboarding and ski activities, a local
                            expert explained sits at the base of the Rocky
                            Mountains, it’s not considered a mountain town since
                            it takes at least an hour to get to the Rockies for
                            snowboarding and ski activities, a local expert
                            explained.
                          </p>
                          <p>
                            Bike paths and sidewalks make getting to and from
                            the city's many festivals, museums, restaurants and
                            music venues easy. A range of amenities provides
                            many things to do in Bellevue. About 40 percent of
                            the city's population are minorities, which
                            contributes to an overall diverse range of
                            lifestyles and ideas.
                          </p>
                          <p className="mt-3">
                            While Denver sits at the base of the Rocky
                            Mountains, it's not considered a mountain town since
                            it takes at least an hour to get to the Rockies for
                            snowboarding and ski activities, a local expert
                            explained. Olympic mountain bikers, musicians, and
                            award-winning chefs about what exactly makes their
                            hometowns so special and fun. In fact, not being
                            able to rely on spoken word made them better
                            storytellers. They fully understood and used the
                            power of showing without words. They fully
                            understood and used the power of showing without
                            words.
                          </p>
                        </div>
                        <p>
                          Probably the oldest and most important unwritten rule
                          in film industry says that you shouldn’t rely much on
                          words to tell your story. In fact, you should rely on
                          them as less as possible is simply the way most brands
                          will decide to go in 2016 &amp; beyond, as they try to
                          tell their story to their customers.
                        </p>
                        <p className="mt-3">
                          I talked to climbers, Olympic mountain bikers,
                          musicians, and award-winning chefs about what exactly
                          makes their hometowns so special and fun.
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
