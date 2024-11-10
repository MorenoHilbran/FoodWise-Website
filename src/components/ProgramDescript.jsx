/**
 * Komponen ProgramDescript menampilkan deskripsi tentang program Food Wise
 * Program Food Wise memiliki tiga pilar utama: FoodCycle, FoodSharing, dan Edu Wise
 * FoodCycle berfokus pada pendistribusian makanan berlebih dari produsen dan pengecer
 * FoodSharing memfasilitasi komunitas untuk berbagi makanan berlebih dengan sesama
 * Edu Wise memberikan edukasi kepada masyarakat tentang pentingnya pengelolaan makanan
 * yang bijak serta cara mengurangi sampah makanan melalui gaya hidup berkelanjutan
 */
import React from 'react';

const ProgramDescript = () => {
  return (
    <div>
        <p className='text-lg mx-24  my-24 text-black'>
       <span className='text-xl text-gray-400 font-bold'>
        Food Wise Program </span> adalah sebuah inisiatif untuk mengurangi food waste melalui tiga
        pilar utama: FoodCycle, FoodSharing, dan Edu Wise. FoodCycle berfokus pada
        pendistribusian makanan berlebih dari produsen dan pengecer kepada pihak yang
        membutuhkan, memastikan makanan tidak terbuang percuma. FoodSharing
        memfasilitasi komunitas untuk berbagi makanan berlebih dengan sesama, menciptakan
        solidaritas dan kesadaran lingkungan. Sementara itu, Edu Wise memberikan edukasi
        kepada masyarakat tentang pentingnya pengelolaan makanan yang bijak serta cara
        mengurangi sampah makanan melalui gaya hidup berkelanjutan.
      </p>
    </div>
  );
};

export default ProgramDescript;
