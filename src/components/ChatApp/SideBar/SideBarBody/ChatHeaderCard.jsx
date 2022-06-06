import { useState } from "react";


export default function ChatHeaderCard({chatHeaderData}){
    return(
        <li className={"nav-item chatHeader"}>
            <a href="#" className={"nav-link hoverableChatHeader position-relative" + (chatHeaderData.isActive ? " active" : "")} aria-current="page">
                <svg className="bi me-2" width="16" height="16"> <img src={chatHeaderData.user.photoURL} alt="" width="16" height="16" /> </svg>
                    {chatHeaderData.user.id}
                <span className="badge bg-warning position-absolute end-0 m-lg-1">4</span>
            </a>
        </li>
    );
}