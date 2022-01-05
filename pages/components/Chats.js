import React from "react";
import Image from "next/image";
import ChatSideBox from "./ChatSideBox";
import ChatMe from "./ChatMe";
import ChatHim from "./ChatHim";
import ChatSideProfile from "./ChatSideProfile";
import { useEffect, useState } from "react";
import chat from "./images/chat.png";
import ChatActive from "./ChatActive";
import axios from "axios";
import inbox from './images/inbox.png'
import spining from "./images/spining.gif"

function Chats(props) {
  // --------------------------------------------------------

  const [isLoading, setLoading] = useState(true);
  const [chatIsHere, setChatIsHere] = useState();
  const [currentMsgsToShow, setCurrentMsgsToShow] = useState();
  const [currentMsgsUserID, setCurrentMsgsUserID] = useState();
  const [msgToSendState, setMsgToSendState] = useState();
  const [startEffect, setStartEffect] = useState("false");
  const [nowName, setNowName] = useState(false);
  const [profileFullName, setProfileFullName] = useState(false);
  const [emailForUser, setEmailForUser] = useState(false);
  const [phoneNumberOfUser, setPhoneNumberOfUser] = useState(false);

  // --------------------------------------------------------

  useEffect(() => {
    // axios cal =====================================================>
    const config = { headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem('Token')) } };
    const api = axios.create({ baseURL: 'https://project-final-401.herokuapp.com' })
    api.get('/chat/message/', config)
      .then(response => {setChatIsHere(getUserMessageData(response.data)), setLoading(false) })
      .catch(error => { console.log(error) })
    // axios cal =====================================================|

    // this to scroll down the chat box so the latest msgs show up once the user open the msg
    // 🛑 this should re-run on-click on another chat later on
    scrolDown("chatBox")
  }, [startEffect]);


  let getUserMessageData = (data) => {
    let msgsdata = data
    let messagesPerPerson = {}
    let userNameLS = JSON.parse(localStorage.getItem('Username'))
    msgsdata.map((i) => {
      if (userNameLS != i.sender.username) {
        let ImNotSender = {
          "id": `${i.sender.id}`,
          "sender": true,
          "full_name": `${i.sender.first_name} ${i.sender.last_name}`,
          "gender": `${i.sender.gender}`,
          "phonenumber": `${i.sender.phonenumber}`,
          "interests": `${i.sender.interests}`,
          "profilePicture": `${i.sender.profilePicture}`,
          "email": `${i.sender.email}`,
          "message": `${i.message}`,
          "date_created": `${i.date_created}`,
        }
        if (messagesPerPerson[i.sender.username] == undefined) {
          messagesPerPerson[i.sender.username] = [ImNotSender]
        } else {
          messagesPerPerson[i.sender.username].push(ImNotSender)
        }
      } else {
        let ImNotReceiver = {
          "id": `${i.receiver.id}`,
          "sender": false,
          "full_name": `${i.receiver.first_name} ${i.sender.last_name}`,
          "gender": `${i.receiver.gender}`,
          "phonenumber": `${i.receiver.phonenumber}`,
          "interests": `${i.receiver.interests}`,
          "profilePicture": `${i.receiver.profilePicture}`,
          "email": `${i.receiver.email}`,
          "message": `${i.message}`,
          "date_created": `${i.date_created}`,
        }
        if (messagesPerPerson[i.receiver.username] == undefined) {
          messagesPerPerson[i.receiver.username] = [ImNotReceiver]
        } else {
          messagesPerPerson[i.receiver.username].push(ImNotReceiver)
        }
      }
    })
    messagesPerPerson["namesList"] = renderMessages(messagesPerPerson)
    return messagesPerPerson
  };

  function logMe() { console.log(chatIsHere) }

  const renderMessages = (msglist) => {
    let names = []
    for (let name in msglist) names.push(name)
    return names
  }

  let msgsWith = (e) => {
    setCurrentMsgsToShow(e.target.id)
    setCurrentMsgsUserID(e.target.getAttribute("userIDprops"))
    setTimeout(() => {
      scrolDown("chatBox")
    }, 1);
    setNowName(true);
    setProfileFullName(e.target.getAttribute("fullNameForUser"));
    setEmailForUser(e.target.getAttribute("emailForUser"));
    setPhoneNumberOfUser(e.target.getAttribute("phonenumber"));
    console.log(nowName)
  }

  let msgToSend = (e) => {
    setMsgToSendState(e.target.value)
  }
  let scrolDown = (id) => {
    let elem;
    if (document.getElementById(id) != null) elem = document.getElementById(id), elem.scrollTop = elem.scrollHeight;
  }

  let msgToSendAxios = () => {
    console.log('🔎')
    // AXIOS CALL MSG AND ID IN THE STATE
    // https://project-final-401.herokuapp.com/chat/message/create/
    // axios call =====================================================>
    const config = { headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem('Token')) } };
    const api = axios.create({ baseURL: 'https://project-final-401.herokuapp.com' })
    api.post('/chat/message/create/', {
      message: `${msgToSendState}`,
      sender: "1",
      receiver: currentMsgsUserID,
    }, config)
      .then(response => { console.log(response), refreshDatamsgs() })
      .catch(error => { console.log(error) })
    // axios call =====================================================|


    document.getElementById("xx").value = "";
    setStartEffect("true")
  }

  let refreshDatamsgs = () => {
    console.log('🔎')
    const config = { headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem('Token')) } };
    const api = axios.create({ baseURL: 'https://project-final-401.herokuapp.com' })
    // axios cal =====================================================>
    api.get('/chat/message/', config)
      .then(response => { setChatIsHere(getUserMessageData(response.data)), setLoading(true), setTimeout(() => console.log("wait 📖"), setLoading(false), 2000) })
      .catch(error => { console.log(error) })
    // axios cal =====================================================|
  }

  if (isLoading) {
    return <div  className="flex h-10 w-10 h-max w-max  p-[5rem] m-auto drop-shadow-2xl"><div className=" inline-block m-auto pt-[4rem] h-max w-max rounded-full "><div className="inline-block rounded-full relative m-auto"><Image className="animate-ping rounded-full " height={500} width={700} src={spining}/></div></div></div>;
  }
  return (
    <div className="pt-[4rem] min-h-[10rem] min-w-full rounded-md ">
      <div className="shadow-2xl bg-[#F8F8FB] ml-4 -mt-4 h-[45rem] min-h-full min-w-[100%] rounded-md ">
        <div className="min-w-full min-h-full p-4">
          <div className="grid grid-cols-[300px_600px_150px]">
            <div className="pl-2 text-xl">
              <div className="mb-3 font-normal text-[#15263a]">
                <Image src={chat} width={30} height={30} />
                Chats
              </div>
              {<button className="text-white" onClick={logMe}>state</button>}

              <div class="flex items-center bg-gray-50 mb-2 rounded-md border-2 border-[#d6ccc8] w-70 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  class=" outline-none ml-0 block bg-gray-50  caret-[#7964da] text-base w-[14rem] "
                  type="text"
                  name=""
                  id=""
                  placeholder=" search..."
                />
              </div>

              <div id='divOfChatSideBox' className="flex flex-col w-auto overflow-auto bg-gray-200 divide-y rounded-md shadow-inner h-[35rem] dark:divide-gray-200/5 ">
                {
                  chatIsHere.namesList.map((personName) => {
                    // chatIsHere[personName][0]['profilePicture']
                    return (<ChatSideBox msgsWith={msgsWith} NameofUser={personName} fullNameForUser={chatIsHere[personName][0]["full_name"]} userID={chatIsHere[personName][0]["id"]} emailForUser={chatIsHere[personName][0]["email"]} phonenumber={chatIsHere[personName][0].phonenumber} recImg={inbox} recName={chatIsHere[personName][0]["full_name"]} />)
                  })
                }
              </div>
            </div>
            <div>
              <div
                id="chatBox"
                className="w-[43rem] shadow-inner rounded overflow-auto flex flex-col divide-y h-[34rem] mt-16 dark:divide-gray-200/5 ml-8"
              >

                {
                  chatIsHere[currentMsgsToShow]?.map((i) => {
                    if (!i["sender"]) return (<ChatMe id={i["date_created"]} msgText={i.message} />)
                    if (i["sender"]) return (<ChatHim id={i["date_created"]}  msgText={i.message} />)
                  })
                }
              </div>

              <div
                name="sendMsgBox"
                className="grid grid-cols-[1fr_50px] ml-16 mt-2 gap-2 justify-center content-center ..."
              >
                <textarea
                  onChange={msgToSend}
                  onKeyPress={(event) => {
                    event.key === "End" && refreshDatamsgs();
                    event.key === "Enter" && msgToSendAxios();
                  }}
                  id="xx"
                  placeholder="Type message..."
                  className="w-[40rem] max-h-[2rem] bg-[#ede9fe] ml-28 text-[#503E9D] inline-block rounded-[1rem] px-2 py-1"
                  name="msg"
                  style={{ overflow: "auto", resize: "none" }}
                  required
                ></textarea>

                <button className="z-50 mr-5">
                  <svg
                    style={{ cursor: "pointer" }}
                    onClick={msgToSendAxios}
                    class="inline-block justify-center my-auto "
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    type="button"
                  >
                    <path
                      d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                      fill="#503E9D"
                      fill-rule="evenodd"
                      stroke="none"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="">
              {nowName && <ChatSideProfile nameOfUser={profileFullName} emailOfUser={emailForUser} phoneNumberOfUser={phoneNumberOfUser} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chats;