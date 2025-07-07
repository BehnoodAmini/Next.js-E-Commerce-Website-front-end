"use client";

import { useState, useEffect } from "react";

import DashboardCtrl from "../dashboard-ctrl";
import AdminPanel from "../forms/admin-panel";
import MiddleBannerAll from "../forms/middleBannerForms";
import SliderAll from "../forms/sliderForms";
import PostsMain from "../forms/postForms";
import CategoryMain from "../forms/categoryForms";
import ProductForms from "../forms/productForms";
import UserForms from "../forms/userForms";
import PaymentForms from "../forms/paymentForms";
import CommentsMain from "../forms/commentForms";

const MainDashboard = () => {
  const [contentChanger, setContentChanger] = useState("admin-panel");
  const [details, setDetails] = useState(<AdminPanel />);

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
    } else if (contentChanger == "payments") {
      setDetails(<PaymentForms />);
    } else if (contentChanger == "comments") {
      setDetails(<CommentsMain />);
    }
  }, [contentChanger]);

  return (
    <div className="flex justify-between items-start gap-4 container mx-auto">
      <div className="sticky top-0 right-0 bottom-0">
        <DashboardCtrl setContentChanger={setContentChanger} />
      </div>
      <div className="w-full">{details}</div>
    </div>
  );
};

export default MainDashboard;
