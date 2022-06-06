import { useEffect, useState } from "react";
import SideBar from "./SideBar/SideBar";
import './myStyling.css';
import ChatArea from "./ChatArea/ChatArea";


export default function ChatApp(){
    const [chatHeaders, setChatHeaders] = useState([]);
    const [chatMsgs, setChatMsgs] = useState([]);


    useEffect(() => {
        //On Component Mount
        const chatHeadersTemp = [
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '123'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, isActive: true, id: '1212415512'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '15145'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '124141'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '13124'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '153423'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '12124124'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
            {user: {id: '123', photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, id: '1212143'},
        ];
        setChatHeaders(chatHeadersTemp);


        const chatMsgsTemp = [
            {id: '123dd2', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dfsdsf32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dsffds32', text: 'Hello from my app', senderId: 'imrtam'},
            {id: '12fsqwr32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dfsdsf32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dsffds32', text: 'Hello from my app', senderId: 'imrtam'},
            {id: '12fsqwr32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dfsdsf32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dsffds32', text: 'Hello from my app', senderId: 'imrtam'},
            {id: '12fsqwr32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dfsdsf32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dsffds32', text: 'Hello from my app', senderId: 'imrtam'},
            {id: '12fsqwr32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dfsdsf32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dsffds32', text: 'Hello from my app', senderId: 'imrtam'},
            {id: '12fsqwr32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dfsdsf32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dsffds32', text: 'Hello from my app', senderId: 'imrtam'},
            {id: '12fsqwr32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dfsdsf32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dsffds32', text: 'Hello from my app', senderId: 'imrtam'},
            {id: '12fsqwr32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dfsdsf32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dsffds32', text: 'Hello from my app', senderId: 'imrtam'},
            {id: '12fsqwr32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dfsdsf32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12dsffds32', text: 'Hello from my app', senderId: 'imrtam'},
            {id: '12fsqwr32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '12aaa32', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '123fsgdf2', text: 'Hello from my app', senderId: 'imkortam'},
            {id: '212refsddg', text: 'Hello from my app', senderId: 'imkortam'},
        ];
        setChatMsgs(chatMsgsTemp);
    }, [])

    return(
        <main>
            <SideBar chatHeaders = {chatHeaders}/>
            <ChatArea chatMsgs = {chatMsgs}/>
            <script src="./scrollBarScript"></script>
        </main>
    );
}