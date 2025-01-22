import { useState, useEffect } from 'react';
import axios from 'axios';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4')
      .then(response => {
        const photosWithNewUrls = response.data.map(photo => ({
          ...photo,
          url: `https://picsum.photos/600/400?random=${photo.id}`
        }));
        setPhotos(photosWithNewUrls);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FEE140] to-[#FA709A] text-transparent bg-clip-text">
        Photo Gallery
      </h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-800"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl px-3 py-3 border-2"
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-base text-center text-gray-700 font-medium line-clamp-2">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
