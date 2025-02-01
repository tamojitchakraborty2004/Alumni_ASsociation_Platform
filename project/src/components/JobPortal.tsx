import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TinderCard from 'react-tinder-card';
import { Briefcase, MapPin, DollarSign, Clock, Upload } from 'lucide-react';

export const JobPortal: React.FC = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      salary: '$120k - $150k',
      type: 'Full-time',
      logo: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80&q=80',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'New York, NY',
      salary: '$130k - $160k',
      type: 'Full-time',
      logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80&q=80',
    },
  ]);

  const onSwipe = (direction: string) => {
    console.log('You swiped: ' + direction);
  };

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Job Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 relative h-[600px]"
        >
          <div className="absolute w-full h-full">
            {jobs.map((job) => (
              <TinderCard
                key={job.id}
                onSwipe={onSwipe}
                preventSwipe={['up', 'down']}
                className="absolute w-full h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-8"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-16 h-16 rounded-xl object-cover mr-4"
                      />
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          {job.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg">
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="mr-2" size={20} />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <DollarSign className="mr-2" size={20} />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="mr-2" size={20} />
                      Posted 2 days ago
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      Job Description
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We are looking for an experienced developer to join our team...
                    </p>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 flex justify-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg"
                    >
                      Skip
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg"
                    >
                      Apply
                    </motion.button>
                  </div>
                </motion.div>
              </TinderCard>
            ))}
          </div>
        </motion.div>

        {/* Resume Upload */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          <div className="text-center p-8">
            <div className="mb-6">
              <Upload className="w-16 h-16 mx-auto text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Upload Your Resume
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Let our AI analyze your resume and match you with the perfect opportunities
            </p>
            <motion.label
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg cursor-pointer inline-block"
            >
              Upload Resume
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
            </motion.label>
          </div>

          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Resume Score
            </h4>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:bg-blue-900 dark:text-blue-400">
                    Strong
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                    85%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 dark:bg-blue-900/30">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1 }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};