import Image from "next/image";
import Link from "next/link";

import { IoIosSearch } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";

const SlideBox = ({ itemData }) => {
  // PRICE BEAUTIFUL
  function priceChanger(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const spliterForFeatures = (value) => {
    return value.split(":");
  };

  return (
    <article className="sliderItem p-2 hover:pt-0 transition-all duration-300">
      <div className="relative bg-white h-[31rem] w-72 rounded-lg">
        <Link
          href={`/shop/${itemData.slug}`}
          className="flex justify-center items-center pt-2"
          target="_blank"
        >
          <Image
            width={260}
            height={150}
            className="rounded-md"
            src={itemData.image}
            alt={itemData.imageAlt}
            title={itemData.imageAlt}
          />
        </Link>
        <div>
          <div className="flex flex-col gap-6 p-2">
            <Link href={`/shop/${itemData.slug}`} target="_blank">
              <h3 className=" m-2 line-clamp-1">{itemData.title}</h3>
            </Link>
            <div className="flex flex-col gap-1 text-zinc-500 text-base sm:text-sm absolute right-2 left-2 top-60">
              <div className="flex flex-col gap-2">
                {itemData.features.length < 1 ? (
                  <div></div>
                ) : (
                  itemData.features.map((da, i) =>
                    i < 3 ? (
                      <div
                        className="flex justify-between items-center"
                        key={i}
                      >
                        <div className="w-40 flex justify-start items-center gap-1">
                          {spliterForFeatures(da)[0]}
                        </div>
                        <div>{spliterForFeatures(da)[1]}</div>
                      </div>
                    ) : (
                      <div key={i}></div>
                    )
                  )
                )}
              </div>
            </div>
            <div className="categories flex justify-start items-center flex-wrap gap-1 absolute right-2 left-2 top-[21rem]">
              {itemData.categories.length < 1 ? (
                <div></div>
              ) : (
                itemData.categories.map((da, i) =>
                  i < 3 ? (
                    <Link
                      key={i}
                      href={`/shop?&orderBy=date&maxP=1000000000&minP=0&categories=${da.slug}&pgn=12&pn=1`}
                      target="_blank"
                      className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300"
                    >
                      {da.title}
                    </Link>
                  ) : (
                    <div key={i}></div>
                  )
                )
              )}
            </div>
          </div>
          <div className=" absolute bottom-2  w-full flex justify-between items-center">
            <div className="flex gap-2 justify-start items-center mr-1">
              <div className="bg-zinc-200 flex justify-center items-center w-9 h-9 rounded-lg transition-all duration-500 hover:bg-zinc-300 cursor-pointer">
                <IoBookmarkOutline className="w-5 h-5 font-bold" />
              </div>
              <div className="bg-zinc-200 flex justify-center items-center w-9 h-9 rounded-lg transition-all duration-500 hover:bg-zinc-300 cursor-pointer">
                <Link href={`/shop?&keyword=${itemData.title}&orderBy=date&maxP=1000000000&minP=0&pgn=12&pn=1`} target="_blank">
                  <IoIosSearch className="w-5 h-5 font-bold" />
                </Link>
              </div>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <HiOutlineShoppingCart className=" mr-1 w-9 h-9 p-2 rounded bg-zinc-200 text-indigo-600  cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-white" />
              <div className=" bg-zinc-500 text-white h-9 px-1 flex justify-center items-center rounded-tr-md rounded-br-md">
                {priceChanger(itemData.price)} تومان
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SlideBox;
