import React from 'react'
function ChatMe(props) {
    return (
        <div id={props.id} className='ml-5 p-5 pl-[8rem]'>
            <p id='chat-box' className='float-right inline-block px-3 pt-1 pb-[0.5rem] text-sm rounded-[1rem] text-[#D5EBFF] bg-[#503E9D] hover:bg-[#6a57be]'>{props.msgText}</p>
        </div>
    )
}
export default ChatMe