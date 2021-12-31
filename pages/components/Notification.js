import React from "react";
import green from "./images/Normal.png";
import Image from "next/image";

export default function Notification() {
  return (
    <div>
      <div class="p-4 w-80 ">
        <div class="p-8 bg-white rounded-[16.84px] shadow-md">
          <h2 class="text-xl font-bold text-[#274C77] mb-5">Notification</h2>
          <div>
            <Image src={green} />ss
          </div>
          <div>
            <Image src={green} />
          </div>
          <div>
            <Image src={green} />
          </div>
        </div>
      </div>
    </div>
  );
}
