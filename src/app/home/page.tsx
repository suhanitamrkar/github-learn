
// import Navbar from '../Componetns/Navbar';
import Navbar from './components/Navbar';
import CardList from './components/Card';
import FeedbackCard from './components/FeedbackCard';
import FeedbackForm from './components/FeedbackForm';
import Form from './components/Form';
// import Form from './components/Form';
import SecondCard from './components/SecondCard';

const HomePage = () => (
  <div className="flex justify-center h-[600px] ">
  {/* <FeedbackCard
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
      /> */}
      {/* <FeedbackForm/> */}
      <Form/>
      {/* <CardList/> */}
      <Navbar/>
      
</div>
);

export default HomePage;

