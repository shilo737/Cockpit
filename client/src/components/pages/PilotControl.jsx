import React from "react";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import TextCockpit from "./TextCockpit "; 
import { useDispatch } from "react-redux"; 
import { setADI, setAltitude, setHIS } from "../../redux/features/monitorSlice"; 
import VisualCockpit from "./VisualCockpit"; 

// Creating a connection to the Socket.IO 
const socket = io.connect("http://localhost:3001");

// Functional component for the pilot control interface
const PilotControl = () => {
  const dispatch = useDispatch(); 
  const [openComponent, setOpenComponent] = useState(false); // Managing component state with useState

  useEffect(() => {
    // Setting up a Socket.IO event listener for "receive_message"
    socket.on("receive_message", (data) => {
      // Dispatching Redux actions to update state with received data
      dispatch(setAltitude(data.altitude));
      dispatch(setHIS(data.HIS));
      dispatch(setADI(data.ADI));
    });
  }, [dispatch]); // Running this effect whenever the dispatch function changes

  return (
    <div className="">
      <div className="flex items-center justify-center gap-5">
        <button
          className="btn bg-blue-600 text-white hover:bg-blue-900 mt-10"
          onClick={() => setOpenComponent(false)} // Set openComponent to false when clicked
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
