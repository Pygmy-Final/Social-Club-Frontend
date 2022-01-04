import logo from "./images/logo.png";
import Image from "next/image";
import React, { useState } from "react";
import logout from "./images/logout.png";
import { useEffect } from "react";
import Link from "next/link";

const BeforeAuthHeader = () => {
  const [urname, setUserName] = useState("");
  let currentDate = new Date();
  const isNone = () => {
    if (localStorage.getItem("Creads") == null) {
      // JSON.stringify(localStorage.setItem(''));
      console.log("Empty");
    }
    let username = JSON.parse(localStorage.getItem("Creads"));
    setUserName(username);
  };

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const getDayName = (dateStr, locale) => {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth();
  let cYear = currentDate.getFullYear();
  let dateStr = `${cMonth + 1}/${cDay}/${cYear}`;
  let day = getDayName(dateStr, "us-en");

  let fullDate = `${day}, ${cDay} ${monthNames[cMonth]}, ${cYear}`;

  setInterval(myTimer, 1000);

  function myTimer() {
    const date = new Date();
    // return date.toLocaleTimeString();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
  }

  // let username = "Qamar";
  const greeting = () => {
    let myDate = new Date();
    let hrs = myDate.getHours();

    let greet;

    if (hrs < 12) greet = "Good Morning";
    else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
    else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

    document.getElementById("lblGreetings").innerHTML =
      greet + "<b>" + ` ${urname}` + "</b>";
  };
  useEffect(() => {
    greeting();
    isNone();
  });

  return (
    // <header className=" rounded-l-[16.84px] rounded-t-[16.84px] bg-[#31317e] h-14 z-10 relative ... ">

    <div className="">
      <nav className="flex flex-wrap items-center justify-between p-2 bg-teal bg-[#F8F8FB]  rounded-[16.84px]  shadow-md ...">
        <div className="flex items-center mr-6 text-white flex-no-shrink">
          <Image
            className="w-8 h-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            src={logo}
          />
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          <span className="font-semibold text-xl tracking-tight text-[#1E2A3D]">
            Social Club
          </span>
        </div>

        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              id="demo"
              className="block mt-4 text-[#516F91] lg:inline-block text-base lg:mt-0 text-teal-lighter hover:text-[#503E9D] mr-4"
            >
              {myTimer}
            </a>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter text-[#516F91] text-base hover:text-[#503E9D] mr-4">
              {fullDate}
            </a>
          </div>

          <div>
            <a
              id="lblGreetings"
              className="inline-block text-md px-0 py-2 leading-none mr-4 text-[#1E2A3D]"
            ></a>
            <img
              className="inline-block mr-[2rem] rounded-full"
              src="https://www.w3schools.com/howto/img_avatar.png"
              width={30}
              height={30}
              alt="Avatar"
            />
            <Link href="/components/LoginForm">
             
                <svg
                  class="inline-block cursor-pointer h-7 text-[#1E2A3D] mr-16 lg:mt-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
            
            </Link>
          </div>
        </div>
      </nav>
    </div>

    /* // </header> */
  );
};

export default BeforeAuthHeader;
