import { X } from "lucide-react";

export default function ElementDetails({ element, onClose }) {
  if (!element) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md md:max-w-lg rounded-xl shadow-lg p-6 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-blue-700 mb-2">
          {element.name} ({element.symbol})
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Atomic Number: <span className="font-medium">{element.number}</span>
        </p>
        <div className="space-y-1 text-sm">
          <p>
            <strong>Atomic Mass:</strong> {element.atomic_mass}
          </p>
          <p>
            <strong>Category:</strong> {element.category}
          </p>
          <p>
            <strong>Phase:</strong> {element.phase}
          </p>
          <p>
            <strong>Appearance:</strong> {element.appearance || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
}
