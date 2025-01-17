import React, { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";

const BuyerChat: React.FC = () => {

    const [input, setInput] = useState("");

    return(
        <div>
            <h2>Chat</h2>
            <div>

            </div>

            <form>
                <button 
                onClick={(e) => {
                    e.preventDefault();
                    
                }}
                type="submit">
                    <IoSearch className="text-4xl" />
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