import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Hackathon Site</h1>
      <div className="flex gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="px-3 py-1 bg-white text-blue-600 rounded-lg shadow hover:scale-105 transform transition"
        >
          {sidebarOpen ? "Close" : "Menu"}
        </button>
      </div>
    </nav>
  );
}

        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transform transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button> */}
