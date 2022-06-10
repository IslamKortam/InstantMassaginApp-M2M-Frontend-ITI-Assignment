import ChatTitle from './ChatTitle/ChatTitle';
import MsgsArea from './MsgsArea/MsgsArea';
import ChatControllers from './ChatControllers/ChatControllers';


export default function ChatArea({chatMsgs, currentActiveChatId, appendNewMsg, clientData}){
    
    return(
        <div className="chatAreaDiv">
            <ChatTitle />
            <MsgsArea clientData = {clientData} chatMsgs={chatMsgs}/>
            <ChatControllers clientData = {clientData} currentActiveChatId = {currentActiveChatId} appendNewMsg = {appendNewMsg}/>
        </div>
    );
}