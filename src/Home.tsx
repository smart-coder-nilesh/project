import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Home, CreditCard, Users, Mail, MousePointer, ArrowUpRight, Settings, Link, MoreHorizontal, Sun, Moon, ImagePlus, Twitter, Linkedin, Youtube, PieChart } from 'lucide-react';
import Footer from './Footer.tsx';
import AdminOption from './AdminOption.tsx';

const members = [
  { id: 1, name: 'Sattie', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  { id: 2, name: 'Freebies', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150' },
  { id: 3, name: 'Parkland Trustlock', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' },
  { id: 4, name: 'BestWork', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
];

const recentPayments = [
  { id: 1, member: 'Sattie', amount: '₹5,000', date: '2024-03-10', status: 'Completed' },
  { id: 2, member: 'Freebies', amount: '₹3,500', date: '2024-03-09', status: 'Pending' },
  { id: 3, member: 'Parkland Trustlock', amount: '₹7,200', date: '2024-03-08', status: 'Completed' },
];

const paymentFacilities = [
  'UPI Payment',
  'Cash',
  'Credit Card',
  'Cheque',
];
const paymentInsights = {
  bankBalance: 250000,
  breakdown: {
    maintenance: 150000,
    fine: 25000,
    interest: 75000
  },
  monthlyData: [
    { month: 'Jan', fine: 100, actual: 35000 },
    { month: 'Feb', fine: 200, actual: 48000 },
    { month: 'Mar', fine: 300, actual: 49000 },
    { month: 'Apr', fine: 500, actual: 20000 },
    { month: 'May', fine: 10000, actual: 46000 },
    { month: 'Jun', fine: 5000, actual: 25000 }
  ]
};

function home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'online' | 'Cash'>('online');
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [svgWidth, setSvgWidth] = useState(700);

  useLayoutEffect(() => {
    const updateSvgWidth = () => {
      if (svgRef.current) {
        const parentWidth = svgRef.current.parentElement?.getBoundingClientRect().width;
        if (parentWidth) {
          setSvgWidth(parentWidth);
        }else{
          setSvgWidth(svgRef.current.clientWidth);
        }
      }
    };

    updateSvgWidth(); // Set the initial width

    // Optional: Update width on window resize
    window.addEventListener('resize', updateSvgWidth);

    return () => {
      window.removeEventListener('resize', updateSvgWidth);
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Methods</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => setSelectedPaymentMethod('online')}
                className={`p-4 rounded-lg transition-all ${selectedPaymentMethod === 'online'
                  ? `${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white shadow-lg shadow-blue-500/50`
                  : `${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'} ${isDarkMode ? 'text-white' : 'text-gray-800'}`
                  }`}
              >
                <h3 className="font-semibold mb-2">Online Payment</h3>
              </button>
              <button
                onClick={() => setSelectedPaymentMethod('Cash')}
                className={`p-4 rounded-lg transition-all ${selectedPaymentMethod === 'Cash'
                  ? `${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white shadow-lg shadow-blue-500/50`
                  : `${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'} ${isDarkMode ? 'text-white' : 'text-gray-800'}`
                  }`}
              >
                <h3 className="font-semibold mb-2">UPI</h3>
              </button>
            </div>
            {/*  */}
            <div className={`w-72 border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pl-6`}>
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Details</h3>
              <select className={`w-full p-2 border rounded-lg mb-4 ${isDarkMode
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-300 text-gray-800'
                }`}>
                <option>Select payment facility</option>
                {paymentFacilities.map((facility, index) => (
                  <option key={index}>{facility}</option>
                ))}
              </select>

              <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Entry</h3>
              <input
                type="text"
                placeholder="Lock cheating"
                className={`w-full p-2 border rounded-lg mb-4 ${isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                    : 'bg-white border-gray-300 text-gray-800'
                  }`}
              />

              {/* Image Upload Section */}
              <div className="mb-4">
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Proof</h3>
                <div className={`border-2 border-dashed rounded-lg p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'
                  } text-center cursor-pointer relative`}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {selectedImage ? (
                    <div className="relative">
                      <img
                        src={selectedImage}
                        alt="Payment proof"
                        className="max-h-32 mx-auto rounded-lg"
                      />
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <ImagePlus className={`w-8 h-8 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Upload payment proof
                      </p>
                      <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        Click or drag image here
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Verify</button>
                <button className={`px-6 py-2 border rounded-lg ${isDarkMode
                    ? 'border-gray-700 text-gray-300'
                    : 'border-gray-300 text-gray-800'
                  }`}>Cancel</button>
              </div>
            </div>

          </div>
        );
      case 'payments':
        return (
          <div className="space-y-6">
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment History</h2>
            <div className="space-y-4">
              {recentPayments.map(payment => (
                <div key={payment.id} className={`flex items-center justify-between p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <div>
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{payment.member}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{payment.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{payment.amount}</p>
                    <p className={`text-sm ${payment.status === 'Completed' ? 'text-green-500' : 'text-orange-500'}`}>
                      {payment.status}
                    </p>
                  </div>
                </div>

              ))}
            </div>
          </div>
        );
      case 'insights':
        return (
          <div className="space-y-8">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  ₹{paymentInsights.bankBalance.toLocaleString()}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Bank Balance</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    ₹{paymentInsights.breakdown.maintenance.toLocaleString()}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Maintenance</p>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    ₹{paymentInsights.breakdown.fine.toLocaleString()}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Fine</p>
                </div>
                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    ₹{paymentInsights.breakdown.interest.toLocaleString()}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Interest</p>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <h4 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Maintenance Trends
                </h4>
                <div className="relative h-40">
                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>

                  {/* Graph lines */}
                  <div className="parent absolute inset-0 flex items-end px-4">
                    <svg ref={svgRef} className="w-full h-full">
                      {/* fine line */}
                      <polyline
                        points={paymentInsights.monthlyData
                          .map((data, i) => `${(i * (svgWidth / paymentInsights.monthlyData.length))},${100 - (data.fine / 50000) * 100}`)
                          .join(' ')}
                        fill="none"
                        stroke={isDarkMode ? '#60A5FA' : '#3B82F6'}
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      {/* Actual line */}
                      <polyline
                        points={paymentInsights.monthlyData
                          .map((data, i) => `${(i * (svgWidth / paymentInsights.monthlyData.length))},${100 - (data.actual / 50000) * 100}`)
                          .join(' ')}
                        fill="none"
                        stroke={isDarkMode ? '#4ADE80' : '#22C55E'}
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                    </svg>
                  </div>

                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                    {paymentInsights.monthlyData.map((data, index) => {
                      // Calculate the X position based on the width of the SVG and the index
                      const xPosition = (index * (svgWidth / paymentInsights.monthlyData.length));

                      return (
                        <span
                          key={index}
                          className={`absolute text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                          style={{
                            left: `${xPosition}px`, // Position label based on calculated X value
                          }}
                        >
                          {data.month}
                        </span>
                      );
                    })}
                  </div>

                </div>

                <div className="flex justify-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Actual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className={isDarkMode ? 'text-white' : 'text-gray-800'}>Section under development</div>;
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${isDarkMode ? 'from-gray-900 to-gray-800' : 'from-blue-900 to-blue-700'} p-8`}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Dashboard Card */}
        <div className={`rounded-2xl shadow-xl p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">

              <img src="./icon/logo.png" alt="Company Logo" className="w-40 h-25 mt-5" />
              {/* <Lock className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} /> */}
              {/* <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Society Members</span> */}
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add</button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-600'
                  }`}
              >
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>

          {/* Sidebar and Main Content */}
          <div className="flex flex-wrap gap-6 lg:flex-nowrap">
            {/* Sidebar */}
            <div className="w-15 flex flex-row sm:flex-col gap-4">
              <button
                onClick={() => setActiveSection('home')}
                className={`p-5 rounded-lg ${activeSection === 'home'
                    ? 'bg-blue-500 text-white'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 hover:bg-blue-50'
                  }`}
              >
                <Home className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveSection('payments')}
                className={`p-5 rounded-lg ${activeSection === 'payments'
                    ? 'bg-blue-500 text-white'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 hover:bg-blue-50'
                  }`}
              >
                <CreditCard className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveSection('insights')}
                className={`p-5 rounded-lg ${activeSection === 'insights'
                  ? 'bg-blue-500 text-white'
                  : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 hover:bg-blue-50'
                  }`}
              >
                <PieChart className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveSection('settings')}
                className={`p-5 rounded-lg ${activeSection === 'settings'
                    ? 'bg-blue-500 text-white'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 hover:bg-blue-50'
                  }`}
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {/* Main Content */}

            <div className="flex-1">
              {renderContent()}
            </div>
            {/* Society Members List */}
            <div className="space-y-4">
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Society Members</h3>
              {members.map(member => (
                <div key={member.id} className={`flex items-center justify-between p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                    <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>{member.name}</span>
                  </div>
                  <MoreHorizontal className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                </div>
              ))}
            </div>

          </div>
        </div>
        {/* mid-section */}
        <AdminOption isDarkMode={isDarkMode} />
        {/* Footer */}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default home;