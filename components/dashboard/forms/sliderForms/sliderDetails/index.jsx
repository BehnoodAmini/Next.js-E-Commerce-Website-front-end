"use client";

import { useRef, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import { toast } from "react-toastify";

const SliderDetails = ({ midBanId }) => {
  //PREVENT FORM TO BE SENT WITH ENTER
  const FormKeyNotSuber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };

  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const sorterRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const UpdateHandler = (e) => {
    e.preventDefault();
    const formData = {
      goalId: midBanId,
      image: imageUrlRef.current.value,
      imageAlt: imageAltRef.current.value,
      sorter: sorterRef.current.value,
      link: imageLinkRef.current.value,
      situation: imageSituationRef.current.value,
      date: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    const url = `https://behnood-fileshop-server.liara.run/api/update-slider/${midBanId}`;
    axios
      .post(url, formData)
      .then((d) => {
        formData.situation == "true"
          ? toast.success("اسلایدر با موفقیت به‌روزرسانی و منتشر شد.", {
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          : toast.success("اسلایدر به‌روزرسانی شد.", {
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
      })
      .catch((e) => {
        let message = "متاسفانه ناموفق بود.";
        if (e.response.data.msg) {
          message = e.response.data.msg;
        }

        toast.error(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const [fullData, setFullData] = useState([-1]);
  useEffect(() => {
    goTopCtrl();
    axios
      .get(`https://behnood-fileshop-server.liara.run/api/get-slider/${midBanId}`)
      .then((d) => {
        setFullData(d.data);
      })
      .catch((e) => {
        toast.error("خطا در لود اطلاعات!", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [midBanId]);

  const RemoveHandler = () => {
    const url = `https://behnood-fileshop-server.liara.run/api/delete-slider/${midBanId}`;
    axios
      .post(url)
      .then((d) => {
        toast.success("بنر با موفقیت حذف شد.", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((e) => {
        let message = "متاسفانه ناموفق بود.";
        if (e.response.data.msg) {
          message = e.response.data.msg;
        }

        toast.error(message, {
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
    <div className="flex flex-col gap-8">
      {fullData[0] == -1 ? (
        <div className="flex justify-center items-center p-12">
          <Image alt="loading" width={120} height={120} src={"/loading.svg"} />
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-orange-500">جزئیات بنر</h2>
            <button
              onClick={() => RemoveHandler()}
              className="bg-rose-600 text-white px-4 py-1 rounded-md text-xs transition-all duration-300 hover:bg-rose-700"
            >
              حذف
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-zinc-100 rounded px-3 py-1 text-sm">
              {fullData._id ? fullData._id : ""}
            </div>
            <div className="bg-zinc-100 rounded px-3 py-1 text-sm">
              {fullData.date ? fullData.date : ""}
            </div>
          </div>
          <form
            onSubmit={UpdateHandler}
            onKeyDown={FormKeyNotSuber}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <div>آدرس جدید عکس</div>
              <input
                required={true}
                defaultValue={fullData.image}
                type="text"
                ref={imageUrlRef}
                className="inputLtr p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>alt جدید عکس</div>
              <input
                required={true}
                defaultValue={fullData.imageAlt}
                type="text"
                ref={imageAltRef}
                className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>ترتیب جدید اسلایدر</div>
              <input
                required={true}
                defaultValue={fullData.sorter}
                type="number"
                ref={sorterRef}
                className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>لینک جدید عکس</div>
              <input
                required={true}
                defaultValue={fullData.link}
                type="text"
                ref={imageLinkRef}
                className="inputLtr p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>روشن و خاموش</div>
              <select
                ref={imageSituationRef}
                className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              >
                {fullData.situation == true ? (
                  <>
                    <option value={true}>روشن</option>
                    <option value={false}>خاموش</option>
                  </>
                ) : (
                  <>
                    <option value={false}>خاموش</option>
                    <option value={true}>روشن</option>
                  </>
                )}
              </select>
            </div>
            <button
              type="submit"
              className="p-2 bg-indigo-600 text-white w-full rounded-md transition-all duration-300 hover:bg-orange-500"
            >
              به‌روزرسانی
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SliderDetails;
