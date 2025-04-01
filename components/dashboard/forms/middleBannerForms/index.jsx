"use client";

import { useState, useEffect } from "react";

import AllMidBanners from "./allMidBanners";
import NewMidBanner from "./newMidBanner";
import MidBannerDetails from "./midBannerDetails";

const MiddleBannerAll = () => {
  const [midBanDetCtrl, setMidBanDetCtrl] = useState("");
  const [randNumForBannerClick, setRandNumForBannerClick] = useState(1);
  const [det, setDet] = useState(
    <AllMidBanners setMidBanDetCtrl={setMidBanDetCtrl} setRandNumForBannerClick={setRandNumForBannerClick} />
  );

  useEffect(() => {
    if (midBanDetCtrl != "") {
      setDet(<MidBannerDetails midBanId={midBanDetCtrl} />);
    }
  }, [randNumForBannerClick]);

  return (
    <div className="flex flex-col gap-8">
      <section className="flex justify-between items-center gap-2">
        <h1 className="text-blue-500 text-lg">بنرهای تبلیغاتی</h1>
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={() =>
              setDet(<AllMidBanners setMidBanDetCtrl={setMidBanDetCtrl} setRandNumForBannerClick={setRandNumForBannerClick}/>)
            }
            className="px-3 py-1 rounded-md bg-indigo-600 text-white transition-all duration-300 hover:bg-orange-500"
          >
            همه
          </button>
          <button
            onClick={() => setDet(<NewMidBanner />)}
            className="px-3 py-1 rounded-md bg-indigo-600 text-white transition-all duration-300 hover:bg-orange-500"
          >
            بنر جدید
          </button>
        </div>
      </section>
      <section>{det}</section>
    </div>
  );
};

export default MiddleBannerAll;
