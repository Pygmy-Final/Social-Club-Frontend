import React from "react";
import { useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import signImage from './images/signImage.png'


const backendUrl = "http://project-final-401.herokuapp.com";
const signupUrl = backendUrl + `/accounts/customuser/create-user/`;

const tokenUrl = backendUrl + `/api/token/`;

export default function SignupForm() {
  const [token, setToken] = useState("");
  const [data, dataList] = useState({})
  const credentials= ({ username: "", password: "" });

  const formHandler = async (e) => {
    e.preventDefault();
    let newData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      gender: e.target.gender.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      // intrest: e.target.intrest.value
    }
    
    
    dataList(newData)
    console.log(data)
  
  }
  const submitHandler = async (e, data) => {
    e.preventDefault();
    try {
      await axios({
        method: 'post',
        url: signupUrl,
        data: {
         username: data.username    ,      
         first_name: data.firstname,
        last_name:data.lastname,
        email:data.email,
        password: data.password,
        gender:data.gender,
        phonenumber:data.phone,
        // "interests"
        }
      }).then(axios({
        method: 'post',
        url: signupUrl,
        data: {
          username: data.username, 
          password: data.password,
        }
      }).then((data) => {
        setToken(data.data.access);
        localStorage.setItem("Token",JSON.stringify(data.data.access));
        router.push({
            pathname: '/components/NavigationToEventBox',
           
          });
        }))
      console.log(token)
    //   window.location.href = "/components/NavigationToEventBox";
       

    } catch (err) {
      setError(true);
      console.log("zdzs", err);
    }
  }
  return (
    <div className="flex bg-[#E7ECEF] [w-100%]  h-screen rounded-md">
      {/* open={sign} onClose={onCloseModal} */}
      <div className="object-cover h-[100%] w-[50%] ...">
      <Image src={signImage} class=""></Image>
      </div>
      <div className=" rounded-[10px] px-4 pt-7 pb-8 bg-[#E7ECEF] shadow-xl   mx-auto sm:px-10 rounded-b-md  ">
          <div class=" p-12 bg-[#E7ECEF] sm:w-2/12 md:w-1/4 lg:w-6/12">
            <form class="" onSubmit={formHandler} method="POST">
              <div class="flex justify-between gap-3">
                <span class="">
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
                  <select id="gender" name="gender">
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
                type="tel"
                id="phone"
                name="phone"
                placeholder="79000000"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />

               <label
                for="Intrest"
                name='intrest'
                class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Intrest
              </label>
              <select class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded-[12px]" width={300} style={{ width: "350px" }} size="3" multiple>
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
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Sign up
              
              </button>
              <Link href='./LoginForm'>
              <button>
              <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                Already registered?
              </p>
              </button>
              </Link>
            </form>
          </div>
        
      </div>
    </div>
  );
}
