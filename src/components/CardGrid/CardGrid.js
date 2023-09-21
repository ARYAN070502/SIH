import React from 'react';
import './CardGrid.css'; // Create this CSS file for styling
import walnut from './images/Walnut_anantnag.jpg';
function CardGrid() {
  const cardData = [
    {
      image: walnut,
      caption: 'Card 1',
      backgroundColor: '#FF6347', // Background color for the card
    },
    {
      image: 'image2.jpg',
      caption: 'Card 2',
      backgroundColor: '#66CDAA',
    },
    {
      image: 'image3.jpg',
      caption: 'Card 3',
      backgroundColor: '#FFD700',
    },
    {
      image: 'image4.jpg',
      caption: 'Card 4',
      backgroundColor: '#9370DB',
    },
    {
      image: 'image5.jpg',
      caption: 'Card 5',
      backgroundColor: '#87CEEB',
    },
    {
      image: 'image6.jpg',
      caption: 'Card 6',
      backgroundColor: '#FFA07A',
    },
    {
      image: 'image7.jpg',
      caption: 'Card 7',
      backgroundColor: '#98FB98',
    },
    {
      image: 'image8.jpg',
      caption: 'Card 8',
      backgroundColor: '#FF69B4',
    },
    {
      image: 'image9.jpg',
      caption: 'Card 9',
      backgroundColor: '#20B2AA',
    },
    {
      image: 'image10.jpg',
      caption: 'Card 10',
      backgroundColor: '#FF4500',
    },
  ];

  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card"
          style={{ backgroundColor: card.backgroundColor }}
        >
          <img src={card.image} alt={`Card ${index + 1}`} />
          <p>{card.caption}</p>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;
