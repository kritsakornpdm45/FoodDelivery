import React from "react";
import { IStepProps } from "@/interfaces/components/Thirdblog";
import Image from "next/image";

const Workcard = (props: IStepProps) => {
  const { image, title, description } = props;
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg  max-w-xs mx-auto  ">
      <div className=" mb-4 ">
        <Image
          src={image}
          alt={title}
          height={112}
          width={87}
          className="object-contain"
        />
      </div>
      <h3 className="text-md font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Workcard;
