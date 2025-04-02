"use client";

import { useState, useEffect } from "react";

import AllMidBanners from "./allMidBanners";
import NewPost from "./newPost";
import MidBannerDetails from "./midBannerDetails";

const PostsMain = () => {
  const [midBanDetCtrl, setMidBanDetCtrl] = useState("");
  const [randNumForBannerClick, setRandNumForBannerClick] = useState(1);
  const [det, setDet] = useState(
    <AllMidBanners
      setMidBanDetCtrl={setMidBanDetCtrl}
      setRandNumForBannerClick={setRandNumForBannerClick}
    />
  );

  useEffect(() => {
    if (midBanDetCtrl != "") {
      setDet(<MidBannerDetails midBanId={midBanDetCtrl} />);
    }
  }, [randNumForBannerClick]);

  return (
    <div className="flex flex-col gap-8">
      <section className="flex justify-between items-center gap-2">
        <h1 className="text-blue-500 text-lg">پست‌ها</h1>
        <div className="flex justify-end items-center gap-2">
          {/* <button
            onClick={() =>
              setDet(
                <AllMidBanners
                  setMidBanDetCtrl={setMidBanDetCtrl}
                  setRandNumForBannerClick={setRandNumForBannerClick}
                />
              )
            }
            className="flex justify-center items-center w-32 h-10 rounded-md bg-indigo-600 text-white transition-all duration-300 hover:bg-orange-500"
          >
            همه
          </button> */}
          <button
            onClick={() => setDet(<NewPost />)}
            className="flex justify-center items-center w-32 h-10 rounded-md bg-indigo-600 text-white transition-all duration-300 hover:bg-orange-500"
          >
            پست جدید
          </button>
        </div>
      </section>
      <section>{det}</section>
    </div>
  );
};

export default PostsMain;
