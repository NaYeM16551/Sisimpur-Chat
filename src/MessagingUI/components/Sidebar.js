import React from "react";
import "../css/Sidebar.css";

// Sample avatar images (replace with your own)
import topAvatar from "../../Assets/bottomAvatar.svg"
import bottomAvatar from "../../Assets/topAvatar.svg";

const Sidebar = () => {
  return (
    <div className="custom-sidebar">
      {/* Top user avatar with a notification bubble */}
      <div className="avatar-container top-avatar">
        <img src={topAvatar} alt="Top User" className="avatar-image" />
        <div className="notification-bubble">1</div>
      </div>

      {/* Main nav items */}
      <nav className="nav-section">
        {/* Home */}
        <div className="nav-item">
          <div className="icon home-icon"></div>
          <span className="nav-label">Home</span>
        </div>

        {/* DMs (active state, purple background, extra notification bubble) */}
        <div className="nav-item active">
          <div className="icon dm-icon"></div>
          <span className="nav-label">Channel</span>
          <div className="notification-bubble red">1</div>
        </div>

        {/* Activity */}
        <div className="nav-item">
          <div className="icon activity-icon"></div>
          <span className="nav-label">Activity</span>
        </div>

        {/* Later */}
        <div className="nav-item">
          <div className="icon later-icon"></div>
          <span className="nav-label">User</span>
        </div>

        {/* More */}
        <div className="nav-item">
          <div className="icon more-icon"></div>
          <span className="nav-label">Clip</span>
        </div>

       
      
      </nav>

      {/* Search icon near the bottom */}
      <div className="nav-item bottom-icon">
        <div className="icon search-icon"></div>
      </div>

       {/* Settings */}
       <div className="nav-item">
          <div className="icon settings-icon"></div>
          <span className="nav-label">Settings</span>
        </div>

      {/* Bottom user avatar with a green presence dot */}
      <div className="avatar-container bottom-avatar">
        <img src={bottomAvatar} alt="Bottom User" className="avatar-image" />
        <div className="presence-dot"></div>
      </div>
    </div>
  );
};

export default Sidebar;
