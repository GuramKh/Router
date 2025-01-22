import { useParams } from 'react-router-dom';

function Profile() {
  const { name } = useParams();

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-gradient-to-br from-[#0093E9] to-[#80D0C7] rounded-full mx-auto flex items-center justify-center">
            <span className="text-3xl text-white font-bold">
              {(name || 'Guram').charAt(0)}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold bg-gradient-to-br from-[#0093E9] to-[#80D0C7] text-transparent bg-clip-text">
            Made By {name || 'Guram'}
          </h1>
          
          <p className="text-gray-600 text-sm">
            Try adding a name to the URL like: /profile/YourName
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
