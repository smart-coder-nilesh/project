
import { Target, Twitter } from 'lucide-react';
import { useState } from 'react';
import { LoginRequest, LoginResponse } from '../authorization/authinterface';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../authorization/AuthContext';

const LoginPage = () => {

  const [credentials, setCredentials] = useState<LoginRequest>({ Username: "", Password: "" });
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const show = false;

  // when user type it will change the credentials
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  async function handlesubmit(e: { preventDefault: () => void; }): Promise<void> {
    e.preventDefault();
    try {

      const response = await axios.post<LoginResponse>("http://localhost:5018/api/Login/Authorize", credentials);
      if (auth) {
        auth.login(response.data.token);
      }
      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px] bg-white rounded-3xl shadow-xl overflow-hidden flex">
        {/* Left side - Image/Phone mockup */}
        <div className="w-1/2 bg-blue-600 p-12 flex items-center justify-center relative">
          <div className="relative w-full max-w-[400px]">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-white mb-8">Societypay</h1>
              <div className="bg-white rounded-3xl shadow-lg p-6 transform rotate-[-8deg]">
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

            <form className="space-y-6" onSubmit={handlesubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  name='Username'
                  type="text"
                  placeholder="UserId"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                  onChange={handleChange} required
                />
              </div>

              {show && (<div>
                <label className="block text-sm font-medium text-gray-700">PassWord</label>
                <input
                  type="text"
                  placeholder="Verify password"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>)}

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  name='Password'
                  type="password"
                  placeholder="Verify Password"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  // onChange ={ (e) => setpassword(e.target.value)}
                  onChange={handleChange} required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"

              >
                Login
              </button>
            </form>

            <div className="mt-8 text-center">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <Twitter className="w-5 h-5 mr-2" />
                <span>Login With Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;