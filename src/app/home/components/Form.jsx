"use client";
import { useState } from "react";
import Button from "./Button";

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert('Form submitted!');
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setSuccess(false);
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   setLoading(false);
  //   setSuccess(true);
  //   setFormData({ username: "", email: "", phoneNumber: "", address: "" });
  //   setTimeout(() => setSuccess(false), 3000);

  //   const newErrors = validateForm(formData);
  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     console.log("Form submitted successfully!");
  //   } else {
  //     console.log("Form submission failed due to validation errors");
  //   }
  // };

  const validateForm = (data) => {
    const errors = {};
    if (!data.username.trim()) {
      errors.username = "Username is required";
    } else if (data.username.length < 4) {
      errors.username = "Username must be at least 4 characters long";
    }
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    } else if (data.phoneNumber.length < 9) {
      errors.phoneNumber = "Phone Number must be at least 9 number";
    }
    if (!data.address.trim()) {
      errors.address = "Address is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }
    return errors; // Ensure errors are returned
  };

  return (
    <div className="bg-[#F2E5BF]  mx-3 w-[400px] h-[500px] rounded-lg border-2 border-gray-900 shadow-lg">
      <form
        className="max-w-lg mx-auto p-4  text-gray-800"
        onSubmit={handleSubmit}
      >
        <div className="mb-2 ">
          <label className="block  text-sm font-bold mb-2" htmlFor="username">
            Name
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your name"
            className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-600   leading-tight focus:outline-none focus:shadow-outline"
            value={formData?.username || ""}
            onChange={handleChange}
            name="username"
          />
          {errors?.username && (
            <span className="text-red-600 italic text-xs">{errors.username}</span>
          )}
        </div>

        <div className="mb-2">
          <label className="block  text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600    leading-tight focus:outline-none focus:shadow-outline"
            name="email"
          />
          {errors?.email && (
            <span className="text-red-600 italic text-xs">{errors.email}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block  text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600   leading-tight focus:outline-none focus:shadow-outline"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
          />
          {errors?.phoneNumber && (
            <span className="text-red-600 italic text-xs">{errors.phoneNumber}</span>
          )}
        </div>

        <div className="mb-2">
          <label className="block  text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            type="text"
            value={formData.address}
            name="address"
            onChange={handleChange}
            placeholder="Enter your address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600  leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors?.address && (
            <span className="text-red-600 italic text-xs">{errors.address}</span>
          )}
        </div>

        <Button
          type="submit"
          isLoading={isSubmitting}
          // className="bg-[#CC2B52] text-white font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline"
          
        >
          Submit
        </Button>
      </form>

      {success && (
        <div className="mt-4 text-center text-green-600 font-semibold">
          Form submitted successfully!
        </div> 
      ) }
    </div>
  );
};

export default FeedbackForm;
