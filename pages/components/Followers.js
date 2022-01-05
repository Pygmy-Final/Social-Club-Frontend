import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Followers() {
  const [userFollowerUrl, setUserFollowerUrl] = useState([]);
 
  const [tokendb, setTokendb] = useState("");
  const [userFollower, setUserFollower] = useState([]);



  const allData = () => {
    const backendUrl = "http://project-final-401.herokuapp.com";
    const followListUrl = backendUrl + "/accounts/customuser/user-follow/";
    setUserFollowerUrl(followListUrl);
    const token = JSON.parse(localStorage.getItem("Token"));
    setTokendb(token);
  };

  useEffect(() => {
    allData();
    followData();
    followData();
    
  }, []);
  

  const followData = async () => {
    const config = { headers: { Authorization: "Bearer " + tokendb } };

    await axios
      .get(
        "https://project-final-401.herokuapp.com/accounts/customuser/user-follow/",
        config
      )
      .then((data) => {
        setUserFollower(data.data);
        
      });
  };

  
  followData();

  
  return (
    <>
      <div className="flex mt-10 flex-col overflow-auto divide-y h-[40rem] dark:divide-gray-200/5  ">
        <div class="bg-white p-8 rounded-md w-full">
          <div class=" flex items-center justify-between pb-6">
            <h1 className="text-[#15263a] text-lg">
              <b>Followers List</b>
            </h1>
           
          </div>
          <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-[#503E9D] text-left text-xs font-semibold text-[#F8F8FB] uppercase tracking-wider">
                        Name
                      </th>

                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-[#503E9D] text-left text-xs font-semibold text-[#F8F8FB] uppercase tracking-wider">
                        Followed Date
                      </th>
                    </tr>
                  </thead>

                  {userFollower.map((value) => {
                    return (
                      <tbody>
                        <tr>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 w-10 h-10">
                                <img
                                  class="w-full h-full rounded-full"
                                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                  alt=""
                                />
                                
                              </div>
                              <div class="ml-3">
                                <p class="text-[#1E2A3D] text-base whitespace-no-wrap">
                                  {value.to_user.first_name}
                                  {value.to_user.last_name}
                                  
                                  <p className='text-sm text-[#1E2A3D]'>@{value.username}</p>
                                  
                                </p>
                              </div>
                            </div>
                          </td>

                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">
                                {value.timestamp[0] +
                                  value.timestamp[1] +
                                  value.timestamp[2] +
                                  value.timestamp[3] +
                                  value.timestamp[4] +
                                  value.timestamp[5] +
                                  value.timestamp[6] +
                                  value.timestamp[7] +
                                  value.timestamp[8] +
                                  value.timestamp[9]}
                              </span>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
