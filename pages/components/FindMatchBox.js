import React from 'react'
import Image from 'next/image'
import Vector from './images/Vector.png'

function FindMatchBox(props) {
    // useEffect(() => {
    //     console.log("&&&&&&&&&&&&",props.personInfo);
    // }, []);
    return (
        <div className='mx-1 hover:bg-gray-300 shadow-md active:bg-[#503E9D] active:text-white relative mt-1 grid grid-cols-[50px_1fr] justify-items-start gap-4  bg-gray-100 p-1 rounded-md'>
            <Image src={Vector} height={43.82} width={43.82} className='inline-block object-cover ml-10 rounded-full ' placeholder='random person' />
            <span className='absolute border-solid border-[0.1rem] border-neutral-400 ...  top-10 left-10 h-[7px] w-[7px] bg-green-500 grid   rounded-full content-center ...'>
            </span>
            <p className='h-8 text-xs font-semibold m-auto  -ml-3  content-center inline-block truncate text-[#0D1724]  antialiased ...'>{props.personInfo.username}
                <br></br>
                
            </p>
        </div>
    )
}
export default FindMatchBox