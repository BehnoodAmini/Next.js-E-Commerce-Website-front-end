"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

const AccountMainComp = () => {
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

  return <div>Enter</div>;
};

export default AccountMainComp;
