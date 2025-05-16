import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import LoginForm from "@/components/auth/loginForm";

const getAuthData = async (cookieValue) => {
  const data = await fetch(
    "https://behnood-fileshop-server.liara.run/api/get-user-data",
    { cache: "no-store", headers: { auth_cookie: cookieValue } }
  );
  return data.json();
};

const LoginPage = async () => {
  const cookieStore = await cookies();
  const auth_cookie = cookieStore.get("auth_cookie");
  const cookieValue = (auth_cookie && auth_cookie.value) ? auth_cookie.value : undefined;
  const data = await getAuthData(cookieValue);
  if (data._id) {
    redirect("/account");
  }

  return <LoginForm />;
};

export default LoginPage;
