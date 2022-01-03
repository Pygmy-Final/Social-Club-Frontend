import React from 'react'
import ChatSideBox from './ChatSideBox'
import FindMatch from './FindMatch'
import { useState } from 'react';


function CatBox(props) {

    return (
        <div className='bg-[#F8F8FB] shadow-md w-[16rem] h-[20rem] rounded-[0.8rem] overflow-hidden relative'>
            <div className='p-4 bg-[#503E9D] font-normal text-[#F8F8FB]'>
                <h2 className='inline-block '>Category</h2>
                <button onClick={props.hideHandler}
                    className='float-right inline-block hover:stroke-white stroke-2  hover:text-[#dbd3f0] text-sm'>Find more &gt;</button>
            </div>
            <div className='grid gap-y-[0.1rem] p-1 my-auto '>
                {/* here we add the profile that intrest in this Category */}
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
            </div>
            {/* {showBox && <BigBox showBox={showBox} setshowBox={setshowBox}/>} */}

        </div>
    )
}
export default CatBox