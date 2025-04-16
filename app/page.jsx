import Image from "next/image";

import MainSlider from "../components/sliders/mainSlider";
import ProductsSlider from "../components/sliders/products-slider";
import MiddleBanner from "../components/middle-banners";
import Categories from "../components/categories";
import GraphicSlider from "../components/sliders/graphic-slider";
import NewBlogs from "../components/newBlogs";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-12">
        <MainSlider />
        <ProductsSlider title="اپلیکیشن‌ها" linkComp="apps" />
        <MiddleBanner />
        <ProductsSlider title="کتاب‌ها" linkComp="books" />
        <Categories />
        <GraphicSlider />
        <NewBlogs />
      </main>
    </div>
  );
}
