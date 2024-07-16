// src/components/Challenge.js

import React from "react";
import { useLanguage } from "./LanguageProvider";

const Challenge = () => {
  const { language } = useLanguage();
  const challengeText = {
    EN: "Craft Challenge",
    FR: "Défi de l'artisanat",
  };
  const challengeDescription = {
    EN: "Participate in our latest craft challenge! Create a unique piece of jewelry using recycled materials and stand a chance to win exciting prizes!",
    FR: "Participez à notre dernier défi artisanal ! Créez un bijou unique en utilisant des matériaux recyclés et courez la chance de gagner des prix excitants !",
  };
  const buttonText = {
    EN: "Join Now",
    FR: "Rejoignez maintenant",
  };
  return (
    <div className="p-4 bg-lightPink shadow-lg rounded-lg w-full h-72 md:h-96 lg:h-128 flex flex-col justify-center items-center">
      <h2 className="text-red font-Texterius text-center text-2xl md:text-3xl lg:text-4xl mb-4">
        {language === "EN" ? challengeText.EN : challengeText.FR}
      </h2>
      <p className="text-red font-Texterius text-center mb-4">
        {language === "EN" ? challengeDescription.EN : challengeDescription.FR}
      </p>
      <button className="bg-red text-beige font-Texterius text-lg py-2 px-4 rounded-full">
        {language === "EN" ? buttonText.EN : buttonText.FR}
      </button>
    </div>
  );
};

export default Challenge;
