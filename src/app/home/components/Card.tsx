"use client"
import React, { useState } from 'react';

const CardList = () => {
  // Example data for cards
  const cards = [
    { id: 1, title: 'Card 1', content: 'This is card 1 content fshfsfjhjkjhjjkkjhhgfg' },
    { id: 2, title: 'Card 2', content: 'This is card 2 content' },
    { id: 3, title: 'Card 3', content: 'This is card 3 content' },
  ];

  // State to track which card is expanded
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleSeeMore = (id: number) => {
    // Toggle the clicked card; if clicked again, collapse it
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card border p-4 mb-4 rounded">
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p>
            {expandedCard === card.id
              ? card.content
              : `${card.content.substring(0, 20)}...`}
          </p>
          <button
            className="text-blue-500 underline mt-2"
            onClick={() => handleSeeMore(card.id)}
          >
            {expandedCard === card.id ? 'See Less' : 'See More'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
