import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Network, Briefcase, Calendar, Award, Rocket } from 'lucide-react';

export const Navigation: React.FC = () => {
  const links = [
    { to: '/', icon: <Home />, label: 'Home' },
    { to: '/dashboard', icon: <User />, label: 'Profile' },
    { to: '/networking', icon: <Network />, label: 'Network' },
    { to: '/jobs', icon: <Briefcase />, label: 'Jobs' },
    { to: '/events', icon: <Calendar />, label: 'Events' },
    { to: '/certifications', icon: <Award />, label: 'Certificates' },
    { to: '/startup-space', icon: <Rocket />, label: 'Startups' },
  ];

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 p-4">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-4"
      >
        <ul className="space-y-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/50'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`
                }
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  {link.icon}
                </motion.div>
                <span className="hidden lg:block">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};