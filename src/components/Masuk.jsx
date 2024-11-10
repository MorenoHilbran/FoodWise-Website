import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Input from './Input';
import WasteImage from '../assets/waste.png'; // Replace with your actual image

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // Simulate login action
  const handleLogin = () => {
    // Logic for authentication or API call can be added here

    // Navigate to the home page after login
    navigate('/home'); // Adjust the route to your actual home page route
  };

  return (
    <section className="flex items-center justify-center h-screen relative overflow-hidden bg-gray-100">
      {/* Left Side - Image and Text */}
      <div
        className={`absolute inset-0 w-full md:w-1/2 h-full bg-teal-400 flex flex-col justify-center items-start p-16 text-white transition-transform duration-500 ease-in-out ${
          isLogin ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h1 className="text-4xl font-bold mb-6">Foodwise</h1>
        <p className="text-lg mb-10">
          Mari, untuk hidup sehat<br />
          Solusi Hidup Sehat <br />
          Dengan Makanan <br />
          Sehat & Bergizi <br />
        </p>
      </div>

      {/* Right Side - Form (Login/Sign Up) */}
      <div
        className={`absolute inset-0 w-full md:w-1/2 h-full bg-white flex flex-col items-center justify-center p-16 transition-transform duration-500 ease-in-out ${
          isLogin ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {isLogin ? 'Selamat Datang!' : 'Buat Akun Baru!'}
        </h2>
        <p className="text-gray-500 mb-6">
          {isLogin ? 'Solusi Hidup Sehat' : 'Bergabunglah bersama kami'}
        </p>

        <div className="w-full">
          <Input
            forName="username"
            InputName={isLogin ? 'Username' : 'Nama Pengguna'}
            type="text"
            name="username"
            className="mb-4"
          />
          <Input
            forName="password"
            InputName={isLogin ? 'Password' : 'Kata Sandi'}
            type="password"
            name="password"
            className="mb-4"
          />

          {!isLogin && (
            <Input
              forName="email"
              InputName="Email"
              type="email"
              name="email"
              className="mb-4"
            />
          )}

          {isLogin && (
            <a href="#" className="text-teal-500 text-right block mb-4">
              Forgot password?
            </a>
          )}

          <button
            onClick={isLogin ? handleLogin : toggleForm}
            className="bg-teal-500 rounded-lg py-3 px-5 mt-3  font-semibold text-white w-full hover:bg-teal-400 transition duration-300 ease-in-out shadow-md"
          
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <a href="#" onClick={toggleForm} className="text-teal-500 underline">
                Sign up for free
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a href="#" onClick={toggleForm} className="text-teal-500 underline">
                Login here
              </a>
            </>
          )}
        </p>
      </div>
    </section>
  );
};

export default Login;
