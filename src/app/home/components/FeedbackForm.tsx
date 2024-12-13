"use client"
import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import InputField from "./Inout";

interface FeedbackFormData {
  fullName: string;
  title: string;
  comment: string;
  rating: number;
}

const FeedbackForm: React.FC = () => {
  const methods = useForm<FeedbackFormData>();

  const onSubmit: SubmitHandler<FeedbackFormData> = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-5"
      >
        <InputField
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          validation={{
            required: "Full name is required",
            minLength: { value: 3, message: "Minimum length is 3 characters" },
          }}
        />

        <InputField
          label="Title"
          name="title"
          placeholder="Enter a title for your feedback"
          validation={{ required: "Title is required" }}
        />

        <InputField
          label="Feedback"
          name="comment"
          placeholder="Enter your feedback"
          validation={{
            required: "Feedback is required",
            minLength: {
              value: 10,
              message: "Minimum length is 10 characters",
            },
          }}
        />

        <InputField
          label="Rating"
          name="rating"
          placeholder="Enter rating from 1 to 5"
          validation={{
            required: "Rating is required",
            min: { value: 1, message: "Minimum rating is 1" },
            max: { value: 5, message: "Maximum rating is 5" },
          }}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default FeedbackForm;
