import { CreditCard, Users, Mail, MousePointer, ArrowUpRight } from "lucide-react";

interface AdminOptionProps {
    isDarkMode : boolean;
}
const AdminOption :React.FC<AdminOptionProps> = ({ isDarkMode }) => {
        return ( <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Web aphetion semandone</h2>
          <p className="mb-8">Social Refonary</p>

          <div className="flex justify-center gap-12">
            <div className="text-center cursor-pointer">
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <CreditCard className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">Verify payment</p>
            </div>
            <div className="text-center">
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <Users className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">For society members</p>
            </div>
            <div className="text-center">
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <Mail className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">Veritys payments</p>
            </div>
            <div className="text-center">
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <MousePointer className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">Feed payments</p>
            </div>
            <div className="text-center">
              <div className={`p-4 rounded-xl mb-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <ArrowUpRight className={`w-6 h-6 mx-auto ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <p className="text-sm">Fariby reution</p>
            </div>
          </div>
        </div>)
};

export default AdminOption;