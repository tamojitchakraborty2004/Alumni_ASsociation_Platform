import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import { Video, Users, MessageSquare } from 'lucide-react';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const EventsCalendar: React.FC = () => {
  const [date, setDate] = useState<Value>(new Date());
  
  const events = [
    {
      id: 1,
      title: 'Tech Alumni Meetup',
      date: new Date(2024, 2, 25),
      type: 'Virtual',
      attendees: 45,
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    },
    {
      id: 2,
      title: 'Career Development Workshop',
      date: new Date(2024, 2, 28),
      type: 'Hybrid',
      attendees: 120,
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          <Calendar
            onChange={setDate}
            value={date}
            className="w-full bg-transparent"
          />
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Upcoming Events
          </h2>

          <div className="space-y-6">
            {events.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col md:flex-row gap-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.date.toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg">
                      {event.type}
                    </span>
                  </div>

                  <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Users className="mr-2" size={18} />
                      {event.attendees} attending
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="mr-2" size={18} />
                      Live Q&A
                    </div>
                  </div>

                  <div className="mt-6 flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg"
                    >
                      RSVP Now
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 flex items-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg"
                    >
                      <Video className="mr-2" size={18} />
                      Join Virtual
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Live Poll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-neumorphic p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Live Poll: Next Workshop Topic
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['AI & Machine Learning', 'Blockchain Development', 'Cloud Architecture'].map((topic, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl text-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  {topic}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(index + 1) * 25}%` }}
                    className="bg-blue-600 h-2 rounded-full"
                  />
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {(index + 1) * 25}% votes
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};