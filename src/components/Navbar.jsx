import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-white">
      <div className="container mx-auto py-4">
        <div className="flex justify-center items-center gap-12">
          <Link 
            to="/" 
            className={`text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              location.pathname === '/' 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/gallery" 
            className={`text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              location.pathname === '/gallery' 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Gallery
          </Link>
          <Link 
            to="/profile" 
            className={`text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              location.pathname === '/profile' 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
