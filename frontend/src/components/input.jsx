import React, { useState } from "react";
import { shortenLink } from "../service/service";
import toast, { Toaster } from "react-hot-toast";

function Input() {
  const [link, setlink] = useState("");
  const [shortlink, setshortlink] = useState("");
  const [loading, setloading] = useState(false);

  const submitHandler = async () => {
    if (!link) {
      return toast.error("Please enter a link");
    }

    const userid = localStorage.getItem("userid");
    const response = await shortenLink(link, userid);
    if (response.linkid) {
      toast.success("Link shortened successfully");
      setshortlink(response.linkid);
      setloading(true);
    }
  };

  const changeHandler = (e) => {
    setlink(e.target.value);
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="w-[70%] bg-[#172135] rounded-3xl mt-8 p-4 shadow-2xl  text-white">
        <div className="flex  flex-row items-center justify-between">
          <input
            onChange={changeHandler}
            type="text"
            name="text"
            className="mt-1 px-3 py-2 bg-transparent text-xl  shadow-sm block w-[50%] rounded-md sm:text-sm  focus:outline-0"
            placeholder="your link url"
          />
          <button
            onClick={submitHandler}
            className="bg-[#273759] p-4 px-8 rounded-lg hover:shadow-2xl shadow-blue-500/50 "
          >
            Shorten link
          </button>
        </div>
      </div>
      {loading && (
        <div className="w-[70%] bg-[#172135] rounded-3xl mt-8 p-4 px-8 shadow-2xl flex items-center  justify-between text-white">
          <a target={"_blank"} href={`http://localhost:3000/${shortlink}`}>http://localhost.com/{shortlink}</a>
          <button
            onClick={() => {navigator.clipboard.writeText(`http://localhost:3000/${shortlink}`)}}
            className="bg-[#273759] p-2 rounded-lg hover:shadow-2xl shadow-blue-500/50 "
          >
            Copy Link
          </button>
        </div>
      )}
    </>
  );
}

export default Input;
