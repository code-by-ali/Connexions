import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import EnterpriseMacbook from "@/public/assets/enterprise-macbook.svg";

const EnterpriseSolutionsCard = ({ card }) => {
  return (
    <div className="bg-white shadow-[2px_4px_12px_0px_#00000014] px-4 py-6 flex flex-col gap-4 w-full h-[400px] mx-auto max-w-sm">
      <div className="flex flex-col gap-2">
        <p className="text-lg sm:text-xl md:text-2xl text-primary">
          {card?.title ? card?.title : "Macbook"}
        </p>
        <p className="text-sm sm:text-base text-primary">
          {card?.description
            ? card?.description
            : "Powerful and versatile laptop for creative professionals and developers"}
        </p>
      </div>
      <div className="flex items-center justify-center flex-1">
        <Image
          src={card?.img ? card?.img : EnterpriseMacbook}
          height={200}
          width={150}
          alt="img"
          className="max-w-full h-auto object-contain"
        />
      </div>

      <p className="text-sm text-[#A6CE39] flex items-center gap-2 cursor-pointer hover:text-[#8fb32a] transition-colors">
        Learn More{" "}
        <span>
          <MoveRight size={16} />
        </span>
      </p>
    </div>
  );
};

export default EnterpriseSolutionsCard;
