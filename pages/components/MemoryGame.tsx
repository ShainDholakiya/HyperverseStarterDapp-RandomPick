import Card from "./Card";
import { useEffect, useState } from "react";
import cardsData from "../data";

const MemoryGame = () => {
  const [cards, setCards] = useState<
    Array<{ id: string; url: string; closed: boolean; eliminated: boolean }>
  >([]);
  const [selection, setSelection] = useState<
    Array<{ url: string; index: number; id: string }>
  >([]);
  const [score, setScore] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (cards.length === 0) {
      const shuffledCardsData = cardsData.sort(() => 0.5 - Math.random());
      setCards(shuffledCardsData);
    }
  }, [cards]);

  const selectCard = (id: string) => {
    const index = cards.findIndex((el) => el.id === id);
    const newCards = [...cards];
    newCards[index] = { ...newCards[index], closed: !newCards[index].closed };
    let newSelection = [...selection];
    if (newSelection.length === 0) {
      newSelection.push({ url: newCards[index].url, index, id });
    } else if (newSelection.length === 1) {
      newSelection.push({ url: newCards[index].url, index, id });
      if (id === newSelection[0].id) {
        newCards[index].closed = true;
        newSelection = [];
        setSelection(newSelection);
        setCards(newCards);

        return;
      }
      if (newSelection[0].url != newSelection[1].url) {
        waitToFlip(newSelection, false);
      } else {
        waitToFlip(newSelection, true);
      }
      newSelection = [];
    }

    setSelection(newSelection);
    setCards(newCards);
  };

  const waitToFlip = (
    newSelection: Array<{
      url: string;
      index: number;
      id: string;
    }>,
    isRight: boolean
  ) => {
    const newCards = [...cards];
    setDisable(true);
    if (isRight) {
      setTimeout(function () {
        newCards[newSelection[0].index].eliminated = true;
        newCards[newSelection[1].index].eliminated = true;
        setCards(newCards);
        setSelection([]);
        setDisable(false);
      }, 1000);
    } else {
      setTimeout(function () {
        newCards[newSelection[0].index].closed = true;
        newCards[newSelection[1].index].closed = true;
        setCards(newCards);
        setDisable(false);
      }, 1000);
    }
    setScore(score + 1);
  };

  return (
    <>
      <div className="relative w-full p-4 rounded-[3px]  bg-indigo-300 grid grid-cols-4 place-items-center gap-y-4 gap-x-4">
        <div className="absolute top-0 text-white text-3xl px-2 py-2 translate-y-[-100%] ">
          Score: {score}
        </div>
        {cards.map(({ url, id, closed, eliminated }) => {
          return (
            <Card
              key={id}
              id={id}
              url={url}
              closed={closed}
              selectCard={selectCard}
              className={`${
                eliminated ? "scale-0" : "scale-100 duration-[1500] ease-in"
              }`}
              disable={disable}
            />
          );
        })}
      </div>
    </>
  );
};

export default MemoryGame;
