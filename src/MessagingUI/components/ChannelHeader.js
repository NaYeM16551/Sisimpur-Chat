import React from 'react';

const ChannelHeader = () => {
  return (
    <header className="channel-header">
      <div className="channel-info">
        <h2>#design-hive</h2>
        <span className="channel-star">★</span>
        <span className="channel-divider">|</span>
        <span className="channel-details">Add a bookmark</span>
      </div>

      <div className="channel-actions">
        {/* Typically you'd have icons for notifications, pinned, etc. */}
        <button className="header-icon">🔍</button>
        <button className="header-icon">⋮</button>
        <img
          src="https://placehold.co/32" 
          alt="User Avatar"
          className="header-avatar"
        />
      </div>
    </header>
  );
};

export default ChannelHeader;
