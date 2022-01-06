import React from "react";
import Image from "next/image";
import sport from "./images/sport.jpg";
import sport2 from "./images/sport2.jpg";
import Vector from "./images/Vector.png";
import avatar from "./images/avatar.png";
import follow from "./images/follow.png";
import Stars from "./Stars.js";
import EditPro from "./EditPro.js";
import axios from "axios";
import { useState, useEffect } from "react";




function Profile() {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [eventList, setEventList] = useState([]);
  


  const openHandler = () => {
    setOpen(true);
  };
  const closeHandler = () => {
    setOpen(false);
  };

  
  useEffect(() => {
    
    profilePage();
    eventData();
  }, []);
  const profilePage = async () => {
    const config = { headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem("Token")) } };

    await axios.get(`https://project-final-401.herokuapp.com/accounts/customuser/user/?search=${JSON.parse(localStorage.getItem("Creads"))}`, config).then((data) => {
      setProfileData(data.data);
      // console.log("data", data.data);
    });
  };
  const eventData = async () => {
    const config = { headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem("Token")) } };

    await axios
      .get("https://project-final-401.herokuapp.com/events/event/", config)
      .then((data) => {
        setEventList(data.data);
        console.log("data", data.data);
      });
  };
  console.log("profileData", profileData);
  return (
    <>
      {!open &&
        profileData.map((value) => {
          return (
            <div className="inline-block flex-col overflow-auto divide-y  h-[46rem] dark:divide-gray-200/5 ">
              <div className="relative inline-block">
                <div className="">
                  <div className="h-[20rem]   ... ">
                    <Image
                      className="object-cover rounded-md"
                      src={sport2}
                      height={300}
                      width={950}
                    />
                  </div>
                </div>
                <div className="inline-block absolute xsm:top-[2.7rem] sm:top-[4.5rem] md:top-[5.4rem] lg:top-[7.4rem] xsm:left-[0.3rem] sm:left-[0.5rem] md:left-[0.7rem] lg:left-[1rem] xsm:w-[5rem] sm:w-[5rem] md:w-[6rem] lg:w-[8rem] mt-14 ">
                  <img
                    src={value.profilePicture}
                    height={150}
                    width={150}
                    className="rounded-full"
                  />
                </div>

                <h3
                  className="absolute font-bold xsm:top-[5rem] xsm:left-[6rem] sm:top-[6.6rem] md:top-[8rem] lg:top-[11rem] sm:left-[6rem] md:left-[8rem] lg:left-[10rem] xsm:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem]
 text-white mt-14 ..."
                >
                  {value.first_name}
                  {value.last_name}

                </h3>
                <h3 className="absolute xsm:top-[6rem] xsm:left-[6rem] sm:top-[7.7rem] sm:left-[6.5rem] md:top-[9.5rem] md:left-[8.5rem]  lg:top-[13rem] lg:left-[10.5rem] mt-14 -ml-2">
                  <Stars />
                </h3>
                <span>
                  <button
                    onClick={openHandler}
                    className="inline-block text-sm px-4 py-1 leading-none border rounded-[5px] text-white border-[#503E9D]  hover:text-teal hover:bg-[#312663] bg-[#503E9D] mt-4 ml-[50.5rem] lg:mt-0"
                  >
                    {/* <Image src={Vector} className="" /> */}
                    <svg
                      className="inline-block h-7"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812"></path>
                    </svg>
                    <span> Edit Profile</span>
                  </button>
                </span>
                <div class="">
                  <div class="overflow-hidden "></div>
                  <div className="mt-5">
                    <b className="text-[#15263a] text-lg"> Interest In</b>
                    <br />
                    {/* {value.interests} */}
                    {value.interests.map((val) => {
                      return <li className="text-[#182a3d]">* {val}</li>;
                    })}
                  </div>
                  <div className="mt-5">
                    <b className="text-[#15263a] text-lg"> My Events </b>
                    <br />

                    {eventList.map((val) => {
                      if (val.EventCreator.id == value.id) {
                        return (
                          <>
                            <br />

                            <b className="text-[#15263a]"> - {val.EventName}</b>
                            <div class="p-6 bg-white border-b opacity-80 rounded border-gray-200 mt-4 w-[59rem]">
                              <p><b>About Event : &nbsp;</b>
                                {val.EventDescription}</p>
                              <b />
                              <p><b>EventLocation:&nbsp;</b> {val.EventLocation}
                                <b /></p>
                              <b>Event Type: &nbsp;</b> {val.EventCategory}
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {open && <EditPro closeHandler={closeHandler} />}
    </>
  );
}
export default Profile;
