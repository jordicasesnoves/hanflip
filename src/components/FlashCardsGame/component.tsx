import { useState } from 'react';
import { FLASH_CARDS_MAP } from '../../lib/constants';
import { FlashCardsProps } from './types';
import FlashCard from './components/FlashCard/component';
import LeftIcon from '@assets/left-icon.svg';
import RightIcon from '@assets/right-icon.svg';
import ShuffleIcon from '@assets/shuffle-icon.svg';
import Icon from '@components/Icon';

const FlashCards: React.FC<FlashCardsProps> = ({ type }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [flashCardsData, setFlashCardsData] = useState(
    FLASH_CARDS_MAP[type] || []
  );
  const flashCardToRender = flashCardsData[currentIndex];

  const handleNextCard = () => {
    const newIndex =
      currentIndex + 1 >= flashCardsData.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePrevCard = () => {
    const newIndex =
      currentIndex === 0 ? flashCardsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleShuffle = () => {
    const array = flashCardsData;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setFlashCardsData([...array]);
    setCurrentIndex(0);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-between px-6 py-6">
      <span>
        {currentIndex + 1} / {flashCardsData.length}
      </span>
      <ul className="flex h-full w-full flex-col justify-center">
        <FlashCard {...flashCardToRender} />
      </ul>
      <div className="flex gap-12">
        <button
          onClick={handlePrevCard}
          className="cursor-default rounded-full bg-white p-4 lg:cursor-pointer"
        >
          <Icon>
            <LeftIcon />
          </Icon>
        </button>
        <button
          onClick={handleShuffle}
          className="cursor-default rounded-full bg-white px-4 py-3 lg:cursor-pointer"
        >
          <Icon>
            <ShuffleIcon />
          </Icon>
        </button>
        <button
          onClick={handleNextCard}
          className="cursor-default rounded-full bg-white px-4 py-3 lg:cursor-pointer"
        >
          <Icon>
            <RightIcon />
          </Icon>
        </button>
      </div>
    </div>
  );
};

export default FlashCards;
