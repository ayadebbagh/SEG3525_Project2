// src/components/Challenge.js

import React from "react";

const Challenge = () => {
  return (
    <div className="p-4 bg-lightPink shadow-lg rounded-lg w-full h-72 md:h-96 lg:h-128 flex flex-col justify-center items-center">
      <h2 className="text-red font-Texterius text-center text-2xl md:text-3xl lg:text-4xl mb-4">
        Craft Challenge
      </h2>
      <p className="text-red font-Texterius text-center mb-4">
        Participate in our latest craft challenge! Create a unique piece of
        jewelry using recycled materials and stand a chance to win exciting
        prizes!
      </p>
      <button className="bg-red text-beige font-Texterius text-lg py-2 px-4 rounded-full">
        Join Now
      </button>
    </div>
  );
};

export default Challenge;
