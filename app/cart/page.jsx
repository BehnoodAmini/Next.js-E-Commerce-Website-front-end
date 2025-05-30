import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import CartPageComp from "@/components/cartPageComp";

const getAuthData = async (cookieValue) => {
  const data = await fetch(
    "https://behnood-fileshop-server.liara.run/api/get-user-data",
    { cache: "no-store", headers: { auth_cookie: cookieValue } }
  );
  return data.json();
};

const CartPage = async ({ params }) => {
  const resolvedParams = await params;
  
    const cookieStore = await cookies();
    const auth_cookie = cookieStore.get("auth_cookie");
    const cookieValue =
      auth_cookie && auth_cookie.value ? auth_cookie.value : undefined;
    const data = await getAuthData(cookieValue);
    if (!data._id) {
      redirect("/login");
    } 

  return (
    <main className="container mx-auto">
      <CartPageComp />
    </main>
  );
};

export default CartPage;
