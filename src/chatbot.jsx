import React, { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 Welcome to Hypertest Inc. How can I help you?"
    }
  ]);

  const getReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("service")) {
      return "We provide Software Development, Web Development, IoT Solutions and Digital Transformation services.";
    }

    if (msg.includes("contact")) {
      return "You can contact our team through the Contact Us section on this website.";
    }

    if (msg.includes("about")) {
      return "Hypertest Inc. focuses on technology, innovation and digital solutions.";
    }

    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello! 😊 How can I help you today?";
    }

    return "Thanks for your message! Please visit our Contact Us section for more information.";
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const userMessage = message.trim();

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
      { sender: "bot", text: getReply(userMessage) }
    ]);

    setMessage("");
  };

  return (
    <div className="chatbot">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div>
              <strong>Hypertest Assistant</strong>
              <small>Online | Here to help</small>
            </div>

            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form className="chat-input" onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">➤</button>
          </form>
        </div>
      )}

      <button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "×" : "💬"}
      </button>
    </div>
  );
}

export default Chatbot;