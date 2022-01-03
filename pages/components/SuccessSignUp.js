import { useState } from 'react'
import { useEffect } from 'react';
import ProfileSmallBox from './ProfileSmallBox';
import $ from 'jquery';
import success from './images/success.gif'
import Image from 'next/image';

export default function Example(props) {
    const [open, setOpen] = useState(true)
    
    useEffect(() => {
        $('#bgBigBox').fadeIn(1000)
        $("#bigBoxDiv").fadeIn(1000)
    });

    return (
        open && <div id='bgBigBox' style={{ display: "none" }}>
            
            <div id='bigBoxDiv' className="inline-block absolute top-[9.1rem]  left-[40.6rem] m-auto   overflow-hidden h-[25rem] w-[25rem] rounded-[1.5rem] bg-[#F7F7F7] z-50 " style={{ display: "none" }}>
            {/* <div className="relative"></div> */}
            <div className='p-4 bg-[#503E9D] shadow-md font-bold text-white'>
                <h2 className='inline-block '>Sign-up Successfully</h2>
                {/* <button onClick={closeHandler}
                    className='float-right inline-block  hover:stroke-white stroke-2  hover:text-[#dbd3f0]'>Return &gt;</button> */}
            </div>
            <p className='mx-12'>you will be directed to Login Page 😊</p>
            <div className='grid grid-rows-2 gap-5 h-[100%]  p-10'>
                
                {/* here we add the profile that intrest in this Category */}
                <br/>
                <div className='h-[20rem] w-[20rem] m-auto absolute '>
                    <Image src= {success} width={450} height={350} className='relative m-auto '/>
                </div>
            </div>
            
        </div>
        <div className='absolute top-0 left-0 z-40 w-screen h-screen bg-[#adacd8] opacity-50'></div>
        </div>
    )
}