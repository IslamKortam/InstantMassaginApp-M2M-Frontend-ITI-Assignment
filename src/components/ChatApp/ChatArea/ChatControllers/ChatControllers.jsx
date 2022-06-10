import { useState } from 'react';
import socket from '../../../../helpers/socket-connection';

export default function ChatControllers({currentActiveChatId, appendNewMsg, clientData}){
    const [newMsgInputField, setNewMsgInputField] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMsgText = newMsgInputField;
        if(newMsgText === ''){
            //Early Return
            return;
        }
        const newMsg = {text: newMsgText, receiverId: currentActiveChatId, senderId: clientData.id};
        appendNewMsg(newMsg)
        socket.emit('sendMsg', newMsg);
        setNewMsgInputField('');
    }

    const getControls = () => {
        if(currentActiveChatId === ''){
            return <></>
        }else{
            return(
                <form action="">
                    <input type="text" className="msgInputText" value={newMsgInputField} onChange={(e) => setNewMsgInputField(e.target.value)}/>
                    <input type="submit" value="Send" className="msgSendButton" onClick={handleSubmit}/>
                </form>
            )
        }
    }

    return(
        <div className="ChatControllers">
            {getControls()}
        </div>
    );
}