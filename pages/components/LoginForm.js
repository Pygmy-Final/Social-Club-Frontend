import Modal from "react-responsive-modal";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import signImage from "./images/signImage.png";

const backendUrl = "http://project-final-401.herokuapp.com";
const tokenUrl = backendUrl + `/api/token/`;

export default function LoginForm() {
  const [creads, setCreads] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [signupstate, setSignupState] = useState(null)
  const [userName, setUserName]=useState('')
  const router = useRouter();

  const createusername = (e) => {
    console.log(e.target.value);
    setCreads({ username: e.target.value });
    setUserName(e.target.value)
  };
  const createuserPassword = (e) => {
    console.log(e.target.value);
    setCreads({ ...creads, password: e.target.value });
  };

  const submitHandler = async (e, credentials) => {
    e.preventDefault();
    try {
      await axios.post(tokenUrl, credentials).then((data) => {
        setToken(data.data.access);
        localStorage.setItem("Token", JSON.stringify(data.data.access));
        localStorage.setItem("Creads", JSON.stringify(creads.username));
        localStorage.setItem("Refresh", JSON.stringify(data.data.refresh));
        router.push({
          pathname: "/components/NavigationToEventBox",
        });
      });
      console.log(token);
      //   window.location.href = "/components/NavigationToEventBox";
    } catch (err) {
      setError(true);
      console.log("zdzs", err);
      }
  };
  useEffect(() => {
    const username = JSON.parse(localStorage.getItem('Username'))
    if (username != null) {
      // document.getElementById("username").defaultValue = username;
      setSignupState(username)
      setCreads({ username: username });
      // localStorage.removeItem('Username')
    }
  }, [])
  return (
    <div className="flex bg-[#E7ECEF] [w-100%]   h-screen rounded-md">
      <div className="object-cover h-[100%] w-[50%] ...">
        <Image src={signImage} class=""></Image>
      </div>

      <div class="object-cover h-[40%] w-[50%] ...  relative rounded-[10px] px-4 pt-7 pb-8 bg-white shadow-xl  max-w-md mx-auto sm:px-10 rounded-b-md mt-[12%] bg-gray-200 ">
        <form
          action=""
          onSubmit={(e) => submitHandler(e, creads)}
          method="post"
        >
          <label htmlFor="username" class="block">
            {" "}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="UserName"
            class="border w-full h-12 px-3 mb-[10%] rounded-md bg-[#C4C4C4] placeholder:text-gray-600"
            placeholder="Username"
            onChange={createusername}
          />

          <label htmlFor="password" class="block"></label>
          <input
            name="password"
            id="password"
            type="password"
            class="border w-full h-12 px-3  rounded-md bg-[#C4C4C4] placeholder:text-gray-600 mb-[15%]"
            placeholder="password"
            onChange={createuserPassword}
          />

          {/* <div class="flex items-start">
              {error && (
                <div>
                  <p className="text-red-700">*Error in creads</p>
                </div>
              )}
              <button class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">
                I dont have an account{" "}
              </button>
            </div> */}
          <button class="mt-5 bg-[#514B9B] shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded-[10px]">
            Login
          </button>
          <Link href="/">
            <button class="mt-5 bg-[#514B9B] shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded-[10px] float-right">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
