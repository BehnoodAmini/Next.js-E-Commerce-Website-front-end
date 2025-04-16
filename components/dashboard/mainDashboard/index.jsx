"use client";

import { useState, useEffect } from "react";

import DashboardCtrl from "../dashboard-ctrl";
import MiddleBannerAll from "../forms/middleBannerForms";
import SliderAll from "../forms/sliderForms";
import PostsMain from "../forms/postForms";
import CategoryMain from "../forms/categoryForms";

const MainDashboard = () => {
  const [contentChanger, setContentChanger] = useState("midBan");
  const [details, setDetails] = useState(<MiddleBannerAll />);

  useEffect(() => {
    if (contentChanger == "midBan") {
      setDetails(<MiddleBannerAll />);
    } else if (contentChanger == "sliders") {
      setDetails(<SliderAll />);
    } else if (contentChanger == "posts") {
      setDetails(<PostsMain />);
    } else if (contentChanger == "categories") {
      setDetails(<CategoryMain />);
    }
  }, [contentChanger]);

  return (
    <div className="flex justify-between items-start gap-4 container mx-auto">
      <DashboardCtrl setContentChanger={setContentChanger} />
      <div className="w-full">{details}</div>
    </div>
  );
};

export default MainDashboard;
