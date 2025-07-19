"use client";
import { useEffect, useState } from "react";

const groupColors = {
  "alkali metal": "bg-pink-100 text-pink-800 border-pink-300",
  "alkaline earth metal": "bg-orange-100 text-orange-800 border-orange-300",
  "transition metal": "bg-yellow-100 text-yellow-800 border-yellow-300",
  "post-transition metal": "bg-green-100 text-green-800 border-green-300",
  metalloid: "bg-blue-100 text-blue-800 border-blue-300",
  nonmetal: "bg-purple-100 text-purple-800 border-purple-300",
  halogen: "bg-pink-100 text-pink-800 border-pink-300",
  "noble gas": "bg-indigo-100 text-indigo-800 border-indigo-300",
};

function normalizeCategory(category) {
  if (!category) return "unknown";
  const cat = category.toLowerCase();
  if (cat.includes("noble gas")) return "noble gas";
  if (cat.includes("alkali metal") && !cat.includes("earth")) return "alkali metal";
  if (cat.includes("alkaline earth")) return "alkaline earth metal";
  if (cat.includes("transition metal")) return "transition metal";
  if (cat.includes("post-transition")) return "post-transition metal";
  if (cat.includes("metalloid")) return "metalloid";
  if (cat.includes("nonmetal")) return "nonmetal";
  if (cat.includes("halogen")) return "halogen";
  return "unknown";
}

export default function PeriodicTable() {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch first 20 elements from DB
  useEffect(() => {
    const fetchElements = async () => {
      try {
        const res = await fetch("/api/elements");
        const data = await res.json();
        setElements(data);
      } catch (error) {
        console.error("Error loading elements:", error);
      }
    };
    fetchElements();
  }, []);

  const handleClick = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/elements/${id}`);
      const element = await res.json();
      setSelectedElement(element);
    } catch (error) {
      console.error("Error fetching element:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-blue-100 text-gray-800 py-10 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Interactive Periodic Table</h1>
        <p className="text-gray-600">
          Explore the first 20 elements. Click on any element to learn more
          about its properties.
        </p>
      </div>

      <div className="grid grid-cols-10 gap-4 max-w-5xl mx-auto">
        {elements.map((el) => {
          const normalized = normalizeCategory(el.category);
          const color = groupColors[normalized] || "bg-white border";

          return (
            <div
              key={el.atomic_number}
              onClick={() => handleClick(el.id)}
              className={`rounded-xl border shadow-sm p-3 text-center ${color} hover:scale-105 hover:shadow-md transition-all cursor-pointer`}
              title={el.name}
            >
              <div className="text-xs">{el.atomic_number}</div>
              <div className="text-xl font-bold">{el.symbol}</div>
              <div className="text-sm">{el.name}</div>
              <div className="text-xs text-gray-500">
                {Number(el.atomic_mass).toFixed(3)}
              </div>
            </div>
          );
        })}
      </div>

      {selectedElement && (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            {selectedElement.name} ({selectedElement.symbol})
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Atomic Number:</strong> {selectedElement.atomic_number}</p>
            <p><strong>Atomic Mass:</strong> {selectedElement.atomic_mass}</p>
            <p><strong>Density:</strong> {selectedElement.density}</p>
            <p><strong>Boiling Point:</strong> {selectedElement.boil}</p>
            <p><strong>Melting Point:</strong> {selectedElement.melt}</p>
            <p><strong>Category:</strong> {selectedElement.category}</p>
            <p><strong>Discovered By:</strong> {selectedElement.discovered_by}</p>
            <p><strong>Appearance:</strong> {selectedElement.appearance}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="text-center mt-6 text-blue-600 font-semibold">
          Loading element details...
        </div>
      )}
    </div>
  );
}
