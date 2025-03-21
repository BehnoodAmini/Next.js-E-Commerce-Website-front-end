import Image from "next/image";

import { FaRegEye } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import BreadCrumb from "@/components/breadCrumb";
import RelatedPosts from "@/components/sliders/related-posts";

const SingleBlog = () => {
  return (
    <div className="flex flex-col gap-12">
      <BreadCrumb
        secondTitle={"وبلاگ"}
        secondLink={"/blog"}
        title={"آموزش نکست با نمتنم"}
      />
      <section className="flex justify-center items-center">
        <Image
          className="rounded-xl"
          src={"/images/products/ganj.jpg"}
          alt={"alt"}
          width={800}
          height={400}
          priority={true}
        />
      </section>
      <section className="flex flex-col gap-6">
        <h1 className="text-blue-400 text-lg">آموزش نکست با نمتنم</h1>
        <div className="flex justify-start items-center gap-4 text-base sm:text-sm">
          <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
            <FaRegEye className="w-6 h-6 text-black" />
            <span>تعداد بازدید: </span>
            <span>5</span>
          </div>
          <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
            <FaRegComment className="w-6 h-6 text-black" />
            <span>تعداد دیدگاه: </span>
            <span>10</span>
          </div>
          <div className="bg-zinc-100 rounded-md p-2 flex justify-between items-center gap-2">
            <SlCalender className="w-6 h-6 text-black" />
            <span>آخرین بروزرسانی: </span>
            <span>1404/1/2</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl">توضیحات کامل</h2>
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
        <RelatedPosts />
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl">دیدگاه‌ها</h2>
        <form className="bg-zinc-500 rounded-md h-48">1</form>
      </section>
    </div>
  );
};

export default SingleBlog;
