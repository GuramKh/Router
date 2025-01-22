import { useNavigate } from 'react-router-dom';
import Image from '../assets/home.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 h-[calc(100vh-8rem)] flex items-center">
      <div className="text-center w-full space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-800 to-indigo-800 text-transparent bg-clip-text">
          Welcome to Our Website
        </h1>

        <div className="relative group">
          <img 
            src={Image}
            alt="Hero"
            className="mx-auto border-2 rounded-lg shadow-md"
          />
        </div>

        <button
          onClick={() => navigate('/gallery')}
          className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white font-bold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105"
        >
          Explore Gallery
        </button>
      </div>
    </div>
  );
}

export default Home;
