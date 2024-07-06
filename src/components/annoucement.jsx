import React from "react";

const Announcement = () => {
  return (
    <div className="p-4 bg-lightPink shadow-lg rounded-lg w-full h-72 md:h-96 lg:h-128 flex flex-col justify-center items-center">
      <h2 className="text-red font-Texterius text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
        Upcoming Workshop
      </h2>
      <p className="text-red font-Texterius text-center mb-4">
        Join our virtual workshop on crafting amazing jewelry pieces. Learn tips
        and tricks from experts and connect with fellow craft enthusiasts!
      </p>
      <button className="bg-red text-beige font-Texterius text-lg py-2 px-4 rounded-full">
        Register Now
      </button>
    </div>
  );
};

export default Announcement;
