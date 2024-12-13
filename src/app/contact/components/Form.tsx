"use client"
// import React, { useState } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function FeedbackForm() {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     title: '',
//     feedback: '',
//     rating: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       toast.success('Form submitted successfully!');
//       // Reset the form
//       setFormData({
//         fullname: '',
//         title: '',
//         feedback: '',
//         rating: '',
//       });
//     } catch (error) {
//       toast.error('Something went wrong!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className=''>
//       <form onSubmit={handleSubmit} className='flex flex-col h-[300px] w-[400px] '>
//         <input
//           type="text"
//           name="fullname"
//           value={formData.fullname}
//           onChange={handleChange}
//           placeholder="Full Name"
//           required
//         />
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Title"
//           required
//         />
//         <textarea
//           name="feedback"
//           value={formData.feedback}
//           onChange={handleChange}
//           placeholder="Feedback"
//           required
//         />
//         <input
//           type="number"
//           name="rating"
//           value={formData.rating}
//           onChange={handleChange}
//           placeholder="Rating"
//           required
//         />
        
//         <button type="submit" disabled={loading}>
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//       </form>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// }

// export default FeedbackForm;
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
}

const FeedbackForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    // Simulate a network request or other async operation
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
    console.log("Form Data Submitted:", data);

    // Reset the form and loading state
    reset();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          id="name"
          type="text"
          placeholder="Enter your name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          id="email"
          type="email"
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FeedbackForm;
