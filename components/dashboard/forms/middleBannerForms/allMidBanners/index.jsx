"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import Box from "./Box";

const AllMidBanners = ({ setMidBanDetCtrl }) => {
  const [banners, setBanners] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numbersOfBtns, setNumbersOfBtns] = useState([-1]);

  useEffect(() => {
    axios
      .get(`http://localhost:27017/api/middle-banners?pn=${pageNumber}`)
      .then((d) => {
        setBanners(d.data.GoalMidBans);
        setNumbersOfBtns(
          Array.from(Array(Math.ceil(d.data.AllMidBansNum / 2)).keys())
        );
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
      <div className="flex flex-col gap-6">
        {banners.length < 1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : (
          banners.map((ba, i) => (
            <Box setMidBanDetCtrl={setMidBanDetCtrl} key={i} data={ba} />
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
              className="cursor-pointer flex justify-center items-center bg-indigo-500 text-white w-8 h-8 rounded"
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
