import React from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import Button from './Button';

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  validation?: RegisterOptions; // Validation rules for the field
}

const InputField: React.FC<InputFieldProps> = ({ label, name, placeholder, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // Use useFormContext to access form methods

  const error = errors[name];
  const handleSubmit = async () => {
    // Simulate a network request or form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert('Form submitted!');
  };
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name, validation)}
        id={name}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : ''
        }`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error.message as string}
        </p>
      )}
     
    </div>
  );
};

export default InputField;
