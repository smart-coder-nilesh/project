import { CreditCard, Users, Mail, MousePointer, ArrowUpRight } from "lucide-react";

import {Link} from "react-router-dom";

interface AdminOptionProps {
  isDarkMode: boolean;
}
const AdminOption: React.FC<AdminOptionProps> = ({ isDarkMode }) => {
  return (<div className="text-center text-white">
    <h2 className="text-3xl font-bold mb-2">Other Useful products</h2>
    <p className="mb-8">Society Pay Features</p>


    <div className="flex justify-center flex-wrap gap-6 md:gap-12">
      {[
        { Icon: CreditCard, label: "Verify payment", route: "/verify-payment" },
        { Icon: Users, label: "For Admin", route: "/society-members" },
        { Icon: Mail, label: "Parking", route: "/parking" },
        { Icon: MousePointer, label: "Register Guest", route: "/register-guest" },
        { Icon: ArrowUpRight, label: "Help", route: "/help" },
      ].map(({ Icon, label, route }, index) => (
        <Link
          key={index}
          to={route}
          className="text-center cursor-pointer hover:scale-105 transition-transform"
        >
          <div
            className={`w-24 h-18 flex items-center justify-center p-4 rounded-xl mb-2 ${isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
          >
            <Icon
              className={`w-6 h-6 ${isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
            />
          </div>
          <p className="text-sm">{label}</p>
        </Link>
      ))}
    </div>

  </div>)
};

export default AdminOption;