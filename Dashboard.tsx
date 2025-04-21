import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <main className="flex-1 bg-gray-100 p-8">
          <h1 className="text-2xl font-bold mb-6">Welcome to the Dashboard!</h1>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Select an option from the left sidebar.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
