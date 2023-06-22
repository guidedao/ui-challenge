import Image from "next/image";
import CardPlaceholder from "./assets/CardPlaceholder.png";

export const Card = () => {
  return (
    <>
      <div className="w-[256px]">
        <Image
          height={256}
          width={256}
          src={CardPlaceholder}
          alt="Card image"
        />
        <div className="text-[15px] pt-3 leading-[20px] text-day-1000 flex justify-between">
          <div>Smirc #1071</div>
          <div>
            0.015<span className="text-day-350 pl-2">ETH</span>
          </div>
        </div>
      </div>
    </>
  );
};
