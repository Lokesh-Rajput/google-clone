
import React from 'react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';
import Footer from '../components/Footer';
import './Index.scss';

const GoogleHomepage = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`google-homepage ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <SearchSection />
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <GoogleHomepage />
    </ThemeProvider>
  );
};

export default Index;
