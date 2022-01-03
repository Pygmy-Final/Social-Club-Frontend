import React from "react";
import { useState} from 'react'
import axios from "axios";
import { useRouter } from 'next/router';

const backendUrl = "http://project-final-401.herokuapp.com";
const signupUrl = backendUrl + `/accounts/customuser/create-user/`;

const tokenUrl = backendUrl + `/api/token/`;

export default function SignupForm() {
  const [token, setToken] = useState("");
  const [datas, dataList] = useState({})
  const [credentials,setCredentials] = useState({ username: "", password: "" });
  const router = useRouter()

  const createusername = (e) => {
    console.log(e.target.value);
    setCredentials({ username: e.target.value });
  };
  const createuserPassword = (e) => {
    console.log(e.target.value);
    setCredentials({ ...credentials, password: e.target.value });
  };
  const createfirstname = (e) => {
    console.log(e.target.value);
    dataList({...datas,firstname: e.target.value });
  };
  const createlastname = (e) => {
    console.log(e.target.value);
    dataList({...datas,lastname: e.target.value });
  };
  const creategender = (e) => {
    console.log(e.target.value);
    dataList({...datas,gender: e.target.value });
  };
  const createEmail = (e) => {
    console.log(e.target.value);
    dataList({...datas,email: e.target.value });
  };
  const createPhoneNum = (e) => {
    console.log(e.target.value);
    dataList({...datas,phone: e.target.value });
  };

  const submitHandler = async (e, data) => {
    e.preventDefault();
   
      await axios({
        method: 'post',
        url: signupUrl,
        data: {
        username: credentials.username    ,      
        first_name: datas.firstname,
        last_name:datas.lastname,
        email:datas.email,
        password: credentials.password,
        gender:datas.gender,
        phonenumber:datas.phone,
        // "interests"
        }}).then(router.push({
              pathname: '/components/LoginForm',     
                }))
              } 
  console.log(credentials)
  console.log(datas)

// show success after you signup before

  // const formHandler = async (e) => {
  //   e.preventDefault();
  //   console.log("jj")
  //   // let newData = {
  //   //   firstname: e.target.firstname.value,
  //   //   lastname: e.target.lastname.value,
  //   //   username: e.target.username.value,
  //   //   gender: e.target.gender.value,
  //   //   email: e.target.email.value,
  //   //   phone: e.target.phone.value,
  //   //   password: e.target.password.value,
  //   //   // intrest: e.target.intrest.value
  //   // }
    
    
  //   // // await dataList(newData)
  //   // console.log(newData.username)
  //   // console.log(newData.password)
  //   // setCredentials({username:newData.username,password:newData.password})
  //   // console.log(credentials)

  //   // let CreateAccount = async()=>{
  //   //   await axios({
  //   //     method: 'post',
  //   //     url: signupUrl,
  //   //     data: {
  //   //      username: newData.username    ,      
  //   //      first_name: newData.firstname,
  //   //     last_name:newData.lastname,
  //   //     email:newData.email,
  //   //     password: newData.password,
  //   //     gender:newData.gender,
  //   //     phonenumber:newData.phone,
  //   //     // "interests"
  //   //     }
  //   //   }).then(axios({
  //   //     method: 'post',
  //   //     url: signupUrl,
  //   //     data: {
  //   //       username: newData.username, 
  //   //       password: newData.password,
          
  //   //     }
  //   //   }).then((newData) => {
  //   //     setToken(newData.data.access);
  //   //     localStorage.setItem("Token",JSON.stringify(newData.data.access));
  //   //     router.push({
  //   //         pathname: '/components/NavigationToEventBox',
           
  //   //       });
  //   //     }))
  //   // }
  
  // }
  // const submitHandler = async (e, data) => {
  //   e.preventDefault();
  //   try {
  //     await axios({
  //       method: 'post',
  //       url: signupUrl,
  //       data: {
  //        username: data.username    ,      
  //        first_name: data.firstname,
  //       last_name:data.lastname,
  //       email:data.email,
  //       password: data.password,
  //       gender:data.gender,
  //       phonenumber:data.phone,
  //       // "interests"
  //       }
  //     }).then(axios({
  //       method: 'post',
  //       url: signupUrl,
  //       data: {
  //         username: data.username, 
  //         password: data.password,
  //       }
  //     }).then((data) => {
  //       setToken(data.data.access);
  //       localStorage.setItem("Token",JSON.stringify(data.data.access));
  //       router.push({
  //           pathname: '/components/NavigationToEventBox',
           
  //         });
  //       }))
  //     console.log(token)
  //   //   window.location.href = "/components/NavigationToEventBox";
       

  //   } catch (err) {
  //     setError(true);
  //     console.log("zdzs", err);
  //   }
  // }
  return (
    <div>
      {/* open={sign} onClose={onCloseModal} */}
      <div>
        <div class="grid min-h-screen place-items-center">
          <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
            <h1 class="text-xl font-semibold">
              Hello there 👋,{" "}
              <span class="font-normal">
                please fill in your information to continue
              </span>
            </h1>
            <form class="mt-6" autocomplete="off" method="POST" onSubmit={submitHandler}>
              <div class="flex justify-between gap-3">
                 <span class="w-1/2">
                  <label
                    for="firstname"
                    class="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Firstname
                  </label>
                  <input
                  onChange={createfirstname}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="John"
                    autocomplete="given-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>

                <span class="w-1/2">
                  <label
                    for="lastname"
                    class="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Lastname
                  </label>
                  <input
                  onChange={createlastname}
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Doe"
                    autocomplete="family-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span> 
                <span class="w-1/2">
                  <label
                    htmlFor="username"
                    class="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    username
                  </label>
                  <input
                  onChange={createusername}
                    id="username"
                    type="text"
                    name="username"
                    placeholder="John190"
                    autocomplete="given-name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
                <span>
                  <label for="gender">Gender</label>
                  <select id="gender" name="gender" onChange={creategender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </span>
              </div>

              <label
                for="email"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
              onChange={createEmail}
                id="email"
                type="email"
                name="email"
                placeholder="john.doe@company.com"
                autocomplete="email"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />

              <label for="phone" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">phone:</label>

              <input
              onChange={createPhoneNum}
                type="tel"
                id="phone"
                name="phone"
                placeholder="79000000"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                // pattern="[0-9]{3}[0-9]{2}[0-9]{3}"
              />

              <label
                for="password"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
              onChange={createuserPassword}
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              {/* <label
                for="password-confirm"
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Confirm password
              </label>
              <input
                id="password-confirm"
                type="password"
                name="password-confirm"
                placeholder="********"
                autocomplete="new-password"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              /> */}
               {/* <label
                for="Intrest"
                name='intrest'
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Intrest
              </label>
              <select class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" width={300} style={{ width: "350px" }} size="8" multiple>
                <option value="Reading">Reading</option>
                <option value="Cycling">Cycling</option>
                <option value="Hiking">Hiking</option>
                <option value="Drawing">Drawing</option>
                <option value="Photography">Photography</option>
                <option value="Swimming">Swimming</option>
                <option value="Sleeping">Sleeping</option>
                <option value="Sports">Sports</option>
                <option value="Gaming">Gaming</option>
              </select> */}
              <button
                type="submit"
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Sign up
              </button>
              <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                Already registered?
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
