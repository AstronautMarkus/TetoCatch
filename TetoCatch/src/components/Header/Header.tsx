import * as React from 'react';
import './Header.css';


interface HeaderProps {
  title: string; // Custom header title
  showBackButton?: boolean; //
  onBackButtonClick?: () => void; //
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton, onBackButtonClick }) => {
  return (
    <div className="header-container">
      <img src="/assets/img/image.jpg" alt="icon" className="header-icon" />
      {showBackButton && (
        <button className="back-button" onClick={onBackButtonClick}>
          ←
        </button>
      )}
      <h1 className="header-title">{title}</h1>
    </div>
  );
};

export default Header;
