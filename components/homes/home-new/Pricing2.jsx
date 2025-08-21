import { pricingNew } from "@/data/pricing";
import React from "react";
import Link from "next/link";
export default function Pricing() {
  return (
    <div
      id="pricing_tiers"
      className="pricing-tiers section panel overflow-hidden"
    >
      <div className="section-outer panel py-6 lg:py-8 xl:py-10 lg:mx-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-550px mx-auto text-center  items-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fs-7 fw-bold py-narrow px-2 border border-tertiary-100 dark:border-white rounded-pill text-tertiary dark:text-white max-w-fc">
                  PRICING
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  Find Your Perfect AI Monitoring Plan
                </h2>
                <p className="fs-6 xl:fs-5">
                  No extra charges. No hidden fees.
                </p>
              </div>
              <div className="content panel w-100">
                <div
                  className="row child-cols-12 sm:child-cols-6 col-match justify-center g-2"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
                >
                  {pricingNew.map((plan, index) => (
                    <div key={index}>
                      <div
                        className={`tier panel vstack justify-between p-3 md:p-4 lg:p-6 xl:p-8 rounded-1-5 lg:rounded-2 bg-white  dark:bg-opacity-5 text-dark dark:text-white text-center`}
                      >
                        {plan.badge && (
                          <span className="fs-7 position-absolute top-0 end-0 fw-bold text-uppercase text-primary dark:text-white my-2 mx-3">
                            {plan.badge}
                          </span>
                        )}
                        <header className="tier-header vstack gap-2 items-center">
                          <h5 className="h5 lg:h4 m-0 text-primary dark:text-white">
                            {plan.title}
                          </h5>
                          <div className="d-flex gap-narrow items-end mt-1">
                            <h3 className="h1 lg:display-6 price m-0 text-dark dark:text-white">
                              {plan.price}
                            </h3>
                            <span className="h6 lg:h3 m-0 pb-narrow text-dark dark:text-white">
                              / mo.
                            </span>
                          </div>
                          <p className="desc lg:fs-5">{plan.description}</p>
                        </header>
                        <div className="tier-body">
                          <ul className="nav-y gap-2 text-start">
                            {plan.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="hstack items-start gap-1"
                              >
                                <i className="cstack w-24px h-24px bg-primary-100 text-primary rounded-circle unicon-checkmark fw-bold" />
                                <span className="d-inline">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <hr className="my-2 md:my-3 lg:my-4" />
                        <Link
                          className="btn btn-md lg:btn-lg btn-primary text-white rounded-default w-100 mt-2"
                          href={`/sign-up`}
                        >
                          <span>{plan.linkText}</span>
                        </Link>
                        <p className="details pt-2">Billed Monthly.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="footer panel text-center"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500;"
              >
                <Link
                  href={`/page-pricing`}
                  className="btn btn-md rounded-default bg-primary dark:bg-white dark:text-tertiary-700 border-gray-900 dark:border-white border-opacity-20 hover:border-opacity-40 shadow-xs hover:shadow-lg mt-1"
                >
                  <span>View Plans</span>
                </Link>
                <p className="mt-2">Prices include all taxes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
