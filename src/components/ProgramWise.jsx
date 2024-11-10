import React, { useState } from 'react';
import Card2 from './Card2';
import FoodCycle from '../assets/FoodCycle.png';
import FoodSharing from '../assets/FoodSharing.png';
import EduWise from '../assets/EduWise.png';
import FoodCycleDetail from '../assets/FoodCycle.png'; // Detail image
import FoodSharingDetail from '../assets/FoodSharing.png'; // Detail image
import EduWiseDetail from '../assets/EduWise.png'; // Detail image

const ProgramWise = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const programs = [
    {
      image: FoodCycle,
      title: "Food Cycle",
      description: "Merupakan sebuah program daur ulang produk dari sisa makanan",
      followers: "350",
      status: "Best Program",
      fullInfo: "Program ini membantu mengurangi sampah makanan dengan mendaur ulang sisa makanan menjadi produk baru yang berguna.",
      fullInfoImage: FoodCycleDetail // Image for details
    },
    {
      image: FoodSharing,
      title: "Food Sharing",
      description: "Program volunteer dari kolaborasi komunitas untuk berbagi makanan",
      followers: "232",
      status: "",
      fullInfo: "Food Sharing mengajak masyarakat untuk berbagi makanan dengan yang membutuhkan, membantu mengurangi food waste.",
      fullInfoImage: FoodSharingDetail // Image for details
    },
    {
      image: EduWise,
      title: "Edu Wise",
      description: "Berisi konten edukasi tentang pentingnya kesadaran Food Waste di masyarakat",
      followers: "187",
      status: '',
      fullInfo: "Edu Wise memberikan informasi dan edukasi tentang dampak dari food waste dan cara menguranginya.",
      fullInfoImage: EduWiseDetail // Image for details
    }
  ];

  const handleMoreInfo = (program) => {
    setSelectedProgram(program);
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setSelectedProgram(null);
  };

  const handleRegister = () => {
    console.log(`Registering for ${selectedProgram.title}`);
    handleClosePopup(); // Close the popup after registration
    setIsSuccessOpen(true); // Open the success popup
  };

  const handleCloseSuccessPopup = () => {
    setIsSuccessOpen(false);
  };

  return (
    <section className="flex flex-wrap justify-center gap-4 p-5">
      {programs.map((program, index) => (
        <Card2
          key={index}
          image={program.image}
          title={program.title}
          description={program.description}
          followers={program.followers}
          status={program.status}
          onMoreInfo={() => handleMoreInfo(program)} // Pass the function to Card2
        />
      ))}

      {isOpen && selectedProgram && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-1/2">
            <h2 className="font-bold text-xl">{selectedProgram.title}</h2>
            <img 
              src={selectedProgram.fullInfoImage} 
              alt={selectedProgram.title} 
              className="w-full h-48 object-cover rounded-md mt-4"
            />
            <p className="mt-2">{selectedProgram.fullInfo}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 text-black py-2 px-4 rounded-md"
              >
                Tutup
              </button>
              <button
                onClick={handleRegister}
                className="bg-teal-500 text-white py-2 px-4 rounded-md"
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      )}

      {isSuccessOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-1/3 text-center">
            <h2 className="font-bold text-xl">Anda Berhasil Mendaftar!</h2>
            <p className="mt-2">Anda telah berhasil mendaftar untuk program ini.</p>
            <button
              onClick={handleCloseSuccessPopup}
              className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-md"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProgramWise;
