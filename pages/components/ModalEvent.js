import { useState } from "react";
import { useEffect } from "react";
import ChatSideBox from "./ChatSideBox";
import $ from "jquery";

export default function ModalEvent(props) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    $("#bigBoxDiv").fadeIn(1000);
  });

  const closeHandler = async () => {
    $("#bigBoxDiv").fadeToggle(1000);
    $("#fademodal").fadeToggle(1000);
    
    setTimeout(() => {
      setOpen(false);
      props.closeHandler()
    }, 1200);
  };

  return (
    open && (
      <div id="fademodal">
        <div  className="absolute top-0 left-0 z-30 w-screen h-screen bg-gray-200 opacity-75"></div>
        <div
          id="bigBoxDiv"
          className=" inline-block absolute top-[5.3rem] left-[36.3rem] m-auto justify-center opacity-100 justify-items-center h-[10rem] w-[40.2rem] rounded-[1.5rem] bg-white z-50"
          style={{ display: "none" }}
        >
          <div class="py-12 absolute left-0 top-0 p-20 bg-[#F8F8FB] rounded-md  ">
            <h2 class="text-2xl  font-bold text-[#1E2A3D]">Create Event</h2>
            <button onClick={closeHandler}>X</button>
            <div class="mt-8 max-w-md">
              <div class="grid grid-cols-1 gap-6">
                <label class="block">
                  <span class="text-gray-700">Email address</span>
                  <input
                    type="email"
                    class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                    placeholder="john@example.com"
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">Event Name</span>
                  <input
                    type="text"
                    class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                    placeholder=""
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">Event Location</span>
                  <input
                    type="text"
                    class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                    placeholder=""
                  />
                </label>

                <label class="block">
                  <span class="text-gray-700">When is your event?</span>
                  <input
                    type="datetime-local"
                    class="
                    mt-1
                    text-[#1E2A3D]
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">What type of event is it?</span>
                  <select
                    class="
                    block
                    w-full
                    mt-1
                    text-[#1E2A3D]
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  >
                    <option>Corporate event</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Other</option>
                  </select>
                </label>
                <label class="block">
                  <span class="text-gray-700">Additional details</span>
                  <textarea
                    class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                    rows="3"
                  ></textarea>
                </label>
                <div class="block">
                  <div class="mt-2">
                    <div>
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          class="
                          rounded
                          bg-gray-200
                          border-transparent
                          focus:border-transparent focus:bg-gray-200
                          text-gray-700
                          focus:ring-1 focus:ring-offset-2 focus:ring-gray-500
                        "
                        />
                        <span class="ml-2 text-[#1E2A3D]">
                          Email me news and special offers{" "}
                        </span>
                        <div className='grid grid-cols-2 gap-12'>


                        <button onClick={closeHandler}
                          class="px-10 py-2 m-auto  text-white bg-[#e95e34] hover:bg-green-700 ... rounded-full "
                          type="button"
                        >
                          Cancel
                        </button>
                        <button
                          class="px-10 py-2 m-auto text-white bg-[#4CAF50] hover:bg-green-700 ... rounded-full "
                          type="button"
                        >
                          Submit
                        </button>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
