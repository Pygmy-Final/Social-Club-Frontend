import React from "react";
import BeforeAuthHeader from "./BeforeAuthHeader";
import Sidebar from "./Sidebar";

import Chats from "./Chats";

export default function Navigation() {
  return (
    <div>
      <div className="bg-[#E7ECEF] ">
        <div className="h-screen scale-95 rounded-md ">
          
          {/* <Header /> */}
          <BeforeAuthHeader />
          <div className=" grid lg:grid-cols-[300px_1fr_100px]">
            <div>
              <Sidebar />
            </div>
            <Chats />
          
          </div>
        </div>
      </div>
    </div>
  );
}
