import { useParams } from 'react-router-dom';

function Profile() {
  const { name } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Made By {name || 'Guram'}
        </h1>
        <p className="mt-4 text-gray-600">
          Try adding a name to the URL like: /profile/YourName
        </p>
      </div>
    </div>
  );
}

export default Profile;
