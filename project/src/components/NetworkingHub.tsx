import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Video, Users, Search } from 'lucide-react';

export const NetworkingHub: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const contacts = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      online: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      online: false,
    },
  ];

  const groups = [
    {
      id: 1,
      name: 'Tech Alumni 2024',
      members: 156,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Startup Founders',
      members: 89,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contacts List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Contacts</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search contacts..."
                className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {contacts.map((contact) => (
              <motion.div
                key={contact.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedChat(contact.id)}
                className={`flex items-center p-3 rounded-xl cursor-pointer transition-all ${
                  selectedChat === contact.id
                    ? 'bg-blue-50 dark:bg-blue-900/30'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                <div className="relative">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {contact.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800 dark:text-white">{contact.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{contact.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chat Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          {selectedChat ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <img
                    src={contacts.find(c => c.id === selectedChat)?.avatar}
                    alt="Contact"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-800 dark:text-white">
                      {contacts.find(c => c.id === selectedChat)?.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Active now</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                  >
                    <Video size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                  >
                    <MessageCircle size={20} />
                  </motion.button>
                </div>
              </div>

              <div className="h-96 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 mb-4">
                {/* Chat messages would go here */}
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700"
                >
                  Send
                </motion.button>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Select a contact to start chatting</p>
            </div>
          )}
        </motion.div>

        {/* Groups */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Alumni Groups</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
            >
              <Users size={18} className="mr-2" />
              Create Group
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <motion.div
                key={group.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 cursor-pointer"
              >
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-medium text-gray-800 dark:text-white mb-1">{group.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{group.members} members</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};