import { useEffect, useRef, useState } from "react";
import SideBar from "./SideBar/SideBar";
import './myStyling.css';
import ChatArea from "./ChatArea/ChatArea";

import socket from "../../helpers/socket-connection";




export default function ChatApp(){
    const [chatHeaders, setChatHeaders] = useState([]);
    const [chatMsgs, setChatMsgs] = useState([]);
    const [currentActiveChatId, setCurrentActiveChatId] = useState('');
    const [clientData, setClientData] = useState({id: ''});

    const chatHeadersRef = useRef(chatHeaders);
    const chatMsgsRef = useRef(chatMsgs);
    const currentActiveChatRef = useRef(currentActiveChatId);


    chatHeadersRef.current = chatHeaders;
    chatMsgsRef.current = chatMsgs;
    currentActiveChatRef.current = currentActiveChatId;

    useEffect(() => {

        socket.on('connect', ()=> {
            console.log('Connected to backend');

        });

        socket.on('clientData', (clientNewData) => {
            setClientData(clientNewData);
        })

        socket.on('chatHeaders', (__chatHeaders) => {
            console.log(chatHeaders);
            setChatHeaders(__chatHeaders);
        });

        socket.on('userStatusChange', (user) => {
            if(user.status === 'ONLINE'){
                setChatHeaders(chatHeadersRef.current.concat([{id: user.userId, user: {id: user.userId, photoURL: 'https://avatars.githubusercontent.com/u/96912018?s=96&v=4'}, notSeenMsgs: 0}]));
            }else{
                setChatHeaders(chatHeadersRef.current.filter(chatHeader => chatHeader.user.id !== user.userId));
            }
        });

        socket.on('receiveMsg', (msg) => {
            if(currentActiveChatRef.current=== msg.senderId){
                setChatMsgs(chatMsgsRef.current.concat(msg));
            }else{
                const newChatHeaders = chatHeadersRef.current.map((chatHeader) => {
                    if(chatHeader.id === msg.senderId){
                        chatHeader.notSeenMsgs++;
                    }
                    return chatHeader;
                });
                setChatHeaders(newChatHeaders);
            }
        });

        socket.on('chat', (data) => {
            const {chatMsgs: newChatMsgs, peerId} = data;
            setChatMsgs(newChatMsgs); 
        });

        socket.on('peerOpendChat', (peerId) => {
            if(peerId === currentActiveChatRef.current){
                const updatedChatMsgs = chatMsgsRef.current.map((msg) => {
                    if(msg.receiverId === peerId){
                        msg.isViewed = true;
                    }
                    return msg;
                });
                setChatMsgs(updatedChatMsgs);
            }
        })
        
        

        /* //On Component Mount
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
        setChatMsgs(chatMsgsTemp); */

    }, []);

    useEffect(() => {
        setChatMsgs([]);
        socket.emit('getChat', currentActiveChatId);
    }, [currentActiveChatId])


    const appendNewMsg = (msg) => {
        setChatMsgs(chatMsgsRef.current.concat(msg));
    }

    const handleChatHeaderChange = (chatID) => {
        if(chatID !== currentActiveChatId){
            setCurrentActiveChatId(chatID);
            socket.emit('opendChat', chatID);

            const updatedChatHeaders = chatHeadersRef.current.map((chatHeader) => {
                if(chatHeader.user.id === chatID){
                    chatHeader.notSeenMsgs = 0;
                    return chatHeader;
                }else{
                    return chatHeader;
                }
            });

            setChatHeaders(updatedChatHeaders);
        }
    }

    return(
        <main>
            <SideBar chatHeaders = {chatHeaders} handleChatHeaderChange = {handleChatHeaderChange} currentActiveChatId = {currentActiveChatId}/>
            <ChatArea clientData = {clientData} chatMsgs = {chatMsgs} currentActiveChatId = {currentActiveChatId} appendNewMsg = {appendNewMsg}/>
            <script src="./scrollBarScript"></script>
        </main>
    );
}