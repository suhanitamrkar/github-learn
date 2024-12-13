import React from 'react';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   isLoading?: boolean;
//   loaderText?: string;
// }

const Button = ({ isLoading, loaderText, children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed ${
        isLoading ? 'cursor-wait' : ''
      }`}
      disabled={props.disabled || isLoading}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          {loaderText || 'Loading...'}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
