import React from 'react'
import { useContext } from 'react';
import { FlavourContext } from '../Context/Flavour.jsx'; // 

function LargeIceCreamAtBottomRight() {
     const { flavors, selectedFlavor, setSelectedFlavor } = useContext(FlavourContext);
  return (
    <div
      style={{
        position: "absolute",
        width: "1250px",
        height: "2238px",
        top: "164px",
        left: "1064px",
        pointerEvents: "none",
      }}
    >
      {flavors.map((flavor) => {
        const isSelected = selectedFlavor.id === flavor.id;
        return (
          <img
            key={flavor.id}
            src={flavor.src}
            alt={flavor.alt}
            style={{
              position: "absolute",
              width: "587px",
              height: "1104px",
              objectFit: "contain",
              transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
              opacity: isSelected ? 1 : 0,
              zIndex: isSelected ? 2 : 1,
              pointerEvents: "none",
              left: isSelected ? 0 : "900px",
              top: isSelected ? 0 : "1600px",
              transform: isSelected ? "scale(1)" : "scale(0.5) rotate(20deg)",
            }}
          />
        );
      })}
    </div>
  );
}

export default LargeIceCreamAtBottomRight
