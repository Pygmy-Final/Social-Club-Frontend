// import Modal from "react-responsive-modal";
// import Image from "next/image";
// import axios from "axios";
// import React, { useState } from "react";
// import { useRouter } from 'next/router';
// import BeforeAuthHeader from './BeforeAuthHeader'

// const backendUrl = "http://project-final-401.herokuapp.com";
// const tokenUrl = backendUrl + `/api/token/`;
// const refreshUrl = backendUrl +'/api/token/refresh/'

// export default function LoginForm() {
//   const [creads, setCreads] = useState({ username: "", password: "" });
//   const [token, setToken] = useState("");
//   const [error, setError] = useState(false);
//   const router = useRouter()

//   const createusername = (e) => {
//     // console.log(e.target.value);
//     setCreads({ username: e.target.value });
//   };
//   const createuserPassword = (e) => {
//     // console.log(e.target.value);
//     setCreads({ ...creads, password: e.target.value });
//   };

//   const submitHandler = async (e, creads) => {
//     e.preventDefault();
//     try {
//       await axios.post(tokenUrl, creads).then((data) => {
//         setToken(data.data.access);
//         localStorage.setItem("Token",JSON.stringify(data.data.access));
//         localStorage.setItem("Creads",JSON.stringify(creads.username));
//         localStorage.setItem("Refresh",JSON.stringify(data.data.refresh));
//         router.push({
//             pathname: '/components/NavigationToEventBox',
           
//           });
//       });
//       // console.log(token)
//     //   window.location.href = "/components/NavigationToEventBox";
       

//     } catch (err) {
//       setError(true);
//       console.log("zdzs", err);
//     }
//     // console.log(credentials);
//     console.log(creads)
    
//   };

//   return (
//     <div>
//       <div class=" min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
//         <span class="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">
//           Sign in Form
//         </span>
//         <div class="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
//           <form
//             action=""
//             onSubmit={(e) => submitHandler(e, creads)}
//             method="post"
//           >
//             <label htmlFor="username" class="block">
//               Username{" "}
//             </label>
//             <input
//               type="text"
//               name="username"
//               id="username"
//               placeholder="User Name"
//               class="border w-full h-10 px-3 mb-5 rounded-md"
//               placeholder="Username"
//               onChange={createusername}
//             />

//             <label htmlFor="password" class="block">
//               Password
//             </label>
//             <input
//               name="password"
//               id="password"
//               type="password"
//               class="border w-full h-10 px-3 mb-5 rounded-md"
//               placeholder="password"
//               onChange={createuserPassword}
//             />

//             <div class="flex items-start">
//               {error && (
//                 <div>
//                   <p className="text-red-700">*Error in creads</p>
//                 </div>
//               )}

//               <button class="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">
//                 I dont have an account{" "}
//               </button>
//             </div>
//             <button class="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded">
//               Login
//             </button>
//             <button class="mt-5 bg-green-500 hover:bg-red-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded float-right">
//               Cancel
//             </button>
//           </form>
//         </div>
//       </div>
//       {/* <creads={creads}/> */}
//     </div>
//   );
// }
import Modal from "react-responsive-modal";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from 'next/router';
import signImage from './images/signImage.png'

const backendUrl = "http://project-final-401.herokuapp.com";
const tokenUrl = backendUrl + `/api/token/`;

export default function LoginForm() {
  const [creads, setCreads] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter()

  const createusername = (e) => {
    console.log(e.target.value);
    setCreads({ username: e.target.value });
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
        localStorage.setItem("Token",JSON.stringify(data.data.access));
        router.push({
            pathname: '/components/NavigationToEventBox',
           
          });
      });
      console.log(token)
    //   window.location.href = "/components/NavigationToEventBox";
       

    } catch (err) {
      setError(true);
      console.log("zdzs", err);
    }
    // console.log(credentials);
    // console.log(token)
    
  };

  return (
    <div className="flex bg-[#E7ECEF] [w-100%]  h-screen rounded-md">
      <div className="object-cover h-[100%] w-[50%] ...">
      <Image src={signImage} class=""></Image>
      </div>
      

        <div class="object-cover h-[50%] w-[50%] ...  relative rounded-[10px] px-4 pt-7 pb-8 bg-white shadow-xl  max-w-md mx-auto sm:px-10 rounded-b-md mt-[12%] bg-gray-200 ">
          
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
              class="border w-full h-12 px-3 mb-[10%] rounded-md bg-[#C4C4C4] placeholder:text-black"
              placeholder="Username"
              onChange={createusername}
            />

            <label htmlFor="password" class="block">
              
            </label>
            <input
              name="password"
              id="password"
              type="password"
              class="border w-full h-12 px-3  rounded-md bg-[#C4C4C4] placeholder:text-black mb-[15%]"
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
            <Link href='/'>
            <button class="mt-5 bg-[#514B9B] shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded-[10px] float-right">
              Cancel
            </button>
            </Link>
          </form>
        </div>
      </div>

  );
}