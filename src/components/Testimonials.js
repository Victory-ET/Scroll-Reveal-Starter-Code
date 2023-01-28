import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    image: 'avatar.png',
    title: 'John Doe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    image: 'avatar.png',
    title: 'Jane Doe',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    image: 'avatar.png',
    title: 'Bob Doe',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex === testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="relative w-full h-64">
      <button
        className="absolute top-0 left-0 p-4 rounded-l-lg text-white bg-gray-900 hover:bg-gray-800"
        onClick={handlePrevClick}
      >
        <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button
        className="absolute top-0 right-0 p-4 rounded-r-lg text-white bg-gray-900 hover:bg-gray-800"
        onClick={handleNextClick}
      >
        <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>
      </button>
      <div className="relative overflow-hidden h-full">
        <img
          className="w-full h-full object-cover"
          src={testimonials[activeIndex]}
            alt={testimonials[activeIndex].title}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gray-900">
              <h3 className="text-2xl font-medium">{testimonials[activeIndex].title}</h3>
              <p className="text-base">{testimonials[activeIndex].description}</p>
            </div>
          </div>
        </div>
      );
    };
    
    export default Testimonials;
    
