import Image from "next/image";
import Link from "next/link";

import { FaRegEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import BreadCrumb from "@/components/breadCrumb";
import MostViewedPosts from "@/components/mostViewedPosts";
import RelatedPosts from "@/components/sliders/related-posts";
import CommentsManager from "@/components/commentsManagement";
import SearchBlog from "@/components/search-blog";

const getData = async (slug) => {
  const data = await fetch(
    `https://behnood-fileshop-server.liara.run/api/get-post/${slug}`,
    {
      cache: "no-store",
    }
  );
  return data.json();
};

const getProductsData = async (slug) => {
  const data = await fetch(
    `https://behnood-fileshop-server.liara.run/api/get-most-viewed-products`,
    {
      cache: "no-store",
    }
  );
  return data.json();
};

const SingleBlog = async ({ params }) => {
  const resolvedParams = await params;
  const data = await getData(resolvedParams.slug);

  const productsData = await getProductsData();
  const commentProps = { src_id: data._id, typeOfModel: "post" };

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
                  typeOfModel="post"
                  relPostsData={data.relatedPosts}
                  title={"مقالات مرتبط"}
                />
              </section>
              <CommentsManager commentProps={commentProps} />
            </div>
          </main>
          <aside className="w-80 max-w-80 rounded-md flex flex-col gap-12">
            <SearchBlog />
            <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
              <h3 className="text-blue-500">توضیحات خلاصه</h3>
              <p className="leading-8 text-base sm:text-sm text-justify">
                {data.shortDesc}
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
              <h3 className="text-blue-500">برچسب‌ها</h3>
              <div className="flex justify-start items-center gap-2 flex-wrap">
                {data.tags.length < 1 ? (
                  <div className="flex justify-center items-center p-3">
                    بدون برچسب
                  </div>
                ) : (
                  data.tags.map((ta, i) => (
                    <Link
                      key={i}
                      href={`/blog?keyword=${ta}`}
                      className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:text-white! hover:bg-orange-500"
                    >
                      #{ta}
                    </Link>
                  ))
                )}
              </div>
            </div>
            <MostViewedPosts />
            <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
              <h3 className="text-blue-500">پر فروش‌ترین محصولات</h3>
              <ul className="flex flex-col gap-3">
                {productsData.length < 1 ? (
                  <div></div>
                ) : (
                  productsData.map((da, i) => (
                    <li key={i}>
                      <Link
                        href={`/shop/${da.slug}`}
                        className="p-2 flex justify-start items-center text-base sm:text-sm border-r-2 border-zinc-600 hover:text-indigo-600! hover:border-indigo-600 transition-all duration-300"
                      >
                        {da.title}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </aside>
        </>
      )}
    </div>
  );
};

export default SingleBlog;
