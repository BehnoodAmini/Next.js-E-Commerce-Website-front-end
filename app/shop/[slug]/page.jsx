import Image from "next/image";
import Link from "next/link";

import { TiTickOutline } from "react-icons/ti";

import BreadCrumb from "@/components/breadCrumb";
import RelatedPosts from "@/components/sliders/related-posts";
import SingleProductPageFav from "@/components/singleProductPageFav";
import SingleProductPageCart from "@/components/singleProductPageCart";

const getData = async (slug) => {
  const data = await fetch(
    `https://behnood-fileshop-server.liara.run/api/get-product/${slug}`,
    {
      cache: "no-store",
    }
  );
  return data.json();
};

const SingleProduct = async ({ params }) => {
  // MAKE PRICE BEAUTIFUL
  function priceChanger(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const resolvedParams = await params;
  const data = await getData(resolvedParams.slug);

  const spliterForFeatures = (value) => {
    return value.split(":");
  };

  return (
    <div className="flex justify-between items-start container mx-auto gap-4">
      {data.msg ? (
        <div>محصول هنوز منتشر نشده است...</div>
      ) : (
        <>
          <main className="w-[75%]">
            {" "}
            <div className="flex flex-col gap-12">
              <BreadCrumb
                secondTitle={"فروشگاه"}
                secondLink={"/shop"}
                title={data.title}
              />
              <section className="flex justify-center items-center rounded-xl p-4 shadow-[0px_0px_8px_rgba(0,0,0,0.25)]">
                <div className="flex justify-start items-center gap-4 w-full">
                  <div>
                    <Image
                      className="rounded-xl"
                      src={data.image}
                      alt={data.imageAlt}
                      title={data.imageAlt}
                      width={400}
                      height={200}
                      priority={true}
                    />
                  </div>
                  <div className="h-[12rem] flex flex-col gap-8">
                    <h1 className="text-lg">{data.title}</h1>
                    <ul
                      className={`flex flex-col gap-3 ${
                        data.features.length >= 5 ? "overflow-y-auto" : ""
                      }`}
                    >
                      {data.features.length < 1 ? (
                        <div></div>
                      ) : (
                        data.features.map((da, i) => (
                          <li
                            key={i}
                            className="flex justify-between items-center gap-2 w-48"
                          >
                            <div className="flex justify-start items-center gap-1">
                              <TiTickOutline className="text-black" />
                              <span>{spliterForFeatures(da)[0]}</span>
                            </div>
                            <div className="text-black">
                              {spliterForFeatures(da)[1]}
                            </div>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
              </section>
              <section className="flex justify-between items-center gap-2">
                <div className="w-[18rem] rounded-md flex justify-center items-center gap-2 bg-slate-100 p-4 transition-all duration-300 hover:bg-slate-200">
                  <div className="flex justify-start items-center gap-2">
                    <Image
                      className="rounded-xl"
                      src={"/images/icons/trophy.png"}
                      alt={"alt"}
                      width={100}
                      height={100}
                      priority={true}
                    />
                    <div className="flex flex-col gap-3">
                      <div className="font-bold text-base sm:text-sm">
                        محصولات اورجینال
                      </div>
                      <div className="text-base sm:text-xs">
                        برترین‌های دنیای وب
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[18rem] rounded-md flex justify-center items-center gap-2 bg-slate-100 p-4 transition-all duration-300 hover:bg-slate-200">
                  <div className="flex justify-start items-center gap-2">
                    <Image
                      className="rounded-xl"
                      src={"/images/icons/feedback.png"}
                      alt={"alt"}
                      width={100}
                      height={100}
                      priority={true}
                    />
                    <div className="flex flex-col gap-3">
                      <div className="font-bold text-base sm:text-sm">
                        بالاترین کیفیت
                      </div>
                      <div className="text-base sm:text-xs">
                        تاثیرگذارترین در موفقیت
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[18rem] rounded-md flex justify-center items-center gap-2 bg-slate-100 p-4 transition-all duration-300 hover:bg-slate-200">
                  <div className="flex justify-start items-center gap-2">
                    <Image
                      className="rounded-xl"
                      src={"/images/icons/target1.png"}
                      alt={"alt"}
                      width={100}
                      height={100}
                      priority={true}
                    />
                    <div className="flex flex-col gap-3">
                      <div className="font-bold text-base sm:text-sm">
                        پشتیبانی فوق سریع
                      </div>
                      <div className="text-base sm:text-xs">
                        کمتر از 30 دقیقه
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-6 p-4 rounded-md shadow-[0px_0px_8px_rgba(0,0,0,0.25)]">
                <h2 className="text-lg">توضیحات کامل</h2>
                <p className="leading-9">{data.longDesc}</p>
              </section>
              <section>
                <RelatedPosts
                  typeOfModel={data.typeOfProduct}
                  relPostsData={data.relatedProducts}
                  title={"محصولات مرتبط"}
                />
              </section>
              <section className="flex flex-col gap-6">
                <h2 className="text-xl">دیدگاه‌ها</h2>
                <form className="bg-zinc-500 rounded-md h-48">1</form>
              </section>
            </div>
          </main>
          <aside className="w-80 max-w-80 rounded-md flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <SingleProductPageCart
                data={data._id}
                price={priceChanger(data.price)}
              />
              <SingleProductPageFav data={data._id} />
            </div>
            <div className="rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
              <ul className="flex flex-col gap-3">
                <li className="flex justify-between items-center">
                  <span>تعداد خرید</span>
                  <span>{data.buyNumber}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>تعداد بازدید</span>
                  <span>{data.pageView}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>تعداد دیدگاه</span>
                  <span>{data.comments.length}</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
              <h3 className="text-blue-500">معرفی کوتاه</h3>
              <p className="leading-8 text-base sm:text-sm text-justify">
                {data.shortDesc}
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
              <h3 className="text-blue-500">دسته بندی‌ها</h3>
              <div className="flex justify-start items-center gap-2 flex-wrap">
                {data.categories.length < 1 ? (
                  <div className="flex justify-center items-center p-3">
                    بدون دسته بندی
                  </div>
                ) : (
                  data.categories.map((da, i) => (
                    <Link
                      key={i}
                      href={`/shop?&orderBy=date&maxP=1000000000&minP=0&categories=${da.slug}&pgn=12&pn=1`}
                      className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:text-white! hover:bg-orange-500"
                    >
                      {da.title}
                    </Link>
                  ))
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
              <h3 className="text-blue-500">برچسب‌ها</h3>
              <div className="flex justify-start items-center gap-2 flex-wrap">
                {data.tags.length < 1 ? (
                  <div className="flex justify-center items-center p-3">
                    بدون برچسب
                  </div>
                ) : (
                  data.tags.map((da, i) => (
                    <Link
                      key={i}
                      href={`/shop?keyword=${da}`}
                      className="p-2 flex justify-center items-center rounded-md text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:text-white! hover:bg-orange-500"
                    >
                      #{da}
                    </Link>
                  ))
                )}
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
