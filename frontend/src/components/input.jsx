import React from "react";

function Input() {
  return (
    <div className="w-[70%] bg-[#172135] rounded-3xl mt-8 p-4 shadow-2xl items  text-white">
        <div className="flex  flex-row items-center justify-between">
        <input type="text" name="text" class="mt-1 px-3 py-2 bg-transparent text-xl  shadow-sm block w-[50%] rounded-md sm:text-sm  focus:outline-0" placeholder="your link url" />
        <button className="bg-[#273759] p-4 px-8 rounded-lg hover:shadow-2xl shadow-blue-500/50 ">Shorten link</button>
        </div>
    </div>
  );
}

export default Input;
