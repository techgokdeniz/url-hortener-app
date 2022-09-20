import React from "react";
import Button from "./button";
import Input from "./input";


function Landing() {
  return (
    <div className="flex flex-col items-center py-20 font-medium justify-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 text-white">
      <h1 className="text-7xl m-8 text-center font-bold font-white max-w-[800px]">The issue tracking tool you'll enjoy using</h1>
      <p className="max-w-[600px] text-2xl text-center text-[#95a2b3]">Linear helps streamline software projects, sprints, tasks, and bug tracking. It’s built for high-performance teams.</p>
      <Button/>
      <Input/>
    </div>
  );
}

export default Landing;
