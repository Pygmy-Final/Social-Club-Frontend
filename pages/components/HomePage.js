import Modal from "react-responsive-modal";
import Image from "next/image";
import lustration from "./images/Illustrations.png";
import React, { useState } from "react";
import logo from "./images/logo.png";

export default function HomePage() {
  const [login, setLogin] = useState(false)
  const [sign, setSign] = useState(false)


  const onOpenModal = (e) => {
    e.preventDefault()
    setSign(true);
  };

  const onOpenModalLogin = () => {
    setLogin(true);
  };

  const onCloseModal = () => {
    setSign(false);
  };

  const onCloseModalclose = () => {
    setLogin(false);
  };

  
  return (
    <div className="h-[47rem] mb-10 bg-[#e7ecef] overflow-hidden border-2 drop-shadow rounded-[3rem]  ">
      <div class="py-12 md:px-0 sm:px-14 px-6  ...">
        <div class="sm:flex items-center ">
          <div class="md:px-10 sm:px-5  ">
            <div className="grid grid-cols-[180px_1fr] mt-40">
              <svg
                className="m-auto ml-8 -mt-12 rotate-180"
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                id="blobSvg"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(120, 31, 204)" }}
                    ></stop>
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(251, 109, 58)" }}
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  id="blob"
                  d="M471.5,286Q470,322,459.5,358Q449,394,394.5,383.5Q340,373,306.5,347.5Q273,322,261.5,324Q250,326,235.5,333Q221,340,215,323Q209,306,164,325.5Q119,345,106,323Q93,301,114,275.5Q135,250,131,230Q127,210,110.5,173.5Q94,137,130,136Q166,135,192,144Q218,153,234,151Q250,149,286,89Q322,29,326,84.5Q330,140,334.5,163Q339,186,369.5,193.5Q400,201,436.5,225.5Q473,250,471.5,286Z"
                  fill="url(#gradient)"
                ></path>
              </svg>
              <h1 className="text-[60px] mb-12 text-gray-800 font-sans font-semibold">Social Club</h1>
            </div>
            <h1 class="text-gray-800 font-bold text-[60px] -mt-8 mb-2 ml-20">
              {/* long established */}
            </h1>
            <p
              class="text-gray-700 mb-8 text-left text-[27px] ml-20"
              style={{ maxWidth: "600px" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </p>
            <div class="flex justify-between">
              <span class="font-thin text-sm visible ...">
                {" "}
                <button
                  class=" mr-4 ml-[25rem] text-[20px] text-white hover:text-black p-4 px-7 bg-gradient-to-r rounded-md from-[#514B9B] to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                  type="button" 
                >
                  Sign up
                </button>
                <button
                  class=" text-[20px] text-white hover:text-black p-4 px-7 bg-gradient-to-r rounded-md from-[#514B9B] to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                  type="button" onClick={onOpenModalLogin}
                >
                  Log in
                </button>
              </span>
            </div>
          </div>
          <div className="w-[54.4%] absolute top-[0.1rem] right-0 h-[40rem] bg-cover">
            <Image className="rounded-[3rem]" src={lustration} />
          </div>
        </div>
      </div>
      <Modal open={login} onClose={onCloseModalclose}>

        <div class="animate-pulse min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
          <span class="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">Sign in Form</span>
          <div class="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
            <form action="">
              <label for="" class="block">Username or Email</label>
              <input type="Email" class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="Username or Email" />
              <label for="" class="block">Password</label>
              <input type="password" class="border w-full h-10 px-3 mb-5 rounded-md" placeholder="password" />
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="text-sm ml-3">
                    <label for="remember" class="font-medium text-gray-900">Remember me</label>
                  </div>
                </div>
                <button onClick={onOpenModal} class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">I dont have an account </button>
              </div>
              <button class="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded">Login</button>
              <button class="mt-5 bg-green-500 hover:bg-red-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded float-right">Cancel</button>
            </form>
          </div>
        </div>
      </Modal>
      <Modal open={sign} onClose={onCloseModal}>
        <div class="grid min-h-screen place-items-center">
          <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
            <h1 class="text-xl font-semibold">Hello there 👋, <span class="font-normal">please fill in your information to continue</span></h1>
            <form class="mt-6">
              <div class="flex justify-between gap-3">
                <span class="w-1/2">
                  <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                  <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>
                <span class="w-1/2">
                  <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                  <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>

                <span>
                  <label for="cars">Gender</label>
                  <select id="gender" name="gender">
                    <option value="volvo">Male</option>
                    <option value="saab">Female</option>
                  </select>
                </span>
              </div>

              
              <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
              <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
              
              <label for="phone">phone:</label>
              <input type="tel" id="phone" name="phone" placeholder="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />

              
              <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
              <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
              <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
              <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
              <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                Sign up
              </button>
              <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
