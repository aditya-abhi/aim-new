"use client";

import { useContextElement } from "@/context/Context";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import InlineToc from "@/components/blogs/InlineToc";

export default function BacktoTop() {
  const { isDark, handleToggle } = useContextElement();
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(false);
  const [isTOCOpen, setIsTOCOpen] = useState(true);
  const isBlogPage =
    pathname?.startsWith("/blogs/") || pathname?.startsWith("/blog/");

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled more than page height
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTOC = () => {
    setIsTOCOpen(!isTOCOpen);
  };

  return (
    <>
      <div
        className={`backtotop-wrap position-fixed bottom-0 end-0 z-99 m-2 vstack  ${
          isVisible ? "uc-active" : ""
        }`}
      >
        {isBlogPage && isVisible && (
          <a
            className={`btn btn-sm w-40px h-40px rounded-circle mb-1 ${
              isTOCOpen ? "bg-primary text-white" : "!bg-[#93e85f] !text-black"
            }`}
            style={
              isTOCOpen
                ? {}
                : {
                    backgroundColor: "#93e85f",
                    color: "#000000",
                    zIndex: 100,
                  }
            }
            onClick={toggleTOC}
            title={
              isTOCOpen ? "Close Table of Contents" : "Open Table of Contents"
            }
          >
            <i className="icon-2 unicon-list"></i>
          </a>
        )}
        <div
          className="darkmode-trigger cstack w-40px h-40px rounded-circle text-none bg-gray-100 dark:bg-gray-700 dark:text-white"
          data-darkmode-toggle=""
        >
          <label className="switch">
            <span className="sr-only">Dark mode toggle</span>
            <input onChange={handleToggle} type="checkbox" checked={isDark} />
            <span className="slider fs-5"></span>
          </label>
        </div>
        <a
          className="btn btn-sm bg-primary text-white w-40px h-40px rounded-circle"
          onClick={scrollToTop}
          data-uc-backtotop
        >
          <i className="icon-2 unicon-chevron-up"></i>
        </a>
      </div>

      {/* Floating TOC Panel */}
      {isBlogPage && isVisible && isTOCOpen && (
        <div
          className="position-fixed bottom-0 start-0 z-98 m-2 ms-20 bg-white dark:bg-gray-800 rounded-2 shadow-lg border border-gray-200 dark:border-gray-700 max-h-400px overflow-y-auto d-block lg:d-none"
          style={{ width: "280px" }}
        >
          <div className="p-3 border-bottom border-gray-200 dark:border-gray-700">
            <div className="d-flex justify-between items-center">
              <h6 className="h6 m-0 text-gray-900 dark:text-white">
                Table of Contents
              </h6>
              <button
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-all z-10 relative border-0 bg-transparent font-bold text-lg !text-red-600 dark:!text-red-400 hover:!text-red-700 dark:hover:!text-red-300"
                onClick={() => setIsTOCOpen(false)}
                title="Close"
                style={{
                  fontSize: "18px",
                  lineHeight: "1",
                  color: "rgb(220 38 38)", // fallback red color
                }}
              >
                ×
              </button>
            </div>
          </div>
          <div className="p-3">
            <InlineToc />
          </div>
        </div>
      )}
    </>
  );
}
