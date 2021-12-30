import React from "react";
import Header from "./Header";

import EventForm from "./EventForm";

import Image from "next/image";
import lustration from "./images/Illustrations.png";
import DoodleDots from "./images/DoodleDots.png";


export default function HomePage() {
  return (
    <div className="h-auto mt-32 md:mt-0 ">
      <div class="py-12 md:px-0 sm:px-14 px-6  ...">
        <div class="sm:flex items-center ">
          <div class="md:px-10 sm:px-5  ">
            <h1 class="text-gray-800 font-bold text-2xl my-2">
              long established
            </h1>
            <p class="text-gray-700 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div class="flex justify-between mb-2">
              <span class="font-thin text-sm visible ...">
                {" "}
                <button
                  class="px-6 py-2 text-white bg-[#503E9D] rounded-full"
                  type="button"
                >
                  Sign up
                </button>
              </span>
            </div>
          </div>
          <div>
            <Image
              class="bg-cover "
              src={lustration}
              // width={1000}
              // height={800}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
