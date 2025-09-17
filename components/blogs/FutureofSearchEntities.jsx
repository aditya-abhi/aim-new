"use client";
import Toc from "./Toc";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "./faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function FutureofSearchEntities({ blogItem }) {
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
                  The Future of Search: Understanding Entities and the Shift
                  from Keywords to Concepts
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
                    src="/assets/images/blog/future-of-search-understanding-entities-main-image.webp"
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
                          Introduction
                        </h2>
                        <p className="">
                          Imagine a world where search engines no longer focus
                          solely on the words you type, but instead, they
                          understand the deeper meaning behind them. This shift
                          is already happening, transforming how we find
                          information online. Welcome to the era of entities in
                          search engine optimization (SEO).
                        </p>
                        <p className="mt-3">
                          In the following sections, we’ll cover:
                        </p>
                        <div className="panel mt-3">
                          <ul>
                            <li className="mt-1">
                              What entities are and how they differ from
                              traditional keywords
                            </li>
                            <li className="mt-1">
                              How Google’s Knowledge Graph and natural language
                              processing (NLP) power entity-based search
                            </li>
                            <li className="mt-1">
                              Why optimizing for entities is now essential for
                              SEO and digital marketing
                            </li>
                            <li className="mt-1">
                              Easy-to-follow tips for updating your own sites so
                              they don’t get left behind.
                            </li>
                            <li className="mt-1">
                              The impact of AI-powered search (like Google’s AI
                              Overviews and ChatGPT) on entity optimization
                            </li>
                          </ul>
                          <p>
                            When we’re done, you’ll get a clear picture of how
                            searches work these days and how to make sure your
                            name still pops up when people look for what you
                            offer.
                          </p>
                          <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                            What Are Entities? The Building Blocks of Modern
                            Search
                          </h2>
                          <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                            Entities vs. Keywords: A Clear Shift
                          </h3>
                          <p className="mt-3">
                            For years, SEO revolved around keywords—the exact
                            words and phrases users typed into search engines.
                            But search engines have changed a lot, and these
                            days they care way more about something called
                            entities.
                          </p>
                          <ul>
                            <li className="mt-1">
                              Keyword: A string of text (e.g., “best Italian
                              restaurant in New York”).
                            </li>
                            <li className="mt-1">
                              Entity: A distinct, well-defined concept (e.g.,
                              “New York,” “Italian cuisine,” “restaurant
                              reviews”).
                            </li>
                          </ul>
                          <p className="mt-2">Google defines an entity as:</p>
                          <p>
                            “A thing or concept that is singular, unique,
                            well-defined, and distinguishable.”
                          </p>
                          <p>
                            <b>Examples include:</b>
                          </p>
                          <ul>
                            <li className="mt-1">
                              People: Elon Musk, Taylor Swift
                            </li>
                            <li className="mt-1">
                              Places: Eiffel Tower, Grand Canyon
                            </li>
                            <li className="mt-1">
                              Organizations: Tesla, World Health Organization
                            </li>
                            <li className="mt-1">
                              Products: iPhone 15, Tesla Cybertruck
                            </li>
                            <li className="mt-1">
                              Abstract concepts: Democracy, Quantum Physics
                            </li>
                          </ul>
                          <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                            Why Entities Matter More Than Ever
                          </h3>
                          <p>Entities help resolve ambiguity. For example:</p>
                          <ul className="mt-2">
                            <li className="mt-1">
                              “Apple” → Is it the tech company or the fruit?
                            </li>
                            <li className="mt-1">
                              “Amazon” → The rainforest or the e-commerce giant?
                            </li>
                            <li className="mt-1">
                              “Jordan” → The country in the Middle East or the
                              NBA superstar?
                            </li>
                          </ul>
                          <p>
                            When Google identifies the right entity, it can
                            serve up spot-on answers without fumbling around in
                            a pile of different keywords.
                          </p>
                        </div>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          How Google Understands Entities: The Knowledge Graph &
                          NLP
                        </h2>
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          The Knowledge Graph: Google’s Brain for Entities
                        </h3>
                        <p>
                          Google’s Knowledge Graph is basically its digital
                          brain. Think of it as a gigantic map that links
                          people, places, and things to each other. Because of
                          this behind-the-scenes tool, we get stuff like:
                        </p>
                        <ul>
                          <li className="mt-1">
                            Knowledge Panels (those info boxes in search
                            results)
                          </li>
                          <li>
                            AI Overviews (direct answers at the top of the
                            search)
                          </li>
                          <li>
                            Local Business Listings (Google Business Profiles)
                          </li>
                        </ul>
                        <p className="mt-3">
                          For example, if you type “Leonardo da Vinci” into
                          Google, you don’t just get a list of web pages that
                          mention his name. The search engine grabs the
                          organized info it has about when he was born, what he
                          painted, and which other famous figures were around
                          him.
                        </p>

                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Natural Language Processing (NLP) & Entity Recognition
                        </h3>
                        <p>Google uses Natural Language Processing (NLP) to:</p>
                        <ol>
                          <li>
                            Identify entities in text (Named Entity Recognition,
                            or NER)
                          </li>
                          <li>
                            Understand relationships between them (via “triples”
                            → subject-predicate-object)
                          </li>
                        </ol>
                        <p className="mt-3">Example:</p>
                        <ul>
                          <li>“Elon Musk founded Tesla in 2003.”</li>
                          <ul>
                            <li>Subject: Elon Musk (Person)</li>
                            <li>Predicate: founded</li>
                            <li>Object: Tesla (Company)</li>
                            <li>Attribute: 2003 (Date)</li>
                          </ul>
                        </ul>
                        <p>
                          Advanced AI models like BERT and MUM enhance this
                          understanding by analyzing context across multiple
                          languages and media types (text, images, video).
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          How AI Search Engines Understand Entity
                        </h2>
                        <p>
                          Generative engines like ChatGPT, Perplexity, and
                          Gemini don’t index pages like Google. Instead, they
                          synthesize responses based on entities and
                          relationships they’ve learned or retrieved from the
                          web.
                        </p>
                        <p className="mt-3">
                          ✅ Good to know: If your brand isn’t a well-structured
                          entity, it might be{" "}
                          <b>ignored, misrepresented, or replaced</b> in
                          generated answers.
                        </p>
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          Entities are core to inclusion in LLM responses
                        </h3>
                        <p>
                          An entity with strong signals (mentions, reviews,
                          structured data, backlinks, contextual content){" "}
                          <b>is more likely to be referenced or cited</b> in
                          AI-generated answers.
                        </p>
                        <p className="mt-2">
                          📈 First Page Sage found that{" "}
                          <b>
                            “authoritative list mentions” and “entity strength”
                          </b>{" "}
                          are key factors in LLM product recommendations — as
                          much as 40–60% weighting in some engines
                        </p>
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          They improve content interpretation and citation
                          accuracy
                        </h3>
                        <p>
                          Generative models prefer content that clearly ties
                          back to trusted entities. If your content is vague or
                          your brand isn’t clearly associated with your domain
                          expertise, LLMs may cite a competitor instead.
                        </p>
                        <p className="mt-3">
                          ✅ A strong entity profile = increased chance of being
                          selected, quoted, or linked in generative summaries.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          How to Optimize for Entities (Entity-Based SEO)
                        </h2>
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          1. Content Strategy: Semantic Richness & Clarity
                        </h3>
                        <ul>
                          <li className="mt-2">
                            Be explicit: Instead of saying “he” or “they,” name
                            the person or thing directly, like “Barack Obama” or
                            “Tesla.” Clear names leave no room for guessing.
                          </li>
                          <li className="mt-2">
                            Use related terms: If you’re talking about “electric
                            cars,” sprinkle in terms such as “battery life,”
                            “charging stations,” and even “Tesla vs. Rivian.”
                            Those extras help paint a fuller picture.
                          </li>
                          <li className="mt-2">
                            Structure like Wikipedia: Use headings, mini-info
                            boxes, and links inside your own site. This tidy
                            layout shows Google how different things on the page
                            connect.
                          </li>
                        </ul>

                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          2. Structured Data & Schema Markup
                        </h3>
                        <ul>
                          <li className="mt-1">
                            Schema.org markup tells Google exactly what entities
                            your page is about.
                          </li>
                          <li className="mt-1">
                            Use the sameAs property to link to authoritative
                            sources (e.g., Wikipedia, Wikidata).
                          </li>
                          <li className="mt-1">
                            Local businesses should use the LocalBusiness schema
                            to tie into Google’s local search graph.
                          </li>
                        </ul>
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          3. Leverage AI Tools (with Caution)
                        </h3>
                        <ul>
                          <li className="mt-1">
                            AI-generated content (ChatGPT, Gemini) can help, but
                            still, their output sometimes misses the key players
                            you need to highlight.
                          </li>
                          <li className="mt-1">
                            Use entity extraction tools (InLinks, Google’s NER
                            API) to analyze top-ranking content and identify key
                            entities.
                          </li>
                        </ul>
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          4. Adapt to AI-Powered Search (Generative Engine
                          Optimization, GEO)
                        </h3>
                        <p>
                          With AI answers (like Google’s AI Overviews),
                          traditional SEO is evolving into GEO:
                        </p>
                        <ul>
                          <li className="mt-1">
                            Citations matter more: AI pulls from trusted sources
                            (Wikipedia, major publications).
                          </li>
                          <li className="mt-1">
                            Be a “seed site”: Create content so authoritative
                            that AI cites you directly.
                          </li>
                          <li className="mt-1">
                            Measure “Share of Model”: Track how often your brand
                            appears in AI-generated answers.
                          </li>
                        </ul>

                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Crawling and indexing
                        </h2>
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          The Future: Entities, AI, and the End of Traditional
                          SEO?
                        </h3>

                        <p>
                          <b>The Rise of Zero-Click Searches</b>
                        </p>
                        <ul>
                          <li className="mt-1">
                            25% drop in traditional search volume predicted by
                            2026 (Gartner).
                          </li>
                          <li className="mt-1">
                            50% decline in organic traffic possible as AI
                            answers queries directly.
                          </li>
                        </ul>
                        <h3 className="h5 xl:h4 mt-3 mb-2 xl:mb-3">
                          What This Means for Marketers
                        </h3>
                        <ol className="mt-2">
                          <li className="mt-1">
                            Optimize for AI answers, not just rankings.
                          </li>
                          <li className="mt-1">
                            Build authority through citations and expert
                            content.
                          </li>
                          <li className="mt-1">
                            Focus on entities, not just keywords.
                          </li>
                        </ol>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Conclusion: Embracing the Entity-First Mindset
                        </h2>
                        <p>
                          The shift from keywords to entities isn’t just a
                          technical change—it’s a fundamental rethinking of how
                          information is organized online. By optimizing for
                          entities, you:
                        </p>
                        <ul>
                          <li className="mt-1">Improve search visibility</li>
                          <li className="mt-1">
                            Future-proof your content for AI-driven search
                          </li>
                          <li className="mt-1">
                            Build deeper connections with your audience
                          </li>
                        </ul>
                        <p className="mt-3">
                          The question isn’t if you should adapt—it’s how fast
                          you can start.
                        </p>
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Key Takeaways
                        </h2>
                        <p className="mt-2">
                          ✅ Entities are the future of search—optimize for
                          concepts, not just keywords.
                        </p>
                        <p className="mt-2">
                          ✅ Google’s Knowledge Graph & NLP power entity-based
                          understanding.
                        </p>
                        <p className="mt-2">
                          ✅ Structured data (Schema.org) is essential for
                          entity recognition.
                        </p>
                        <p className="mt-2">
                          ✅ AI-powered search (GEO) requires authority and
                          citations.
                        </p>
                        <p className="mt-2">
                          ✅ Adapt now or risk losing visibility in the
                          AI-driven search era.
                        </p>
                        <p className="mt-2">
                          By mastering entities, you’re not just keeping up with
                          SEO—you’re preparing for the next evolution of the
                          internet.
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
