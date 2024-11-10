import React from 'react';
import Meal from './Meal';
import Food from './Food';
import FoodDetail from './FoodDetail';
import SereNana from '../assets/SereBanana.png';
import SereBerry from '../assets/SereBerry.png';
import EggVege from '../assets/EggVege.png';
import ChicVege from '../assets/ChicVege.png';
import TunaVege from '../assets/TunaVege.png';
import Capcay from '../assets/Capcay.png';
import ChicRoast from '../assets/ChicRoast.png';
import ChicSal from '../assets/ChicSal.png';
import MasVege from '../assets/MasVege.png';
// import fat from '../assets/fat.png';
import protein from '../assets/protein.png';
import carbo from '../assets/carbo.png';


const Suggestion = () => (
    <section className='p-10'>
        <h2 className="text-3xl text-teal-400 font-bold text-center p-10">
            REKOMENDASI JADWAL MAKANAN SEHAT
        </h2>

        <div className="bg-[#ECECEC] w-full m-auto justify-center h-[650px] rounded-xl mb-5 p-10">
            <div className="flex">
                <Meal title="SARAPAN" calorie="245 Kalori" />
            </div>
            <div className="flex justify-between">
                <div className='w-1/2 '>
                    <Food 
                        image={SereNana} 
                        food="SereNana" 
                        detail="135 Kalori" 
                        amntFat="40gr"
                        amntCarbo="65gr"
                        amntProtein="27gr"
                    />
                    <Food 
                        image={SereBerry} 
                        food="SereBerry" 
                        detail="156 Kalori" 
                        amntFat="40gr"
                        amntCarbo="65gr"
                        amntProtein="27gr"
                    />
                    <Food 
                        image={EggVege} 
                        food="EggVege" 
                        detail="185 Kalori" 
                        amntFat="40gr"
                        amntCarbo="65gr"
                        amntProtein="27gr"
                    />
                </div>
                <div className="w-1/2 ">
                    <FoodDetail
                        headline="Breakfast Notes"
                        description="Catatan Sarapan ini mencakup rekomendasi makanan berdasarkan kebutuhan kalori, dengan tiga pilihan utama: Serebanana, Sereberry, dan Eggvege. Serebanana merupakan kombinasi sereal sehat dengan potongan pisang yang kaya serat dan energi. Sereberry menawarkan variasi sereal dengan tambahan buah beri segar yang kaya antioksidan dan vitamin. Eggvege adalah menu telur dengan campuran sayuran yang seimbang, memberikan asupan protein dan serat yang ideal untuk memulai hari. Ketiga pilihan ini dirancang untuk memberikan nutrisi lengkap dengan kalori yang sesuai kebutuhan tubuh."
                    />
                </div>
            </div>
        </div>

        <div className="bg-[#ECECEC] w-full m-auto justify-center p-10 h-[600px] rounded-xl mb-5">
            <div className="flex">
                <Meal title="MAKAN SIANG" calorie="245 Kalori" />
            </div>
            <div className="flex justify-between">
                <div className='w-1/2'>
                    <Food image={ChicVege} 
                    food="ChicVege" 
                    detail="135 Kalori" 
                    amntFat="40gr"
                    amntCarbo="65gr"
                    amntProtein="27gr"
                    />
                    <Food image={TunaVege} 
                    food="TunaVege" 
                    detail="156 Kalori" 
                    amntFat="40gr"
                    amntCarbo="65gr"
                    amntProtein="27gr"
                    />
                    <Food image={Capcay} 
                    food="Capcay" 
                    detail="185 Kalori" 
                    amntFat="40gr"
                    amntCarbo="65gr"
                    amntProtein="27gr"
                    />
                </div>
                <div className="w-1/2">
                    <FoodDetail
                    headline="Lunch Notes"
                    description="Catatan Makan Siang ini menghadirkan rekomendasi makanan yang seimbang berdasarkan kebutuhan kalori, dengan tiga pilihan utama: Chicvege, Tunavege, dan Capcay. Chicvege adalah sajian ayam panggang yang dipadukan dengan sayuran segar, memberikan asupan protein dan serat yang optimal. Tunavege menawarkan kombinasi tuna kaya omega-3 dengan sayuran hijau untuk keseimbangan nutrisi dan energi. Sedangkan Capcay, terdiri dari berbagai sayuran yang dimasak dengan sedikit minyak, memberikan pilihan rendah kalori namun kaya serat dan vitamin untuk menjaga energi di siang hari."
                    />
                </div>
            </div>
        </div>

        <div className="bg-[#ECECEC] w-full m-auto justify-center p-10 h-[600px] rounded-xl mb-20">
            <div className="flex">
                <Meal title="MAKAN MALAM" calorie="245 Kalori" />
            </div>
            <div className="flex justify-between">
                <div className='w-1/2'>
                    <Food image={ChicRoast} 
                    food="ChicRoast" 
                    detail="135 Kalori" 
                    amntFat="40gr"
                    amntCarbo="65gr"
                    amntProtein="27gr"
                    />
                    <Food image={ChicSal} 
                    food="ChicSal" 
                    detail="156 Kalori" 
                    amntFat="40gr"
                    amntCarbo="65gr"
                    amntProtein="27gr"
                    />
                    <Food image={MasVege} 
                    food="MasVege" 
                    detail="185 Kalori" 
                    amntFat="40gr"
                    amntCarbo="65gr"
                    amntProtein="27gr"
                    />
                </div>
                <div className="w-1/2">
                    <FoodDetail
                    headline="Dinner Notes"
                    description="Catatan Makan Malam ini menyajikan rekomendasi makanan berdasarkan kebutuhan kalori dengan tiga pilihan utama: Chicroast, Chicsal, dan Masvege. Chicroast adalah ayam panggang yang rendah lemak namun kaya akan protein, ideal untuk makan malam yang ringan namun mengenyangkan. Chicsal menawarkan salad ayam dengan sayuran segar, memberikan keseimbangan antara protein dan serat untuk pencernaan yang baik. Sedangkan Masvege adalah hidangan mashed potato dengan tambahan sayuran, menciptakan pilihan yang lembut namun kaya nutrisi untuk malam yang lebih santai."
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Suggestion;
