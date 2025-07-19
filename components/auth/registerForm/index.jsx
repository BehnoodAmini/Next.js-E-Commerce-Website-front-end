"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import { toast } from "react-toastify";

import Cookies from "js-cookie";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  const router = useRouter();

  // IF USER HAVE TOKEN SHOULD BE REDIRECTED TO ACCOUNT PAGE
  const [authCookie, setAuthCookie] = useState(Cookies.get("auth_cookie"));

  useEffect(() => {
    setAuthCookie(Cookies.get("auth_cookie"));
  }, [Cookies.get("auth_cookie")]);

  const formSubmitHandler = () => {
    const formData = {
      username: watch("username"),
      displayname: watch("displayname"),
      email: watch("email"),
      password: watch("password"),
      rePassword: watch("rePassword"),
      favoriteProducts: [],
      userProducts: [],
      comments: [],
      payments: [],
      cart: [],
      viewed: false,
      userIsActive: false,
      emailSend: true,
    };
    const backendUrl = "https://behnood-fileshop-server.liara.run/api/new-user";
    axios
      .post(backendUrl, formData)
      .then((d) => {
        Cookies.set("auth_cookie", d.data.auth, { expires: 30 });
        const message = d.data.msg
          ? d.data.msg
          : "ثبت نام شما با موفقیت انجام شد!";
        toast.success(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push("./account");
      })
      .catch((err) => {
        const errorMsg =
          err.response && err.response.data && err.response.data.msg
            ? err.response.data.msg
            : "خطا!";
        console.log(err);
        toast.error(errorMsg, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <section className="container mx-auto flex justify-center items-center">
      <form
        onSubmit={handleSubmit(formSubmitHandler)}
        className="flex flex-col gap-8 mt-15 md:m-12 w-[30rem] bg-gray-100 p-10 md:p-12 rounded-md shadow-[0px_0px_1rem_rgba(0,0,0,.2)] max-md:w-[100%]"
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-xl text-center text-indigo-500">
            ثبت نام در سایت
          </h1>
          <Link
            href={"/login"}
            className="bg-indigo-600 text-white! px-2 py-1 rounded-md hover:bg-indigo-800 transition-all duration-500"
          >
            ورود به حساب
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="نام کاربری"
            autoComplete="off"
            className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-300 shadow-[0px_0px_5px_rgba(0,0,0,.15)] transition-all duration-500 focus:shadow-orange-400"
            {...register("username", {
              required: true,
              maxLength: 20,
              minLength: 8,
            })}
          />
          {errors.username && errors.username.type == "required" && (
            <div className="text-rose-500 text-sm">
              نام کاربری وارد نشده است!
            </div>
          )}
          {errors.username && errors.username.type == "maxLength" && (
            <div className="text-rose-500 text-sm">
              نام کاربری باید کمتر از 20 کارکتر باشد!
            </div>
          )}
          {errors.username && errors.username.type == "minLength" && (
            <div className="text-rose-500 text-sm">
              نام کاربری باید بیشتر از 8 کارکتر باشد!
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="نام نمایشی"
            autoComplete="off"
            className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-300 shadow-[0px_0px_5px_rgba(0,0,0,.15)] transition-all duration-500 focus:shadow-orange-400"
            {...register("displayname", {
              required: true,
              maxLength: 20,
              minLength: 8,
            })}
          />
          {errors.displayname && errors.displayname.type == "required" && (
            <div className="text-rose-500 text-sm">
              نام نمایشی وارد نشده است!
            </div>
          )}
          {errors.displayname && errors.displayname.type == "maxLength" && (
            <div className="text-rose-500 text-sm">
              نام نمایشی باید کمتر از 20 کارکتر باشد!
            </div>
          )}
          {errors.displayname && errors.displayname.type == "minLength" && (
            <div className="text-rose-500 text-sm">
              نام نمایشی باید بیشتر از 8 کارکتر باشد!
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="ایمیل"
            autoComplete="off"
            className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-300 shadow-[0px_0px_5px_rgba(0,0,0,.15)] transition-all duration-500 focus:shadow-orange-400"
            {...register("email", {
              required: true,
              minLength: 11,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && errors.email.type == "required" && (
            <div className="text-rose-500 text-sm">ایمیل وارد نشده است!</div>
          )}
          {errors.email && errors.email.type == "pattern" && (
            <div className="text-rose-500 text-sm">فرمت ایمیل صحیح نیست!</div>
          )}
          {errors.email && errors.email.type == "minLength" && (
            <div className="text-rose-500 text-sm">
              ایمیل باید بیشتر از 11 کارکتر باشد!
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="رمز عبور"
            autoComplete="off"
            className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-300 shadow-[0px_0px_5px_rgba(0,0,0,.15)] transition-all duration-500 focus:shadow-orange-400"
            {...register("password", {
              required: true,
              maxLength: 20,
              minLength: 8,
            })}
          />
          {errors.password && errors.password.type == "required" && (
            <div className="text-rose-500 text-sm">رمز عبور وارد نشده است!</div>
          )}
          {errors.password && errors.password.type == "maxLength" && (
            <div className="text-rose-500 text-sm">
              رمز عبور باید کمتر از 20 کارکتر باشد!
            </div>
          )}
          {errors.password && errors.password.type == "minLength" && (
            <div className="text-rose-500 text-sm">
              رمز عبور باید بیشتر از 8 کارکتر باشد!
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="تکرار رمز عبور"
            autoComplete="off"
            className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-300 shadow-[0px_0px_5px_rgba(0,0,0,.15)] transition-all duration-500 focus:shadow-orange-400"
            {...register("rePassword", {
              required: true,
              validate: (val) => val === watch("password"),
            })}
          />
          {errors.rePassword && errors.rePassword.type == "required" && (
            <div className="text-rose-500 text-sm">رمز عبور وارد نشده است!</div>
          )}
          {errors.rePassword && errors.rePassword.type == "validate" && (
            <div className="text-rose-500 text-sm">
              تکرار رمز عبور مطابقت ندارد!
            </div>
          )}
        </div>
        <button
          type="submit"
          className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
        >
          <div className="relative overflow-hidden flex justify-center items-center">
            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              ثبت نام در سایت
            </p>
            <p className="absolute top-7 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              بزن بریم!
            </p>
          </div>
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
