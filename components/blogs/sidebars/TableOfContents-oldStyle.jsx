import { blogPosts2, blogPosts3, blogPosts7, posts2 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TableOfContents() {
  return (
    <div className="uc-sidebar panel vstack gap-2 ">
      <div className="widget popular-widget vstack gap-2 p-2 py-3 lg:p-4 lg:py-5 rounded-1-5 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
        <div className="widget-title text-center">
          <h5 className="fs-7 m-0">Table of Content</h5>
        </div>
        <div className="widget-content">
          <div className="row child-cols-12 gx-4 gy-3 sep-x">
            {posts2.map((post, i) => (
              <div key={post.id}>
                <article className="post type-post panel">
                  <div className="row child-cols g-2 lg:g-3">
                    <div>
                      <div className="hstack items-start gap-3">
                        <span className="h3 lg:h2 fst-italic text-center text-primary m-0 min-w-24px">
                          {i + 1}
                        </span>{" "}
                        <div className="post-header panel vstack justify-between gap-1">
                          <h3 className="post-title h6 m-0">
                            <Link
                              className="text-none"
                              href={`/blog-details/${post.id}`}
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                            <div className="meta">
                              <div className="hstack gap-2">
                                <div>
                                  <div className="post-date hstack gap-narrow">
                                    <span>{post.date}</span>
                                  </div>
                                </div>
                                <div>
                                  <a
                                    href="#post_comment"
                                    className="post-comments text-none hstack gap-narrow"
                                  >
                                    <i className="icon-narrow unicon-chat" />
                                    <span>{post.comments}</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
