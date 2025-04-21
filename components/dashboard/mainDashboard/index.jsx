"use client";

import { useState, useEffect } from "react";

import DashboardCtrl from "../dashboard-ctrl";
import MiddleBannerAll from "../forms/middleBannerForms";
import SliderAll from "../forms/sliderForms";
import PostsMain from "../forms/postForms";
import CategoryMain from "../forms/categoryForms";
import ProductForms from "../forms/productForms";

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
    } else if (contentChanger == "products") {
      setDetails(<ProductForms />);
    }
  }, [contentChanger]);

  return (
    <div className="flex justify-between items-start gap-4 container mx-auto">
      <div className="sticky top-8 right-0 bottom-8"><DashboardCtrl setContentChanger={setContentChanger} /></div>
      <div className="w-full">{details}</div>
    </div>
  );
};

export default MainDashboard;
