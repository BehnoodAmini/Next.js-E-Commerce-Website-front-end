"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";

import Info from "../info";
import Favourite from "../favourite";
import Purchased from "../purchased";
import Comments from "../comments";
import Payments from "../payments";

const AccountMainComp = ({ items }) => {
  const router = useRouter();
  const [authCookie, setAuthCookie] = useState(Cookies.get("auth_cookie"));
  const [authCookie2, setAuthCookie2] = useState(Cookies.get("auth_cookie"));

  useEffect(() => {
    if (authCookie !== authCookie2) {
      Cookies.remove("auth_cookie");
      router.push("/login");
    }
  }, [authCookie]);

  useEffect(() => {
    setAuthCookie2(Cookies.get("auth_cookie"));
  }, [Cookies.get("auth_cookie")]);

  // ROUTING
  const [details, setDetails] = useState(<Info />);

  useEffect(() => {
    if (items.slug[0] == "info") {
      setDetails(<Info />);
    } else if (items.slug[0] == "favourite") {
      setDetails(<Favourite />);
    } else if (items.slug[0] == "purchased") {
      setDetails(<Purchased />);
    } else if (items.slug[0] == "comments") {
      setDetails(<Comments />);
    } else if (items.slug[0] == "payments") {
      setDetails(<Payments />);
    } else {
      setDetails(<Info />);
    }
  }, [items.slug[0]]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center gap-2">
        <div className="w-55 min-w-55 bg-zinc-100 p-6 rounded-md">
          <nav className="flex justify-center items-center">
            <ul className="flex flex-col gap-6 w-full">
              <li>
                <Link
                  className="rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                  href={"/account/info"}
                >
                  اطلاعات
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                  href={"/account/favourite"}
                >
                  محصولات مورد علاقه
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                  href={"/account/purchased"}
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
                  href={"/account/comments"}
                >
                  دیدگاه‌ها
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-md bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white! hover:text-white! flex justify-center items-center w-full h-12"
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
