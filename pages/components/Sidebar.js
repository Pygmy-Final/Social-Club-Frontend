import React from "react";
import Link from "next/link";
import Addevent from "./images/Addevent.png";
import Image from "next/image";
import EventBox from "./EventBox";
import Profile from "./Profile";

export default function Sidebar() {
  return (
    <div className='inline-block'>
      <div class="flex flex-wrap bg-[#E7ECEF] w-full  mt-32 md:mt-16 inline-block">
        <div class="w-64 bg-[#E7ECEF] rounded p-0 ">
         
          <ul class="space-y-2 text-sm">
            <li>
              <Link href="./NavigationToEventBox">
                <a className="flex items-center space-x-3 text-white p-4  font-medium hover:bg[#503E9D] bg-[#503E9D] active:bg-[#503E9D] focus:shadow-outline rounded-r-[16.84px]">
                  <span class="text-white">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <span>Dashboard</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#503E9D] focus:bg-gray-200 focus:shadow-outline">
                  <span class="text-gray-600">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </span>
                  <span>Find Match</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="./components/NavigationToFollowers">
                <a class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#503E9D] focus:bg-[##503E9D] focus:shadow-outline">
                  <span class="text-gray-600">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      ></path>
                    </svg>
                  </span>
                  <span>Followers</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="./NavigationToProfile">
                <a
                  
                  class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#503E9D] focus:bg-gray-200 focus:shadow-outline"
                >
                  <span class="text-gray-600">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span>My profile</span>
                </a>
              </Link>
            </li>
            {/* <li>
              <a
                href="#"
                class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span class="text-gray-600">
                  <svg
                    class="h-5"
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
                </span>
                <span>Logout</span>
              </a>
            </li> */}
            <li>
              {/* <a
                href="#"
                class="flex items-center space-x-3 text-gray-700 p-0 mr-4 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              > */}
              <span>
                <div class="p-2  mr-4 flex flex-wrap bg-[#E7ECEF] w-full h-[100px]   mt-32 md:mt-10">
                  <div class=" bg-[#503E9D] rounded-[32px] shadow-md ">
                    <div className='px-8 pt-8'>
                    <h2 class="text-xl  text-white">Feeling inspiration?</h2>
                    <p class="text-white mt-3 mb-3">Create Your Event Now</p>
                    <a href="/components/test">
                      <button
                        class="p-2  text-white font-semibold text-base bg-[#FB6D3A] w-[66px] h-[36] rounded-full"
                        type="button"
                      >
                        start
                      </button>
                    </a>
                    </div>
                    <div >

                    <Image
                      className="rounded-[1.5rem] "
                      src={Addevent}
                      
                    />
                    </div>
                  </div>
                </div>
              </span>
              {/* </a> */}
            </li>
          </ul>
        </div>
        <div class="">
          <div class="p-4 text-gray-500">
              {/* <Profile/> */}
            {/* <div className=" grid  sm:m-7 md:m-8 lg:m-10 sm:gap-x-4 sm:gap-y-2 sm:grid-cols-1 sm:m-[0.5rem] ... md:gap-x-6 md:gap-y-4 md:grid-cols-2 md:m-[0.75rem] ... lg:gap-x-2 lg:gap-y-4 lg:grid-cols-2 lg:m-[1rem]">
              <EventBox />
              <EventBox />
              <EventBox /> */}
              {/* <EventBox />
              <EventBox /> */}
            {/* </div> */}
            {/* <EventBox /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
