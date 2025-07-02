"use client";

import { useState } from "react";

import DCBtn from "./btn";

const DashboardCtrl = ({ setContentChanger }) => {
  const [colorChanger, setColorChanger] = useState("admin-panel");

  return (
    <div className="w-60 bg-zinc-200 p-4 rounded-lg flex justify-center items-center">
      <div className="flex flex-col gap-6 ">
        <DCBtn
          title={"پیشخوان"}
          content={"admin-panel"}
          setContentChanger={setContentChanger}
          colorChanger={colorChanger}
          setColorChanger={setColorChanger}
        />
        <DCBtn
          title={"بنرهای تبلیغاتی"}
          content={"midBan"}
          setContentChanger={setContentChanger}
          colorChanger={colorChanger}
          setColorChanger={setColorChanger}
        />
        <DCBtn
          title={"اسلایدرها"}
          content={"sliders"}
          setContentChanger={setContentChanger}
          colorChanger={colorChanger}
          setColorChanger={setColorChanger}
        />
        <DCBtn
          title={"پست‌ها"}
          content={"posts"}
          setContentChanger={setContentChanger}
          colorChanger={colorChanger}
          setColorChanger={setColorChanger}
        />
        <DCBtn
          title={"دسته بندی محصولات"}
          content={"categories"}
          setContentChanger={setContentChanger}
          colorChanger={colorChanger}
          setColorChanger={setColorChanger}
        />
        <DCBtn
          title={"محصولات"}
          content={"products"}
          setContentChanger={setContentChanger}
          colorChanger={colorChanger}
          setColorChanger={setColorChanger}
        />
        <DCBtn
          title={"کاربرها"}
          content={"users"}
          setContentChanger={setContentChanger}
          colorChanger={colorChanger}
          setColorChanger={setColorChanger}
        />
        <DCBtn
          title={"سفارش‌ها"}
          content={"payments"}
          setContentChanger={setContentChanger}
          colorChanger={colorChanger}
          setColorChanger={setColorChanger}
        />
      </div>
    </div>
  );
};

export default DashboardCtrl;
