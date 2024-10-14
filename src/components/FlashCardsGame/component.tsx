import { useState } from 'react';
import { FLASH_CARDS_MAP } from '../../lib/constants';
import { FlashCardsProps } from './types';
import FlashCard from './components/FlashCard/component';

const FlashCards: React.FC<FlashCardsProps> = ({ type }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flashCardsData = FLASH_CARDS_MAP[type] || [];
  const flashCardToRender = flashCardsData[currentIndex];

  const handleNextCard = () => {
    const newIndex =
      currentIndex + 1 >= flashCardsData.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-between px-6 py-6">
      <span>
        {currentIndex + 1} / {flashCardsData.length}
      </span>
      <ul className="flex h-full w-full flex-col justify-center">
        <FlashCard {...flashCardToRender} />
      </ul>
      <div>
        <button
          onClick={handleNextCard}
          className="cursor-pointer rounded-full bg-white px-4 py-3"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default FlashCards;
