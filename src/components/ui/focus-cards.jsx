import React, { useState, useEffect, useCallback } from "react";
import { cn } from "../../utils/cn";

export const Card = React.memo(({ card, index, hovered, setHovered, onClick }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    onClick={() => onClick(index)}
    className={cn(
      "md:rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden cursor-pointer",
      "h-96 md:h-[34rem] w-full transition-transform duration-300 ease-out",
      hovered === index && "scale-105"
    )}
  >
    <img
      src={card.img}
      alt={`Imagen ${card.index}`}
      className="object-cover absolute inset-0 w-full h-full"
    />
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards, texto }) {
  const [hovered, setHovered] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(0);

  const handleClose = useCallback(() => setSelectedIndex(null), []);
  const handleNext = () => setSelectedIndex((i) => (i + 1) % cards.length);
  const handlePrev = () => setSelectedIndex((i) => (i - 1 + cards.length) % cards.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose]);

  return (
    <div>
      <h2 className="text-center text-4xl pt-32 font-thin tracking-widest">
        {texto}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 max-w-5xl mx-auto md:px-8 w-full mt-10">
        {cards.map((card, index) => (
          <Card
            key={card.index}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onClick={setSelectedIndex}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const diff = e.changedTouches[0].clientX - touchStart;
            if (diff > 50) handlePrev();
            if (diff < -50) handleNext();
          }}
        >
          <img
            src={cards[selectedIndex].img}
            alt={`Imagen ampliada ${selectedIndex}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
          <div className="absolute bottom-5 text-white text-lg bg-black bg-opacity-40 px-4 py-1 rounded-full">
            {selectedIndex + 1} / {cards.length}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="hidden md:block absolute left-5 text-white text-4xl select-none"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="hidden md:block absolute right-5 text-white text-4xl select-none"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}