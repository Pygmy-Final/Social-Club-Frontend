import React from 'react'
import ChatSideBox from './ChatSideBox'
import FindMatch from './FindMatch'
import { useState } from 'react';


function CatBox(props) {

    return (
        <div className='bg-white shadow-2xl w-[18rem] h-[20rem] rounded-[1.5rem] overflow-hidden relative'>
            <div className='p-4 bg-[#503E9D] shadow-xl font-bold text-white'>
                <h2 className='inline-block '>Category</h2>
                <button onClick={props.hideHandler}
                    className='float-right inline-block hover:stroke-white stroke-2  hover:text-[#dbd3f0]'>Find more &gt;</button>
            </div>
            <div className='grid gap-y-[0.1rem] p-1 my-auto'>
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