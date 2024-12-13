"use client"
import React, { useState } from 'react';


const CommonButton = ({
  label,
  onClick,
  className = '',
  disableAfterClick = true,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = async () => {
    if (disableAfterClick) {
      setIsDisabled(true);
    }
    try {
      await onClick();
    } finally {
      if (!disableAfterClick) {
        setIsDisabled(false);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {label}
    </button>
  );
};

export default CommonButton;
