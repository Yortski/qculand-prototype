import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultQuestions = [
  {
    id: 1,
    q: 'An email asks for your university password to "renew access". What should you do?',
    choices: ['Reply with password', 'Ignore and report', 'Click the link and login'],
    answer: 1
  },
  {
    id: 2,
    q: 'You see two websites offering the same textbook. The URL looks unusual on one. What is a red flag?',
    choices: ['Low price', 'Mismatched domain and brand', 'Both are safe by default'],
    answer: 1
  },
  {
    id: 3,
    q: 'You find a USB drive labeled "Exam Notes" in the library. Best action?',
    choices: ['Plug it in to inspect', 'Hand it to IT/security', 'Post about it online'],
    answer: 1
  }
];

export default function LibraryUI({ visible, onClose, questions = defaultQuestions }) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const reset = () => {
    setIdx(0); setScore(0); setSelected(null);
  };

  const handleSelect = (i) => setSelected(i);

  const handleSubmit = () => {
    if (selected == null) return;
    if (selected === questions[idx].answer) setScore(s => s + 1);
    setSelected(null);
    if (idx + 1 >= questions.length) {
      // finished
      onClose?.({ score: score + (selected === questions[idx].answer ? 1 : 0), total: questions.length });
      reset();
    } else {
      setIdx(i => i + 1);
    }
  };

  const handleClose = () => {
    onClose?.(null);
    reset();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 z-50 pointer-events-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4"
          >
            <h3 className="text-2xl font-bold mb-3">Cipher — Library Quiz</h3>
            <p className="text-sm text-gray-600 mb-4">Chat with Cipher and answer quick questions to test your awareness.</p>

            <div className="mb-4">
              <div className="font-medium mb-2">Question {idx + 1} / {questions.length}</div>
              <div className="mb-3 text-gray-800">{questions[idx].q}</div>
              <div className="space-y-2">
                {questions[idx].choices.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`w-full text-left p-3 rounded ${selected === i ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} `}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
              <button onClick={handleClose} className="px-4 py-2 bg-gray-200 rounded">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
