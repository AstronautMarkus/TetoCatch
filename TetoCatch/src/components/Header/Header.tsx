import * as React from 'react';
import { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackButtonClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton, onBackButtonClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = (section: string) => {
    window.location.hash = section; // Change URL>
    setIsSidebarOpen(false); // Close sidebar
  };

  return (
    <div className="header-container">
      <button className="hamburger-menu" onClick={handleMenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <img src="/assets/img/image.jpg" alt="icon" className="header-icon" />
      <h1 className="header-title">{title}</h1>
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-close'}`}>
        <button onClick={() => handleCloseSidebar('home')} className="sidebar-item">
          <FontAwesomeIcon icon={faHome} /> Home
        </button>
        <button onClick={() => handleCloseSidebar('videos')} className="sidebar-item">
          <FontAwesomeIcon icon={faVideo} /> Videos
        </button>
        <button onClick={() => handleCloseSidebar('about')} className="sidebar-item">
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </button>
      </div>
    </div>
  );
};

export default Header;
