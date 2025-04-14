import Image from "next/image";
import Link from "next/link";

import { BiSearchAlt } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import BreadCrumb from "@/components/breadCrumb";
import MostViewedPosts from "@/components/mostViewedPosts";
import RelatedPosts from "@/components/sliders/related-posts";

const getData = async (slug) => {
  const data = await fetch(`http://localhost:27017/api/get-post/${slug}`, {
    cache: "no-store",
  });
  return data.json();
};

const SingleBlog = async ({ params }) => {
  const resolvedParams = await params;
  const data = await getData(resolvedParams.slug);
  return (
    <div className="flex justify-between items-start container mx-auto gap-2">
      {data.msg ? (
        <div>مقاله هنوز منتشر نشده است...</div>
      ) : (
        <>
          <main className="w-[75%]">
            {" "}
            <div className="flex flex-col gap-12">
              <BreadCrumb
                secondTitle={"وبلاگ"}
                secondLink={"/blog"}
                title={data.title}
              />
              <section className="flex justify-center items-center">
                <Image
                  className="rounded-xl"
                  src={data.image}
                  alt={data.imageAlt}
                  title={data.imageAlt}
                  width={800}
                  height={400}
                  priority={true}
                />
              </section>
              <section className="flex flex-col gap-6">
                <h1 className="text-blue-400 text-lg">{data.title}</h1>
                <div className="flex justify-start items-center gap-4 text-base sm:text-sm">
                  <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
                    <FaRegEye className="w-6 h-6 text-black" />
                    <span>تعداد بازدید:</span>
                    <span>{data.pageView}</span>
                  </div>
                  <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
                    <FaRegComment className="w-6 h-6 text-black" />
                    <span>تعداد دیدگاه:</span>
                    <span>{data.comments.length}</span>
                  </div>
                  <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
                    <SlCalender className="w-6 h-6 text-black" />
                    <span>آخرین بروزرسانی:</span>
                    <span>{data.UpdatedAt}</span>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-6">
                <h2 className="text-xl">توضیحات کامل</h2>
                <p className="leading-9 w-[96%] text-justify">
                  {data.longDesc}
                </p>
              </section>
              <section>
                <RelatedPosts
                  relPostsData={data.relatedPosts}
                  title={"مقالات مرتبط"}
                />
              </section>
              <section className="flex flex-col gap-6">
                <h2 className="text-xl">دیدگاه‌ها</h2>
                <form className="bg-zinc-500 rounded-md h-48">1</form>
              </section>
            </div>
          </main>
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
                {data.shortDesc}
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
              <h3 className="text-blue-500">برچسب‌ها</h3>
              <div className="flex justify-start items-center gap-2 flex-wrap">
                {data.tags.map((ta, i) => (
                  <Link
                    key={i}
                    href={`/search/tags/${ta}`}
                    className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:text-white! hover:bg-orange-500"
                  >
                    {ta}
                  </Link>
                ))}
              </div>
            </div>
            <MostViewedPosts />
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
          </aside>
        </>
      )}
    </div>
  );
};

export default SingleBlog;
