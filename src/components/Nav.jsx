import React, { useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
const {isLogin,user}=useAuth()
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive
        ? "bg-indigo-600 text-white shadow"
        : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
    }`;

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3">
      <ul className="flex items-center justify-between w-42 mx-auto">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          { user?.uid ? (
            <NavLink to="/profile" className={linkClass}>
              profile
            </NavLink>
          ) : (
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}