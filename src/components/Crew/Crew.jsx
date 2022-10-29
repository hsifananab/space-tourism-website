import { Carousel } from 'flowbite-react';
import React from 'react';
import { crew } from '../../data/data';

const Crew = () => {
  return (
    <div className="h-full ">
      <Carousel>
        {crew.map((item, index) => (
          <div className="" key={index}>
            <p>{item.position}</p>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Crew;
