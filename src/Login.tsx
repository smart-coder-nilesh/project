import React from 'react';
import { Twitter } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px] bg-white rounded-3xl shadow-xl overflow-hidden flex">
        {/* Left side - Image/Phone mockup */}
        <div className="w-1/2 bg-blue-600 p-12 flex items-center justify-center relative">
          <div className="relative w-full max-w-[400px]">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-white mb-8">Societlypay</h1>
              <div className="bg-white rounded-3xl shadow-lg p-6 transform rotate-[-5deg]">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500"
                  alt="Phone mockup"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-1/2 p-12 bg-white">
          <div className="max-w-[400px] mx-auto">
            <h2 className="text-4xl font-bold text-blue-600 mb-8">Societypay</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  placeholder="Fools expenses"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  placeholder="Verify payments"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Verify spyceware"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Relip your case four reserved"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Tack now Late
              </button>
            </form>

            <div className="mt-8 text-center">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <Twitter className="w-5 h-5 mr-2" />
                <span>Sudeypasy goin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;