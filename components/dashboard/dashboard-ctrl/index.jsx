"use client";

import { useState } from "react";

import DCBtn from "./btn";

const DashboardCtrl = ({ setContentChanger }) => {
  const [colorChanger, setColorChanger] = useState("midBan");

  return (
    <div className="w-60 bg-zinc-200 p-4 rounded-lg flex justify-center items-center">
      <div className="flex flex-col gap-6 ">
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
      </div>
    </div>
  );
};

export default DashboardCtrl;
