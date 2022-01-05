import React from 'react'
import Image from 'next/image'

import randomUser from './images/randomUser.jpg'

function ChatSideProfile(props) {
    return (
        <div className='mx-10  ml-40 text-[#15263a] relative mt-1 grid grid-cols-[1fr] m-auto justify-items-start gap-1 rounded-[0.8rem] max-w-full  p-3 py-16 '>
            <br />
            <div className='m-auto'>
                <Image src={randomUser} height={130} width={130} className='inline-block object-cover ml-10 rounded-full hover:will-change-transform ' placeholder='random person' />
            </div>
            <div className='content-center m-auto'>
                <p className='text-sm font-bold truncate hover:text-[#503E9D] ...'>Abdallah Bassam</p>
            </div>
            <div className='m-auto inline-block grid-cols-[1fr-1fr] mb-5'>
                <span className=' inline-block border-solid border-[0.1rem] border-neutral-300 ... mx-1 h-[10px] w-[10px] bg-green-500   rounded-full content-center ...'>

                </span>
                <span>
                    <p className='inline-block font-[300] text-[12px] hover:text-[#503E9D]'>Active Now</p>
                </span>
            </div>
            <div className='m-auto mr-4'>
                <p className=' font-[400] text-xs '>EMAIL</p>
                <p className=' text-xs truncate hover:text-[#503E9D] ...'>moegts@gmail.com</p>
                <br />
                <p className=' font-[400] text-xs '>PHONE</p>
                <p className=' text-xs truncate hover:text-[#503E9D] ...'>+962-799220730</p>
                <br />
            </div>
        </div>
    )
}
export default ChatSideProfile