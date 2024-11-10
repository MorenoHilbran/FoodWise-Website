import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Restaurant from '../components/Restaurant';
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import Fedwell from '../assets/Fedwell.png'
import Burgreens from '../assets/Burgreens.png'
import Saladstop from '../assets/Saladstop.png'

export function Home(){
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedRestaurant(null);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Restaurant onRestaurantClick={handleRestaurantClick} />
      <Footer />
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          {selectedRestaurant === 'Fedwell' && (
            <Popup 
              restaurant="Fed Well Restaurant"
              imageRestaurant={Fedwell}
              description="Apakah Anda seorang picky eater yang tidak menyukai sayuran? Nah, Fedwell bisa memberikan kesan yang berbeda dengan berbagai pilihan health food-nya yang super lengkap.."
              onClose={closePopup}
            />
          )}
          {selectedRestaurant === 'Burgreens' && (
            <Popup 
              restaurant="Burgreens Restaurant"
              imageRestaurant={Burgreens}
              description="Burgreens adalah rantai makanan nabati terkemuka di Indonesia yang mengkhususkan diri pada masakan Asia & Barat yang lezat. Kami percaya bahwa apa yang kita makan berdampak langsung pada kesehatan kita, kesejahteraan petani, dan kelestarian lingkungan. Burgreens dimulai dengan sangat sederhana pada bulan November 2013 oleh pasangan muda vegan – Max & Helga – yang bersemangat untuk menjadikan gaya hidup sehat dan berkelanjutan sebagai arus utama di kampung halaman mereka; sambil menguji model wirausaha sosial yang menggabungkan dampak sosial positif dan keberlanjutan finansial."
              onClose={closePopup}
            />
          )}
          {selectedRestaurant === 'Saladstop' && (
            <Popup 
              restaurant="Saladstop Restaurant"
              imageRestaurant={Saladstop}
              description="SaladBerhenti! adalah pemimpin dalam menyediakan salad segar dan sehat, bungkus, mangkuk protein super, dan smoothie aktif. Dengan lebih dari 80 outlet di seluruh dunia, SaladStop! berada pada posisi yang baik untuk pertumbuhan lebih lanjut dan berkelanjutan yang didorong oleh tren gaya hidup global menuju pola makan sehat. Merek ini percaya bahwa makan dengan baik tidak boleh menjadi kompromi, memastikan pelanggan selalu memiliki akses terhadap pilihan makanan lezat dan bergizi."
              onClose={closePopup}
            />
          )}
        </div>
      )}
    </div>
  )
}
