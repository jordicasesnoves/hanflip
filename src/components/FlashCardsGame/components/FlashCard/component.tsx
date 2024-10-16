import { useCallback, useEffect, useState } from 'react';
import { FlashCardProps } from './types';

const FlashCard: React.FC<FlashCardProps> = ({ card: { front, back }, isActive }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const toggleFlipped = useCallback(() => setIsFlipped((prev) => !prev), [setIsFlipped]);

  const handleCardClick = () => toggleFlipped();

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === ' ' && isActive) toggleFlipped();
    },
    [toggleFlipped, isActive]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (!isActive && isFlipped) setIsFlipped(false);
  }, [isActive, isFlipped]);

  return (
    <li
      role="button"
      onClick={handleCardClick}
      className="h-full w-full cursor-default self-center [perspective:1200px] lg:cursor-pointer"
    >
      <div
        className={`relative h-full w-full items-center justify-center transition-all duration-500
          [transform-style:preserve-3d]
          ${isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}`}
      >
        <div
          className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl border
            bg-white [backface-visibility:hidden]"
        >
          <span className={`text-6xl ${!isActive && 'opacity-0'}`}>{front}</span>
        </div>
        <div
          className="absolute inset-0 flex h-full w-full items-center justify-center rounded-2xl border
            bg-white [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <span className={`text-4xl ${!isActive && 'opacity-0'}`}>{back}</span>
        </div>
      </div>
    </li>
  );
};

export default FlashCard;
