import ChatHeaderCard from "./ChatHeaderCard";


export default function SideBarBody({chatHeaders}){
    
    return(
        <div className="list-group my-custom-scrollbar scrollbar-primary ">
            <ul className="nav nav-pills mb-auto ulHead">
                {
                    chatHeaders.map(chatHeader => <ChatHeaderCard key={chatHeader.id} chatHeaderData={chatHeader} />)
                }
            </ul>
        </div>
    );
}