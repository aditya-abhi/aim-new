"use client";
import Toc from "./Toc";
import RelatedBlogs from "../blog/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function GEOvsSEO({ blogItem }) {
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
                  GEO vs SEO: Key Differences, Optimization Strategies, and Future Trends
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
                    src="/assets/images/blog/geo-vs-seo-key-differences.webp"
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
                        data-uc-lightbox="animation: scale" >                  
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Introduction
                        </h2>
                        <p className="mt-3">
                          Let me paint you a picture. Last week, I spent 3 hours optimizing a blog post about “Most Effective AI, LLM SEO, GEO Techniques” using every SEO trick in the book. Keyword density? Check. Header tags? Perfect. Backlinks? A symphony of digital handshakes. Then I watched Google’s AI Overviews swoop in like a know-it-all valedictorian, cite someone else’s Medium article in its answer, and steal my thunder. Cue internal screaming.
                        </p>
                        <p className="mt-3">
                          As we all know, the digital landscape has seen a lot of changes since the chatGPT dropped to the scene is shifting: <strong>GEO (Generative Engine Optimization)</strong> is emerging as a vital counterpart to traditional <strong>SEO</strong> With AI-driven platforms like ChatGPT and Google AI Overviews reshaping search, marketers must adapt. This guide breaks down <strong>GEO vs SEO</strong>, offering strategies to optimize for both and future-proof your content.
                        </p>
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/seoVSgeo1.webp"
                            thumbnail="/assets/images/blog/internal/seoVSgeo1.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/seoVSgeo1.webp"
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
                          What is SEO? The Reliable (But Slightly Boring) Old Friend
                        </h2>
                        <p>
                         SEO’s been around since dinosaurs roamed the internet (circa 1998). It’s the OG strategy—like showing up to a party with a six-pack of beer. Reliable. Predictable. A little basic.
                        </p>
                        <p className="mt-3">
                         <strong>Search Engine Optimization (SEO)</strong> focuses on improving organic rankings in traditional engines (Google, Bing) through:
                        </p>
                        <ul>
                         
                          <li className="mt-2"><b>Keyword Relevance:</b> Aligning content with user queries. </li>
                         
                          
                            <li className="mt-1"><b>Backlinks & Authority:</b> Building credibility via external links.</li>
                          
                          <li className="mt-1"><strong>Technical SEO:</strong> Enhancing site speed, mobile experience, and indexing.</li>
                        </ul>
                        
                        <p className="mt-2"><span className="fw-bold">Example:</span> A search for “coffee brewing methods” returns a list of ranked links based on relevance and authority.</p>
                    
                      <h2 className="mt-3">What is GEO? The New Kid on the Block </h2>    

                          <p className="mt-3">GEO is SEO’s cooler younger sibling. The one who shows up to brunch with ChatGPT-generated poetry and a side hustle selling AI art. It’s not about ranking—it’s about becoming the teacher’s pet of AI models</p>
                            <p className="mt-2"><strong>Generative Engine Optimization (GEO)</strong> tailors content for AI-driven search engines (ChatGPT, Perplexity) to secure citations in AI-generated answers.</p>
                                <p className="mt-2">Why it matters now:</p>
                                         <ul>
                         
                          <li className="mt-2"><b>Authority Building:</b> Becoming a trusted source for AI models. </li>
                         
                          
                            <li className="mt-1"><b>Structured Data:</b> Using schema markup for easy content extraction.</li>
                          
                          <li className="mt-1"><strong>Intent Optimization:</strong> Answering questions directly and conversationally.</li>
                        </ul>

                   <p className="mt-2"><span className="fw-bold">Example:</span> If you ask Google for Best Generative Engine Optimization tool, you would get the following response.</p>

                                 <h2 className="mt-3">GEO vs SEO: Key Differences</h2>
                                 <div className="panel mt-2 p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black overflowx-auto">
              <table className="uc-table uc-table-divider">
                <thead className="table-head sticky-top z-1 ">
                  <tr className="table-row dark:border-white border-gray-900">
                    <th className="table-header-cell" scope="row">
                      <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                        Factor
                      </span>
                    </th>
                    <th className="table-header-cell" scope="row">
                      <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                        SEO
                      </span>
                    </th>
                    <th className="table-header-cell" scope="row">
                      <span className="fw-bold fs-5 lg:fs-4 dark:text-secondary">
                        GEO
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="table-row border-gray-900 dark:border-white">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                         Search Engine Type
                        </span>
                      </div>
                    </th>
                    <td>
                      <span className="dark:text-white">Google, Bing</span>
                    </td>
                    <td>
                      <span className="dark:text-white">ChatGPT, AI Overviews, Perplexity</span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-900 dark:border-white">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Content Visibility
                        </span>
                      </div>
                    </th>
                    <td>
                      <span className="dark:text-white">
                        Ranked links in SERPs
                      </span>
                    </td>
                    <td>
                      <span className="dark:text-white">
                        Citations in AI-generated answers

                      </span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-900 dark:border-white">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                          Optimization Focus
                        </span>
                      </div>
                    </th>
                    <td>
                      <span className="dark:text-white">
                       Keywords, backlinks, metadata	
                      </span>
                    </td>
                  </tr>
                  <tr className="table-row border-gray-900 dark:border-white">
                    <th className="" scope="row">
                      <div className="hstack gap-1 justify-start">
                        <span className="fs-5 fw-bold text-dark dark:text-white">
                         Authority, entity recognition
                        </span>
                      </div>
                    </th>
                    <td>
                      <span className="dark:text-white">
                        Necessary for Contract
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">The <strong>plot twist</strong>: Google’s own data shows <strong>AI Overviews now answer 30% of searches without a single click.</strong> It’s like hosting a dinner party where the appetizer steals the show. </p>

      <h2 className="mt-3">SEO Isn’t Dead—It’s Just in Couples Therapy</h2>
        <p className="mt-3">Look, I’m not saying ditch SEO. That’s like unfriending your mom on Facebook—messy and unwise.</p>

                 <ul> 
                  <li className="mt-2">Gartner predicts a 25% drop in traditional search traffic by 2026.</li>
                  <li className="MT-1">AI Overviews dominate SERPs, pushing organic links below the fold.</li>
                </ul>          
                     
            <h2 className="mt-3">Actionable GEO Strategies (That Actually Worked) </h2>
               <h3 className="mt-3">1. Target Search Intent, Not Just Keywords</h3>
                     <ul>
                      <li>Structure content around questions (e.g., “How does GEO work?”).</li>
                      <li>Use tools like HubSpot’s <a href="https://www.hubspot.com/ai-search-grader" aria-label="Link to What is AEO Grader?" target="_blank" className="text-blue">AI Search Grader</a> AI Search Grader to align with AI readability.</li>
                     </ul>
                     {/*baad me dekhenge  */}
                     <p className="mt-6">    
                      <span className="fst-center"> Flyhomes (Real Estate) </span>
                           In just 3 months, Flyhomes executed a strategic SEO campaign that propelled monthly website visits from a modest 18.7K to a staggering 2 million.</p>
                     <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/seoVSgeo2.webp"
                            thumbnail="/assets/images/blog/internal/seoVSgeo2.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/seoVSgeo2.webp"
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
                            {/* --- */}
                          </figcaption>
                        </figure>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          2. Optimize for AI Readability
                        </h3>
                        <ul>
                          <li>
                            Short paragraphs, bullet points, and clear headers (H2/H3).
                          </li>
                          <li>
                            Tools like <strong>AI Monitor</strong> automate GEO-friendly structuring.
                          </li>
                        </ul>
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">3. Schema Markup: Not Just for Nerds</h3>
                        <ul>
                          <li>
                            Implement FAQ, HowTo, and Organization schemas.
                          </li>
                          <li>
                            Validate with Google’s <strong>Rich Results Test.</strong>
                          </li>
                        </ul>
                        {/* table */}
                        <p className="mt-3 font-center"><strong>Brainly (Education)</strong></p>
                        <p>Used FAQ schema and UGC to rank for 2M+ question-based queries. Result: 522% YoY traffic increase.</p>
                       
                       
                      
                        <figure className="my-3 sm:my-4">
                          <Item
                            original="/assets/images/blog/internal/seoVSgeo3.webp"
                            thumbnail="/assets/images/blog/internal/seoVSgeo3.webp"
                            width="1280"
                            height="853"
                          >
                            {({ ref, open }) => (
                              <figure className="featured-image m-0 rounded ratio ratio-16x9 uc-transition-toggle overflow-hidden">
                                <Image
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  alt="Pink Marketing, by Mak"
                                  src="/assets/images/blog/internal/seoVSgeo3.webp"
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
                            AI Monitor
                          </figcaption>
                        </figure>

                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          4. Build Authority
                        </h3>
                        <ul>
                          <li>Cite peer-reviewed studies and update content quarterly.</li>
                          <li>Earn backlinks from .edu or .gov domains for trust signals.</li>
                        </ul>
                     <h2 className="mt-3">Future Trends: AI’s Search Evolution</h2>
                         <ul>
                          <li><strong>Voice Search Integration:</strong> GEO will prioritize conversational queries.</li>
                          <li><strong>Multimodal AI:</strong> Optimize for image/video citations in AI answers.</li>
                          <li><strong>Personalization:</strong> AI will tailor responses using user data, demanding hyper-relevant content.</li>
                         </ul>
                  <h2 className="mt-3">Tools for GEO Success</h2>
                     <ol>
                      <li><strong>AI Monitor:</strong> Track citations across ChatGPT, Perplexity, and Copilot.</li>
                      <li><strong>ProQuo AI:</strong> Analyze brand visibility in AI-generated answers.</li>
                      <li><strong>Surfer SEO:</strong> Merge keyword gaps with AI intent optimization.</li>
                     </ol>
                <h2 className="mt-3"><strong>Final Thought</strong></h2>
                        <p className="mt-3">SEO is grammar. GEO is poetry. You need both to write the future of search—or risk becoming a digital ghost. Now if you’ll excuse me, I need to go train ChatGPT to say “Yasss, queen” when it cites my content.</p>
                        <p className="mt-3">P.S. If you’re still only doing SEO in 2024, you’re basically bringing a fax machine to a AI rave. Time to upgrade.</p>
                <h2 className="mt-3"><strong>FAQs</strong></h2>
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
