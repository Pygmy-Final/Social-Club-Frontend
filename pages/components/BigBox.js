import { useState } from 'react'
import { useEffect } from 'react';
import ChatSideBox from './ChatSideBox';
import $ from 'jquery';

export default function Example(props) {
    const [open, setOpen] = useState(true)
    
    useEffect(() => {
        $("#bigBoxDiv").fadeIn(1000)
    });

    const closeHandler = async () => {
        $("#bigBoxDiv").fadeToggle(1000)
        setTimeout(() => {
            $("#catBoxDiv").fadeIn(1000)
        }, 1200);
        setTimeout(() => {
            setOpen(false)
            props.setshowBox(false)
        }, 1200);


    }

    return (
        open && <div id='bigBoxDiv' className="inline-block absolute top-[9.3rem] left-[36.3rem] m-auto justify-center justify-items-center overflow-hidden h-[33.5rem] w-[34.2rem] rounded-[1.5rem] bg-white z-50" style={{ display: "none" }}>
            {/* <div className="relative"></div> */}
            <div className='p-4 bg-[#503E9D] shadow-md font-bold text-white'>
                <h2 className='inline-block '>Category</h2>
                <button onClick={closeHandler}
                    className='float-right inline-block  hover:stroke-white stroke-2  hover:text-[#dbd3f0]'>Return &gt;</button>
            </div>
            <div className='overflow-auto grid grid-cols-2 gap-5 divide-y h-[90%] dark:divide-gray-200/5 p-5'>
                {/* here we add the profile that intrest in this Category */}
              
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
                <ChatSideBox />
            </div>
        </div>
    )
}