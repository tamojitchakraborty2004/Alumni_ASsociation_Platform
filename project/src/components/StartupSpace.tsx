import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

export const StartupSpace: React.FC = () => {
  const startups = [
    {
      id: 1,
      name: 'EcoTech Solutions',
      founder: 'Sarah Chen',
      description: 'Sustainable energy solutions for smart cities',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
      votes: 156,
      comments: 32,
    },
    {
      id: 2,
      name: 'HealthAI',
      founder: 'Michael Rodriguez',
      description: 'AI-powered healthcare diagnostics',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80',
      votes: 203,
      comments: 45,
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {startups.map((startup) => (
            <motion.div
              key={startup.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic overflow-hidden"
            >
              <div className="relative">
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-blue-600 text-white p-2 rounded-full"
                  >
                    <Rocket size={20} />
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {startup.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Founded by {startup.founder}
                </p>
                <p className="text-gray-700 dark:text-gray-200 mb-6">
                  {startup.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <ThumbsUp className="mr-2" size={18} />
                      {startup.votes}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <MessageSquare className="mr-2" size={18} />
                      {startup.comments}
                    </motion.button>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <Share2 size={18} />
                  </motion.button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700"
                  >
                    Connect with Founder
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Startup Leaderboard
          </h2>

          <div className="space-y-4">
            {startups
              .sort((a, b) => b.votes - a.votes)
              .map((startup, index) => (
                <motion.div
                  key={startup.id}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl"
                >
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 mr-4">
                      #{index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {startup.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {startup.votes} votes
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};