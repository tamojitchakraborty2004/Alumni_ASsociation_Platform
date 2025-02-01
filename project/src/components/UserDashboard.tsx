import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Star, Users } from 'lucide-react';

export const UserDashboard: React.FC = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS'];
  const achievements = [
    { icon: <Award />, title: 'Top Mentor 2024' },
    { icon: <Star />, title: 'Innovation Award' },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          <div className="relative">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-neumorphic">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-0 right-1/3 bg-blue-600 text-white p-2 rounded-full shadow-lg"
            >
              <Users size={20} />
            </motion.div>
          </div>

          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">John Doe</h2>
            <p className="text-gray-600 dark:text-gray-300">Software Engineer</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-2 space-y-6"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Experience</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Senior Developer</h4>
                <p className="text-gray-600 dark:text-gray-300">Tech Corp • 2020 - Present</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Leading development of cloud-native applications and mentoring junior developers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">MSc Computer Science</h4>
                <p className="text-gray-600 dark:text-gray-300">Tech University • 2018 - 2020</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl"
              >
                <div className="text-blue-600 dark:text-blue-400 mr-3">{achievement.icon}</div>
                <span className="text-gray-800 dark:text-white font-medium">{achievement.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};