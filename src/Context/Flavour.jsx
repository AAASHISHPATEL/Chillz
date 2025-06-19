import React, { createContext, useContext, useState } from "react";

const flavors = [
    {
        id: 1,
        name: "Strawberry Cone",
        color: "from #47C4F6 to #FF6CEE",
        bgColor: "#BE128D",
        title: "Strawberry cone",
        background:
            "radial-gradient(80.53% 192.72% at 0% 0%, #BE128D 0%, #FF6CEE 100%) ",
        src: "../../Strawberry.png",
        alt: "Strawberry Cone",
    },
    {
        id: 2,
        name: "Blueberry Cone",
        color: " from #236CDA to #47C4F6",
        bgColor: "#236CDA",
        title: "Blueberry cone",
        background:
            "radial-gradient(80.53% 192.72% at 0% 0%, #236CDA 0%, #47C4F6 100%)",
        src: "../../Blueberry.png",
        alt: "Blueberry Cone",
    },
    {
        id: 3,
        name: "Chocolate Cone",
        color: "from #FF6CEE to #E0BDB0",
        bgColor: "#9C5C3F",
        title: "Chocolate cone",
        background:
            "radial-gradient(80.53% 192.72% at 0% 0%, #9C5C3F 0%, #E0BDB0 100%)",
        src: "../../Chocolate.png",
        alt: "Chocolate Cone",
    },
    {
        id: 4,
        name: "Evergreen Cone",
        color: "from #2A9949 to #47F66E",
        bgColor: "#2A9949",
        title: "Evergreen cone",
        background:
            " radial-gradient(80.53% 192.72% at 0% 0%, #2A9949 0%, #47F66E 100%)",
        src: "../../Evergreen.png",
        alt: "Evergreen Cone",
    },
];

export const FlavourContext = createContext();

export const useFlavour = () => useContext(FlavourContext);

export const FlavourProvider = ({ children }) => {
    const [selectedFlavor, setSelectedFlavor] = useState(flavors[0]);

    return (
        <FlavourContext.Provider value={{ flavors, selectedFlavor, setSelectedFlavor }}>
            {children}
        </FlavourContext.Provider>
    );
};