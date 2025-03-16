"use client";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

// import { useState } from "react";
const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="pt-20 pl-5">
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-25"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
