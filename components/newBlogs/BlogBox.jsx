import Image from "next/image";
import Link from "next/link";

const BlogBox = ({ data }) => {
  return (
    <article className="sliderItem p-2 hover:pt-0 transition-all duration-300">
      <div className="relative bg-white shadow-[0px_1px_8px_rgba(0,0,0,.2)] h-[28rem] w-72 rounded-lg">
        <Link
          href={`/shop/${data.slug}`}
          className="flex justify-center items-center pt-2"
        >
          <Image
            width={260}
            height={150}
            className="rounded-md"
            src={data.image}
            alt={data.imageAlt}
          />
        </Link>
        <div>
          <div className="flex flex-col gap-6 p-2">
            <Link href={`/shop/${data.slug}`}>
              <h3 className="line-clamp-2 h-12">{data.title}</h3>
            </Link>
            <p className="text-base sm:text-sm text-justify line-clamp-4 h-25">
              {data.shortDesc}
            </p>
            <div className="h-1 w-[90%] bg-zinc-300 rounded-full mx-auto" />
            <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
              <div className="text-base sm:text-sm bg-zinc-200 rounded-md py-1 px-3">
                {data.UpdatedAt}
              </div>
              <div className="text-base sm:text-sm bg-zinc-200 rounded-md py-1 px-3">
              دیدگاه: {data.pageView}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogBox;
