import React from "react";
import RedFooter from "../components/redFooter";
import ImageLinkComponent from "../components/libraryLinks";
// Ensure the import matches the file name's case

function ResourceLibrary() {
  return (
    <>
      <div className="bg-beige w-full h-screen justify-center items-center flex-col space-y-5">
        <div className="text-red font-Texterius text-center text-7xl pt-4">
          Resource Library
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 justify-items-center justify-center gap-x-9 gap-y-5">
          <ImageLinkComponent
            image="./src/assets/images/rl1.jpeg"
            link="https://www.thesprucecrafts.com/beadwork-basics-4162854"
            text="Beading basics"
          />
          <ImageLinkComponent
            image="./src/assets/images/rl2.jpeg"
            link="https://www.kernowcraft.com/jewellery-making-tips/jewellery-making-basics"
            text="Jewelry-making basics"
          />
          <ImageLinkComponent
            image="./src/assets/images/rl3.jpeg"
            link="https://sarahmaker.com/how-to-crochet/"
            text="Crochet basics"
          />
          <ImageLinkComponent
            image="./src/assets/images/rl4.jpeg"
            link="https://www.gatheringbeauty.com/blog/air-dry-clay-tips-tricks"
            text="Air-dry clay basics"
          />
          <ImageLinkComponent
            image="./src/assets/images/rl5.jpeg"
            link="https://www.montmarte.com/blogs/tips-techniques/20-polymer-clay-tips-and-tricks-for-beginners"
            text="Polymer clay basics"
          />
          <ImageLinkComponent
            image="./src/assets/images/rl6.jpeg"
            link="https://nimble-needles.com/tutorials/how-to-knit-for-beginners/"
            text="Knitting basics"
          />
        </div>
      </div>
      <RedFooter />
    </>
  );
}

export default ResourceLibrary;
