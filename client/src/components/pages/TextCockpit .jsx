import React from "react";
import useMonitor from "../hooks/useMonitor";
const TextCockpit = () => {
  const { ADI, HIS, altitude } = useMonitor();
  return (
    <div className="flex flex-col justify-center items-center mt-20 opacity-90">
      <div className="w-[700px] p-10 bg-slate-500  rounded-2xl text-white font-semibold text-[2em]">
        <div className="mb-4">
          <p>Altitude : {altitude}</p>
        </div>
        <div className="mb-4">
          <p>HIS : {HIS}</p>
        </div>
        <div className="mb-4">
          <p>ADI : {ADI}</p>
        </div>
      </div>
    </div>
  );
};

export default TextCockpit;
