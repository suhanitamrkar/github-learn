import React from 'react';

interface IFeedback {
  userId: string;
  rating: number;
  comment: string;
}

interface IStoreCardData {
  _id: string;
  centerId: string;
  centerName: string;
  centerAddress: string;
  city: string;
  pincode: string;
  additionalLocations: string[];
  license: boolean;
  description: string;
  ownerId: string;
  createdAt: string;
  rating: number;
  feedbacks: IFeedback[];
}

interface StoreCardProps {
  storeData: IStoreCardData;
}

const StoreCard: React.FC<StoreCardProps> = ({ storeData }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{storeData.centerName}</h2>
        <p className="text-sm text-gray-600 mt-2">Owned by: <span className="font-medium">{storeData.ownerId}</span></p>
        <p className="text-gray-600 mt-4">{storeData.description}</p>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">Address</h3>
          <p className="text-gray-600">{storeData.centerAddress}</p>
          <p className="text-gray-600">{storeData.city}, {storeData.pincode}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">Additional Locations</h3>
          <ul className="list-disc ml-6 text-gray-600">
            {storeData.additionalLocations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">License</h3>
          <p className={`inline-block px-2 py-1 rounded-md text-sm font-medium ${storeData.license ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {storeData.license ? 'Licensed' : 'Not Licensed'}
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">Rating</h3>
          <p className="text-yellow-500 font-medium">{storeData.rating} ⭐</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-700">Feedbacks</h3>
          {storeData.feedbacks.length > 0 ? (
            <ul className="space-y-2">
              {storeData.feedbacks.map((feedback, index) => (
                <li key={index} className="border-t pt-2 text-gray-600">
                  <p className="font-medium">{feedback.comment}</p>
                  <p className="text-sm text-gray-500">Rating: {feedback.rating} ⭐</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No feedbacks yet.</p>
          )}
        </div>

        <div className="mt-6 text-right">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;

