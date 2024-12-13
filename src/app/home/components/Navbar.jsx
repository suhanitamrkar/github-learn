"use client"
import { useState } from "react";

export default function ResponsiveNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-4 bg-blue-500 text-white">
        <div className="text-xl font-bold">Logo</div>
        {/* Navbar links (hidden on small screens) */}
        <ul className="hidden md:flex gap-4">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
        {/* Hamburger menu (visible on small screens) */}
        <button
          className="block md:hidden p-2"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform z-50 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 bg-red-500 text-white rounded m-4"
        >
          Close
        </button>
        <ul className="p-4">
          <li className="p-2 hover:bg-gray-100">Home</li>
          <li className="p-2 hover:bg-gray-100">About</li>
          <li className="p-2 hover:bg-gray-100">Services</li>
          <li className="p-2 hover:bg-gray-100">Contact</li>
        </ul>
      </div>
    </div>
  );
}
