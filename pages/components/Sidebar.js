import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import Addevent from "./images/Addevent.png";
import Image from "next/image";
import EventBox from "./EventBox";
import Profile from "./Profile";
import { useState, useRef } from "react";
import ModalEvent from './ModalEvent'
export default function Sidebar() {

  const [showModel, setShowModel] = useState(false);
  const submitHandler =(e)=>{
    e.preventDefault();
    setShowModel(true)
    // console.log("Hi")
  }
  

  const closeHandler=()=>{
    setShowModel(false)
  }
  const { asPath } = useRouter()
 
  return (
    <div className='inline-block '>
       <div class="flex flex-wrap bg-[#E7ECEF] w-full  mt-32 md:mt-16">
        <div class="w-64 bg-[#E7ECEF] rounded p-0 ">
         
          <ul class="space-y-2 text-sm">
            <li>
              <Link href="./NavigationToEventBox">
                <a className={'http://localhost:3000' + asPath === 'http://localhost:3000/components/NavigationToEventBox'? "flex items-center space-x-3 text-white p-4  font-medium hover:bg[#503E9D]  bg-[#503E9D] active:bg-[#503E9D] focus:shadow-outline rounded-r-[16.84px]": "flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#503E9D] focus:bg-gray-200 focus:shadow-outline"}>
                  <span class={'http://localhost:3000' + asPath === 'http://localhost:3000/components/NavigationToEventBox'?"text-white":"text-gray-600"}>
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
              <Link href="./NavigateToFindMatch">
                <a className={'http://localhost:3000' + asPath === 'http://localhost:3000/components/NavigateToFindMatch'? "flex items-center space-x-3 text-white p-4  font-medium hover:bg[#503E9D]  bg-[#503E9D] active:bg-[#503E9D] focus:shadow-outline rounded-r-[16.84px]": "flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#503E9D] focus:bg-gray-200 focus:shadow-outline"}>
                  <span class={'http://localhost:3000' + asPath === 'http://localhost:3000/components/NavigateToFindMatch'?"text-white":"text-gray-600"}>
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
              <Link href="./NavigateToChats">
                <a className={'http://localhost:3000' + asPath === 'http://localhost:3000/components/NavigateToChats' ? "flex items-center space-x-3 text-white p-4  font-medium hover:bg[#503E9D]  bg-[#503E9D] active:bg-[#503E9D] focus:shadow-outline rounded-r-[16.84px]": "flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#503E9D] focus:bg-gray-200 focus:shadow-outline"}>
                  <span class={'http://localhost:3000' + asPath === 'http://localhost:3000/components/NavigateToChats'?"text-white":"text-gray-600"}>
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
                  <span>Messages</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="./NavigationToFollowers">
                <a className={'http://localhost:3000' + asPath === 'http://localhost:3000/components/NavigationToFollowers' ? "flex items-center space-x-3 text-white p-4  font-medium hover:bg[#503E9D]  bg-[#503E9D] active:bg-[#503E9D] focus:shadow-outline rounded-r-[16.84px]": "flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#503E9D] focus:bg-gray-200 focus:shadow-outline"}>
                  <span class={'http://localhost:3000' + asPath === 'http://localhost:3000/components/NavigationToFollowers'?"text-white":"text-gray-600"}>
                  <svg 
                   class="h-6"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   >
							<path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
						</svg>
                  </span>
                  <span>Followers</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="./NavigationToProfile">
                <a
                 className={'http://localhost:3000' + asPath ==='http://localhost:3000/components/NavigationToProfile' ? "flex items-center space-x-3 text-white p-4  font-medium hover:bg[#503E9D]  bg-[#503E9D] active:bg-[#503E9D] focus:shadow-outline rounded-r-[16.84px]": "flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#503E9D] focus:bg-gray-200 focus:shadow-outline"}
                >
                  <span class={'http://localhost:3000' + asPath === 'http://localhost:3000/components/NavigationToProfile'?"text-white":"text-gray-600"}>
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
                        type="button" onClick={submitHandler}
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
      {showModel &&
        <ModalEvent closeHandler={closeHandler}/>
      }
    </div>
  );
}
