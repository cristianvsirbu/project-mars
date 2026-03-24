import React from 'react';
import Celestial from './Celestial';
import { CELESTIAL_DATA } from '../../../lib/constants';
import { useParams } from 'react-router-dom';
import ParallaxCard from '../../ParallaxCard';

const CelestialRouter = () => {
  const { category, subcategory, id } = useParams();
  const selectedCategory = CELESTIAL_DATA[category];

  if (id) {
    return <Celestial id={id} />;
  }

  if (subcategory) {
    const selectedSubcategory = selectedCategory?.children.find(
      (child) => child.subcategory === subcategory
    );

    return (
      <div className="my-12 flex flex-col flex-wrap items-center text-3xl text-center text-white font-semibold md:flex-row md:justify-evenly md:text-4xl lg:text-5xl">
        {selectedSubcategory?.children ? (
          selectedSubcategory?.children.map((item) => (
            <div key={item.id}>
              <ParallaxCard
                link={`/about/${category}/${subcategory}/${item.id}`}
                imgSrc={item.cover}
                title={item.name}
              />
            </div>
          ))
        ) : (
          <Celestial id={subcategory} />
        )}
      </div>
    );
  }

  return (
    <div className="my-12 flex flex-col flex-wrap items-center text-3xl text-center text-white font-semibold md:flex-row md:justify-evenly md:text-4xl lg:text-5xl">
      {selectedCategory?.children ? (
        selectedCategory.children.map((child) => (
          <div key={child.subcategory ? child.subcategory : child.id}>
            <ParallaxCard
              link={`/about/${category}/${child.subcategory ? child.subcategory : child.id}`}
              imgSrc={child.cover}
              title={child.name}
            />
          </div>
        ))
      ) : (
        <Celestial id={category} />
      )}
    </div>
  );
};

export default CelestialRouter;
