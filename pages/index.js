import Head from "next/head";
import BeforeAuthHeader from "./components/BeforeAuthHeader";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import Followers from "./components/Followers";
import FindMatch from "./components/FindMatch";

import EventBox from "./components/EventBox";

import Notification from "./components/Notification";
import QrCode from "./components/QrCode";

export default function index() {
  return (
    <div className="bg-[#E7ECEF] ">
      <div className="h-screen scale-95 rounded-md ">
        <Head>
          <title>Social Club</title>
        </Head>

        {/* <Header /> */}
        {/* <BeforeAuthHeader /> */}

        {/* <div className=" grid  sm:gap-x-4 sm:gap-y-2 sm:grid-cols-1 sm:m-[0.5rem] ... md:gap-x-6 md:gap-y-4 md:grid-cols-2 md:m-[0.75rem] ... lg:gap-x-2 lg:gap-y-4 lg:grid-cols-[300px_1fr_300px] lg:m-[rem]"> */}
{/* 
        <div className=" grid lg:grid-cols-[300px_1fr]">
          <Sidebar /> */}
          <HomePage/>
          {/* <div> */}
          {/* <Profile /> */}
          {/* <div className=" grid lg:grid-cols-[300px_1fr_300px]">
            <div></div>
            <FindMatch />
            <div></div> */}
          {/* <EventBox/> */}
          {/* </div> */}

            {/* <Notification />
            <QrCode /> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}