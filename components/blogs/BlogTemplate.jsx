import React from "react";
import Sidebar from "./sidebars/Sidebar";
import Image from "next/image";
import AudioPlayer from "./sidebars/AudioPlayer";
import TableOfContents from "./sidebars/TableOfContents";
import RightSideBottom from "./sidebars/RightSideBottom";
import RightSideTop from "./sidebars/RightSideTop";
import Toc from "./Toc";

export default function BlogTemplate() {
  return (
    <div className="section panel mx-5">
      <div className="container container-full mx-3">
        <div className="panel py-4 lg:py-6 xl:py-8">
          <div className="row child-cols-12 ">
            <div className="sm:col-12 md:col-12 lg:col-6 order-1">
              <div
                className="uc-main panel"
                role="main"
                style={{ minHeight: "120vh" }}
              >
                <div className="panel vstack gap-3 lg:gap-4 xl:gap-5 mr-3">
                  <h2 className="h4 sm:h3">Sample Heading One</h2>
                  <p className="fs-6 md:fs-5">
                    This is placeholder paragraph text under heading one.
                    Replace this with your actual content. This is placeholder
                    paragraph text under heading one. Replace this with your
                    actual content. This is placeholder paragraph text under
                    heading one. Replace this with your actual content. This is
                    placeholder paragraph text under heading one. Replace this
                    with your actual content. This is placeholder paragraph text
                    under heading one. Replace this with your actual content.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Two</h2>
                  <p className="fs-6 md:fs-5">
                    Another short paragraph to demonstrate structure. Keep
                    sentences concise and readable.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Three</h2>
                  <p className="fs-6 md:fs-5">
                    Add notes, explanations, or examples that support the
                    heading above.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Four</h2>
                  <p className="fs-6 md:fs-5">
                    Continue with more placeholder copy. You can later swap
                    these with real text.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Five</h2>
                  <p className="fs-6 md:fs-5">
                    Maintain consistent styles for headings and paragraphs
                    across the template.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Six</h2>
                  <p className="fs-6 md:fs-5">
                    Use this section for additional details, steps, or guidance
                    relevant to your topic.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Seven</h2>
                  <p className="fs-6 md:fs-5">
                    Placeholder text provides layout clarity before final
                    content is ready.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Eight</h2>
                  <p className="fs-6 md:fs-5">
                    Replace with your final copy. Remove any sections you do not
                    need.
                  </p>
                  <h2 className="h4 sm:h3 m-0">Sample Heading Nine</h2>
                  <p className="fs-6 md:fs-5 m-0">
                    Final example paragraph to complete the template section
                    with nine headings.
                  </p>
                  <h2 className="h4 sm:h3 mt-3">Sample Heading Ten</h2>
                  <p className="fs-6 md:fs-5">
                    Short descriptive paragraph for heading ten. Replace with
                    your finalized wording.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Eleven</h2>
                  <p className="fs-6 md:fs-5">
                    Keep paragraphs consistent in tone and length to improve
                    readability across sections.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twelve</h2>
                  <p className="fs-6 md:fs-5">
                    This area can include examples, definitions, or clarifying
                    notes related to the topic.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Thirteen</h2>
                  <p className="fs-6 md:fs-5">
                    Use headings to break content into scannable sections,
                    making it easier to navigate.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Fourteen</h2>
                  <p className="fs-6 md:fs-5">
                    You can also insert lists, links, or callouts here as needed
                    for your content strategy.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Fifteen</h2>
                  <p className="fs-6 md:fs-5">
                    Consider keeping each paragraph focused on one idea to aid
                    comprehension.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Sixteen</h2>
                  <p className="fs-6 md:fs-5">
                    Placeholder copy ensures layout fidelity before the final
                    content is ready.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Seventeen</h2>
                  <p className="fs-6 md:fs-5">
                    Swap these samples with production content when available,
                    and adjust spacing as needed.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Eighteen</h2>
                  <p className="fs-6 md:fs-5">
                    Maintain semantic structure by using heading levels in
                    descending order when appropriate.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Nineteen</h2>
                  <p className="fs-6 md:fs-5">
                    Ensure accessibility by writing clear, descriptive headings
                    that summarize the section.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty</h2>
                  <p className="fs-6 md:fs-5">
                    This template can be adapted for tutorials, announcements,
                    or long-form articles.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-One</h2>
                  <p className="fs-6 md:fs-5">
                    Keep visual rhythm with consistent spacing between headings
                    and paragraphs.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-Two</h2>
                  <p className="fs-6 md:fs-5">
                    Use concise language and avoid jargon to make content
                    approachable for all readers.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-Three</h2>
                  <p className="fs-6 md:fs-5">
                    Provide context and supporting details that help readers act
                    on the information.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-Four</h2>
                  <p className="fs-6 md:fs-5">
                    If sections become long, consider adding subheadings or
                    bullet lists for clarity.
                  </p>
                  <h2 className="h4 sm:h3">Sample Heading Twenty-Five</h2>
                  <p className="fs-6 md:fs-5">
                    Align content with your brand voice and style guidelines for
                    consistency.
                  </p>
                  <h2 className="h4 sm:h3 m-0">Sample Heading Twenty-Six</h2>
                  <p className="fs-6 md:fs-5 m-0">
                    Final placeholder paragraph. Replace or trim as necessary
                    for your use case.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-none lg:d-block lg:col-3 order-2 lg:order-0 sticky-element3">
              <AudioPlayer />
              <TableOfContents />
            </div>
            <div className="d-none lg:d-block lg:col-3 order-2 lg:order-2 sticky-element3">
              <RightSideTop />
              <RightSideBottom />
            </div>
            <div className="d-block lg:d-none">
              <Toc />
            </div>
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
