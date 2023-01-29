import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    image: "/avatar.png",
    text: "This is an amazing product!",
  },
  {
    name: "Jane Doe",
    image: "/avatar.png",
    text: "I highly recommend it!",
  },
  {
    name: "Jim Brown",
    image: "/avatar.png",
    text: "It's very user-friendly!",
  },
  {
    name: "Jill Smith",
    image: "/avatar.png",
    text: "I love the interface!",
  },
  {
    name: "Jack Johnson",
    image: "/avatar.png",
    text: "It's a game changer!",
  },
];

const Testimonial = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center p-4 h-[300px] my-10 bg-blue-500 rounded-xl text-white w-[270px] " id="Testimonial">
      <img className=" h-32 w-32 mb-8" src={testimonial.image} alt="Avatar"/>
      <p className="text-center text-slate-200 mb-10">{testimonial.text}</p>
      <p className="text-center text-white font-bold">{testimonial.name}</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsToShow = testimonials.slice(currentIndex, currentIndex + 4);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex - 4 >= 0 ? currentIndex - 4 : 0
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex + 4 < testimonials.length
        ? currentIndex + 4
        : testimonials.length - 4
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonials</h2>
      <div className="flex gap-8">
        {testimonialsToShow.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.name} />
        ))}
      </div>
      <div className="flex mt-4 mb-8 gap-8">
        <button
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded ml-auto"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
