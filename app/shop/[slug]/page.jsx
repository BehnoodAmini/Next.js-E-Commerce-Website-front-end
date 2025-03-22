import Image from "next/image";

import { TiTickOutline } from "react-icons/ti";

import BreadCrumb from "@/components/breadCrumb";
import RelatedPosts from "@/components/sliders/related-posts";

const SingleBlog = () => {
  return (
    <div className="flex flex-col gap-12">
      <BreadCrumb
        secondTitle={"فروشگاه"}
        secondLink={"/shop"}
        title={"فایل ادوبی فتوشاپ"}
      />
      <section className="flex justify-center items-center rounded-xl p-4 shadow-[0px_0px_8px_rgba(0,0,0,0.25)]">
        <div className="flex justify-start items-center gap-4 w-full">
          <div>
            <Image
              className="rounded-xl"
              src={"/images/products/ganj.jpg"}
              alt={"alt"}
              width={400}
              height={200}
              priority={true}
            />
          </div>
          <div className="h-[12rem] flex flex-col gap-8">
            <h1 className="text-lg">کتاب گنج - جلال آل احمد</h1>
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between items-center gap-2 w-48">
                <div className="flex justify-start items-center gap-1">
                  <TiTickOutline className="text-black" />
                  <span>فرمت</span>
                </div>
                <div className="text-black">PSD</div>
              </li>
              <li className="flex justify-between items-center gap-2 w-48">
                <div className="flex justify-start items-center gap-1">
                  <TiTickOutline className="text-black" />
                  <span>ابعاد</span>
                </div>
                <div className="text-black">1080*720</div>
              </li>
              <li className="flex justify-between items-center gap-2 w-48">
                <div className="flex justify-start items-center gap-1">
                  <TiTickOutline className="text-black" />
                  <span>حجم فابل</span>
                </div>
                <div className="text-black">10 مگ</div>
              </li>
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
              <div className="text-base sm:text-xs">برترین‌های دنیای وب</div>
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
              <div className="text-base sm:text-xs">کمتر از 30 دقیقه</div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 p-4 rounded-md shadow-[0px_0px_8px_rgba(0,0,0,0.25)]">
        <h2 className="text-lg">توضیحات کامل</h2>
        <p className="leading-9">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </section>
      <section>
        <RelatedPosts title={"محصولات مرتبط"} />
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl">دیدگاه‌ها</h2>
        <form className="bg-zinc-500 rounded-md h-48">1</form>
      </section>
    </div>
  );
};

export default SingleBlog;
