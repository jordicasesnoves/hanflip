import { useRef, useState } from 'react';
import { FlashCardType } from '@lib/types';

const FlashCard: React.FC<FlashCardType> = ({ hangul, romanization }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    if (cardRef.current) {
      if (isFlipped) {
        cardRef.current.style.transform = 'rotateY(0deg)';
        setIsFlipped(false);
      } else {
        cardRef.current.style.transform = 'rotateY(180deg)';
        setIsFlipped(true);
      }
    }
  };

  return (
    <li
      onClick={handleCardClick}
      className="group h-full max-h-[440px] w-full [perspective:1200px]"
    >
      <div
        ref={cardRef}
        className="relative h-full w-full place-items-center justify-center transition-all duration-500 [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl bg-white [backface-visibility:hidden]">
          <span className="select-none text-6xl">{hangul}</span>
        </div>
        <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl bg-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="select-none text-4xl">{romanization}</span>
        </div>
      </div>
    </li>
  );
};

export default FlashCard;
