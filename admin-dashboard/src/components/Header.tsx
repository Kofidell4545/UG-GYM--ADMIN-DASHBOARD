import { useNavigate, useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react'; // Import only necessary icons

// Import your logo image
import logo from '../ug_gym_logo2.png';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = location.pathname.includes('/dashboard') || location.pathname.includes('/admin-dashboard');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="bg-[#002147] text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo section, which is always displayed */}
        <div 
          onClick={() => navigate('/')} 
          className="flex items-center space-x-3 cursor-pointer"
        >
          {/* Display the logo image */}
          <img src={logo} alt="UG Gym Logo" className="h-14 w-auto" />
        </div>

        {/* Navigation section */}
        <nav className="flex items-center space-x-6">
          {!isLoggedIn ? (
            <>
              <button 
                onClick={() => navigate('/')}
                className="hover:text-[#FFD700] transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="hover:text-[#FFD700] transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                className="bg-[#FFD700] text-[#002147] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 hover:text-[#FFD700] transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
