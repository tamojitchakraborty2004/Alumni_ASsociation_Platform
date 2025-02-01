import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { ThemeToggle } from './components/ThemeToggle';
import { UserDashboard } from './components/UserDashboard';
import { NetworkingHub } from './components/NetworkingHub';
import { JobPortal } from './components/JobPortal';
import { EventsCalendar } from './components/EventsCalendar';
import { CertificationsPage } from './components/CertificationsPage';
import { StartupSpace } from './components/StartupSpace';
import { Navigation } from './components/Navigation';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className={`${isDark ? 'dark' : ''}`}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <Navigation />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/networking" element={<NetworkingHub />} />
            <Route path="/jobs" element={<JobPortal />} />
            <Route path="/events" element={<EventsCalendar />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/startup-space" element={<StartupSpace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;