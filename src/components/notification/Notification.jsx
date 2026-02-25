import React from "react";

export default function Notification({ message, type }) {
  if (!message) return null;

  const baseStyle =
    "fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg text-white font-medium";

  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div className={`${baseStyle} ${styles[type] || "bg-gray-500"} transition-all duration-300`}>
      {message}
    </div>
  );
}