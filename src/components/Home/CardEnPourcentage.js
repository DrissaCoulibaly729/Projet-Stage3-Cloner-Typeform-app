import React from 'react';

const CardEnPourcentage = () => {
  return (
    <div className="container mx-auto text-center mt-32 absolute mb-[50%] px-4 bg-white  rounded-br-[100px] rounded-bl-[100px]">
      <div className="mb-2">
        <h1 className="text-5xl font-weight-100">Why Typeform?</h1>
        <p className="text-gray-700 mt-8">Because after switching to us...</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:justify-start p-8 md:px-32">
        <div className="w-full md:w-1/3 p-6">
          <h2 className="text-5xl font-light mb-4">96%</h2>
          <p className="text-gray-700 text-2xl mb-4">of customers say they have a better brand experience</p>
        </div>

        <div className="w-full md:w-1/3 p-6 mt-8 md:mt-0">
          <h2 className="text-5xl font-light mb-4">95%</h2>
          <p className="text-gray-700 text-2xl mb-4">of customers say they gather more data, more easily</p>
        </div>

        <div className="w-full md:w-1/3 p-6 mt-8 md:mt-0">
          <h2 className="text-5xl font-light mb-4">87%</h2>
          <p className="text-gray-700 text-2xl mb-4">of customers say they reveal deeper insights from data</p>
        </div>
      </div>
    </div>
  );
};

export default CardEnPourcentage;
