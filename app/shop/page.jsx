"use client";

import ShopComp from "@/components/ShopComp";
import { useSearchParams } from "next/navigation";

const ShopPage = () => {
  const searchParams = useSearchParams();

  const keyword = searchParams.get("keyword") || "";
  const orderBy = searchParams.get("orderBy") || "";
  const type = searchParams.get("type") || "";
  const maxP = searchParams.get("maxP") || "";
  const minP = searchParams.get("minP") || "";
  const categories = searchParams.get("categories") || "";
  const pn = searchParams.get("pn") || "";
  const pgn = searchParams.get("pgn") || "";

  const url = { keyword, orderBy, type, maxP, minP,categories, pn, pgn };

  return <ShopComp url={url} />;
};

export default ShopPage;
