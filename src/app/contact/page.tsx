import React from 'react'
import Form from './components/Form'
import StoreData from './components/StoreData'
import StoreCard from './components/StoreCard';


const page = () => {
  const store = {
    _id: '6713b3060026907ad5798aed',
    centerId: 'center1',
    centerName: 'Tech Learning Center',
    centerAddress: '123 Main St, Silicon Valley',
    city: 'Palo Alto',
    pincode: '94301',
    additionalLocations: [
      '456 Another St, San Francisco',
      '789 Tech Park, Mountain View',
    ],
    license: true,
    description:
      'A center dedicated to teaching the latest in tech and innovation.',
    ownerId: 'n33u5',
    createdAt: '2024-10-19T00:00:00.000Z',
    rating: 4.8,
    feedbacks: [
      {
        userId: '652d6b7a5292b2d89c3d48c2',
        rating: 5,
        comment: 'Excellent facility with great teaching resources!',
      },
    ],
  };
  return (
    <div>
       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <StoreCard storeData={store} />
    </div>
    </div>
  )
}

export default page