import React from 'react'
function ChatHim(props) {
    return (
        <div id={props.id} className='p-5 pr-[8rem]'>
            <p id='chat-box' className='float-left text-sm inline-block px-3 pt-1 pb-[0.5rem] rounded-[1rem] text-[#050505d2] bg-[#E4E6EB] hover:bg-[#edeef0]'>{props.msgText}</p>
        </div>
    )
}
export default ChatHim