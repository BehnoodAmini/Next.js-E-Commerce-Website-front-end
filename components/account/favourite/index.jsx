"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { FiRefreshCw } from "react-icons/fi";

const Favourite = ({ cookie }) => {
  const spliterForFeatures = (value) => {
    return value.split(":");
  };

  // PRICE BEAUTIFUL
  function priceChanger(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [data, setData] = useState([-1]);
  const [needRefresh, setNeedRefresh] = useState(0);
  useEffect(() => {
    if (cookie && cookie.length > 0) {
      axios
        .get(
          "https://behnood-fileshop-server.liara.run/api/get-part-of-user-data/favourites",
          { headers: { auth_cookie: cookie } }
        )
        .then((d) => {
          setData(d.data);
        })
        .catch((e) => {
          toast.error("خطا در لود اطلاعات", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      setNeedRefresh(0);
    }
  }, [cookie, needRefresh]);

  const productRemoveHandler = (input) => {
    const formData = {
      method: "remove",
      goalFavProductId: input,
    };
    axios
      .post(
        "https://behnood-fileshop-server.liara.run/api/favourite-products",
        formData,
        { headers: { auth_cookie: cookie } }
      )
      .then((d) => {
        toast.success(d.data.msg, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setNeedRefresh(1);
      })
      .catch((e) => {
        toast.error("خطا در لود اطلاعات", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const cartAdder = (input) => {
    const productData = {
      method: "push",
      newCartProduct: input,
    };

    const backendUrl = `https://behnood-fileshop-server.liara.run/api/cart-managment`;
    axios
      .post(backendUrl, productData, { headers: { auth_cookie: cookie } })
      .then((d) => {
        const message = d.data.msg ? d.data.msg : "به سبد خرید افزوده شد.";
        toast.success(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        const errorMsg =
          err.response && err.response.data && err.response.data.msg
            ? err.response.data.msg
            : "خطا!";
        console.log(err);
        toast.error(errorMsg, {
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
    <div>
      <div>
        {data[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-8 relative pt-20">
            <div
              onClick={() => {
                setNeedRefresh(1);
                setData([-1]);
              }}
              className="absolute top-1 left-1 cursor-pointer text-white bg-indigo-500 rounded-md flex text-sm justify-center items-center gap-1 w-28 h-10"
            >
              <FiRefreshCw /> به روز رسانی
            </div>

            {data.length < 1 ? (
              <div className="flex justify-center items-center p-8 w-full">
                محصولی موجود نیست...
              </div>
            ) : (
              <div className="w-full flex flex-col gap-8">
                {data.map((da, i) => (
                  <div
                    key={i}
                    className="w-full flex flex-col gap-4 bg-zinc-200 text-sm rounded-md p-4 relative"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex justify-center items-center">
                        <Image
                          width={260}
                          height={150}
                          className="rounded-md"
                          src={da.image}
                          alt={da.title}
                          title={da.title}
                        />
                      </div>
                      <div className="relative w-full flex flex-col gap-4">
                        <div className="absolute top-0 left-50 bg-indigo-400 text-white! rounded-md text-xs flex justify-center items-center w-20 h-6">
                          {da.typeOfProduct == "book" ? (
                            <span>کتاب</span>
                          ) : da.typeOfProduct == "app" ? (
                            <span>اپلیکیشن</span>
                          ) : (
                            <span>فایل گرافیکی</span>
                          )}
                        </div>
                        <div onClick={()=>cartAdder(da._id)} className="absolute top-0 left-22 bg-emerald-500 text-white! rounded-md text-xs flex justify-center items-center w-26 h-6 transition-all duration-300 hover:bg-emerald-600 cursor-pointer">
                          افزودن به سبد خرید
                        </div>
                        <Link
                          href={`/shop/${da.slug}`}
                          className="absolute top-0 left-0 flex justify-center items-center text-xs bg-blue-500 text-white! transition-all duration-300 hover:bg-blue-600 rounded-md w-20 h-6"
                          target="_blank"
                        >
                          لینک محصول
                        </Link>
                        <h3 className="text-base">{da.title}</h3>
                        <p>{da.shortDesc}</p>
                        <div className="flex justify-start items-center gap-4">
                          <div>{da.buyNumber} فروش</div>
                          <div>{priceChanger(da.price)} تومان</div>
                        </div>
                        <div className="w-[95%] h-0.5 bg-zinc-400 rounded-md"></div>
                        <div className="flex flex-col gap-2">
                          {da.features.length < 1 ? (
                            <div></div>
                          ) : (
                            da.features.map((fe, i) => (
                              <div
                                key={i}
                                className="flex justify-center items-center gap-6"
                              >
                                <div className="flex justify-start items-center gap-1">
                                  {spliterForFeatures(fe)[0]}
                                </div>
                                <div>{spliterForFeatures(fe)[1]}</div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-20 h-6 absolute bottom-5 left-5">
                      <button
                        onClick={() => productRemoveHandler(da._id)}
                        className="cursor-pointer h-8 inline-flex items-center px-4 py-2 bg-rose-600 transition ease-in-out delay-75 hover:bg-rose-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                      >
                        حذف
                        <svg
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-5 w-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            strokeWidth={2}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <ToastContainer
        bodyClassName={() => "font-[IRANSans] text-sm flex items-center"}
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Favourite;
