import ProfilePicture from "/images/profilepic1.jpeg";
import RecentProject1 from "/images/community5.jpeg";
import RecentProject2 from "/images/community6.jpeg";
import RecentProject3 from "/images/community7.jpeg"; // Add more project images
import RecentProject4 from "/images/community8.jpeg";
import { PlusIcon } from "@heroicons/react/solid"; // Import the PlusIcon from Heroicons React v2
import RedFooter from "../components/redFooter";
import { useLanguage } from "../components/LanguageProvider";
import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const { language } = useLanguage();
  const [time, setTime] = useState("09:00");
  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");
  const [maxTime, setMaxTime] = useState("");
  const [date, setDate] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const notificationSuccess = {
    EN: "Meeting successfully scheduled!",
    FR: "Réunion programmée avec succès !",
  };

  const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    const [hours, minutes] = selectedTime.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));

    if (date.getHours() < 9) {
      setTime("09:00");
    } else if (date.getHours() >= 18) {
      setTime("18:00");
    } else {
      setTime(selectedTime);
    }
  };
  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Set to tomorrow
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
    setMinTime("09:00");
    setMaxTime("18:00");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { date, time });

    // Clear the fields
    setDate("");
    setTime("09:00");

    // Show notification
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const progress = {
    EN: "Progress",
    FR: "Progrès",
  };
  const needHelp = {
    EN: "Need help starting out?",
    FR: "Besoin d'aide pour commencer?",
  };
  const submit = {
    EN: "Submit",
    FR: "Soumettre",
  };
  const crochetDress = {
    EN: "Crochet dress",
    FR: "Robe au crochet",
  };
  const jewelryTray = {
    EN: "Jewelry tray",
    FR: "Plateau à bijoux",
  };
  const clayKeychainCharms = {
    EN: "Clay keychain charms",
    FR: "Porte-clés en argile",
  };
  const meeting = {
    EN: "Schedule a 1-on-1 virtual meeting with one of our craft experts to guide you on your journey!",
    FR: "Planifiez une réunion virtuelle en tête-à-tête avec l'un de nos experts en artisanat pour vous guider dans votre parcours!",
  };

  return (
    <>
      <div className="bg-beige p-6 min-h-screen relative">
        {/* Top Section: Profile Info */}
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={ProfilePicture}
            alt="@MilaMeow"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <div className="text-red font-Texterius text-2xl">@MilaMeow</div>
            <div className="text-red font-Texterius text-lg">Ottawa, ON</div>
          </div>
        </div>

        {/* Bottom Section: Split into two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Progress and Help Sections */}
          <div className="flex flex-col space-y-6">
            {/* Progress Section */}
            <div className="bg-lightPink p-4 rounded-lg shadow-md">
              <div className="text-red font-Texterius text-2xl mb-4">
                {language === "EN" ? progress.EN : progress.FR}
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-red font-Texterius text-base mb-1">
                    {language === "EN" ? crochetDress.EN : crochetDress.FR}
                  </div>
                  <div className="w-full bg-beige h-5 rounded-lg overflow-hidden">
                    <div className="bg-red h-full w-3/5"></div>
                  </div>
                </div>
                <div>
                  <div className="text-red font-Texterius text-base mb-1">
                    {language === "EN" ? jewelryTray.EN : jewelryTray.FR}
                  </div>
                  <div className="w-full bg-beige h-5 rounded-lg overflow-hidden">
                    <div className="bg-red h-full w-4/5"></div>
                  </div>
                </div>
                <div>
                  <div className="text-red font-Texterius text-base mb-1">
                    {language === "EN"
                      ? clayKeychainCharms.EN
                      : clayKeychainCharms.FR}
                  </div>
                  <div className="w-full bg-beige h-5 rounded-lg overflow-hidden">
                    <div className="bg-red h-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Help Section */}
            <div className="bg-lightPink p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="text-red font-Texterius text-center">
                <div className="text-3xl">
                  {language === "EN" ? needHelp.EN : needHelp.FR}
                </div>
                <div className="text-base">
                  {language === "EN" ? meeting.EN : meeting.FR}
                </div>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <input
                  type="date"
                  className="p-2 bg-beige rounded-lg border font-Texterius text-red"
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  className="p-2 rounded-lg bg-beige border font-Texterius text-red"
                  min="09:00"
                  max="18:00"
                  value={time}
                  onChange={handleTimeChange}
                  required
                />
                <button
                  type="submit"
                  className="bg-red text-beige px-4 py-2 font-Texterius rounded-lg"
                >
                  {language === "EN" ? submit.EN : submit.FR}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Recent Projects Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <img
                src={RecentProject1}
                alt="Recent Project 1"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={RecentProject2}
                alt="Recent Project 2"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={RecentProject3}
                alt="Recent Project 3"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={RecentProject4}
                alt="Recent Project 4"
                className="w-full h-56 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Plus icon for adding new posts */}
        <button
          className="absolute bottom-12 lg:bottom-24 right-6 lg:right-12 bg-red text-white rounded-full p-2 shadow-md hover:bg-opacity-80 focus:outline-none"
          aria-label="Add New Post"
        >
          <PlusIcon className="h-8 lg:h-12 w-8 lg:w-12" />
        </button>

        {showNotification && (
          <div className="fixed top-4 right-4 bg-red text-lightPink font-Texterius p-4 rounded-lg shadow-md z-50">
            {language === "EN"
              ? notificationSuccess.EN
              : notificationSuccess.FR}
          </div>
        )}
      </div>

      {/* RedFooter Component */}
      <RedFooter />
    </>
  );
};

export default ProfilePage;
