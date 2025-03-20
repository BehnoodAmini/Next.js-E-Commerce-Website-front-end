import Image from "next/image";
import Link from "next/link";

import { IoIosSearch } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";

const SlideBox = () => {
  return (
    <article className="sliderItem p-2 hover:pt-0 transition-all duration-300">
      <div className="relative bg-white h-[24rem] w-72 rounded-lg">
        <Link href={"/shop"} className="flex justify-center items-center pt-2">
            <Image
              width={260}
              height={150}
              className="rounded-md"
              src={"/images/products/ganj.jpg"}
              alt="alt"
            />
        </Link>
        <div>
          <div className="flex flex-col gap-2 p-2">
            <Link href={"/shop"}>
                <h3 className=" m-2">
                  عنوان محصول هستنوان محصول هستنوان محصول هستنوان محصول هستنوان
                  محصول هست این
                </h3>
            </Link>
            <div className="categories flex justify-start items-center flex-wrap gap-1">
              <Link href={"/"} className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                  رمان
              </Link>
              <Link href={"/"} className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                  داستانی
              </Link>
              <Link href={"/"} className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                  آل احمد
              </Link>
            </div>
          </div>
          <div className=" absolute bottom-2  w-full flex justify-between items-center">
            <div className="flex gap-2 justify-start items-center mr-1">
              <div className="bg-zinc-200 flex justify-center items-center w-9 h-9 rounded-lg transition-all duration-500 hover:bg-zinc-300 cursor-pointer">
                <IoBookmarkOutline className="w-5 h-5 font-bold" />
              </div>
              <div className="bg-zinc-200 flex justify-center items-center w-9 h-9 rounded-lg transition-all duration-500 hover:bg-zinc-300 cursor-pointer">
                <Link href={"/shop"}>
                    <IoIosSearch className="w-5 h-5 font-bold" />
                </Link>
              </div>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <HiOutlineShoppingCart className=" mr-1 w-9 h-9 p-2 rounded bg-zinc-200 text-indigo-600  cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-white" />
              <div className=" bg-zinc-500 text-white h-9 px-1 flex justify-center items-center rounded-tr-md rounded-br-md">
                5000 تومان
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SlideBox;
