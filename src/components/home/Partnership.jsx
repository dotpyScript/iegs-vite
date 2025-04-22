import Marquee from 'react-fast-marquee';

const Partnership = () => {
  const partners = [
    {
      name: 'Esri',
      logo: 'https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS-Pro.png',
    },
    {
      name: 'Trimble',
      logo: 'https://download.logo.wine/logo/Trimble_Inc./Trimble_Inc.-Logo.wine.png',
    },
    {
      name: 'Autodesk',
      logo: 'https://seeklogo.com/images/A/autodesk-logo-C9709D7D24-seeklogo.com.png',
    },
    {
      name: 'DJI Enterprise',
      logo: 'https://seeklogo.com/images/D/dji-logo-42A8B14835-seeklogo.com.png',
    },
    {
      name: 'Hexagon',
      logo: 'https://seeklogo.com/images/H/hexagon-logo-B5FE690B37-seeklogo.com.png',
    },
    {
      name: 'Maxar',
      logo: 'https://cdn.maxar.com/com/images/logo.svg',
    },
    {
      name: 'Microsoft',
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    },
    {
      name: 'Amazon AWS',
      logo: 'https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png',
    },
    {
      name: 'Google Cloud',
      logo: 'https://seeklogo.com/images/G/google-cloud-logo-ADE788217F-seeklogo.com.png',
    },
    {
      name: 'IBM',
      logo: 'https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg',
    },
  ];

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
                className="flex items-center justify-center h-16 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/160x80?text=${encodeURIComponent(
                      partner.name
                    )}`;
                  }}
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
