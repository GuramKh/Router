import { useNavigate } from 'react-router-dom';
import Image from '../assets/home.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our Website</h1>
        <div className="mb-6">
          <img 
            src={Image}
            alt="Hero"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        <button
          onClick={() => navigate('/gallery')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go To Gallery
        </button>
      </div>
    </div>
  );
}

export default Home;
