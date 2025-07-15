"use client";
import { useState } from "react";
import data from "../periodicTable.json";
import ElementDetails from "../components/ElementsDetails";

export default function PeriodicTable() {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex flex-col items-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        🧪 Interactive Periodic Table
      </h1>

      {/* Responsive Periodic Table */}
      <div className="overflow-auto">
        <div className="grid grid-cols-[repeat(18,minmax(40px,48px))] grid-rows-[repeat(10,48px)] gap-[4px] min-w-[900px]">
          {data.elements.map((element) => (
            <div
              key={element.name}
              className="group backdrop-blur-md bg-white/60 hover:bg-blue-200/70 border border-gray-300 hover:border-blue-400 transition-all duration-300 rounded-xl cursor-pointer p-2 flex flex-col items-center justify-center shadow-sm hover:scale-105"
              style={{
                gridColumnStart: element.xpos,
                gridRowStart: element.ypos,
              }}
              onClick={() => setSelectedElement(element)}
              title={element.name}
            >
              <div className="font-semibold text-gray-800 text-base group-hover:text-blue-800">
                {element.symbol}
              </div>
              <div className="text-[10px] text-gray-600 group-hover:text-blue-700">
                {element.number}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Element Details Modal */}
      <ElementDetails
        element={selectedElement}
        onClose={() => setSelectedElement(null)}
      />
    </div>
  );
}
