import React, { useEffect, useRef, useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const [myData, setMyData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const refreshData = () => {
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random/9")
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, [refresh]);

  return (
    <div
      ref={ref}
      className="fixed w-full h-screen p-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 overflow-y-scroll sm:overflow-hidden"
    >
      {myData.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
      <button
        onClick={refreshData}
        className="fixed bottom-7 right-7 bg-black text-white p-3 rounded-full cursor-pointer"
      >
        <LuRefreshCw />
      </button>
    </div>
  );
};

export default Foreground;
