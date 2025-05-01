import loginImg from '../../assets/images/loginImg.jpg';
import armslogo from '../../assets/images/armslogo.jpg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';


function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(); // Set auth to true
    // You can add real authentication here
    navigate('/Candidate');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-main">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Image Side */}
        <div className="w-1/2">
          <img src={loginImg} alt="Login" className="h-full w-full object-cover" />
        </div>

        {/* Right Form Side */}
        <div className="w-1/2 p-10">
          <div className="mb-6">
            <img
              src={armslogo} // Replace with actual logo
              alt="armslogo"
              className="h-32 w-full mb-2 object-contain object-left"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Login Here!</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-900 mb-1">Email ID</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-900 mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-blue-500 underline">
                Forget Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-armsjobslightblue text-white py-2 rounded transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
