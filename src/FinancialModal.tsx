import React, { useState } from 'react';
import { X, Send, Mail, Bell, Plus, AlertCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from './Store/store';

// interface FinancialModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   isDarkMode: boolean;
// }

interface ExpenseFormData {
  title: string;
  amount: string;
  category: string;
  date: string;
}

const FinancialModal = () => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [expenseForm, setExpenseForm] = useState<ExpenseFormData>({
    title: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });


  const statistics = [
    { title: 'Maintenance Due', amount: '88K', action: 'Send Notice', icon: Send, color: 'bg-blue-500' },
    { title: 'Cash in Hand', amount: '88K', action: 'Send Email', icon: Mail, color: 'bg-red-400' },
    { title: 'Bank Balance', amount: '88K', action: 'Send Notification', icon: Bell, color: 'bg-yellow-400' },
    { title: 'Complaints', amount: '88K', action: 'View All', icon: Send, color: 'bg-green-500' },
  ];

  const finances = [
    { title: 'Fixed Assets', amount: '₹28,000' },
    { title: 'Investments', amount: '₹28,000' },
    { title: 'Current Assets', amount: '₹28,000' },
    { title: 'Reserve Funds', amount: '₹28,000' },
    { title: 'Surplus', amount: '₹28,000' },
    { title: 'Current Liabilities', amount: '₹28,000' },
  ];

  const residents = [
    { label: 'Residents', value: 84, color: 'bg-purple-500' },
    { label: 'Manager', value: 10, color: 'bg-pink-400' },
    { label: '', value: 4, color: 'bg-blue-400' },
    { label: '', value: 10, color: 'bg-purple-600' },
  ];
  const isDarkMode = useSelector((state: RootState) => state.toggleDarkmode.isDarkMode);
   
  const handleExpenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the expense submission here
    console.log('New expense:', expenseForm);
    setShowExpenseForm(false);
    setExpenseForm({
      title: '',
      amount: '',
      category: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`w-11/12 max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-6`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Financial Overview</h2>
          <button
            // onClick={onClose}
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
          >
            <X className={isDarkMode ? 'text-white' : 'text-gray-600'} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2">
            <Send className="w-4 h-4" /> Send Notice
          </button>
          <button className="px-4 py-2 bg-red-400 text-white rounded-lg flex items-center gap-2">
            <Mail className="w-4 h-4" /> Send Email
          </button>
          <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> Send Reminder
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {statistics.map((stat, index) => (
            <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.title}
                </h3>
              </div>
              <p className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                ₹{stat.amount}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Society Finances */}
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Society Finances
              </h3>
              <button 
                onClick={() => setShowExpenseForm(true)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:bg-opacity-80`}
              >
                <Plus className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} />
              </button>
            </div>
            <div className="space-y-4">
              {finances.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.title}</span>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Income & Expenses Graph */}
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              Income & Expenses
            </h3>
            <div className="h-64 flex items-end justify-around">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div key={index} className="w-8 flex flex-col gap-1">
                  <div className="h-32 bg-red-400 rounded-t-lg"></div>
                  <div className="h-24 bg-green-400"></div>
                  <div className="h-16 bg-blue-400 rounded-b-lg"></div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Capital Assets</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Deficit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Reserve Funds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Residents Section */}
        <div className="mt-6 flex gap-4">
          {residents.map((resident, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-12 h-12 rounded-full ${resident.color} flex items-center justify-center text-white font-bold`}>
                {resident.value}
              </div>
              {resident.label && (
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {resident.label}
                </span>
              )}
            </div>
          ))}
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-auto">
            Transfer Unit
          </button>
        </div>

        {/* New Expense Form Modal */}
        {showExpenseForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`w-full max-w-md rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Add New Expense
                </h3>
                <button
                  onClick={() => setShowExpenseForm(false)}
                  className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X className={isDarkMode ? 'text-white' : 'text-gray-600'} />
                </button>
              </div>
              <form onSubmit={handleExpenseSubmit} className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Title
                  </label>
                  <input
                    type="text"
                    value={expenseForm.title}
                    onChange={(e) => setExpenseForm({...expenseForm, title: e.target.value})}
                    className={`w-full p-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300'
                    }`}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Amount
                  </label>
                  <input
                    type="number"
                    value={expenseForm.amount}
                    onChange={(e) => setExpenseForm({...expenseForm, amount: e.target.value})}
                    className={`w-full p-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300'
                    }`}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Category
                  </label>
                  <select
                    value={expenseForm.category}
                    onChange={(e) => setExpenseForm({...expenseForm, category: e.target.value})}
                    className={`w-full p-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="utilities">Utilities</option>
                    <option value="repairs">Repairs</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                    Date
                  </label>
                  <input
                    type="date"
                    value={expenseForm.date}
                    onChange={(e) => setExpenseForm({...expenseForm, date: e.target.value})}
                    className={`w-full p-2 rounded-lg border ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300'
                    }`}
                    required
                  />
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowExpenseForm(false)}
                    className={`px-4 py-2 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  >
                    Add Expense
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialModal;