import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Dropdown from '../components/Dropdown';
import API from '../api';

const Dashboard = () => {
  const [selected, setSelected] = useState('');
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      const res = await API.get('/options');
      setOptions(res.data);
    };
    fetchOptions();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-xl font-semibold mb-4">What do you need help with?</h2>
        <Dropdown options={options} selected={selected} onChange={setSelected} />
        <p className="mt-4">You selected: <strong>{selected || 'None'}</strong></p>
      </div>
    </div>
  );
};

export default Dashboard;
