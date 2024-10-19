import React from 'react';

function Page() {
  interface carddatatype{
    id: number;
    num: number;
    image: string;
    title: string;
    description: string;
  }

  const cards:carddatatype[]= [
    { id: 1, num: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDae2FQmZxBZZdMuR0L_VlMjAwNUeSSB0Abw&s', title: 'Developer Interaction', description: 'Create accounts using GitHub and LeetCode to earn points and enhance website development skills.' },
    { id: 2, num: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDae2FQmZxBZZdMuR0L_VlMjAwNUeSSB0Abw&s', title: 'Profile Enhancement', description: 'Enhance your profile with achievements and projects on GitHub and LeetCode.' },
    { id: 3, num: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDae2FQmZxBZZdMuR0L_VlMjAwNUeSSB0Abw&s', title: 'Guidance Chatbot', description: 'Receive guidance and suggestions from our chatbot based on your progress.' },
    { id: 4, num: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDae2FQmZxBZZdMuR0L_VlMjAwNUeSSB0Abw&s', title: 'Leaderboard System', description: 'Compete with peers and track your performance on the leaderboard.' },
    { id: 5, num: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDae2FQmZxBZZdMuR0L_VlMjAwNUeSSB0Abw&s', title: 'Skill Badges', description: 'Earn badges for completing challenges and improving your skills.' },
    { id: 6,num: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDae2FQmZxBZZdMuR0L_VlMjAwNUeSSB0Abw&s', title: 'Community Support', description: 'Connect with other developers for support and networking opportunities.' },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center p-4">
      <h1 className="text-6xl font-bold text-white mb-8">Features</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-black text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 border border-gray-700"
          >
            <img src={card.image} alt={card.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{card.num}. {card.title}</h2>
              <p className="text-gray-300">{card.description}</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
