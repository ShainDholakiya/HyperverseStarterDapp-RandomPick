import Image from "next/image";

interface CardData {
  url: string;
  closed: boolean;
  selectCard: (id: string) => void;
  id: string;
  className: string;
  disable: boolean;
}

const Card = ({
  url,
  closed = true,
  selectCard,
  id,
  className,
  disable,
}: CardData) => {
  return (
    <div
      className={`w-[150px] h-[125px] text-white text-5xl group transition-all hover:cursor-pointer ${className} px-2`}
      onClick={() => (disable ? null : selectCard(id))}
    >
      <div
        className={`relative w-[100%] h-[100%] transition-all duration-500 ease-in group-active:[transform:rotateY(180deg)] bg-indigo-800 shadow-indigo-800 shadow-lg rounded-[5px] ${
          !closed ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0)] "
        }`}
        style={{ transformStyle: "preserve-3d", perspective: "250px" }}
      >
        {/*front */}
        <div
          className="absolute w-[100%] h-[100%] flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          ?
        </div>
        {/*back */}
        <div
          className="absolute w-[100%] h-[100%] [transform:rotateY(180deg)] flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image src={url} className="rounded-[5px]" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Card;
