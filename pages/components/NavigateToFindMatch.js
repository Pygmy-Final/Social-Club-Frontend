import React from "react";
import BeforeAuthHeader from "./BeforeAuthHeader";
import Sidebar from "./Sidebar";
import FindMatch from "./FindMatch";

import Chats from "./Chats";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navigation() {
  return (
    <div>
      <div className="bg-[#E7ECEF] ">
        <div className="h-screen scale-95 rounded-md ">
          {/* <Header /> */}
          <BeforeAuthHeader />
          <div className=" grid  sm:gap-x-4 sm:gap-y-2 sm:grid-cols-1 sm:m-[0.5rem] ... md:gap-x-6 md:gap-y-4 md:grid-cols-2 md:m-[0.75rem] ... lg:gap-x-2 lg:gap-y-4 lg:grid-cols-[300px_1fr] lg:m-[rem]">
            <div>
              <Sidebar />
            </div>
            <div className="">
              <div></div>
              <FindMatch />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
