import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  const downloadTxtFile = () => {
    const text = data.quote;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "note.txt";
    link.click();
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      className="relative w-[100%] h-64 bg-zinc-700/50 rounded-[30px] overflow-hidden py-5 px-7 hover:cursor-pointer"
    >
      <FaFileAlt color="#fff" size="1.5rem" />
      <p className="text-sm font-medium leading-none text-white tracking-tight mt-4">
        {data?.quote}
      </p>
      <div className="w-full h-14 absolute bottom-0 left-0 bg-slate-400 flex items-center justify-between px-7">
        <h5 className="text-sm">{data?.author}</h5>
        <span
          onClick={downloadTxtFile}
          className="w-7 h-7 bg-white flex items-center justify-center rounded-full"
        >
          <FiDownload />
        </span>
      </div>
    </motion.div>
  );
};

export default Card;
