import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'תודה על פנייתך! נציג יחזור אליך בהקדם.', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">צ'אט עם נציג</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {messages.map((message, index) => (
              <Alert key={index} className={`mb-2 ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <AlertTitle>{message.sender === 'user' ? 'את/ה' : 'נציג'}</AlertTitle>
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="הקלד/י הודעה..."
              className="w-full p-2 border rounded"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
