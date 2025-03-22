import Link from "next/link";

import { IoSend } from "react-icons/io5";

const BlogLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start container mx-auto gap-4">
      <main className="w-[75%]">{children}</main>
      <aside className="w-80 max-w-80 rounded-md flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <button className="cursor-pointer flex justify-center items-center text-center rounded-md p-2 w-full bg-orange-500 transition-all duration-500 hover:bg-orange-600 text-white">افزودن به سبد خرید - 30000 تومان</button>
          <button className="cursor-pointer flex justify-center items-center text-center rounded-md p-2 w-full bg-blue-500 transition-all duration-500 hover:bg-blue-600 text-white">افزودن به علاقه مندی‌ها</button>
        </div>
        <div className="rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <ul className="flex flex-col gap-3">
            <li className="flex justify-between items-center">
              <span>تعداد خرید</span>
              <span>12</span>
            </li>
            <li className="flex justify-between items-center">
              <span>تعداد بازدید</span>
              <span>12</span>
            </li>
            <li className="flex justify-between items-center">
              <span>تعداد دیدگاه</span>
              <span>12</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-500">معرفی کوتاه</h3>
          <p className="leading-8 text-base sm:text-sm text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-500">برچسب‌ها</h3>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            <Link
              href={"/blog"}
              className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:text-white! hover:bg-orange-500"
            >
              مقاله
            </Link>
            <Link
              href={"/blog"}
              className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:text-white! hover:bg-orange-500"
            >
              مقاله
            </Link>
            <Link
              href={"/blog"}
              className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:text-white! hover:bg-orange-500"
            >
              مقاله
            </Link>
            <Link
              href={"/blog"}
              className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:text-white! hover:bg-orange-500"
            >
              مقاله
            </Link>
          </div>
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
