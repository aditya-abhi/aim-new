"use client";
import { comic } from "@/data/timeline";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Timeline() {
  return (
    <div
      id="about-timeline"
      className="about-timeline section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack justify-center items-center gap-2">
              <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-tertiary dark:text-white">
                OUR STORY
              </span>
              <div className="mt-2 pb-4 lg:pb-8">
                <h2
                  className="h3 sm:h3 lg:h2 m-0 text-center"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                >
                  Our Story, Our Purpose
                </h2>
                <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white mt-2 text-center">
                  A journey of passion, purpose, and people. It all started with
                  a single idea and a shared dream to make a difference. We've
                  poured our hearts into every step, and we're so excited to
                  share how we got here.
                </p>
              </div>
              <div
                style={{ width: "fit-content", maxWidth: "600px" }}
                className="panel swiper-parent"
              >
                <Swiper
                  className="swiper-timeline swiper swiper-container overflow-unset"
                  slidesPerView={1}
                  spaceBetween={50}
                  // centeredSlides={true}
                  // centeredSlidesBounds={true}
                >
                  {comic.map((item, index) => (
                    <SwiperSlide key={index} className="panel">
                      <div className="timeline-box panel vstack items-center gap-9 text-center mx-2">
                        <div className="image-wrap panel overflow-hidden w-400px lg:w-500px xl:w-600px">
                          <Image
                            className="image w-100 origin-bottom rounded-2"
                            src={item.src}
                            width={600}
                            height={600}
                            alt={item.alt}
                          />
                        </div>
                        {/* <div className="content panel vstack items-center px-3 xl:px-6">
                          <h3 className="title h4 sm:h3 dark:text-white">
                            {item.year}
                          </h3>
                          <p className="desc fs-6 xl:fs-5 opacity-70 dark:text-white">
                            {item.description}
                          </p>
                        </div> */}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
