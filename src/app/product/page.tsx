"use client"
import React from 'react';
import CommonButton from './CommonButton';

const page = () => {
  const handleButtonClick = async () => {
    console.log('Button clicked!');
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate an async task
    console.log('Task completed!');
  };

  return (
    <div className="p-4">
      <CommonButton 
        label="Click Me" 
        onClick={handleButtonClick} 
        disableAfterClick={true} 
        className="custom-class"
      />
    </div>
  );
};

export default page;
