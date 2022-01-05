import React from 'react'
import ChatSideBox from './ChatSideBox'
import FindMatch from './FindMatch'
import { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { map } from 'jquery';
import FindMatchBox from './FindMatchBox';
import BigBox from './BigBox';

const backendUrl = "http://project-final-401.herokuapp.com";
const messageUrl = backendUrl + `/chat/message/`;

function CatBox(props) {
    const [preview, setpreview] = useState([])
    useEffect(() => {
        setpreview(props.infoList.slice(0,4))

    }, []);

    return (

        <div className='bg-[#F8F8FB] shadow-md w-[16rem] h-[20rem] rounded-[0.8rem] overflow-hidden relative'>
            <div className='p-4 bg-[#503E9D] font-normal text-[#F8F8FB]'>
                <h2 className='inline-block '>{props.category}</h2>
                    <button onClick={()=>{props.hideHandler(); props.bigBoxData(props.infoList)}}
                    className='float-right inline-block hover:stroke-white stroke-2  hover:text-[#dbd3f0] text-sm'>Find more &gt;</button>
            </div>
            <div className='grid gap-y-[0.1rem] p-1 my-auto '>

                {
                    preview.map((personInfo)=>{
                        
                        return <FindMatchBox personInfo={personInfo}/>
                    })
                }

                {/* here we add the profile that intrest in this Category */}
                {/* <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox /> */}
            </div>

        </div>
    )
}
export default CatBox