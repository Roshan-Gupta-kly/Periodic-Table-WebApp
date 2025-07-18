"use client";

export default function Quiz() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-white via-purple-50 to-purple-100 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="bg-purple-600 p-4 rounded-full text-white text-3xl">
            🏆
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Chemistry Quiz</h1>
        <p className="text-gray-500 mt-1">
          Test your knowledge of the periodic table
        </p>
      </div>

      {/* Quiz Overview */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-lg w-full space-y-6">
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Quiz Overview
        </h2>
        <div className="flex justify-around text-center">
          <div className="bg-blue-100 text-blue-600 px-4 py-3 rounded-md font-semibold w-24">
            <div className="text-2xl">10</div>
            <div className="text-sm">Questions</div>
          </div>
          <div className="bg-green-100 text-green-600 px-4 py-3 rounded-md font-semibold w-24">
            <div className="text-2xl">5</div>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="bg-purple-100 text-purple-600 px-4 py-3 rounded-md font-semibold w-24">
            <div className="text-2xl">10</div>
            <div className="text-sm">Points Each</div>
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Instructions:</h3>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            <li>Answer all 10 multiple-choice questions</li>
            <li>You have 5 minutes to complete the quiz</li>
            <li>Each correct answer earns you 10 points</li>
            <li>You can review your results at the end</li>
          </ul>
        </div>
        <div className="p-4 rounded-full bg-purple-500 text-white hover:bg-purple-500 cursor-pointer w-fit">
          Start Quiz
        </div>
      </div>
    </div>
  );
}
