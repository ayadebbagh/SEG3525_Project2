import React from "react";
import RedFooter from "../components/redFooter";
// Ensure the import matches the file name's case

function ResourceLibrary() {
  return (
    <>
      <div className="bg-beige w-full h-screen justify-center items-center flex-col space-y-5">
        <div className="text-red font-Texterius text-center text-7xl pt-4">
          Resource Library
        </div>
      </div>
      <RedFooter />
    </>
  );
}

export default ResourceLibrary;
