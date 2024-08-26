import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Site</h1>
      
      {/* Subheading */}
      <p className="text-lg text-gray-600 mb-8">
        This is a simple test to check if Tailwind CSS is working.
      </p>
      
      {/* Primary Button */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Primary Button
      </button>
      
      {/* Secondary Button */}
      <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition mt-4">
        Secondary Button
      </button>
    </div>
  )
}
export default App