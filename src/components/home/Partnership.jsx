import Marquee from 'react-fast-marquee';
import { useState } from 'react';

const Partnership = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const partners = [
    {
      name: 'Esri',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Esri_logo_2C.png',
    },
    {
      name: 'Trimble',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Trimble_Navigation_Logo.svg',
    },
    {
      name: 'Autodesk',
      logo: 'https://1000logos.net/wp-content/uploads/2021/04/AutoDesk-logo.png',
    },
    {
      name: 'DJI Enterprise',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/DJI_Logo.svg',
    },
    {
      name: 'Hexagon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Hexagon_AB_logo.svg',
    },
    {
      name: 'Maxar',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Maxar_Logo.svg',
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    },
    {
      name: 'Amazon AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
      name: 'Google Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Google_Cloud_Logo.svg',
    },
    {
      name: 'IBM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
  ];

  const handleImageLoad = (name) => {
    setLoadedImages((prev) => new Set([...prev, name]));
  };

  const handleImageError = (e, name) => {
    console.log(`Failed to load image for ${name}`);
    e.target.onerror = null;
    // Use a more reliable placeholder service
    e.target.src = `https://placehold.co/200x100/FFFFFF/000000?text=${encodeURIComponent(
      name
    )}`;
  };

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-fluid px-0">
        <Marquee
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={50}
          speed={40}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-16 px-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 w-48 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ${
                    loadedImages.has(partner.name) ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ maxWidth: '100%' }}
                  onLoad={() => handleImageLoad(partner.name)}
                  onError={(e) => handleImageError(e, partner.name)}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Partnership;
