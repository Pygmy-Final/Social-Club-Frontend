import React from "react";
import Image from "next/image";
import dance from "./images/dance.png";
import glassy from "./images/glassy.png";
import avatar from "./images/avatar.png";
import axios from "axios";
import { useEffect, useState } from "react";
//  to test this EventBox in index html use this 👇🏻
{
  /* <div className=' grid  sm:m-7 md:m-8 lg:m-10 sm:gap-x-4 sm:gap-y-2 sm:grid-cols-1 sm:m-[0.5rem] ... md:gap-x-6 md:gap-y-4 md:grid-cols-2 md:m-[0.75rem] ... lg:gap-x-2 lg:gap-y-4 lg:grid-cols-3 lg:m-[1rem]'>
<EventBox />
<EventBox />
<EventBox />
<EventBox />
<EventBox />
<EventBox />
</div> */
}

const EventBox = () => {
  const [event, setEvent] = useState("");
  const [eventList, setEventList] = useState([]);
  const [tokendb, setTokendb] = useState("");

  const allData = () => {
    const username = JSON.parse(localStorage.getItem("Creads"));
    const backendUrl = "http://project-final-401.herokuapp.com";
    const eventUrl = backendUrl + "/events/event/";
    setEvent(eventUrl);

    const token = JSON.parse(localStorage.getItem("Token"));
    setTokendb(token);
  };

  useEffect(() => {
    allData();
    eventData();
  }, []);

  const eventData = async () => {
    const config = { headers: { Authorization: "Bearer " + tokendb } };

    await axios
      .get("http://project-final-401.herokuapp.com/events/event/", config)
      .then((data) => {
        setEventList(data.data);
        console.log("data", data.data);
      });
  };

  eventData();

  return (
    <div className="inline-block flex-col divide-y h-[47rem] ">
      <h1 className="mt-10 mb-8 ml-4 text-[#1E2A3D] text-[24px]">
        <b>Feature Event</b>
      </h1>
      <div className="grid grid-cols-[450px_450px] ">
        {eventList.slice(0, 4).map((value) => {
          return (
            <div>
              <div className="transition delay-50 duration-2000 ease-in-out xsm:mb-4 xsm:mx-4 md:mx-3 lg:mx-2  inline-block hover:drop-shadow-[0.3rem_0.3rem_0.3rem_rgba(0,0,0,0.25)]">
                <div className="relative inline-block  rounded-[3rem]">
                  <div className="inline-block drop-shadow-[0_0.9rem_0.3rem_rgba(0,0,0,0.25)]">
                    <Image
                      className="absolute inline-block  rounded-[3rem] "
                      src={dance}
                      alt="Dance picture"
                    />
                  </div>
                  <div className="absolute inline-block top-0 left-0  rounded-[3rem]">
                    <Image
                      className="inline-block rounded-[3rem]"
                      src={glassy}
                      alt="glassy picture"
                    />
                    <div className="absolute inline-block w-10 rounded-full top-5 left-5 ">
                      <Image
                        className="rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="h-2 max-h-full absolute max-w-[50%] top-[1.7rem] left-[5rem] translate-10 ...">
                      <h3 className="font-bold xsm:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-white ...">
                        {value.EventCreator.username}
                      </h3>
                    </div>
                    <div className="">
                      <h3 className="absolute top-[1rem] right-[1rem] xsm:text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] rounded-full bg-[#FB6D3A] p-1 px-4 text-white font-semibold">
                        {value.EventLocation}
                        {/* {value.EventStartTime} */}
                      </h3>
                    </div>

                    <div>
                      <div className="mx-5 rounded-[1.5rem] absolute h-[4rem] w-[21rem] bg-blue-200 bg-opacity-10   bottom-[2rem]">
                        <p className="absolute mx-4 text-left text-white bottom-[0.5rem] xsm:text-[0.5rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] font-semibold  ">
                          {value.EventDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EventBox;
