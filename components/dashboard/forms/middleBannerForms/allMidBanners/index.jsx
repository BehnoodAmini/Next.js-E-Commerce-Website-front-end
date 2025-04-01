"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import Box from "./Box";

const AllMidBanners = ({ setMidBanDetCtrl, setRandNumForBannerClick }) => {
  const [banners, setBanners] = useState([-1]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numbersOfBtns, setNumbersOfBtns] = useState([-1]);
  const [allMidBannerNums, setAllMidBannerNums] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:27017/api/middle-banners?pn=${pageNumber}`)
      .then((d) => {
        setBanners(d.data.GoalMidBans);
        setNumbersOfBtns(
          Array.from(Array(Math.ceil(d.data.AllMidBansNum / 10)).keys())
        );
        setAllMidBannerNums(d.data.AllMidBansNum);
      })
      .catch((e) => console.log(e));
  }, [pageNumber]);

  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex justify-end">
        <div className="w-32 h-10 rounded bg-indigo-600 flex justify-center items-center text-white">
          {allMidBannerNums} بنر
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {banners[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : banners.length < 1 ? (
          <div className="flex justify-center items-center w-full p-8">
            بنری موجود نیست...
          </div>
        ) : (
          banners.map((ba, i) => (
            <Box
              setMidBanDetCtrl={setMidBanDetCtrl}
              setRandNumForBannerClick={setRandNumForBannerClick}
              key={i}
              data={ba}
            />
          ))
        )}
      </div>
      <div className="flex justify-center items-center gap-4">
        {numbersOfBtns[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
          </div>
        ) : (
          numbersOfBtns.map((da, i) => (
            <button
              className="cursor-pointer flex justify-center items-center bg-indigo-500 text-white w-8 h-8 rounded transition-all duration-300 hover:bg-orange-500"
              onClick={() => {
                setPageNumber(da + 1);
                setBanners([]); //TO HAVE LOADING IN EACH PAGE
                goTopCtrl();
              }}
              key={i}
            >
              {da + 1}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default AllMidBanners;
