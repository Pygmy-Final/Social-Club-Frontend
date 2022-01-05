import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Vector from './images/Vector.png'
import randomUser from './images/randomUser.jpg'
import axios from 'axios';
import $ from 'jquery';

function ChatSideBox(props) {

    const [isFollowed, setisFollowed] = useState(props.followed)

    const followHandler = async () => {
        const tokendb = JSON.parse(localStorage.getItem("Token"));
        const config = { headers: { Authorization: "Bearer " + tokendb } };
        let followData = await axios.post(`https://project-final-401.herokuapp.com/accounts/customuser/add-follow/`, {
            "to_user": props.person.id,
            "from_user": "1"
        }, config)
        if (followData) {
            return true
        }
    }

    const toggleFollowHandler = async () => {
        // $("#followButton").css({"background-color":"#afa8d1"})
    }

    return (
        <div className='mx-1 hover:bg-gray-200  active:bg-[#503E9D] active:text-white relative mt-1 grid grid-cols-[50px_1fr] justify-items-start gap-4  bg-gray-100 p-3 rounded-md'>
            <div className='h-[5.6rem] w-[5.6rem]'>
                <Image src={Vector} height={90} width={90} className='inline-block object-cover ml-10 rounded-full ' placeholder='random person' />
            </div>
            {/* <span className='absolute border-solid border-[0.1rem] border-neutral-400 ...  top-10 left-10 h-[7px] w-[7px] bg-green-500 grid   rounded-full content-center ...'>
            </span> */}
            <p className='h-[4rem] text-xs m-auto  ml-8  content-center inline-block truncate text-[#1E2A3D] text-[15px] font-extrabold  ...'>{props.person.username}
                <br />
                <br />

                <p className='mt-2 truncate font-normal ...' style={{ maxWidth: '280px', wordWrap: 'break-word' }}>Gender: {props.person.gender}</p>

            </p>

            {isFollowed? <button className='bg-[#afa8d1] p-2 rounded-md text-white w-[5rem] inline-block mb-[1rem] ml-[20rem]' >Followed</button> : <button onClick={followHandler} id='followButton' className='bg-[#503E9D] p-2 rounded-md text-white inline-block mb-[1rem] ml-[20rem] w-[5rem]' onClick={() => {followHandler().then(data => setisFollowed(true));toggleFollowHandler()}} >Follow</button>}

        </div>
    )
}
export default ChatSideBox