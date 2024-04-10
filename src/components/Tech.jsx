import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, otherTechnologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Combine both technologies and otherTechnologies into a single array
  const allTechnologies = [...technologies, ...otherTechnologies];

  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='w-full bg-black-100 p-8 rounded-2xl text-center'>
        <h3 className='text-white font-bold text-2xl mb-4'>Technical Expertise</h3>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {isMobile ? (
          allTechnologies.map((technology) => (
            <div className='w-28 h-28 flex items-center justify-center rounded-full bg-tertiary shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300' key={technology.name}>
              <div className='w-20 h-20 rounded-full bg-primary flex items-center justify-center transform hover:rotate-12 transition-all duration-300'>
                <img className='w-16 h-16' src={technology.icon} alt={technology.name} />
              </div>
            </div>
          ))
        ) : (
          technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        )}
      </div>
      {!isMobile && (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          <div className='w-full bg-black-100 p-8 rounded-2xl text-center'>
            <h3 className='text-white font-bold text-2xl mb-4'>Other Tech Skills</h3>
          </div>
          {otherTechnologies.map((technology) => (
            <div className='w-28 h-28 flex items-center justify-center rounded-full bg-tertiary shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300' key={technology.name}>
              <div className='w-20 h-20 rounded-full bg-primary flex items-center justify-center transform hover:rotate-12 transition-all duration-300'>
                <img className='w-16 h-16' src={technology.icon} alt={technology.name} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
