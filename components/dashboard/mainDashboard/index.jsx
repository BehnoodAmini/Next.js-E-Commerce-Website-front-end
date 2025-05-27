"use client";

import { useState, useEffect } from "react";

import DashboardCtrl from "../dashboard-ctrl";
import AdminPanel from "../forms/admin-panel";
import MiddleBannerAll from "../forms/middleBannerForms";
import SliderAll from "../forms/sliderForms";
import PostsMain from "../forms/postForms";
import CategoryMain from "../forms/categoryForms";
import ProductForms from "../forms/productForms";
import UserForms from "../forms/userForms"

const MainDashboard = () => {
  const [contentChanger, setContentChanger] = useState("admin-panel");
  const [details, setDetails] = useState(<MiddleBannerAll />);

  useEffect(() => {
    if (contentChanger == "admin-panel") {
      setDetails(<AdminPanel />);
    } else if (contentChanger == "midBan") {
      setDetails(<MiddleBannerAll />);
    } else if (contentChanger == "sliders") {
      setDetails(<SliderAll />);
    } else if (contentChanger == "posts") {
      setDetails(<PostsMain />);
    } else if (contentChanger == "categories") {
      setDetails(<CategoryMain />);
    } else if (contentChanger == "products") {
      setDetails(<ProductForms />);
    } else if (contentChanger == "users") {
      setDetails(<UserForms />);
    }
  }, [contentChanger]);

  return (
    <div className="flex justify-between items-start gap-4 container mx-auto">
      <div className="sticky top-8 right-0 bottom-8 shadow-[1px_0px_5px_rgba(0,0,0,.3)] rounded-lg">
        <DashboardCtrl setContentChanger={setContentChanger} />
      </div>
      <div className="w-full">{details}</div>
    </div>
  );
};

export default MainDashboard;
