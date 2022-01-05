import React from 'react'
import Image from 'next/image'

import randomUser from './images/randomUser.jpg'

function ChatActive(props) {
    return(
        <div className='mx-1 shadow-md active:bg-[#7f70b9] bg-[#503E9D] text-white relative mt-1 grid grid-cols-[50px_1fr] justify-items-start gap-4 rounded-[0.8rem]  p-1'>
            <Image src={randomUser} height={50} width={50} className='inline-block object-cover ml-10 rounded-full ' placeholder='random person' />
            <span className='absolute border-solid border-[0.1rem] border-neutral-600 ...  top-10 left-11 h-[8px] w-[8px] bg-green-500 grid   rounded-full content-center ...'>
            </span>
            <p className='h-8 text-sm font-bold m-auto -ml-1 mt-[0.8rem] content-center inline-block truncate ...'>Abdallah Bassam</p>
        </div>
    )
}
export default ChatActive