"use client";

import { useRef } from "react";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import SlideBox from "../graphic-slider-box";

const GraphicSlider = () => {
  const carouselRef = useRef();
  const carouselSwitcher = (data) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo(
        carouselRef.current.scrollLeft + width * data,
        0
      );
    }
  };

  return (
    <div className="bg-[#ffc422]">
      <div className="container mx-auto py-8">
        <section className="flex flex-col gap-4 px-2">
          <header className=" flex justify-between items-center">
            <h2 className="text-2xl border-r-black border-r-2 pr-1  text-black">
              فایل‌های گرافیکی
            </h2>
            <div className="flex gap-1">
              <div className=" flex items-center gap-1 text-zinc-600">
                <FaChevronRight
                  onClick={() => {
                    carouselSwitcher(1);
                  }}
                  className=" cursor-pointer bg-white transition-all duration-300 hover:text-white hover:bg-indigo-400 w-10 h-10 p-3 rounded"
                />
                <FaChevronLeft
                  onClick={() => {
                    carouselSwitcher(-1);
                  }}
                  className=" cursor-pointer bg-white transition-all duration-300 hover:text-white hover:bg-indigo-400 w-10 h-10 p-3 rounded"
                />
              </div>
              <Link
                href={"/"}
                className="flex items-center text-white! border-white border-2 bg-orange-500 px-4 py-1 rounded-md transition-all duration-500 hover:bg-orange-600"
              >
                مشاهده همه
              </Link>
            </div>
          </header>
          <div
            ref={carouselRef}
            className="sliderContainer w-full max-w-7xl overflow-x-scroll px-4"
          >
            <div className=" flex justify-between items-center gap-4 ">
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GraphicSlider;
