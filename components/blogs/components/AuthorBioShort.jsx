import Image from "next/image";
import React from "react";

export default function AuthorBioShort() {
  return (
    <div className="container">
      <div className="post-author panel py-2 px-2 sm:p-1 xl:p-2 border border-dark dark:border-white rounded lg:rounded-2 my-2">
        <div className="row g-2 items-center">
          <div className="col-12 sm:col-4 lg:col-1">
            {/* <figure className="m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden"> */}
            <div className="d-block m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
              <Image
                className="media-cover image uc-transition-scale-up uc-transition-opaque"
                alt="Avinash Tripathi Image"
                src="/assets/images/avatars/avinash.webp"
                width={100}
                height={100}
              />
            </div>
            {/* </figure> */}
          </div>
          <div className="col-12 sm:col-8 lg:col-10">
            <div className="panel vstack items-start">
              <h3 className="h4 m-0">
                Author:{" "}
                <span className="text-tertiary dark:text-primary">
                  Avinash Tripathi
                </span>
              </h3>
              <h4 className="h5 m-0"></h4>
              <p className="fs-6 mt-1">
                My GEO journey began when Copilot critiqued my startup, I chose
                to learn, not ignore. That curiosity led to media features and
                being named the #1 GEO Consultant by YesUsers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
