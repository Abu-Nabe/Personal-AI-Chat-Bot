"use client"; 

import React, { useState } from "react";
import "./../styles/chat_text_field.css"; // Import the CSS file
import { API_CHAT_ROUTE } from "../consts/config";

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
  
    setMessage(""); // Reset input field
  
    try {
      const res = await fetch(API_CHAT_ROUTE.CHAT_DIRECTORY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage: text }),
      });
  
      const data = await res.json();
      console.log("API Response:", data); // Log full response
  
      const aiResponse = data?.choices?.[0]?.message?.content || "No valid response";
      setResponse(aiResponse);
      console.log("AI Response:", aiResponse);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error fetching response");
    }
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
      <button className="chat_send_button" onClick={() => sendMessage(message)}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
