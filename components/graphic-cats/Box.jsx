import Image from "next/image";
import Link from "next/link";

const CatBox = () => {
  return (
    <Link
      href={"/"}
      className="flex justify-between items-center bg-slate-200 transition-all duration-300 hover:bg-slate-300 rounded-lg p-3 w-72"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-black">فایل لایه باز فتوشاپ</h3>
        <p className="text-base sm:text-sm">وکتورهای گرافیکی قدرتمند</p>
      </div>
      <div className="w-16">
        <Image
          alt="فایل لایه باز فتوشاپ"
          width={60}
          height={60}
          src={"/images/categories/photoshop2-min.png"}
        />
      </div>
    </Link>
  );
};

export default CatBox;
