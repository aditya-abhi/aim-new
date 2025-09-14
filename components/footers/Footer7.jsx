import React from "react";
import LanguageSelect from "../common/LanguageSelect";
import Link from "next/link";
import Image from "next/image";
import { footerLinks6 } from "@/data/footer";

export default function Footer7() {
  return (
    <footer
      id="uc-footer"
      className="uc-footer panel overflow-hidden uc-dark uc-dark"
    >
      <div className="footer-outer py-6 lg:py-8 xl:py-9 bg-tertiary-700 text-white text-opacity-70 m-2 mt-0 rounded-2">
        <div className="uc-footer-content">
          <div className="container xl:max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-6">
                    <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                      <div>
                        <Link
                          className="panel text-none"
                          href={`/`}
                          style={{ width: 140 }}
                        >
                          <Image
                            className="dark:d-none"
                            alt="Lexend"
                            src="/assets/images/common/ai-monitor-logo-light.webp"
                            width={148}
                            height={39}
                          />
                          <Image
                            className="d-none dark:d-block"
                            alt="Lexend"
                            src="/assets/images/common/ai-monitor-logo-dark.webp"
                            width={148}
                            height={39}
                          />
                        </Link>
                        <p className="my-2">
                          Empowering brands to be found, trusted, and chosen
                          through customized Generative Engine Optimization and
                          AI SEO strategies for today’s answer-first search
                          landscape
                        </p>
                      </div>
                      {/* <LanguageSelect /> */}
                    </div>
                  </div>
                  {/* {footerLinks6.map((section, index) => (
                    <div key={index} className={section.className || ""}>
                      <ul className="nav-y gap-2 fw-medium dark:text-white">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.isLink ? (
                              <Link href={link.href}>{link.text}</Link>
                            ) : (
                              <a href={link.href}>{link.text}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))} */}
                  <ul className="nav-y gap-2 fw-medium dark:text-white">
                    <li className="fw-bold">What We Do</li>
                    <li>
                      <Link href="/generative-engine-optimization-tool-for-agencies">
                        Agency Clients
                      </Link>
                    </li>
                    <li>
                      <Link href="/case-studies">Case Studies</Link>
                    </li>
                    <li>
                      <Link href="/podcasts">Podcasts</Link>
                    </li>
                    <li>
                      <Link href="/most-comprehensive-generative-engine-optimization-geo-guide">
                        GEO Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/testimonials">Testimonials</Link>
                    </li>
                  </ul>
                  <ul className="nav-y gap-2 fw-medium dark:text-white">
                    <li className="fw-bold">Boring Legal Stuff</li>
                    <li>
                      <Link href="/about-us">About</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-conditions">Terms</Link>
                    </li>
                    <li>
                      <Link href="/refund-policy">Refund Policy</Link>
                    </li>
                  </ul>
                  <ul className="nav-y gap-0 fw-medium text-white d-none lg:d-block">
                    <li className="fw-bold mb-1">Address:</li>
                    <li className="">
                      <h5 className="mb-0 fw-bold">India Office:</h5>
                    </li>
                    <li className="mt-0">
                      <p>
                        A-64, A Block, Sector 63, Noida,
                        <br /> Uttar Pradesh – 201301
                      </p>
                    </li>
                    <li className="mt-2">
                      <h5 className="mb-0 fw-bold">US Office:</h5>
                    </li>
                    <li className="mt-0">
                      <p>
                        221 East Indianola Avenue,
                        <br />
                        Phoenix, Arizona 85012
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between pt-4 lg:pt-6 mt-6 border-top">
                <p>
                  Amtolit Inc. DBA AI Monitor © {new Date().getFullYear()}, All
                  rights reserved.
                </p>
                <ul className="nav-x justify-center gap-2">
                  <li>
                    <a
                      className="duration-150 hover:text-primary"
                      href="https://www.linkedin.com/company/get-ai-monitor/"
                    >
                      <i className="icon icon-2 unicon-logo-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="duration-150 hover:text-primary"
                      href="https://www.youtube.com/@AI_MonitorOffiial"
                    >
                      <i className="icon icon-2 unicon-logo-youtube" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="duration-150 hover:text-primary"
                      href="https://www.facebook.com/people/AI-Monitor/61572471364497/"
                    >
                      <i className="icon icon-2 unicon-logo-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="duration-150 hover:text-primary"
                      href="https://x.com/getAiMonitor"
                    >
                      <i className="icon icon-2 unicon-logo-x-filled" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="duration-150 hover:text-primary"
                      href="https://www.instagram.com/aimonitorofficial/"
                    >
                      <i className="icon icon-2 unicon-logo-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
