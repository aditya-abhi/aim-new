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

export default function RobotsTXTDisallowAll() {
  return (
    <div className="section panel mr-5">
      <div className="container container-full mx-3">
        <div className="panel py-4 lg:py-6 xl:py-8">
          <div className="row child-cols-12 ">
            <div className="sm:col-12 md:col-12 lg:col-6 order-1 mb-3">
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
                        Introduction: Lessons from the Past
                      </h2>
                      <p className="">
                        In the late 90s, many media companies decided to block
                        search engine bots, including Google, from crawling
                        their websites by using robots.txt disallow all feature
                        in their robots.txt file. They felt that search engines
                        were unfairly exploiting their content. But boy, oh boy!
                        It was a big mistake when it came to their web traffic.
                        Over time, they came to realize that collaboration, not
                        exclusion, drove visibility, traffic, and revenue.
                      </p>
                      <p className="mt-3">
                        Mark Twain once said, “History Doesn’t Repeat Itself,
                        but It Often Rhymes.” In line with this statement,
                        businesses today grapple with a similar dilemma about AI
                        and LLM crawlers such as GPTBot and PerplexityBot.
                      </p>
                      <h2 className="mt-3">
                        The AI Crawler Dilemma: Visibility vs. Protection
                      </h2>
                      <p>
                        There is growing anxiety among content creators and
                        businesses about how proprietary data might be utilized
                        to train these models.
                      </p>
                      <p className="mt-3">
                        The concerns revolve around misuse and the potential for
                        distorting their intellectual property. Despite these
                        valid worries, it’s essential to consider the
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
                        content. This approach, if implemented effectively, will
                        enable you to safeguard your interests while boosting
                        your brand’s online presence and user engagement,
                        offering a promising outlook for your brand’s future.
                      </p>
                      <h3 className="mt-3">
                        What is Robots.txt? A Modern Guide
                      </h3>
                      <p>
                        A <strong>robots.txt</strong> file is kind of like a
                        concert pass, telling web crawlers who can get in and
                        where they’re allowed to go. Just as only those with a
                        backstage pass can access restricted areas at a concert,{" "}
                        <strong>robots.txt</strong> lets you specify which parts
                        of your website search engine bots can visit and which
                        areas are off-limits.
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
                      <p className="mt-2">Website owners use robots.txt to:</p>
                      <ul className="mt-3">
                        <li>
                          Manage crawler traffic and prevent server overload.{" "}
                        </li>
                        <li>
                          Block specific directories or files from being
                          crawled.{" "}
                        </li>
                        <li>Guide crawlers to important pages for indexing.</li>
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
                        as WordPress, Wix, or Blogger, you don’t need to create
                        or edit your robots.txt file. Moreover, you might also
                        be using a plugin like Yoast or AI Monitor WP on top of
                        your CMS.{" "}
                      </p>{" "}
                      <p className="mt-4 text-center">
                        In such a case, a search settings page or something
                        similar helps you manage whether search engines can
                        crawl your page.{" "}
                      </p>{" "}
                      <p className="mt-4 text-center">
                        If you want to keep a page hidden from search engines or
                        make it visible again, check out how to adjust your
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
                        A common mistake is mentioning only Googlebot. Instead,
                        it’s ideal to use User-agent: *, which applies the rules
                        universally to all crawlers. This ensures your
                        directives aren’t limited to just one search engine but
                        are inclusive and applicable to the broader bot
                        community.ich crawlers (also known as bots) the rules
                        apply to.
                      </p>
                      <h4 className="mt-3">Example:</h4>
                      {/* image */}
                      <h4 className="mt-1">Why does this matter?</h4>
                      <p className="mt-2">
                        Not all web traffic comes from Google—so universal bot
                        coverage maximizes your site’s reach while managing
                        crawler activity effectively.{" "}
                      </p>
                      <h3 className="mt-3">2. Allow and Disallow Directive</h3>
                      <p className="mt-3">
                        The Allow and Disallow directives are the backbone of
                        your robots.txt file, dictating which parts of your site
                        are accessible to crawlers and which are restricted.
                        Used strategically, they balance visibility with
                        protection. Here’s how to wield them effectively:
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
                        Translation: “All bots: Block my entire site except the
                        /blog/ directory.”
                      </p>
                      <h4 className="mt-4">Granular Control for AI Crawlers</h4>
                      <p className="mt-1">
                        To future-proof for AI, apply rules specifically for LLM
                        bots like GPTBot or PerplexityBot:
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
                        As mentioned earlier, this is not a watertight method to
                        ensure compliance. You must p
                      </p>
                      <h3 className="mt-3">3. Crawl Delay</h3>
                      <p className="mt-1">
                        An ideal crawl delay in robots.txt generally ranges from
                        1 to 10 seconds, with 10 seconds being the most common
                        suggestion. This delay, which is specified using the
                        Crawl-delay: directive, tells search engine crawlers how
                        long to wait between requesting pages from your website.
                      </p>
                      <p className="mt-3 fw-bold">
                        Translation: Don’t come back knocking before the 10
                        seconds have passed.
                      </p>
                      <h3 className="mt-3">4. Sitemap Directive</h3>
                      <p>
                        The Sitemap directive is a guiding star for crawlers. It
                        tells them where to find the sitemap file—a
                        comprehensive list of your site’s URLs. This makes it
                        easier for bots to understand your site’s structure and
                        index it efficiently.
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
                        Update this file and add new rules as your site evolves.
                        That ”/ai-pet-rock-store/” directory? Yeah, block it
                        now.
                      </p>
                      <h2 className="mt-3">
                        Robots.txt Example for 2025: Future-proofed courtesy AI
                        Monitor
                      </h2>
                      {/* imager */}
                      <h2>Why Blocking AI Crawlers Is a Strategic Mistake</h2>
                      <h3>The Precedent of Search Engines:</h3>
                      <p>
                        Brands that embraced SEO thrived; those that resisted
                        faded into obscurity. Similarly, LLMs will shape future
                        discovery.
                      </p>
                      <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                      <h2 className="mt-3 text-center">Case Study:</h2>
                      <p className="mt-3 fw-bold">
                        One of our clients saw a 46% traffic drop after blocking
                        AI bots, while a competitor that allowed them gained
                        featured snippets in AI tools.
                      </p>
                      <h2 className="mt-3">
                        Checklist for Website Owners and Content Creators
                      </h2>
                      <p>
                        <span className="fw-bold">
                          {" "}
                          ☑️ Audit Your robots.txt:
                        </span>
                        Ensure it’s not disallowing AI crawlers (e.g., GPTBot).
                      </p>{" "}
                      <p>
                        <span className="fw-bold"> ☑️ Segment Access:</span>
                        Use granular rules to protect paid content or
                        confidential data.
                      </p>{" "}
                      <p>
                        <span className="fw-bold"> ☑️ Monitor Compliance:</span>
                        We have a free tool called AI Bot Monitor that you can
                        use to track bot activity.
                      </p>
                      <h2 className="mt-3">
                        Conclusion: Adapt or Be Invisible
                      </h2>
                      <p>
                        In my personal opinion, blocking AI crawlers today is as
                        myopic as blocking Google in the 90s. The key lies in
                        strategic access—shielding critical data while ensuring
                        your brand remains part of the AI-driven conversation.
                        Update your robots.txt, embrace transparency, and
                        position your content for the future.
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
                        least an hour to get to the Rockies for snowboarding and
                        ski activities, a local expert explained. Olympic
                        mountain bikers, musicians, and award-winning chefs
                        about what exactly makes their hometowns so special and
                        fun. <br />
                        In fact, not being able to rely on spoken word made them
                        better storytellers. They fully understood and used the
                        power of showing without words.
                      </p>
                      <p className="mt-3">
                        Probably the oldest and most important unwritten rule in
                        film industry says that you shouldn’t rely much on words
                        to tell your story. In fact, you should rely on them as
                        less as possible is simply the way most brands will
                        decide to go in 2016 &amp; beyond, as they try to tell
                        their story to their customers.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Great Schools and Entertainment1
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
                        it's not considered a mountain town since it takes
                        considered at least an hour to get to the Rockies for
                        snowboarding and ski activities, a local expert
                        explained sits at the base of the Rocky Mountains, it's
                        not considered a mountain town since it takes at least
                        an hour to get to the Rockies for snowboarding and ski
                        activities, a local expert explained.
                      </p>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Capital of Texas4
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
                      </p>
                      {/*  */}
                    </div>
                  </Gallery>
                </div>
              </div>
            </div>
            <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8 " />
            <div className="lg:col-3 order-2 lg:order-0 sticky-element3 sm:mt-3">
              <AudioPlayer />
              <span className="">
                <TableOfContentsServer />
              </span>
            </div>
            <div className="d-none lg:d-block lg:col-3 order-2 lg:order-2 sticky-element3">
              <RightSideTop />
              <RightSideBottom />
            </div>
            {/* <div className="d-block lg:d-none">
              <Toc />
            </div> */}
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
