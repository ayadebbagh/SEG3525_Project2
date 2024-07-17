import React, { useState } from "react";
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
    EN: "The details",
    FR: "Les détails",
  };

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="relative p-4 bg-lightPink shadow-lg rounded-lg w-full h-72 md:h-96 lg:h-128 flex flex-col justify-center items-center">
      <h2 className="text-red font-Texterius text-center text-2xl md:text-3xl lg:text-4xl mb-4">
        {language === "EN" ? challengeText.EN : challengeText.FR}
      </h2>
      <p className="text-red font-Texterius text-center mb-4">
        {language === "EN" ? challengeDescription.EN : challengeDescription.FR}
      </p>
      <button
        className="bg-red text-beige font-Texterius text-lg py-2 px-4 rounded-full mb-2"
        onClick={handlePopupToggle}
      >
        {language === "EN" ? buttonText.EN : buttonText.FR}
      </button>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-lightPink shadow-lg rounded-lg p-4 max-w-md text-center">
            <div className="text-red font-Texterius text-lg mb-4">
              {language === "EN"
                ? "How to Participate:"
                : "Comment participer :"}
            </div>
            <p className="text-red font-Texterius mb-4">
              {language === "EN"
                ? "Create a unique piece of jewelry using recycled materials and share it as a post on our community page. Don't forget to use the hashtag #CraftChallengeRecycled. Participants will stand a chance to win exciting prizes!"
                : "Créez un bijou unique en utilisant des matériaux recyclés et partagez-le en tant que publication sur notre page communautaire. N'oubliez pas d'utiliser le hashtag #DéfiArtisanatRecyclé. Les participants auront la chance de gagner des prix excitants !"}
            </p>
            <button
              className="bg-red text-beige font-Texterius text-lg py-2 px-4 rounded-full"
              onClick={handlePopupToggle}
            >
              {language === "EN" ? "I'm in!" : "C'est parti!"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge;
