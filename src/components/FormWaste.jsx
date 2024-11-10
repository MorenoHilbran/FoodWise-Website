import React, { useState } from 'react';

const FormWaste = () => {
  const [weight, setWeight] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [images, setImages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleDateChange = (e) => setSelectedDate(e.target.value);
  const handleTimeClick = (time) => setSelectedTime(time);
  const handleTypeClick = (type) => setSelectedType(type);
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
    e.preventDefault(); // Mencegah form tersubmit
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTime && selectedDate && selectedType && images.length > 0) {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 p-10 bg-gray-50">
      <form onSubmit={handleSubmit} className="form-container flex flex-col gap-8 p-6 bg-white rounded-md shadow-md">
        {/* Bagian Gambar */}
        <div className="image-section flex flex-col gap-4">
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="file-input border border-gray-300 rounded-md p-2"
          />
          <div className="uploaded-images flex gap-4">
            {images.map((img, index) => (
              <div key={index} className="bg-gray-300 h-24 w-24 rounded-md flex items-center justify-center">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`upload-${index}`}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Form */}
        <div className="form-section flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <p className="font-semibold">Jenis Makanan Sisa</p>
            {['Makanan Layak Konsumsi', 'Makanan Tak Layak Konsumsi'].map((type) => (
              <button
                key={type}
                onClick={() => handleTypeClick(type)}
                className={`px-4 py-2 rounded-md border ${
                  selectedType === type
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-teal-700 border-teal-500 hover:bg-teal-500 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <p className="font-semibold">Berat Sampah</p>
            <input
              type="range"
              min="1"
              max="50"
              value={weight}
              onChange={handleWeightChange}
              className="w-full"
            />
            <span className="font-semibold">{weight} Kg</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-semibold">Tanggal Pengangkutan</p>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-semibold">Jadwal Pengangkutan</p>
            <div className="flex gap-2">
              {['08:00 - 09:00', '09:00 - 10:00', '16:00 - 17:00'].map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={`px-4 py-2 rounded-md border ${
                    selectedTime === time
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-teal-700 border-teal-500 hover:bg-teal-500 hover:text-white'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit Form
          </button>
        </div>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-md p-6 shadow-lg">
            <h2 className="text-lg font-bold">Form Berhasil Dikirim!</h2>
            <p className="mt-2">Silakan Melanjutkan ke Tahap Selanjutnya!</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleClosePopup}
                className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-md mr-2"
              >
                Tutup
              </button>
                <button className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded-md">
                  Lanjutkan
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormWaste;

