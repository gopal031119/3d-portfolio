import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-col items-center gap-10 text-center'>
      <div className='w-full bg-black-100 p-8 rounded-2xl'>
        <h3 className='text-white font-bold text-2xl mb-4'>My Expertise</h3>
        {/* Add your expertise-related content here */}
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
