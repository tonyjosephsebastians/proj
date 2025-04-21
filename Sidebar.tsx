import React from 'react';
import { Home, Building2, DollarSign, Box, BarChart2, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Building2 size={22} />, label: 'COMPANY' },
    { icon: <DollarSign size={22} />, label: 'NATURAL ACCOUNT' },
    { icon: <Home size={22} />, label: 'RESIDENCY' },
    { icon: <Box size={22} />, label: 'PRODUCT' },
    { icon: <BarChart2 size={22} />, label: 'STATISTICAL ACCOUNTS' },
    { icon: <BarChart2 size={22} />, label: 'NON FIN ACCOUNTS' },
    { icon: <LogOut size={22} />, label: 'LOGOUT' },
  ];

  return (
    <aside className="w-72 bg-green-700 text-white flex flex-col py-6 px-4">
      <div className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-green-600 hover:bg-green-500 p-4 rounded-xl cursor-pointer transition"
          >
            {item.icon}
            <span className="font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
