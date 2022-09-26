import React, { useEffect, useState } from "react";
import { getLinks } from "../service/service";

function MyLinksTab() {
  const [links, setlinks] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  const UserLink = async () => {
    const userid = localStorage.getItem("userid");
    const response = await getLinks(userid);
    setlinks(response);
    if(response.length===0){
        seterror(true)
    }
    setloading(true);
  };

  useEffect(() => {
    const userid = localStorage.getItem("userid");
    if (userid) {
      UserLink();
    }
  }, []);

  if (!seterror) {
    return (
      <div className="w-full flex justify-center items-center flex-col text-white pt-8">
        <div className="w-[70%] bg-[#172135] rounded-3xl mt-8 p-4 shadow-2xl  text-white">
          <p>No links found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center flex-col text-white pt-8">
      {loading &&
        links.map((link) => (
          <div className=" w-[70%] bg-[rgb(23,33,53)] items-center flex justify-between m-4 rounded-3xl shadow-2xl p-4 px-8">
            <a
              target={"_blank"}
              href={`http://localhost:3000/${link.linkid}`}
            >{`${link.link}`}</a>
            <p>{link.counter}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `http://localhost:3000/${link.linkid}`
                );
              }}
              className="bg-[#273759] hover:bg-slate-700 p-2 rounded-lg hover:shadow-2xl shadow-blue-500/50 "
            >
              Copy Link
            </button>
          </div>
        ))}
    </div>
  );
}

export default MyLinksTab;
