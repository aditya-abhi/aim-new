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

export default function NewsAndMediaPartnership() {
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
                        Introduction
                      </h2>
                      <p className="">
                        She started her blog exactly six months before I
                        launched Camels &amp; Chocolate, and she really set the
                        bar high for my own blog birthday, Y’all this summer!
                        I’ve already been brainstorming party ideas … who wants
                        to come? It’s no coincidence that Buster Keaton and
                        Charlot’s movies of the and award-winning chefs about
                        what exactly makes their hometowns In fact, not being
                        able to rely on spoken word made them better
                        storytellers. They fully understood and used the power
                        of showing without words. A range of amenities provides
                        many things to do in Bellevue. About 40 percent of the
                        city’s population are minorities, which contributes to
                        an overall diverse range of lifestyles and ideas.
                      </p>
                      <p className="mt-3">
                        I talked to climbers, Olympic mountain bikers,
                        musicians, and award-winning chefs about what exactly
                        makes their hometowns so special and fun.
                      </p>
                      <div className="panel mt-3">
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
                      </div>
                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Capital of Texas
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
                      <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Capital of Texas 2
                      </h3>
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

                      <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                        Capital of Texas3
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
