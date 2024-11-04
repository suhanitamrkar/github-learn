"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface FeedbackCardProps {
  userImage: string;
  userName: string;
  title: string;
  description: string;
  initialRating: number;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ userImage, userName, title, description, initialRating }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        {/* User Image */}
        <div className="flex items-center mb-4">
          <Image 
            src={userImage} 
            alt={userName} 
            width={50} 
            height={50} 
            className="w-12 h-12 rounded-full object-cover border border-gray-300" 
          />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-800">{userName}</h3>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4">{description}</p>

        {/* Star Rating */}
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(rating)}
              className={`text-xl ${
                star <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              <FaStar />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

