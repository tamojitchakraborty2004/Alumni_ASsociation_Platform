import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Player } from '@lottiefiles/react-lottie-player';
import { Users, Briefcase, BookOpen } from 'lucide-react';

const statsAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "10,000+", label: "Alumni" },
    { icon: <Briefcase className="w-8 h-8" />, value: "5,000+", label: "Job Postings" },
    { icon: <BookOpen className="w-8 h-8" />, value: "2,500+", label: "Mentorships" }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-900/20 dark:to-purple-900/20" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/30 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Reconnect, Mentor, Grow
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300">
          Join our thriving alumni community and unlock endless possibilities
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300"
          >
            Join Now
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg text-gray-800 dark:text-white rounded-lg shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300"
          >
            Find Alumni
          </motion.button>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={statsAnimation}
            className="flex flex-col items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-neumorphic"
          >
            <div className="mb-4 text-blue-600 dark:text-blue-400">
              {stat.icon}
            </div>
            <span className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {stat.value}
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};