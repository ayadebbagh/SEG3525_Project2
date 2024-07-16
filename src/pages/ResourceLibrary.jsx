import React from "react";
import RedFooter from "../components/redFooter";
import ImageLinkComponent from "../components/libraryLinks";
import { useLanguage } from "../components/LanguageProvider.jsx";

function ResourceLibrary() {
  const { language } = useLanguage();
  return (
    <>
      <div className="bg-beige w-full min-h-screen flex flex-col items-center space-y-5 py-4">
        <div className="text-red font-Texterius text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl pt-4">
          Resource Library
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full max-w-screen-xl justify-items-center">
          <ImageLinkComponent
            image="/images/rl1.jpeg"
            link="https://www.thesprucecrafts.com/beadwork-basics-4162854"
            text="Beading basics"
            textFR="Guide de perles"
          />
          <ImageLinkComponent
            image="/images/rl2.jpeg"
            link="https://www.kernowcraft.com/jewellery-making-tips/jewellery-making-basics"
            text="Jewelry-making basics"
            textFR="Guide de fabrication de bijoux"
          />
          <ImageLinkComponent
            image="/images/rl3.jpeg"
            link="https://sarahmaker.com/how-to-crochet/"
            textFR="Guide de crochet"
            text="Crochet basics"
          />
          <ImageLinkComponent
            image="/images/rl4.jpeg"
            link="https://www.gatheringbeauty.com/blog/air-dry-clay-tips-tricks"
            text="Air-dry clay basics"
            textFR="Argile séchant à l'air"
          />
          <ImageLinkComponent
            image="/images/rl5.jpeg"
            link="https://www.montmarte.com/blogs/tips-techniques/20-polymer-clay-tips-and-tricks-for-beginners"
            text="Polymer clay basics"
            textFR="Argile polymère"
          />
          <ImageLinkComponent
            image="/images/rl6.jpeg"
            link="https://nimble-needles.com/tutorials/how-to-knit-for-beginners/"
            text="Knitting basics"
            textFR="Guide de tricot"
          />
        </div>
      </div>
      <RedFooter />
    </>
  );
}

export default ResourceLibrary;
