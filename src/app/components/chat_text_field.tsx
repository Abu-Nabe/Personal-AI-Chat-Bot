"use client"; 

import React, { useState } from "react";
import "./../styles/chat_text_field.css"; // Import the CSS file

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Message sent:", message);
    setMessage(""); // Clear input after sending
  };

  return (
    <div className='chat_text_container'>
      <input
        className={'chat_text_input'}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button className={'chat_send_button'} onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
