import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center gap-6">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
        <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
