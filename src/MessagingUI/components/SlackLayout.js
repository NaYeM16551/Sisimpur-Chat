import React from 'react';
import '../css/SlackLayout.css';

// Example sub-components (see sections below)
import Sidebar from './Sidebar';
import ChannelHeader from './ChannelHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import RightSidebar from './RightSidebar';

const SlackLayout = () => {
  return (
    <div className="slack-container">
      {/* Left sidebar with channels, DMs, etc. */}
      <Sidebar />

      {/* Main content area: channel header, message list, input */}
      <div className="slack-main">
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </div>

      {/* Optional right sidebar (channel details, pinned messages, etc.) */}
      <RightSidebar />
    </div>
  );
};

export default SlackLayout;
