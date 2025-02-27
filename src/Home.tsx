import { useState } from 'react';
import { Home, CreditCard, Users, Settings, MoreHorizontal, PieChart, CheckSquare, Car, Bell, AlertCircle } from 'lucide-react';
import Footer from './Footer.tsx';
import AdminOption from './AdminOption.tsx';
import PaymentMethod from './PaymentMethod.tsx';
import Header from './Header.tsx';
import Insight from './Insight.tsx';
import { useSelector } from 'react-redux';
import { RootState } from './Store/store.ts';
import Parking from './parking/parking.js';
import Handlevisit from './register_visitor/handlevisit.tsx';
const members = [
  { id: 1, name: 'chairman', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  { id: 2, name: 'vice-chairman', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150' },
  { id: 3, name: 'Treasurer', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' },
  { id: 4, name: 'Secretary', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
];

const recentPayments = [
  { id: 1, member: 'mishra g', amount: '₹5,000', date: '2024-03-10', status: 'Completed' },
  { id: 2, member: 'pal', amount: '₹3,500', date: '2024-03-09', status: 'Verification Pending' },
  { id: 3, member: 'tiwari', amount: '₹7,200', date: '2024-03-08', status: 'Completed' },
];



function home() {
  const [activeSection, setActiveSection] = useState('home');
  const [option, setSelectedoption] = useState('');
  const isDarkMode = useSelector((state: RootState) => state.toggleDarkmode.isDarkMode);
  // This is a dummy value, you can change it to true to see the dark mode

  const renderContent = () => {
    const options = [
      { path: 'verify-payment', label: 'Verify Payment', icon: <CheckSquare /> },
      { path: 'parking-management', label: 'Parking Management', icon: <Car /> },
      { path: 'visitor-access', label: 'Visitor Access', icon: <Users /> },
      { path: 'notification', label: 'Notification', icon: <Bell /> },
      { path: 'raise-complaint', label: 'Raise Complaint', icon: <AlertCircle /> },
    ];
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            {(option === '') && (<h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Select Appropriate Options</h2>)}

            {(option === '') && (
              <div className="flex flex-wrap justify-center gap-6 mt-10">
                {options.map((option) => (
                  <div
                    key={option.path}
                    onClick={() => setSelectedoption(option.path)}
                    className={`w-64 h-32  ${isDarkMode ? 'text-white bg-blue-500' : 'text-gray-800 bg-white'} flex flex-col 
                    items-center justify-center 
                    text-lg font-semibold 
                    rounded-lg border 
                    border-blue-200
                    transform transition-transform duration-300
                    hover:-translate-y-2 hover:shadow-2xl  ${isDarkMode ? 'hover:shadow-gray-100' :'hover:shadow-gray-600'}
                    hover:border-blue-500 
                    hover:ring-2 
                    hover:ring-blue-400`}
                  >
                    <div className={`mb-2 ${isDarkMode ? 'text-white': 'text-blue-500'}`}>{option.icon}</div>
                    {option.label}
                  </div>
                ))}
              </div>
            )}
            {option === 'verify-payment' && (<PaymentMethod />)}
            {option === 'parking-management' && <Parking />}
            {option === 'visitor-access' && <Handlevisit/> }
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
          <Insight />
        );
      default:
        return <div className={isDarkMode ? 'text-white' : 'text-gray-800'}>Section under development</div>;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${isDarkMode ? 'from-gray-900 to-gray-800' : 'from-blue-900 to-blue-700'} p-8`}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Dashboard Card */}
        <div className={`rounded-2xl shadow-xl p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <Header />

          {/* Sidebar and Main Content */}
          <div className="flex flex-wrap gap-6 lg:flex-nowrap">
            {/* Sidebar */}
            <div className="w-15 flex flex-row sm:flex-col gap-4">
              <button
                onClick={() => {
                  if (option === '') {
                    setActiveSection('home')
                  } else {
                    setSelectedoption('')
                    setActiveSection('home')
                  }

                }}

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