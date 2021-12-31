import logo from "./images/logo.png";
import Image from "next/image";
import React, { useState } from "react";
import logout from "./images/logout.png";
import { useEffect } from "react"
export default function Header() {
    
    let currentDate = new Date();

    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const getDayName = (dateStr, locale) => {
        let date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: "long" });
    };
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth();
    let cYear = currentDate.getFullYear();
    let dateStr = `${cMonth + 1}/${cDay}/${cYear}`;
    let day = getDayName(dateStr, "us-en");

    let fullDate = `${day}, ${cDay} ${monthNames[cMonth]}, ${cYear}`;

    setInterval(myTimer, 1000);

    function myTimer() {
        const date = new Date();
        document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    }

    const buttonHandler = () => {
        console.log("Hello")
    }
    let username = 'Qamar'
    const greeting = () => {

        let myDate = new Date();
        let hrs = myDate.getHours();

        let greet;

        if (hrs < 12)
            greet = 'Good Morning';
        else if (hrs >= 12 && hrs <= 17)
            greet = 'Good Afternoon';
        else if (hrs >= 17 && hrs <= 24)
            greet = 'Good Evening';

        document.getElementById('lblGreetings').innerHTML =
            greet + '<b>' + ` ${username}` + '</b>';

    }
    useEffect(() => {
        greeting();
    })

    return (
        <div>
            <header className="flex py-4 rounded-full bg-[#F8F8FB] h-14 z-10 drop-shadow-md ... ">
                <div className="justify-between w-full ml-4 ">
                    <span className="mr-5">
                        <Image src={logo} alt="logo picture" width={41} height={36} />

                        <h1 className="relative bottom-5 inline-block align-middle text-2xl font-semibold font-sans-serif text-[#1E2A3D] ml-1 ...">
                            Social Club
                        </h1>
                    </span>

                    <p
                        className="relative bottom-5 inline-block align-middle mx-5 text-[#516F91] ..."
                        id="demo"
                    >ss</p>
                    <p className="relative bottom-5 inline-block align-middle mx-3 text-[#516F91] ...">
                        {fullDate}
                    </p>
                    <span className="float-right mr-20 ">
                        <h id='lblGreetings' className="mr-4"> {greeting}</h>
                        <img className='inline-block mr-6 rounded-full' src="https://www.w3schools.com/howto/img_avatar.png" width={30} height={30} alt="Avatar" />

                        <Image onClick={buttonHandler} className='hover:m-10' src={logout} width={21.6} height={18.36} />

                    </span>
                </div>
            </header>
        </div>
    );
}
