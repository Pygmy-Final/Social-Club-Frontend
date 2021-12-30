import React from "react";
import Header from "./Header";

import EventForm from "./EventForm";

import Image from "next/image";
import lustration from "./images/Illustrations.png";

export default function HomePage() {
  return (
    <div>
      <main className="">
        <div className="relative h-32 w-32 ...">
          <h1 className="ml-36 absolute inset-x-0 bottom-0 h-16 ...">
            nulla, autem cum fugiat assumenda sequi
          </h1>
         
        </div>

        <button
          class="px-6 py-2 text-white bg-[#503E9D] rounded-full"
          type="button"
        >
          Sign up
        </button>
        <div className="float-right ...">
          <Image src={lustration} width={538} height={453} />
        </div>
        {/* <EventForm/> */}
      </main>
    </div>
  );
}
