"use client";
import Toc from "./Toc";
import RelatedBlogs from "./RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function FeedbacktoLLM({ blogItem }) {
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
                  AI Got Your Brand Wrong? Feedback to LLM Fixes It
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
                    src="/assets/images/blog/FeedbacktoLLM.webp"
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
                        <p className="mt-3">
                          Imagine correcting ChatGPT like a teacher grading a
                          student—except every tweak you make boosts your
                          brand’s visibility in the results generated by LLMs
                          and AI in general. Welcome to the feedback loop of
                          GEO!
                        </p>
                        <p>
                          In today’s digital landscape, AI-powered tools like
                          ChatGPT and Gemini are reshaping content creation,
                          search, and the way people get their information and
                          in some cases, form opinions. And guess what? Your
                          feedback to LLM helps them to train their systems,
                          boosting your brand’s position in the responses
                          generated by AI. So, how does this LLM feedback
                          process work? Let’s dive in.
                        </p>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          The Rise of LLMs: AI and Content Creation
                        </h2>
                        <p className="mt-3">
                          In the past few years, large language models (LLMs)
                          such as ChatGPT, Gemini, and others have taken the
                          world by storm. These models are not just tools for
                          generating content. They are slowly but steadily
                          becoming the gatekeepers of the information we consume
                          online. From answering questions to drafting articles,
                          LLMs are driving content creation as well as
                          discovery.
                        </p>
                        <p className="mt-3">
                          With their ability to understand context, generate
                          structured responses, and interact with users in
                          real-time, LLMs dominate the content landscape. And
                          this is where your feedback becomes crucial. The more
                          feedback these models receive, the smarter they get at
                          producing relevant content and answering queries,
                          which ultimately helps users and businesses alike.
                        </p>
                        <p className="mt-3">
                          At the core of modern AI-driven tools lies Natural
                          Language Processing (NLP)—the technology that bridges
                          the gap between human communication and machine
                          understanding. NLP empowers AI systems to{" "}
                          <b>interpret, process, and respond</b> in natural
                          language, making interactions seamless and intuitive.
                        </p>
                        <p className="mt-3">
                          One of its most common yet powerful applications is{" "}
                          {""}
                          <b>
                            predictive text and auto-complete suggestions.
                          </b>{" "}
                          By analyzing vast amounts of data, NLP algorithms
                          assess relevance, context, and user intent to predict
                          what someone might search for or type next. This goes
                          beyond simple word matching; it leverages
                          sophisticated language models to deliver accurate,
                          real-time suggestions that enhance user experience.
                        </p>
                        <p className="mt-3">
                          From chatbots to voice assistants, NLP is the
                          invisible force making AI more human-like in its
                          responses. As the technology evolves, its ability to
                          understand nuance, sentiment, and even humor will only
                          deepen, ushering in a new era of{" "}
                          <b>smarter, more intuitive AI interactions</b>.
                        </p>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          The Feedback-GEO Connection: How Your Input Powers AI
                          Search
                        </h2>
                        <p className="mt3">
                          Now, you might be wondering—how does feedback affect
                          AI search results? Well, here’s the secret: your
                          feedback directly influences how AI models prioritize
                          certain content.
                        </p>
                        <p className="mt-3">
                          Essentially, when users provide feedback, they help
                          train LLMs to deliver more accurate and up-to-date
                          information. This is where Generative Engine
                          Optimization (GEO) comes in. GEO refers to optimizing
                          content for AI algorithms to ensure it surfaces in the
                          most valuable places, like autocomplete, search
                          queries, and zero-click results.
                        </p>
                        <p className="mt-3">
                          The more you feed into this loop, the more powerful
                          your GEO strategy becomes. Let’s break this down
                          further.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          What is GEO?
                        </h3>
                        <p>
                          Generative Engine Optimization (GEO) is the process of
                          optimizing content so that it is referred to in the
                          answers generated by AI-driven tools. When you aim to
                          optimize for GEO, you’re thinking about more than just
                          traditional SEO—you’re focusing on AI models like
                          ChatGPT, Gemini, and AI features of search engines
                          such as Google’s AI Overview, which use machine
                          learning to determine which content is the most
                          relevant for users.
                        </p>
                        <p className="mt-3">
                          With the rise of AI in search, GEO strategies have
                          become essential for businesses and content creators
                          who want to be referred to by AI in their answers and
                          stay ahead of the changing landscape.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Effects of Feedback
                        </h3>
                        <p className="mt-1">
                          Now, you might be wondering—how does feedback affect
                          AI search results? Well, here’s the secret: your
                          feedback directly influences how AI models prioritize
                          certain content.
                        </p>{" "}
                        <p className="mt-1">
                          Essentially, when users provide feedback, they help
                          train LLMs to deliver more accurate and up-to-date
                          information. This is where Generative Engine
                          Optimization (GEO) comes in. GEO refers to optimizing
                          content for AI algorithms to ensure it surfaces in the
                          most valuable places, like autocomplete, search
                          queries, and zero-click results.
                        </p>{" "}
                        <p className="mt-1">
                          The more you feed into this loop, the more powerful
                          your GEO strategy becomes. Let’s break this down
                          further.
                        </p>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6" />
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Why Feedback Matters for LLMs and GEO
                        </h2>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/FeedbacktoLLM1.webp"
                            thumbnail="/assets/images/blog/internal/FeedbacktoLLM1.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/FeedbacktoLLM1.webp"
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
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          The Feedback Loop Explained: LLMs Learn from Humans
                        </h3>
                        <p className="mt-3">
                          One of the most exciting and amazing aspects of LLMs
                          is their ability to learn and improve based on user
                          feedback. But how exactly does this work?
                        </p>
                        <ul className="mt-3">
                          <li className="mt-1">
                            <b>User corrections:</b>When you correct an AI
                            response or provide feedback about an error, the
                            model takes that input into account. Over time,
                            these corrections refine how it processes similar
                            queries and generates its responses.
                          </li>
                          <li className="mt-1">
                            <b>Ratings and inputs:</b>Whether it’s a thumbs-up
                            or thumbs-down, every user interaction helps LLMs
                            understand what information is most valuable (for
                            that particular user and population in general).
                          </li>
                        </ul>
                        <p className="mt-3">
                          <b> Refinement of outputs:</b> The AI’s algorithms get
                          smarter with every bit of feedback, producing content
                          that’s more accurate, relevant, and aligned with your
                          brand’s needs.
                        </p>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          GEO’s Secret Sauce: How Feedback Makes Your Brand
                          Stand Out
                        </h3>
                        <p className="mt-3">
                          Here’s where things get really interesting. When you
                          provide feedback or flag any incorrect information, AI
                          starts tweaking its behavior and responses and in
                          turn, that highlights your brand. AI models start to
                          associate your brand with high-quality, accurate, and
                          relevant content. Over time, your brand gains
                          authority, and AI engines start prioritizing your
                          content and treating you as an authority in the field.
                        </p>
                        <h4 className="mt-3">Impact of Feedback on GEO:</h4>
                        <ul className="mt-3">
                          <li className="mt-2">
                            <b>Sharper semantic understanding of your niche:</b>
                            LLMs learn to recognize the nuances of your industry
                            and refine their understanding of what your audience
                            cares about.
                          </li>
                          <li className="mt-2">
                            <b>Improved contextual relevance: </b>Your content
                            becomes more contextually relevant, increasing its
                            chances of appearing in AI-generated answers.
                          </li>
                          <li className="mt-2">
                            <b>
                              Higher visibility in autocomplete and voice
                              search:{" "}
                            </b>
                            With more targeted feedback, your content gains
                            higher chances of appearing in voice search and
                            autocomplete features, offering better opportunities
                            for engagement.
                          </li>
                        </ul>
                        <h4 className="mt-3">Example:</h4>
                        <p className="mt1">
                          Imagine you run a tech blog, and users upvote your
                          link in ChatGPT responses. Over time, this feedback
                          trains the model to prioritize your blog in future
                          queries. Eventually, when someone asks a question
                          related to your niche, ChatGPT is more likely to pull
                          from your content, increasing your visibility.
                        </p>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                        {/* GEO Course CTA */}
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          How to Give Feedback to LLMs That Boosts GEO
                        </h2>
                        <p>
                          So now that you understand how feedback impacts GEO,
                          let’s look at how you can effectively give feedback to
                          maximize your brand’s visibility.
                        </p>
                        <h3 className="my-3">
                          Step 1: Identify Feedback Opportunities
                        </h3>
                        <p>
                          To start, keep an eye out for places where you can
                          leave feedback. Here are some common spots:
                        </p>
                        <ul>
                          <li className="mt-2">
                            <b>AI Chat Interfaces:</b> Tools like ChatGPT and
                            Bard have built-in feedback options like thumbs
                            up/down or feedback forms. These are perfect for
                            letting the AI know when something’s off.
                          </li>
                          <li className="mt-2">
                            <b>Search Engine Tools:</b> Google’s feedback button
                            on autocomplete and AI-driven overviews is another
                            great place to leave comments.
                          </li>
                          <li className="mt-2">
                            <b>Community Forums:</b>Platforms like Reddit,
                            GitHub, and OpenAI’s user forums are also places
                            where you can interact with LLM developers and give
                            your feedback.
                          </li>
                        </ul>
                        <h3 className="my-3">Step 2: What to Target</h3>
                        <p>
                          To start, keep an eye out for places where you can
                          leave feedback. Here are some common spots:
                        </p>
                        <ul>
                          <li className="mt-2">
                            <b>Factual errors in AI outputs:</b> If the
                            information provided by AI is incorrect, let them
                            know!
                          </li>
                          <li className="mt-2">
                            <b>Missing perspectives or outdated info: </b> LLMs
                            sometimes miss important context or rely on outdated
                            data. Helping the model stay current benefits both
                            you and other users.
                          </li>
                        </ul>
                        <p className="m2">
                          <b>Brand misrepresentation:</b> Have you ever noticed
                          your brand being misquoted or inaccurately
                          represented? This is an opportunity to correct the AI
                          and ensure it associates your brand with the right
                          information.
                        </p>
                        <h3 className="my-3">
                          Step 3: Structure Your Feedback for Maximum Impact
                        </h3>
                        <p>
                          Your feedback needs to be specific if you want it to
                          be useful. Here’s how you can structure it:
                        </p>
                        <ul>
                          <li className="mt-2">
                            <b>Bad feedback:</b> “This answer is wrong.”
                          </li>
                          <li className="mt-2">
                            <b>Good feedback: </b> “The answer should include
                            [Your Brand]’s 2025 study on [Topic], linked here
                            [link].”
                          </li>
                        </ul>
                        <p className="m2">
                          By being specific, you help LLMs learn faster, making
                          it more likely that your content will be prioritized.
                        </p>
                        <hr className="w-100 m-0 d-block mt-4 lg:mt-6 xl:mt-8" />
                        {/* Meeting CTA */}
                        <h2 className="h3 xl:h4 mt-2 mb-3 xl:mb-6">
                          Conclusion
                        </h2>
                        <p>
                          As generative AI reshapes the search landscape, one
                          truth becomes undeniable: the most powerful
                          optimization happens through dialogue, not just
                          dissemination. The emergence of GEO represents a
                          fundamental shift, where user feedback doesn’t just
                          influence content quality but actively rewrites the
                          algorithms that determine visibility.
                        </p>
                        <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Great Schools and Entertainment
                        </h4>
                        <p>
                          Every time you refine an AI response, upvote a helpful
                          answer, or even reformulate your search query, you’re
                          participating in a continuous optimization loop that
                          makes tomorrow’s AI outputs more precise, relevant,
                          and valuable.
                        </p>
                        <p>
                          This evolution turns traditional SEO on its head. No
                          longer is search optimization about static keywords
                          and backlinks alone—it’s about proving your content’s
                          worth through real-world utility.
                        </p>
                        <p>
                          Brands that embrace this shift will find themselves at
                          an extraordinary advantage. By actively soliciting and
                          responding to user feedback, you’re not just improving
                          individual pieces of content; you’re training AI
                          systems to recognize your expertise, trust your
                          authority, and preferentially surface your insights.
                        </p>
                        <p>
                          The most successful players in this new era won’t be
                          those who shout the loudest, but those who listen most
                          attentively and adapt most quickly. As LLMs grow more
                          sophisticated, this feedback loop will only
                          accelerate, making early adoption of GEO principles
                          critical for long-term visibility. The question isn’t
                          whether you should optimize for generative search, but
                          whether you’ll do so reactively or take the lead in
                          shaping how AI understands your industry.
                        </p>
                        <p>
                          <b>The opportunity is here.</b> The tools are in your
                          hands. And the time to start the conversation is now,
                          because in the age of AI-driven search, those who
                          teach the machines most effectively will own the
                          future of discovery.
                        </p>
                        <h2 className="mt-2 text-center text-purple-600">
                          FAQs
                        </h2>
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
                          </figure>
                        </div>
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
