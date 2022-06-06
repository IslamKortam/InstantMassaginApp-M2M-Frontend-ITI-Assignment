import { useState } from "react";
import MsgCard from "./MsgCard";


export default function MsgsArea({chatMsgs}){
    
    return(
        <div id="msgsArea" className="container my-custom-scrollbar2 my-custom-scrollbar scrollbar-primary position-relative">
            {chatMsgs.map((chatMsg => <MsgCard key={chatMsg.id} chatMsg = {chatMsg}/>))}
        </div>
    );
}