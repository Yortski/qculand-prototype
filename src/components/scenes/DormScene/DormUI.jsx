import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { dormScenarios } from './scenarios';

export default function DormUI({ onScenarioComplete, onFeedback }) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const scenario = dormScenarios[index];

  const handleChoice = (choice) => {
    setFeedback(choice.feedback);
    if (onFeedback) onFeedback(choice.feedback);
  };

  const handleNext = () => {
    setFeedback(null);
    if (index < dormScenarios.length - 1) setIndex(index + 1);
    else onScenarioComplete();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center p-6 pointer-events-none">
      
      <AnimatePresence>
        {!feedback && (
          <motion.div
            key={scenario.id}
            className="bg-white rounded-3xl p-5 max-w-md text-center shadow-lg pointer-events-auto relative"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 180, damping: 15 }}
          >
            <h2 className="text-xl text-[#1e1e1e] font-semibold mb-2">{scenario.title}</h2>
            <p className="text-gray-700 mb-4">{scenario.text}</p>

            <div className="space-y-2">
              {scenario.choices.map((choice, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleChoice(choice)}
                  className="w-full py-2 px-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition"
                  whileTap={{ scale: 0.95 }}
                >
                  {choice.text}
                </motion.button>
              ))}
            </div>

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {feedback && (
          <motion.div
            key="feedback-modal"
            className="absolute inset-0 flex justify-center items-center bg-black/20 pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <p className="text-gray-800 text-lg mb-4">{feedback}</p>
              <motion.button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                whileTap={{ scale: 0.95 }}
              >
                Continue
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
