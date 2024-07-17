import React from "react";
import RedFooter from "../components/redFooter";
import { useLanguage } from "../components/LanguageProvider.jsx";

function ComingSoon() {
  const { language } = useLanguage();

  // Translations
  const translations = {
    soon: {
      EN: "This tutorial is coming Soon!",
      FR: "Ce tutoriel arrive bientôt!",
    },
  };

  return (
    <>
      <div className="bg-beige w-full min-h-screen flex flex-col items-center space-y-5 py-4">
        <h1 className="text-red font-Texterius text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl pt-4">
          {translations.soon[language]}
        </h1>
      </div>
      <RedFooter />
    </>
  );
}

export default ComingSoon;
