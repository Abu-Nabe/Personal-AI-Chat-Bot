"use client";

import React, { useEffect, useRef } from "react";
import "./../styles/message.css";
import { useMessageStore } from "../state/message_state";

const MessageLayout: React.FC = () => {
    const messages = useMessageStore((state) => state.messages); // Get messages from store
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom when new message is added
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]); // Re-run when messages change
    
    return (
        <div className="chat_messages_container">
            {messages.map((msg, index) => (
                <div key={index} className={`chat_message ${msg.role}`}>
                    <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
                </div>
            ))}
            <div ref={messagesEndRef} />

        </div>
    );
};

export default MessageLayout;
