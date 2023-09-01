import React from "react";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import TextCockpit from "./TextCockpit ";
import { useDispatch } from "react-redux";
import { setADI, setAltitude, setHIS } from "../../redux/features/monitorSlice";
import VisualCockpit from "./VisualCockpit";

const socket = io.connect("http://localhost:3001");

const PilotControl = () => {
  const dispatch = useDispatch();
  const [openComponent, setOpenComponent] = useState(false);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      dispatch(setAltitude(data.altitude));
      dispatch(setHIS(data.HIS));
      dispatch(setADI(data.ADI));
    });
  }, [dispatch]);

  return (
    <div className="">
      <div className="flex items-center justify-center gap-5">
        <button
          className="btn bg-blue-600 text-white hover:bg-blue-900 mt-10"
          onClick={() => setOpenComponent(false)}
        >
          Visual
        </button>
        <button
          className="btn bg-green-600 text-white hover:bg-green-900 mt-10"
          onClick={() => setOpenComponent(true)}
        >
          Text
        </button>
      </div>
         {openComponent ? <TextCockpit /> : <VisualCockpit />}
    </div>
  );
};

export default PilotControl;
