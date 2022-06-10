import ChatHeaderCard from "./ChatHeaderCard";


export default function SideBarBody({chatHeaders, handleChatHeaderChange, currentActiveChatId}){
    
    return(
        <div className="list-group my-custom-scrollbar scrollbar-primary ">
            <ul className="nav nav-pills mb-auto ulHead">
                {
                    chatHeaders.map(chatHeader => <ChatHeaderCard key={chatHeader.id}
                                                     chatHeaderData={chatHeader}
                                                     handleChatHeaderChange = {handleChatHeaderChange}
                                                     currentActiveChatId = {currentActiveChatId}
                                                     />)
                }
            </ul>
        </div>
    );
}