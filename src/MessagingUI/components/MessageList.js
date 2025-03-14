import React from 'react';

const messages = [
  {
    id: 1,
    user: 'Benjamin Mitchell',
    avatar: 'https://placehold.co/40',
    time: '42 mins ago',
    text: "Morning Crew! Who's tackling the hero image for the homepage today?",
  },
  {
    id: 2,
    user: 'Mia Alvarez',
    avatar: 'https://placehold.co/40',
    time: '40 mins ago',
    text: "Morning! I've just got feedback from marketing on the CTA in the call-to-action buttons.",
  },
  {
    id: 3,
    isSeparator: true,
    label: 'Yesterday',
  },
  {
    id: 4,
    user: 'Gabriella Kim',
    avatar: 'https://placehold.co/40',
    time: '10 mins ago',
    text: 'Heads up! Our brainstorm at 3 PM. Looking forward to some fresh ideas!',
  },
  {
    id: 5,
    user: 'Isaac Goldberg',
    avatar: 'https://placehold.co/40',
    time: 'just now',
    text: "Sounds good to me! I'll be there.",
  },
];

const MessageList = () => {
  return (
    <div className="message-list">
      {messages.map((msg) =>
        msg.isSeparator ? (
          <div key={msg.id} className="date-separator">
            {msg.label}
          </div>
        ) : (
          <div key={msg.id} className="message-item">
            <img
              src={msg.avatar}
              alt={`${msg.user} avatar`}
              className="message-avatar"
            />
            <div className="message-content">
              <div className="message-header">
                <span className="message-user">{msg.user}</span>
                <span className="message-time">{msg.time}</span>
              </div>
              <div className="message-text">{msg.text}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MessageList;
