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
          console.log(d.data);
          setData(d.data);
          setNeedRefresh(0);
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
    }
  }, [cookie, needRefresh]);

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
              <div>محصولی موجود نیست...</div>
            ) : (
              <div className="w-full flex flex-col gap-8">
                {data.map((da, i) => (
                  <div
                    key={i}
                    className="w-full flex flex-col gap-4 bg-zinc-200 text-sm rounded-md p-1"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div>{da.title}</div>
                      </div>
                      <Link
                        href={`/shop/${da.slug}`}
                        className="flex justify-center items-center pt-2"
                        target="_blank"
                      >
                        <Image
                          width={260}
                          height={150}
                          className="rounded-md"
                          src={da.image}
                          alt={da.title}
                          title={da.title}
                        />
                      </Link>
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
