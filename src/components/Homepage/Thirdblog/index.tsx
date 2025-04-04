// components/HowItWorks.tsx
import React from "react";
import Workcard from "@/components/workcard";
import { steps } from "@/utils/Thirdblog";

const Thirdblog = () => {
  return (

    <section className=" bg-gradient-to-b from-[#FFF7E8] to-[#FEFEFE]">
      <div className="container mx-auto max-w-7xl px-4 py-13">

        <div className="text-3xl font-bold text-center mb-12  text-[#f27229]">
          <h2>How does it work</h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {steps.map((step) => (
            <Workcard
              key={step.id}
              image={step.image}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thirdblog;
