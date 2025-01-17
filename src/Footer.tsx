import { Twitter, Linkedin, Youtube } from "lucide-react";
import React from "react";
interface FooterProps {
    isDarkMode : boolean;
}
const Footer : React.FC<FooterProps> = ({ isDarkMode }) => {

return (<footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} py-8 mt-12 rounded-2xl`}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              {/* <Logo className="h-12" /> */}
              <img src="./icon/logo.png" alt="Company Logo" className="w-40 h-25 mt-5" />
              <p className={`text-sm  ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Your Partner in Managing Society Needs
              </p>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Quick Links</h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Services</h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Payment Processing</li>
                <li>Society Management</li>
                <li>Expense Tracking</li>
                <li>Reports & Analytics</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className={`hover:text-blue-700 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className={`hover:text-red-600 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className={`pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} Societty Pay. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>Privacy Policy</a>
                <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>Terms of Service</a>
                <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500`}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>)
};

export default Footer;