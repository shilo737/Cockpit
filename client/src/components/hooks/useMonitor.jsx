import React from "react";
import { useSelector } from "react-redux";

const useMonitor = () => {
  const { altitude, HIS, ADI } = useSelector((store) => store.monitorReducers);

  return {
    altitude,
    ADI,
    HIS,
  };
};

export default useMonitor;
