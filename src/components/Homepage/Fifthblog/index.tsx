import Featcard from "@/components/Featcard";
import React from "react";
import { featureitems } from "@/utils/Fifthblog";

const Fifthblog = () => {
  return (
    <div className=" w-full h-[1440px] ">
      <div className="container mx-auto px-4 py-13">
        <h2 className="text-center text-4xl font-bold mb-15 text-gray-900">
          Featured Restaurants
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 px-3 py-3 gap-y-12">
          {featureitems.map((featureitem) => (
            <Featcard
              key={featureitem.id}
              image={featureitem.image}
              logo={featureitem.logo || ""}
              title={featureitem.title}
              location={featureitem.location}
              status={featureitem.status}
              discount={featureitem.discount}
              starpoint={featureitem.starpoint}
               
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fifthblog;
