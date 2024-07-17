import React from "react";
import { useLanguage } from "./LanguageProvider";
import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon

const Announcement = () => {
  const { language } = useLanguage();
  const [showNotification, setShowNotification] = useState(false);

  const announcementText = {
    EN: "Join our virtual workshop on crafting amazing jewelry pieces. Learn tips and tricks from experts and connect with fellow craft enthusiasts!",
    FR: "Rejoignez notre atelier virtuel sur la fabrication de superbes bijoux. Apprenez des astuces et des conseils d'experts et connectez-vous avec d'autres passionnés d'artisanat !",
  };
  const buttonText = {
    EN: "Register Now",
    FR: "Inscrivez-vous maintenant",
  };
  const title = {
    EN: "Upcoming Workshop",
    FR: "Atelier à venir",
  };
  const notificationSuccess = {
    EN: "You have successfully registered! An email with the details is sent to you.",
    FR: "Vous vous êtes inscrit avec succès! Un email avec les détails vous est envoyé.",
  };

  const handleButtonClick = () => {
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };
  return (
    <div className="p-4 bg-lightPink shadow-lg rounded-lg w-full h-72 md:h-96 lg:h-128 flex flex-col justify-center items-center">
      <h2 className="text-red font-Texterius text-2xl md:text-3xl lg:text-4xl mb-4 text-center">
        {language === "EN" ? title.EN : title.FR}
      </h2>
      <p className="text-red font-Texterius text-center mb-4">
        {language === "EN" ? announcementText.EN : announcementText.FR}
      </p>
      <button
        className="bg-red text-beige font-Texterius text-lg py-2 px-4 rounded-full"
        onClick={handleButtonClick}
      >
        {language === "EN" ? buttonText.EN : buttonText.FR}
      </button>
      {showNotification && (
        <div className="fixed top-4 right-4 bg-red text-lightPink font-Texterius p-4 rounded-lg shadow-md z-50 flex items-center">
          <span className="flex-grow">
            {language === "EN"
              ? notificationSuccess.EN
              : notificationSuccess.FR}
          </span>
          <button onClick={handleCloseNotification} className="ml-4">
            <FaTimes className="text-lightPink" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Announcement;
