"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import Cookies from "js-cookie";

import { FiRefreshCw } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Info = ({ cookie }) => {
  const [data, setData] = useState([-1]);
  const [needRefresh, setNeedRefresh] = useState(0);
  useEffect(() => {
    if (cookie && cookie.length > 0) {
      axios
        .get(
          "https://behnood-fileshop-server.liara.run/api/get-part-of-user-data/info",
          { headers: { auth_cookie: cookie } }
        )
        .then((d) => {
          setData(d.data);
          setNeedRefresh(0);
          setBulkEmailSituation(d.data.emailSend);
        })
        .catch((e) => {
          toast.error("خطا در لود اطلاعات", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  }, [cookie, needRefresh]);

  // FOR MINI UPDATE DATA
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});

  const formSubmitHandler = () => {
    const formData = {
      displayname: watch("displayname"),
      password: watch("password"),
      rePassword: watch("rePassword"),
    };
    const backendUrl = `https://behnood-fileshop-server.liara.run/api/mini-update-user/${data._id}`;
    axios
      .post(backendUrl, formData)
      .then((d) => {
        const message = d.data.msg
          ? d.data.msg
          : "تغییر اطلاعات با موفقیت انجام شد!";
        toast.success(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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

  // FOR CONFIRMING USER ACCOUNT USING EMAIL
  const ActivateCodeRef = useRef();
  const emailConfirmHandler = (e) => {
    e.preventDefault();
    const formData = {
      activateCode: ActivateCodeRef.current.value,
    };
    const backendUrl = `https://behnood-fileshop-server.liara.run/api/confirm-user-email`;
    axios
      .post(backendUrl, formData, { headers: { auth_cookie: cookie } })
      .then((d) => {
        const message = d.data.msg
          ? d.data.msg
          : "تغییر اطلاعات با موفقیت انجام شد!";
        toast.success(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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

  // FOR ADVERTISE EMAILS
  const [bulkEmailSituation, setBulkEmailSituation] = useState(true);
  const bulkEmailChanger = () => {
    const formData = {
      emailSend: bulkEmailSituation,
    };
    const backendUrl = `https://behnood-fileshop-server.liara.run/api/update-email-user`;
    axios
      .post(backendUrl, formData, { headers: { auth_cookie: cookie } })
      .then((d) => {
        const message = d.data.msg
          ? d.data.msg
          : "تغییر اطلاعات با موفقیت انجام شد!";
        toast.success(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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

  // LOGOUT
  const router = useRouter();
  const logoutHandler = () => {
    Cookies.remove("auth_cookie");
    router.push("/login");
  };

  return (
    <div>
      <div>
        {data[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-8 relative pt-8">
            <div
              onClick={() => {
                setNeedRefresh(1);
                setData([-1]);
              }}
              className="absolute top-1 left-1 cursor-pointer text-white bg-indigo-500 rounded-md flex text-sm justify-center items-center gap-1 w-28 h-10"
            >
              <FiRefreshCw /> به روز رسانی
            </div>
            {data.userIsActive == false ? (
              <div className="flex flex-col gap-8 bg-zinc-200 w-full text-sm rounded-xl p-4">
                <form
                  onSubmit={emailConfirmHandler}
                  className="flex flex-col gap-8 items-center"
                >
                  <div>کد تایید حساب کاربری</div>
                  <input
                    type="text"
                    ref={ActivateCodeRef}
                    required
                    placeholder="لطفا کدی که برایتان ارسال شده است را وارد کنید تا حساب کاربری فعال شود"
                    autoComplete="off"
                    className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-300 shadow-[0px_0px_5px_rgba(0,0,0,.15)] transition-all duration-500 focus:shadow-orange-400"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
                  >
                    فعال کردن حساب
                  </button>
                </form>
              </div>
            ) : (
              <div></div>
            )}

            <div className="flex justify-between items-center gap-4">
              <div className="flex justify-center gap-1 items-center bg-zinc-200 w-60 text-sm h-10 rounded-md p-1">
                <div>تاریخ ثبت نام:</div>
                <div>{data.createdAt}</div>
              </div>
              <div className="flex justify-center gap-1 items-center bg-zinc-200 w-60 text-sm h-10 rounded-md p-1">
                <div>به روز رسانی:</div>
                <div>{data.updatedAt}</div>
              </div>
            </div>
            <div className="flex flex-col gap-8 bg-zinc-200 w-full text-sm rounded-md p-4">
              <div className="flex justify-start gap-1 items-center">
                <div>نام کاربری:</div>
                <div>{data.username}</div>
              </div>
              <div className="flex justify-start gap-1 items-center">
                <div>نام نمایشی:</div>
                <div>{data.displayname}</div>
              </div>
              <div className="flex justify-start gap-1 items-center">
                <div>ایمیل:</div>
                <div>{data.email}</div>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center bg-zinc-200 w-full text-sm rounded-md p-4">
              <div className="text-base">به روز رسانی اطلاعات</div>
              <form
                onSubmit={handleSubmit(formSubmitHandler)}
                className="flex flex-col gap-8 w-[30rem] bg-gray-100 p-6 rounded-md shadow-[0px_0px_1rem_rgba(0,0,0,.2)]"
              >
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
                  {errors.displayname &&
                    errors.displayname.type == "required" && (
                      <div className="text-rose-500 text-sm">
                        نام نمایشی وارد نشده است!
                      </div>
                    )}
                  {errors.displayname &&
                    errors.displayname.type == "maxLength" && (
                      <div className="text-rose-500 text-sm">
                        نام نمایشی باید کمتر از 20 کارکتر باشد!
                      </div>
                    )}
                  {errors.displayname &&
                    errors.displayname.type == "minLength" && (
                      <div className="text-rose-500 text-sm">
                        نام نمایشی باید بیشتر از 8 کارکتر باشد!
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
                    <div className="text-rose-500 text-sm">
                      رمز عبور وارد نشده است!
                    </div>
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
                  {errors.rePassword &&
                    errors.rePassword.type == "required" && (
                      <div className="text-rose-500 text-sm">
                        رمز عبور وارد نشده است!
                      </div>
                    )}
                  {errors.rePassword &&
                    errors.rePassword.type == "validate" && (
                      <div className="text-rose-500 text-sm">
                        تکرار رمز عبور مطابقت ندارد!
                      </div>
                    )}
                </div>
                <button
                  type="submit"
                  className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
                >
                  به روز رسانی اطلاعات
                </button>
              </form>
            </div>
            <div className="flex justify-between items-center gap-6 bg-zinc-100 w-full text-sm rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-evenly w-85 h-12 bg-white rounded-xl border border-zinc-300 px-4 py-2">
                <span className="text-zinc-700">
                  اطلاع رسانی جشنواره‌ها از طریق ایمیل
                </span>
                {data.emailSend === true ? (
                  <button onClick={()=>{setBulkEmailSituation(false); bulkEmailChanger()}} className="cursor-pointer bg-rose-600 hover:bg-rose-700 text-white text-sm px-4 py-1 rounded-md shadow">
                    خاموش
                  </button>
                ) : (
                  <button onClick={()=>{setBulkEmailSituation(true); bulkEmailChanger()}} className="cursor-pointer bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1 rounded-md shadow">
                    روشن
                  </button>
                )}
              </div>
              <button
                onClick={logoutHandler}
                className="cursor-pointer bg-white text-center w-85 rounded-2xl h-12 relative text-black text-sm group"
                type="button"
              >
                <div className="bg-rose-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[1px] group-hover:w-85 z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="1.6rem"
                    width="2rem"
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
                <p className="translate-x-2">خروج از حساب کاربری</p>
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        bodyClassName={() => "font-[IRANSans] text-sm flex items-center"}
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Info;
