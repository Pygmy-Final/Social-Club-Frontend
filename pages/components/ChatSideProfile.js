import React from 'react'
import Image from 'next/image'

import randomUser from './images/randomUser.jpg'

function ChatSideProfile(props) {
    return (
        <div className='mx-1 shadow-lg active:bg-[#7f70b9] bg-[#503E9D] text-white relative mt-1 grid grid-cols-[1fr] m-auto justify-items-start gap-1 rounded-[0.8rem] max-w-full  p-1'>
            <br />
            <div className='m-auto'>
                <Image src={randomUser} height={50} width={50} className='inline-block ml-10 object-cover rounded-full ' placeholder='random person' />
            </div>
            <div className='m-auto content-center'>
                <p className='text-sm font-bold truncate ...'>Abdallah Bassam</p>
            </div>
            <div className='m-auto inline-block grid-cols-[1fr-1fr]'>
                <span className=' inline-block border-solid border-[0.2rem] border-neutral-600 ... mx-1 h-[10px] w-[10px] bg-green-500   rounded-full content-center ...'>

                </span>
                <span>
                    <p className='inline-block font-[500] text-[12px]'>Active Now</p>
                </span>
            </div>
            <div className='m-auto'>
                <p className=' font-[500] text-xs'>EMAIL</p>
                <p className=' text-xs truncate ...'>moegts@gmail.com</p>
                <br />
                <p className=' font-[500] text-xs'>PHONE</p>
                <p className=' text-xs truncate ...'>+962-799220730</p>
                <br />
            </div>
        </div>
    )
}
export default ChatSideProfile