'use client';

// components/Chatbot.js
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    addResponseMessage('Welcome to the doctor\'s office!');
  }, []);

  const handleNewUserMessage = async (newMessage: any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Send the message to the backend server
    const response = await fetch('http://localhost:3001/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage })
    });
    const data = await response.json();
    addResponseMessage(data.response);
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Doctor's Chatbot"
        subtitle="Ask me anything"
      />
    </div>
  );
};

export default Chatbot;
