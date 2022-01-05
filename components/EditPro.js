import { useState } from "react";
import { useEffect } from "react";
import SuccessSignUp from './SuccessSignUp'

import $ from "jquery";
import axios from "axios";



// const EditProfileUrl = `http://project-final-401.herokuapp.com/accounts/customuser/${Ids}/`;

export default function EditPro(props) {
  const token = JSON.parse(localStorage.getItem("Token"));
  const [showSuccess, setshowSuccess] = useState(false)
  const Ids = JSON.parse(localStorage.getItem("MyID"));
  let ints = [];
  const [datas, dataList] = useState({});

  const [open, setOpen] = useState(true);
  useEffect(() => {
    $("#bigBoxDiv").fadeIn(1000);
  });
  const closeHandler = async () => {
    $("#bigBoxDiv").fadeToggle(1000);
    $("#fademodal").fadeToggle(1000);
    setTimeout(() => {
      setOpen(false);
        setshowSuccess(true)
      props.closeHandler();
    }, 1200);
  };
  const EditUserName = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, UserName: e.target.value });
  };
  const EditFirstName = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, FirstName: e.target.value });
  };
  const EditLastName = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, LastTime: e.target.value });
  };
  const EditEmail = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, Email: e.target.value });
  };
  const EditPassword = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, Password: e.target.value });
  };
  const EditGender = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, Gender: e.target.value });
  };
  const EditPhoneNumber = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, PhoneNumber: e.target.value });
  };
  const EditPP = (e) => {
    console.log(e.target.value);
    dataList({ ...datas, PPs: e.target.value });
  };
  const EditInterests = (e) => {
    let interests = e.target.value
    console.log(e.target.value);
    ints.push(interests);
    console.log(ints);
    dataList({...datas,ints:ints})
  };
  const submitHandler = async (e, data) => {
    e.preventDefault();
    const config = { headers: { Authorization: "Bearer " + token } };
    const api = axios.create({
      baseURL: "https://project-final-401.herokuapp.com",
    });
    api
      .put(
        `/accounts/customuser/${Ids}/`,
        {
          username: datas.UserName,
          first_name: datas.FirstName,
          last_name: datas.LastTime,
          email: datas.Email,
          password: datas.Password,
          gender: datas.Gender,
          phonenumber: datas.PhoneNumber,
          profilePicture: datas.PPs,
          interests: datas.ints,
        },
        config
      )
      .then((res) => {
        console.log(res);
        setshowSuccess(true)
        setOpen(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };
//   console.log("ints ", ints);
  console.log("data", datas);
  return (
    <>
      {open && (
        <div id="fademodal">
          {/* { showSuccess && <SuccessSignUp successMessage='Event Created Successfully' word='Event' />} */}
          <div className="absolute left-0 z-30 w-screen h-screen bg-gray-200 opacity-75 -top-5"></div>
          <div
            id="bigBoxDiv"
            className=" inline-block absolute top-[0.0rem] left-[36.3rem] m-auto justify-center opacity-100 justify-items-center h-[4rem] w-[28.2rem] rounded-[1.5rem] bg-white z-50"
          >
            <div class="py-12 absolute left-0 top-0 p-20   bg-[#F8F8FB] rounded-md  ">
              <h2 class="text-2xl  font-bold text-[#1E2A3D]">Edit Profile </h2>
              <button
                className="float-right -mr-7 -mt-7"
                onClick={closeHandler}
              >
                <span class="hover:bg-[#15263a]  text-[#15263a]">
                  <svg
                    class="h-5 "
                    xmlns="http://www.w3.org/2000/svg"
                    color='#15263a'
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
                  </svg>
                </span>
              </button>
              <div class="mt-8 max-w-md">
                <div class="grid grid-cols-1 gap-6">
                  <label class="block">
                    <span class="text-gray-700">Change Username</span>
                    <input
                      onChange={EditUserName}
                      type="text"
                      name="UserName"
                      class="
                    mt-1
                    block
                    w-full
                    
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                      placeholder=" New username "
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Change FirstName</span>
                    <input
                      onChange={EditFirstName}
                      name="FirstName"
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
                      placeholder=" New First name "
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Change Last name</span>
                    <input
                      onChange={EditLastName}
                      type="text"
                      name="LastName"
                      class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                      placeholder=" New Last name "
                    />
                  </label>
                 
                  <label class="block">
                    <span class="text-gray-700">Change Email</span>
                    <input
                      onChange={EditEmail}
                      type="text"
                      name="Email"
                      class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                      placeholder=" New Email "
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Change Password</span>
                    <input
                      onChange={EditPassword}
                      type="text"
                      name="Password"
                      class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                      placeholder=" New Password "
                    />
                  </label>{" "}

                  <label class="block">
                    <span class="text-gray-700">
                        Change Interests </span>

                    <select
                      name="category"
                      id="select-intrest"
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
                      onChange={EditInterests}
                      multiple
                    >
                      <option value="Reading">Reading</option>
                      <option value="Cycling">Cycling</option>
                      <option value="Hiking">Hiking</option>
                      <option value="Drawing">Drawing</option>
                      <option value="Photography">Photography</option>
                      <option value="Swimming">Swimming</option>
                      <option value="Sleeping">Sleeping</option>
                      <option value="Sports">Sports</option>
                      <option value="Gaming">Gaming</option>
                    </select>
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Change Gender</span>
                    <label
                      class=" mt-1
                      block
                      w-full
                      rounded-md
                      "
                      for="gender"
                    >
                 
                    </label>
                    <select
                      onChange={EditGender}
                      id="gender"
                      name="gender"
                      class="
                      rounded-md
                      px-5 py-1 bg-gray-300
                      border-transparent
                      focus:border-gray-500 focus:bg-white focus:ring-0
                      text-gray-500"
                      
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Change Phone Number</span>
                    <input
                      onChange={EditPhoneNumber}
                      type="tel"
                      name="PhoneNumber"
                      class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                      placeholder=" New Phone Number "
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700">Change Profile Image</span>
                    <input
                      onChange={EditPP}
                      type="text"
                      name="pp"
                      class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-300
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                      placeholder=" Profile Image Link "
                    />
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
      )}
    {!open && showSuccess && <SuccessSignUp successMessage='Changed Successfully' word='' />}

    </>
  );
}
