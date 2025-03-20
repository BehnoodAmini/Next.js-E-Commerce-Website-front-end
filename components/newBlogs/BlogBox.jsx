import Image from "next/image";
import Link from "next/link";

const BlogBox = () => {
  return (
    <article className="sliderItem p-2 hover:pt-0 transition-all duration-300">
      <div className="relative bg-white shadow-[0px_1px_8px_rgba(0,0,0,.2)] h-[28rem] w-72 rounded-lg">
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
          <div className="flex flex-col gap-6 p-2">
            <Link href={"/shop"}>
              <h3 className=" m-2">
                عنوان محصول هستنوان محصول هستنوان محصول هستنوان محصول هستنوان
                محصول هست این
              </h3>
            </Link>
            <p className="text-base sm:text-sm text-justify">
              متون را ندارند ودر همان حال كار آنها به نوعى وابسته به متن مى باشد
              آنها با استفاده از محتويات ساختكى، صفحه كرافيكى خود را صفحه آرايى
              مى كنند تا مرحله طراحى و صفحه بندى
            </p>
            <div className="h-1 w-[90%] bg-zinc-300 rounded-full mx-auto" />
            <div className="flex justify-between items-center">
              <div className="text-base sm:text-sm bg-zinc-200 rounded-md py-1 px-3">
                1403/12/29
              </div>
              <div className="text-base sm:text-sm bg-zinc-200 rounded-md py-1 px-3">
                5 دیدگاه
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogBox;
