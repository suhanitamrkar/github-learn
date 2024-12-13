import React from 'react';
import StoreCard from './StoreCard';

const stores = [
  {
    name: 'ABC Supermarket',
    address: '123 Main Street',
    city: 'Metropolis',
    pincode: '123456',
    description: 'A one-stop shop for all your daily needs.',
    phone: '123-456-7890',
    email: 'abc@example.com',
  },
  {
    name: 'XYZ Electronics',
    address: '456 Elm Street',
    city: 'Gotham',
    pincode: '654321',
    description: 'Best deals on electronics and gadgets.',
  },
];

const StoreList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stores.map((store, index) => (
        <StoreCard 
          key={index} 
          name={store.name} 
          address={store.address} 
          city={store.city} 
          pincode={store.pincode} 
          description={store.description} 
          phone={store.phone} 
          email={store.email} 
        />
      ))}
    </div>
  );
};

export default StoreList;
