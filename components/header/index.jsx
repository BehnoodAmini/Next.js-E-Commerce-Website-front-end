"use client";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { BsTelegram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";

import { useAppContext } from "@/context/appContext";

const Header = () => {
  // CONTEXT OF CART NUMBER
  const { cartNumber } = useAppContext();

  const [logohover, setLogohover] = useState(0);

  const router = useRouter();
  const searchRef = useRef();
  const ShopSearcher = (e) => {
    e.preventDefault();
    if (searchRef.current.value.length > 0) {
      const url = `/shop?keyword=${searchRef.current.value.replace(
        /\s+/g,
        "_"
      )}`;
      router.push(url);
      searchRef.current.value = "";
    } else {
      toast.error("فرم جست و جو خالی است!", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <header className="container mx-auto py-2 overflow-x-hidden">
      <div className="flex justify-between items-start gap-4">
        <div className="flex flex-col relative h-52 w-48">
          <Link
            href={"/"}
            onMouseEnter={() => setLogohover(1)}
            onMouseLeave={() => setLogohover(0)}
            className="z-30 bg-white logo p-4 rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)] text-center"
          >
            <div className="flex justify-center">
              <Image
                src={"/logo.jpg"}
                className="rounded-lg"
                width={100}
                height={100}
                alt="shop logo"
              />
            </div>
            <div>فروشگاه فایل</div>
          </Link>
          <div
            onMouseEnter={() => setLogohover(1)}
            onMouseLeave={() => setLogohover(0)}
            className={
              logohover == 0
                ? "z-20 absolute bottom-20 right-0 left-0 flex justify-around items-center text-[1.5rem] p-2 text-indigo-600 bg-zinc-100 rounded-br-md rounded-bl-md transition-all duration-500"
                : "z-20 absolute bottom-3 right-0 left-0 flex justify-around items-center text-[1.5rem] p-2 text-indigo-600 bg-zinc-100 rounded-br-md rounded-bl-md transition-all duration-500"
            }
          >
            <Link
              href="https://web.telegram.org/"
              className="transition-all duration-300 hover:text-orange-500!"
              target={"_blank"}
            >
              <BsTelegram />
            </Link>
            <Link
              href="https://youtube.com/"
              className="transition-all duration-300 hover:text-orange-500!"
              target={"_blank"}
            >
              <BsYoutube />
            </Link>
            <Link
              href="https://x.com/"
              className="transition-all duration-300 hover:text-orange-500!"
              target={"_blank"}
            >
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 py-4 h-40 justify-between">
          <div className="flex justify-between items-center w-full">
            <nav className="">
              <ul className="flex items-center justify-start gap-2">
                <li>
                  <Link
                    href="/"
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!"
                  >
                    خانه
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    target={"_blank"}
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!"
                  >
                    فروشگاه
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white!"
                  >
                    وبلاگ
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col items-end gap-2 ">
              <div className="flex gap-2 items-center">
                <div>09123456789</div>
                <div className="rounded bg-slate-200 rotate-12 p-2">
                  <BsTelephoneFill className="w-4 h-4 -rotate-12" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>example@email.com</div>
                <div className="rounded bg-slate-200 rotate-12 p-2">
                  <IoMailOpenOutline className="w-4 h-4 -rotate-12" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <form
              onSubmit={ShopSearcher}
              className="relative flex justify-start items-center w-full ml-8"
            >
              <input
                ref={searchRef}
                className="outline-none w-full h-[3.2rem] p-3 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,.15)] transition-all duration-500 focus:shadow-[0px_3px_7px_rgba(0,0,0,0.25)]"
                type="text"
                placeholder="جست و جو بین محصولات..."
              />
              <button
                type="submit"
                className="w-10 absolute left-0 cursor-pointer"
              >
                <BiSearchAlt className="w-8 h-8" />
              </button>
            </form>
            <div className="flex items-center justify-end gap-4 w-[20rem]">
              <Link href="/account/info">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center hover:bg-indigo-600 shadow-indigo-400 shadow-[1px_3px_5px_rgba(0,0,0,.05)] transition-all duration-300 hover:shadow-[0px_0.5rem_0.5rem_rgba(0,0,0,.3)]">
                  <IoPerson className="text-white w-6 h-6" />
                </div>
              </Link>
              <Link
                href="/cart"
                className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white rounded-xl py-2 px-4 shadow-orange-300 shadow-[1px_3px_5px_rgba(0,0,0,.05)] transition-all duration-300 hover:shadow-[0.5rem_0.5rem_1rem_rgba(0,0,0,.35)]"
              >
                <div className="w-7 h-7 bg-white text-orange-500 text-sm font-bold rounded-full flex items-center justify-center shadow">
                  {cartNumber == -1 ? <div></div> : cartNumber}
                </div>
                <span className="text-sm font-medium text-white">سبد خرید</span>
                <div className="w-8 h-8 bg-white text-orange-500 rounded-lg flex items-center justify-center shadow">
                  <HiShoppingCart className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
