"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Cookies from "js-cookie";

import { toast } from "react-toastify";

const NewProduct = () => {
  //PREVENT FORM TO BE SENT WITH ENTER
  const FormKeyNotSuber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };

  // SPLITER FOR CATEGORIES
  const spliterForCategories = (value) => {
    return value.split("*");
  };

  const [authCookie, setAuthCookie] = useState(Cookies.get("auth_cookie"));

  const titleRef = useRef();
  const slugRef = useRef();
  const mainFileRef = useRef();
  const imageRef = useRef();
  const imageAltRef = useRef();
  const priceRef = useRef();
  const shortDescRef = useRef();
  const longDescRef = useRef();
  const typeOfProductRef = useRef();
  const publishedRef = useRef();

  // TAG MANAGING
  const tagRef = useRef();
  const [tag, setTag] = useState([]);
  const tagSuber = (e) => {
    if (e.key === "Enter") {
      let tagList = [...tag];
      const data = tagRef.current.value;
      if (data.length > 0) {
        tagList = [...tag, data.replace(/\s+/g, "_").toLowerCase()];
        setTag(tagList);
      }
      tagRef.current.value = "";
    }
  };
  const tagDeleter = (indexToRemove) => {
    setTag(tag.filter((_, index) => index !== indexToRemove));
  };

  // FEATURES MANAGING
  const featuresRef = useRef();
  const [feature, setFeature] = useState([]);
  const featureSuber = (e) => {
    if (e.key === "Enter") {
      let featureList = [...feature];
      const data = featuresRef.current.value;
      if (data.length > 0) {
        featureList = [...feature, data];
        setFeature(featureList);
      }
      featuresRef.current.value = "";
    }
  };
  const featureDeleter = (indexToRemove) => {
    setFeature(feature.filter((_, index) => index !== indexToRemove));
  };

  // RELATED
  const [products, setProducts] = useState([-1]);
  const [relProducts, setRelProducts] = useState([]);
  useEffect(() => {
    const productsUrl = `https://behnood-fileshop-server.liara.run/api/products-rel`;
    axios
      .get(productsUrl)
      .then((d) => {
        setProducts(d.data);
      })
      .catch((e) => console.log("error in loading products"));
  }, []);
  const productsRelatedMan = (v) => {
    let related = [...relProducts];
    if (v.target.checked) {
      related = [...related, v.target.value];
    } else {
      related.splice(relProducts.indexOf(v.target.value), 1);
    }
    setRelProducts(related);
  };

  // CATEGORIES
  const [categories, setCategories] = useState([-1]);
  const [relCategories, setRelCategories] = useState([]);
  useEffect(() => {
    const categoriesUrl = `https://behnood-fileshop-server.liara.run/api/products-categories-rel`;
    axios
      .get(categoriesUrl)
      .then((d) => {
        setCategories(d.data);
      })
      .catch((e) => console.log("error in loading categories"));
  }, []);
  const productsCategoriesMan = (v) => {
    let related = [...relCategories];
    if (v.target.checked) {
      const goalArr = spliterForCategories(v.target.value);
      related = [
        ...related,
        {
          _id: goalArr[0],
          title: goalArr[1],
          slug: goalArr[2],
        },
      ];
    } else {
      const goalArr = spliterForCategories(v.target.value);
      related.splice(
        relCategories.indexOf({
          _id: goalArr[0],
          title: goalArr[1],
          slug: goalArr[2],
        }),
        1
      );
    }
    setRelCategories(related);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      createdAt: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      UpdatedAt: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      slug: slugRef.current.value,
      mainFile: mainFileRef.current.value,
      image: imageRef.current.value,
      imageAlt: imageAltRef.current.value,
      price: priceRef.current.value,
      shortDesc: shortDescRef.current.value,
      longDesc: longDescRef.current.value,
      tags: tag,
      features: feature,
      typeOfProduct: typeOfProductRef.current.value,
      pageView: 0,
      published: publishedRef.current.value,
      comments: [],
      relatedProducts: relProducts,
      categories: relCategories,
    };
    const url = `https://behnood-fileshop-server.liara.run/api/new-product`;
    axios
      .post(url, formData, {
        headers: { auth_cookie: authCookie },
      })
      .then((d) => {
        formData.published == "true"
          ? toast.success("محصول با موفقیت منتشر شد.", {
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          : toast.success("محصول به صورت پیش‌نویس ذخیره شد.", {
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
      })
      .catch((e) => {
        let message = "متاسفانه ناموفق بود.";
        if (e.response.data.msg) {
          message = e.response.data.msg;
        }

        toast.error(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-orange-500">محصول جدید</h2>
      <form
        onSubmit={SubmitHandler}
        onKeyDown={FormKeyNotSuber}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <div>عنوان محصول</div>
          <input
            required={true}
            type="text"
            ref={titleRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>اسلاگ محصول</div>
          <input
            required={true}
            type="text"
            ref={slugRef}
            className="inputLtr p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>URL فایل اصلی محصول</div>
          <input
            required={true}
            type="text"
            ref={mainFileRef}
            className="inputLtr p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آدرس عکس محصول</div>
          <input
            required={true}
            type="text"
            ref={imageRef}
            className="inputLtr p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>alt عکس محصول</div>
          <input
            required={true}
            type="text"
            ref={imageAltRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>قیمت محصول(تومان)</div>
          <input
            required={true}
            type="number"
            ref={priceRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>توضیحات کوتاه</div>
          <input
            required={true}
            type="text"
            ref={shortDescRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>توضیحات کامل</div>
          <textarea
            required={true}
            type="text"
            ref={longDescRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
            rows="8"
          />
        </div>
        <div className="tags flex flex-col gap-2">
          <h3>برچسب ها</h3>
          <div className="tags w-full flex flex-col gap-4">
            <div className="input flex gap-2 items-center">
              <input
                type="text"
                onKeyDown={tagSuber}
                ref={tagRef}
                className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
                placeholder="تگ را وارد کنید و Enter بزنید..."
              />
            </div>
            <div className="tagResults flex gap-3 justify-start flex-wrap">
              {tag.map((t, index) => {
                return (
                  <div
                    key={t}
                    className="res flex gap-1 text-sm py-1 px-2 rounded-md border-2 border-zinc-300"
                  >
                    <i
                      className="text-indigo-500 flex items-center  cursor-pointer"
                      onClick={() => {
                        tagDeleter(index);
                      }}
                    >
                      <span className="text-xs">{t}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tags flex flex-col gap-2">
          <h3>ویژگی ها</h3>
          <div className="tags w-full flex flex-col gap-4">
            <div className="input flex gap-2 items-center">
              <input
                type="text"
                onKeyDown={featureSuber}
                ref={featuresRef}
                className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
                placeholder="نام ویژگی: توضیح ویژگی"
              />
            </div>
            <div className="tagResults flex gap-3 justify-start flex-wrap">
              {feature.map((t, index) => {
                return (
                  <div
                    key={t}
                    className="res flex gap-1 text-sm py-1 px-2 rounded-md border-2 border-zinc-300"
                  >
                    <i
                      className="text-indigo-500 flex items-center  cursor-pointer"
                      onClick={() => {
                        featureDeleter(index);
                      }}
                    >
                      <span className="text-xs">{t}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>نوع محصول</div>
          <select
            ref={typeOfProductRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          >
            <option value={"book"}>کتاب</option>
            <option value={"app"}>اپلیکیشن</option>
            <option value={"gr"}>فایل گرافیکی</option>
          </select>
        </div>
        <div className="tags flex flex-col gap-2">
          <h3>دسته بندی‌ها</h3>
          {categories[0] == -1 ? (
            <div className="flex justify-center items-center p-12">
              <Image
                alt="loading"
                width={120}
                height={120}
                src={"/loading.svg"}
              />
            </div>
          ) : categories.length < 1 ? (
            <div className="p-3">دسته‌ای یافت نشد.</div>
          ) : (
            <div className="flex justify-start items-center flex-wrap gap-2">
              {categories.map((pr, i) => (
                <div key={i} className="px-2 py-1 bg-zinc-100 rounded">
                  <label htmlFor={pr._id}>{pr.title}</label>{" "}
                  <input
                    name={pr._id}
                    id={pr._id}
                    type="checkbox"
                    value={`${pr._id}*${pr.title}*${pr.slug}`}
                    onChange={productsCategoriesMan}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="tags flex flex-col gap-2">
          <h3>محصولات مرتبط</h3>
          {products[0] == -1 ? (
            <div className="flex justify-center items-center p-12">
              <Image
                alt="loading"
                width={120}
                height={120}
                src={"/loading.svg"}
              />
            </div>
          ) : products.length < 1 ? (
            <div className="p-3">محصولی یافت نشد.</div>
          ) : (
            <div className="flex justify-start items-center flex-wrap gap-2">
              {products.map((pr, i) => (
                <div key={i} className="px-2 py-1 bg-zinc-100 rounded">
                  <label htmlFor={pr._id}>{pr.title}</label>{" "}
                  <input
                    type="checkbox"
                    value={pr._id}
                    name={pr._id}
                    id={pr._id}
                    onChange={productsRelatedMan}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div>وضعیت</div>
          <select
            ref={publishedRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          >
            <option value={true}>انتشار</option>
            <option value={false}>پیش‌نویس</option>
          </select>
        </div>
        <button
          type="submit"
          className="p-2 bg-indigo-600 text-white w-full rounded-md transition-all duration-300 hover:bg-orange-500"
        >
          ارسال
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
