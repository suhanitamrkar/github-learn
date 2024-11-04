"use client";
// components/ContactForm.tsx

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" {...register("subject")} />
        {errors.subject && <p>{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message")}></textarea>
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <button type="submit">Send</button>
    </form>
  );
}
