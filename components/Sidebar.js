import React from "react";
import Link from "next/link";
import Addevent from './images/Addevent.png'
import Image from "next/image";

export default function Sidebar() {
  return (
    <div>
      <div class="flex flex-wrap bg-[#E7ECEF] w-full  mt-32 md:mt-16">
        <div class="w-64 bg-[#E7ECEF] rounded p-0 ">
          {/* <div class="flex items-center space-x-4 p-2 mb-5">
            <img class="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta"/>
            <div>
                <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">James Bhatta</h4>
                <span class="text-sm tracking-wide flex items-center space-x-1">
                    <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg><span class="text-gray-600">Verified</span>
                </span>
            </div>
        </div> */}
          <ul class="space-y-2 text-sm">
            <li>
            <Link href="">
              <a
                
                className="flex items-center space-x-3 text-white p-4  font-medium hover:bg[#503E9D] bg-[#503E9D] focus:shadow-outline rounded-r-[16.84px]"
              >
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
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                  </svg>
                </span>
                <span>Find Match</span>
              </a>
            </Link>
            </li>
            <li>
            <Link href="/components/">
              <a
                
                class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-[#503E9D] focus:bg-[##503E9D] focus:shadow-outline"
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
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                </span>
                <span>Followers</span>
              </a>
              </Link>
            </li>
            <li>
            <Link href="#">
              <a
                href="#"
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
                <div class="p-2  mr-4 flex flex-wrap bg-[#E7ECEF] w-full h-[300px]   mt-32 md:mt-16">
                  <div class="p-8 bg-[#503E9D] rounded-[32px] shadow-md ">
                    <h2 class="text-xl  text-white">Feeling inspiration?</h2>
                    <p class="text-white mt-3 mb-3">
                      Create Your Event Now
                    </p>
                    <a href="/components/test">
                    <button
                      class="p-2  text-white bg-[#FB6D3A] w-[66px] h-[36] rounded-full"
                      type="button"
                    >
                     start
                    </button>
                    </a>
                    <Image className="object-none object-bottom rounded-full" src={Addevent}/>
                  </div>
                </div>
              </span>
              {/* </a> */}
            </li>
          </ul>
        </div>
        <div class="w-9/12">
          <div class="p-4 text-gray-500">Content here...</div>
        </div>
      </div>
    </div>
  );
}


























// import React from 'react'
// import homeImage from './images/homeIcon.png'
// import friendImage from './images/friendIcon.png'
// import findmatch from './images/findmatch.png'
// import profileImage from './images/user.png'
// import Image from "next/image";
// import Link from 'next/link';






// export default function Sidebar() {


//     return (
//         <nav className='space-y-6 shadow-sm mt-7 h-170 w-80'>
//             <ul >
//                 <li className=' hover:bg-[#503E9D] mr-6 w-[266px] h-[52px] rounded-r-[16.84px]'>
//                     <Link href="/">
//                         <a>
//                             <span className='flex pt-4 pl-7'>
//                                 <Image className='pr-4 hover:m-10' src={homeImage} width={25.26} height={24.71} /><p className='pl-3'>Disover</p>
//                             </span>
//                         </a>
//                     </Link>

//                 </li>


//                 <li className=' hover:bg-[#503E9D] mr-6 w-[266px] h-[52px] rounded-r-[16.84px]'>
//                     <Link href="/components/test">
//                         <a class="text-black hover:text-blue-800">
//                             <span className='flex pt-4 pl-7'>
//                                 <Image className='pr-4 hover:m-10' src={findmatch} width={25.26} height={24.71} /><p className='pl-3'>Find Match</p>
//                             </span>
//                         </a>
//                     </Link>
//                 </li>
//                 <li className=' hover:bg-[#503E9D] mr-6 w-[266px] h-[52px] rounded-r-[16.84px]'>
//                     <Link href="/components/FindMatch">
//                         <a class="text-black hover:text-blue-800 " >
//                             <span className='flex pt-4 pl-7'>
//                                 <Image className='pr-4 hover:m-10' src={friendImage} width={25.26} height={24.71} /><p className='pl-3'>Add Friends</p>
//                             </span>
//                         </a>
//                     </Link>
//                 </li>

//                 <li className='hover:bg-[#503E9D] mr-6 w-[266px] h-[52px] rounded-r-[16.84px]' >
//                     <Link href="/components/Profile">
//                         <a class="text-black hover:text-blue-800 " >
//                             <span className='flex pt-4 pl-7'>
//                                 <Image className='pr-4 hover:m-10' src={profileImage} width={25.26} height={24.71} /><p className='pl-3'>Profile</p>
//                             </span>
//                         </a>
//                     </Link>
//                 </li>
//             </ul>
//             <div class=" ml-4  rounded-r-[16.84px] rounded-l-[16.84px] shadow-md bg-[#5543A5] w-[250px] h-[310px]">
//                 <div class="p-8 ">
//                     <h2 class="text-l font-bold text-white">Feeling inspiration?</h2>
//                     <p class="text-white text-sm pt-2">Create Your Event Now</p>
//                     <button className='w-[66px] h-[36] float-left bg-[#FB6D3A] text-white rounded-l-[8px] rounded-r-[8px] ml-2 mt-4'>start</button>
//                     </div>
//                     <div className='flex mt-2'>
//                     <p className='bg-[#5543A5] text-[#5543A5] ml-8'>sadas</p>
//                     <Image src={Addevent} className='rounded-r-[12px] '></Image>
//                     </div>
                
//             </div>
//         </nav>
//     )
// }
