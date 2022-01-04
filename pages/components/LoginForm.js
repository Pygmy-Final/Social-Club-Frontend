import Modal from "react-responsive-modal";
import Image from "next/image";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import Link from "next/link";
import { useContext } from "react";

const backendUrl = "http://project-final-401.herokuapp.com";
const tokenUrl = backendUrl + `/api/token/`;

export default function LoginForm() {
  const [creads, setCreads] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [userName, setUserName]=useState('')
  const [signupstate, setSignupState] = useState(null)
  const router = useRouter()

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
        localStorage.setItem("Username", JSON.stringify(userName))
        localStorage.setItem("Token", JSON.stringify(data.data.access));
        router.push({
          pathname: '/components/NavigationToEventBox',

        });
      });
      console.log(token)
    } catch (err) {
      setError(true);
      console.log("post request error ", err);
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
  // useEffect(() => {
  //   const username = JSON.parse(localStorage.getItem('Username'))
  //   if (username != null) {
  //     // document.getElementById("username").defaultValue = username;
  //     setSignupState(username)
  //     setCreads({ username: username });
  //     // localStorage.removeItem('Username')
  //   }
  // })
  return (
    <div>
      <div class=" min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <span class="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">
          Sign in Form
        </span>
        <div class="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
          <form
            action=""
            onSubmit={(e) => submitHandler(e, creads)}
            method="post"
          >
            <label htmlFor="username" class="block">
              Username
            </label>
            {signupstate ? <input
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
              class="border w-full h-10 px-3 mb-5 rounded-md"
              placeholder="Username"
              value={signupstate}
            /> : <input
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
              class="border w-full h-10 px-3 mb-5 rounded-md"
              placeholder="Username"
              onChange={createusername}
            />}

            <label htmlFor="password" class="block">
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              class="border w-full h-10 px-3 mb-5 rounded-md"
              placeholder="password"
              onChange={createuserPassword}
            />

            <div class="flex items-start">
              {error && (
                <div>
                  <p className="text-red-700">*Error in creads</p>
                </div>
              )}
              <Link href='/components/SignupForm'>
                <button class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">
                  I dont have an account
                </button>
              </Link>
            </div>
            <button class="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded">
              Login
            </button>
            <button class="mt-5 bg-green-500 hover:bg-red-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded float-right">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
