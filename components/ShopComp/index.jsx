"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import GraphicSlideBox from "../sliders/graphic-slider-box";

const ShopComp = ({ keyword }) => {
  const [result, setResult] = useState([-1]);
  const [btns, setBtns] = useState(1);
  const searchKeyword = keyword ? `keyword=${keyword}` : "";

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const mainUrl = `http://localhost:27017/api/search-products?${searchKeyword}`;
  //         const response = await axios.get(mainUrl);
  //         setResult(response.data.allProducts);
  //         setBtns(response.data.btns);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, [searchKeyword]);

  //const keyword = url.keyword ? `keyword=${url.keyword}` : "";

  useEffect(() => {
    const mainUrl = `http://localhost:27017/api/search-products?${searchKeyword}`;
    axios.get(mainUrl).then((d) => {
      setResult(d.data.allProducts);
      setBtns(d.data.btns);
    });
  }, [keyword]);

  return (
    <div>
      <section className="flex justify-between items-center gap-4 flex-wrap">
        {result[0] == -1 ? (
          <div className="w-full flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : result.length < 1 ? (
          <div>محصولی با این مشخصات موجود نیست...</div>
        ) : (
          result.map((da, i) => <GraphicSlideBox key={i} itemData={da} />)
        )}
      </section>
    </div>
  );
};

export default ShopComp;
