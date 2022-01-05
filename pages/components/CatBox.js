import React from 'react'
import ChatSideBox from './ChatSideBox'
import FindMatch from './FindMatch'
import { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = "http://project-final-401.herokuapp.com";
const messageUrl = backendUrl + `/chat/message/`;
const token = JSON.parse(localStorage.getItem("Token"))

const category = ['Reading', 'Cycling', 'Hiking', 'Drawing', 'Photography', 'Swimming', 'Sleeping', 'Sports', 'Gaming']

function CatBox(props) {
    const [readingData, setReadingData] = useState([])
    const [cyclingData, setCyclingData] = useState([])
    const [hikingData, setHikingData] = useState([])
    const [drawingData, setDrawingData] = useState([])
    const [photographyData, setPhotographyData] = useState([])
    const [swimmingData, setSwimmingData] = useState([])
    const [sleepingData, setSleepingData] = useState([])
    const [sportesgData, setSportsData] = useState([])
    const [gamingData, setGamingData] = useState([])

    useEffect(() => {
        getReadingUser()

    }, []);

    const getReadingUser = () => {
        if (category) {
            const config = { headers: { Authorization: "Bearer " + token } };
            for (let i = 0; i < category.length; i++) {
                const api = axios.create({ baseURL: 'https://project-final-401.herokuapp.com' })
                api.get(`/accounts/customuser/?search=${category[i]}`, config)
                    .then(res => {
                        if (category[i] === 'Reading') {
                            setReadingData(res.data)
                        } else if (category[i] === 'Cycling') {
                            setCyclingData(res.data)
                        } else if (category[i] === 'Hiking') {
                            setHikingData(res.data)
                        } else if (category[i] === 'Drawing') {
                            setDrawingData(res.data)
                        } else if (category[i] === 'Photography') {
                            setPhotographyData(res.data)
                        } else if (category[i] === 'Swimming') {
                            setSwimmingData(res.data)
                        } else if (category[i] === 'Sleeping') {
                            setSleepingData(res.data)
                        } else if (category[i] === 'Sports') {
                            setSportsData(res.data)
                        } else {
                            setGamingData(res.data)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }

        }


    }
    return (
        

        <div className='bg-[#F8F8FB] shadow-md w-[16rem] h-[20rem] rounded-[0.8rem] overflow-hidden relative'>
            <div className='p-4 bg-[#503E9D] font-normal text-[#F8F8FB]'>
                <h2 className='inline-block '>Category</h2>
                <button onClick={props.hideHandler}
                    className='float-right inline-block hover:stroke-white stroke-2  hover:text-[#dbd3f0] text-sm'>Find more &gt;</button>
            </div>
            <div className='grid gap-y-[0.1rem] p-1 my-auto '>
                {/* here we add the profile that intrest in this Category */}
                {/* <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox /> */}
            </div>
            {/* {showBox && <BigBox showBox={showBox} setshowBox={setshowBox}/>} */}

        </div>
    )
}
export default CatBox