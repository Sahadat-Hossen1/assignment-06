import React from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router";
import Profile from './Profile';

export default function Home() {
  const { user, isLogin, isLoading, LogOut } = useAuth();
  const handleLogOut = () => {
    return LogOut;
  };
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
       {
        !user?.uid? <p className="text-gray-600 mt-2">Please login to access your profile</p> : <p className="text-gray-600 mt-2">You are logged in as {user?.displayName}</p>
       }

        <div className="mt-6 flex gap-4 justify-center">
        {
          !user?.uid? (<div>
              <NavLink
            to="/login"
            className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="px-6 py-2 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            Sign Up
          </NavLink>
          </div>):
                    <NavLink
            to="/profile"
            className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Profile
          </NavLink>
        }
        </div>
      </div>
    </div>
  );
}
