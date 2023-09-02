import React, { useEffect, useState } from "react";
import useMonitor from "../hooks/useMonitor";

const VisualCockpit = () => {
  // Destructuring values returned from useMonitor hook
  const { ADI, HIS, altitude } = useMonitor();
  
  // Calculate a value for BottomA based on altitude
  let BottomA = altitude / 10;

  // State to manage CSS class for circleColor
  const [circleColorClasses, setCircleColorClasses] = useState('');

  // Effect hook that runs when ADI changes
  useEffect(() => {
    if (ADI === 100) {
      // Set circleColorClasses to 'bg-blue-500' for specific ADI value
      setCircleColorClasses('bg-blue-500');
    } else if (ADI === 0) {
      // Set circleColorClasses to gradient for specific ADI value
      setCircleColorClasses('bg-gradient-to-b from-blue-700 to-green-500');
    } else if (ADI === -100) {
      // Set circleColorClasses to 'bg-green-500' for specific ADI value
      setCircleColorClasses('bg-green-500');
    } else {
      // Show an alert for invalid ADI values
      alert("Please enter only these options: 100, -100, 0");
    }
  }, [ADI]); // This effect depends on the ADI variable

  return (
    <div className="lg:flex justify-center items-center opacity-90">
      <div className="bg-slate-500 rounded-2xl p-10 w-full flex justify-evenly items-center">
        <div className="Altitude">
          <div className="ml-10 border border-black border-[3px] w-[4rem] h-[20rem] bg-white text-black text-[1.5em] font-bold text-center relative">
            <div className="h-[30%] ">3000</div>
            <div className="h-[30%]">2000</div>
            <div className="h-[30%]">1000</div>
            <div className="">0</div>
            <div
              className={"absolute w-full h-2 border border-black bg-black"}
              style={{ bottom: `${BottomA}px` }}
            ></div>
          </div>
          {(altitude > 3000 || altitude < 0) && (
            // Show an alert for invalid altitude values
            alert("Please enter a number between 0 to 3000")
          )}
        </div>

        <div className="HIS">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="5rem"
              viewBox="0 0 384 512"
              className="z-50 absolute left-[100px] top-20"
            >
              <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
            </svg>
          </div>

          <div
            style={{ rotate: `${HIS - 360}deg` }}
            className="bg-white text-[1.7em] text-black font-bold rounded-full w-[16rem] h-[16rem] border border-[3px] border-black relative"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                0
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                180
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                270
              </div>
              <div className="absolute bottom-0">90</div>
            </div>
          </div>
          {(HIS > 360 || HIS < 0) && (
            // Show a warning message for invalid HIS values
            <p className="text-red-500 ml-5">
              Please enter a number between 0 to 360
            </p>
          )}
        </div>

        <div className={`HIS ${circleColorClasses} rounded-full w-[16rem] h-[16rem] border border-[3px] border-black relative`}>
          {" "}
        </div>
      </div>
    </div>
  );
};

export default VisualCockpit;
