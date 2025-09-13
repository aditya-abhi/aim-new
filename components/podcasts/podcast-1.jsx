"use client";
// import Toc from "./Toc";
import RelatedBlogs from "../blog/RelatedBlogs";
import Image from "next/image";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useState } from "react";
import Blog1Faqs from "../blogs/faqs/Blog1Faqs";
import GEOCourseCTA from "@/components/common/GeoCTA";

export default function Podcast1({ blogItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const toggleAuthorDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        className="position-absolute top-0 start-0 end-0 min-h-450px xl:min-h-900px bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 z-0"
        // className={
        //   isExpanded
        //     ? "position-absolute top-0 start-0 end-0 min-h-1000px xl:min-h-1100px bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 z-0"
        //     : "position-absolute top-0 start-0 end-0 min-h-700px xl:min-h-900px bg-tertiary-700 lg:rounded-2 lg:rounded-top-0 lg:mx-2 lg:mt-0 z-0"
        // }
      />{" "}
      <div className="breadcrumbs panel z-1 py-2 dark:bg-opacity-5 text-white mt-9 lg:mt-10">
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
              <Link href={`/blog`}>Podcast</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">Podcasst</span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post pb-4 lg:pb-6 xl:pb-9">
        <div className="container max-w-xl">
          <div className="post-header uc-dark">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-9 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h3 xl:h1 mt-4 lg:mt-6">
                  Entity Optimization: The 2025 SEO Power Move Every Brand Can’t
                  Afford to Miss
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
              {/* <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                  <Image
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt="Maximizing your reach with marketing strategies"
                    src="/assets/images/blog/post-full.jpg"
                    width="1280"
                    height="853"
                  />
                </figure>
              </figure> */}
              <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden">
                  <iframe
                    className="w-100 rounded-2 overflow-hidden lg:min-h-500px ratio-16x9"
                    src="https://www.youtube.com/embed/VTxt5PV1n9I?si=Tb2N7kc6tXT71c_5"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </figure>
              </figure>
            </div>
          </div>
        </div>
        <div className="panel mt-6 lg:mt-6 xl:mt-9">
          <div className="container">
            <div className="row child-cols-12 g-6 md:g-4 xl:g-6">
              <div
                className="row child-cols col-match justify-center g-2 lg:g-4"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <div className="container lg:container-80">
                  <div className="feature-item panel px-3 lg:px-4 py-4 rounded-2 bg-gray-50 dark:bg-tertiary-700">
                    <div className="row child-cols-12 g-6 md:g-8 xl:g-6">
                      <div
                        className="row child-cols col-match justify-center g-2 lg:g-4"
                        data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                      >
                        <div className="col-12 md:col-3 lg:col-3 items-center justify-center">
                          <Image
                            src="/assets/images/icons/Conquer-AI-Search-with-AI.webp"
                            width={150}
                            height={150}
                          />
                        </div>
                        <div className="col-12 md:col-8 lg:col-8">
                          <h3>
                            EP#18 Generative Engine Optimization Podcast |
                            Entity Optimization: The Secret Weapon for AI Search
                          </h3>
                          <p>Conquer AI Search With AI</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 items-center">
                      {/* <figure className="w-100"> */}
                      <audio
                        className="min-w-100 px-2"
                        controls
                        src="https://getaimonitor.com/wp-content/uploads/2025/06/Conquer-AI-Podcast-Final-Audio.mp3"
                      ></audio>
                      {/* </figure> */}
                      <hr className="w-100 m-0 d-block mt-4" />
                    </div>
                    <p className="mt-2">Also Available on:</p>
                    <div className="d-none lg:d-block">
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a
                          href="https://open.spotify.com/episode/1XC7JiRR5WGJ9Xt9dB9GwP?si=-apJMqF3SzizDY8ydtD1oA"
                          target="_blank"
                        >
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/icons/spotify.png"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h5 className="m-0">Spotify</h5>
                          </div>
                        </a>
                        <a
                          href="https://open.spotify.com/episode/1XC7JiRR5WGJ9Xt9dB9GwP?si=-apJMqF3SzizDY8ydtD1oA"
                          target="_blank"
                        >
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/icons/amazon-music.png"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h5 className="m-0">Amazon Music</h5>
                          </div>
                        </a>
                        <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/icons/apple-podcast.png"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0">Apple Podcast</h5>
                          </div>
                        </a>
                        <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/icons/youtube.png"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0">Youtube</h5>
                          </div>
                        </a>
                      </div>
                      <div className="hstack gap-4 mt-2 justify-center">
                        <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/icons/overcast.svg"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0">Overcast</h5>
                          </div>
                        </a>
                        <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/icons/pocket-casts.jpeg"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0">Pocket Casts</h5>
                          </div>
                        </a>
                        <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-40px"
                              src="/assets/images/icons/castro.png"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0">Castro</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="d-block lg:d-none">
                      <div className="vstack justify-center gap-1 items-center mt-1">
                        <a
                          href="https://open.spotify.com/episode/1XC7JiRR5WGJ9Xt9dB9GwP?si=-apJMqF3SzizDY8ydtD1oA"
                          target="_blank"
                        >
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/icons/spotify.png"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h5 className="h6 m-0 dark:text-dark">Spotify</h5>
                          </div>
                        </a>
                        <a
                          href="https://open.spotify.com/episode/1XC7JiRR5WGJ9Xt9dB9GwP?si=-apJMqF3SzizDY8ydtD1oA"
                          target="_blank"
                        >
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/icons/amazon-music.png"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h5 className="m-0 h6 dark:text-dark">
                              Amazon Music
                            </h5>
                          </div>
                        </a>
                        <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/icons/apple-podcast.png"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 h6 dark:text-dark">
                              Apple Podcast
                            </h5>
                          </div>
                        </a>
                        <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/icons/youtube.png"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 h6 dark:text-dark">Youtube</h5>
                          </div>
                        </a>
                        <a
                          href="https://open.spotify.com/episode/1XC7JiRR5WGJ9Xt9dB9GwP?si=-apJMqF3SzizDY8ydtD1oA"
                          target="_blank"
                        >
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-2 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/icons/overcast.svg"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <h5 className="m-0 h6 dark:text-dark">Overcast</h5>
                          </div>
                        </a>
                        <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/icons/pocket-casts.jpeg"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 h6 dark:text-dark">
                              Pocket Castst
                            </h5>
                          </div>
                        </a>
                        <a href="#">
                          <div className="bg-white rounded-pill hstack gap-1 py-1 px-3 max-w-fc">
                            <Image
                              className="max-w-30px"
                              src="/assets/images/icons/castro.png"
                              alt=""
                              width={100}
                              height={100}
                            />
                            <h5 className="m-0 h6 dark:text-dark">Castro</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <div className="uc-main panel" role="main">
                    <div className="panel vstack gap-4 xl:gap-6">
                      <div className="panel px-3 rounded-2 bg-secondary dark:bg-gray-800">
                        <ul
                          className="main-features-nav hstack text-center overflow-auto"
                          data-uc-switcher="connect: .main-features-switcher; active: 1; animation: uc-animation-fade;"
                          role="tablist"
                        >
                          <li
                            className={`${activeTab == 1 ? "uc-active" : ""}`}
                            onClick={() => setActiveTab(1)}
                            role="presentation"
                          >
                            <a className="h6 lg:h5 text-nowrap m-0 hover:text-primary">
                              Table of Content
                            </a>
                          </li>
                          <li
                            onClick={() => setActiveTab(2)}
                            className={`${activeTab == 2 ? "uc-active" : ""}`}
                            role="presentation"
                          >
                            <a className="h6 lg:h5 text-nowrap m-0 hover:text-primary">
                              Show Notes
                            </a>
                          </li>
                          <li
                            className={`${activeTab == 3 ? "uc-active" : ""}`}
                            onClick={() => setActiveTab(3)}
                            role="presentation"
                          >
                            <a className="h6 lg:h5 text-nowrap m-0 hover:text-primary">
                              Transcript
                            </a>
                          </li>
                          <li
                            className={`${activeTab == 4 ? "uc-active" : ""}`}
                            onClick={() => setActiveTab(4)}
                            role="presentation"
                          >
                            <a className="h6 lg:h5 text-nowrap m-0 hover:text-primary">
                              Source
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="main-features-switcher uc-switcher overflow-hidden"
                        role="presentation"
                        style={{ touchAction: "pan-y pinch-zoom" }}
                      >
                        {activeTab == 1 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <h2 className="text-center">
                                  Table of Content
                                </h2>
                                <h3 className="h5">
                                  🎙️ Conquer AI Search Podcast – Ep. 18: Entity
                                  Optimization
                                </h3>
                                <ol className="fs-5">
                                  <li>Intro & Series Recap (0:05)</li>
                                  <li>What is Entity Optimization? (1:03)</li>
                                  <li>
                                    Evolution of Entity-Based Search (2:23)
                                  </li>
                                  <li>
                                    Why Entities Matter in AI Search (2:58)
                                  </li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        )}
                        {activeTab == 2 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <Gallery>
                                  <div
                                    className="post-content panel fs-6 md:fs-5 ml-2"
                                    data-uc-lightbox="animation: scale"
                                  >
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Introduction
                                    </h2>
                                    <p className="">
                                      She started her blog exactly six months
                                      before I launched Camels &amp; Chocolate,
                                      and she really set the bar high for my own
                                      blog birthday, Y’all this summer! I’ve
                                      already been brainstorming party ideas …
                                      who wants to come? It’s no coincidence
                                      that Buster Keaton and Charlot’s movies of
                                      the and award-winning chefs about what
                                      exactly makes their hometowns In fact, not
                                      being able to rely on spoken word made
                                      them better storytellers. They fully
                                      understood and used the power of showing
                                      without words. A range of amenities
                                      provides many things to do in Bellevue.
                                      About 40 percent of the city’s population
                                      are minorities, which contributes to an
                                      overall diverse range of lifestyles and
                                      ideas.
                                    </p>
                                    <p className="mt-3">
                                      I talked to climbers, Olympic mountain
                                      bikers, musicians, and award-winning chefs
                                      about what exactly makes their hometowns
                                      so special and fun.
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
                                        Bike paths and sidewalks make getting to
                                        and from the city’s many festivals,
                                        museums, restaurants and music venues
                                        easy. A range of amenities provides many
                                        things to do in Bellevue. About 40
                                        percent of the city’s population are
                                        minorities, which contributes to an
                                        overall diverse range of lifestyles and
                                        ideas.
                                      </p>
                                      <p className="mt-3">
                                        While Denver sits at the base of the
                                        Rocky Mountains, it’s not considered a
                                        mountain town since it takes at least an
                                        hour to get to the Rockies for
                                        snowboarding and ski activities, a local
                                        expert explained. Olympic mountain
                                        bikers, musicians, and award-winning
                                        chefs about what exactly makes their
                                        hometowns so special and fun.
                                      </p>
                                      <p className="mt-3">
                                        In fact, not being able to rely on
                                        spoken word made them better
                                        storytellers. They fully understood and
                                        used the power of showing without words.
                                        They fully understood and used the power
                                        of showing without words. They fully
                                        understood and used the power of showing
                                        without words.
                                      </p>
                                    </div>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Capital of Texas
                                    </h2>
                                    <p>
                                      Visual storytelling is simply the way most
                                      brands will decide to go in 2016 &amp;
                                      beyond, as they try to tell their story to
                                      their customers the oldest and most
                                      important unwritten rule in film industry
                                      says that you shouldn’t rely much on words
                                      to tell your story. In fact, you should
                                      rely on them as less as possible. It’s no
                                      coincidence that Buster Keaton and
                                      Charlot’s movies remain among the biggest
                                      classic movies of all time. In fact, not
                                      being able to rely on spoken word made
                                      them better storytellers. They fully
                                      understood and used the power of showing
                                      without words.
                                    </p>
                                    <p className="mt-3">
                                      While Denver sits at the base of the Rocky
                                      Mountains, it’s not considered a mountain
                                      town since it takes at least an hour to
                                      get to the Rockies for snowboarding and
                                      ski activities, a local expert explained
                                      sits at the base of the Rocky Mountains,
                                      it’s not considered a mountain town since
                                      it takes at least an hour to get to the
                                      Rockies for snowboarding and ski
                                      activities, a local expert explained.
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
                                      Visual storytelling is simply the way most
                                      brands will decide to go in 2016 &amp;
                                      beyond, as they try to tell their story to
                                      their customers the oldest and most
                                      important unwritten rule in film industry
                                      says that you shouldn’t rely much on words
                                      to tell your story. In fact, you should
                                      rely on them as less as possible. It’s no
                                      coincidence that Buster Keaton and
                                      Charlot’s movies remain among the biggest
                                      classic movies of all time. In fact, not
                                      being able to rely on spoken word made
                                      them better storytellers. They fully
                                      understood and used the power of showing
                                      without words.
                                    </p>
                                    <p className="mt-3">
                                      While Denver sits at the base of the Rocky
                                      Mountains, it’s not considered a mountain
                                      town since it takes at least an hour to
                                      get to the Rockies for snowboarding and
                                      ski activities, a local expert explained
                                      sits at the base of the Rocky Mountains,
                                      it’s not considered a mountain town since
                                      it takes at least an hour to get to the
                                      Rockies for snowboarding and ski
                                      activities, a local expert explained.
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
                                      Visual storytelling is simply the way most
                                      brands will decide to go in 2016 &amp;
                                      beyond, as they try to tell their story to
                                      their customers the oldest and most
                                      important unwritten rule in film industry
                                      says that you shouldn’t rely much on words
                                      to tell your story. In fact, you should
                                      rely on them as less as possible. It’s no
                                      coincidence that Buster Keaton and
                                      Charlot’s movies remain among the biggest
                                      classic movies of all time. In fact, not
                                      being able to rely on spoken word made
                                      them better storytellers. They fully
                                      understood and used the power of showing
                                      without words.
                                    </p>
                                    <p className="mt-3">
                                      While Denver sits at the base of the Rocky
                                      Mountains, it’s not considered a mountain
                                      town since it takes at least an hour to
                                      get to the Rockies for snowboarding and
                                      ski activities, a local expert explained
                                      sits at the base of the Rocky Mountains,
                                      it’s not considered a mountain town since
                                      it takes at least an hour to get to the
                                      Rockies for snowboarding and ski
                                      activities, a local expert explained.
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
                                      While Denver sits at the base of the Rocky
                                      Mountains, it’s not considered a mountain
                                      town since it takes at least an hour to
                                      get to the Rockies for snowboarding and
                                      ski activities, a local expert explained.
                                      Olympic mountain bikers, musicians, and
                                      award-winning chefs about what exactly
                                      makes their hometowns so special and fun.{" "}
                                      <br />
                                      In fact, not being able to rely on spoken
                                      word made them better storytellers. They
                                      fully understood and used the power of
                                      showing without words.
                                    </p>
                                    <p className="mt-3">
                                      Probably the oldest and most important
                                      unwritten rule in film industry says that
                                      you shouldn’t rely much on words to tell
                                      your story. In fact, you should rely on
                                      them as less as possible is simply the way
                                      most brands will decide to go in 2016
                                      &amp; beyond, as they try to tell their
                                      story to their customers.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Great Schools and Entertainment1
                                    </h2>
                                    <p>
                                      Education is a high point when it comes to
                                      analyzing the quality of life factors that
                                      make Ann Arbor one of the best places to
                                      live. The University of Michigan, which
                                      has 43,000 students, makes Ann Arbor a
                                      perennial candidate for our annual ranking
                                      of the best college towns and plays a big
                                      role in the city’s economy and culture.
                                    </p>
                                    <p className="mt-3">
                                      While Denver sits at the base of the Rocky
                                      Mountains, it's not considered a mountain
                                      town since it takes considered at least an
                                      hour to get to the Rockies for
                                      snowboarding and ski activities, a local
                                      expert explained sits at the base of the
                                      Rocky Mountains, it's not considered a
                                      mountain town since it takes at least an
                                      hour to get to the Rockies for
                                      snowboarding and ski activities, a local
                                      expert explained.
                                    </p>
                                    <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                                      Capital of Texas4
                                    </h2>
                                    <p>
                                      Visual storytelling is simply the way most
                                      brands will decide to go in 2016 &amp;
                                      beyond, as they try to tell their story to
                                      their customers the oldest and most
                                      important unwritten rule in film industry
                                      says that you shouldn’t rely much on words
                                      to tell your story. In fact, you should
                                      rely on them as less as possible. It’s no
                                      coincidence that Buster Keaton and
                                      Charlot’s movies remain among the biggest
                                      classic movies of all time. In fact, not
                                      being able to rely on spoken word made
                                      them better storytellers. They fully
                                      understood and used the power of showing
                                      without words.
                                    </p>
                                  </div>
                                </Gallery>
                              </div>
                            </div>
                          </div>
                        )}
                        {activeTab == 3 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <p>
                                  (0:05 - 0:10) <br />
                                  Welcome to the Concur AI Search podcast from
                                  the team at AI Monitor. It's great to be back.
                                  Thanks.
                                </p>
                                <p>
                                  (0:10 - 0:18) <br />
                                  Yeah, great to be here. I'm really looking
                                  forward to this one. Today's topic, well, it
                                  feels like it's at the core of everything
                                  changing with AI Search.
                                </p>
                                <p>
                                  (0:18 - 0:35)
                                  <br />
                                  It absolutely does. And for everyone
                                  listening, this is our 10th discussion in our
                                  11-part series. We're breaking down the top 11
                                  AI optimization techniques, you know, the ones
                                  that really help you get visibility on
                                  platforms like Google AI Overview, ChatGPT,
                                  Perplexity AI.
                                </p>
                                <p>
                                  (0:35 - 0:51) <br />
                                  Basically how to win in this new AI world. And
                                  we've definitely covered some crucial ground
                                  already. Just to recap quickly, we've talked
                                  about things like the LLMs.txt file, that
                                  technical bit, telling AIs how to crawl,
                                  getting active on Reddit, using citations
                                  smartly.
                                </p>

                                <p>
                                  (0:51 - 0:55)
                                  <br />
                                  Right. Evolving SEO playbooks, the importance
                                  of PR, readability. Exactly.
                                </p>

                                <p>
                                  (0:55 - 1:03)
                                  <br />
                                  Quality content, long tail keywords for user
                                  prompts, and even getting reviews
                                  strategically. All building blocks. Which
                                  leads us perfectly into today.
                                </p>
                                <p>
                                  (1:03 - 1:22)
                                  <br />
                                  Today we're tackling number 10, why entity
                                  optimization isn't just important, but maybe
                                  even more important in the age of AI Search.
                                  Our goal, like always, is to dig into the key
                                  insights, give you the actionable stuff, and
                                  get you up to speed fast on this critical AIO
                                  technique. So let's jump in.
                                </p>
                                <p>
                                  (1:22 - 1:32)
                                  <br />
                                  Okay. So first things first. What exactly is
                                  an entity, you know, in this SEO world? Google
                                  calls it something singular, unique,
                                  well-defined, and distinguishable.
                                </p>

                                <p>
                                  (1:32 - 1:46)
                                  <br />
                                  But the interesting part is they don't have to
                                  be physical things. We're talking people,
                                  sure, but also places, ideas, brands,
                                  concepts, companies, events, even things like
                                  colors or dates. They're distinct concepts.
                                </p>
                                <p>
                                  (1:46 - 1:55)
                                  <br />
                                  That's a really key point. Because, you know,
                                  people hear entity and think, isn't that just
                                  a keyword? It's different, right? Totally
                                  different. Keywords are, well, they're the
                                  search terms people type in, the actual words.
                                </p>
                                <p>
                                  (1:55 - 2:00)
                                  <br />
                                  Like Apple. Exactly. Apple, as a keyword,
                                  could be the fruit, could be the tech company.
                                </p>
                                <p>
                                  (2:00 - 2:10)
                                  <br />
                                  But as an entity, the context makes it clear.
                                  If you're talking Apple alongside iOS, iPhone,
                                  Tim Cook, well, the AI knows you mean Apple
                                  Inc., the entity. Right.
                                </p>
                                <p>
                                  (2:11 - 2:22)
                                  <br />
                                  So it's about shifting from just thinking
                                  about strings of words to thinking about the
                                  actual things, the concepts behind them.
                                  Entities are kind of the bigger topics that
                                  keywords fall under. They give the context.
                                </p>
                                <p>
                                  (2:23 - 2:31)
                                  <br />
                                  Precisely. And look, this isn't some brand new
                                  idea that just popped up. Search engines,
                                  especially Google, have been moving this way
                                  for, well, over a decade now.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {activeTab == 4 && (
                          <div className="uc-active">
                            <div className="feature-item panel">
                              <div className="container container-80">
                                <h2 className="text-center">📚 Sources:</h2>
                                <ul className="fs-5">
                                  <li>
                                    Wittypen. (n.d.). SEO case studies.
                                    Retrieved from{" "}
                                    <a
                                      href="https://wittypen.com/blog/seo-case-studies/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://wittypen.com/blog/seo-case-studies/
                                    </a>
                                  </li>
                                  <li>
                                    AdLift. (n.d.). A beginner’s guide to
                                    semantic search. Retrieved from{" "}
                                    <a
                                      href="https://www.adlift.com/in/blog/a-beginners-guide-to-semantic-search/s/"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.adlift.com/in/blog/a-beginners-guide-to-semantic-search/s/
                                    </a>
                                  </li>
                                  <li>
                                    Google Search Central. (n.d.). Semantic
                                    search explained [Video]. YouTube. Retrieved
                                    from
                                    <a
                                      href="https://www.youtube.com/watch?v=RGPGdGyhyN0"
                                      className="text-blue"
                                      target="_blank"
                                    >
                                      https://www.youtube.com/watch?v=RGPGdGyhyN0
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* <Gallery>
                      <div
                        className="post-content panel fs-6 md:fs-5 ml-2"
                        data-uc-lightbox="animation: scale"
                      >
                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Introduction
                        </h2>
                        <p className="">
                          She started her blog exactly six months before I
                          launched Camels &amp; Chocolate, and she really set
                          the bar high for my own blog birthday, Y’all this
                          summer! I’ve already been brainstorming party ideas …
                          who wants to come? It’s no coincidence that Buster
                          Keaton and Charlot’s movies of the and award-winning
                          chefs about what exactly makes their hometowns In
                          fact, not being able to rely on spoken word made them
                          better storytellers. They fully understood and used
                          the power of showing without words. A range of
                          amenities provides many things to do in Bellevue.
                          About 40 percent of the city’s population are
                          minorities, which contributes to an overall diverse
                          range of lifestyles and ideas.
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
                            Bike paths and sidewalks make getting to and from
                            the city’s many festivals, museums, restaurants and
                            music venues easy. A range of amenities provides
                            many things to do in Bellevue. About 40 percent of
                            the city’s population are minorities, which
                            contributes to an overall diverse range of
                            lifestyles and ideas.
                          </p>
                          <p className="mt-3">
                            While Denver sits at the base of the Rocky
                            Mountains, it’s not considered a mountain town since
                            it takes at least an hour to get to the Rockies for
                            snowboarding and ski activities, a local expert
                            explained. Olympic mountain bikers, musicians, and
                            award-winning chefs about what exactly makes their
                            hometowns so special and fun.
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
                        <h3 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Capital of Texas 2
                        </h3>
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

                        <h2 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                          Capital of Texas3
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
                    </Gallery> */}
                  </div>
                </div>
                {/* <div className="col-12 md:col-5 lg:col-3">
                  <Toc />
                </div> */}
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
