import React from "react";

interface TopNavbarProps {
  message?: string; // Optional prop for the message
}

const TopNavbar: React.FC<TopNavbarProps> = ({ message }) => {
  return (
    <div className="w-full bg-muted py-2 border-b">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          {message || "Welcome! Stay updated with our latest news."}
        </p>
      </div>
    </div>
  );
};

export default TopNavbar;
