import React from "react";
import { useLanguage } from "./LanguageProvider";

const ImageLinkComponent = ({ image, link, text, textFR }) => {
  const { language } = useLanguage();
  return (
    <a
      href={link}
      className="block relative w-72 h-72 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={image}
        alt={language === "FR" ? textFR : text}
        className="w-full h-full object-cover"
        style={{ filter: "drop-shadow(11px 11px 0px #F2BAC9)" }}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
        <span
          className="text-beige text-3xl p-2 font-Texterius text-center"
          style={{
            textShadow:
              "2px 2px 0 #8C3B51, -2px -2px 0 #8C3B51, 2px -2px 0 #8C3B51, -2px 2px 0 #8C3B51, 0px 2px 0 #8C3B51, 2px 0px 0 #8C3B51, -2px 0px 0 #8C3B51, 0px -2px 0 #8C3B51",
          }}
        >
          {language === "FR" ? textFR : text}
        </span>
      </div>
    </a>
  );
};

export default ImageLinkComponent;
