import Image from "next/image";

import MainSlider from "../components/sliders/mainSlider";
import ProductsSlider from "../components/sliders/products-slider";
import MiddleBanner from "../components/middle-banners";
import Categories from "../components/categories";
import GraphicSlider from "../components/sliders/graphic-slider";
import NewBlogs from "../components/newBlogs";

const getData = async () => {
  const data = await fetch("https://behnood-fileshop-server.liara.run/api/get-new-products", {cache: "no-store"});
  return data.json();
}

const Home = async () => {
  const data = await getData();
  return (
    <div>
      <main className="flex flex-col gap-12">
        <MainSlider />
        <ProductsSlider goalData={data.NewApps} title="اپلیکیشن‌ها" linkComp="app" />
        <MiddleBanner />
        <ProductsSlider goalData={data.NewBooks} title="کتاب‌ها" linkComp="book" />
        <Categories />
        <GraphicSlider goalData={data.NewGFs}/>
        <NewBlogs />
      </main>
    </div>
  );
}

export default Home;