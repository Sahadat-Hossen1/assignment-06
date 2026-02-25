import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Profile() {
  const navigate = useNavigate();
  const { user, LogOut,isLoading } = useAuth();

// 
  if (isLoading) return <h1>Loading...</h1>;
  if (!user) return <h1>No user found</h1>;
  // 
  const handleSignOut = async() => {
    await LogOut();
    setTimeout(() => {
      return navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-sm text-center">
        {/* <div className="flex justify-center">
            <img
              src={photo}
              alt={name}
              className="w-28 h-28 rounded-full border-4 border-indigo-500 object-cover"
            />
          </div> */}

        <span className="inline-block mt-4 px-4 py-1 text-sm rounded-full bg-indigo-100 text-indigo-600 font-semibold">
           roll: {user?.roll}
          </span>

        <h1 className="mt-3 text-2xl font-bold text-gray-800">{user?.displayName}</h1>
        <p className="text-gray-500">{user?.email}</p>

        <div className="mt-6 flex gap-3">
          {/* <button className="w-full py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Profile
            </button> */}
          <button
            onClick={handleSignOut}
            className="w-full py-2 rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
