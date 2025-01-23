import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./Action/Action";
import { RootState } from "./Store/store";

const Header =() => {
    
    const isDarkMode = useSelector((state: RootState) => state.toggleDarkmode.isDarkMode);
    const dispatch = useDispatch();
    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">

              <img src="./icon/logo.png" alt="Company Logo" className="w-40 h-25 mt-5" />
              {/* <Lock className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} /> */}
              {/* <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Society Members</span> */}
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Admin</button>
              <button
                onClick={() => dispatch(toggleDarkMode())}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-600'
                  }`}
              >
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          </div>
    )
};
export default Header;