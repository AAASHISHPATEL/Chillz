import React from 'react';
import { useContext } from 'react';
import { FlavourContext } from '../Context/Flavour.jsx'; // 

function IceCreams() {
    const { flavors, selectedFlavor, setSelectedFlavor } = useContext(FlavourContext);

    const handleFlavorClick = (id) => {
        const flavor = flavors.find(f => f.id === id);
        if (flavor) setSelectedFlavor(flavor);
    };

    return (
        <div>
            {flavors.map((flavor, index) => {
                const isSelected = selectedFlavor.id === flavor.id;
                return (
                    <div
                        key={flavor.id}
                        className="absolute cursor-pointer group"
                        style={{
                            width: "137px",
                            height: "147px",
                            left: `${126 + index * 202}px`,
                            top: "790px",
                            zIndex: isSelected ? 2 : 1,
                        }}
                        onClick={() => handleFlavorClick(flavor.id)}
                    >
                        {/* Border Rectangle */}
                        <div
                            className={`absolute border-2 border-white rounded transition-all duration-300 pointer-events-none ${
                                isSelected ? "border-yellow-300 shadow-lg" : ""
                            }`}
                            style={{
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                borderRadius: "4px",
                                zIndex: 1,
                            }}
                        />

                        {/* Ice Cream Icon */}
                        <div
                            className="absolute left-1/2"
                            style={{
                                top: "-40px",
                                transform: "translateX(-50%)",
                                width: "137px",
                                height: "200px",
                                zIndex: 2,
                                pointerEvents: "none",
                            }}
                        >
                            <img
                                src={flavor.src}
                                alt={flavor.alt}
                                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                                style={{
                                    width: "137px",
                                    height: "200px",
                                    objectFit: "contain",
                                    pointerEvents: "auto",
                                    transform: isSelected
                                        ? "rotate(0deg) scale(1)"
                                        : "rotate(0deg) scale(1)",
                                    transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = "rotate(-8deg) scale(1.15)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = isSelected
                                        ? "rotate(0deg) scale(1)"
                                        : "rotate(0deg) scale(1)";
                                }}
                                onClick={() => handleFlavorClick(flavor.id)}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default IceCreams;
