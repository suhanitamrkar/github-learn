import React from "react";
import Card from "./Card"; // Import the Card component created previously

const Carousel: React.FC = () => {
  // Sample data for cards
  const cardData = [
    {
      title: "Card 1",
      description: "This is the description for card 1. It can be a long text but will be truncated as per Card component logic."
    },
    {
      title: "Card 2",
      description: "This is the description for card 2. It can be a long text but will be truncated as per Card component logic."
    },
    {
      title: "Card 3",
      description: "This is the description for card 3. It can be a long text but will be truncated as per Card component logic."
    },
    {
      title: "Card 4",
      description: "This is the description for card 4. It can be a long text but will be truncated as per Card component logic."
    },
  ];

  return (
    <div className="overflow-x-auto flex gap-4 py-4">
      <div className="flex lg:w-[1000px] sm:w-full gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-full lg:w-1/3"
          >
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
