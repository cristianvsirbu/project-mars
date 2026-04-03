import Celestial from './Celestial';
import { CELESTIAL_DATA } from '../../lib/constants';
import { useParams } from 'react-router-dom';
import ParallaxCard from '../ui/ParallaxCard';
import ErrorPage from '../routes/ErrorPage';

const CelestialRouter = () => {
  const { category, subcategory, id } = useParams();
  const selectedCategory = CELESTIAL_DATA[category as keyof typeof CELESTIAL_DATA];
  if (
    !category ||
    !Object.hasOwn(CELESTIAL_DATA, category) ||
    (subcategory && !Object.hasOwn(selectedCategory, 'children'))
  ) {
    return <ErrorPage />;
  }

  if (id) {
    return <Celestial id={id} />;
  }

  if (subcategory && 'children' in selectedCategory) {
    const selectedSubcategory = selectedCategory.children.find(
      (child) => 'subcategory' in child && child.subcategory === subcategory
    );

    if (selectedSubcategory && 'children' in selectedSubcategory) {
      return (
        <>
          <p className="my-10 leading-none font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center blink__word select-none">
            {selectedSubcategory.name}
          </p>
          <div className="my-12 flex flex-col flex-wrap items-center text-3xl text-center text-white font-semibold md:flex-row md:justify-evenly md:text-4xl lg:text-5xl">
            {selectedSubcategory.children.map((item) => (
              <div key={item.id}>
                <ParallaxCard
                  link={`/about/${category}/${subcategory}/${item.id}`}
                  imgSrc={item.cover}
                  title={item.name}
                />
              </div>
            ))}
          </div>
        </>
      );
    }

    return <Celestial id={subcategory} />;
  }

  if ('children' in selectedCategory) {
    return (
      <>
        <p className="my-10 leading-none font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center blink__word select-none">
          {selectedCategory.name}
        </p>
        <div className="my-12 flex flex-col flex-wrap items-center text-3xl text-center text-white font-semibold md:flex-row md:justify-evenly md:text-4xl lg:text-5xl">
          {selectedCategory.children.map((child) => {
            const linkSegment = 'id' in child ? child.id : child.subcategory;
            return (
              <div key={linkSegment}>
                <ParallaxCard
                  link={`/about/${category}/${linkSegment}`}
                  imgSrc={child.cover}
                  title={child.name}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
  return <Celestial id={category} />;
};

export default CelestialRouter;
