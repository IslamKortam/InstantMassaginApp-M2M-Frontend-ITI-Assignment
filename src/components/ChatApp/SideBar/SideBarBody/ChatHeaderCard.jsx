import { useState } from "react";
import socket from "../../../../helpers/socket-connection";


export default function ChatHeaderCard({chatHeaderData, currentActiveChatId, handleChatHeaderChange}){
    
    const handleChatChange = () => {
        //socket.emit('openedChat', currentActiveChatId);
        handleChatHeaderChange(chatHeaderData.user.id)
    }

    return(
        <li className={"nav-item chatHeader"}>
            <a href="#" className={"nav-link hoverableChatHeader position-relative" + (chatHeaderData.user.id === currentActiveChatId ? " active" : "")} aria-current="page" onClick={handleChatChange}>
                <svg className="bi me-2" width="16" height="16"> <img src={chatHeaderData.user.photoURL} alt="" width="16" height="16" /> </svg>
                    {chatHeaderData.user.id}
                    {chatHeaderData.notSeenMsgs > 0 ? <span className="badge bg-warning position-absolute end-0 m-lg-1">{chatHeaderData.notSeenMsgs}</span>: <></>}
            </a>
        </li>
    );
}