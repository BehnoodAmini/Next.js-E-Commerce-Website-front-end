"use client";

import { useRef, useEffect, useState } from "react";
import axios from "axios";

const MidBannerDetails = ({ midBanId }) => {
  //PREVENT FORM TO BE SENT WITH ENTER
  const FormKeyNotSuber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };

  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const UpdateHandler = (e) => {
    e.preventDefault();
    const formData = {
      goalId: midBanId,
      image: imageUrlRef.current.value,
      imageAlt: imageAltRef.current.value,
      link: imageLinkRef.current.value,
      situation: imageSituationRef.current.value,
    };
    const url = `http://localhost:27017/api/update-middle-banner`;
    axios
      .post(url, formData)
      .then((d) => console.log("ok"))
      .catch((e) => console.log("error"));
  };

  const [imageUrlS, setImageUrlS] = useState("");
  const [imageAltS, setImageAltS] = useState("");
  const [imageLinkS, setImageLinkS] = useState("");
  const [imageSituationS, setImageSituationS] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:27017/api/get-mid-ban/${midBanId}`)
      .then((d) => {
        setImageUrlS(d.data.image);
        setImageAltS(d.data.imageAlt);
        setImageLinkS(d.data.link);
        setImageSituationS(d.data.situation);
      })
      .catch((e) => console.log("error"));
  }, [midBanId]);

  const RemoveHandler = () => {
    const formData = {
      goalId: midBanId,
    };
    const url = `http://localhost:27017/api/delete-middle-banner`;
    axios
      .post(url, formData)
      .then((d) => console.log("removed"))
      .catch((e) => console.log("error"));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-orange-500">جزئیات بنر</h2>
        <button
          onClick={() => RemoveHandler()}
          className="bg-rose-600 text-white px-4 py-1 rounded-md text-xs transition-all duration-300 hover:bg-rose-700"
        >
          حذف بنر
        </button>
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
            defaultValue={imageUrlS}
            type="text"
            ref={imageUrlRef}
            className="inputLtr p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آلت جدید عکس</div>
          <input
            required={true}
            defaultValue={imageAltS}
            type="text"
            ref={imageAltRef}
            className="p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>لینک جدید عکس</div>
          <input
            required={true}
            defaultValue={imageLinkS}
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
            {imageSituationS == true ? (
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
          به روز رسانی
        </button>
      </form>
    </div>
  );
};

export default MidBannerDetails;
