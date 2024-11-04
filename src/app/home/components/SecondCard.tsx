// components/FeedbackCard.tsx
"use client"
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

type SecondCardProps = {
  name: string;
  title: string;
  description: string;
  initialRating?: number;
};

const SecondCard: React.FC<SecondCardProps> = ({ name, title, description, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <img
          src={`https://ui-avatars.com/api/?name=${name}&background=random`}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{description}</p>
      
      <div className="flex items-center mt-4 space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`cursor-pointer text-xl ${
              rating >= star ? 'text-yellow-500' : 'text-gray-300'
            }`}
            onClick={() => handleRating(star)}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondCard;
