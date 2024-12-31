import * as React from 'react';
import './Header.css';

interface HeaderProps {
  title: string; // Custom header title
  showBackButton?: boolean; //
  onBackButtonClick?: () => void; //
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton, onBackButtonClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="header-container">
      <button className="hamburger-menu" onClick={handleMenuToggle}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <img src="/assets/img/image.jpg" alt="icon" className="header-icon" />
      {showBackButton && (
        <button className="back-button" onClick={onBackButtonClick}>
          ←
        </button>
      )}
      <h1 className="header-title">{title}</h1>
      {isSidebarOpen && (
        <div className="sidebar">
          <a href="#option1" className="sidebar-item">Option 1</a>
          <a href="#option2" className="sidebar-item">Option 2</a>
          <a href="#option3" className="sidebar-item">Option 3</a>
        </div>
      )}
    </div>
  );
};

export default Header;
