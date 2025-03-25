import React, { useState } from 'react';
import qoute from '../assets/qutotion.svg';
import { GoArrowLeft } from 'react-icons/go';
import { GoArrowRight } from 'react-icons/go';
const Salider = () => {
  const slides = [
    {
      id: 1,
      img: qoute,
      des: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      name: 'John Doe',
      prof: 'Chief Strategy officer @ Company',
    },
    {
      id: 2,
      img: qoute,
      des: 'Eshan Ahamed Ahad  full stack web developer. They has been involved in web development and software profession for 5+ years.',
      name: 'Ehsan Ahamed',
      prof: 'Chief officer Hablu @ Company',
    },
    {
      id: 3,
      img: qoute,
      des: 'Mambar of Hablu Programmer  .',
      name: 'MD Asif',
      prof: 'Designer @ Company',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { img, des, name, prof } = slides[currentIndex];
  return (
    <section className="flex justify-center items-center  bg-transparent  text-white px-4">
      <div className="max-w-2xl w-full p-6  rounded-lg shadow-lg text-center relative">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-2/3 transform -translate-y-1/2 bg-gray-400/30 p-2 rounded-md hover:text-primary"
        >
          <GoArrowLeft size={16} />
        </button>
        <div className="flex flex-col items-center space-y-6 ">
          <div className="bg-[#183A40] w-14 h-14 rounded-full flex items-center justify-center ">
            <img src={img} alt="quote" className="w-8 h-8 " />
          </div>
          <p className="text-lg italic text-gray-300">{des}</p>
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-teal-400">{name}</h1>
            <span className="text-sm text-gray-400">{prof}</span>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-2/3 transform -translate-y-1/2 bg-gray-400/30 p-2 rounded-md hover:text-primary"
        >
          <GoArrowRight size={16} />
        </button>
        {/* Slider dod dod */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? 'bg-teal-400' : 'bg-gray-500'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Salider;
