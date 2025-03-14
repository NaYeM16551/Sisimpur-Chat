import React, { useState } from 'react';

const MessageInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;
    // You'd typically push the new message to your server or app state
    console.log('Sending message:', inputValue);
    setInputValue('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Message #design-hive"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
