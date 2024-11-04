// pages/index.tsx
// pages/index.tsx

import Carousel from "./components/Carousal";
import New from "./components/New";


const cardsData = [
  { id: 1, title: 'Card 1', content: 'This is the content of card 1' },
  { id: 2, title: 'Card 2', content: 'This is the content of card 2' },
  { id: 3, title: 'Card 3', content: 'This is the content of card 3' },
  { id: 4, title: 'Card 4', content: 'This is the content of card 4' },
  { id: 1, title: 'Card 1', content: 'This is the content of card 1' },
  { id: 2, title: 'Card 2', content: 'This is the content of card 2' },
  { id: 3, title: 'Card 3', content: 'This is the content of card 3' },
  { id: 4, title: 'Card 4', content: 'This is the content of card 4' },
  { id: 1, title: 'Card 1', content: 'This is the content of card 1' },
  { id: 2, title: 'Card 2', content: 'This is the content of card 2' },
  { id: 3, title: 'Card 3', content: 'This is the content of card 3' },
  { id: 4, title: 'Card 4', content: 'This is the content of card 4' },
];

export default function HomePage() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8">Carousel Demo</h1>
        <Carousel cards={cardsData} />
      </div>
    </div>
        <New/>
    </>
  );
}
