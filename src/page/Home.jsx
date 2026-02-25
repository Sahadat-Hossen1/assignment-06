import React from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router";

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

  if (user?.uid) {
    return (
      <div>
        <h1>
          welcome {user?.uid}
          <br />
          {user?.displayName}
        </h1>
        <p>please visite your profile</p>
        <NavLink to="/profile">Profile </NavLink>
        <button onClick={LogOut}> logout</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800">Welcome</h2>
        <p className="mt-2 text-gray-500">
          If you already have an account, please login. If you don’t have an
          account, create one.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
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
        </div>
      </div>
    </div>
  );
}
