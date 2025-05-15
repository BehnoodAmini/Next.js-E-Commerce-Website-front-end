"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

const AccountMainComp = () => {
  const router = useRouter();
  const [authCookie, setAuthCookie] = useState(Cookies.get("authCookie"));

  useEffect(() => {
    setAuthCookie(Cookies.get("authCookie"));
  }, [Cookies.get("authCookie")]);

  useEffect(() => {
    if (authCookie == undefined || authCookie.length < 1) {
      router.push("/login");
    }
  }, [authCookie]);

  return <div>Enter</div>;
};

export default AccountMainComp;
