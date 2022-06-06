import ChatTitle from './ChatTitle/ChatTitle';
import MsgsArea from './MsgsArea/MsgsArea';
import ChatControllers from './ChatControllers/ChatControllers';


export default function ChatArea({chatMsgs}){
    
    return(
        <div className="chatAreaDiv">
            <ChatTitle />
            <MsgsArea chatMsgs={chatMsgs}/>
            <ChatControllers />
        </div>
    );
}