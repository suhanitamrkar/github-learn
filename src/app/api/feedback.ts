// pages/api/feedback.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface FeedbackData {
  fullname: string;
  title: string;
  feedback: string;
  rating: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const feedback: FeedbackData = req.body;
    // Here, you could add logic to save feedback to a database
    console.log('Received feedback:', feedback);
    res.status(200).json({ message: 'Feedback received!' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
