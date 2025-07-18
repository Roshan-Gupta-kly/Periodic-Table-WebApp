"use client";
import data from "../periodicTable.json";

// Color classes for each group
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

// Normalize different category names into simplified keys
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

// Only first 20 elements
const filteredElements = data.elements.filter((el) => el.number <= 20);

export default function PeriodicTable() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-blue-100 text-gray-800 py-10 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Interactive Periodic Table</h1>
        <p className="text-gray-600">
          Explore the first 20 elements. Click on any element to learn more
          about its properties.
        </p>
      </div>

      {/* === Element Groups Legend (Color Reference Only) === */}
      <div className="bg-white rounded-xl shadow p-4 mb-10 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Element Groups</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(groupColors).map(([group, color]) => (
            <div
              key={group}
              className={`flex items-center space-x-2 border px-3 py-1 rounded-full text-sm cursor-default ${color}`}
            >
              <span className="capitalize">
                {group.replace(/-/g, " ")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* === Periodic Table Grid === */}
      <div className="grid grid-cols-10 gap-4 max-w-5xl mx-auto">
        {filteredElements.map((el) => {
          const normalized = normalizeCategory(el.category);
          const color = groupColors[normalized] || "bg-white border";

          return (
            <div
              key={el.name}
              className={`rounded-xl border shadow-sm p-3 text-center ${color} hover:scale-105 hover:shadow-md transition-all cursor-pointer`}
              title={el.name}
            >
              <div className="text-xs">{el.number}</div>
              <div className="text-xl font-bold">{el.symbol}</div>
              <div className="text-sm">{el.name}</div>
              <div className="text-xs text-gray-500">
                {el.atomic_mass.toFixed(3)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
