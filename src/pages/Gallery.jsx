import { useState, useEffect } from 'react';
import axios from 'axios';

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4')
      .then(response => {
        const photosWithNewUrls = response.data.map(photo => ({
          ...photo,
          url: `https://picsum.photos/600/400?random=${photo.id}`
        }));
        setPhotos(photosWithNewUrls);
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {photos.map((photo) => (
          <div key={photo.id} className="bg-white rounded-lg border-2 shadow-lg overflow-hidden px-3 py-3">
            <img 
              src={photo.url} 
              alt={photo.title} 
              className="w-full h-64 object-cover"
            />
            <div className="p-1">
              <h3 className="text-base text-center">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
