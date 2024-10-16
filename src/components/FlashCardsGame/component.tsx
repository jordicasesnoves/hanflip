import { useCallback, useEffect, useState } from 'react';
import { FLASH_CARDS_MAP } from '../../lib/constants';
import { FlashCardsProps } from './types';
import FlashCard from './components/FlashCard/component';
import LeftIcon from '@assets/left-icon.svg';
import RightIcon from '@assets/right-icon.svg';
import ShuffleIcon from '@assets/shuffle-icon.svg';
import Icon from '@components/Icon';
import { motion } from 'framer-motion';
import NavigationButton from './components/NavigationButton';

const FlashCards: React.FC<FlashCardsProps> = ({ type }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [flashCardsData, setFlashCardsData] = useState(FLASH_CARDS_MAP[type] || []);

  const isPrevDisabled = currentIndex === 0;

  const handleNextCard = useCallback(() => {
    const isLastCard = currentIndex + 1 === flashCardsData.length;
    if (isLastCard) {
      // TO-DO: navigate to results page
      return;
    }
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, flashCardsData]);

  const handlePrevCard = useCallback(() => {
    if (isPrevDisabled) return;
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, isPrevDisabled]);

  const handleShuffle = () => {
    const array = flashCardsData;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setFlashCardsData([...array]);
    setCurrentIndex(0);
  };

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevCard();
      }
      if (e.key === 'ArrowRight') {
        handleNextCard();
      }
    },
    [handleNextCard, handlePrevCard]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const progressPercentage = ((currentIndex + 1) / flashCardsData.length) * 100;

  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <div className="relative flex w-full justify-center bg-white py-4">
        <span>
          {currentIndex + 1} / {flashCardsData.length}
        </span>
        <motion.div
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
          className="z-1 absolute bottom-0 left-0 h-[2px] bg-sky-600"
        />
      </div>
      <div className="h-full max-h-[440px] w-full max-w-[440px] self-center px-6 py-6">
        <ul className="relative flex h-full w-full flex-col justify-center">
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
              const distance = 100;
              if (isPrevCard) return distance;
              if (isCardActive) return 0;
              if (isNextCard) return -distance;
              return 0;
            };
            const opacity = () => {
              if (isCardActive) return 1;
              if (isPrevCard || isNextCard) return 0;
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
                transition={{ duration: 0.3 }}
                className={`absolute left-0 top-0 h-full w-full ${isCardActive ? 'z-10' : 'pointer-events-none z-0'}`}
              >
                <FlashCard card={flashCard} isActive={isCardActive} />
              </motion.div>
            );
          })}
        </ul>
      </div>
      <div className="flex w-full max-w-[440px] justify-between gap-12 px-6 py-6">
        <NavigationButton onClick={handlePrevCard} disabled={isPrevDisabled}>
          <Icon>
            <LeftIcon />
          </Icon>
        </NavigationButton>
        <NavigationButton onClick={handleShuffle}>
          <Icon>
            <ShuffleIcon />
          </Icon>
        </NavigationButton>
        <NavigationButton onClick={handleNextCard}>
          <Icon>
            <RightIcon />
          </Icon>
        </NavigationButton>
      </div>
    </div>
  );
};

export default FlashCards;
