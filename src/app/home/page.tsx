import FeedbackCard from './components/FeedbackCard';
import SecondCard from './components/SecondCard';

const HomePage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <FeedbackCard
    userImage="/path/to/user-image.jpg" // replace with actual image path
    userName="John Doe"
    title="Software Engineer"
    description="This is an amazing platform! The features are fantastic, and I really enjoyed the experience."
    initialRating={4}
  />
  <SecondCard
        name="John Doe"
        title="Senior Developer"
        description="The service was exceptional, and the delivery was fast. Highly recommended!"
        initialRating={4}
      />
      
</div>
);

export default HomePage;

