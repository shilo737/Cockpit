import React from 'react';
import useMonitor from '../hooks/useMonitor'
const TextCockpit = () => {
    const {ADI,HIS,altitude} = useMonitor()
  return (
    <div className='flex flex-col h-screen justify-center items-center text-white font-semibold text-[2em]'>
      <div className='mb-4'>
        <p>Altitude : {altitude}</p>
      </div>
      <div className='mb-4'>
        <p>HIS : {HIS}</p>
      </div>
      <div className='mb-4'>
        <p>ADI : {ADI}</p>
      </div>
    </div>
  );
};

export default TextCockpit;
