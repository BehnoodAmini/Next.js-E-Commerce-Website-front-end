"use client";

import Image from "next/image";

const Box = ({ data, setCategoryDetCtrl, setRandNumForBannerClick }) => {
  return (
    <div
      onClick={() => {
        setCategoryDetCtrl(data._id);
        setRandNumForBannerClick(Math.random());
      }}
      className="relative flex justify-start gap-8 items-center cursor-pointer w-full p-6 rounded-lg bg-zinc-100 border-2 border-zinc-200 transition-all duration-300 hover:border-orange-500"
    >
      <div className="flex justify-start items-center">
        <Image
          className="rounded-lg"
          src={data.image}
          alt={data.imageAlt}
          title={data.imageAlt}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-4 h-10">
        <div>{data.title}</div>
        <div className="absolute bottom-3 left-3 flex justify-end items-center gap-2">
          {data.situation == true ? (
            <div className="text-xs bg-green-600 text-white px-3 py-1 rounded">
              منتشر شده
            </div>
          ) : (
            <div className="text-xs bg-orange-500 text-white px-3 py-1 rounded">
              پیش‌نویس
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Box;
