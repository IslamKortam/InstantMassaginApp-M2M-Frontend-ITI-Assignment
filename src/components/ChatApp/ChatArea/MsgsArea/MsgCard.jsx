export default function MsgCard({chatMsg, clientData}){
    console.log(chatMsg.senderId, clientData.id);
    return(
        <div className="row">
            <div className="msgContainer">
                <span className={"msgItem " + (chatMsg.senderId === clientData.id ? "msgItemRight" : "msgItemLeft")} >{chatMsg.text}</span>
                {
                    clientData.id === chatMsg.senderId ? <h1>{chatMsg.isViewed ? "Viewed" : "Not Viewed"}</h1> : <></>
                }
                
            </div>
        </div>
    );
}