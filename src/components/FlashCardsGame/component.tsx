import { useState } from 'react';
import { FLASH_CARDS_MAP } from '../../lib/constants';
import { FlashCardsProps } from './types';
import FlashCard from './components/FlashCard/component';
import LeftIcon from '@assets/left-icon.svg';
import RightIcon from '@assets/right-icon.svg';
import ShuffleIcon from '@assets/shuffle-icon.svg';
import Icon from '@components/Icon';
import { motion } from 'framer-motion';

const FlashCards: React.FC<FlashCardsProps> = ({ type }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [flashCardsData, setFlashCardsData] = useState(
    FLASH_CARDS_MAP[type] || []
  );

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
      <ul className="relative flex h-full max-h-[440px] w-full max-w-[440px] flex-col justify-center">
        {flashCardsData.map((flashCard, index) => {
          const isCardActive = currentIndex === index;
          const isPrevCard =
            currentIndex === 0
              ? index === flashCardsData.length - 1
              : index === currentIndex - 1;
          const isNextCard =
            currentIndex === flashCardsData.length - 1
              ? index === 0
              : index === currentIndex + 1;
          const x = () => {
            const distance = 50;
            if (isPrevCard) return distance;
            if (isCardActive) return 0;
            if (isNextCard) return -distance;
            return 0;
          };
          const opacity = () => {
            if (isCardActive) return 1;
            if (isPrevCard || isNextCard) return 0.5;
            return 0;
          };
          return (
            <motion.div
              key={flashCard.front}
              animate={{
                opacity: opacity(),
                x: x(),
                scale: isCardActive ? 1 : 0.9,
              }}
              transition={{ duration: 0.6 }}
              className={`absolute left-0 top-0 h-full w-full ${isCardActive ? 'z-10' : 'pointer-events-none z-0'}`}
            >
              <FlashCard card={flashCard} isActive={isCardActive} />
            </motion.div>
          );
        })}
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
