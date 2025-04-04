import React from "react";
import FoodCard from "@/components/Foodcard";
import { foodItems } from "@/utils/Secondblog";

const Secondblog = () => {
  return (
    <div className="container h-[505px] mx-auto px-4 py-20">
     
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-1   ">
          {foodItems.map((item) => (
            <FoodCard
              key={item.id}
              image={item.image}
              title={item.title}
              discountPercentage={item.discountPercentage}
              daysRemaining={item.daysRemaining}
            />
          ))}
        
      </div>
    </div>
  );
};

export default Secondblog;
