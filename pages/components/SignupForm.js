import React from "react";
import { useState } from 'react'
import axios from "axios";
import SuccessSignUp from './SuccessSignUp'
import { useRouter } from 'next/router';
import LoginForm from './LoginForm'
import Link from "next/link";
import $ from 'jquery';
import { useEffect } from "react";
import Image from "next/image";
import signup from './images/signup.png'

const backendUrl = "http://project-final-401.herokuapp.com";
const signupUrl = backendUrl + `/accounts/customuser/create-user/`;
const tokenUrl = backendUrl + `/api/token/`;
export default function SignupForm() {
  const [token, setToken] = useState("");
  const [data, dataList] = useState({})
  const [creads, setCreads] = useState({ username: "", password: "" })
  const [showSuccess, setshowSuccess] = useState(false)
  const [error, setError] = useState(false);
  const router = useRouter()
  function createAccountHan(e) {
    e.preventDefault();
    let userAccount = {
      first_name: e.target.firstname.value,
      last_name: e.target.lastname.value,
      username: e.target.username.value,
      gender: e.target.gender.value,
      email: e.target.email.value,
      phonenumber: e.target.phone.value,
      password: e.target.password.value,
      interests: $('#select-intrest').val()
    }
    async function addAccountApi() {
      console.log('user acc ', userAccount)
      await axios.post(signupUrl, userAccount)
      setcreadets(userAccount)
    }
    function setcreadets(user) {
      console.log('userdata ', user)
      setshowSuccess(true)
      localStorage.setItem("Username", JSON.stringify(user.username));
      setTimeout(() => {
        router.push({
          pathname: '/components/LoginForm',         
        });
      }, 2000);
    }
    addAccountApi()
  }
  return (
    <div className=" bg-[#E7ECEF] [w-100%] grid grid-cols-[900px_1fr]  h-screen rounded-md">
      {/* open={sign} onClose={onCloseModal} */}
      <div className="object-cover h-[100%] w-[80%] ...">
      <Image src={signup} class=""></Image>
      </div>
      
        <div className="  rounded-[10px] px-2 pt-7 pb-8 bg-[#E7ECEF] shadow-md  mx-auto sm:px-10 rounded-b-md  ">
          
          <div class=" p-12 bg-[#ececec] sm:w-2/12 md:w-1/4 lg:w-6/12">
          
            <form onSubmit={createAccountHan} method="POST">
              <div class="flex justify-between gap-3">
                <span class="w-[27rem]">
                  <label
                    for="firstname"
                    class="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Firstname
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="John"
                    autocomplete="given-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-300 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
                <span class="w-[27rem]">
                  <label
                    for="lastname"
                    class="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Lastname
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Doe"
                    autocomplete="family-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-300 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
                <span >
                  <label class="block text-xs font-semibold  text-gray-600 uppercase" for="gender">Gender</label>
                  <select id="gender" name="gender" class="block text-xs font-semibold text-gray-600 bg-gray-300 mt-2 h-12 w-48 uppercase">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </span>
               
                             
               
              </div>
              <label
                    htmlFor="username"
                    class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                  >
                    username
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="John190"
                    autocomplete="given-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-300 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
              <label
                for="email"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john.doe@company.com"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-300 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label for="phone" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-300 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              // pattern="[0-9]{3}[0-9]{2}[0-9]{3}"
              />
              <label
                for="password"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-300 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
             
              <label
                for="Intrest"
                name='intrest'
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Intrest
              <br/> <p className='text-[#bd4980]'>*select one or more</p> 
              </label>
              <select name='intrest' id='select-intrest' class="block w-full p-3 mt-2 text-gray-700 bg-gray-300 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" width={300} style={{ width: "350px" }} size="8" multiple>
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
             
              <button
                type="submit"
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-[#5b55a1] shadow-lg focus:outline-none hover:bg-[#514B9B] hover:shadow-none"
              >
                Sign up
              </button>
              <Link href='/components/LoginForm'>
                <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                  Already registered?
                </p>
              </Link>
              {error && (
                <div>
                  <p className="text-red-700">*Error in creads</p>
                </div>
              )}
            </form>
          </div>
        </div>
      
      {showSuccess && <SuccessSignUp />}
    </div>
  );
}