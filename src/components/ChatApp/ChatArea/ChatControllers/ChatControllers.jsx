import { useState } from 'react';


export default function ChatControllers(){
    const [newMsgInputField, setNewMsgInputField] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMsg = newMsgInputField;
        if(newMsg === ''){
            //Early Return
            return;
        }
        console.log(newMsg);
        setNewMsgInputField('');
    }

    return(
        <div className="ChatControllers">
            <form action="">
                <input type="text" className="msgInputText" value={newMsgInputField} onChange={(e) => setNewMsgInputField(e.target.value)}/>
                <input type="submit" value="Send" className="msgSendButton" onClick={handleSubmit}/>
            </form>
        </div>
    );
}