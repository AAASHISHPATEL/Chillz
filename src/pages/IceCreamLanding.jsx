import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import IceCreams from "../components/IceCreams";
import { useContext } from "react";
import { FlavourContext } from "../Context/Flavour.jsx";
import LargeIceCreamAtBottomRight from "../components/LargeIceCreamAtBottomRight.jsx";

export default function IceCreamLanding() {
   const { flavors, selectedFlavor, setSelectedFlavor } = useContext(FlavourContext);
  const handleFlavorClick = (flavorId) => {
    const flavor = flavors.find((f) => f.id === flavorId);
    if (flavor) {
      setSelectedFlavor(flavor);
    }
    // console.log("Selected Flavor:", flavor.bgColor);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `${selectedFlavor.background}`,
      }}
    >
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="relative z-10 icecream">
        {/* Ice Cream Title */}
        <h1
          className="absolute text-white text-center "
          style={{
            width: "548px",
            height: "281px",
            left: "126px",
            top: "130px",

            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "160px",
            lineHeight: "281px",
          }}
        >
          icecream
        </h1>

        {/* Flavor Title */}
        <div style={{ position: "absolute", left: "126px", top: "370px", width: "571px", height: "99px" }}>
          {flavors.map((flavor) => {
            const isSelected = selectedFlavor.id === flavor.id;
            return (
              <h2
                key={flavor.id}
                className="absolute text-white transition-all duration-500 ease-in-out"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "800",
                  fontSize: "66px",
                  lineHeight: "100%",
                  width: "571px",
                  height: "99px",
                  opacity: isSelected ? 1 : 0,
                  filter: isSelected ? "blur(0px)" : "blur(16px)",
                  transition: "opacity 0.7s, filter 0.7s",
                  pointerEvents: isSelected ? "auto" : "none",
                }}
              >
                {flavor.title}
              </h2>
            );
          })}
        </div>
        <p
          className="absolute text-white"
          style={{
            width: "796px",
            height: "171px",
            left: "126px",
            top: "500px",
            fontFamily: "poppins, sans-serif",
            fontWeight: "600",
            fontSize: "22px",
            lineHeight: "140%",
            color: "#F9F9F9",
          }}
        >
          Embark on a culinary journey of Delight as You Immerse Yourself in Our
          Artisan-Crafted Ice Cream Collection—Each Flavor a Story, Each Scoop
          an Unforgettable Chapter in Your Sweet Odyssey!
          Indulge in a World of
          Imagination, Where Every Scoop Unveils a New Taste Adventure! Choose
          your favorite
        </p>

        {/* Flavor Selection Components */}
          <IceCreams/>

       <LargeIceCreamAtBottomRight/>
      </main>
    </div>
  );
}
