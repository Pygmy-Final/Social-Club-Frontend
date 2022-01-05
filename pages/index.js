import Head from "next/head";
import BeforeAuthHeader from "./components/BeforeAuthHeader";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import Followers from "./components/Followers";
import FindMatch from "./components/FindMatch";
import { useState } from "react";
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

        <HomePage />
      </div>
    </div>
  );
}
