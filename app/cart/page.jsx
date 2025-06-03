import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import CartPageComp from "@/components/cartPageComp";

const getAuthData = async (cookieValue) => {
  const goalData = await fetch(
    "https://behnood-fileshop-server.liara.run/api/get-user-data",
    { cache: "no-store", headers: { auth_cookie: cookieValue } }
  );
  const data = await goalData.json();
  if (!data._id) {
    redirect("/login");
  } else {
    return data;
  }
};

const CartPage = async () => {
  const cookieStore = await cookies();
  const auth_cookie = cookieStore.get("auth_cookie");
  const cookieValue =
    auth_cookie && auth_cookie.value ? auth_cookie.value : undefined;
  const data = await getAuthData(cookieValue);
  // if (!data._id) {
  //   redirect("/login");
  // }

  return (
    <main className="container mx-auto">
      <CartPageComp cookie={cookieValue} />
    </main>
  );
};

export default CartPage;
