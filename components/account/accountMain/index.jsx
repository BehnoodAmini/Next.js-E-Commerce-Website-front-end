"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";

import Info from "../info";
import Favourite from "../favourite";
import Purchased from "../purchased";
import Comments from "../comments";
import Payments from "../payments";

const AccountMainComp = ({ items }) => {
  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const router = useRouter();
  const [authCookie, setAuthCookie] = useState(Cookies.get("auth_cookie"));
  const [authCookie2, setAuthCookie2] = useState(Cookies.get("auth_cookie"));

  useEffect(() => {
    if (authCookie !== authCookie2) {
      Cookies.remove("auth_cookie");
      router.push("/login");
    } else if (!authCookie || authCookie == "") {
      router.push("/login");
    } else {
      axios
        .get("https://behnood-fileshop-server.liara.run/api/get-user-data", {
          headers: { auth_cookie: authCookie },
        })
        .then((d) => {
          if (!d.data._id) {
            router.push("./login");
          }
        })
        .catch((e) => {
          router.push("./login");
        });
    }
  }, [authCookie]);

  useEffect(() => {
    setAuthCookie2(Cookies.get("auth_cookie"));
  }, [Cookies.get("auth_cookie")]);

  // ROUTING
  const [details, setDetails] = useState(<Info />);

  useEffect(() => {
    if (items.slug[0] == "info") {
      setDetails(<Info cookie={authCookie} />);
    } else if (items.slug[0] == "favourites") {
      setDetails(<Favourite cookie={authCookie} />);
    } else if (items.slug[0] == "purchased") {
      setDetails(<Purchased cookie={authCookie} />);
    } else if (items.slug[0] == "comments") {
      setDetails(<Comments cookie={authCookie} />);
    } else if (items.slug[0] == "payments") {
      setDetails(<Payments cookie={authCookie} />);
    } else {
      setDetails(<Info cookie={authCookie} />);
    }
  }, [items.slug[0]]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-start gap-2">
        <div className="w-55 min-w-55 bg-zinc-100 p-6 sticky top-8 right-0 bottom-8 shadow-[1px_0px_5px_rgba(0,0,0,.3)] rounded-lg">
          <nav className="flex justify-center items-center">
            <ul className="flex flex-col gap-6 w-full">
              <li>
                <Link
                  onClick={goTopCtrl}
                  className={
                    items.slug[0] == "info"
                      ? "rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                      : "rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                  }
                  href={"/account/info"}
                >
                  اطلاعات
                </Link>
              </li>
              <li>
                <Link
                  onClick={goTopCtrl}
                  className={
                    items.slug[0] == "favourites"
                      ? "rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                      : "rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                  }
                  href={"/account/favourites"}
                >
                  محصولات مورد علاقه
                </Link>
              </li>
              <li>
                <Link
                  onClick={goTopCtrl}
                  className={
                    items.slug[0] == "purchased"
                      ? "rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                      : "rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                  }
                  href={"/account/purchased"}
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  onClick={goTopCtrl}
                  className={
                    items.slug[0] == "comments"
                      ? "rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                      : "rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                  }
                  href={"/account/comments"}
                >
                  دیدگاه‌ها
                </Link>
              </li>
              <li>
                <Link
                  onClick={goTopCtrl}
                  className={
                    items.slug[0] == "payments"
                      ? "rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                      : "rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                  }
                  href={"/account/payments"}
                >
                  سفارش‌ها
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4 bg-zinc-100 rounded-md w-full">{details}</div>
      </div>
    </div>
  );
};

export default AccountMainComp;
