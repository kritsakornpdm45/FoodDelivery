import React from 'react';
import Image from 'next/image';
import { IFoodcardProps } from '@/interfaces/components/Foodcard';

// FoodCard component that accepts props
const FoodCard = (props:IFoodcardProps) => {
    const { image, title, discountPercentage, daysRemaining } = props;
  return (
    <div className="relative flex flex-col  overflow-hidden ">
      {/* Image Container */}
      <div className="relative  ">
        <Image
          src={image}
          alt={title}
          width={365}
          height={300}
          
          className="object-cover rounded-2xl "
        />
        {/* Discount Badge */}
        <div className="absolute bottom-0 left-0 bg-[#ffb30f] text-white font-bold py-2 px-4 flex items-center justify-center rounded-tr-2xl rounded-bl-2xl w-35 h-23">
          <span className="text-5xl">{discountPercentage}</span>
          <span className="text-md mt-1 ml-0.5">%<br/>Off</span>
        </div>
      </div>
      
      {/* Text Content Container */}
      <div className="p-3">
        <h3 className="font-bold text-md text-gray-800">{title}</h3>
        <div className="mt-2 bg-[#fceade] text-[#eb7532] w-fit px-4 py-1 rounded-md text-md font-semibold">
          {daysRemaining} days Remaining
        </div>
      </div>
    </div>
  );
};

export default FoodCard;