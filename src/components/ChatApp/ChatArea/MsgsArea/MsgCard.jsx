import { useState } from "react";


export default function MsgCard({chatMsg}){
    console.log(chatMsg);
    return(
        <div className="row">
            <div className="msgContainer">
                <span className={"msgItem " + (chatMsg.senderId === 'imkortam' ? "msgItemRight" : "msgItemLeft")} >{chatMsg.text}</span>
            </div>
        </div>
    );
}