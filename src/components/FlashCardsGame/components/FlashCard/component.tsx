import { useState } from 'react';
import { FlashCardType } from '@lib/types';

const FlashCard: React.FC<FlashCardType> = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleCardClick = () => setIsFlipped((prev) => !prev);

  return (
    <li
      role="button"
      onClick={handleCardClick}
      className="group h-full max-h-[440px] w-full max-w-[440px] cursor-default self-center [perspective:1200px] lg:cursor-pointer"
    >
      <div
        className={`relative h-full w-full items-center justify-center transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? `[transform:rotateY(180deg)]` : `[transform:rotateY(0deg)]`}`}
      >
        <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl bg-white [backface-visibility:hidden]">
          <span className="text-6xl">{front}</span>
        </div>
        <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl bg-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-4xl">{back}</span>
        </div>
      </div>
    </li>
  );
};

export default FlashCard;
