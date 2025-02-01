import React from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Award, Shield, CheckCircle } from 'lucide-react';

export const CertificationsPage: React.FC = () => {
  const [showConfetti, setShowConfetti] = React.useState(false);
  
  const certificates = [
    {
      id: 1,
      title: 'Advanced Web Development',
      issueDate: 'March 2024',
      verified: true,
      image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      issueDate: 'February 2024',
      verified: true,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      {showConfetti && <Confetti />}
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic overflow-hidden"
              onHoverStart={() => setShowConfetti(true)}
              onHoverEnd={() => setShowConfetti(false)}
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  {cert.verified && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-green-500 text-white p-2 rounded-full"
                    >
                      <CheckCircle size={20} />
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {cert.title}
                  </h3>
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                </div>

                <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
                  <span>Issued: {cert.issueDate}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-blue-600 dark:text-blue-400"
                    onClick={() => setShowConfetti(true)}
                  >
                    <Shield size={16} className="mr-1" />
                    Verify
                  </motion.button>
                </div>

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Blockchain Verification
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                    <code className="text-sm text-gray-600 dark:text-gray-300 break-all">
                      0x7d5f3e7d5f3e7d5f3e...
                    </code>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};