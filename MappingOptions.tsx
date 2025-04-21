import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

interface MappingOptionsProps {
  selectedOption: string;
}

const MappingOptions: React.FC<MappingOptionsProps> = ({ selectedOption }) => {
  const handleBoxClick = (direction: string) => {
    console.log(`Clicked ${direction} for ${selectedOption}`);
    // Here you can later trigger your result generation
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 text-green-800">{selectedOption} Mapping Options</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Current to Future Box */}
        <div
          onClick={() => handleBoxClick('Current to Future')}
          className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition cursor-pointer"
        >
          <ArrowRightLeft className="text-green-700" size={48} />
          <h2 className="mt-4 text-xl font-semibold text-gray-700">Current to Future</h2>
        </div>

        {/* Future to Current Box */}
        <div
          onClick={() => handleBoxClick('Future to Current')}
          className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition cursor-pointer"
        >
          <ArrowRightLeft className="text-green-700 rotate-180" size={48} />
          <h2 className="mt-4 text-xl font-semibold text-gray-700">Future to Current</h2>
        </div>
      </div>
    </div>
  );
};

export default MappingOptions;
