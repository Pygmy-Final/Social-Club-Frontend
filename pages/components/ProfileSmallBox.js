import React from 'react'
import Image from 'next/image'

import randomUser from './images/randomUser.jpg'

function ChatSideBox(props) {
    return (
        <div className='mx-1 hover:bg-gray-200  active:bg-[#503E9D] active:text-white relative mt-1 grid grid-cols-[50px_1fr] justify-items-start gap-4  bg-gray-100 p-3 rounded-md'>
            <div className='h-[5.6rem] w-[5.6rem]'>
                <Image src={randomUser} height={90} width={90} className='inline-block object-cover ml-10 rounded-full ' placeholder='random person' />
            </div>
            {/* <span className='absolute border-solid border-[0.1rem] border-neutral-400 ...  top-10 left-10 h-[7px] w-[7px] bg-green-500 grid   rounded-full content-center ...'>
            </span> */}
            <p className='h-8 text-xs font-semibold m-auto  -ml-3  content-center inline-block truncate text-[#0d1724]  antialiased ...'>Abdallah Bassam
            </p>

        </div>
    )
}
export default ChatSideBox