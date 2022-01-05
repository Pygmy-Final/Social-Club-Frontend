import React from "react";
import Image from "next/image";
import Link from "next/link";
import lustration from "./images/Illustrations.png";
import logo from "./images/logo.png";

export default function HomePage() {


  return (
    <div className="h-[47rem] mb-10 bg-[#e7ecef] overflow-hidden border-2 drop-shadow rounded-[3rem]  ">
      <div class="py-12 md:px-0 sm:px-14 px-6  ...">
        <div class="sm:flex items-center ">
          <div class="md:px-10 sm:px-5  ">
            <div className="grid grid-cols-[180px_1fr] mt-40">
              <svg
                className="m-auto ml-8 -mt-12 rotate-180"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                id="blobSvg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(120, 31, 204)" }}
                    ></stop>
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(251, 109, 58)" }}
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  id="blob"
                  d="M471.5,286Q470,322,459.5,358Q449,394,394.5,383.5Q340,373,306.5,347.5Q273,322,261.5,324Q250,326,235.5,333Q221,340,215,323Q209,306,164,325.5Q119,345,106,323Q93,301,114,275.5Q135,250,131,230Q127,210,110.5,173.5Q94,137,130,136Q166,135,192,144Q218,153,234,151Q250,149,286,89Q322,29,326,84.5Q330,140,334.5,163Q339,186,369.5,193.5Q400,201,436.5,225.5Q473,250,471.5,286Z"
                  fill="url(#gradient)"
                ></path>
              </svg>
              <h1 className="text-[60px] mb-12 text-gray-800 font-sans font-semibold">Social Club</h1>
            </div>
            <h1 class="text-gray-800 font-bold text-[60px] -mt-8 mb-2 ml-20">
              {/* long established */}
            </h1>
            <p
              class="text-gray-700 mb-8 text-left text-[27px] ml-20"
              style={{ maxWidth: "600px" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div class="flex justify-between">
              <span class="font-thin text-sm visible ...">
                {" "}
                <Link href='./components/SignupForm'>
                <button
                  class=" mr-4 ml-[25rem] text-[20px] text-white hover:text-black p-4 px-7 bg-gradient-to-r rounded-md from-[#514B9B] to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                  type="button"
                >
                  Sign up
                </button>
                </Link>
                <Link href='./components/LoginForm'>
                <button

                  class=" text-[20px] text-white hover:text-black p-4 px-7 bg-gradient-to-r rounded-md from-[#514B9B] to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                  type="button"
                >
                  Log in
                
                </button>
                </Link>
              </span>
            </div>
          </div>
          <div className="w-[54.4%] absolute top-[0.1rem] right-0 h-[40rem] bg-cover">
            <Image className="rounded-[3rem]" src={lustration} />
          </div>
        </div>
      </div>
      
    </div>
  );
}
