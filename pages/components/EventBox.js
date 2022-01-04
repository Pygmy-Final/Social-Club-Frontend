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
// const backendUrl = "http://project-final-401.herokuapp.com";
// const eventUrl = backendUrl + `/events/event/`;
// const refreshUrl = backendUrl + "/api/token/refresh/";
// const userDataUrl = backendUrl +'accounts/customuser/user/'

const EventBox = () => {
  const [event, setEvent] = useState([]);
  const [AllEvents, setAllEvents] = useState([]);
  const [tokendb, setTokendb] = useState("");
  const [refreshdb, setRefreshdb] = useState("");
  const [usersData, setUserData] = useState([]);
  const [refreshurl, setRefreshUrl] = useState("");
  const [isE, setIsE] = useState(false);

  const allData = () => {
    const username = JSON.parse(localStorage.getItem("Creads"));
    const backendUrl = "http://project-final-401.herokuapp.com";
    const userDataUrl = backendUrl + "accounts/customuser/user/";
    setUserData(userDataUrl);
    const eventUrl = backendUrl + `/events/event/`;
    setEvent(eventUrl);
    const refreshUrl = backendUrl + "/api/token/refresh/";
    setRefreshUrl(refreshUrl);
    const token = JSON.parse(localStorage.getItem("Token"));
    setTokendb(token);
    const refresh = JSON.parse(localStorage.getItem("Refresh"));
    setRefreshdb(refresh);
  };
  useEffect(() => {
    allData();
    eventData();
    // eventData();

    // userData();
  }, []);

  const eventData = async () => {
  
    console.log('first',AllEvents)

    const config = { headers: { Authorization: "Bearer " + tokendb } };

      await axios.get(event, config).then((data) => {
        setAllEvents(data.data);
        
      console.log('second',AllEvents);

      })
    
   
      // setIsE(true)
    // }
    // catch (error) {
  //     const config = { headers: { Authorization: "Bearer " + refreshdb } };
     
      // console.log(error);

  //     await axios.post(refreshurl, config).then((data) => {
  //       console.log(data.data);
  //       localStorage.setItem("Token", JSON.stringify(data.data.access));
  //     });
  //   }
  // };

  // const userData = async () => {
  //   const config = { headers: { Authorization: "Bearer " + token } };
  //   await axios.get(userDataUrl, config).then((data) => {
  //     setUserData(data.data);
  //   });
  };

  console.log('third',AllEvents);

  return (
    <>
      {AllEvents.map((value) => {
        return (
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
                  <Image className="rounded-full" src={avatar} alt="avatar" />
                </div>
                <div className="h-2 max-h-full absolute max-w-[50%] top-[1.7rem] left-[5rem] translate-10 ...">
                  <h3 className="font-bold xsm:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-white ...">
                    {value.EventCreator}
                  </h3>
                </div>
                <div className="">
                  <h3 className="absolute top-[1rem] right-[1rem] xsm:text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] rounded-full bg-[#FB6D3A] p-1 px-4 text-white font-semibold">
                    {value.EventLocation}
                    {value.EventStartTime} 
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
         ); 
       })} 
    </>
  );
};
export default EventBox;
