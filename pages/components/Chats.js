import React from 'react'
import ChatSideBox from './ChatSideBox'
import ChatMe from './ChatMe'
import ChatHim from './ChatHim'
import ChatSideProfile from './ChatSideProfile'
import { useEffect } from 'react'

import ChatActive from './ChatActive'
function Chats(props) {

    useEffect(() => {
        // this to scroll down the chat box so the latest msgs show up once the user open the msg
        // 🛑 this should re-run on-click on another chat later on
        let elem = document.getElementById('chatBox');
        elem.scrollTop = elem.scrollHeight;
    })

    return (
        <div className='pt-[4rem] min-h-[10rem] min-w-full rounded-[1.5rem]'>
            <div className='shadow-2xl bg-white mx-[5rem] min-h-full min-w-[80%] rounded-[1.5rem]'>
                <div className='p-4 min-h-full min-w-full'>

                    <div className='grid grid-cols-[230px_1fr_150px]'>
                        <div className=' pl-2 text-xl'>

                            <h1 className='font-bold'>Chats</h1>

                            <input id='searchbar' type="search" placeholder='🔎&nbsp; Search...' className='bg-gray-100 hover:bg-white active:bg-white px-3 -mx-[1.5rem] rounded-full scale-75 ' autocomplete="off" spellcheck="false" />


                            <div className='shadow-inner rounded overflow-auto flex flex-col divide-y h-80 dark:divide-gray-200/5'>
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
                        <div >
                            <ChatActive />
                            <div id='chatBox' className='max-w-[100%] shadow-inner rounded overflow-auto flex flex-col divide-y h-80 dark:divide-gray-200/5'>
                                <ChatHim />
                                <ChatMe />
                                <ChatHim />
                                <ChatMe />
                                <ChatHim />
                                <ChatMe />
                                <ChatHim />
                                <ChatMe />
                                <ChatHim />
                                <ChatMe />
                            </div>

                            <div name='sendMsgBox' className='grid grid-cols-[1fr_50px] gap-2 justify-center content-center ...'>
                                <textarea placeholder="Type message.." className='min-w-[90%] max-h-[3rem] bg-[#503E9D] ml-2 text-white inline-block rounded-[1rem] p-2 px-3' name="msg" style={{ overflow: "auto", resize: "none" }} required></textarea>
                                <svg class="inline-block justify-center my-auto" width="20px" height="20px" viewBox="0 0 24 24">
                                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="#503E9D" fill-rule="evenodd" stroke="none"></path>
                                </svg>

                            </div>
                        </div>

                        <div>
                            <ChatSideProfile />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chats