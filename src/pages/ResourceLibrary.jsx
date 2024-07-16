import React from "react";
import RedFooter from "../components/redFooter";
import ImageLinkComponent from "../components/libraryLinks";
import { useLanguage } from "../components/LanguageProvider.jsx";

function ResourceLibrary() {
  const { language } = useLanguage();

  // Translations
  const translations = {
    resourceLibrary: {
      EN: "Resource Library",
      FR: "Bibliothèque de ressources",
    },
    beadingBasics: {
      EN: "Beading basics",
      FR: "Guide de perles",
    },
    jewelryMakingBasics: {
      EN: "Jewelry-making basics",
      FR: "Guide de fabrication de bijoux",
    },
    crochetBasics: {
      EN: "Crochet basics",
      FR: "Guide de crochet",
    },
    airDryClayBasics: {
      EN: "Air-dry clay basics",
      FR: "Argile séchant à l'air",
    },
    polymerClayBasics: {
      EN: "Polymer clay basics",
      FR: "Argile polymère",
    },
    knittingBasics: {
      EN: "Knitting basics",
      FR: "Guide de tricot",
    },
  };

  return (
    <>
      <div className="bg-beige w-full min-h-screen flex flex-col items-center space-y-5 py-4">
        <h1 className="text-red font-Texterius text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl pt-4">
          {translations.resourceLibrary[language]}
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full max-w-screen-xl justify-items-center"
          role="list"
          aria-label={translations.resourceLibrary[language]}
        >
          <ImageLinkComponent
            image="/images/rl1.jpeg"
            link="https://www.thesprucecrafts.com/beadwork-basics-4162854"
            text={translations.beadingBasics[language]}
            textFR={translations.beadingBasics[language]}
            ariaLabel={translations.beadingBasics[language]}
          />
          <ImageLinkComponent
            image="/images/rl2.jpeg"
            link="https://www.kernowcraft.com/jewellery-making-tips/jewellery-making-basics"
            text={translations.jewelryMakingBasics[language]}
            textFR={translations.jewelryMakingBasics[language]}
            ariaLabel={translations.jewelryMakingBasics[language]}
          />
          <ImageLinkComponent
            image="/images/rl3.jpeg"
            link="https://sarahmaker.com/how-to-crochet/"
            text={translations.crochetBasics[language]}
            textFR={translations.crochetBasics[language]}
            ariaLabel={translations.crochetBasics[language]}
          />
          <ImageLinkComponent
            image="/images/rl4.jpeg"
            link="https://www.gatheringbeauty.com/blog/air-dry-clay-tips-tricks"
            text={translations.airDryClayBasics[language]}
            textFR={translations.airDryClayBasics[language]}
            ariaLabel={translations.airDryClayBasics[language]}
          />
          <ImageLinkComponent
            image="/images/rl5.jpeg"
            link="https://www.montmarte.com/blogs/tips-techniques/20-polymer-clay-tips-and-tricks-for-beginners"
            text={translations.polymerClayBasics[language]}
            textFR={translations.polymerClayBasics[language]}
            ariaLabel={translations.polymerClayBasics[language]}
          />
          <ImageLinkComponent
            image="/images/rl6.jpeg"
            link="https://nimble-needles.com/tutorials/how-to-knit-for-beginners/"
            text={translations.knittingBasics[language]}
            textFR={translations.knittingBasics[language]}
            ariaLabel={translations.knittingBasics[language]}
          />
        </div>
      </div>
      <RedFooter />
    </>
  );
}

export default ResourceLibrary;
