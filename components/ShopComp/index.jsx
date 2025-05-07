"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

import GraphicSlideBox from "../sliders/graphic-slider-box";

const ShopComp = ({ url }) => {
  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const router = useRouter();

  const [result, setResult] = useState([-1]);
  const [btns, setBtns] = useState([-1]);
  const title = url.keyword;

  const [keyword, setKeyword] = useState(
    url.keyword ? `&keyword=${url.keyword}` : ""
  );
  const [orderBy, setOrderBy] = useState(
    url.orderBy ? `&orderBy=${url.orderBy}` : "&orderBy=date"
  );
  const [typeOfPro, setTypeOfPro] = useState(
    url.type ? `&type=${url.type}` : ""
  );
  const [maxPrice, setMaxPrice] = useState(url.maxP ? `&maxP=${url.maxP}` : "");
  const [minPrice, setMinPrice] = useState(url.minP ? `&minP=${url.minP}` : "");
  const [categories, setCategories] = useState(
    url.categories ? `&categories=${url.categories}` : ""
  );
  const [pgn, setPgn] = useState(url.pgn ? `&pgn=${url.pgn}` : "&pgn=12");
  const [pn, setPn] = useState(url.pn ? `&pn=${url.pn}` : "&pn=1");

  const queries = `${keyword ? keyword : ""}${orderBy ? orderBy : ""}${
    typeOfPro ? typeOfPro : ""
  }${maxPrice ? maxPrice : ""}${minPrice ? minPrice : ""}${
    categories ? categories : ""
  }${pgn ? pgn : ""}${pn ? pn : ""}`;
  const mainFrontUrl = `/shop?${queries}`;
  const mainBackUrl = `http://localhost:27017/api/search-products?${queries}`;

  useEffect(() => {
    router.push(mainFrontUrl);
    axios.get(mainBackUrl).then((d) => {
      setResult(d.data.allProducts);
      setBtns(d.data.btns);
    });
  }, [keyword, orderBy, typeOfPro, maxPrice, minPrice, categories, pgn, pn]);

  // ORDER BY
  const orderByHandler = (v) => {
    setResult([-1]);
    setOrderBy(`&orderBy=${v.target.value}`);
    goTopCtrl();
    setPn(`&pn=1`);
    setPgn(`&pgn=12`);
  };

  // TYPE OF PRODUCT
  const typeOfProductHandler = (v) => {
    setResult([-1]);
    if (v.target.value == "allPros") {
      setTypeOfPro(``);
    } else {
      setTypeOfPro(`&type=${v.target.value}`);
    }
    goTopCtrl();
    setPn(`&pn=1`);
    setPgn(`&pgn=12`);
  };

  // PRICE
  const minPRef = useRef();
  const maxPRef = useRef();
  const priceHandler = (e) => {
    e.preventDefault();
    setResult([-1]);
    if (maxPRef.current.value == "") {
      maxPRef.current.value = 1000000000;
    }
    if (minPRef.current.value == "") {
      minPRef.current.value = 0;
    }
    setMaxPrice(`&maxP=${maxPRef.current.value}`);
    setMinPrice(`&minP=${minPRef.current.value}`);
    goTopCtrl();
    setPn(`&pn=1`);
    setPgn(`&pgn=12`);
  };

  // CATEGORIES
  const [allCats, setAllCats] = useState([-1]);
  useEffect(() => {
    const url = "http://localhost:27017/api/products-categories-rel";
    axios.get(url).then((d) => {
      setAllCats(d.data);
    });
  }, []);

  const categoriesHandler = (v) => {
    if (v.target.checked) {
      if (categories.length > 0) {
        setCategories(`${categories},${v.target.value}`);
      } else {
        setCategories(`&categories=${v.target.value}`);
      }
      setResult([-1]);
    } else {
      const numberOfCommas = categories.split(",").length - 1;
      const a = categories.includes(`,${v.target.value}`)
        ? categories.replace(`,${v.target.value}`, "")
        : numberOfCommas == 0
        ? ""
        : categories.replace(`${v.target.value},`, "");
      setCategories(a);
    }
    goTopCtrl();
    setPn(`&pn=1`);
    setPgn(`&pgn=12`);
  };

  return (
    <div className="container mx-auto flex justify-between items-start gap-2">
      <aside className="w-80 flex flex-col gap-4">
        <div className="flex flex-col gap-4 bg-zinc-100 rounded-lg p-2">
          <div>مرتب سازی بر اساس</div>
          <div className="flex gap-2 items-center flex-wrap justify-between">
            <div className="flex gap-1 items-center justify-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded">
              <label htmlFor="date">جدیدترین</label>
              {orderBy == "&orderBy=date" ? (
                <input
                  onClick={orderByHandler}
                  type="radio"
                  name="orderBy"
                  id="date"
                  value={"date"}
                  defaultChecked
                />
              ) : (
                <input
                  onClick={orderByHandler}
                  type="radio"
                  name="orderBy"
                  id="date"
                  value={"date"}
                />
              )}
            </div>
            <div className="flex gap-1 items-center justify-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded">
              <label htmlFor="price">قیمت</label>
              {orderBy == "&orderBy=price" ? (
                <input
                  onClick={orderByHandler}
                  type="radio"
                  name="orderBy"
                  id="price"
                  value={"price"}
                  defaultChecked
                />
              ) : (
                <input
                  onClick={orderByHandler}
                  type="radio"
                  name="orderBy"
                  id="price"
                  value={"price"}
                />
              )}
            </div>
            <div className="flex gap-1 items-center justify-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded">
              <label htmlFor="pageView">پر بازدیدترین</label>
              {orderBy == "&orderBy=pageView" ? (
                <input
                  onClick={orderByHandler}
                  type="radio"
                  name="orderBy"
                  id="pageView"
                  value={"pageView"}
                  defaultChecked
                />
              ) : (
                <input
                  onClick={orderByHandler}
                  type="radio"
                  name="orderBy"
                  id="pageView"
                  value={"pageView"}
                />
              )}
            </div>
            <div className="flex gap-1 items-center justify-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded">
              <label htmlFor="buyNumber">پر فروش‌ترین</label>
              {orderBy == "&orderBy=buyNumber" ? (
                <input
                  onClick={orderByHandler}
                  type="radio"
                  name="orderBy"
                  id="buyNumber"
                  value={"buyNumber"}
                  defaultChecked
                />
              ) : (
                <input
                  onClick={orderByHandler}
                  type="radio"
                  name="orderBy"
                  id="buyNumber"
                  value={"buyNumber"}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-zinc-100 rounded-lg p-2">
          <div>نوع محصول</div>
          <div className="flex gap-2 items-center flex-wrap justify-between">
            <div className="flex gap-1 items-center justify-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded">
              <label htmlFor="allPros">همه</label>
              {typeOfPro == "" ? (
                <input
                  onClick={typeOfProductHandler}
                  type="radio"
                  name="typeOfProduct"
                  id="allPros"
                  value={"allPros"}
                  defaultChecked
                />
              ) : (
                <input
                  onClick={typeOfProductHandler}
                  type="radio"
                  name="typeOfProduct"
                  id="allPros"
                  value={"allPros"}
                />
              )}
            </div>
            <div className="flex gap-1 items-center justify-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded">
              <label htmlFor="app">اپلیکیشن</label>
              {typeOfPro == "&type=app" ? (
                <input
                  onClick={typeOfProductHandler}
                  type="radio"
                  name="typeOfProduct"
                  id="app"
                  value={"app"}
                  defaultChecked
                />
              ) : (
                <input
                  onClick={typeOfProductHandler}
                  type="radio"
                  name="typeOfProduct"
                  id="app"
                  value={"app"}
                />
              )}
            </div>
            <div className="flex gap-1 items-center justify-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded">
              <label htmlFor="book">کتاب</label>
              {typeOfPro == "&type=book" ? (
                <input
                  onClick={typeOfProductHandler}
                  type="radio"
                  name="typeOfProduct"
                  id="book"
                  value={"book"}
                  defaultChecked
                />
              ) : (
                <input
                  onClick={typeOfProductHandler}
                  type="radio"
                  name="typeOfProduct"
                  id="book"
                  value={"book"}
                />
              )}
            </div>
            <div className="flex gap-1 items-center justify-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded">
              <label htmlFor="gr">فایل گرافیکی</label>
              {typeOfPro == "&type=gr" ? (
                <input
                  onClick={typeOfProductHandler}
                  type="radio"
                  name="typeOfProduct"
                  id="gr"
                  value={"gr"}
                  defaultChecked
                />
              ) : (
                <input
                  onClick={typeOfProductHandler}
                  type="radio"
                  name="typeOfProduct"
                  id="gr"
                  value={"gr"}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-zinc-100 rounded-lg p-2">
          <div>بازه قیمت(تومان)</div>
          <form onSubmit={priceHandler} className="flex gap-4 flex-col">
            <div className="flex gap-2 items-center flex-wrap justify-between">
              <input
                className="text-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded"
                type="number"
                placeholder="حداقل قیمت"
                ref={minPRef}
                min={0}
              />
              <input
                className="text-center w-28 h-10 text-base sm:text-xs border-2 border-zinc-200 rounded"
                type="number"
                placeholder="حداکثر قیمت"
                ref={maxPRef}
                min={0}
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-indigo-500 p-2 rounded h-10 flex justify-center items-center text-white transition-all duration-300 hover:bg-indigo-600"
            >
              اعمال فیلتر قیمت
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4 bg-zinc-100 rounded-lg p-2">
          <div>دسته بندی</div>
          <div className="flex gap-2 items-center flex-wrap justify-between">
            {allCats[0] == -1 ? (
              <div className="w-full flex justify-center items-center p-12">
                <Image
                  alt="loading"
                  width={40}
                  height={40}
                  src={"/loading.svg"}
                />
              </div>
            ) : allCats.length < 1 ? (
              <div>دسته‌ای وجود ندارد.</div>
            ) : (
              <div className="flex flex-col gap-1">
                {allCats.map((da, i) => (
                  <div
                    key={i}
                    className="flex gap-1 items-center justify-between p-2 text-base sm:text-xs border-2 border-zinc-200 rounded"
                  >
                    <label htmlFor={da.slug}>{da.title}</label>
                    <input
                      onClick={categoriesHandler}
                      type="checkbox"
                      id={da.slug}
                      value={da.slug}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
      <main className="bg-zinc-100 rounded-lg p-2 w-full flex flex-col gap-8">
        <h1 className="text-xl text-indigo-600">محصولات {title} فروشگاه</h1>
        <div className="flex flex-col gap-6">
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
          <section className="flex justify-center items-center gap-4 flex-wrap">
            {btns[0] == -1 ? (
              <div className="w-full flex justify-center items-center p-12">
                <Image
                  alt="loading"
                  width={50}
                  height={50}
                  src={"/loading.svg"}
                />
              </div>
            ) : (
              btns.map((da, i) => (
                <button
                  onClick={() => {
                    setPgn(`pgn=12&`);
                    setPn(`pn=${da + 1}&`);
                    goTopCtrl();
                    setResult([-1]);
                  }}
                  className="w-8 h-8 rounded border-2 border-indigo-500 transition-all duration-300 hover:bg-[#571fdb2a]"
                  key={i}
                >
                  {da + 1}
                </button>
              ))
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ShopComp;

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
