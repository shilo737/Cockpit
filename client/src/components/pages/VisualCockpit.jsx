import React, { useEffect } from 'react';
import useMonitor from '../hooks/useMonitor';
import { Socket } from "socket.io-client";

const VisualCockpit = () => {

  const { ADI, HIS, altitude } = useMonitor();
  let BottomA = altitude/10;



  return (
    <div className='flex justify-center items-center mt-20 opacity-90'>
      <div className="bg-slate-600 rounded-2xl p-10 w-2/3">
      <div className='Altitude'>
      <div className="ml-10 border border-black border-[3px] w-[4rem] h-[20rem] bg-white text-black text-[1.5em] font-bold text-center relative">
        <div className="h-[30%] ">3000</div>
        <div className="h-[30%]">2000</div>
        <div className="h-[30%]">1000</div>
        <div className="">0</div>
        <div className={'absolute w-full h-2 border border-black bg-black'} style={{ bottom: `${BottomA}px` }}></div>
       
      </div>
      { (altitude > 3000 || altitude < 0 )&& <p className='text-red-500 ml-5'>plz enter number between 0 to 3000</p>}
      </div>

  
      </div>
    </div>
  );
};

export default VisualCockpit;
