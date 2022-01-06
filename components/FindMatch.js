
import Image from "next/image";

import React from 'react'
import CatBox from './CatBox'
import { useState } from 'react'
import BigBox from './BigBox'
import $ from 'jquery';
import { useEffect } from "react";
import axios from "axios";
import spining from "./images/spining.gif"


function FindMatch(props) {

    const [bigBoxInfo, setbigBoxInfo] = useState([])
    const [showBox, setshowBox] = useState(false)
    const [isLoading, setLoading] = useState(true);
    
    const [filteredLists, setfilteredLists] = useState(null)
    const [userInterests, setuserInterests] = useState(['Reading', 'Cycling', 'Hiking', 'Drawing', 'Photography', 'Swimming', 'Sleeping', 'Sports', 'Gaming'])
    const [followers, setfollowers] = useState({})
    useEffect(() => {

        // ['Reading', 'Cycling', 'Hiking', 'Drawing', 'Photography', 'Swimming', 'Sleeping', 'Sports', 'Gaming']
        getMatches(userInterests).then(data => setfilteredLists(data)).then(data => { setLoading(false) })
        getFollowers().then(data => setfollowers(data))


    }, [])

    // get each interest list and save in a dictionary
    const getMatches = async (listInterests) => {


        let filtered = {}

        const tokendb = JSON.parse(localStorage.getItem("Token"));
        const config = { headers: { Authorization: "Bearer " + tokendb } };

        for (let i = 0; i < listInterests.length; i++) {
            console.log(listInterests[i]);
            let filteredList = await axios.get(`https://project-final-401.herokuapp.com/accounts/customuser?search=${listInterests[i]}`, config)
            filtered[listInterests[i]] = filteredList.data

        }
        return filtered
    }
    const getFollowers = async () => {
        let followersObject = {}
        const tokendb = JSON.parse(localStorage.getItem("Token"));
        const config = { headers: { Authorization: "Bearer " + tokendb } };
        let something = await axios.get(`https://project-final-401.herokuapp.com/accounts/customuser/user-follow/`, config)
        for (let i = 0; i < something.data.length; i++) {
            followersObject[something.data[i].to_user.username] = something.data[i]
        }

        return followersObject
    }


    if (isLoading) {
                return <div  className="flex h-10 w-10 h-max w-max  p-[5rem] m-auto drop-shadow-2xl"><div className=" inline-block m-auto pt-[4rem] h-max w-max rounded-full "><div className="relative inline-block m-auto rounded-full"><Image className="rounded-full animate-ping hover:animate-bounce" height={500} width={700} src={spining}/></div></div></div>;
              }

    const hideHandler = async () => {
        $("#catBoxDiv").fadeToggle(1000)
        setTimeout(() => {
            setshowBox(true)
        }, 1200);
    }

    function bigBoxData(data) {
        setbigBoxInfo(data)
    }

    return (
        <div className='m-auto '>
            <div id='catBoxDiv' className='pt-20 grid grid-cols-5 gap-5  justify-center align-middle overflow-auto h-[46.5rem]'>

                {

                    userInterests.map((category) => {
                        return <CatBox hideHandler={hideHandler} infoList={filteredLists[category]} category={category} bigBoxData={bigBoxData} />

                    })
                }

            </div>
            {showBox && <BigBox followers={followers} showBox={showBox} setshowBox={setshowBox} bigBoxInfo={bigBoxInfo} />}
        </div>
    )
}
export default FindMatch