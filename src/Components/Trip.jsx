import React from 'react';
import './Trip.css';
import TripData from './TripData';

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className='tripcard'>
        <TripData
        image="https://th.bing.com/th/id/R.32f111138533abd7ee5c51206a8b8ed1?rik=Iz0KMLFh8M%2f8IA&riu=http%3a%2f%2fwww.hdwallpapers10.com%2fwp-content%2fuploads%2f2017%2f05%2fparis+france+eiffel+tower+beautiful+amazing+images+full+hd.jpg&ehk=LhxL2qddDRCvZJrwfmxV9066AIJqrLIAeN%2b%2fSdPbn1A%3d&risl=&pid=ImgRaw&r=0"
        heading="Trip in France"
        text="A trip to France is a sensory delight, offering a tapestry of experiences that captivate the soul. From the iconic landmarks of Paris to the sun-kissed vineyards of Bordeaux, each corner of the country tells a story of rich history, vibrant culture, and culinary excellence. Wander through charming villages,
         indulge in gourmet cuisine, and immerse yourself in the beauty of its landscapes. Whether strolling along the Seine River or savoring a glass of wine in Provence, France beckons with its timeless allure and promises a journey of discovery and enchantment."
        />

        <TripData
        image="https://images8.alphacoders.com/354/354497.jpg"
        heading="Trip in Spain"
        text="A trip to Spain is a vibrant immersion into a tapestry of cultures, flavors, and landscapes. From the bustling streets of Barcelona to the serene beaches of the Costa del Sol, Spain offers a captivating blend of history, art, and culinary delights. Explore the architectural wonders of Antoni Gaudí, 
        savor tapas in lively taverns, and marvel at centuries-old cathedrals. Journey through the narrow alleys of medieval towns, dance to the rhythm of flamenco in Seville, or bask in the sun on the pristine shores of the Balearic Islands. "
        />
        <TripData
        image="https://wallpapercave.com/wp/wp1841855.jpg"
        heading="Trip in Singapore"
        text="A trip to Singapore is an enchanting fusion of modernity, tradition, and multiculturalism. This vibrant city-state in Southeast Asia dazzles visitors with its iconic skyline, lush gardens, and diverse culinary scene. Explore the futuristic Gardens by the Bay, where towering Supertrees and the stunning 
        Cloud Forest beckon with their otherworldly beauty. Discover the rich heritage of Chinatown, Little India, and Kampong Glam, where colorful temples, bustling markets, and aromatic cuisine create a tapestry of cultures."
        />
      </div>
    </div>
  )
}

export default Trip;