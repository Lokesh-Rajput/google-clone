
import React from 'react';
import { Grid3X3, User } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import './Header.scss';

const Header = () => {
  return (
    <header className="google-header">
      <div className="header-left">
        <a href="#" className="header-link">About</a>
        <a href="#" className="header-link">Store</a>
      </div>
      
      <div className="header-right">
        <a href="#" className="header-link">Gmail</a>
        <a href="#" className="header-link">Images</a>
        <DarkModeToggle />
        <button className="notifications-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </button>
        <button className="apps-btn">
          <Grid3X3 size={20} />
        </button>
        <button className="profile-btn">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
