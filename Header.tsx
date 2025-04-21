import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        {/* Update your logo path */}
        <img src="/logo.png" alt="TD Logo" className="h-10" />
        <span className="text-2xl font-bold text-green-700">TD FRP MAPPING TOOL</span>
      </div>
    </header>
  );
};

export default Header;
