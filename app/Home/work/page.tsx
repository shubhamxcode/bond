"use client"
import React from 'react'
import { IoCreateOutline } from "react-icons/io5";
 const cards=[
  {id:1,num:1,image:<IoCreateOutline />,step:'step1:signup',description:"Create Accounts using GitHub and LeetCode to Earn Points and Enhance Website Development Skills"},
  {id:2,num:2,image:<IoCreateOutline />,step:'step1:login with github/leetcode',description:"Create Accounts on GitHub and LeetCode to Earn Points and Enhance Website Development Skills"},
  {id:3,num:3,image:<IoCreateOutline />,step:'step1:select your field',description:"Create Accounts on GitHub and LeetCode to Earn Points and Enhance Website Development Skills"},
]
function work() {
  return (
    <div className=''>
      <div className=''id='content'>
        <h1 className='hover:underline text-center  text-5xl font-bold'>HOW IT WORKS?</h1>
      </div>
      <div className='flex flex-wrap justify-evenly' id='cards'>
        {cards.map((card)=>(
          <div key={card.id} className=''>
            <div className=' m-5 text-balance w-full h-72 flex flex-col border border-slate-600 text-center items-center justify-center shadow-2xl shadow-gray-400  transition-all duration-300 hover:scale-110  hover:bg-slate-900'>
            <h1 className=' text-2xl w-10 h-10 rounded-2xl bg-gray-600'>{card.num}</h1>
            <h2 className='text-3xl'>{card.image}</h2>
            <h2 className='text-xl text-green-500'>{card.step}</h2>
            <p className='text-lg '>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default work