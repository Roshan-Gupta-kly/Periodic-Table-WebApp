"use client";
import { useState } from "react";
import data from "../periodicTable.json";
import ElementDetails from "../components/ElementsDetails";

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center p-4">
      <div className="grid grid-cols-[repeat(18,64px)] grid-rows-[repeat(7,64px)] gap-[2px] mx-auto">
        {data.elements.map((element) => (
          <div
            key={element.name}
            className="bg-blue-200 text-sm text-center border rounded p-1 cursor-pointer hover:bg-blue-300 transition"
            style={{
              gridColumnStart: element.xpos,
              gridRowStart: element.ypos,
            }}
            onClick={() => setSelectedElement(element)}
            title={element.name}
          >
            <div className="font-bold flex items-center justify-center">
              {element.symbol}
            </div>
            <div className="text-xs">{element.number}</div>
          </div>
        ))}
      </div>

      {/* Show the element details modal if selected */}
      <ElementDetails
        element={selectedElement}
        onClose={() => setSelectedElement(null)}
      />
    </div>
  );
}
