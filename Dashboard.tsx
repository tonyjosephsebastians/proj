import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MappingOptions from '../components/MappingOptions';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar onSelect={(option) => setSelectedOption(option)} />

        {/* Main Area */}
        <main className="flex-1 bg-gray-100 p-8">
          {!selectedOption ? (
            <div className="text-gray-500 text-center mt-20 text-lg">
              Please select an option from the left sidebar.
            </div>
          ) : (
            <MappingOptions selectedOption={selectedOption} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
