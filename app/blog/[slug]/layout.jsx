import Link from "next/link";

import { BiSearchAlt } from "react-icons/bi";
import { IoSend } from "react-icons/io5";

const BlogLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start container mx-auto gap-2">
      <main className="w-[75%]">{children}</main>
      <aside className="w-80 max-w-80 rounded-md flex flex-col gap-12">
        <form className="border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center">
          <input
            type="text"
            className="bg-transparent p-2 outline-none text-sm"
            placeholder="جست و جو در بلاگ..."
          />
          <BiSearchAlt className="w-6 h-6 text-blue-500" />
        </form>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-500">توضیحات خلاصه</h3>
          <p className="leading-8 text-base sm:text-sm text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-500">پر بازدیدترین مقالات</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href={"/blog"}
                className="p-2 flex justify-center items-center text-base sm:text-sm border-r-2 border-zinc-600"
              >
                مقاله تستی مقاله تستی مقاله تستی مقاله تستی مقاله تستی
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                className="p-2 flex justify-center items-center text-base sm:text-sm border-r-2 border-zinc-600"
              >
                مقاله تستی مقاله تستی مقاله تستی مقاله تستی مقاله تستی
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                className="p-2 flex justify-center items-center text-base sm:text-sm border-r-2 border-zinc-600"
              >
                مقاله تستی مقاله تستی مقاله تستی مقاله تستی مقاله تستی
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-500">پر فروش‌ترین محصولات</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href={"/blog"}
                className="p-2 flex justify-center items-center text-base sm:text-sm border-r-2 border-zinc-600"
              >
                مقاله تستی مقاله تستی مقاله تستی مقاله تستی مقاله تستی
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                className="p-2 flex justify-center items-center text-base sm:text-sm border-r-2 border-zinc-600"
              >
                مقاله تستی مقاله تستی مقاله تستی مقاله تستی مقاله تستی
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                className="p-2 flex justify-center items-center text-base sm:text-sm border-r-2 border-zinc-600"
              >
                مقاله تستی مقاله تستی مقاله تستی مقاله تستی مقاله تستی
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-500">شرکت در خبرنامه</h3>
          <form className="border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center">
            <input
              type="text"
              className="bg-transparent p-2 outline-none text-sm"
              placeholder="ایمیل خود را وارد کنید..."
            />
            <IoSend className="rotate-180 w-6 h-6 text-blue-500" />
          </form>
        </div>
      </aside>
    </div>
  );
};

export default BlogLayout;
