"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BiSearchAlt } from "react-icons/bi";

const SearchBlog = () => {
  const router = useRouter();
  const searchRef = useRef();
  const BlogSearcher = (e) => {
    e.preventDefault();
    if (searchRef.current.value.length > 0) {
      const url = `/blog?keyword=${searchRef.current.value.replace(
        /\s+/g,
        "_"
      )}`;
      router.push(url);
      searchRef.current.value = "";
    } else {
      toast.error("فرم جست و جو خالی است!", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={BlogSearcher}
        className="border-zinc-700 border-2 px-2 rounded-md flex justify-between items-center w-78"
      >
        <input
          ref={searchRef}
          type="text"
          className="bg-transparent p-2 outline-none text-sm"
          placeholder="جست و جو در وبلاگ..."
        />
        <button type="submit" className="w-10 absolute left-28 cursor-pointer">
          <BiSearchAlt className="w-6 h-6 text-blue-500" />
        </button>
      </form>
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

export default SearchBlog;
