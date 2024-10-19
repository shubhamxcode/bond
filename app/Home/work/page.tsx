"use client"
import React, { useState } from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';

interface Card{
  id: number;
  num: number;
  image: JSX.Element;
  step: string;
  description: string;
}
const cards: Card[]= [
  { id: 1, num: 1, image: <IoCreateOutline />, step: 'Step 1: Signup', description: "Create Accounts using GitHub and LeetCode to Earn Points and Enhance Website Development Skills" },
  { id: 2, num: 2, image: <IoCreateOutline />, step: 'Step 2: Login with GitHub/LeetCode', description: "Create Accounts on GitHub and LeetCode to Earn Points and Enhance Website Development Skills" },
  { id: 3, num: 3, image: <IoCreateOutline />, step: 'Step 3: Select Your Field', description: "Create Accounts on GitHub and LeetCode to Earn Points and Enhance your profile and unlock developer sticker" },
];

function Work() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectcard = cards.find((card) => selectedId === card.id);

  return (
    <div className=''>
      <div id='content'>
        <h1 className='hover:underline text-center text-5xl font-bold'>HOW IT WORKS?</h1>
      </div>
      <div className='flex flex-wrap justify-around ' id='cards'>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={String(card.id)}
            className='hover:cursor-pointer'
            onClick={() => setSelectedId(selectedId === card.id ? null : card.id)}
          >
            <div className='m-5 text-balance h-72 flex flex-col border border-slate-600 text-center items-center justify-center shadow-2xl shadow-gray-400 transition-all duration-300 hover:scale-110 hover:bg-slate-900'>
              <h1 className='text-2xl w-10 h-10 rounded-2xl bg-gray-600'>{card.num}</h1>
              <h2 className='text-3xl'>{card.image}</h2>
              <h2 className='text-xl text-green-500'>{card.step}</h2>
              <p className='text-lg text-balance'>{card.description}</p>
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectcard && (
            <motion.div
              key={selectcard.id}
              layoutId={String(selectcard.id)}
              className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className='bg-white p-5 rounded-lg shadow-lg text-center'>
                <motion.div>
                  <motion.h5 className='m-auto text-2xl w-10 h-10 rounded-2xl bg-gray-600'>{selectcard.num}</motion.h5>
                  <motion.h2 className='text-xl text-green-500'>{selectcard.step}</motion.h2>
                  <motion.h2 className='text-lg text-slate-800'>{selectcard.description}</motion.h2>
                </motion.div>
                <motion.button
                  className='bg-blue-700 text-white p-4 mt-4'
                  onClick={() => setSelectedId(null)}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Work;
