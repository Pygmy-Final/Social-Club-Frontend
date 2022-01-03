import React from "react";
import BeforeAuthHeader from "./BeforeAuthHeader";
import Sidebar from "./Sidebar";
import EventBox from "./EventBox";
import QrCode from "./QrCode";
import Notification from "./Notification";





export default function Navigation() {

  return (
    <div>
      <div className="bg-[#E7ECEF] ">
        <div className="h-screen scale-95 rounded-md ">
          {/* <Header /> */}
          <BeforeAuthHeader />
          <div className=" grid  sm:gap-x-4 sm:gap-y-2 sm:grid-cols-1 sm:m-[0.5rem] ... md:gap-x-6 md:gap-y-4 md:grid-cols-2 md:m-[0.75rem] ... lg:gap-x-2 lg:gap-y-4 lg:grid-cols-[300px_1fr_300px] lg:m-[rem]">
            <div>
              <Sidebar />
            </div>
            <div className="inline-block flex-col divide-y h-[47rem] ">
              <h1 className="mt-10 mb-8 ml-4 text-[#1E2A3D] text-[24px]">
                <b>Today’s Event</b>
              </h1>
              <div className="grid grid-cols-[1fr_1frpx]">
                {/* <EventBox /> */}
              </div>
              <h1 className="mt-4 mb-8 ml-4 text-[#1E2A3D] text-[24px]">
                <b>Upcoming Events</b>
              </h1>
              <div className="grid grid-cols-[450px_450px] ">
               
                {/* {/* <EventBox /> */}
                 
                <EventBox />
                 

                {/* <EventBox /> */}
              </div>
            </div>

            <div>
              <Notification />
              {/* <QrCode /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
