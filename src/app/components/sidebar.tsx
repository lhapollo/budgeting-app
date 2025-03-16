"use client";

import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const links = [
  { name: "Budget", path: "/budget" },
  { name: "Expenses", path: "/expenses" },
  { name: "Reports", path: "/reports" },
];

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
            {links.map((link) => (
              <li key={link.name} className="mb-2">
                <Link
                  href={link.path}
                  onClick={toggleSidebar} // Close the sidebar when a link is clicked
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
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
