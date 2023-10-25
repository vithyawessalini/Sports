import React from 'react';

const images = [
  'https://img.freepik.com/free-vector/flat-football-players-collection_52683-66901.jpg?size=626&ext=jpg&ga=GA1.1.206367634.1669640491&semt=ais',
  'https://img.freepik.com/free-vector/basket-ball-throwing-composition_1284-65335.jpg?t=st=1694845094~exp=1694845694~hmac=5c0e33ce7f300f910dc339ca246fd2e5a8de12124cf4985e67450a7cf6afec10',
  'https://img.freepik.com/free-vector/flat-design-padel-illustration_23-2149197786.jpg?size=626&ext=jpg&ga=GA1.1.206367634.1669640491&semt=ais',
  'https://img.freepik.com/free-vector/paralympic-swimming-concept-illustration_114360-18388.jpg?size=626&ext=jpg&ga=GA1.1.206367634.1669640491&semt=ais',
  'https://img.freepik.com/free-vector/hand-drawn-volleyball-illustration_23-2149415319.jpg?size=626&ext=jpg&ga=GA1.1.206367634.1669640491&semt=ais',
  'https://img.freepik.com/free-vector/flat-design-field-hockey-illustration_23-2149483521.jpg?size=626&ext=jpg&ga=GA1.2.206367634.1669640491&semt=ais',
  'https://img.freepik.com/free-vector/cricket-concept-illustration_114360-9567.jpg?size=626&ext=jpg&ga=GA1.2.206367634.1669640491&semt=ais',
];

const SportsGallery = () => {
  return (
    <div className="sports-gallery">
      <h1 style={{fontFamily: "Footlight MT Light",fontSize:'50px'}}>GALLERY</h1>
      <div className="sports-list">
        {images.map((imageUrl, index) => (
          <div className="sport-card" key={index}>
            <img src={imageUrl} alt={`Sport ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsGallery;
