import { LogOut, Building, Home, Package, BarChart2, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const items = [
    { label: 'COMPANY', icon: <Building /> },
    { label: 'NATURAL ACCOUNT', icon: <DollarSign /> },
    { label: 'RESIDENCY', icon: <Home /> },
    { label: 'PRODUCT', icon: <Package /> },
    { label: 'STATISTICAL ACCOUNTS', icon: <BarChart2 /> },
    { label: 'NON FIN ACCOUNTS', icon: <BarChart2 /> },
  ];

  return (
    <div className="w-64 bg-green-700 text-white h-screen p-4 space-y-4">
      <h1 className="text-xl font-bold mb-4">TD FRP MAPPING TOOL</h1>
      {items.map((item, i) => (
        <div key={i} className="flex items-center space-x-2 cursor-pointer hover:bg-green-800 p-2 rounded">
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
      <div
        onClick={handleLogout}
        className="flex items-center space-x-2 cursor-pointer hover:bg-red-600 p-2 rounded mt-10"
      >
        <LogOut />
        <span>LOGOUT</span>
      </div>
    </div>
  );
};

export default Sidebar;
