import React from 'react';
import './DestinationSection.css';
import DestinationData from './DestinationData';

const DestinationSection = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame.</p>

      <DestinationData
      className="first-des"
      heading="Machu Picchu, Peru"
      text="Machu Picchu is an ancient Incan citadel located in the Andes Mountains of Peru. It's renowned for its well-preserved ruins, stunning architecture, and breathtaking mountain scenery. Visitors can explore the terraced hillsides,
       intricate stone structures, and temples while learning about the history and culture of the Inca civilization."
       img1="https://wallpapercave.com/wp/wp2301766.jpg"
       img2="https://cdn.vox-cdn.com/thumbor/J8oFtHJFyWMwNgjp8NvEAfnXaWE=/cdn.vox-cdn.com/uploads/chorus_asset/file/6883633/shutterstock_5934061.jpg"
      />


      <DestinationData
      className="first-des-reverse"
      heading="Santorini, Greece"
      text="Santorini is a picturesque island in the Aegean Sea known for its stunning sunsets, whitewashed buildings with blue-domed churches, and crystal-clear waters. Visitors can wander through charming villages like Oia and Fira,
       relax on black sand beaches, sample delicious Greek cuisine, and explore ancient ruins and archaeological sites. Santorini offers a perfect blend of natural beauty, history, and romance, making it a popular destination for travelers worldwide."
       img1="https://www.hdwallpaper.nu/wp-content/uploads/2017/03/santorini-6.jpg"
       img2="https://wallpapercave.com/wp/wp3508017.jpg"
      /> 
    </div>
  )
}

export default DestinationSection;