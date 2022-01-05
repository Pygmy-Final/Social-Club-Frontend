// import React from "react";
// import Image from "next/image";
// import sport from "./images/sport.jpg";
// import sport2 from "./images/sport2.jpg";
// import Vector from "./images/Vector.png";
// import avatar from "./images/avatar.png";
// import follow from "./images/follow.png";
// import Stars from "./Stars.js";
// import EditProfile from "./EditProfile.js";
// import axios from "axios";
// import { useState, useEffect } from "react";

// function Profile(props) {
//   const [profileurl, setProfileUrl] = useState("");
//   // const [eventurl, setEventUrl] = useState("");
//   const [profileData, setProfileData] = useState([]);
//   // const [refreshurl, setRefreshUrl] = useState("");
//   const [tokendb, setTokendb] = useState("");
//   // const [refreshdb, setRefreshdb] = useState("");

//   const allData = () => {
//     const username = JSON.parse(localStorage.getItem("Creads"));
//     const backendUrl = "http://project-final-401.herokuapp.com";
//     const profilelink =
//       backendUrl + `/accounts/customuser/user/?search=${username}`;
//     setProfileUrl(profilelink);
//     // const eventUrl = backendUrl + `/events/event/`;
//     // setEventUrl(eventUrl);
//     // const refreshUrl = backendUrl + "/api/token/refresh/";
//     // setRefreshUrl[refreshUrl];
//     const token = JSON.parse(localStorage.getItem("Token"));
//     setTokendb(token);
//     // const refresh = JSON.parse(localStorage.getItem("Refresh"));
//     // setRefreshdb(refresh);
//   };

//   // const [open, setOpen] = useState(false);
//   // const openHandler = () => {
//   //   setOpen(true);
//   // };
//   // const closeHandler = () => {
//   //   setShowModel(false);
//   // };

//   // console.log(token);

//   useEffect(() => {
//     allData();
//     profile();

//     // events();
//   }, []);
//   // const profile = async () => {
//   //   const config = { headers: { Authorization: "Bearer " + tokendb } };

//   //   await axios
//   //     .get(
//   //       profileurl,
//   //       config
//   //     )
//   //     .then((data) => {
//   //       setProfileData(data.data);
//   //       console.log(data)
//   //       console.log(data.data)

//   //     });
//   // };
//   const profile = async () => {
//     const config = { headers: { Authorization: "Bearer " + tokendb } };
//     try {
//       await axios.get(profileurl, config).then((data) => {
//         setProfileData(data.data);
//       });
//   }
// }
//   // profile()
//   // console.log(profileData);
//   // const [event, setEvent] = useState([]);

//   // // console.log(token);

//   // const events = async () => {
//   //   const config = { headers: { Authorization: "Bearer " + token } };
//   //   await axios.get(eventurl, config).then((data) => {
//   //     setEvent(data.data);
//   //   });
//   // };

//   return (
//     <>
//       {profileData?.map((value) => {
//          return (
//           <div className="inline-block flex-col overflow-auto divide-y  h-[46rem] dark:divide-gray-200/5 ">
//             <div className="relative inline-block">
//               <div className="">
//                 <div className="h-[20rem]   ... ">
//                   <Image
//                     className="object-cover rounded-md"
//                     src={sport2}
//                     height={300}
//                     width={950}
//                   />
//                 </div>
//               </div>
//               <div className="inline-block absolute xsm:top-[2.7rem] sm:top-[4.5rem] md:top-[5.4rem] lg:top-[7.4rem] xsm:left-[0.3rem] sm:left-[0.5rem] md:left-[0.7rem] lg:left-[1rem] xsm:w-[5rem] sm:w-[5rem] md:w-[6rem] lg:w-[8rem] mt-14 ">
//                 <Image
//                   src={avatar}
//                   height={150}
//                   width={150}
//                   className="rounded-full"
//                 />
//               </div>

//               <h3
//                 className="absolute font-bold xsm:top-[5rem] xsm:left-[6rem] sm:top-[6.6rem] md:top-[8rem] lg:top-[11rem] sm:left-[6rem] md:left-[8rem] lg:left-[10rem] xsm:text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem]
//  text-white mt-14 ..."
//               >
//                 {value.first_name}
//                 {value.last_name}
//               </h3>
//               <h3 className="absolute xsm:top-[6rem] xsm:left-[6rem] sm:top-[7.7rem] sm:left-[6.5rem] md:top-[9.5rem] md:left-[8.5rem]  lg:top-[13rem] lg:left-[10.5rem] mt-14 -ml-2">
//                 <Stars />
//               </h3>
//               <span>
//                 <button
//                   // onClick={openHandler}
//                   className="inline-block text-sm px-6 py-2 leading-none border rounded-[5px] text-white border-[#503E9D]  hover:text-teal hover:bg-[#312663] bg-[#503E9D] mt-4 ml-[50.5rem] lg:mt-0"
//                 >
//                   <Image src={Vector} className="" />
//                   <span> Edit Profile</span>
//                 </button>

//               </span>
//               <div class="">
//                 <div class="overflow-hidden ">
//                   {/* <b className="text-[#15263a]">About Me:</b>
//                 <div class="p-6 bg-white border-b opacity-80 rounded border-gray-200 mt-4 w-[59rem]">
//                   Lorem Ipsum is simply dummy text of the printing and typesetting
//                   industry. Lorem Ipsum has been the industry's standard dummy text
//                   ever since the 1500s, when an unknown printer took a galley of
//                   type and scrambled it to make a type specimen book.
//                 </div> */}
//                 </div>
//                 <div className="mt-5">
//                   <b className="text-[#15263a] text-lg"> Interest In</b>
//                   <br />

//                   {/* {value.interests.map((val)=>{
//                     return(
//                       // - {val},
//                       <li className='text-[#182a3d]'>- {val}</li>
//                     )
//                   })} */}
//                 </div>
//                 <div className="mt-5">
//                   <b className="text-[#15263a] text-lg"> My Events</b>
//                   <br />
//                   {/* {event.map((event) => {
//                     if (event.EventCreator == value.id) {
//                       return (
//                         <>
//                           <br />

//                           <b className="text-[#15263a]"> {event.EventName}</b>
//                           <div class="p-6 bg-white border-b opacity-80 rounded border-gray-200 mt-4 w-[59rem]">
//                             About Event :{event.EventDescription}
//                             <br />
//                             EventLocation: {event.EventLocation}
//                             <br />
//                             Event Type: {event.EventCategory}
//                           </div>
//                         </>
//                       );
//                     }
//                   })} */}
//                 </div>
//               </div>
//             </div>
//             {setOpen && <EditProfile closeHandler={closeHandler} />}
//           </div>
//          );
//        })}
//     </>
//   );
// }
// export default Profile;
import React from "react";
import Image from "next/image";
import sport from "./images/sport.jpg";
import sport2 from "./images/sport2.jpg";
import Vector from "./images/Vector.png";
import avatar from "./images/avatar.png";
import follow from "./images/follow.png";
import Stars from "./Stars.js";
import EditProfile from "./EditProfile.js";
import axios from "axios";
import { useState, useEffect } from "react";

const username = JSON.parse(localStorage.getItem("Creads"));
const backendUrl = "http://project-final-401.herokuapp.com";
const profileUrl = backendUrl + `/accounts/customuser/user/?search=${username}`;
const eventUrl = backendUrl + `/events/event/`;

function Profile(props) {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState([]);

  const [eventList, setEventList] = useState([]);

  const openHandler = () => {
    setOpen(true);
  };
  const closeHandler = () => {
    setShowModel(false);
  };

  const token = JSON.parse(localStorage.getItem("Token"));

  useEffect(() => {
    profilePage();
    eventData();
  }, []);
  const profilePage = async () => {
    const config = { headers: { Authorization: "Bearer " + token } };

    await axios.get(profileUrl, config).then((data) => {
      setProfileData(data.data);
      console.log('data',data.data)
    });
  };
  const eventData = async () => {
    const config = { headers: { Authorization: "Bearer " + token } };

    await axios
      .get("http://project-final-401.herokuapp.com/events/event/", config)
      .then((data) => {
        setEventList(data.data);
        console.log("data", data.data);
      });
  };
console.log('eventList',eventList)
  return (
    <>
      {profileData.map((value) => {
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
                <Image
                  src={avatar}
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
                  // onClick={openHandler}
                  className="inline-block text-sm px-6 py-2 leading-none border rounded-[5px] text-white border-[#503E9D]  hover:text-teal hover:bg-[#312663] bg-[#503E9D] mt-4 ml-[50.5rem] lg:mt-0"
                >
                  <Image src={Vector} className="" />
                  <span> Edit Profile</span>
                </button>
              </span>
              <div class="">
                <div class="overflow-hidden ">
                  {/* <b className="text-[#15263a]">About Me:</b>
                <div class="p-6 bg-white border-b opacity-80 rounded border-gray-200 mt-4 w-[59rem]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </div> */}
                </div>
                <div className="mt-5">
                  <b className="text-[#15263a] text-lg"> Interest In</b>
                  <br />
                  {/* {value.interests} */}
                    {value.interests.map((val)=>{
                     return(
                        
                       <li className='text-[#182a3d]'>* {val}</li>
                    )
                   })} 
                </div>
                <div className="mt-5">
                  <b className="text-[#15263a] text-lg"> My Events</b>
                  <br />
                  
                  {eventList.map((val) => {
                    if (val.EventCreator.id == value.id) {
                      return (
                        <>
                          <br />
                          

                          <b className="text-[#15263a]"> - {val.EventName}</b>
                          <div class="p-6 bg-white border-b opacity-80 rounded border-gray-200 mt-4 w-[59rem]">
                            About Event :{val.EventDescription}
                            <br />
                            EventLocation: {val.EventLocation}
                            <br />
                            Event Type: {val.EventCategory}
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            {/* {setOpen && <EditProfile closeHandler={closeHandler} />} */}
          </div>
        );
      })}
    </>
  );
}
export default Profile;
