import React, { useState } from "react";
import { IoClose, IoSend } from "react-icons/io5";
import { useAuth } from "../../Context/AuthContext";

interface Message {
    sender_id: string
    recipient_id: string | undefined
    content: string
}

const BuyerChat: React.FC = () => {

    const {user} = useAuth();

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    return(
        <div>
            <h2>Chat</h2>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender_id}</strong>: {msg.content}
                    </div>
            ))}
            </div>

            <form>
                <button 
                onClick={(e) => {
                    e.preventDefault();
                    if(input != "" && input != " "){
                        
                    }
                }}
                type="submit">
                    <IoSend className="text-4xl" />
                </button>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" />
                <button
                onClick={(e) => {
                    e.preventDefault();
                    setInput("");
                }}
                >
                    <IoClose className="text-4xl" />
                </button>
            </form>
        </div>
    )
}

export default BuyerChat;