import ShopComp from "@/components/ShopComp";

const ShopPage = async ({ searchParams }) => {
  const { keyword = "" } = await searchParams;

  return (
    <div className="container mx-auto flex justify-between items-start gap-2">
      <aside className="w-80 bg-zinc-100 rounded-lg p-2">aside</aside>
      <main className="bg-zinc-100 rounded-lg p-2 w-full flex flex-col gap-8">
        <h1 className="text-xl text-indigo-600">محصولات رمان فروشگاه</h1>
        <ShopComp keyword={keyword} />
      </main>
    </div>
  );
};

export default ShopPage;
