import { useState } from "react";
import { useEffect } from "react";
import ChatSideBox from "./ChatSideBox";
import $ from "jquery";
import axios from "axios";

const backendUrl = "http://project-final-401.herokuapp.com";
const createEventUrl = backendUrl + "/events/event/";

export default function ModalEvent(props) {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [datas, dataList] = useState({});
  console.log(token)
  const [open, setOpen] = useState(true);
  useEffect(() => {
    $("#bigBoxDiv").fadeIn(1000);
  });
  const closeHandler = async () => {
    $("#bigBoxDiv").fadeToggle(1000);
    $("#fademodal").fadeToggle(1000);
    setTimeout(() => {
      setOpen(false);
      props.closeHandler();
    }, 1200);
  };
  const createEventName = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, eventname: e.target.value });
  };
  const createEventLocation = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, eventlocation: e.target.value });
  };
  const createEventdate = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, eventdate: e.target.value });
  };
  const createEventCategory = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, category: e.target.value });
  };
  const createEventDetails = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, eventdetails: e.target.value });
  };
  const submitHandler = async (e, data) => {
    e.preventDefault();
    const config = { headers: { Authorization: "Bearer " + token } };
    await axios.post(createEventUrl, {data:{
      EventName: datas.eventname,
        EventDescription: datas.eventdetails,
        EventLocation: datas.eventlocation,
        EventCategory: datas.category,
        EventStartTime: datas.eventdate,
    }}, 
    { headers: { Authorization: "Bearer " + token }});

    // await axios({
    //   method: 'post',
    //   url: createEventUrl,
    //   headers: { Authorization: "Bearer " + token },
      
    //     // EventName: datas.eventname,
    //     // EventDescription: datas.eventdetails,
    //     // EventLocation: datas.eventlocation,
    //     // EventCategory: datas.category,
    //     // EventStartTime: datas.eventdate,
    //      EventName: datas.eventname,
    //     EventDescription: datas.eventdetails,
    //     EventLocation: datas.eventlocation,
    //     EventCategory: datas.category,
    //     EventStartTime: datas.eventdate,
    //   // "interests"
    //   })
    // const datae = {
    //   EventName: datas.eventname,
    //   EventDescription: datas.eventdetails,
    //   EventLocation: datas.eventlocation,
    //   EventCategory: datas.category,
    //   EventStartTime: datas.eventdate,
    // };
    // await axios.post(createEventUrl, config);
  };
  console.log("59",token)

  console.log("datas ", datas);

  return (
    open && (
      <div id="fademodal">
        <div className="absolute top-0 left-0 z-30 w-screen h-screen bg-gray-200 opacity-75"></div>
        <div
          id="bigBoxDiv"
          className=" inline-block absolute top-[5.3rem] left-[36.3rem] m-auto justify-center opacity-100 justify-items-center h-[10rem] w-[40.2rem] rounded-[1.5rem] bg-white z-50"
          style={{ display: "none" }}
        >
          <div class="py-12 absolute left-0 top-0 p-20 bg-[#F8F8FB] rounded-md  ">
            <h2 class="text-2xl  font-bold text-[#1E2A3D]">Create Event</h2>
            <button className="float-right -mr-7 -mt-7" onClick={closeHandler}>
              <span class="text-black">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                </svg>
              </span>
            </button>
            <div class="mt-8 max-w-md">
              <div class="grid grid-cols-1 gap-6">
                <label class="block">
                  <span class="text-gray-700">Event Name</span>
                  <input
                    onChange={createEventName}
                    type="text"
                    name="eventname"
                    class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                    placeholder=""
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">Event Location</span>
                  <input
                    onChange={createEventLocation}
                    name="eventlocation"
                    type="text"
                    class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                    placeholder=""
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">When is your event?</span>
                  <input
                    onChange={createEventdate}
                    name="eventdate"
                    type="datetime-local"
                    class="
                    mt-1
                    text-[#1E2A3D]
                    block
                    w-full
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  />
                </label>
                <label class="block">
                  <span class="text-gray-700">What type of event is it?</span>
                  <select
                    onChange={createEventCategory}
                    name="category"
                    class="
                    block
                    w-full
                    mt-1
                    text-[#1E2A3D]
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                  >
                    <option>Reading</option>
                    <option>Cycling</option>
                    <option>Hiking</option>
                    <option>Drawing</option>
                    <option>Photography</option>
                    <option>Swimming</option>
                    <option>Sleeping</option>
                    <option>Sports</option>
                    <option>Gaming</option>
                  </select>
                </label>
                <label class="block">
                  <span class="text-gray-700">Event Details</span>
                  <textarea
                    onChange={createEventDetails}
                    name="eventdetails"
                    class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-300
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
                        <div className="grid grid-cols-2 gap-12">
                          <button
                            onClick={closeHandler}
                            class="px-10 py-2 m-auto text-white bg-red-400 hover:bg-red-700 ... rounded-full "
                            type="button"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={submitHandler}
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
